import "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    uid?: string;
  }
  interface Session {
    user: User & {
      role?: string;
      uid?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    uid?: string;
  }
}
