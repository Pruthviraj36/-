import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" }, // "admin" | "faculty" | "student"
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !credentials?.role) return null;
        const role = credentials.role as "admin" | "faculty" | "student";

        if (role === "student") {
          const student = await prisma.student.findFirst({ where: { Email: credentials.email } });
          if (!student) return null;
          const ok = await bcrypt.compare(credentials.password, student.Password);
          if (!ok) return null;
          return {
            id: String(student.StudentID),
            email: student.Email,
            name: student.StudentName,
            role: "student",
            image: null,
          };
        }

        // Admin or Faculty -> Staff
        const staff = await prisma.staff.findFirst({ where: { Email: credentials.email } });
        if (!staff) return null;
        const ok = await bcrypt.compare(credentials.password, staff.Password);
        if (!ok) return null;
        const sessionRole = staff.Role === "Admin" ? "admin" : "faculty";
        if (role !== sessionRole) return null;
        return {
          id: String(staff.StaffID),
          email: staff.Email,
          name: staff.StaffName,
          role: sessionRole,
          image: null,
        };
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.uid = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { uid?: string }).uid = token.uid as string;
      }
      return session;
    },
  },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
