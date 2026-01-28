
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ProjectType
 * 
 */
export type ProjectType = $Result.DefaultSelection<Prisma.$ProjectTypePayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model AcademicYear
 * 
 */
export type AcademicYear = $Result.DefaultSelection<Prisma.$AcademicYearPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model ProjectGroup
 * 
 */
export type ProjectGroup = $Result.DefaultSelection<Prisma.$ProjectGroupPayload>
/**
 * Model ProjectGroupMember
 * 
 */
export type ProjectGroupMember = $Result.DefaultSelection<Prisma.$ProjectGroupMemberPayload>
/**
 * Model ProjectMeeting
 * 
 */
export type ProjectMeeting = $Result.DefaultSelection<Prisma.$ProjectMeetingPayload>
/**
 * Model ProjectMeetingAttendance
 * 
 */
export type ProjectMeetingAttendance = $Result.DefaultSelection<Prisma.$ProjectMeetingAttendancePayload>
/**
 * Model ProjectDocument
 * 
 */
export type ProjectDocument = $Result.DefaultSelection<Prisma.$ProjectDocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StaffRole: {
  Admin: 'Admin',
  Faculty: 'Faculty'
};

export type StaffRole = (typeof StaffRole)[keyof typeof StaffRole]


export const ProjectGroupStatus: {
  Draft: 'Draft',
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected'
};

export type ProjectGroupStatus = (typeof ProjectGroupStatus)[keyof typeof ProjectGroupStatus]


export const MeetingStatus: {
  Scheduled: 'Scheduled',
  Completed: 'Completed',
  Cancelled: 'Cancelled',
  NoShow: 'NoShow'
};

export type MeetingStatus = (typeof MeetingStatus)[keyof typeof MeetingStatus]


export const DocumentType: {
  Proposal: 'Proposal',
  Report: 'Report',
  Other: 'Other'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]

}

export type StaffRole = $Enums.StaffRole

export const StaffRole: typeof $Enums.StaffRole

export type ProjectGroupStatus = $Enums.ProjectGroupStatus

export const ProjectGroupStatus: typeof $Enums.ProjectGroupStatus

export type MeetingStatus = $Enums.MeetingStatus

export const MeetingStatus: typeof $Enums.MeetingStatus

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ProjectTypes
 * const projectTypes = await prisma.projectType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ProjectTypes
   * const projectTypes = await prisma.projectType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.projectType`: Exposes CRUD operations for the **ProjectType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectTypes
    * const projectTypes = await prisma.projectType.findMany()
    * ```
    */
  get projectType(): Prisma.ProjectTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicYear`: Exposes CRUD operations for the **AcademicYear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicYears
    * const academicYears = await prisma.academicYear.findMany()
    * ```
    */
  get academicYear(): Prisma.AcademicYearDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectGroup`: Exposes CRUD operations for the **ProjectGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectGroups
    * const projectGroups = await prisma.projectGroup.findMany()
    * ```
    */
  get projectGroup(): Prisma.ProjectGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectGroupMember`: Exposes CRUD operations for the **ProjectGroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectGroupMembers
    * const projectGroupMembers = await prisma.projectGroupMember.findMany()
    * ```
    */
  get projectGroupMember(): Prisma.ProjectGroupMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMeeting`: Exposes CRUD operations for the **ProjectMeeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMeetings
    * const projectMeetings = await prisma.projectMeeting.findMany()
    * ```
    */
  get projectMeeting(): Prisma.ProjectMeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectMeetingAttendance`: Exposes CRUD operations for the **ProjectMeetingAttendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMeetingAttendances
    * const projectMeetingAttendances = await prisma.projectMeetingAttendance.findMany()
    * ```
    */
  get projectMeetingAttendance(): Prisma.ProjectMeetingAttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectDocument`: Exposes CRUD operations for the **ProjectDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectDocuments
    * const projectDocuments = await prisma.projectDocument.findMany()
    * ```
    */
  get projectDocument(): Prisma.ProjectDocumentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ProjectType: 'ProjectType',
    Staff: 'Staff',
    AcademicYear: 'AcademicYear',
    Department: 'Department',
    Student: 'Student',
    ProjectGroup: 'ProjectGroup',
    ProjectGroupMember: 'ProjectGroupMember',
    ProjectMeeting: 'ProjectMeeting',
    ProjectMeetingAttendance: 'ProjectMeetingAttendance',
    ProjectDocument: 'ProjectDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "projectType" | "staff" | "academicYear" | "department" | "student" | "projectGroup" | "projectGroupMember" | "projectMeeting" | "projectMeetingAttendance" | "projectDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ProjectType: {
        payload: Prisma.$ProjectTypePayload<ExtArgs>
        fields: Prisma.ProjectTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          findFirst: {
            args: Prisma.ProjectTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          findMany: {
            args: Prisma.ProjectTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>[]
          }
          create: {
            args: Prisma.ProjectTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          createMany: {
            args: Prisma.ProjectTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          update: {
            args: Prisma.ProjectTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          deleteMany: {
            args: Prisma.ProjectTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectTypePayload>
          }
          aggregate: {
            args: Prisma.ProjectTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectType>
          }
          groupBy: {
            args: Prisma.ProjectTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectTypeCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectTypeCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      AcademicYear: {
        payload: Prisma.$AcademicYearPayload<ExtArgs>
        fields: Prisma.AcademicYearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicYearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicYearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          findFirst: {
            args: Prisma.AcademicYearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicYearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          findMany: {
            args: Prisma.AcademicYearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>[]
          }
          create: {
            args: Prisma.AcademicYearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          createMany: {
            args: Prisma.AcademicYearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AcademicYearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          update: {
            args: Prisma.AcademicYearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          deleteMany: {
            args: Prisma.AcademicYearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicYearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcademicYearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          aggregate: {
            args: Prisma.AcademicYearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicYear>
          }
          groupBy: {
            args: Prisma.AcademicYearGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicYearGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicYearCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicYearCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      ProjectGroup: {
        payload: Prisma.$ProjectGroupPayload<ExtArgs>
        fields: Prisma.ProjectGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>
          }
          findFirst: {
            args: Prisma.ProjectGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>
          }
          findMany: {
            args: Prisma.ProjectGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>[]
          }
          create: {
            args: Prisma.ProjectGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>
          }
          createMany: {
            args: Prisma.ProjectGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>
          }
          update: {
            args: Prisma.ProjectGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>
          }
          deleteMany: {
            args: Prisma.ProjectGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupPayload>
          }
          aggregate: {
            args: Prisma.ProjectGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectGroup>
          }
          groupBy: {
            args: Prisma.ProjectGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectGroupCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupCountAggregateOutputType> | number
          }
        }
      }
      ProjectGroupMember: {
        payload: Prisma.$ProjectGroupMemberPayload<ExtArgs>
        fields: Prisma.ProjectGroupMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectGroupMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectGroupMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectGroupMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectGroupMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectGroupMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectGroupMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectGroupMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectGroupMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>
          }
          update: {
            args: Prisma.ProjectGroupMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectGroupMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectGroupMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectGroupMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectGroupMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectGroupMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectGroupMember>
          }
          groupBy: {
            args: Prisma.ProjectGroupMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectGroupMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupMemberCountAggregateOutputType> | number
          }
        }
      }
      ProjectMeeting: {
        payload: Prisma.$ProjectMeetingPayload<ExtArgs>
        fields: Prisma.ProjectMeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>
          }
          findFirst: {
            args: Prisma.ProjectMeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>
          }
          findMany: {
            args: Prisma.ProjectMeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>[]
          }
          create: {
            args: Prisma.ProjectMeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>
          }
          createMany: {
            args: Prisma.ProjectMeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectMeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>
          }
          update: {
            args: Prisma.ProjectMeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingPayload>
          }
          aggregate: {
            args: Prisma.ProjectMeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMeeting>
          }
          groupBy: {
            args: Prisma.ProjectMeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMeetingCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMeetingCountAggregateOutputType> | number
          }
        }
      }
      ProjectMeetingAttendance: {
        payload: Prisma.$ProjectMeetingAttendancePayload<ExtArgs>
        fields: Prisma.ProjectMeetingAttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMeetingAttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMeetingAttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>
          }
          findFirst: {
            args: Prisma.ProjectMeetingAttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMeetingAttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>
          }
          findMany: {
            args: Prisma.ProjectMeetingAttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>[]
          }
          create: {
            args: Prisma.ProjectMeetingAttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>
          }
          createMany: {
            args: Prisma.ProjectMeetingAttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectMeetingAttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>
          }
          update: {
            args: Prisma.ProjectMeetingAttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>
          }
          deleteMany: {
            args: Prisma.ProjectMeetingAttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMeetingAttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMeetingAttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMeetingAttendancePayload>
          }
          aggregate: {
            args: Prisma.ProjectMeetingAttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMeetingAttendance>
          }
          groupBy: {
            args: Prisma.ProjectMeetingAttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMeetingAttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMeetingAttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMeetingAttendanceCountAggregateOutputType> | number
          }
        }
      }
      ProjectDocument: {
        payload: Prisma.$ProjectDocumentPayload<ExtArgs>
        fields: Prisma.ProjectDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          findFirst: {
            args: Prisma.ProjectDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          findMany: {
            args: Prisma.ProjectDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>[]
          }
          create: {
            args: Prisma.ProjectDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          createMany: {
            args: Prisma.ProjectDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProjectDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          update: {
            args: Prisma.ProjectDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectDocumentPayload>
          }
          aggregate: {
            args: Prisma.ProjectDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectDocument>
          }
          groupBy: {
            args: Prisma.ProjectDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectDocumentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    projectType?: ProjectTypeOmit
    staff?: StaffOmit
    academicYear?: AcademicYearOmit
    department?: DepartmentOmit
    student?: StudentOmit
    projectGroup?: ProjectGroupOmit
    projectGroupMember?: ProjectGroupMemberOmit
    projectMeeting?: ProjectMeetingOmit
    projectMeetingAttendance?: ProjectMeetingAttendanceOmit
    projectDocument?: ProjectDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProjectTypeCountOutputType
   */

  export type ProjectTypeCountOutputType = {
    projectGroups: number
  }

  export type ProjectTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectGroups?: boolean | ProjectTypeCountOutputTypeCountProjectGroupsArgs
  }

  // Custom InputTypes
  /**
   * ProjectTypeCountOutputType without action
   */
  export type ProjectTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectTypeCountOutputType
     */
    select?: ProjectTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectTypeCountOutputType without action
   */
  export type ProjectTypeCountOutputTypeCountProjectGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    guidedGroups: number
    guidedMeetings: number
    convenedGroups: number
    expertGroups: number
    projectDocuments: number
    meetingStatusBy: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guidedGroups?: boolean | StaffCountOutputTypeCountGuidedGroupsArgs
    guidedMeetings?: boolean | StaffCountOutputTypeCountGuidedMeetingsArgs
    convenedGroups?: boolean | StaffCountOutputTypeCountConvenedGroupsArgs
    expertGroups?: boolean | StaffCountOutputTypeCountExpertGroupsArgs
    projectDocuments?: boolean | StaffCountOutputTypeCountProjectDocumentsArgs
    meetingStatusBy?: boolean | StaffCountOutputTypeCountMeetingStatusByArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountGuidedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountGuidedMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountConvenedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountExpertGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountProjectDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountMeetingStatusByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingWhereInput
  }


  /**
   * Count Type AcademicYearCountOutputType
   */

  export type AcademicYearCountOutputType = {
    departments: number
    projectGroups: number
    students: number
  }

  export type AcademicYearCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | AcademicYearCountOutputTypeCountDepartmentsArgs
    projectGroups?: boolean | AcademicYearCountOutputTypeCountProjectGroupsArgs
    students?: boolean | AcademicYearCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * AcademicYearCountOutputType without action
   */
  export type AcademicYearCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYearCountOutputType
     */
    select?: AcademicYearCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcademicYearCountOutputType without action
   */
  export type AcademicYearCountOutputTypeCountDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * AcademicYearCountOutputType without action
   */
  export type AcademicYearCountOutputTypeCountProjectGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupWhereInput
  }

  /**
   * AcademicYearCountOutputType without action
   */
  export type AcademicYearCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    students: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | DepartmentCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    groupMembers: number
    attendances: number
    documents: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groupMembers?: boolean | StudentCountOutputTypeCountGroupMembersArgs
    attendances?: boolean | StudentCountOutputTypeCountAttendancesArgs
    documents?: boolean | StudentCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountGroupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupMemberWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingAttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
  }


  /**
   * Count Type ProjectGroupCountOutputType
   */

  export type ProjectGroupCountOutputType = {
    members: number
    meetings: number
    documents: number
  }

  export type ProjectGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ProjectGroupCountOutputTypeCountMembersArgs
    meetings?: boolean | ProjectGroupCountOutputTypeCountMeetingsArgs
    documents?: boolean | ProjectGroupCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectGroupCountOutputType without action
   */
  export type ProjectGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupCountOutputType
     */
    select?: ProjectGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectGroupCountOutputType without action
   */
  export type ProjectGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupMemberWhereInput
  }

  /**
   * ProjectGroupCountOutputType without action
   */
  export type ProjectGroupCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingWhereInput
  }

  /**
   * ProjectGroupCountOutputType without action
   */
  export type ProjectGroupCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
  }


  /**
   * Count Type ProjectMeetingCountOutputType
   */

  export type ProjectMeetingCountOutputType = {
    attendances: number
  }

  export type ProjectMeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ProjectMeetingCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * ProjectMeetingCountOutputType without action
   */
  export type ProjectMeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingCountOutputType
     */
    select?: ProjectMeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectMeetingCountOutputType without action
   */
  export type ProjectMeetingCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingAttendanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ProjectType
   */

  export type AggregateProjectType = {
    _count: ProjectTypeCountAggregateOutputType | null
    _avg: ProjectTypeAvgAggregateOutputType | null
    _sum: ProjectTypeSumAggregateOutputType | null
    _min: ProjectTypeMinAggregateOutputType | null
    _max: ProjectTypeMaxAggregateOutputType | null
  }

  export type ProjectTypeAvgAggregateOutputType = {
    ProjectTypeID: number | null
  }

  export type ProjectTypeSumAggregateOutputType = {
    ProjectTypeID: number | null
  }

  export type ProjectTypeMinAggregateOutputType = {
    ProjectTypeID: number | null
    ProjectTypeName: string | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectTypeMaxAggregateOutputType = {
    ProjectTypeID: number | null
    ProjectTypeName: string | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectTypeCountAggregateOutputType = {
    ProjectTypeID: number
    ProjectTypeName: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type ProjectTypeAvgAggregateInputType = {
    ProjectTypeID?: true
  }

  export type ProjectTypeSumAggregateInputType = {
    ProjectTypeID?: true
  }

  export type ProjectTypeMinAggregateInputType = {
    ProjectTypeID?: true
    ProjectTypeName?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectTypeMaxAggregateInputType = {
    ProjectTypeID?: true
    ProjectTypeName?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectTypeCountAggregateInputType = {
    ProjectTypeID?: true
    ProjectTypeName?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ProjectTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectType to aggregate.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectTypes
    **/
    _count?: true | ProjectTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectTypeMaxAggregateInputType
  }

  export type GetProjectTypeAggregateType<T extends ProjectTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectType[P]>
      : GetScalarType<T[P], AggregateProjectType[P]>
  }




  export type ProjectTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectTypeWhereInput
    orderBy?: ProjectTypeOrderByWithAggregationInput | ProjectTypeOrderByWithAggregationInput[]
    by: ProjectTypeScalarFieldEnum[] | ProjectTypeScalarFieldEnum
    having?: ProjectTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectTypeCountAggregateInputType | true
    _avg?: ProjectTypeAvgAggregateInputType
    _sum?: ProjectTypeSumAggregateInputType
    _min?: ProjectTypeMinAggregateInputType
    _max?: ProjectTypeMaxAggregateInputType
  }

  export type ProjectTypeGroupByOutputType = {
    ProjectTypeID: number
    ProjectTypeName: string
    Description: string | null
    Created: Date
    Modified: Date
    _count: ProjectTypeCountAggregateOutputType | null
    _avg: ProjectTypeAvgAggregateOutputType | null
    _sum: ProjectTypeSumAggregateOutputType | null
    _min: ProjectTypeMinAggregateOutputType | null
    _max: ProjectTypeMaxAggregateOutputType | null
  }

  type GetProjectTypeGroupByPayload<T extends ProjectTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectTypeGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectTypeGroupByOutputType[P]>
        }
      >
    >


  export type ProjectTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectTypeID?: boolean
    ProjectTypeName?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    projectGroups?: boolean | ProjectType$projectGroupsArgs<ExtArgs>
    _count?: boolean | ProjectTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectType"]>



  export type ProjectTypeSelectScalar = {
    ProjectTypeID?: boolean
    ProjectTypeName?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type ProjectTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectTypeID" | "ProjectTypeName" | "Description" | "Created" | "Modified", ExtArgs["result"]["projectType"]>
  export type ProjectTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectGroups?: boolean | ProjectType$projectGroupsArgs<ExtArgs>
    _count?: boolean | ProjectTypeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectType"
    objects: {
      projectGroups: Prisma.$ProjectGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectTypeID: number
      ProjectTypeName: string
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["projectType"]>
    composites: {}
  }

  type ProjectTypeGetPayload<S extends boolean | null | undefined | ProjectTypeDefaultArgs> = $Result.GetResult<Prisma.$ProjectTypePayload, S>

  type ProjectTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectTypeCountAggregateInputType | true
    }

  export interface ProjectTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectType'], meta: { name: 'ProjectType' } }
    /**
     * Find zero or one ProjectType that matches the filter.
     * @param {ProjectTypeFindUniqueArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectTypeFindUniqueArgs>(args: SelectSubset<T, ProjectTypeFindUniqueArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectTypeFindUniqueOrThrowArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeFindFirstArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectTypeFindFirstArgs>(args?: SelectSubset<T, ProjectTypeFindFirstArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeFindFirstOrThrowArgs} args - Arguments to find a ProjectType
     * @example
     * // Get one ProjectType
     * const projectType = await prisma.projectType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectTypes
     * const projectTypes = await prisma.projectType.findMany()
     * 
     * // Get first 10 ProjectTypes
     * const projectTypes = await prisma.projectType.findMany({ take: 10 })
     * 
     * // Only select the `ProjectTypeID`
     * const projectTypeWithProjectTypeIDOnly = await prisma.projectType.findMany({ select: { ProjectTypeID: true } })
     * 
     */
    findMany<T extends ProjectTypeFindManyArgs>(args?: SelectSubset<T, ProjectTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectType.
     * @param {ProjectTypeCreateArgs} args - Arguments to create a ProjectType.
     * @example
     * // Create one ProjectType
     * const ProjectType = await prisma.projectType.create({
     *   data: {
     *     // ... data to create a ProjectType
     *   }
     * })
     * 
     */
    create<T extends ProjectTypeCreateArgs>(args: SelectSubset<T, ProjectTypeCreateArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectTypes.
     * @param {ProjectTypeCreateManyArgs} args - Arguments to create many ProjectTypes.
     * @example
     * // Create many ProjectTypes
     * const projectType = await prisma.projectType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectTypeCreateManyArgs>(args?: SelectSubset<T, ProjectTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectType.
     * @param {ProjectTypeDeleteArgs} args - Arguments to delete one ProjectType.
     * @example
     * // Delete one ProjectType
     * const ProjectType = await prisma.projectType.delete({
     *   where: {
     *     // ... filter to delete one ProjectType
     *   }
     * })
     * 
     */
    delete<T extends ProjectTypeDeleteArgs>(args: SelectSubset<T, ProjectTypeDeleteArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectType.
     * @param {ProjectTypeUpdateArgs} args - Arguments to update one ProjectType.
     * @example
     * // Update one ProjectType
     * const projectType = await prisma.projectType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectTypeUpdateArgs>(args: SelectSubset<T, ProjectTypeUpdateArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectTypes.
     * @param {ProjectTypeDeleteManyArgs} args - Arguments to filter ProjectTypes to delete.
     * @example
     * // Delete a few ProjectTypes
     * const { count } = await prisma.projectType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectTypeDeleteManyArgs>(args?: SelectSubset<T, ProjectTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectTypes
     * const projectType = await prisma.projectType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectTypeUpdateManyArgs>(args: SelectSubset<T, ProjectTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectType.
     * @param {ProjectTypeUpsertArgs} args - Arguments to update or create a ProjectType.
     * @example
     * // Update or create a ProjectType
     * const projectType = await prisma.projectType.upsert({
     *   create: {
     *     // ... data to create a ProjectType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectType we want to update
     *   }
     * })
     */
    upsert<T extends ProjectTypeUpsertArgs>(args: SelectSubset<T, ProjectTypeUpsertArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeCountArgs} args - Arguments to filter ProjectTypes to count.
     * @example
     * // Count the number of ProjectTypes
     * const count = await prisma.projectType.count({
     *   where: {
     *     // ... the filter for the ProjectTypes we want to count
     *   }
     * })
    **/
    count<T extends ProjectTypeCountArgs>(
      args?: Subset<T, ProjectTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectTypeAggregateArgs>(args: Subset<T, ProjectTypeAggregateArgs>): Prisma.PrismaPromise<GetProjectTypeAggregateType<T>>

    /**
     * Group by ProjectType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectTypeGroupByArgs['orderBy'] }
        : { orderBy?: ProjectTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectType model
   */
  readonly fields: ProjectTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectGroups<T extends ProjectType$projectGroupsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectType$projectGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectType model
   */
  interface ProjectTypeFieldRefs {
    readonly ProjectTypeID: FieldRef<"ProjectType", 'Int'>
    readonly ProjectTypeName: FieldRef<"ProjectType", 'String'>
    readonly Description: FieldRef<"ProjectType", 'String'>
    readonly Created: FieldRef<"ProjectType", 'DateTime'>
    readonly Modified: FieldRef<"ProjectType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectType findUnique
   */
  export type ProjectTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType findUniqueOrThrow
   */
  export type ProjectTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType findFirst
   */
  export type ProjectTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTypes.
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTypes.
     */
    distinct?: ProjectTypeScalarFieldEnum | ProjectTypeScalarFieldEnum[]
  }

  /**
   * ProjectType findFirstOrThrow
   */
  export type ProjectTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectType to fetch.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectTypes.
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectTypes.
     */
    distinct?: ProjectTypeScalarFieldEnum | ProjectTypeScalarFieldEnum[]
  }

  /**
   * ProjectType findMany
   */
  export type ProjectTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter, which ProjectTypes to fetch.
     */
    where?: ProjectTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectTypes to fetch.
     */
    orderBy?: ProjectTypeOrderByWithRelationInput | ProjectTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectTypes.
     */
    cursor?: ProjectTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectTypes.
     */
    skip?: number
    distinct?: ProjectTypeScalarFieldEnum | ProjectTypeScalarFieldEnum[]
  }

  /**
   * ProjectType create
   */
  export type ProjectTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectType.
     */
    data: XOR<ProjectTypeCreateInput, ProjectTypeUncheckedCreateInput>
  }

  /**
   * ProjectType createMany
   */
  export type ProjectTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectTypes.
     */
    data: ProjectTypeCreateManyInput | ProjectTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectType update
   */
  export type ProjectTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectType.
     */
    data: XOR<ProjectTypeUpdateInput, ProjectTypeUncheckedUpdateInput>
    /**
     * Choose, which ProjectType to update.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType updateMany
   */
  export type ProjectTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectTypes.
     */
    data: XOR<ProjectTypeUpdateManyMutationInput, ProjectTypeUncheckedUpdateManyInput>
    /**
     * Filter which ProjectTypes to update
     */
    where?: ProjectTypeWhereInput
    /**
     * Limit how many ProjectTypes to update.
     */
    limit?: number
  }

  /**
   * ProjectType upsert
   */
  export type ProjectTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectType to update in case it exists.
     */
    where: ProjectTypeWhereUniqueInput
    /**
     * In case the ProjectType found by the `where` argument doesn't exist, create a new ProjectType with this data.
     */
    create: XOR<ProjectTypeCreateInput, ProjectTypeUncheckedCreateInput>
    /**
     * In case the ProjectType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectTypeUpdateInput, ProjectTypeUncheckedUpdateInput>
  }

  /**
   * ProjectType delete
   */
  export type ProjectTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
    /**
     * Filter which ProjectType to delete.
     */
    where: ProjectTypeWhereUniqueInput
  }

  /**
   * ProjectType deleteMany
   */
  export type ProjectTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectTypes to delete
     */
    where?: ProjectTypeWhereInput
    /**
     * Limit how many ProjectTypes to delete.
     */
    limit?: number
  }

  /**
   * ProjectType.projectGroups
   */
  export type ProjectType$projectGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    where?: ProjectGroupWhereInput
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    cursor?: ProjectGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * ProjectType without action
   */
  export type ProjectTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectType
     */
    select?: ProjectTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectType
     */
    omit?: ProjectTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectTypeInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    StaffID: number | null
  }

  export type StaffSumAggregateOutputType = {
    StaffID: number | null
  }

  export type StaffMinAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    Phone: string | null
    Email: string | null
    Password: string | null
    Role: $Enums.StaffRole | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type StaffMaxAggregateOutputType = {
    StaffID: number | null
    StaffName: string | null
    Phone: string | null
    Email: string | null
    Password: string | null
    Role: $Enums.StaffRole | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type StaffCountAggregateOutputType = {
    StaffID: number
    StaffName: number
    Phone: number
    Email: number
    Password: number
    Role: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    StaffID?: true
  }

  export type StaffSumAggregateInputType = {
    StaffID?: true
  }

  export type StaffMinAggregateInputType = {
    StaffID?: true
    StaffName?: true
    Phone?: true
    Email?: true
    Password?: true
    Role?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type StaffMaxAggregateInputType = {
    StaffID?: true
    StaffName?: true
    Phone?: true
    Email?: true
    Password?: true
    Role?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type StaffCountAggregateInputType = {
    StaffID?: true
    StaffName?: true
    Phone?: true
    Email?: true
    Password?: true
    Role?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    StaffID: number
    StaffName: string
    Phone: string | null
    Email: string
    Password: string
    Role: $Enums.StaffRole
    Description: string | null
    Created: Date
    Modified: Date
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffID?: boolean
    StaffName?: boolean
    Phone?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    guidedGroups?: boolean | Staff$guidedGroupsArgs<ExtArgs>
    guidedMeetings?: boolean | Staff$guidedMeetingsArgs<ExtArgs>
    convenedGroups?: boolean | Staff$convenedGroupsArgs<ExtArgs>
    expertGroups?: boolean | Staff$expertGroupsArgs<ExtArgs>
    projectDocuments?: boolean | Staff$projectDocumentsArgs<ExtArgs>
    meetingStatusBy?: boolean | Staff$meetingStatusByArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>



  export type StaffSelectScalar = {
    StaffID?: boolean
    StaffName?: boolean
    Phone?: boolean
    Email?: boolean
    Password?: boolean
    Role?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StaffID" | "StaffName" | "Phone" | "Email" | "Password" | "Role" | "Description" | "Created" | "Modified", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    guidedGroups?: boolean | Staff$guidedGroupsArgs<ExtArgs>
    guidedMeetings?: boolean | Staff$guidedMeetingsArgs<ExtArgs>
    convenedGroups?: boolean | Staff$convenedGroupsArgs<ExtArgs>
    expertGroups?: boolean | Staff$expertGroupsArgs<ExtArgs>
    projectDocuments?: boolean | Staff$projectDocumentsArgs<ExtArgs>
    meetingStatusBy?: boolean | Staff$meetingStatusByArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      guidedGroups: Prisma.$ProjectGroupPayload<ExtArgs>[]
      guidedMeetings: Prisma.$ProjectMeetingPayload<ExtArgs>[]
      convenedGroups: Prisma.$ProjectGroupPayload<ExtArgs>[]
      expertGroups: Prisma.$ProjectGroupPayload<ExtArgs>[]
      projectDocuments: Prisma.$ProjectDocumentPayload<ExtArgs>[]
      meetingStatusBy: Prisma.$ProjectMeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StaffID: number
      StaffName: string
      Phone: string | null
      Email: string
      Password: string
      Role: $Enums.StaffRole
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `StaffID`
     * const staffWithStaffIDOnly = await prisma.staff.findMany({ select: { StaffID: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    guidedGroups<T extends Staff$guidedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$guidedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    guidedMeetings<T extends Staff$guidedMeetingsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$guidedMeetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    convenedGroups<T extends Staff$convenedGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$convenedGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expertGroups<T extends Staff$expertGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$expertGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectDocuments<T extends Staff$projectDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Staff$projectDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetingStatusBy<T extends Staff$meetingStatusByArgs<ExtArgs> = {}>(args?: Subset<T, Staff$meetingStatusByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */
  interface StaffFieldRefs {
    readonly StaffID: FieldRef<"Staff", 'Int'>
    readonly StaffName: FieldRef<"Staff", 'String'>
    readonly Phone: FieldRef<"Staff", 'String'>
    readonly Email: FieldRef<"Staff", 'String'>
    readonly Password: FieldRef<"Staff", 'String'>
    readonly Role: FieldRef<"Staff", 'StaffRole'>
    readonly Description: FieldRef<"Staff", 'String'>
    readonly Created: FieldRef<"Staff", 'DateTime'>
    readonly Modified: FieldRef<"Staff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.guidedGroups
   */
  export type Staff$guidedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    where?: ProjectGroupWhereInput
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    cursor?: ProjectGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * Staff.guidedMeetings
   */
  export type Staff$guidedMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    where?: ProjectMeetingWhereInput
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    cursor?: ProjectMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMeetingScalarFieldEnum | ProjectMeetingScalarFieldEnum[]
  }

  /**
   * Staff.convenedGroups
   */
  export type Staff$convenedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    where?: ProjectGroupWhereInput
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    cursor?: ProjectGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * Staff.expertGroups
   */
  export type Staff$expertGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    where?: ProjectGroupWhereInput
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    cursor?: ProjectGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * Staff.projectDocuments
   */
  export type Staff$projectDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    cursor?: ProjectDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * Staff.meetingStatusBy
   */
  export type Staff$meetingStatusByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    where?: ProjectMeetingWhereInput
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    cursor?: ProjectMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMeetingScalarFieldEnum | ProjectMeetingScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model AcademicYear
   */

  export type AggregateAcademicYear = {
    _count: AcademicYearCountAggregateOutputType | null
    _avg: AcademicYearAvgAggregateOutputType | null
    _sum: AcademicYearSumAggregateOutputType | null
    _min: AcademicYearMinAggregateOutputType | null
    _max: AcademicYearMaxAggregateOutputType | null
  }

  export type AcademicYearAvgAggregateOutputType = {
    AcademicYearID: number | null
  }

  export type AcademicYearSumAggregateOutputType = {
    AcademicYearID: number | null
  }

  export type AcademicYearMinAggregateOutputType = {
    AcademicYearID: number | null
    YearName: string | null
    StartDate: Date | null
    EndDate: Date | null
    IsActive: boolean | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type AcademicYearMaxAggregateOutputType = {
    AcademicYearID: number | null
    YearName: string | null
    StartDate: Date | null
    EndDate: Date | null
    IsActive: boolean | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type AcademicYearCountAggregateOutputType = {
    AcademicYearID: number
    YearName: number
    StartDate: number
    EndDate: number
    IsActive: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type AcademicYearAvgAggregateInputType = {
    AcademicYearID?: true
  }

  export type AcademicYearSumAggregateInputType = {
    AcademicYearID?: true
  }

  export type AcademicYearMinAggregateInputType = {
    AcademicYearID?: true
    YearName?: true
    StartDate?: true
    EndDate?: true
    IsActive?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type AcademicYearMaxAggregateInputType = {
    AcademicYearID?: true
    YearName?: true
    StartDate?: true
    EndDate?: true
    IsActive?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type AcademicYearCountAggregateInputType = {
    AcademicYearID?: true
    YearName?: true
    StartDate?: true
    EndDate?: true
    IsActive?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type AcademicYearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicYear to aggregate.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicYears
    **/
    _count?: true | AcademicYearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicYearAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicYearSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicYearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicYearMaxAggregateInputType
  }

  export type GetAcademicYearAggregateType<T extends AcademicYearAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicYear[P]>
      : GetScalarType<T[P], AggregateAcademicYear[P]>
  }




  export type AcademicYearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicYearWhereInput
    orderBy?: AcademicYearOrderByWithAggregationInput | AcademicYearOrderByWithAggregationInput[]
    by: AcademicYearScalarFieldEnum[] | AcademicYearScalarFieldEnum
    having?: AcademicYearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicYearCountAggregateInputType | true
    _avg?: AcademicYearAvgAggregateInputType
    _sum?: AcademicYearSumAggregateInputType
    _min?: AcademicYearMinAggregateInputType
    _max?: AcademicYearMaxAggregateInputType
  }

  export type AcademicYearGroupByOutputType = {
    AcademicYearID: number
    YearName: string
    StartDate: Date
    EndDate: Date
    IsActive: boolean
    Description: string | null
    Created: Date
    Modified: Date
    _count: AcademicYearCountAggregateOutputType | null
    _avg: AcademicYearAvgAggregateOutputType | null
    _sum: AcademicYearSumAggregateOutputType | null
    _min: AcademicYearMinAggregateOutputType | null
    _max: AcademicYearMaxAggregateOutputType | null
  }

  type GetAcademicYearGroupByPayload<T extends AcademicYearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicYearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicYearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicYearGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicYearGroupByOutputType[P]>
        }
      >
    >


  export type AcademicYearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AcademicYearID?: boolean
    YearName?: boolean
    StartDate?: boolean
    EndDate?: boolean
    IsActive?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    departments?: boolean | AcademicYear$departmentsArgs<ExtArgs>
    projectGroups?: boolean | AcademicYear$projectGroupsArgs<ExtArgs>
    students?: boolean | AcademicYear$studentsArgs<ExtArgs>
    _count?: boolean | AcademicYearCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicYear"]>



  export type AcademicYearSelectScalar = {
    AcademicYearID?: boolean
    YearName?: boolean
    StartDate?: boolean
    EndDate?: boolean
    IsActive?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type AcademicYearOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"AcademicYearID" | "YearName" | "StartDate" | "EndDate" | "IsActive" | "Description" | "Created" | "Modified", ExtArgs["result"]["academicYear"]>
  export type AcademicYearInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departments?: boolean | AcademicYear$departmentsArgs<ExtArgs>
    projectGroups?: boolean | AcademicYear$projectGroupsArgs<ExtArgs>
    students?: boolean | AcademicYear$studentsArgs<ExtArgs>
    _count?: boolean | AcademicYearCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AcademicYearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicYear"
    objects: {
      departments: Prisma.$DepartmentPayload<ExtArgs>[]
      projectGroups: Prisma.$ProjectGroupPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      AcademicYearID: number
      YearName: string
      StartDate: Date
      EndDate: Date
      IsActive: boolean
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["academicYear"]>
    composites: {}
  }

  type AcademicYearGetPayload<S extends boolean | null | undefined | AcademicYearDefaultArgs> = $Result.GetResult<Prisma.$AcademicYearPayload, S>

  type AcademicYearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicYearFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicYearCountAggregateInputType | true
    }

  export interface AcademicYearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicYear'], meta: { name: 'AcademicYear' } }
    /**
     * Find zero or one AcademicYear that matches the filter.
     * @param {AcademicYearFindUniqueArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicYearFindUniqueArgs>(args: SelectSubset<T, AcademicYearFindUniqueArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicYear that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicYearFindUniqueOrThrowArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicYearFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicYearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicYear that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearFindFirstArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicYearFindFirstArgs>(args?: SelectSubset<T, AcademicYearFindFirstArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicYear that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearFindFirstOrThrowArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicYearFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicYearFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicYears that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicYears
     * const academicYears = await prisma.academicYear.findMany()
     * 
     * // Get first 10 AcademicYears
     * const academicYears = await prisma.academicYear.findMany({ take: 10 })
     * 
     * // Only select the `AcademicYearID`
     * const academicYearWithAcademicYearIDOnly = await prisma.academicYear.findMany({ select: { AcademicYearID: true } })
     * 
     */
    findMany<T extends AcademicYearFindManyArgs>(args?: SelectSubset<T, AcademicYearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicYear.
     * @param {AcademicYearCreateArgs} args - Arguments to create a AcademicYear.
     * @example
     * // Create one AcademicYear
     * const AcademicYear = await prisma.academicYear.create({
     *   data: {
     *     // ... data to create a AcademicYear
     *   }
     * })
     * 
     */
    create<T extends AcademicYearCreateArgs>(args: SelectSubset<T, AcademicYearCreateArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicYears.
     * @param {AcademicYearCreateManyArgs} args - Arguments to create many AcademicYears.
     * @example
     * // Create many AcademicYears
     * const academicYear = await prisma.academicYear.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicYearCreateManyArgs>(args?: SelectSubset<T, AcademicYearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AcademicYear.
     * @param {AcademicYearDeleteArgs} args - Arguments to delete one AcademicYear.
     * @example
     * // Delete one AcademicYear
     * const AcademicYear = await prisma.academicYear.delete({
     *   where: {
     *     // ... filter to delete one AcademicYear
     *   }
     * })
     * 
     */
    delete<T extends AcademicYearDeleteArgs>(args: SelectSubset<T, AcademicYearDeleteArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicYear.
     * @param {AcademicYearUpdateArgs} args - Arguments to update one AcademicYear.
     * @example
     * // Update one AcademicYear
     * const academicYear = await prisma.academicYear.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicYearUpdateArgs>(args: SelectSubset<T, AcademicYearUpdateArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicYears.
     * @param {AcademicYearDeleteManyArgs} args - Arguments to filter AcademicYears to delete.
     * @example
     * // Delete a few AcademicYears
     * const { count } = await prisma.academicYear.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicYearDeleteManyArgs>(args?: SelectSubset<T, AcademicYearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicYears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicYears
     * const academicYear = await prisma.academicYear.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicYearUpdateManyArgs>(args: SelectSubset<T, AcademicYearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcademicYear.
     * @param {AcademicYearUpsertArgs} args - Arguments to update or create a AcademicYear.
     * @example
     * // Update or create a AcademicYear
     * const academicYear = await prisma.academicYear.upsert({
     *   create: {
     *     // ... data to create a AcademicYear
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicYear we want to update
     *   }
     * })
     */
    upsert<T extends AcademicYearUpsertArgs>(args: SelectSubset<T, AcademicYearUpsertArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicYears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearCountArgs} args - Arguments to filter AcademicYears to count.
     * @example
     * // Count the number of AcademicYears
     * const count = await prisma.academicYear.count({
     *   where: {
     *     // ... the filter for the AcademicYears we want to count
     *   }
     * })
    **/
    count<T extends AcademicYearCountArgs>(
      args?: Subset<T, AcademicYearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicYearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicYear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicYearAggregateArgs>(args: Subset<T, AcademicYearAggregateArgs>): Prisma.PrismaPromise<GetAcademicYearAggregateType<T>>

    /**
     * Group by AcademicYear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcademicYearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicYearGroupByArgs['orderBy'] }
        : { orderBy?: AcademicYearGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcademicYearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicYear model
   */
  readonly fields: AcademicYearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicYear.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicYearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departments<T extends AcademicYear$departmentsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicYear$departmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectGroups<T extends AcademicYear$projectGroupsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicYear$projectGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends AcademicYear$studentsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicYear$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcademicYear model
   */
  interface AcademicYearFieldRefs {
    readonly AcademicYearID: FieldRef<"AcademicYear", 'Int'>
    readonly YearName: FieldRef<"AcademicYear", 'String'>
    readonly StartDate: FieldRef<"AcademicYear", 'DateTime'>
    readonly EndDate: FieldRef<"AcademicYear", 'DateTime'>
    readonly IsActive: FieldRef<"AcademicYear", 'Boolean'>
    readonly Description: FieldRef<"AcademicYear", 'String'>
    readonly Created: FieldRef<"AcademicYear", 'DateTime'>
    readonly Modified: FieldRef<"AcademicYear", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicYear findUnique
   */
  export type AcademicYearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear findUniqueOrThrow
   */
  export type AcademicYearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear findFirst
   */
  export type AcademicYearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicYears.
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicYears.
     */
    distinct?: AcademicYearScalarFieldEnum | AcademicYearScalarFieldEnum[]
  }

  /**
   * AcademicYear findFirstOrThrow
   */
  export type AcademicYearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicYears.
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicYears.
     */
    distinct?: AcademicYearScalarFieldEnum | AcademicYearScalarFieldEnum[]
  }

  /**
   * AcademicYear findMany
   */
  export type AcademicYearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * Filter, which AcademicYears to fetch.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicYears.
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    distinct?: AcademicYearScalarFieldEnum | AcademicYearScalarFieldEnum[]
  }

  /**
   * AcademicYear create
   */
  export type AcademicYearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicYear.
     */
    data: XOR<AcademicYearCreateInput, AcademicYearUncheckedCreateInput>
  }

  /**
   * AcademicYear createMany
   */
  export type AcademicYearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicYears.
     */
    data: AcademicYearCreateManyInput | AcademicYearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicYear update
   */
  export type AcademicYearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicYear.
     */
    data: XOR<AcademicYearUpdateInput, AcademicYearUncheckedUpdateInput>
    /**
     * Choose, which AcademicYear to update.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear updateMany
   */
  export type AcademicYearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicYears.
     */
    data: XOR<AcademicYearUpdateManyMutationInput, AcademicYearUncheckedUpdateManyInput>
    /**
     * Filter which AcademicYears to update
     */
    where?: AcademicYearWhereInput
    /**
     * Limit how many AcademicYears to update.
     */
    limit?: number
  }

  /**
   * AcademicYear upsert
   */
  export type AcademicYearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicYear to update in case it exists.
     */
    where: AcademicYearWhereUniqueInput
    /**
     * In case the AcademicYear found by the `where` argument doesn't exist, create a new AcademicYear with this data.
     */
    create: XOR<AcademicYearCreateInput, AcademicYearUncheckedCreateInput>
    /**
     * In case the AcademicYear was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicYearUpdateInput, AcademicYearUncheckedUpdateInput>
  }

  /**
   * AcademicYear delete
   */
  export type AcademicYearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    /**
     * Filter which AcademicYear to delete.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear deleteMany
   */
  export type AcademicYearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicYears to delete
     */
    where?: AcademicYearWhereInput
    /**
     * Limit how many AcademicYears to delete.
     */
    limit?: number
  }

  /**
   * AcademicYear.departments
   */
  export type AcademicYear$departmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * AcademicYear.projectGroups
   */
  export type AcademicYear$projectGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    where?: ProjectGroupWhereInput
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    cursor?: ProjectGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * AcademicYear.students
   */
  export type AcademicYear$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * AcademicYear without action
   */
  export type AcademicYearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    DepartmentID: number | null
    AcademicYearID: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    DepartmentID: number | null
    AcademicYearID: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    DepartmentID: number | null
    DepartmentName: string | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    DepartmentID: number | null
    DepartmentName: string | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    DepartmentID: number
    DepartmentName: number
    AcademicYearID: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    DepartmentID?: true
    AcademicYearID?: true
  }

  export type DepartmentSumAggregateInputType = {
    DepartmentID?: true
    AcademicYearID?: true
  }

  export type DepartmentMinAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type DepartmentMaxAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type DepartmentCountAggregateInputType = {
    DepartmentID?: true
    DepartmentName?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    DepartmentID: number
    DepartmentName: string
    AcademicYearID: number
    Description: string | null
    Created: Date
    Modified: Date
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DepartmentID?: boolean
    DepartmentName?: boolean
    AcademicYearID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    academicYear?: boolean | AcademicYearDefaultArgs<ExtArgs>
    students?: boolean | Department$studentsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>



  export type DepartmentSelectScalar = {
    DepartmentID?: boolean
    DepartmentName?: boolean
    AcademicYearID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DepartmentID" | "DepartmentName" | "AcademicYearID" | "Description" | "Created" | "Modified", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academicYear?: boolean | AcademicYearDefaultArgs<ExtArgs>
    students?: boolean | Department$studentsArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      academicYear: Prisma.$AcademicYearPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      DepartmentID: number
      DepartmentName: string
      AcademicYearID: number
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `DepartmentID`
     * const departmentWithDepartmentIDOnly = await prisma.department.findMany({ select: { DepartmentID: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    academicYear<T extends AcademicYearDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademicYearDefaultArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Department$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Department$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly DepartmentID: FieldRef<"Department", 'Int'>
    readonly DepartmentName: FieldRef<"Department", 'String'>
    readonly AcademicYearID: FieldRef<"Department", 'Int'>
    readonly Description: FieldRef<"Department", 'String'>
    readonly Created: FieldRef<"Department", 'DateTime'>
    readonly Modified: FieldRef<"Department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.students
   */
  export type Department$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    StudentID: number | null
    DepartmentID: number | null
    AcademicYearID: number | null
  }

  export type StudentSumAggregateOutputType = {
    StudentID: number | null
    DepartmentID: number | null
    AcademicYearID: number | null
  }

  export type StudentMinAggregateOutputType = {
    StudentID: number | null
    StudentName: string | null
    Phone: string | null
    Email: string | null
    Password: string | null
    DepartmentID: number | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    StudentID: number | null
    StudentName: string | null
    Phone: string | null
    Email: string | null
    Password: string | null
    DepartmentID: number | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type StudentCountAggregateOutputType = {
    StudentID: number
    StudentName: number
    Phone: number
    Email: number
    Password: number
    DepartmentID: number
    AcademicYearID: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    StudentID?: true
    DepartmentID?: true
    AcademicYearID?: true
  }

  export type StudentSumAggregateInputType = {
    StudentID?: true
    DepartmentID?: true
    AcademicYearID?: true
  }

  export type StudentMinAggregateInputType = {
    StudentID?: true
    StudentName?: true
    Phone?: true
    Email?: true
    Password?: true
    DepartmentID?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type StudentMaxAggregateInputType = {
    StudentID?: true
    StudentName?: true
    Phone?: true
    Email?: true
    Password?: true
    DepartmentID?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type StudentCountAggregateInputType = {
    StudentID?: true
    StudentName?: true
    Phone?: true
    Email?: true
    Password?: true
    DepartmentID?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    StudentID: number
    StudentName: string
    Phone: string | null
    Email: string
    Password: string
    DepartmentID: number | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date
    Modified: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StudentID?: boolean
    StudentName?: boolean
    Phone?: boolean
    Email?: boolean
    Password?: boolean
    DepartmentID?: boolean
    AcademicYearID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    department?: boolean | Student$departmentArgs<ExtArgs>
    academicYear?: boolean | Student$academicYearArgs<ExtArgs>
    groupMembers?: boolean | Student$groupMembersArgs<ExtArgs>
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    documents?: boolean | Student$documentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    StudentID?: boolean
    StudentName?: boolean
    Phone?: boolean
    Email?: boolean
    Password?: boolean
    DepartmentID?: boolean
    AcademicYearID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"StudentID" | "StudentName" | "Phone" | "Email" | "Password" | "DepartmentID" | "AcademicYearID" | "Description" | "Created" | "Modified", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Student$departmentArgs<ExtArgs>
    academicYear?: boolean | Student$academicYearArgs<ExtArgs>
    groupMembers?: boolean | Student$groupMembersArgs<ExtArgs>
    attendances?: boolean | Student$attendancesArgs<ExtArgs>
    documents?: boolean | Student$documentsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      academicYear: Prisma.$AcademicYearPayload<ExtArgs> | null
      groupMembers: Prisma.$ProjectGroupMemberPayload<ExtArgs>[]
      attendances: Prisma.$ProjectMeetingAttendancePayload<ExtArgs>[]
      documents: Prisma.$ProjectDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StudentID: number
      StudentName: string
      Phone: string | null
      Email: string
      Password: string
      DepartmentID: number | null
      AcademicYearID: number | null
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `StudentID`
     * const studentWithStudentIDOnly = await prisma.student.findMany({ select: { StudentID: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends Student$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Student$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    academicYear<T extends Student$academicYearArgs<ExtArgs> = {}>(args?: Subset<T, Student$academicYearArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    groupMembers<T extends Student$groupMembersArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends Student$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends Student$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Student$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly StudentID: FieldRef<"Student", 'Int'>
    readonly StudentName: FieldRef<"Student", 'String'>
    readonly Phone: FieldRef<"Student", 'String'>
    readonly Email: FieldRef<"Student", 'String'>
    readonly Password: FieldRef<"Student", 'String'>
    readonly DepartmentID: FieldRef<"Student", 'Int'>
    readonly AcademicYearID: FieldRef<"Student", 'Int'>
    readonly Description: FieldRef<"Student", 'String'>
    readonly Created: FieldRef<"Student", 'DateTime'>
    readonly Modified: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.department
   */
  export type Student$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * Student.academicYear
   */
  export type Student$academicYearArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    where?: AcademicYearWhereInput
  }

  /**
   * Student.groupMembers
   */
  export type Student$groupMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    where?: ProjectGroupMemberWhereInput
    orderBy?: ProjectGroupMemberOrderByWithRelationInput | ProjectGroupMemberOrderByWithRelationInput[]
    cursor?: ProjectGroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupMemberScalarFieldEnum | ProjectGroupMemberScalarFieldEnum[]
  }

  /**
   * Student.attendances
   */
  export type Student$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    where?: ProjectMeetingAttendanceWhereInput
    orderBy?: ProjectMeetingAttendanceOrderByWithRelationInput | ProjectMeetingAttendanceOrderByWithRelationInput[]
    cursor?: ProjectMeetingAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMeetingAttendanceScalarFieldEnum | ProjectMeetingAttendanceScalarFieldEnum[]
  }

  /**
   * Student.documents
   */
  export type Student$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    cursor?: ProjectDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model ProjectGroup
   */

  export type AggregateProjectGroup = {
    _count: ProjectGroupCountAggregateOutputType | null
    _avg: ProjectGroupAvgAggregateOutputType | null
    _sum: ProjectGroupSumAggregateOutputType | null
    _min: ProjectGroupMinAggregateOutputType | null
    _max: ProjectGroupMaxAggregateOutputType | null
  }

  export type ProjectGroupAvgAggregateOutputType = {
    ProjectGroupID: number | null
    ProjectTypeID: number | null
    GuideStaffID: number | null
    AverageCPI: Decimal | null
    ConvenerStaffID: number | null
    ExpertStaffID: number | null
    AcademicYearID: number | null
  }

  export type ProjectGroupSumAggregateOutputType = {
    ProjectGroupID: number | null
    ProjectTypeID: number | null
    GuideStaffID: number | null
    AverageCPI: Decimal | null
    ConvenerStaffID: number | null
    ExpertStaffID: number | null
    AcademicYearID: number | null
  }

  export type ProjectGroupMinAggregateOutputType = {
    ProjectGroupID: number | null
    ProjectGroupName: string | null
    ProjectTypeID: number | null
    GuideStaffID: number | null
    ProjectTitle: string | null
    ProjectArea: string | null
    ProjectDescription: string | null
    AverageCPI: Decimal | null
    ConvenerStaffID: number | null
    ExpertStaffID: number | null
    Status: $Enums.ProjectGroupStatus | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectGroupMaxAggregateOutputType = {
    ProjectGroupID: number | null
    ProjectGroupName: string | null
    ProjectTypeID: number | null
    GuideStaffID: number | null
    ProjectTitle: string | null
    ProjectArea: string | null
    ProjectDescription: string | null
    AverageCPI: Decimal | null
    ConvenerStaffID: number | null
    ExpertStaffID: number | null
    Status: $Enums.ProjectGroupStatus | null
    AcademicYearID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectGroupCountAggregateOutputType = {
    ProjectGroupID: number
    ProjectGroupName: number
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle: number
    ProjectArea: number
    ProjectDescription: number
    AverageCPI: number
    ConvenerStaffID: number
    ExpertStaffID: number
    Status: number
    AcademicYearID: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type ProjectGroupAvgAggregateInputType = {
    ProjectGroupID?: true
    ProjectTypeID?: true
    GuideStaffID?: true
    AverageCPI?: true
    ConvenerStaffID?: true
    ExpertStaffID?: true
    AcademicYearID?: true
  }

  export type ProjectGroupSumAggregateInputType = {
    ProjectGroupID?: true
    ProjectTypeID?: true
    GuideStaffID?: true
    AverageCPI?: true
    ConvenerStaffID?: true
    ExpertStaffID?: true
    AcademicYearID?: true
  }

  export type ProjectGroupMinAggregateInputType = {
    ProjectGroupID?: true
    ProjectGroupName?: true
    ProjectTypeID?: true
    GuideStaffID?: true
    ProjectTitle?: true
    ProjectArea?: true
    ProjectDescription?: true
    AverageCPI?: true
    ConvenerStaffID?: true
    ExpertStaffID?: true
    Status?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectGroupMaxAggregateInputType = {
    ProjectGroupID?: true
    ProjectGroupName?: true
    ProjectTypeID?: true
    GuideStaffID?: true
    ProjectTitle?: true
    ProjectArea?: true
    ProjectDescription?: true
    AverageCPI?: true
    ConvenerStaffID?: true
    ExpertStaffID?: true
    Status?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectGroupCountAggregateInputType = {
    ProjectGroupID?: true
    ProjectGroupName?: true
    ProjectTypeID?: true
    GuideStaffID?: true
    ProjectTitle?: true
    ProjectArea?: true
    ProjectDescription?: true
    AverageCPI?: true
    ConvenerStaffID?: true
    ExpertStaffID?: true
    Status?: true
    AcademicYearID?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ProjectGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectGroup to aggregate.
     */
    where?: ProjectGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroups to fetch.
     */
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectGroups
    **/
    _count?: true | ProjectGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectGroupMaxAggregateInputType
  }

  export type GetProjectGroupAggregateType<T extends ProjectGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectGroup[P]>
      : GetScalarType<T[P], AggregateProjectGroup[P]>
  }




  export type ProjectGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupWhereInput
    orderBy?: ProjectGroupOrderByWithAggregationInput | ProjectGroupOrderByWithAggregationInput[]
    by: ProjectGroupScalarFieldEnum[] | ProjectGroupScalarFieldEnum
    having?: ProjectGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectGroupCountAggregateInputType | true
    _avg?: ProjectGroupAvgAggregateInputType
    _sum?: ProjectGroupSumAggregateInputType
    _min?: ProjectGroupMinAggregateInputType
    _max?: ProjectGroupMaxAggregateInputType
  }

  export type ProjectGroupGroupByOutputType = {
    ProjectGroupID: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle: string | null
    ProjectArea: string | null
    ProjectDescription: string | null
    AverageCPI: Decimal | null
    ConvenerStaffID: number | null
    ExpertStaffID: number | null
    Status: $Enums.ProjectGroupStatus
    AcademicYearID: number | null
    Description: string | null
    Created: Date
    Modified: Date
    _count: ProjectGroupCountAggregateOutputType | null
    _avg: ProjectGroupAvgAggregateOutputType | null
    _sum: ProjectGroupSumAggregateOutputType | null
    _min: ProjectGroupMinAggregateOutputType | null
    _max: ProjectGroupMaxAggregateOutputType | null
  }

  type GetProjectGroupGroupByPayload<T extends ProjectGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupGroupByOutputType[P]>
        }
      >
    >


  export type ProjectGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectGroupID?: boolean
    ProjectGroupName?: boolean
    ProjectTypeID?: boolean
    GuideStaffID?: boolean
    ProjectTitle?: boolean
    ProjectArea?: boolean
    ProjectDescription?: boolean
    AverageCPI?: boolean
    ConvenerStaffID?: boolean
    ExpertStaffID?: boolean
    Status?: boolean
    AcademicYearID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
    guide?: boolean | StaffDefaultArgs<ExtArgs>
    convener?: boolean | ProjectGroup$convenerArgs<ExtArgs>
    expert?: boolean | ProjectGroup$expertArgs<ExtArgs>
    academicYear?: boolean | ProjectGroup$academicYearArgs<ExtArgs>
    members?: boolean | ProjectGroup$membersArgs<ExtArgs>
    meetings?: boolean | ProjectGroup$meetingsArgs<ExtArgs>
    documents?: boolean | ProjectGroup$documentsArgs<ExtArgs>
    _count?: boolean | ProjectGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectGroup"]>



  export type ProjectGroupSelectScalar = {
    ProjectGroupID?: boolean
    ProjectGroupName?: boolean
    ProjectTypeID?: boolean
    GuideStaffID?: boolean
    ProjectTitle?: boolean
    ProjectArea?: boolean
    ProjectDescription?: boolean
    AverageCPI?: boolean
    ConvenerStaffID?: boolean
    ExpertStaffID?: boolean
    Status?: boolean
    AcademicYearID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type ProjectGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectGroupID" | "ProjectGroupName" | "ProjectTypeID" | "GuideStaffID" | "ProjectTitle" | "ProjectArea" | "ProjectDescription" | "AverageCPI" | "ConvenerStaffID" | "ExpertStaffID" | "Status" | "AcademicYearID" | "Description" | "Created" | "Modified", ExtArgs["result"]["projectGroup"]>
  export type ProjectGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectType?: boolean | ProjectTypeDefaultArgs<ExtArgs>
    guide?: boolean | StaffDefaultArgs<ExtArgs>
    convener?: boolean | ProjectGroup$convenerArgs<ExtArgs>
    expert?: boolean | ProjectGroup$expertArgs<ExtArgs>
    academicYear?: boolean | ProjectGroup$academicYearArgs<ExtArgs>
    members?: boolean | ProjectGroup$membersArgs<ExtArgs>
    meetings?: boolean | ProjectGroup$meetingsArgs<ExtArgs>
    documents?: boolean | ProjectGroup$documentsArgs<ExtArgs>
    _count?: boolean | ProjectGroupCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectGroup"
    objects: {
      projectType: Prisma.$ProjectTypePayload<ExtArgs>
      guide: Prisma.$StaffPayload<ExtArgs>
      convener: Prisma.$StaffPayload<ExtArgs> | null
      expert: Prisma.$StaffPayload<ExtArgs> | null
      academicYear: Prisma.$AcademicYearPayload<ExtArgs> | null
      members: Prisma.$ProjectGroupMemberPayload<ExtArgs>[]
      meetings: Prisma.$ProjectMeetingPayload<ExtArgs>[]
      documents: Prisma.$ProjectDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectGroupID: number
      ProjectGroupName: string
      ProjectTypeID: number
      GuideStaffID: number
      ProjectTitle: string | null
      ProjectArea: string | null
      ProjectDescription: string | null
      AverageCPI: Prisma.Decimal | null
      ConvenerStaffID: number | null
      ExpertStaffID: number | null
      Status: $Enums.ProjectGroupStatus
      AcademicYearID: number | null
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["projectGroup"]>
    composites: {}
  }

  type ProjectGroupGetPayload<S extends boolean | null | undefined | ProjectGroupDefaultArgs> = $Result.GetResult<Prisma.$ProjectGroupPayload, S>

  type ProjectGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectGroupCountAggregateInputType | true
    }

  export interface ProjectGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectGroup'], meta: { name: 'ProjectGroup' } }
    /**
     * Find zero or one ProjectGroup that matches the filter.
     * @param {ProjectGroupFindUniqueArgs} args - Arguments to find a ProjectGroup
     * @example
     * // Get one ProjectGroup
     * const projectGroup = await prisma.projectGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectGroupFindUniqueArgs>(args: SelectSubset<T, ProjectGroupFindUniqueArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectGroupFindUniqueOrThrowArgs} args - Arguments to find a ProjectGroup
     * @example
     * // Get one ProjectGroup
     * const projectGroup = await prisma.projectGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupFindFirstArgs} args - Arguments to find a ProjectGroup
     * @example
     * // Get one ProjectGroup
     * const projectGroup = await prisma.projectGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectGroupFindFirstArgs>(args?: SelectSubset<T, ProjectGroupFindFirstArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupFindFirstOrThrowArgs} args - Arguments to find a ProjectGroup
     * @example
     * // Get one ProjectGroup
     * const projectGroup = await prisma.projectGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectGroups
     * const projectGroups = await prisma.projectGroup.findMany()
     * 
     * // Get first 10 ProjectGroups
     * const projectGroups = await prisma.projectGroup.findMany({ take: 10 })
     * 
     * // Only select the `ProjectGroupID`
     * const projectGroupWithProjectGroupIDOnly = await prisma.projectGroup.findMany({ select: { ProjectGroupID: true } })
     * 
     */
    findMany<T extends ProjectGroupFindManyArgs>(args?: SelectSubset<T, ProjectGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectGroup.
     * @param {ProjectGroupCreateArgs} args - Arguments to create a ProjectGroup.
     * @example
     * // Create one ProjectGroup
     * const ProjectGroup = await prisma.projectGroup.create({
     *   data: {
     *     // ... data to create a ProjectGroup
     *   }
     * })
     * 
     */
    create<T extends ProjectGroupCreateArgs>(args: SelectSubset<T, ProjectGroupCreateArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectGroups.
     * @param {ProjectGroupCreateManyArgs} args - Arguments to create many ProjectGroups.
     * @example
     * // Create many ProjectGroups
     * const projectGroup = await prisma.projectGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectGroupCreateManyArgs>(args?: SelectSubset<T, ProjectGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectGroup.
     * @param {ProjectGroupDeleteArgs} args - Arguments to delete one ProjectGroup.
     * @example
     * // Delete one ProjectGroup
     * const ProjectGroup = await prisma.projectGroup.delete({
     *   where: {
     *     // ... filter to delete one ProjectGroup
     *   }
     * })
     * 
     */
    delete<T extends ProjectGroupDeleteArgs>(args: SelectSubset<T, ProjectGroupDeleteArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectGroup.
     * @param {ProjectGroupUpdateArgs} args - Arguments to update one ProjectGroup.
     * @example
     * // Update one ProjectGroup
     * const projectGroup = await prisma.projectGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectGroupUpdateArgs>(args: SelectSubset<T, ProjectGroupUpdateArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectGroups.
     * @param {ProjectGroupDeleteManyArgs} args - Arguments to filter ProjectGroups to delete.
     * @example
     * // Delete a few ProjectGroups
     * const { count } = await prisma.projectGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectGroupDeleteManyArgs>(args?: SelectSubset<T, ProjectGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectGroups
     * const projectGroup = await prisma.projectGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectGroupUpdateManyArgs>(args: SelectSubset<T, ProjectGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectGroup.
     * @param {ProjectGroupUpsertArgs} args - Arguments to update or create a ProjectGroup.
     * @example
     * // Update or create a ProjectGroup
     * const projectGroup = await prisma.projectGroup.upsert({
     *   create: {
     *     // ... data to create a ProjectGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectGroup we want to update
     *   }
     * })
     */
    upsert<T extends ProjectGroupUpsertArgs>(args: SelectSubset<T, ProjectGroupUpsertArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupCountArgs} args - Arguments to filter ProjectGroups to count.
     * @example
     * // Count the number of ProjectGroups
     * const count = await prisma.projectGroup.count({
     *   where: {
     *     // ... the filter for the ProjectGroups we want to count
     *   }
     * })
    **/
    count<T extends ProjectGroupCountArgs>(
      args?: Subset<T, ProjectGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectGroupAggregateArgs>(args: Subset<T, ProjectGroupAggregateArgs>): Prisma.PrismaPromise<GetProjectGroupAggregateType<T>>

    /**
     * Group by ProjectGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectGroup model
   */
  readonly fields: ProjectGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectType<T extends ProjectTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectTypeDefaultArgs<ExtArgs>>): Prisma__ProjectTypeClient<$Result.GetResult<Prisma.$ProjectTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guide<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    convener<T extends ProjectGroup$convenerArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroup$convenerArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expert<T extends ProjectGroup$expertArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroup$expertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    academicYear<T extends ProjectGroup$academicYearArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroup$academicYearArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends ProjectGroup$membersArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroup$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetings<T extends ProjectGroup$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroup$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documents<T extends ProjectGroup$documentsArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroup$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectGroup model
   */
  interface ProjectGroupFieldRefs {
    readonly ProjectGroupID: FieldRef<"ProjectGroup", 'Int'>
    readonly ProjectGroupName: FieldRef<"ProjectGroup", 'String'>
    readonly ProjectTypeID: FieldRef<"ProjectGroup", 'Int'>
    readonly GuideStaffID: FieldRef<"ProjectGroup", 'Int'>
    readonly ProjectTitle: FieldRef<"ProjectGroup", 'String'>
    readonly ProjectArea: FieldRef<"ProjectGroup", 'String'>
    readonly ProjectDescription: FieldRef<"ProjectGroup", 'String'>
    readonly AverageCPI: FieldRef<"ProjectGroup", 'Decimal'>
    readonly ConvenerStaffID: FieldRef<"ProjectGroup", 'Int'>
    readonly ExpertStaffID: FieldRef<"ProjectGroup", 'Int'>
    readonly Status: FieldRef<"ProjectGroup", 'ProjectGroupStatus'>
    readonly AcademicYearID: FieldRef<"ProjectGroup", 'Int'>
    readonly Description: FieldRef<"ProjectGroup", 'String'>
    readonly Created: FieldRef<"ProjectGroup", 'DateTime'>
    readonly Modified: FieldRef<"ProjectGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectGroup findUnique
   */
  export type ProjectGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroup to fetch.
     */
    where: ProjectGroupWhereUniqueInput
  }

  /**
   * ProjectGroup findUniqueOrThrow
   */
  export type ProjectGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroup to fetch.
     */
    where: ProjectGroupWhereUniqueInput
  }

  /**
   * ProjectGroup findFirst
   */
  export type ProjectGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroup to fetch.
     */
    where?: ProjectGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroups to fetch.
     */
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectGroups.
     */
    cursor?: ProjectGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectGroups.
     */
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * ProjectGroup findFirstOrThrow
   */
  export type ProjectGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroup to fetch.
     */
    where?: ProjectGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroups to fetch.
     */
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectGroups.
     */
    cursor?: ProjectGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectGroups.
     */
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * ProjectGroup findMany
   */
  export type ProjectGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroups to fetch.
     */
    where?: ProjectGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroups to fetch.
     */
    orderBy?: ProjectGroupOrderByWithRelationInput | ProjectGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectGroups.
     */
    cursor?: ProjectGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroups.
     */
    skip?: number
    distinct?: ProjectGroupScalarFieldEnum | ProjectGroupScalarFieldEnum[]
  }

  /**
   * ProjectGroup create
   */
  export type ProjectGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectGroup.
     */
    data: XOR<ProjectGroupCreateInput, ProjectGroupUncheckedCreateInput>
  }

  /**
   * ProjectGroup createMany
   */
  export type ProjectGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectGroups.
     */
    data: ProjectGroupCreateManyInput | ProjectGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectGroup update
   */
  export type ProjectGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectGroup.
     */
    data: XOR<ProjectGroupUpdateInput, ProjectGroupUncheckedUpdateInput>
    /**
     * Choose, which ProjectGroup to update.
     */
    where: ProjectGroupWhereUniqueInput
  }

  /**
   * ProjectGroup updateMany
   */
  export type ProjectGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectGroups.
     */
    data: XOR<ProjectGroupUpdateManyMutationInput, ProjectGroupUncheckedUpdateManyInput>
    /**
     * Filter which ProjectGroups to update
     */
    where?: ProjectGroupWhereInput
    /**
     * Limit how many ProjectGroups to update.
     */
    limit?: number
  }

  /**
   * ProjectGroup upsert
   */
  export type ProjectGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectGroup to update in case it exists.
     */
    where: ProjectGroupWhereUniqueInput
    /**
     * In case the ProjectGroup found by the `where` argument doesn't exist, create a new ProjectGroup with this data.
     */
    create: XOR<ProjectGroupCreateInput, ProjectGroupUncheckedCreateInput>
    /**
     * In case the ProjectGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectGroupUpdateInput, ProjectGroupUncheckedUpdateInput>
  }

  /**
   * ProjectGroup delete
   */
  export type ProjectGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
    /**
     * Filter which ProjectGroup to delete.
     */
    where: ProjectGroupWhereUniqueInput
  }

  /**
   * ProjectGroup deleteMany
   */
  export type ProjectGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectGroups to delete
     */
    where?: ProjectGroupWhereInput
    /**
     * Limit how many ProjectGroups to delete.
     */
    limit?: number
  }

  /**
   * ProjectGroup.convener
   */
  export type ProjectGroup$convenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * ProjectGroup.expert
   */
  export type ProjectGroup$expertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * ProjectGroup.academicYear
   */
  export type ProjectGroup$academicYearArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicYear
     */
    omit?: AcademicYearOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicYearInclude<ExtArgs> | null
    where?: AcademicYearWhereInput
  }

  /**
   * ProjectGroup.members
   */
  export type ProjectGroup$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    where?: ProjectGroupMemberWhereInput
    orderBy?: ProjectGroupMemberOrderByWithRelationInput | ProjectGroupMemberOrderByWithRelationInput[]
    cursor?: ProjectGroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectGroupMemberScalarFieldEnum | ProjectGroupMemberScalarFieldEnum[]
  }

  /**
   * ProjectGroup.meetings
   */
  export type ProjectGroup$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    where?: ProjectMeetingWhereInput
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    cursor?: ProjectMeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMeetingScalarFieldEnum | ProjectMeetingScalarFieldEnum[]
  }

  /**
   * ProjectGroup.documents
   */
  export type ProjectGroup$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    cursor?: ProjectDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectGroup without action
   */
  export type ProjectGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroup
     */
    select?: ProjectGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroup
     */
    omit?: ProjectGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupInclude<ExtArgs> | null
  }


  /**
   * Model ProjectGroupMember
   */

  export type AggregateProjectGroupMember = {
    _count: ProjectGroupMemberCountAggregateOutputType | null
    _avg: ProjectGroupMemberAvgAggregateOutputType | null
    _sum: ProjectGroupMemberSumAggregateOutputType | null
    _min: ProjectGroupMemberMinAggregateOutputType | null
    _max: ProjectGroupMemberMaxAggregateOutputType | null
  }

  export type ProjectGroupMemberAvgAggregateOutputType = {
    ProjectGroupMemberID: number | null
    ProjectGroupID: number | null
    StudentID: number | null
    StudentCGPA: Decimal | null
  }

  export type ProjectGroupMemberSumAggregateOutputType = {
    ProjectGroupMemberID: number | null
    ProjectGroupID: number | null
    StudentID: number | null
    StudentCGPA: Decimal | null
  }

  export type ProjectGroupMemberMinAggregateOutputType = {
    ProjectGroupMemberID: number | null
    ProjectGroupID: number | null
    StudentID: number | null
    IsGroupLeader: boolean | null
    StudentCGPA: Decimal | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectGroupMemberMaxAggregateOutputType = {
    ProjectGroupMemberID: number | null
    ProjectGroupID: number | null
    StudentID: number | null
    IsGroupLeader: boolean | null
    StudentCGPA: Decimal | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectGroupMemberCountAggregateOutputType = {
    ProjectGroupMemberID: number
    ProjectGroupID: number
    StudentID: number
    IsGroupLeader: number
    StudentCGPA: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type ProjectGroupMemberAvgAggregateInputType = {
    ProjectGroupMemberID?: true
    ProjectGroupID?: true
    StudentID?: true
    StudentCGPA?: true
  }

  export type ProjectGroupMemberSumAggregateInputType = {
    ProjectGroupMemberID?: true
    ProjectGroupID?: true
    StudentID?: true
    StudentCGPA?: true
  }

  export type ProjectGroupMemberMinAggregateInputType = {
    ProjectGroupMemberID?: true
    ProjectGroupID?: true
    StudentID?: true
    IsGroupLeader?: true
    StudentCGPA?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectGroupMemberMaxAggregateInputType = {
    ProjectGroupMemberID?: true
    ProjectGroupID?: true
    StudentID?: true
    IsGroupLeader?: true
    StudentCGPA?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectGroupMemberCountAggregateInputType = {
    ProjectGroupMemberID?: true
    ProjectGroupID?: true
    StudentID?: true
    IsGroupLeader?: true
    StudentCGPA?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ProjectGroupMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectGroupMember to aggregate.
     */
    where?: ProjectGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroupMembers to fetch.
     */
    orderBy?: ProjectGroupMemberOrderByWithRelationInput | ProjectGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectGroupMembers
    **/
    _count?: true | ProjectGroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectGroupMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectGroupMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectGroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectGroupMemberMaxAggregateInputType
  }

  export type GetProjectGroupMemberAggregateType<T extends ProjectGroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectGroupMember[P]>
      : GetScalarType<T[P], AggregateProjectGroupMember[P]>
  }




  export type ProjectGroupMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectGroupMemberWhereInput
    orderBy?: ProjectGroupMemberOrderByWithAggregationInput | ProjectGroupMemberOrderByWithAggregationInput[]
    by: ProjectGroupMemberScalarFieldEnum[] | ProjectGroupMemberScalarFieldEnum
    having?: ProjectGroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectGroupMemberCountAggregateInputType | true
    _avg?: ProjectGroupMemberAvgAggregateInputType
    _sum?: ProjectGroupMemberSumAggregateInputType
    _min?: ProjectGroupMemberMinAggregateInputType
    _max?: ProjectGroupMemberMaxAggregateInputType
  }

  export type ProjectGroupMemberGroupByOutputType = {
    ProjectGroupMemberID: number
    ProjectGroupID: number
    StudentID: number
    IsGroupLeader: boolean
    StudentCGPA: Decimal | null
    Description: string | null
    Created: Date
    Modified: Date
    _count: ProjectGroupMemberCountAggregateOutputType | null
    _avg: ProjectGroupMemberAvgAggregateOutputType | null
    _sum: ProjectGroupMemberSumAggregateOutputType | null
    _min: ProjectGroupMemberMinAggregateOutputType | null
    _max: ProjectGroupMemberMaxAggregateOutputType | null
  }

  type GetProjectGroupMemberGroupByPayload<T extends ProjectGroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectGroupMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectGroupMemberID?: boolean
    ProjectGroupID?: boolean
    StudentID?: boolean
    IsGroupLeader?: boolean
    StudentCGPA?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    projectGroup?: boolean | ProjectGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectGroupMember"]>



  export type ProjectGroupMemberSelectScalar = {
    ProjectGroupMemberID?: boolean
    ProjectGroupID?: boolean
    StudentID?: boolean
    IsGroupLeader?: boolean
    StudentCGPA?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type ProjectGroupMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectGroupMemberID" | "ProjectGroupID" | "StudentID" | "IsGroupLeader" | "StudentCGPA" | "Description" | "Created" | "Modified", ExtArgs["result"]["projectGroupMember"]>
  export type ProjectGroupMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectGroup?: boolean | ProjectGroupDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ProjectGroupMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectGroupMember"
    objects: {
      projectGroup: Prisma.$ProjectGroupPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectGroupMemberID: number
      ProjectGroupID: number
      StudentID: number
      IsGroupLeader: boolean
      StudentCGPA: Prisma.Decimal | null
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["projectGroupMember"]>
    composites: {}
  }

  type ProjectGroupMemberGetPayload<S extends boolean | null | undefined | ProjectGroupMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectGroupMemberPayload, S>

  type ProjectGroupMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectGroupMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectGroupMemberCountAggregateInputType | true
    }

  export interface ProjectGroupMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectGroupMember'], meta: { name: 'ProjectGroupMember' } }
    /**
     * Find zero or one ProjectGroupMember that matches the filter.
     * @param {ProjectGroupMemberFindUniqueArgs} args - Arguments to find a ProjectGroupMember
     * @example
     * // Get one ProjectGroupMember
     * const projectGroupMember = await prisma.projectGroupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectGroupMemberFindUniqueArgs>(args: SelectSubset<T, ProjectGroupMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectGroupMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectGroupMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectGroupMember
     * @example
     * // Get one ProjectGroupMember
     * const projectGroupMember = await prisma.projectGroupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectGroupMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectGroupMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectGroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberFindFirstArgs} args - Arguments to find a ProjectGroupMember
     * @example
     * // Get one ProjectGroupMember
     * const projectGroupMember = await prisma.projectGroupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectGroupMemberFindFirstArgs>(args?: SelectSubset<T, ProjectGroupMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectGroupMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectGroupMember
     * @example
     * // Get one ProjectGroupMember
     * const projectGroupMember = await prisma.projectGroupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectGroupMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectGroupMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectGroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectGroupMembers
     * const projectGroupMembers = await prisma.projectGroupMember.findMany()
     * 
     * // Get first 10 ProjectGroupMembers
     * const projectGroupMembers = await prisma.projectGroupMember.findMany({ take: 10 })
     * 
     * // Only select the `ProjectGroupMemberID`
     * const projectGroupMemberWithProjectGroupMemberIDOnly = await prisma.projectGroupMember.findMany({ select: { ProjectGroupMemberID: true } })
     * 
     */
    findMany<T extends ProjectGroupMemberFindManyArgs>(args?: SelectSubset<T, ProjectGroupMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectGroupMember.
     * @param {ProjectGroupMemberCreateArgs} args - Arguments to create a ProjectGroupMember.
     * @example
     * // Create one ProjectGroupMember
     * const ProjectGroupMember = await prisma.projectGroupMember.create({
     *   data: {
     *     // ... data to create a ProjectGroupMember
     *   }
     * })
     * 
     */
    create<T extends ProjectGroupMemberCreateArgs>(args: SelectSubset<T, ProjectGroupMemberCreateArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectGroupMembers.
     * @param {ProjectGroupMemberCreateManyArgs} args - Arguments to create many ProjectGroupMembers.
     * @example
     * // Create many ProjectGroupMembers
     * const projectGroupMember = await prisma.projectGroupMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectGroupMemberCreateManyArgs>(args?: SelectSubset<T, ProjectGroupMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectGroupMember.
     * @param {ProjectGroupMemberDeleteArgs} args - Arguments to delete one ProjectGroupMember.
     * @example
     * // Delete one ProjectGroupMember
     * const ProjectGroupMember = await prisma.projectGroupMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectGroupMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectGroupMemberDeleteArgs>(args: SelectSubset<T, ProjectGroupMemberDeleteArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectGroupMember.
     * @param {ProjectGroupMemberUpdateArgs} args - Arguments to update one ProjectGroupMember.
     * @example
     * // Update one ProjectGroupMember
     * const projectGroupMember = await prisma.projectGroupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectGroupMemberUpdateArgs>(args: SelectSubset<T, ProjectGroupMemberUpdateArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectGroupMembers.
     * @param {ProjectGroupMemberDeleteManyArgs} args - Arguments to filter ProjectGroupMembers to delete.
     * @example
     * // Delete a few ProjectGroupMembers
     * const { count } = await prisma.projectGroupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectGroupMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectGroupMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectGroupMembers
     * const projectGroupMember = await prisma.projectGroupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectGroupMemberUpdateManyArgs>(args: SelectSubset<T, ProjectGroupMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectGroupMember.
     * @param {ProjectGroupMemberUpsertArgs} args - Arguments to update or create a ProjectGroupMember.
     * @example
     * // Update or create a ProjectGroupMember
     * const projectGroupMember = await prisma.projectGroupMember.upsert({
     *   create: {
     *     // ... data to create a ProjectGroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectGroupMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectGroupMemberUpsertArgs>(args: SelectSubset<T, ProjectGroupMemberUpsertArgs<ExtArgs>>): Prisma__ProjectGroupMemberClient<$Result.GetResult<Prisma.$ProjectGroupMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectGroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberCountArgs} args - Arguments to filter ProjectGroupMembers to count.
     * @example
     * // Count the number of ProjectGroupMembers
     * const count = await prisma.projectGroupMember.count({
     *   where: {
     *     // ... the filter for the ProjectGroupMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectGroupMemberCountArgs>(
      args?: Subset<T, ProjectGroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectGroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectGroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectGroupMemberAggregateArgs>(args: Subset<T, ProjectGroupMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectGroupMemberAggregateType<T>>

    /**
     * Group by ProjectGroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectGroupMember model
   */
  readonly fields: ProjectGroupMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectGroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectGroupMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectGroup<T extends ProjectGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroupDefaultArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectGroupMember model
   */
  interface ProjectGroupMemberFieldRefs {
    readonly ProjectGroupMemberID: FieldRef<"ProjectGroupMember", 'Int'>
    readonly ProjectGroupID: FieldRef<"ProjectGroupMember", 'Int'>
    readonly StudentID: FieldRef<"ProjectGroupMember", 'Int'>
    readonly IsGroupLeader: FieldRef<"ProjectGroupMember", 'Boolean'>
    readonly StudentCGPA: FieldRef<"ProjectGroupMember", 'Decimal'>
    readonly Description: FieldRef<"ProjectGroupMember", 'String'>
    readonly Created: FieldRef<"ProjectGroupMember", 'DateTime'>
    readonly Modified: FieldRef<"ProjectGroupMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectGroupMember findUnique
   */
  export type ProjectGroupMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroupMember to fetch.
     */
    where: ProjectGroupMemberWhereUniqueInput
  }

  /**
   * ProjectGroupMember findUniqueOrThrow
   */
  export type ProjectGroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroupMember to fetch.
     */
    where: ProjectGroupMemberWhereUniqueInput
  }

  /**
   * ProjectGroupMember findFirst
   */
  export type ProjectGroupMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroupMember to fetch.
     */
    where?: ProjectGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroupMembers to fetch.
     */
    orderBy?: ProjectGroupMemberOrderByWithRelationInput | ProjectGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectGroupMembers.
     */
    cursor?: ProjectGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectGroupMembers.
     */
    distinct?: ProjectGroupMemberScalarFieldEnum | ProjectGroupMemberScalarFieldEnum[]
  }

  /**
   * ProjectGroupMember findFirstOrThrow
   */
  export type ProjectGroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroupMember to fetch.
     */
    where?: ProjectGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroupMembers to fetch.
     */
    orderBy?: ProjectGroupMemberOrderByWithRelationInput | ProjectGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectGroupMembers.
     */
    cursor?: ProjectGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectGroupMembers.
     */
    distinct?: ProjectGroupMemberScalarFieldEnum | ProjectGroupMemberScalarFieldEnum[]
  }

  /**
   * ProjectGroupMember findMany
   */
  export type ProjectGroupMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectGroupMembers to fetch.
     */
    where?: ProjectGroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectGroupMembers to fetch.
     */
    orderBy?: ProjectGroupMemberOrderByWithRelationInput | ProjectGroupMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectGroupMembers.
     */
    cursor?: ProjectGroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectGroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectGroupMembers.
     */
    skip?: number
    distinct?: ProjectGroupMemberScalarFieldEnum | ProjectGroupMemberScalarFieldEnum[]
  }

  /**
   * ProjectGroupMember create
   */
  export type ProjectGroupMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectGroupMember.
     */
    data: XOR<ProjectGroupMemberCreateInput, ProjectGroupMemberUncheckedCreateInput>
  }

  /**
   * ProjectGroupMember createMany
   */
  export type ProjectGroupMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectGroupMembers.
     */
    data: ProjectGroupMemberCreateManyInput | ProjectGroupMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectGroupMember update
   */
  export type ProjectGroupMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectGroupMember.
     */
    data: XOR<ProjectGroupMemberUpdateInput, ProjectGroupMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectGroupMember to update.
     */
    where: ProjectGroupMemberWhereUniqueInput
  }

  /**
   * ProjectGroupMember updateMany
   */
  export type ProjectGroupMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectGroupMembers.
     */
    data: XOR<ProjectGroupMemberUpdateManyMutationInput, ProjectGroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectGroupMembers to update
     */
    where?: ProjectGroupMemberWhereInput
    /**
     * Limit how many ProjectGroupMembers to update.
     */
    limit?: number
  }

  /**
   * ProjectGroupMember upsert
   */
  export type ProjectGroupMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectGroupMember to update in case it exists.
     */
    where: ProjectGroupMemberWhereUniqueInput
    /**
     * In case the ProjectGroupMember found by the `where` argument doesn't exist, create a new ProjectGroupMember with this data.
     */
    create: XOR<ProjectGroupMemberCreateInput, ProjectGroupMemberUncheckedCreateInput>
    /**
     * In case the ProjectGroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectGroupMemberUpdateInput, ProjectGroupMemberUncheckedUpdateInput>
  }

  /**
   * ProjectGroupMember delete
   */
  export type ProjectGroupMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectGroupMember to delete.
     */
    where: ProjectGroupMemberWhereUniqueInput
  }

  /**
   * ProjectGroupMember deleteMany
   */
  export type ProjectGroupMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectGroupMembers to delete
     */
    where?: ProjectGroupMemberWhereInput
    /**
     * Limit how many ProjectGroupMembers to delete.
     */
    limit?: number
  }

  /**
   * ProjectGroupMember without action
   */
  export type ProjectGroupMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectGroupMember
     */
    select?: ProjectGroupMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectGroupMember
     */
    omit?: ProjectGroupMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectGroupMemberInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMeeting
   */

  export type AggregateProjectMeeting = {
    _count: ProjectMeetingCountAggregateOutputType | null
    _avg: ProjectMeetingAvgAggregateOutputType | null
    _sum: ProjectMeetingSumAggregateOutputType | null
    _min: ProjectMeetingMinAggregateOutputType | null
    _max: ProjectMeetingMaxAggregateOutputType | null
  }

  export type ProjectMeetingAvgAggregateOutputType = {
    ProjectMeetingID: number | null
    ProjectGroupID: number | null
    GuideStaffID: number | null
    StatusUpdatedByStaffID: number | null
  }

  export type ProjectMeetingSumAggregateOutputType = {
    ProjectMeetingID: number | null
    ProjectGroupID: number | null
    GuideStaffID: number | null
    StatusUpdatedByStaffID: number | null
  }

  export type ProjectMeetingMinAggregateOutputType = {
    ProjectMeetingID: number | null
    ProjectGroupID: number | null
    GuideStaffID: number | null
    MeetingDateTime: Date | null
    MeetingPurpose: string | null
    MeetingLocation: string | null
    MeetingNotes: string | null
    MeetingStatus: $Enums.MeetingStatus | null
    MeetingStatusDescription: string | null
    MeetingStatusDatetime: Date | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
    StatusUpdatedByStaffID: number | null
  }

  export type ProjectMeetingMaxAggregateOutputType = {
    ProjectMeetingID: number | null
    ProjectGroupID: number | null
    GuideStaffID: number | null
    MeetingDateTime: Date | null
    MeetingPurpose: string | null
    MeetingLocation: string | null
    MeetingNotes: string | null
    MeetingStatus: $Enums.MeetingStatus | null
    MeetingStatusDescription: string | null
    MeetingStatusDatetime: Date | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
    StatusUpdatedByStaffID: number | null
  }

  export type ProjectMeetingCountAggregateOutputType = {
    ProjectMeetingID: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: number
    MeetingPurpose: number
    MeetingLocation: number
    MeetingNotes: number
    MeetingStatus: number
    MeetingStatusDescription: number
    MeetingStatusDatetime: number
    Description: number
    Created: number
    Modified: number
    StatusUpdatedByStaffID: number
    _all: number
  }


  export type ProjectMeetingAvgAggregateInputType = {
    ProjectMeetingID?: true
    ProjectGroupID?: true
    GuideStaffID?: true
    StatusUpdatedByStaffID?: true
  }

  export type ProjectMeetingSumAggregateInputType = {
    ProjectMeetingID?: true
    ProjectGroupID?: true
    GuideStaffID?: true
    StatusUpdatedByStaffID?: true
  }

  export type ProjectMeetingMinAggregateInputType = {
    ProjectMeetingID?: true
    ProjectGroupID?: true
    GuideStaffID?: true
    MeetingDateTime?: true
    MeetingPurpose?: true
    MeetingLocation?: true
    MeetingNotes?: true
    MeetingStatus?: true
    MeetingStatusDescription?: true
    MeetingStatusDatetime?: true
    Description?: true
    Created?: true
    Modified?: true
    StatusUpdatedByStaffID?: true
  }

  export type ProjectMeetingMaxAggregateInputType = {
    ProjectMeetingID?: true
    ProjectGroupID?: true
    GuideStaffID?: true
    MeetingDateTime?: true
    MeetingPurpose?: true
    MeetingLocation?: true
    MeetingNotes?: true
    MeetingStatus?: true
    MeetingStatusDescription?: true
    MeetingStatusDatetime?: true
    Description?: true
    Created?: true
    Modified?: true
    StatusUpdatedByStaffID?: true
  }

  export type ProjectMeetingCountAggregateInputType = {
    ProjectMeetingID?: true
    ProjectGroupID?: true
    GuideStaffID?: true
    MeetingDateTime?: true
    MeetingPurpose?: true
    MeetingLocation?: true
    MeetingNotes?: true
    MeetingStatus?: true
    MeetingStatusDescription?: true
    MeetingStatusDatetime?: true
    Description?: true
    Created?: true
    Modified?: true
    StatusUpdatedByStaffID?: true
    _all?: true
  }

  export type ProjectMeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMeeting to aggregate.
     */
    where?: ProjectMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetings to fetch.
     */
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMeetings
    **/
    _count?: true | ProjectMeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMeetingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMeetingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMeetingMaxAggregateInputType
  }

  export type GetProjectMeetingAggregateType<T extends ProjectMeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMeeting[P]>
      : GetScalarType<T[P], AggregateProjectMeeting[P]>
  }




  export type ProjectMeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingWhereInput
    orderBy?: ProjectMeetingOrderByWithAggregationInput | ProjectMeetingOrderByWithAggregationInput[]
    by: ProjectMeetingScalarFieldEnum[] | ProjectMeetingScalarFieldEnum
    having?: ProjectMeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMeetingCountAggregateInputType | true
    _avg?: ProjectMeetingAvgAggregateInputType
    _sum?: ProjectMeetingSumAggregateInputType
    _min?: ProjectMeetingMinAggregateInputType
    _max?: ProjectMeetingMaxAggregateInputType
  }

  export type ProjectMeetingGroupByOutputType = {
    ProjectMeetingID: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: Date
    MeetingPurpose: string | null
    MeetingLocation: string | null
    MeetingNotes: string | null
    MeetingStatus: $Enums.MeetingStatus
    MeetingStatusDescription: string | null
    MeetingStatusDatetime: Date | null
    Description: string | null
    Created: Date
    Modified: Date
    StatusUpdatedByStaffID: number | null
    _count: ProjectMeetingCountAggregateOutputType | null
    _avg: ProjectMeetingAvgAggregateOutputType | null
    _sum: ProjectMeetingSumAggregateOutputType | null
    _min: ProjectMeetingMinAggregateOutputType | null
    _max: ProjectMeetingMaxAggregateOutputType | null
  }

  type GetProjectMeetingGroupByPayload<T extends ProjectMeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMeetingGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMeetingGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectMeetingID?: boolean
    ProjectGroupID?: boolean
    GuideStaffID?: boolean
    MeetingDateTime?: boolean
    MeetingPurpose?: boolean
    MeetingLocation?: boolean
    MeetingNotes?: boolean
    MeetingStatus?: boolean
    MeetingStatusDescription?: boolean
    MeetingStatusDatetime?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    StatusUpdatedByStaffID?: boolean
    projectGroup?: boolean | ProjectGroupDefaultArgs<ExtArgs>
    guide?: boolean | StaffDefaultArgs<ExtArgs>
    statusBy?: boolean | ProjectMeeting$statusByArgs<ExtArgs>
    attendances?: boolean | ProjectMeeting$attendancesArgs<ExtArgs>
    _count?: boolean | ProjectMeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMeeting"]>



  export type ProjectMeetingSelectScalar = {
    ProjectMeetingID?: boolean
    ProjectGroupID?: boolean
    GuideStaffID?: boolean
    MeetingDateTime?: boolean
    MeetingPurpose?: boolean
    MeetingLocation?: boolean
    MeetingNotes?: boolean
    MeetingStatus?: boolean
    MeetingStatusDescription?: boolean
    MeetingStatusDatetime?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    StatusUpdatedByStaffID?: boolean
  }

  export type ProjectMeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectMeetingID" | "ProjectGroupID" | "GuideStaffID" | "MeetingDateTime" | "MeetingPurpose" | "MeetingLocation" | "MeetingNotes" | "MeetingStatus" | "MeetingStatusDescription" | "MeetingStatusDatetime" | "Description" | "Created" | "Modified" | "StatusUpdatedByStaffID", ExtArgs["result"]["projectMeeting"]>
  export type ProjectMeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectGroup?: boolean | ProjectGroupDefaultArgs<ExtArgs>
    guide?: boolean | StaffDefaultArgs<ExtArgs>
    statusBy?: boolean | ProjectMeeting$statusByArgs<ExtArgs>
    attendances?: boolean | ProjectMeeting$attendancesArgs<ExtArgs>
    _count?: boolean | ProjectMeetingCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProjectMeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMeeting"
    objects: {
      projectGroup: Prisma.$ProjectGroupPayload<ExtArgs>
      guide: Prisma.$StaffPayload<ExtArgs>
      statusBy: Prisma.$StaffPayload<ExtArgs> | null
      attendances: Prisma.$ProjectMeetingAttendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectMeetingID: number
      ProjectGroupID: number
      GuideStaffID: number
      MeetingDateTime: Date
      MeetingPurpose: string | null
      MeetingLocation: string | null
      MeetingNotes: string | null
      MeetingStatus: $Enums.MeetingStatus
      MeetingStatusDescription: string | null
      MeetingStatusDatetime: Date | null
      Description: string | null
      Created: Date
      Modified: Date
      StatusUpdatedByStaffID: number | null
    }, ExtArgs["result"]["projectMeeting"]>
    composites: {}
  }

  type ProjectMeetingGetPayload<S extends boolean | null | undefined | ProjectMeetingDefaultArgs> = $Result.GetResult<Prisma.$ProjectMeetingPayload, S>

  type ProjectMeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMeetingCountAggregateInputType | true
    }

  export interface ProjectMeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMeeting'], meta: { name: 'ProjectMeeting' } }
    /**
     * Find zero or one ProjectMeeting that matches the filter.
     * @param {ProjectMeetingFindUniqueArgs} args - Arguments to find a ProjectMeeting
     * @example
     * // Get one ProjectMeeting
     * const projectMeeting = await prisma.projectMeeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMeetingFindUniqueArgs>(args: SelectSubset<T, ProjectMeetingFindUniqueArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMeeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMeetingFindUniqueOrThrowArgs} args - Arguments to find a ProjectMeeting
     * @example
     * // Get one ProjectMeeting
     * const projectMeeting = await prisma.projectMeeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMeeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingFindFirstArgs} args - Arguments to find a ProjectMeeting
     * @example
     * // Get one ProjectMeeting
     * const projectMeeting = await prisma.projectMeeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMeetingFindFirstArgs>(args?: SelectSubset<T, ProjectMeetingFindFirstArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMeeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingFindFirstOrThrowArgs} args - Arguments to find a ProjectMeeting
     * @example
     * // Get one ProjectMeeting
     * const projectMeeting = await prisma.projectMeeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMeetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMeetings
     * const projectMeetings = await prisma.projectMeeting.findMany()
     * 
     * // Get first 10 ProjectMeetings
     * const projectMeetings = await prisma.projectMeeting.findMany({ take: 10 })
     * 
     * // Only select the `ProjectMeetingID`
     * const projectMeetingWithProjectMeetingIDOnly = await prisma.projectMeeting.findMany({ select: { ProjectMeetingID: true } })
     * 
     */
    findMany<T extends ProjectMeetingFindManyArgs>(args?: SelectSubset<T, ProjectMeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMeeting.
     * @param {ProjectMeetingCreateArgs} args - Arguments to create a ProjectMeeting.
     * @example
     * // Create one ProjectMeeting
     * const ProjectMeeting = await prisma.projectMeeting.create({
     *   data: {
     *     // ... data to create a ProjectMeeting
     *   }
     * })
     * 
     */
    create<T extends ProjectMeetingCreateArgs>(args: SelectSubset<T, ProjectMeetingCreateArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMeetings.
     * @param {ProjectMeetingCreateManyArgs} args - Arguments to create many ProjectMeetings.
     * @example
     * // Create many ProjectMeetings
     * const projectMeeting = await prisma.projectMeeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMeetingCreateManyArgs>(args?: SelectSubset<T, ProjectMeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectMeeting.
     * @param {ProjectMeetingDeleteArgs} args - Arguments to delete one ProjectMeeting.
     * @example
     * // Delete one ProjectMeeting
     * const ProjectMeeting = await prisma.projectMeeting.delete({
     *   where: {
     *     // ... filter to delete one ProjectMeeting
     *   }
     * })
     * 
     */
    delete<T extends ProjectMeetingDeleteArgs>(args: SelectSubset<T, ProjectMeetingDeleteArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMeeting.
     * @param {ProjectMeetingUpdateArgs} args - Arguments to update one ProjectMeeting.
     * @example
     * // Update one ProjectMeeting
     * const projectMeeting = await prisma.projectMeeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMeetingUpdateArgs>(args: SelectSubset<T, ProjectMeetingUpdateArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMeetings.
     * @param {ProjectMeetingDeleteManyArgs} args - Arguments to filter ProjectMeetings to delete.
     * @example
     * // Delete a few ProjectMeetings
     * const { count } = await prisma.projectMeeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMeetingDeleteManyArgs>(args?: SelectSubset<T, ProjectMeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMeetings
     * const projectMeeting = await prisma.projectMeeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMeetingUpdateManyArgs>(args: SelectSubset<T, ProjectMeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMeeting.
     * @param {ProjectMeetingUpsertArgs} args - Arguments to update or create a ProjectMeeting.
     * @example
     * // Update or create a ProjectMeeting
     * const projectMeeting = await prisma.projectMeeting.upsert({
     *   create: {
     *     // ... data to create a ProjectMeeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMeeting we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMeetingUpsertArgs>(args: SelectSubset<T, ProjectMeetingUpsertArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMeetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingCountArgs} args - Arguments to filter ProjectMeetings to count.
     * @example
     * // Count the number of ProjectMeetings
     * const count = await prisma.projectMeeting.count({
     *   where: {
     *     // ... the filter for the ProjectMeetings we want to count
     *   }
     * })
    **/
    count<T extends ProjectMeetingCountArgs>(
      args?: Subset<T, ProjectMeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMeetingAggregateArgs>(args: Subset<T, ProjectMeetingAggregateArgs>): Prisma.PrismaPromise<GetProjectMeetingAggregateType<T>>

    /**
     * Group by ProjectMeeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMeetingGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMeeting model
   */
  readonly fields: ProjectMeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMeeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectGroup<T extends ProjectGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroupDefaultArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guide<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    statusBy<T extends ProjectMeeting$statusByArgs<ExtArgs> = {}>(args?: Subset<T, ProjectMeeting$statusByArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    attendances<T extends ProjectMeeting$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, ProjectMeeting$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMeeting model
   */
  interface ProjectMeetingFieldRefs {
    readonly ProjectMeetingID: FieldRef<"ProjectMeeting", 'Int'>
    readonly ProjectGroupID: FieldRef<"ProjectMeeting", 'Int'>
    readonly GuideStaffID: FieldRef<"ProjectMeeting", 'Int'>
    readonly MeetingDateTime: FieldRef<"ProjectMeeting", 'DateTime'>
    readonly MeetingPurpose: FieldRef<"ProjectMeeting", 'String'>
    readonly MeetingLocation: FieldRef<"ProjectMeeting", 'String'>
    readonly MeetingNotes: FieldRef<"ProjectMeeting", 'String'>
    readonly MeetingStatus: FieldRef<"ProjectMeeting", 'MeetingStatus'>
    readonly MeetingStatusDescription: FieldRef<"ProjectMeeting", 'String'>
    readonly MeetingStatusDatetime: FieldRef<"ProjectMeeting", 'DateTime'>
    readonly Description: FieldRef<"ProjectMeeting", 'String'>
    readonly Created: FieldRef<"ProjectMeeting", 'DateTime'>
    readonly Modified: FieldRef<"ProjectMeeting", 'DateTime'>
    readonly StatusUpdatedByStaffID: FieldRef<"ProjectMeeting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMeeting findUnique
   */
  export type ProjectMeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeeting to fetch.
     */
    where: ProjectMeetingWhereUniqueInput
  }

  /**
   * ProjectMeeting findUniqueOrThrow
   */
  export type ProjectMeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeeting to fetch.
     */
    where: ProjectMeetingWhereUniqueInput
  }

  /**
   * ProjectMeeting findFirst
   */
  export type ProjectMeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeeting to fetch.
     */
    where?: ProjectMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetings to fetch.
     */
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMeetings.
     */
    cursor?: ProjectMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMeetings.
     */
    distinct?: ProjectMeetingScalarFieldEnum | ProjectMeetingScalarFieldEnum[]
  }

  /**
   * ProjectMeeting findFirstOrThrow
   */
  export type ProjectMeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeeting to fetch.
     */
    where?: ProjectMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetings to fetch.
     */
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMeetings.
     */
    cursor?: ProjectMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMeetings.
     */
    distinct?: ProjectMeetingScalarFieldEnum | ProjectMeetingScalarFieldEnum[]
  }

  /**
   * ProjectMeeting findMany
   */
  export type ProjectMeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeetings to fetch.
     */
    where?: ProjectMeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetings to fetch.
     */
    orderBy?: ProjectMeetingOrderByWithRelationInput | ProjectMeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMeetings.
     */
    cursor?: ProjectMeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetings.
     */
    skip?: number
    distinct?: ProjectMeetingScalarFieldEnum | ProjectMeetingScalarFieldEnum[]
  }

  /**
   * ProjectMeeting create
   */
  export type ProjectMeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMeeting.
     */
    data: XOR<ProjectMeetingCreateInput, ProjectMeetingUncheckedCreateInput>
  }

  /**
   * ProjectMeeting createMany
   */
  export type ProjectMeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMeetings.
     */
    data: ProjectMeetingCreateManyInput | ProjectMeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMeeting update
   */
  export type ProjectMeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMeeting.
     */
    data: XOR<ProjectMeetingUpdateInput, ProjectMeetingUncheckedUpdateInput>
    /**
     * Choose, which ProjectMeeting to update.
     */
    where: ProjectMeetingWhereUniqueInput
  }

  /**
   * ProjectMeeting updateMany
   */
  export type ProjectMeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMeetings.
     */
    data: XOR<ProjectMeetingUpdateManyMutationInput, ProjectMeetingUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMeetings to update
     */
    where?: ProjectMeetingWhereInput
    /**
     * Limit how many ProjectMeetings to update.
     */
    limit?: number
  }

  /**
   * ProjectMeeting upsert
   */
  export type ProjectMeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMeeting to update in case it exists.
     */
    where: ProjectMeetingWhereUniqueInput
    /**
     * In case the ProjectMeeting found by the `where` argument doesn't exist, create a new ProjectMeeting with this data.
     */
    create: XOR<ProjectMeetingCreateInput, ProjectMeetingUncheckedCreateInput>
    /**
     * In case the ProjectMeeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMeetingUpdateInput, ProjectMeetingUncheckedUpdateInput>
  }

  /**
   * ProjectMeeting delete
   */
  export type ProjectMeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
    /**
     * Filter which ProjectMeeting to delete.
     */
    where: ProjectMeetingWhereUniqueInput
  }

  /**
   * ProjectMeeting deleteMany
   */
  export type ProjectMeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMeetings to delete
     */
    where?: ProjectMeetingWhereInput
    /**
     * Limit how many ProjectMeetings to delete.
     */
    limit?: number
  }

  /**
   * ProjectMeeting.statusBy
   */
  export type ProjectMeeting$statusByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * ProjectMeeting.attendances
   */
  export type ProjectMeeting$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    where?: ProjectMeetingAttendanceWhereInput
    orderBy?: ProjectMeetingAttendanceOrderByWithRelationInput | ProjectMeetingAttendanceOrderByWithRelationInput[]
    cursor?: ProjectMeetingAttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMeetingAttendanceScalarFieldEnum | ProjectMeetingAttendanceScalarFieldEnum[]
  }

  /**
   * ProjectMeeting without action
   */
  export type ProjectMeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeeting
     */
    select?: ProjectMeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeeting
     */
    omit?: ProjectMeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMeetingAttendance
   */

  export type AggregateProjectMeetingAttendance = {
    _count: ProjectMeetingAttendanceCountAggregateOutputType | null
    _avg: ProjectMeetingAttendanceAvgAggregateOutputType | null
    _sum: ProjectMeetingAttendanceSumAggregateOutputType | null
    _min: ProjectMeetingAttendanceMinAggregateOutputType | null
    _max: ProjectMeetingAttendanceMaxAggregateOutputType | null
  }

  export type ProjectMeetingAttendanceAvgAggregateOutputType = {
    ProjectMeetingAttendanceID: number | null
    ProjectMeetingID: number | null
    StudentID: number | null
  }

  export type ProjectMeetingAttendanceSumAggregateOutputType = {
    ProjectMeetingAttendanceID: number | null
    ProjectMeetingID: number | null
    StudentID: number | null
  }

  export type ProjectMeetingAttendanceMinAggregateOutputType = {
    ProjectMeetingAttendanceID: number | null
    ProjectMeetingID: number | null
    StudentID: number | null
    IsPresent: boolean | null
    AttendanceRemarks: string | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectMeetingAttendanceMaxAggregateOutputType = {
    ProjectMeetingAttendanceID: number | null
    ProjectMeetingID: number | null
    StudentID: number | null
    IsPresent: boolean | null
    AttendanceRemarks: string | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectMeetingAttendanceCountAggregateOutputType = {
    ProjectMeetingAttendanceID: number
    ProjectMeetingID: number
    StudentID: number
    IsPresent: number
    AttendanceRemarks: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type ProjectMeetingAttendanceAvgAggregateInputType = {
    ProjectMeetingAttendanceID?: true
    ProjectMeetingID?: true
    StudentID?: true
  }

  export type ProjectMeetingAttendanceSumAggregateInputType = {
    ProjectMeetingAttendanceID?: true
    ProjectMeetingID?: true
    StudentID?: true
  }

  export type ProjectMeetingAttendanceMinAggregateInputType = {
    ProjectMeetingAttendanceID?: true
    ProjectMeetingID?: true
    StudentID?: true
    IsPresent?: true
    AttendanceRemarks?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectMeetingAttendanceMaxAggregateInputType = {
    ProjectMeetingAttendanceID?: true
    ProjectMeetingID?: true
    StudentID?: true
    IsPresent?: true
    AttendanceRemarks?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectMeetingAttendanceCountAggregateInputType = {
    ProjectMeetingAttendanceID?: true
    ProjectMeetingID?: true
    StudentID?: true
    IsPresent?: true
    AttendanceRemarks?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ProjectMeetingAttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMeetingAttendance to aggregate.
     */
    where?: ProjectMeetingAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetingAttendances to fetch.
     */
    orderBy?: ProjectMeetingAttendanceOrderByWithRelationInput | ProjectMeetingAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMeetingAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetingAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetingAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMeetingAttendances
    **/
    _count?: true | ProjectMeetingAttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectMeetingAttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectMeetingAttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMeetingAttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMeetingAttendanceMaxAggregateInputType
  }

  export type GetProjectMeetingAttendanceAggregateType<T extends ProjectMeetingAttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMeetingAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMeetingAttendance[P]>
      : GetScalarType<T[P], AggregateProjectMeetingAttendance[P]>
  }




  export type ProjectMeetingAttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMeetingAttendanceWhereInput
    orderBy?: ProjectMeetingAttendanceOrderByWithAggregationInput | ProjectMeetingAttendanceOrderByWithAggregationInput[]
    by: ProjectMeetingAttendanceScalarFieldEnum[] | ProjectMeetingAttendanceScalarFieldEnum
    having?: ProjectMeetingAttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMeetingAttendanceCountAggregateInputType | true
    _avg?: ProjectMeetingAttendanceAvgAggregateInputType
    _sum?: ProjectMeetingAttendanceSumAggregateInputType
    _min?: ProjectMeetingAttendanceMinAggregateInputType
    _max?: ProjectMeetingAttendanceMaxAggregateInputType
  }

  export type ProjectMeetingAttendanceGroupByOutputType = {
    ProjectMeetingAttendanceID: number
    ProjectMeetingID: number
    StudentID: number
    IsPresent: boolean
    AttendanceRemarks: string | null
    Description: string | null
    Created: Date
    Modified: Date
    _count: ProjectMeetingAttendanceCountAggregateOutputType | null
    _avg: ProjectMeetingAttendanceAvgAggregateOutputType | null
    _sum: ProjectMeetingAttendanceSumAggregateOutputType | null
    _min: ProjectMeetingAttendanceMinAggregateOutputType | null
    _max: ProjectMeetingAttendanceMaxAggregateOutputType | null
  }

  type GetProjectMeetingAttendanceGroupByPayload<T extends ProjectMeetingAttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMeetingAttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMeetingAttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMeetingAttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMeetingAttendanceGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMeetingAttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectMeetingAttendanceID?: boolean
    ProjectMeetingID?: boolean
    StudentID?: boolean
    IsPresent?: boolean
    AttendanceRemarks?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    meeting?: boolean | ProjectMeetingDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMeetingAttendance"]>



  export type ProjectMeetingAttendanceSelectScalar = {
    ProjectMeetingAttendanceID?: boolean
    ProjectMeetingID?: boolean
    StudentID?: boolean
    IsPresent?: boolean
    AttendanceRemarks?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type ProjectMeetingAttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectMeetingAttendanceID" | "ProjectMeetingID" | "StudentID" | "IsPresent" | "AttendanceRemarks" | "Description" | "Created" | "Modified", ExtArgs["result"]["projectMeetingAttendance"]>
  export type ProjectMeetingAttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | ProjectMeetingDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $ProjectMeetingAttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMeetingAttendance"
    objects: {
      meeting: Prisma.$ProjectMeetingPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectMeetingAttendanceID: number
      ProjectMeetingID: number
      StudentID: number
      IsPresent: boolean
      AttendanceRemarks: string | null
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["projectMeetingAttendance"]>
    composites: {}
  }

  type ProjectMeetingAttendanceGetPayload<S extends boolean | null | undefined | ProjectMeetingAttendanceDefaultArgs> = $Result.GetResult<Prisma.$ProjectMeetingAttendancePayload, S>

  type ProjectMeetingAttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectMeetingAttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectMeetingAttendanceCountAggregateInputType | true
    }

  export interface ProjectMeetingAttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMeetingAttendance'], meta: { name: 'ProjectMeetingAttendance' } }
    /**
     * Find zero or one ProjectMeetingAttendance that matches the filter.
     * @param {ProjectMeetingAttendanceFindUniqueArgs} args - Arguments to find a ProjectMeetingAttendance
     * @example
     * // Get one ProjectMeetingAttendance
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMeetingAttendanceFindUniqueArgs>(args: SelectSubset<T, ProjectMeetingAttendanceFindUniqueArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectMeetingAttendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectMeetingAttendanceFindUniqueOrThrowArgs} args - Arguments to find a ProjectMeetingAttendance
     * @example
     * // Get one ProjectMeetingAttendance
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMeetingAttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMeetingAttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMeetingAttendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceFindFirstArgs} args - Arguments to find a ProjectMeetingAttendance
     * @example
     * // Get one ProjectMeetingAttendance
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMeetingAttendanceFindFirstArgs>(args?: SelectSubset<T, ProjectMeetingAttendanceFindFirstArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectMeetingAttendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceFindFirstOrThrowArgs} args - Arguments to find a ProjectMeetingAttendance
     * @example
     * // Get one ProjectMeetingAttendance
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMeetingAttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMeetingAttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectMeetingAttendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMeetingAttendances
     * const projectMeetingAttendances = await prisma.projectMeetingAttendance.findMany()
     * 
     * // Get first 10 ProjectMeetingAttendances
     * const projectMeetingAttendances = await prisma.projectMeetingAttendance.findMany({ take: 10 })
     * 
     * // Only select the `ProjectMeetingAttendanceID`
     * const projectMeetingAttendanceWithProjectMeetingAttendanceIDOnly = await prisma.projectMeetingAttendance.findMany({ select: { ProjectMeetingAttendanceID: true } })
     * 
     */
    findMany<T extends ProjectMeetingAttendanceFindManyArgs>(args?: SelectSubset<T, ProjectMeetingAttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectMeetingAttendance.
     * @param {ProjectMeetingAttendanceCreateArgs} args - Arguments to create a ProjectMeetingAttendance.
     * @example
     * // Create one ProjectMeetingAttendance
     * const ProjectMeetingAttendance = await prisma.projectMeetingAttendance.create({
     *   data: {
     *     // ... data to create a ProjectMeetingAttendance
     *   }
     * })
     * 
     */
    create<T extends ProjectMeetingAttendanceCreateArgs>(args: SelectSubset<T, ProjectMeetingAttendanceCreateArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectMeetingAttendances.
     * @param {ProjectMeetingAttendanceCreateManyArgs} args - Arguments to create many ProjectMeetingAttendances.
     * @example
     * // Create many ProjectMeetingAttendances
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMeetingAttendanceCreateManyArgs>(args?: SelectSubset<T, ProjectMeetingAttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectMeetingAttendance.
     * @param {ProjectMeetingAttendanceDeleteArgs} args - Arguments to delete one ProjectMeetingAttendance.
     * @example
     * // Delete one ProjectMeetingAttendance
     * const ProjectMeetingAttendance = await prisma.projectMeetingAttendance.delete({
     *   where: {
     *     // ... filter to delete one ProjectMeetingAttendance
     *   }
     * })
     * 
     */
    delete<T extends ProjectMeetingAttendanceDeleteArgs>(args: SelectSubset<T, ProjectMeetingAttendanceDeleteArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectMeetingAttendance.
     * @param {ProjectMeetingAttendanceUpdateArgs} args - Arguments to update one ProjectMeetingAttendance.
     * @example
     * // Update one ProjectMeetingAttendance
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMeetingAttendanceUpdateArgs>(args: SelectSubset<T, ProjectMeetingAttendanceUpdateArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectMeetingAttendances.
     * @param {ProjectMeetingAttendanceDeleteManyArgs} args - Arguments to filter ProjectMeetingAttendances to delete.
     * @example
     * // Delete a few ProjectMeetingAttendances
     * const { count } = await prisma.projectMeetingAttendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMeetingAttendanceDeleteManyArgs>(args?: SelectSubset<T, ProjectMeetingAttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMeetingAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMeetingAttendances
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMeetingAttendanceUpdateManyArgs>(args: SelectSubset<T, ProjectMeetingAttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMeetingAttendance.
     * @param {ProjectMeetingAttendanceUpsertArgs} args - Arguments to update or create a ProjectMeetingAttendance.
     * @example
     * // Update or create a ProjectMeetingAttendance
     * const projectMeetingAttendance = await prisma.projectMeetingAttendance.upsert({
     *   create: {
     *     // ... data to create a ProjectMeetingAttendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMeetingAttendance we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMeetingAttendanceUpsertArgs>(args: SelectSubset<T, ProjectMeetingAttendanceUpsertArgs<ExtArgs>>): Prisma__ProjectMeetingAttendanceClient<$Result.GetResult<Prisma.$ProjectMeetingAttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectMeetingAttendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceCountArgs} args - Arguments to filter ProjectMeetingAttendances to count.
     * @example
     * // Count the number of ProjectMeetingAttendances
     * const count = await prisma.projectMeetingAttendance.count({
     *   where: {
     *     // ... the filter for the ProjectMeetingAttendances we want to count
     *   }
     * })
    **/
    count<T extends ProjectMeetingAttendanceCountArgs>(
      args?: Subset<T, ProjectMeetingAttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMeetingAttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMeetingAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMeetingAttendanceAggregateArgs>(args: Subset<T, ProjectMeetingAttendanceAggregateArgs>): Prisma.PrismaPromise<GetProjectMeetingAttendanceAggregateType<T>>

    /**
     * Group by ProjectMeetingAttendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMeetingAttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMeetingAttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMeetingAttendanceGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMeetingAttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMeetingAttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMeetingAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMeetingAttendance model
   */
  readonly fields: ProjectMeetingAttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMeetingAttendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMeetingAttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends ProjectMeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectMeetingDefaultArgs<ExtArgs>>): Prisma__ProjectMeetingClient<$Result.GetResult<Prisma.$ProjectMeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMeetingAttendance model
   */
  interface ProjectMeetingAttendanceFieldRefs {
    readonly ProjectMeetingAttendanceID: FieldRef<"ProjectMeetingAttendance", 'Int'>
    readonly ProjectMeetingID: FieldRef<"ProjectMeetingAttendance", 'Int'>
    readonly StudentID: FieldRef<"ProjectMeetingAttendance", 'Int'>
    readonly IsPresent: FieldRef<"ProjectMeetingAttendance", 'Boolean'>
    readonly AttendanceRemarks: FieldRef<"ProjectMeetingAttendance", 'String'>
    readonly Description: FieldRef<"ProjectMeetingAttendance", 'String'>
    readonly Created: FieldRef<"ProjectMeetingAttendance", 'DateTime'>
    readonly Modified: FieldRef<"ProjectMeetingAttendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMeetingAttendance findUnique
   */
  export type ProjectMeetingAttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeetingAttendance to fetch.
     */
    where: ProjectMeetingAttendanceWhereUniqueInput
  }

  /**
   * ProjectMeetingAttendance findUniqueOrThrow
   */
  export type ProjectMeetingAttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeetingAttendance to fetch.
     */
    where: ProjectMeetingAttendanceWhereUniqueInput
  }

  /**
   * ProjectMeetingAttendance findFirst
   */
  export type ProjectMeetingAttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeetingAttendance to fetch.
     */
    where?: ProjectMeetingAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetingAttendances to fetch.
     */
    orderBy?: ProjectMeetingAttendanceOrderByWithRelationInput | ProjectMeetingAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMeetingAttendances.
     */
    cursor?: ProjectMeetingAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetingAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetingAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMeetingAttendances.
     */
    distinct?: ProjectMeetingAttendanceScalarFieldEnum | ProjectMeetingAttendanceScalarFieldEnum[]
  }

  /**
   * ProjectMeetingAttendance findFirstOrThrow
   */
  export type ProjectMeetingAttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeetingAttendance to fetch.
     */
    where?: ProjectMeetingAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetingAttendances to fetch.
     */
    orderBy?: ProjectMeetingAttendanceOrderByWithRelationInput | ProjectMeetingAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMeetingAttendances.
     */
    cursor?: ProjectMeetingAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetingAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetingAttendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMeetingAttendances.
     */
    distinct?: ProjectMeetingAttendanceScalarFieldEnum | ProjectMeetingAttendanceScalarFieldEnum[]
  }

  /**
   * ProjectMeetingAttendance findMany
   */
  export type ProjectMeetingAttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMeetingAttendances to fetch.
     */
    where?: ProjectMeetingAttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMeetingAttendances to fetch.
     */
    orderBy?: ProjectMeetingAttendanceOrderByWithRelationInput | ProjectMeetingAttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMeetingAttendances.
     */
    cursor?: ProjectMeetingAttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMeetingAttendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMeetingAttendances.
     */
    skip?: number
    distinct?: ProjectMeetingAttendanceScalarFieldEnum | ProjectMeetingAttendanceScalarFieldEnum[]
  }

  /**
   * ProjectMeetingAttendance create
   */
  export type ProjectMeetingAttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMeetingAttendance.
     */
    data: XOR<ProjectMeetingAttendanceCreateInput, ProjectMeetingAttendanceUncheckedCreateInput>
  }

  /**
   * ProjectMeetingAttendance createMany
   */
  export type ProjectMeetingAttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMeetingAttendances.
     */
    data: ProjectMeetingAttendanceCreateManyInput | ProjectMeetingAttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMeetingAttendance update
   */
  export type ProjectMeetingAttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMeetingAttendance.
     */
    data: XOR<ProjectMeetingAttendanceUpdateInput, ProjectMeetingAttendanceUncheckedUpdateInput>
    /**
     * Choose, which ProjectMeetingAttendance to update.
     */
    where: ProjectMeetingAttendanceWhereUniqueInput
  }

  /**
   * ProjectMeetingAttendance updateMany
   */
  export type ProjectMeetingAttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMeetingAttendances.
     */
    data: XOR<ProjectMeetingAttendanceUpdateManyMutationInput, ProjectMeetingAttendanceUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMeetingAttendances to update
     */
    where?: ProjectMeetingAttendanceWhereInput
    /**
     * Limit how many ProjectMeetingAttendances to update.
     */
    limit?: number
  }

  /**
   * ProjectMeetingAttendance upsert
   */
  export type ProjectMeetingAttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMeetingAttendance to update in case it exists.
     */
    where: ProjectMeetingAttendanceWhereUniqueInput
    /**
     * In case the ProjectMeetingAttendance found by the `where` argument doesn't exist, create a new ProjectMeetingAttendance with this data.
     */
    create: XOR<ProjectMeetingAttendanceCreateInput, ProjectMeetingAttendanceUncheckedCreateInput>
    /**
     * In case the ProjectMeetingAttendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMeetingAttendanceUpdateInput, ProjectMeetingAttendanceUncheckedUpdateInput>
  }

  /**
   * ProjectMeetingAttendance delete
   */
  export type ProjectMeetingAttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
    /**
     * Filter which ProjectMeetingAttendance to delete.
     */
    where: ProjectMeetingAttendanceWhereUniqueInput
  }

  /**
   * ProjectMeetingAttendance deleteMany
   */
  export type ProjectMeetingAttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMeetingAttendances to delete
     */
    where?: ProjectMeetingAttendanceWhereInput
    /**
     * Limit how many ProjectMeetingAttendances to delete.
     */
    limit?: number
  }

  /**
   * ProjectMeetingAttendance without action
   */
  export type ProjectMeetingAttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMeetingAttendance
     */
    select?: ProjectMeetingAttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectMeetingAttendance
     */
    omit?: ProjectMeetingAttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMeetingAttendanceInclude<ExtArgs> | null
  }


  /**
   * Model ProjectDocument
   */

  export type AggregateProjectDocument = {
    _count: ProjectDocumentCountAggregateOutputType | null
    _avg: ProjectDocumentAvgAggregateOutputType | null
    _sum: ProjectDocumentSumAggregateOutputType | null
    _min: ProjectDocumentMinAggregateOutputType | null
    _max: ProjectDocumentMaxAggregateOutputType | null
  }

  export type ProjectDocumentAvgAggregateOutputType = {
    ProjectDocumentID: number | null
    ProjectGroupID: number | null
    UploadedByStaffID: number | null
    UploadedByStudentID: number | null
  }

  export type ProjectDocumentSumAggregateOutputType = {
    ProjectDocumentID: number | null
    ProjectGroupID: number | null
    UploadedByStaffID: number | null
    UploadedByStudentID: number | null
  }

  export type ProjectDocumentMinAggregateOutputType = {
    ProjectDocumentID: number | null
    ProjectGroupID: number | null
    DocumentType: $Enums.DocumentType | null
    FileName: string | null
    FilePath: string | null
    MimeType: string | null
    UploadedByStaffID: number | null
    UploadedByStudentID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectDocumentMaxAggregateOutputType = {
    ProjectDocumentID: number | null
    ProjectGroupID: number | null
    DocumentType: $Enums.DocumentType | null
    FileName: string | null
    FilePath: string | null
    MimeType: string | null
    UploadedByStaffID: number | null
    UploadedByStudentID: number | null
    Description: string | null
    Created: Date | null
    Modified: Date | null
  }

  export type ProjectDocumentCountAggregateOutputType = {
    ProjectDocumentID: number
    ProjectGroupID: number
    DocumentType: number
    FileName: number
    FilePath: number
    MimeType: number
    UploadedByStaffID: number
    UploadedByStudentID: number
    Description: number
    Created: number
    Modified: number
    _all: number
  }


  export type ProjectDocumentAvgAggregateInputType = {
    ProjectDocumentID?: true
    ProjectGroupID?: true
    UploadedByStaffID?: true
    UploadedByStudentID?: true
  }

  export type ProjectDocumentSumAggregateInputType = {
    ProjectDocumentID?: true
    ProjectGroupID?: true
    UploadedByStaffID?: true
    UploadedByStudentID?: true
  }

  export type ProjectDocumentMinAggregateInputType = {
    ProjectDocumentID?: true
    ProjectGroupID?: true
    DocumentType?: true
    FileName?: true
    FilePath?: true
    MimeType?: true
    UploadedByStaffID?: true
    UploadedByStudentID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectDocumentMaxAggregateInputType = {
    ProjectDocumentID?: true
    ProjectGroupID?: true
    DocumentType?: true
    FileName?: true
    FilePath?: true
    MimeType?: true
    UploadedByStaffID?: true
    UploadedByStudentID?: true
    Description?: true
    Created?: true
    Modified?: true
  }

  export type ProjectDocumentCountAggregateInputType = {
    ProjectDocumentID?: true
    ProjectGroupID?: true
    DocumentType?: true
    FileName?: true
    FilePath?: true
    MimeType?: true
    UploadedByStaffID?: true
    UploadedByStudentID?: true
    Description?: true
    Created?: true
    Modified?: true
    _all?: true
  }

  export type ProjectDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDocument to aggregate.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectDocuments
    **/
    _count?: true | ProjectDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectDocumentMaxAggregateInputType
  }

  export type GetProjectDocumentAggregateType<T extends ProjectDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectDocument[P]>
      : GetScalarType<T[P], AggregateProjectDocument[P]>
  }




  export type ProjectDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectDocumentWhereInput
    orderBy?: ProjectDocumentOrderByWithAggregationInput | ProjectDocumentOrderByWithAggregationInput[]
    by: ProjectDocumentScalarFieldEnum[] | ProjectDocumentScalarFieldEnum
    having?: ProjectDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectDocumentCountAggregateInputType | true
    _avg?: ProjectDocumentAvgAggregateInputType
    _sum?: ProjectDocumentSumAggregateInputType
    _min?: ProjectDocumentMinAggregateInputType
    _max?: ProjectDocumentMaxAggregateInputType
  }

  export type ProjectDocumentGroupByOutputType = {
    ProjectDocumentID: number
    ProjectGroupID: number
    DocumentType: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType: string | null
    UploadedByStaffID: number | null
    UploadedByStudentID: number | null
    Description: string | null
    Created: Date
    Modified: Date
    _count: ProjectDocumentCountAggregateOutputType | null
    _avg: ProjectDocumentAvgAggregateOutputType | null
    _sum: ProjectDocumentSumAggregateOutputType | null
    _min: ProjectDocumentMinAggregateOutputType | null
    _max: ProjectDocumentMaxAggregateOutputType | null
  }

  type GetProjectDocumentGroupByPayload<T extends ProjectDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectDocumentGroupByOutputType[P]>
        }
      >
    >


  export type ProjectDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ProjectDocumentID?: boolean
    ProjectGroupID?: boolean
    DocumentType?: boolean
    FileName?: boolean
    FilePath?: boolean
    MimeType?: boolean
    UploadedByStaffID?: boolean
    UploadedByStudentID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
    projectGroup?: boolean | ProjectGroupDefaultArgs<ExtArgs>
    staff?: boolean | ProjectDocument$staffArgs<ExtArgs>
    student?: boolean | ProjectDocument$studentArgs<ExtArgs>
  }, ExtArgs["result"]["projectDocument"]>



  export type ProjectDocumentSelectScalar = {
    ProjectDocumentID?: boolean
    ProjectGroupID?: boolean
    DocumentType?: boolean
    FileName?: boolean
    FilePath?: boolean
    MimeType?: boolean
    UploadedByStaffID?: boolean
    UploadedByStudentID?: boolean
    Description?: boolean
    Created?: boolean
    Modified?: boolean
  }

  export type ProjectDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ProjectDocumentID" | "ProjectGroupID" | "DocumentType" | "FileName" | "FilePath" | "MimeType" | "UploadedByStaffID" | "UploadedByStudentID" | "Description" | "Created" | "Modified", ExtArgs["result"]["projectDocument"]>
  export type ProjectDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projectGroup?: boolean | ProjectGroupDefaultArgs<ExtArgs>
    staff?: boolean | ProjectDocument$staffArgs<ExtArgs>
    student?: boolean | ProjectDocument$studentArgs<ExtArgs>
  }

  export type $ProjectDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectDocument"
    objects: {
      projectGroup: Prisma.$ProjectGroupPayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs> | null
      student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ProjectDocumentID: number
      ProjectGroupID: number
      DocumentType: $Enums.DocumentType
      FileName: string
      FilePath: string
      MimeType: string | null
      UploadedByStaffID: number | null
      UploadedByStudentID: number | null
      Description: string | null
      Created: Date
      Modified: Date
    }, ExtArgs["result"]["projectDocument"]>
    composites: {}
  }

  type ProjectDocumentGetPayload<S extends boolean | null | undefined | ProjectDocumentDefaultArgs> = $Result.GetResult<Prisma.$ProjectDocumentPayload, S>

  type ProjectDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectDocumentCountAggregateInputType | true
    }

  export interface ProjectDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectDocument'], meta: { name: 'ProjectDocument' } }
    /**
     * Find zero or one ProjectDocument that matches the filter.
     * @param {ProjectDocumentFindUniqueArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectDocumentFindUniqueArgs>(args: SelectSubset<T, ProjectDocumentFindUniqueArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProjectDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectDocumentFindUniqueOrThrowArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentFindFirstArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectDocumentFindFirstArgs>(args?: SelectSubset<T, ProjectDocumentFindFirstArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProjectDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentFindFirstOrThrowArgs} args - Arguments to find a ProjectDocument
     * @example
     * // Get one ProjectDocument
     * const projectDocument = await prisma.projectDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProjectDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectDocuments
     * const projectDocuments = await prisma.projectDocument.findMany()
     * 
     * // Get first 10 ProjectDocuments
     * const projectDocuments = await prisma.projectDocument.findMany({ take: 10 })
     * 
     * // Only select the `ProjectDocumentID`
     * const projectDocumentWithProjectDocumentIDOnly = await prisma.projectDocument.findMany({ select: { ProjectDocumentID: true } })
     * 
     */
    findMany<T extends ProjectDocumentFindManyArgs>(args?: SelectSubset<T, ProjectDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProjectDocument.
     * @param {ProjectDocumentCreateArgs} args - Arguments to create a ProjectDocument.
     * @example
     * // Create one ProjectDocument
     * const ProjectDocument = await prisma.projectDocument.create({
     *   data: {
     *     // ... data to create a ProjectDocument
     *   }
     * })
     * 
     */
    create<T extends ProjectDocumentCreateArgs>(args: SelectSubset<T, ProjectDocumentCreateArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProjectDocuments.
     * @param {ProjectDocumentCreateManyArgs} args - Arguments to create many ProjectDocuments.
     * @example
     * // Create many ProjectDocuments
     * const projectDocument = await prisma.projectDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectDocumentCreateManyArgs>(args?: SelectSubset<T, ProjectDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProjectDocument.
     * @param {ProjectDocumentDeleteArgs} args - Arguments to delete one ProjectDocument.
     * @example
     * // Delete one ProjectDocument
     * const ProjectDocument = await prisma.projectDocument.delete({
     *   where: {
     *     // ... filter to delete one ProjectDocument
     *   }
     * })
     * 
     */
    delete<T extends ProjectDocumentDeleteArgs>(args: SelectSubset<T, ProjectDocumentDeleteArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProjectDocument.
     * @param {ProjectDocumentUpdateArgs} args - Arguments to update one ProjectDocument.
     * @example
     * // Update one ProjectDocument
     * const projectDocument = await prisma.projectDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectDocumentUpdateArgs>(args: SelectSubset<T, ProjectDocumentUpdateArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProjectDocuments.
     * @param {ProjectDocumentDeleteManyArgs} args - Arguments to filter ProjectDocuments to delete.
     * @example
     * // Delete a few ProjectDocuments
     * const { count } = await prisma.projectDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDocumentDeleteManyArgs>(args?: SelectSubset<T, ProjectDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectDocuments
     * const projectDocument = await prisma.projectDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectDocumentUpdateManyArgs>(args: SelectSubset<T, ProjectDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectDocument.
     * @param {ProjectDocumentUpsertArgs} args - Arguments to update or create a ProjectDocument.
     * @example
     * // Update or create a ProjectDocument
     * const projectDocument = await prisma.projectDocument.upsert({
     *   create: {
     *     // ... data to create a ProjectDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectDocument we want to update
     *   }
     * })
     */
    upsert<T extends ProjectDocumentUpsertArgs>(args: SelectSubset<T, ProjectDocumentUpsertArgs<ExtArgs>>): Prisma__ProjectDocumentClient<$Result.GetResult<Prisma.$ProjectDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProjectDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentCountArgs} args - Arguments to filter ProjectDocuments to count.
     * @example
     * // Count the number of ProjectDocuments
     * const count = await prisma.projectDocument.count({
     *   where: {
     *     // ... the filter for the ProjectDocuments we want to count
     *   }
     * })
    **/
    count<T extends ProjectDocumentCountArgs>(
      args?: Subset<T, ProjectDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectDocumentAggregateArgs>(args: Subset<T, ProjectDocumentAggregateArgs>): Prisma.PrismaPromise<GetProjectDocumentAggregateType<T>>

    /**
     * Group by ProjectDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectDocumentGroupByArgs['orderBy'] }
        : { orderBy?: ProjectDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectDocument model
   */
  readonly fields: ProjectDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projectGroup<T extends ProjectGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectGroupDefaultArgs<ExtArgs>>): Prisma__ProjectGroupClient<$Result.GetResult<Prisma.$ProjectGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends ProjectDocument$staffArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDocument$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    student<T extends ProjectDocument$studentArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDocument$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectDocument model
   */
  interface ProjectDocumentFieldRefs {
    readonly ProjectDocumentID: FieldRef<"ProjectDocument", 'Int'>
    readonly ProjectGroupID: FieldRef<"ProjectDocument", 'Int'>
    readonly DocumentType: FieldRef<"ProjectDocument", 'DocumentType'>
    readonly FileName: FieldRef<"ProjectDocument", 'String'>
    readonly FilePath: FieldRef<"ProjectDocument", 'String'>
    readonly MimeType: FieldRef<"ProjectDocument", 'String'>
    readonly UploadedByStaffID: FieldRef<"ProjectDocument", 'Int'>
    readonly UploadedByStudentID: FieldRef<"ProjectDocument", 'Int'>
    readonly Description: FieldRef<"ProjectDocument", 'String'>
    readonly Created: FieldRef<"ProjectDocument", 'DateTime'>
    readonly Modified: FieldRef<"ProjectDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectDocument findUnique
   */
  export type ProjectDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument findUniqueOrThrow
   */
  export type ProjectDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument findFirst
   */
  export type ProjectDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDocuments.
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDocuments.
     */
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectDocument findFirstOrThrow
   */
  export type ProjectDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocument to fetch.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectDocuments.
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectDocuments.
     */
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectDocument findMany
   */
  export type ProjectDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter, which ProjectDocuments to fetch.
     */
    where?: ProjectDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectDocuments to fetch.
     */
    orderBy?: ProjectDocumentOrderByWithRelationInput | ProjectDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectDocuments.
     */
    cursor?: ProjectDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectDocuments.
     */
    skip?: number
    distinct?: ProjectDocumentScalarFieldEnum | ProjectDocumentScalarFieldEnum[]
  }

  /**
   * ProjectDocument create
   */
  export type ProjectDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectDocument.
     */
    data: XOR<ProjectDocumentCreateInput, ProjectDocumentUncheckedCreateInput>
  }

  /**
   * ProjectDocument createMany
   */
  export type ProjectDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectDocuments.
     */
    data: ProjectDocumentCreateManyInput | ProjectDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectDocument update
   */
  export type ProjectDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectDocument.
     */
    data: XOR<ProjectDocumentUpdateInput, ProjectDocumentUncheckedUpdateInput>
    /**
     * Choose, which ProjectDocument to update.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument updateMany
   */
  export type ProjectDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectDocuments.
     */
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyInput>
    /**
     * Filter which ProjectDocuments to update
     */
    where?: ProjectDocumentWhereInput
    /**
     * Limit how many ProjectDocuments to update.
     */
    limit?: number
  }

  /**
   * ProjectDocument upsert
   */
  export type ProjectDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectDocument to update in case it exists.
     */
    where: ProjectDocumentWhereUniqueInput
    /**
     * In case the ProjectDocument found by the `where` argument doesn't exist, create a new ProjectDocument with this data.
     */
    create: XOR<ProjectDocumentCreateInput, ProjectDocumentUncheckedCreateInput>
    /**
     * In case the ProjectDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectDocumentUpdateInput, ProjectDocumentUncheckedUpdateInput>
  }

  /**
   * ProjectDocument delete
   */
  export type ProjectDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
    /**
     * Filter which ProjectDocument to delete.
     */
    where: ProjectDocumentWhereUniqueInput
  }

  /**
   * ProjectDocument deleteMany
   */
  export type ProjectDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectDocuments to delete
     */
    where?: ProjectDocumentWhereInput
    /**
     * Limit how many ProjectDocuments to delete.
     */
    limit?: number
  }

  /**
   * ProjectDocument.staff
   */
  export type ProjectDocument$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * ProjectDocument.student
   */
  export type ProjectDocument$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * ProjectDocument without action
   */
  export type ProjectDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectDocument
     */
    select?: ProjectDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectDocument
     */
    omit?: ProjectDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectTypeScalarFieldEnum: {
    ProjectTypeID: 'ProjectTypeID',
    ProjectTypeName: 'ProjectTypeName',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ProjectTypeScalarFieldEnum = (typeof ProjectTypeScalarFieldEnum)[keyof typeof ProjectTypeScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    StaffID: 'StaffID',
    StaffName: 'StaffName',
    Phone: 'Phone',
    Email: 'Email',
    Password: 'Password',
    Role: 'Role',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const AcademicYearScalarFieldEnum: {
    AcademicYearID: 'AcademicYearID',
    YearName: 'YearName',
    StartDate: 'StartDate',
    EndDate: 'EndDate',
    IsActive: 'IsActive',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type AcademicYearScalarFieldEnum = (typeof AcademicYearScalarFieldEnum)[keyof typeof AcademicYearScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    DepartmentID: 'DepartmentID',
    DepartmentName: 'DepartmentName',
    AcademicYearID: 'AcademicYearID',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    StudentID: 'StudentID',
    StudentName: 'StudentName',
    Phone: 'Phone',
    Email: 'Email',
    Password: 'Password',
    DepartmentID: 'DepartmentID',
    AcademicYearID: 'AcademicYearID',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ProjectGroupScalarFieldEnum: {
    ProjectGroupID: 'ProjectGroupID',
    ProjectGroupName: 'ProjectGroupName',
    ProjectTypeID: 'ProjectTypeID',
    GuideStaffID: 'GuideStaffID',
    ProjectTitle: 'ProjectTitle',
    ProjectArea: 'ProjectArea',
    ProjectDescription: 'ProjectDescription',
    AverageCPI: 'AverageCPI',
    ConvenerStaffID: 'ConvenerStaffID',
    ExpertStaffID: 'ExpertStaffID',
    Status: 'Status',
    AcademicYearID: 'AcademicYearID',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ProjectGroupScalarFieldEnum = (typeof ProjectGroupScalarFieldEnum)[keyof typeof ProjectGroupScalarFieldEnum]


  export const ProjectGroupMemberScalarFieldEnum: {
    ProjectGroupMemberID: 'ProjectGroupMemberID',
    ProjectGroupID: 'ProjectGroupID',
    StudentID: 'StudentID',
    IsGroupLeader: 'IsGroupLeader',
    StudentCGPA: 'StudentCGPA',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ProjectGroupMemberScalarFieldEnum = (typeof ProjectGroupMemberScalarFieldEnum)[keyof typeof ProjectGroupMemberScalarFieldEnum]


  export const ProjectMeetingScalarFieldEnum: {
    ProjectMeetingID: 'ProjectMeetingID',
    ProjectGroupID: 'ProjectGroupID',
    GuideStaffID: 'GuideStaffID',
    MeetingDateTime: 'MeetingDateTime',
    MeetingPurpose: 'MeetingPurpose',
    MeetingLocation: 'MeetingLocation',
    MeetingNotes: 'MeetingNotes',
    MeetingStatus: 'MeetingStatus',
    MeetingStatusDescription: 'MeetingStatusDescription',
    MeetingStatusDatetime: 'MeetingStatusDatetime',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified',
    StatusUpdatedByStaffID: 'StatusUpdatedByStaffID'
  };

  export type ProjectMeetingScalarFieldEnum = (typeof ProjectMeetingScalarFieldEnum)[keyof typeof ProjectMeetingScalarFieldEnum]


  export const ProjectMeetingAttendanceScalarFieldEnum: {
    ProjectMeetingAttendanceID: 'ProjectMeetingAttendanceID',
    ProjectMeetingID: 'ProjectMeetingID',
    StudentID: 'StudentID',
    IsPresent: 'IsPresent',
    AttendanceRemarks: 'AttendanceRemarks',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ProjectMeetingAttendanceScalarFieldEnum = (typeof ProjectMeetingAttendanceScalarFieldEnum)[keyof typeof ProjectMeetingAttendanceScalarFieldEnum]


  export const ProjectDocumentScalarFieldEnum: {
    ProjectDocumentID: 'ProjectDocumentID',
    ProjectGroupID: 'ProjectGroupID',
    DocumentType: 'DocumentType',
    FileName: 'FileName',
    FilePath: 'FilePath',
    MimeType: 'MimeType',
    UploadedByStaffID: 'UploadedByStaffID',
    UploadedByStudentID: 'UploadedByStudentID',
    Description: 'Description',
    Created: 'Created',
    Modified: 'Modified'
  };

  export type ProjectDocumentScalarFieldEnum = (typeof ProjectDocumentScalarFieldEnum)[keyof typeof ProjectDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ProjectTypeOrderByRelevanceFieldEnum: {
    ProjectTypeName: 'ProjectTypeName',
    Description: 'Description'
  };

  export type ProjectTypeOrderByRelevanceFieldEnum = (typeof ProjectTypeOrderByRelevanceFieldEnum)[keyof typeof ProjectTypeOrderByRelevanceFieldEnum]


  export const StaffOrderByRelevanceFieldEnum: {
    StaffName: 'StaffName',
    Phone: 'Phone',
    Email: 'Email',
    Password: 'Password',
    Description: 'Description'
  };

  export type StaffOrderByRelevanceFieldEnum = (typeof StaffOrderByRelevanceFieldEnum)[keyof typeof StaffOrderByRelevanceFieldEnum]


  export const AcademicYearOrderByRelevanceFieldEnum: {
    YearName: 'YearName',
    Description: 'Description'
  };

  export type AcademicYearOrderByRelevanceFieldEnum = (typeof AcademicYearOrderByRelevanceFieldEnum)[keyof typeof AcademicYearOrderByRelevanceFieldEnum]


  export const DepartmentOrderByRelevanceFieldEnum: {
    DepartmentName: 'DepartmentName',
    Description: 'Description'
  };

  export type DepartmentOrderByRelevanceFieldEnum = (typeof DepartmentOrderByRelevanceFieldEnum)[keyof typeof DepartmentOrderByRelevanceFieldEnum]


  export const StudentOrderByRelevanceFieldEnum: {
    StudentName: 'StudentName',
    Phone: 'Phone',
    Email: 'Email',
    Password: 'Password',
    Description: 'Description'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const ProjectGroupOrderByRelevanceFieldEnum: {
    ProjectGroupName: 'ProjectGroupName',
    ProjectTitle: 'ProjectTitle',
    ProjectArea: 'ProjectArea',
    ProjectDescription: 'ProjectDescription',
    Description: 'Description'
  };

  export type ProjectGroupOrderByRelevanceFieldEnum = (typeof ProjectGroupOrderByRelevanceFieldEnum)[keyof typeof ProjectGroupOrderByRelevanceFieldEnum]


  export const ProjectGroupMemberOrderByRelevanceFieldEnum: {
    Description: 'Description'
  };

  export type ProjectGroupMemberOrderByRelevanceFieldEnum = (typeof ProjectGroupMemberOrderByRelevanceFieldEnum)[keyof typeof ProjectGroupMemberOrderByRelevanceFieldEnum]


  export const ProjectMeetingOrderByRelevanceFieldEnum: {
    MeetingPurpose: 'MeetingPurpose',
    MeetingLocation: 'MeetingLocation',
    MeetingNotes: 'MeetingNotes',
    MeetingStatusDescription: 'MeetingStatusDescription',
    Description: 'Description'
  };

  export type ProjectMeetingOrderByRelevanceFieldEnum = (typeof ProjectMeetingOrderByRelevanceFieldEnum)[keyof typeof ProjectMeetingOrderByRelevanceFieldEnum]


  export const ProjectMeetingAttendanceOrderByRelevanceFieldEnum: {
    AttendanceRemarks: 'AttendanceRemarks',
    Description: 'Description'
  };

  export type ProjectMeetingAttendanceOrderByRelevanceFieldEnum = (typeof ProjectMeetingAttendanceOrderByRelevanceFieldEnum)[keyof typeof ProjectMeetingAttendanceOrderByRelevanceFieldEnum]


  export const ProjectDocumentOrderByRelevanceFieldEnum: {
    FileName: 'FileName',
    FilePath: 'FilePath',
    MimeType: 'MimeType',
    Description: 'Description'
  };

  export type ProjectDocumentOrderByRelevanceFieldEnum = (typeof ProjectDocumentOrderByRelevanceFieldEnum)[keyof typeof ProjectDocumentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'StaffRole'
   */
  export type EnumStaffRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StaffRole'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'ProjectGroupStatus'
   */
  export type EnumProjectGroupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProjectGroupStatus'>
    


  /**
   * Reference to a field of type 'MeetingStatus'
   */
  export type EnumMeetingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingStatus'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ProjectTypeWhereInput = {
    AND?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    OR?: ProjectTypeWhereInput[]
    NOT?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    ProjectTypeID?: IntFilter<"ProjectType"> | number
    ProjectTypeName?: StringFilter<"ProjectType"> | string
    Description?: StringNullableFilter<"ProjectType"> | string | null
    Created?: DateTimeFilter<"ProjectType"> | Date | string
    Modified?: DateTimeFilter<"ProjectType"> | Date | string
    projectGroups?: ProjectGroupListRelationFilter
  }

  export type ProjectTypeOrderByWithRelationInput = {
    ProjectTypeID?: SortOrder
    ProjectTypeName?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    projectGroups?: ProjectGroupOrderByRelationAggregateInput
    _relevance?: ProjectTypeOrderByRelevanceInput
  }

  export type ProjectTypeWhereUniqueInput = Prisma.AtLeast<{
    ProjectTypeID?: number
    AND?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    OR?: ProjectTypeWhereInput[]
    NOT?: ProjectTypeWhereInput | ProjectTypeWhereInput[]
    ProjectTypeName?: StringFilter<"ProjectType"> | string
    Description?: StringNullableFilter<"ProjectType"> | string | null
    Created?: DateTimeFilter<"ProjectType"> | Date | string
    Modified?: DateTimeFilter<"ProjectType"> | Date | string
    projectGroups?: ProjectGroupListRelationFilter
  }, "ProjectTypeID">

  export type ProjectTypeOrderByWithAggregationInput = {
    ProjectTypeID?: SortOrder
    ProjectTypeName?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: ProjectTypeCountOrderByAggregateInput
    _avg?: ProjectTypeAvgOrderByAggregateInput
    _max?: ProjectTypeMaxOrderByAggregateInput
    _min?: ProjectTypeMinOrderByAggregateInput
    _sum?: ProjectTypeSumOrderByAggregateInput
  }

  export type ProjectTypeScalarWhereWithAggregatesInput = {
    AND?: ProjectTypeScalarWhereWithAggregatesInput | ProjectTypeScalarWhereWithAggregatesInput[]
    OR?: ProjectTypeScalarWhereWithAggregatesInput[]
    NOT?: ProjectTypeScalarWhereWithAggregatesInput | ProjectTypeScalarWhereWithAggregatesInput[]
    ProjectTypeID?: IntWithAggregatesFilter<"ProjectType"> | number
    ProjectTypeName?: StringWithAggregatesFilter<"ProjectType"> | string
    Description?: StringNullableWithAggregatesFilter<"ProjectType"> | string | null
    Created?: DateTimeWithAggregatesFilter<"ProjectType"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"ProjectType"> | Date | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    StaffID?: IntFilter<"Staff"> | number
    StaffName?: StringFilter<"Staff"> | string
    Phone?: StringNullableFilter<"Staff"> | string | null
    Email?: StringFilter<"Staff"> | string
    Password?: StringFilter<"Staff"> | string
    Role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    Description?: StringNullableFilter<"Staff"> | string | null
    Created?: DateTimeFilter<"Staff"> | Date | string
    Modified?: DateTimeFilter<"Staff"> | Date | string
    guidedGroups?: ProjectGroupListRelationFilter
    guidedMeetings?: ProjectMeetingListRelationFilter
    convenedGroups?: ProjectGroupListRelationFilter
    expertGroups?: ProjectGroupListRelationFilter
    projectDocuments?: ProjectDocumentListRelationFilter
    meetingStatusBy?: ProjectMeetingListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    guidedGroups?: ProjectGroupOrderByRelationAggregateInput
    guidedMeetings?: ProjectMeetingOrderByRelationAggregateInput
    convenedGroups?: ProjectGroupOrderByRelationAggregateInput
    expertGroups?: ProjectGroupOrderByRelationAggregateInput
    projectDocuments?: ProjectDocumentOrderByRelationAggregateInput
    meetingStatusBy?: ProjectMeetingOrderByRelationAggregateInput
    _relevance?: StaffOrderByRelevanceInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    StaffID?: number
    Email?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    StaffName?: StringFilter<"Staff"> | string
    Phone?: StringNullableFilter<"Staff"> | string | null
    Password?: StringFilter<"Staff"> | string
    Role?: EnumStaffRoleFilter<"Staff"> | $Enums.StaffRole
    Description?: StringNullableFilter<"Staff"> | string | null
    Created?: DateTimeFilter<"Staff"> | Date | string
    Modified?: DateTimeFilter<"Staff"> | Date | string
    guidedGroups?: ProjectGroupListRelationFilter
    guidedMeetings?: ProjectMeetingListRelationFilter
    convenedGroups?: ProjectGroupListRelationFilter
    expertGroups?: ProjectGroupListRelationFilter
    projectDocuments?: ProjectDocumentListRelationFilter
    meetingStatusBy?: ProjectMeetingListRelationFilter
  }, "StaffID" | "Email">

  export type StaffOrderByWithAggregationInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _avg?: StaffAvgOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
    _sum?: StaffSumOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    StaffID?: IntWithAggregatesFilter<"Staff"> | number
    StaffName?: StringWithAggregatesFilter<"Staff"> | string
    Phone?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    Email?: StringWithAggregatesFilter<"Staff"> | string
    Password?: StringWithAggregatesFilter<"Staff"> | string
    Role?: EnumStaffRoleWithAggregatesFilter<"Staff"> | $Enums.StaffRole
    Description?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    Created?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
  }

  export type AcademicYearWhereInput = {
    AND?: AcademicYearWhereInput | AcademicYearWhereInput[]
    OR?: AcademicYearWhereInput[]
    NOT?: AcademicYearWhereInput | AcademicYearWhereInput[]
    AcademicYearID?: IntFilter<"AcademicYear"> | number
    YearName?: StringFilter<"AcademicYear"> | string
    StartDate?: DateTimeFilter<"AcademicYear"> | Date | string
    EndDate?: DateTimeFilter<"AcademicYear"> | Date | string
    IsActive?: BoolFilter<"AcademicYear"> | boolean
    Description?: StringNullableFilter<"AcademicYear"> | string | null
    Created?: DateTimeFilter<"AcademicYear"> | Date | string
    Modified?: DateTimeFilter<"AcademicYear"> | Date | string
    departments?: DepartmentListRelationFilter
    projectGroups?: ProjectGroupListRelationFilter
    students?: StudentListRelationFilter
  }

  export type AcademicYearOrderByWithRelationInput = {
    AcademicYearID?: SortOrder
    YearName?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    departments?: DepartmentOrderByRelationAggregateInput
    projectGroups?: ProjectGroupOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    _relevance?: AcademicYearOrderByRelevanceInput
  }

  export type AcademicYearWhereUniqueInput = Prisma.AtLeast<{
    AcademicYearID?: number
    AND?: AcademicYearWhereInput | AcademicYearWhereInput[]
    OR?: AcademicYearWhereInput[]
    NOT?: AcademicYearWhereInput | AcademicYearWhereInput[]
    YearName?: StringFilter<"AcademicYear"> | string
    StartDate?: DateTimeFilter<"AcademicYear"> | Date | string
    EndDate?: DateTimeFilter<"AcademicYear"> | Date | string
    IsActive?: BoolFilter<"AcademicYear"> | boolean
    Description?: StringNullableFilter<"AcademicYear"> | string | null
    Created?: DateTimeFilter<"AcademicYear"> | Date | string
    Modified?: DateTimeFilter<"AcademicYear"> | Date | string
    departments?: DepartmentListRelationFilter
    projectGroups?: ProjectGroupListRelationFilter
    students?: StudentListRelationFilter
  }, "AcademicYearID">

  export type AcademicYearOrderByWithAggregationInput = {
    AcademicYearID?: SortOrder
    YearName?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: AcademicYearCountOrderByAggregateInput
    _avg?: AcademicYearAvgOrderByAggregateInput
    _max?: AcademicYearMaxOrderByAggregateInput
    _min?: AcademicYearMinOrderByAggregateInput
    _sum?: AcademicYearSumOrderByAggregateInput
  }

  export type AcademicYearScalarWhereWithAggregatesInput = {
    AND?: AcademicYearScalarWhereWithAggregatesInput | AcademicYearScalarWhereWithAggregatesInput[]
    OR?: AcademicYearScalarWhereWithAggregatesInput[]
    NOT?: AcademicYearScalarWhereWithAggregatesInput | AcademicYearScalarWhereWithAggregatesInput[]
    AcademicYearID?: IntWithAggregatesFilter<"AcademicYear"> | number
    YearName?: StringWithAggregatesFilter<"AcademicYear"> | string
    StartDate?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    EndDate?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    IsActive?: BoolWithAggregatesFilter<"AcademicYear"> | boolean
    Description?: StringNullableWithAggregatesFilter<"AcademicYear"> | string | null
    Created?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    DepartmentID?: IntFilter<"Department"> | number
    DepartmentName?: StringFilter<"Department"> | string
    AcademicYearID?: IntFilter<"Department"> | number
    Description?: StringNullableFilter<"Department"> | string | null
    Created?: DateTimeFilter<"Department"> | Date | string
    Modified?: DateTimeFilter<"Department"> | Date | string
    academicYear?: XOR<AcademicYearScalarRelationFilter, AcademicYearWhereInput>
    students?: StudentListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    academicYear?: AcademicYearOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
    _relevance?: DepartmentOrderByRelevanceInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    DepartmentID?: number
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    DepartmentName?: StringFilter<"Department"> | string
    AcademicYearID?: IntFilter<"Department"> | number
    Description?: StringNullableFilter<"Department"> | string | null
    Created?: DateTimeFilter<"Department"> | Date | string
    Modified?: DateTimeFilter<"Department"> | Date | string
    academicYear?: XOR<AcademicYearScalarRelationFilter, AcademicYearWhereInput>
    students?: StudentListRelationFilter
  }, "DepartmentID">

  export type DepartmentOrderByWithAggregationInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    DepartmentID?: IntWithAggregatesFilter<"Department"> | number
    DepartmentName?: StringWithAggregatesFilter<"Department"> | string
    AcademicYearID?: IntWithAggregatesFilter<"Department"> | number
    Description?: StringNullableWithAggregatesFilter<"Department"> | string | null
    Created?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"Department"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    StudentID?: IntFilter<"Student"> | number
    StudentName?: StringFilter<"Student"> | string
    Phone?: StringNullableFilter<"Student"> | string | null
    Email?: StringFilter<"Student"> | string
    Password?: StringFilter<"Student"> | string
    DepartmentID?: IntNullableFilter<"Student"> | number | null
    AcademicYearID?: IntNullableFilter<"Student"> | number | null
    Description?: StringNullableFilter<"Student"> | string | null
    Created?: DateTimeFilter<"Student"> | Date | string
    Modified?: DateTimeFilter<"Student"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    academicYear?: XOR<AcademicYearNullableScalarRelationFilter, AcademicYearWhereInput> | null
    groupMembers?: ProjectGroupMemberListRelationFilter
    attendances?: ProjectMeetingAttendanceListRelationFilter
    documents?: ProjectDocumentListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    StudentID?: SortOrder
    StudentName?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Email?: SortOrder
    Password?: SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    AcademicYearID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    department?: DepartmentOrderByWithRelationInput
    academicYear?: AcademicYearOrderByWithRelationInput
    groupMembers?: ProjectGroupMemberOrderByRelationAggregateInput
    attendances?: ProjectMeetingAttendanceOrderByRelationAggregateInput
    documents?: ProjectDocumentOrderByRelationAggregateInput
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    StudentID?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    StudentName?: StringFilter<"Student"> | string
    Phone?: StringNullableFilter<"Student"> | string | null
    Email?: StringFilter<"Student"> | string
    Password?: StringFilter<"Student"> | string
    DepartmentID?: IntNullableFilter<"Student"> | number | null
    AcademicYearID?: IntNullableFilter<"Student"> | number | null
    Description?: StringNullableFilter<"Student"> | string | null
    Created?: DateTimeFilter<"Student"> | Date | string
    Modified?: DateTimeFilter<"Student"> | Date | string
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    academicYear?: XOR<AcademicYearNullableScalarRelationFilter, AcademicYearWhereInput> | null
    groupMembers?: ProjectGroupMemberListRelationFilter
    attendances?: ProjectMeetingAttendanceListRelationFilter
    documents?: ProjectDocumentListRelationFilter
  }, "StudentID">

  export type StudentOrderByWithAggregationInput = {
    StudentID?: SortOrder
    StudentName?: SortOrder
    Phone?: SortOrderInput | SortOrder
    Email?: SortOrder
    Password?: SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    AcademicYearID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    StudentID?: IntWithAggregatesFilter<"Student"> | number
    StudentName?: StringWithAggregatesFilter<"Student"> | string
    Phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    Email?: StringWithAggregatesFilter<"Student"> | string
    Password?: StringWithAggregatesFilter<"Student"> | string
    DepartmentID?: IntNullableWithAggregatesFilter<"Student"> | number | null
    AcademicYearID?: IntNullableWithAggregatesFilter<"Student"> | number | null
    Description?: StringNullableWithAggregatesFilter<"Student"> | string | null
    Created?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type ProjectGroupWhereInput = {
    AND?: ProjectGroupWhereInput | ProjectGroupWhereInput[]
    OR?: ProjectGroupWhereInput[]
    NOT?: ProjectGroupWhereInput | ProjectGroupWhereInput[]
    ProjectGroupID?: IntFilter<"ProjectGroup"> | number
    ProjectGroupName?: StringFilter<"ProjectGroup"> | string
    ProjectTypeID?: IntFilter<"ProjectGroup"> | number
    GuideStaffID?: IntFilter<"ProjectGroup"> | number
    ProjectTitle?: StringNullableFilter<"ProjectGroup"> | string | null
    ProjectArea?: StringNullableFilter<"ProjectGroup"> | string | null
    ProjectDescription?: StringNullableFilter<"ProjectGroup"> | string | null
    AverageCPI?: DecimalNullableFilter<"ProjectGroup"> | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: IntNullableFilter<"ProjectGroup"> | number | null
    ExpertStaffID?: IntNullableFilter<"ProjectGroup"> | number | null
    Status?: EnumProjectGroupStatusFilter<"ProjectGroup"> | $Enums.ProjectGroupStatus
    AcademicYearID?: IntNullableFilter<"ProjectGroup"> | number | null
    Description?: StringNullableFilter<"ProjectGroup"> | string | null
    Created?: DateTimeFilter<"ProjectGroup"> | Date | string
    Modified?: DateTimeFilter<"ProjectGroup"> | Date | string
    projectType?: XOR<ProjectTypeScalarRelationFilter, ProjectTypeWhereInput>
    guide?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    convener?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    expert?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    academicYear?: XOR<AcademicYearNullableScalarRelationFilter, AcademicYearWhereInput> | null
    members?: ProjectGroupMemberListRelationFilter
    meetings?: ProjectMeetingListRelationFilter
    documents?: ProjectDocumentListRelationFilter
  }

  export type ProjectGroupOrderByWithRelationInput = {
    ProjectGroupID?: SortOrder
    ProjectGroupName?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    ProjectTitle?: SortOrderInput | SortOrder
    ProjectArea?: SortOrderInput | SortOrder
    ProjectDescription?: SortOrderInput | SortOrder
    AverageCPI?: SortOrderInput | SortOrder
    ConvenerStaffID?: SortOrderInput | SortOrder
    ExpertStaffID?: SortOrderInput | SortOrder
    Status?: SortOrder
    AcademicYearID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    projectType?: ProjectTypeOrderByWithRelationInput
    guide?: StaffOrderByWithRelationInput
    convener?: StaffOrderByWithRelationInput
    expert?: StaffOrderByWithRelationInput
    academicYear?: AcademicYearOrderByWithRelationInput
    members?: ProjectGroupMemberOrderByRelationAggregateInput
    meetings?: ProjectMeetingOrderByRelationAggregateInput
    documents?: ProjectDocumentOrderByRelationAggregateInput
    _relevance?: ProjectGroupOrderByRelevanceInput
  }

  export type ProjectGroupWhereUniqueInput = Prisma.AtLeast<{
    ProjectGroupID?: number
    AND?: ProjectGroupWhereInput | ProjectGroupWhereInput[]
    OR?: ProjectGroupWhereInput[]
    NOT?: ProjectGroupWhereInput | ProjectGroupWhereInput[]
    ProjectGroupName?: StringFilter<"ProjectGroup"> | string
    ProjectTypeID?: IntFilter<"ProjectGroup"> | number
    GuideStaffID?: IntFilter<"ProjectGroup"> | number
    ProjectTitle?: StringNullableFilter<"ProjectGroup"> | string | null
    ProjectArea?: StringNullableFilter<"ProjectGroup"> | string | null
    ProjectDescription?: StringNullableFilter<"ProjectGroup"> | string | null
    AverageCPI?: DecimalNullableFilter<"ProjectGroup"> | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: IntNullableFilter<"ProjectGroup"> | number | null
    ExpertStaffID?: IntNullableFilter<"ProjectGroup"> | number | null
    Status?: EnumProjectGroupStatusFilter<"ProjectGroup"> | $Enums.ProjectGroupStatus
    AcademicYearID?: IntNullableFilter<"ProjectGroup"> | number | null
    Description?: StringNullableFilter<"ProjectGroup"> | string | null
    Created?: DateTimeFilter<"ProjectGroup"> | Date | string
    Modified?: DateTimeFilter<"ProjectGroup"> | Date | string
    projectType?: XOR<ProjectTypeScalarRelationFilter, ProjectTypeWhereInput>
    guide?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    convener?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    expert?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    academicYear?: XOR<AcademicYearNullableScalarRelationFilter, AcademicYearWhereInput> | null
    members?: ProjectGroupMemberListRelationFilter
    meetings?: ProjectMeetingListRelationFilter
    documents?: ProjectDocumentListRelationFilter
  }, "ProjectGroupID">

  export type ProjectGroupOrderByWithAggregationInput = {
    ProjectGroupID?: SortOrder
    ProjectGroupName?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    ProjectTitle?: SortOrderInput | SortOrder
    ProjectArea?: SortOrderInput | SortOrder
    ProjectDescription?: SortOrderInput | SortOrder
    AverageCPI?: SortOrderInput | SortOrder
    ConvenerStaffID?: SortOrderInput | SortOrder
    ExpertStaffID?: SortOrderInput | SortOrder
    Status?: SortOrder
    AcademicYearID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: ProjectGroupCountOrderByAggregateInput
    _avg?: ProjectGroupAvgOrderByAggregateInput
    _max?: ProjectGroupMaxOrderByAggregateInput
    _min?: ProjectGroupMinOrderByAggregateInput
    _sum?: ProjectGroupSumOrderByAggregateInput
  }

  export type ProjectGroupScalarWhereWithAggregatesInput = {
    AND?: ProjectGroupScalarWhereWithAggregatesInput | ProjectGroupScalarWhereWithAggregatesInput[]
    OR?: ProjectGroupScalarWhereWithAggregatesInput[]
    NOT?: ProjectGroupScalarWhereWithAggregatesInput | ProjectGroupScalarWhereWithAggregatesInput[]
    ProjectGroupID?: IntWithAggregatesFilter<"ProjectGroup"> | number
    ProjectGroupName?: StringWithAggregatesFilter<"ProjectGroup"> | string
    ProjectTypeID?: IntWithAggregatesFilter<"ProjectGroup"> | number
    GuideStaffID?: IntWithAggregatesFilter<"ProjectGroup"> | number
    ProjectTitle?: StringNullableWithAggregatesFilter<"ProjectGroup"> | string | null
    ProjectArea?: StringNullableWithAggregatesFilter<"ProjectGroup"> | string | null
    ProjectDescription?: StringNullableWithAggregatesFilter<"ProjectGroup"> | string | null
    AverageCPI?: DecimalNullableWithAggregatesFilter<"ProjectGroup"> | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: IntNullableWithAggregatesFilter<"ProjectGroup"> | number | null
    ExpertStaffID?: IntNullableWithAggregatesFilter<"ProjectGroup"> | number | null
    Status?: EnumProjectGroupStatusWithAggregatesFilter<"ProjectGroup"> | $Enums.ProjectGroupStatus
    AcademicYearID?: IntNullableWithAggregatesFilter<"ProjectGroup"> | number | null
    Description?: StringNullableWithAggregatesFilter<"ProjectGroup"> | string | null
    Created?: DateTimeWithAggregatesFilter<"ProjectGroup"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"ProjectGroup"> | Date | string
  }

  export type ProjectGroupMemberWhereInput = {
    AND?: ProjectGroupMemberWhereInput | ProjectGroupMemberWhereInput[]
    OR?: ProjectGroupMemberWhereInput[]
    NOT?: ProjectGroupMemberWhereInput | ProjectGroupMemberWhereInput[]
    ProjectGroupMemberID?: IntFilter<"ProjectGroupMember"> | number
    ProjectGroupID?: IntFilter<"ProjectGroupMember"> | number
    StudentID?: IntFilter<"ProjectGroupMember"> | number
    IsGroupLeader?: BoolFilter<"ProjectGroupMember"> | boolean
    StudentCGPA?: DecimalNullableFilter<"ProjectGroupMember"> | Decimal | DecimalJsLike | number | string | null
    Description?: StringNullableFilter<"ProjectGroupMember"> | string | null
    Created?: DateTimeFilter<"ProjectGroupMember"> | Date | string
    Modified?: DateTimeFilter<"ProjectGroupMember"> | Date | string
    projectGroup?: XOR<ProjectGroupScalarRelationFilter, ProjectGroupWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ProjectGroupMemberOrderByWithRelationInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    IsGroupLeader?: SortOrder
    StudentCGPA?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    projectGroup?: ProjectGroupOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    _relevance?: ProjectGroupMemberOrderByRelevanceInput
  }

  export type ProjectGroupMemberWhereUniqueInput = Prisma.AtLeast<{
    ProjectGroupMemberID?: number
    ProjectGroupID_StudentID?: ProjectGroupMemberProjectGroupIDStudentIDCompoundUniqueInput
    AND?: ProjectGroupMemberWhereInput | ProjectGroupMemberWhereInput[]
    OR?: ProjectGroupMemberWhereInput[]
    NOT?: ProjectGroupMemberWhereInput | ProjectGroupMemberWhereInput[]
    ProjectGroupID?: IntFilter<"ProjectGroupMember"> | number
    StudentID?: IntFilter<"ProjectGroupMember"> | number
    IsGroupLeader?: BoolFilter<"ProjectGroupMember"> | boolean
    StudentCGPA?: DecimalNullableFilter<"ProjectGroupMember"> | Decimal | DecimalJsLike | number | string | null
    Description?: StringNullableFilter<"ProjectGroupMember"> | string | null
    Created?: DateTimeFilter<"ProjectGroupMember"> | Date | string
    Modified?: DateTimeFilter<"ProjectGroupMember"> | Date | string
    projectGroup?: XOR<ProjectGroupScalarRelationFilter, ProjectGroupWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "ProjectGroupMemberID" | "ProjectGroupID_StudentID">

  export type ProjectGroupMemberOrderByWithAggregationInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    IsGroupLeader?: SortOrder
    StudentCGPA?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: ProjectGroupMemberCountOrderByAggregateInput
    _avg?: ProjectGroupMemberAvgOrderByAggregateInput
    _max?: ProjectGroupMemberMaxOrderByAggregateInput
    _min?: ProjectGroupMemberMinOrderByAggregateInput
    _sum?: ProjectGroupMemberSumOrderByAggregateInput
  }

  export type ProjectGroupMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectGroupMemberScalarWhereWithAggregatesInput | ProjectGroupMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectGroupMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectGroupMemberScalarWhereWithAggregatesInput | ProjectGroupMemberScalarWhereWithAggregatesInput[]
    ProjectGroupMemberID?: IntWithAggregatesFilter<"ProjectGroupMember"> | number
    ProjectGroupID?: IntWithAggregatesFilter<"ProjectGroupMember"> | number
    StudentID?: IntWithAggregatesFilter<"ProjectGroupMember"> | number
    IsGroupLeader?: BoolWithAggregatesFilter<"ProjectGroupMember"> | boolean
    StudentCGPA?: DecimalNullableWithAggregatesFilter<"ProjectGroupMember"> | Decimal | DecimalJsLike | number | string | null
    Description?: StringNullableWithAggregatesFilter<"ProjectGroupMember"> | string | null
    Created?: DateTimeWithAggregatesFilter<"ProjectGroupMember"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"ProjectGroupMember"> | Date | string
  }

  export type ProjectMeetingWhereInput = {
    AND?: ProjectMeetingWhereInput | ProjectMeetingWhereInput[]
    OR?: ProjectMeetingWhereInput[]
    NOT?: ProjectMeetingWhereInput | ProjectMeetingWhereInput[]
    ProjectMeetingID?: IntFilter<"ProjectMeeting"> | number
    ProjectGroupID?: IntFilter<"ProjectMeeting"> | number
    GuideStaffID?: IntFilter<"ProjectMeeting"> | number
    MeetingDateTime?: DateTimeFilter<"ProjectMeeting"> | Date | string
    MeetingPurpose?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingLocation?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingNotes?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingStatus?: EnumMeetingStatusFilter<"ProjectMeeting"> | $Enums.MeetingStatus
    MeetingStatusDescription?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingStatusDatetime?: DateTimeNullableFilter<"ProjectMeeting"> | Date | string | null
    Description?: StringNullableFilter<"ProjectMeeting"> | string | null
    Created?: DateTimeFilter<"ProjectMeeting"> | Date | string
    Modified?: DateTimeFilter<"ProjectMeeting"> | Date | string
    StatusUpdatedByStaffID?: IntNullableFilter<"ProjectMeeting"> | number | null
    projectGroup?: XOR<ProjectGroupScalarRelationFilter, ProjectGroupWhereInput>
    guide?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    statusBy?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    attendances?: ProjectMeetingAttendanceListRelationFilter
  }

  export type ProjectMeetingOrderByWithRelationInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    MeetingDateTime?: SortOrder
    MeetingPurpose?: SortOrderInput | SortOrder
    MeetingLocation?: SortOrderInput | SortOrder
    MeetingNotes?: SortOrderInput | SortOrder
    MeetingStatus?: SortOrder
    MeetingStatusDescription?: SortOrderInput | SortOrder
    MeetingStatusDatetime?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    StatusUpdatedByStaffID?: SortOrderInput | SortOrder
    projectGroup?: ProjectGroupOrderByWithRelationInput
    guide?: StaffOrderByWithRelationInput
    statusBy?: StaffOrderByWithRelationInput
    attendances?: ProjectMeetingAttendanceOrderByRelationAggregateInput
    _relevance?: ProjectMeetingOrderByRelevanceInput
  }

  export type ProjectMeetingWhereUniqueInput = Prisma.AtLeast<{
    ProjectMeetingID?: number
    AND?: ProjectMeetingWhereInput | ProjectMeetingWhereInput[]
    OR?: ProjectMeetingWhereInput[]
    NOT?: ProjectMeetingWhereInput | ProjectMeetingWhereInput[]
    ProjectGroupID?: IntFilter<"ProjectMeeting"> | number
    GuideStaffID?: IntFilter<"ProjectMeeting"> | number
    MeetingDateTime?: DateTimeFilter<"ProjectMeeting"> | Date | string
    MeetingPurpose?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingLocation?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingNotes?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingStatus?: EnumMeetingStatusFilter<"ProjectMeeting"> | $Enums.MeetingStatus
    MeetingStatusDescription?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingStatusDatetime?: DateTimeNullableFilter<"ProjectMeeting"> | Date | string | null
    Description?: StringNullableFilter<"ProjectMeeting"> | string | null
    Created?: DateTimeFilter<"ProjectMeeting"> | Date | string
    Modified?: DateTimeFilter<"ProjectMeeting"> | Date | string
    StatusUpdatedByStaffID?: IntNullableFilter<"ProjectMeeting"> | number | null
    projectGroup?: XOR<ProjectGroupScalarRelationFilter, ProjectGroupWhereInput>
    guide?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    statusBy?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    attendances?: ProjectMeetingAttendanceListRelationFilter
  }, "ProjectMeetingID">

  export type ProjectMeetingOrderByWithAggregationInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    MeetingDateTime?: SortOrder
    MeetingPurpose?: SortOrderInput | SortOrder
    MeetingLocation?: SortOrderInput | SortOrder
    MeetingNotes?: SortOrderInput | SortOrder
    MeetingStatus?: SortOrder
    MeetingStatusDescription?: SortOrderInput | SortOrder
    MeetingStatusDatetime?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    StatusUpdatedByStaffID?: SortOrderInput | SortOrder
    _count?: ProjectMeetingCountOrderByAggregateInput
    _avg?: ProjectMeetingAvgOrderByAggregateInput
    _max?: ProjectMeetingMaxOrderByAggregateInput
    _min?: ProjectMeetingMinOrderByAggregateInput
    _sum?: ProjectMeetingSumOrderByAggregateInput
  }

  export type ProjectMeetingScalarWhereWithAggregatesInput = {
    AND?: ProjectMeetingScalarWhereWithAggregatesInput | ProjectMeetingScalarWhereWithAggregatesInput[]
    OR?: ProjectMeetingScalarWhereWithAggregatesInput[]
    NOT?: ProjectMeetingScalarWhereWithAggregatesInput | ProjectMeetingScalarWhereWithAggregatesInput[]
    ProjectMeetingID?: IntWithAggregatesFilter<"ProjectMeeting"> | number
    ProjectGroupID?: IntWithAggregatesFilter<"ProjectMeeting"> | number
    GuideStaffID?: IntWithAggregatesFilter<"ProjectMeeting"> | number
    MeetingDateTime?: DateTimeWithAggregatesFilter<"ProjectMeeting"> | Date | string
    MeetingPurpose?: StringNullableWithAggregatesFilter<"ProjectMeeting"> | string | null
    MeetingLocation?: StringNullableWithAggregatesFilter<"ProjectMeeting"> | string | null
    MeetingNotes?: StringNullableWithAggregatesFilter<"ProjectMeeting"> | string | null
    MeetingStatus?: EnumMeetingStatusWithAggregatesFilter<"ProjectMeeting"> | $Enums.MeetingStatus
    MeetingStatusDescription?: StringNullableWithAggregatesFilter<"ProjectMeeting"> | string | null
    MeetingStatusDatetime?: DateTimeNullableWithAggregatesFilter<"ProjectMeeting"> | Date | string | null
    Description?: StringNullableWithAggregatesFilter<"ProjectMeeting"> | string | null
    Created?: DateTimeWithAggregatesFilter<"ProjectMeeting"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"ProjectMeeting"> | Date | string
    StatusUpdatedByStaffID?: IntNullableWithAggregatesFilter<"ProjectMeeting"> | number | null
  }

  export type ProjectMeetingAttendanceWhereInput = {
    AND?: ProjectMeetingAttendanceWhereInput | ProjectMeetingAttendanceWhereInput[]
    OR?: ProjectMeetingAttendanceWhereInput[]
    NOT?: ProjectMeetingAttendanceWhereInput | ProjectMeetingAttendanceWhereInput[]
    ProjectMeetingAttendanceID?: IntFilter<"ProjectMeetingAttendance"> | number
    ProjectMeetingID?: IntFilter<"ProjectMeetingAttendance"> | number
    StudentID?: IntFilter<"ProjectMeetingAttendance"> | number
    IsPresent?: BoolFilter<"ProjectMeetingAttendance"> | boolean
    AttendanceRemarks?: StringNullableFilter<"ProjectMeetingAttendance"> | string | null
    Description?: StringNullableFilter<"ProjectMeetingAttendance"> | string | null
    Created?: DateTimeFilter<"ProjectMeetingAttendance"> | Date | string
    Modified?: DateTimeFilter<"ProjectMeetingAttendance"> | Date | string
    meeting?: XOR<ProjectMeetingScalarRelationFilter, ProjectMeetingWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type ProjectMeetingAttendanceOrderByWithRelationInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
    IsPresent?: SortOrder
    AttendanceRemarks?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    meeting?: ProjectMeetingOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    _relevance?: ProjectMeetingAttendanceOrderByRelevanceInput
  }

  export type ProjectMeetingAttendanceWhereUniqueInput = Prisma.AtLeast<{
    ProjectMeetingAttendanceID?: number
    ProjectMeetingID_StudentID?: ProjectMeetingAttendanceProjectMeetingIDStudentIDCompoundUniqueInput
    AND?: ProjectMeetingAttendanceWhereInput | ProjectMeetingAttendanceWhereInput[]
    OR?: ProjectMeetingAttendanceWhereInput[]
    NOT?: ProjectMeetingAttendanceWhereInput | ProjectMeetingAttendanceWhereInput[]
    ProjectMeetingID?: IntFilter<"ProjectMeetingAttendance"> | number
    StudentID?: IntFilter<"ProjectMeetingAttendance"> | number
    IsPresent?: BoolFilter<"ProjectMeetingAttendance"> | boolean
    AttendanceRemarks?: StringNullableFilter<"ProjectMeetingAttendance"> | string | null
    Description?: StringNullableFilter<"ProjectMeetingAttendance"> | string | null
    Created?: DateTimeFilter<"ProjectMeetingAttendance"> | Date | string
    Modified?: DateTimeFilter<"ProjectMeetingAttendance"> | Date | string
    meeting?: XOR<ProjectMeetingScalarRelationFilter, ProjectMeetingWhereInput>
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "ProjectMeetingAttendanceID" | "ProjectMeetingID_StudentID">

  export type ProjectMeetingAttendanceOrderByWithAggregationInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
    IsPresent?: SortOrder
    AttendanceRemarks?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: ProjectMeetingAttendanceCountOrderByAggregateInput
    _avg?: ProjectMeetingAttendanceAvgOrderByAggregateInput
    _max?: ProjectMeetingAttendanceMaxOrderByAggregateInput
    _min?: ProjectMeetingAttendanceMinOrderByAggregateInput
    _sum?: ProjectMeetingAttendanceSumOrderByAggregateInput
  }

  export type ProjectMeetingAttendanceScalarWhereWithAggregatesInput = {
    AND?: ProjectMeetingAttendanceScalarWhereWithAggregatesInput | ProjectMeetingAttendanceScalarWhereWithAggregatesInput[]
    OR?: ProjectMeetingAttendanceScalarWhereWithAggregatesInput[]
    NOT?: ProjectMeetingAttendanceScalarWhereWithAggregatesInput | ProjectMeetingAttendanceScalarWhereWithAggregatesInput[]
    ProjectMeetingAttendanceID?: IntWithAggregatesFilter<"ProjectMeetingAttendance"> | number
    ProjectMeetingID?: IntWithAggregatesFilter<"ProjectMeetingAttendance"> | number
    StudentID?: IntWithAggregatesFilter<"ProjectMeetingAttendance"> | number
    IsPresent?: BoolWithAggregatesFilter<"ProjectMeetingAttendance"> | boolean
    AttendanceRemarks?: StringNullableWithAggregatesFilter<"ProjectMeetingAttendance"> | string | null
    Description?: StringNullableWithAggregatesFilter<"ProjectMeetingAttendance"> | string | null
    Created?: DateTimeWithAggregatesFilter<"ProjectMeetingAttendance"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"ProjectMeetingAttendance"> | Date | string
  }

  export type ProjectDocumentWhereInput = {
    AND?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    OR?: ProjectDocumentWhereInput[]
    NOT?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    ProjectDocumentID?: IntFilter<"ProjectDocument"> | number
    ProjectGroupID?: IntFilter<"ProjectDocument"> | number
    DocumentType?: EnumDocumentTypeFilter<"ProjectDocument"> | $Enums.DocumentType
    FileName?: StringFilter<"ProjectDocument"> | string
    FilePath?: StringFilter<"ProjectDocument"> | string
    MimeType?: StringNullableFilter<"ProjectDocument"> | string | null
    UploadedByStaffID?: IntNullableFilter<"ProjectDocument"> | number | null
    UploadedByStudentID?: IntNullableFilter<"ProjectDocument"> | number | null
    Description?: StringNullableFilter<"ProjectDocument"> | string | null
    Created?: DateTimeFilter<"ProjectDocument"> | Date | string
    Modified?: DateTimeFilter<"ProjectDocument"> | Date | string
    projectGroup?: XOR<ProjectGroupScalarRelationFilter, ProjectGroupWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type ProjectDocumentOrderByWithRelationInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    DocumentType?: SortOrder
    FileName?: SortOrder
    FilePath?: SortOrder
    MimeType?: SortOrderInput | SortOrder
    UploadedByStaffID?: SortOrderInput | SortOrder
    UploadedByStudentID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    projectGroup?: ProjectGroupOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
    _relevance?: ProjectDocumentOrderByRelevanceInput
  }

  export type ProjectDocumentWhereUniqueInput = Prisma.AtLeast<{
    ProjectDocumentID?: number
    AND?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    OR?: ProjectDocumentWhereInput[]
    NOT?: ProjectDocumentWhereInput | ProjectDocumentWhereInput[]
    ProjectGroupID?: IntFilter<"ProjectDocument"> | number
    DocumentType?: EnumDocumentTypeFilter<"ProjectDocument"> | $Enums.DocumentType
    FileName?: StringFilter<"ProjectDocument"> | string
    FilePath?: StringFilter<"ProjectDocument"> | string
    MimeType?: StringNullableFilter<"ProjectDocument"> | string | null
    UploadedByStaffID?: IntNullableFilter<"ProjectDocument"> | number | null
    UploadedByStudentID?: IntNullableFilter<"ProjectDocument"> | number | null
    Description?: StringNullableFilter<"ProjectDocument"> | string | null
    Created?: DateTimeFilter<"ProjectDocument"> | Date | string
    Modified?: DateTimeFilter<"ProjectDocument"> | Date | string
    projectGroup?: XOR<ProjectGroupScalarRelationFilter, ProjectGroupWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "ProjectDocumentID">

  export type ProjectDocumentOrderByWithAggregationInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    DocumentType?: SortOrder
    FileName?: SortOrder
    FilePath?: SortOrder
    MimeType?: SortOrderInput | SortOrder
    UploadedByStaffID?: SortOrderInput | SortOrder
    UploadedByStudentID?: SortOrderInput | SortOrder
    Description?: SortOrderInput | SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    _count?: ProjectDocumentCountOrderByAggregateInput
    _avg?: ProjectDocumentAvgOrderByAggregateInput
    _max?: ProjectDocumentMaxOrderByAggregateInput
    _min?: ProjectDocumentMinOrderByAggregateInput
    _sum?: ProjectDocumentSumOrderByAggregateInput
  }

  export type ProjectDocumentScalarWhereWithAggregatesInput = {
    AND?: ProjectDocumentScalarWhereWithAggregatesInput | ProjectDocumentScalarWhereWithAggregatesInput[]
    OR?: ProjectDocumentScalarWhereWithAggregatesInput[]
    NOT?: ProjectDocumentScalarWhereWithAggregatesInput | ProjectDocumentScalarWhereWithAggregatesInput[]
    ProjectDocumentID?: IntWithAggregatesFilter<"ProjectDocument"> | number
    ProjectGroupID?: IntWithAggregatesFilter<"ProjectDocument"> | number
    DocumentType?: EnumDocumentTypeWithAggregatesFilter<"ProjectDocument"> | $Enums.DocumentType
    FileName?: StringWithAggregatesFilter<"ProjectDocument"> | string
    FilePath?: StringWithAggregatesFilter<"ProjectDocument"> | string
    MimeType?: StringNullableWithAggregatesFilter<"ProjectDocument"> | string | null
    UploadedByStaffID?: IntNullableWithAggregatesFilter<"ProjectDocument"> | number | null
    UploadedByStudentID?: IntNullableWithAggregatesFilter<"ProjectDocument"> | number | null
    Description?: StringNullableWithAggregatesFilter<"ProjectDocument"> | string | null
    Created?: DateTimeWithAggregatesFilter<"ProjectDocument"> | Date | string
    Modified?: DateTimeWithAggregatesFilter<"ProjectDocument"> | Date | string
  }

  export type ProjectTypeCreateInput = {
    ProjectTypeName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroups?: ProjectGroupCreateNestedManyWithoutProjectTypeInput
  }

  export type ProjectTypeUncheckedCreateInput = {
    ProjectTypeID?: number
    ProjectTypeName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroups?: ProjectGroupUncheckedCreateNestedManyWithoutProjectTypeInput
  }

  export type ProjectTypeUpdateInput = {
    ProjectTypeName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroups?: ProjectGroupUpdateManyWithoutProjectTypeNestedInput
  }

  export type ProjectTypeUncheckedUpdateInput = {
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    ProjectTypeName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroups?: ProjectGroupUncheckedUpdateManyWithoutProjectTypeNestedInput
  }

  export type ProjectTypeCreateManyInput = {
    ProjectTypeID?: number
    ProjectTypeName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectTypeUpdateManyMutationInput = {
    ProjectTypeName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTypeUncheckedUpdateManyInput = {
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    ProjectTypeName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffCreateInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingCreateNestedManyWithoutStatusByInput
  }

  export type StaffUncheckedCreateInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupUncheckedCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput
  }

  export type StaffUpdateInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput
  }

  export type StaffCreateManyInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type StaffUpdateManyMutationInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUncheckedUpdateManyInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearCreateInput = {
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    departments?: DepartmentCreateNestedManyWithoutAcademicYearInput
    projectGroups?: ProjectGroupCreateNestedManyWithoutAcademicYearInput
    students?: StudentCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearUncheckedCreateInput = {
    AcademicYearID?: number
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutAcademicYearInput
    projectGroups?: ProjectGroupUncheckedCreateNestedManyWithoutAcademicYearInput
    students?: StudentUncheckedCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearUpdateInput = {
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutAcademicYearNestedInput
    projectGroups?: ProjectGroupUpdateManyWithoutAcademicYearNestedInput
    students?: StudentUpdateManyWithoutAcademicYearNestedInput
  }

  export type AcademicYearUncheckedUpdateInput = {
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutAcademicYearNestedInput
    projectGroups?: ProjectGroupUncheckedUpdateManyWithoutAcademicYearNestedInput
    students?: StudentUncheckedUpdateManyWithoutAcademicYearNestedInput
  }

  export type AcademicYearCreateManyInput = {
    AcademicYearID?: number
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type AcademicYearUpdateManyMutationInput = {
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearUncheckedUpdateManyInput = {
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateInput = {
    DepartmentName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    academicYear: AcademicYearCreateNestedOneWithoutDepartmentsInput
    students?: StudentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    DepartmentID?: number
    DepartmentName: string
    AcademicYearID: number
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    academicYear?: AcademicYearUpdateOneRequiredWithoutDepartmentsNestedInput
    students?: StudentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    DepartmentID?: number
    DepartmentName: string
    AcademicYearID: number
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type DepartmentUpdateManyMutationInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    department?: DepartmentCreateNestedOneWithoutStudentsInput
    academicYear?: AcademicYearCreateNestedOneWithoutStudentsInput
    groupMembers?: ProjectGroupMemberCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    groupMembers?: ProjectGroupMemberUncheckedCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutStudentsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutStudentsNestedInput
    groupMembers?: ProjectGroupMemberUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: ProjectGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupCreateInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUpdateInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupCreateManyInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupUpdateManyMutationInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupUncheckedUpdateManyInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberCreateInput = {
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutMembersInput
    student: StudentCreateNestedOneWithoutGroupMembersInput
  }

  export type ProjectGroupMemberUncheckedCreateInput = {
    ProjectGroupMemberID?: number
    ProjectGroupID: number
    StudentID: number
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupMemberUpdateInput = {
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutMembersNestedInput
    student?: StudentUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type ProjectGroupMemberUncheckedUpdateInput = {
    ProjectGroupMemberID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberCreateManyInput = {
    ProjectGroupMemberID?: number
    ProjectGroupID: number
    StudentID: number
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupMemberUpdateManyMutationInput = {
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberUncheckedUpdateManyInput = {
    ProjectGroupMemberID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingCreateInput = {
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutMeetingsInput
    guide: StaffCreateNestedOneWithoutGuidedMeetingsInput
    statusBy?: StaffCreateNestedOneWithoutMeetingStatusByInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingUncheckedCreateInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingUpdateInput = {
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutMeetingsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedMeetingsNestedInput
    statusBy?: StaffUpdateOneWithoutMeetingStatusByNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingCreateManyInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
  }

  export type ProjectMeetingUpdateManyMutationInput = {
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingUncheckedUpdateManyInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectMeetingAttendanceCreateInput = {
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    meeting: ProjectMeetingCreateNestedOneWithoutAttendancesInput
    student: StudentCreateNestedOneWithoutAttendancesInput
  }

  export type ProjectMeetingAttendanceUncheckedCreateInput = {
    ProjectMeetingAttendanceID?: number
    ProjectMeetingID: number
    StudentID: number
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingAttendanceUpdateInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: ProjectMeetingUpdateOneRequiredWithoutAttendancesNestedInput
    student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type ProjectMeetingAttendanceUncheckedUpdateInput = {
    ProjectMeetingAttendanceID?: IntFieldUpdateOperationsInput | number
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingAttendanceCreateManyInput = {
    ProjectMeetingAttendanceID?: number
    ProjectMeetingID: number
    StudentID: number
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingAttendanceUpdateManyMutationInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingAttendanceUncheckedUpdateManyInput = {
    ProjectMeetingAttendanceID?: IntFieldUpdateOperationsInput | number
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentCreateInput = {
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutDocumentsInput
    staff?: StaffCreateNestedOneWithoutProjectDocumentsInput
    student?: StudentCreateNestedOneWithoutDocumentsInput
  }

  export type ProjectDocumentUncheckedCreateInput = {
    ProjectDocumentID?: number
    ProjectGroupID: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStaffID?: number | null
    UploadedByStudentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentUpdateInput = {
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutDocumentsNestedInput
    staff?: StaffUpdateOneWithoutProjectDocumentsNestedInput
    student?: StudentUpdateOneWithoutDocumentsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    UploadedByStudentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentCreateManyInput = {
    ProjectDocumentID?: number
    ProjectGroupID: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStaffID?: number | null
    UploadedByStudentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentUpdateManyMutationInput = {
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentUncheckedUpdateManyInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    UploadedByStudentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectGroupListRelationFilter = {
    every?: ProjectGroupWhereInput
    some?: ProjectGroupWhereInput
    none?: ProjectGroupWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProjectGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectTypeOrderByRelevanceInput = {
    fields: ProjectTypeOrderByRelevanceFieldEnum | ProjectTypeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectTypeCountOrderByAggregateInput = {
    ProjectTypeID?: SortOrder
    ProjectTypeName?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectTypeAvgOrderByAggregateInput = {
    ProjectTypeID?: SortOrder
  }

  export type ProjectTypeMaxOrderByAggregateInput = {
    ProjectTypeID?: SortOrder
    ProjectTypeName?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectTypeMinOrderByAggregateInput = {
    ProjectTypeID?: SortOrder
    ProjectTypeName?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectTypeSumOrderByAggregateInput = {
    ProjectTypeID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type ProjectMeetingListRelationFilter = {
    every?: ProjectMeetingWhereInput
    some?: ProjectMeetingWhereInput
    none?: ProjectMeetingWhereInput
  }

  export type ProjectDocumentListRelationFilter = {
    every?: ProjectDocumentWhereInput
    some?: ProjectDocumentWhereInput
    none?: ProjectDocumentWhereInput
  }

  export type ProjectMeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaffOrderByRelevanceInput = {
    fields: StaffOrderByRelevanceFieldEnum | StaffOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StaffCountOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type StaffAvgOrderByAggregateInput = {
    StaffID?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    StaffID?: SortOrder
    StaffName?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    Role?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type StaffSumOrderByAggregateInput = {
    StaffID?: SortOrder
  }

  export type EnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicYearOrderByRelevanceInput = {
    fields: AcademicYearOrderByRelevanceFieldEnum | AcademicYearOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AcademicYearCountOrderByAggregateInput = {
    AcademicYearID?: SortOrder
    YearName?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type AcademicYearAvgOrderByAggregateInput = {
    AcademicYearID?: SortOrder
  }

  export type AcademicYearMaxOrderByAggregateInput = {
    AcademicYearID?: SortOrder
    YearName?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type AcademicYearMinOrderByAggregateInput = {
    AcademicYearID?: SortOrder
    YearName?: SortOrder
    StartDate?: SortOrder
    EndDate?: SortOrder
    IsActive?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type AcademicYearSumOrderByAggregateInput = {
    AcademicYearID?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AcademicYearScalarRelationFilter = {
    is?: AcademicYearWhereInput
    isNot?: AcademicYearWhereInput
  }

  export type DepartmentOrderByRelevanceInput = {
    fields: DepartmentOrderByRelevanceFieldEnum | DepartmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepartmentCountOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    DepartmentID?: SortOrder
    DepartmentName?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type AcademicYearNullableScalarRelationFilter = {
    is?: AcademicYearWhereInput | null
    isNot?: AcademicYearWhereInput | null
  }

  export type ProjectGroupMemberListRelationFilter = {
    every?: ProjectGroupMemberWhereInput
    some?: ProjectGroupMemberWhereInput
    none?: ProjectGroupMemberWhereInput
  }

  export type ProjectMeetingAttendanceListRelationFilter = {
    every?: ProjectMeetingAttendanceWhereInput
    some?: ProjectMeetingAttendanceWhereInput
    none?: ProjectMeetingAttendanceWhereInput
  }

  export type ProjectGroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMeetingAttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    StudentID?: SortOrder
    StudentName?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    StudentID?: SortOrder
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    StudentID?: SortOrder
    StudentName?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    StudentID?: SortOrder
    StudentName?: SortOrder
    Phone?: SortOrder
    Email?: SortOrder
    Password?: SortOrder
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    StudentID?: SortOrder
    DepartmentID?: SortOrder
    AcademicYearID?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumProjectGroupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectGroupStatus | EnumProjectGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectGroupStatus[]
    notIn?: $Enums.ProjectGroupStatus[]
    not?: NestedEnumProjectGroupStatusFilter<$PrismaModel> | $Enums.ProjectGroupStatus
  }

  export type ProjectTypeScalarRelationFilter = {
    is?: ProjectTypeWhereInput
    isNot?: ProjectTypeWhereInput
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type ProjectGroupOrderByRelevanceInput = {
    fields: ProjectGroupOrderByRelevanceFieldEnum | ProjectGroupOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectGroupCountOrderByAggregateInput = {
    ProjectGroupID?: SortOrder
    ProjectGroupName?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    ProjectTitle?: SortOrder
    ProjectArea?: SortOrder
    ProjectDescription?: SortOrder
    AverageCPI?: SortOrder
    ConvenerStaffID?: SortOrder
    ExpertStaffID?: SortOrder
    Status?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectGroupAvgOrderByAggregateInput = {
    ProjectGroupID?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    AverageCPI?: SortOrder
    ConvenerStaffID?: SortOrder
    ExpertStaffID?: SortOrder
    AcademicYearID?: SortOrder
  }

  export type ProjectGroupMaxOrderByAggregateInput = {
    ProjectGroupID?: SortOrder
    ProjectGroupName?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    ProjectTitle?: SortOrder
    ProjectArea?: SortOrder
    ProjectDescription?: SortOrder
    AverageCPI?: SortOrder
    ConvenerStaffID?: SortOrder
    ExpertStaffID?: SortOrder
    Status?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectGroupMinOrderByAggregateInput = {
    ProjectGroupID?: SortOrder
    ProjectGroupName?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    ProjectTitle?: SortOrder
    ProjectArea?: SortOrder
    ProjectDescription?: SortOrder
    AverageCPI?: SortOrder
    ConvenerStaffID?: SortOrder
    ExpertStaffID?: SortOrder
    Status?: SortOrder
    AcademicYearID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectGroupSumOrderByAggregateInput = {
    ProjectGroupID?: SortOrder
    ProjectTypeID?: SortOrder
    GuideStaffID?: SortOrder
    AverageCPI?: SortOrder
    ConvenerStaffID?: SortOrder
    ExpertStaffID?: SortOrder
    AcademicYearID?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumProjectGroupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectGroupStatus | EnumProjectGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectGroupStatus[]
    notIn?: $Enums.ProjectGroupStatus[]
    not?: NestedEnumProjectGroupStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectGroupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectGroupStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectGroupStatusFilter<$PrismaModel>
  }

  export type ProjectGroupScalarRelationFilter = {
    is?: ProjectGroupWhereInput
    isNot?: ProjectGroupWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type ProjectGroupMemberOrderByRelevanceInput = {
    fields: ProjectGroupMemberOrderByRelevanceFieldEnum | ProjectGroupMemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectGroupMemberProjectGroupIDStudentIDCompoundUniqueInput = {
    ProjectGroupID: number
    StudentID: number
  }

  export type ProjectGroupMemberCountOrderByAggregateInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    IsGroupLeader?: SortOrder
    StudentCGPA?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectGroupMemberAvgOrderByAggregateInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    StudentCGPA?: SortOrder
  }

  export type ProjectGroupMemberMaxOrderByAggregateInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    IsGroupLeader?: SortOrder
    StudentCGPA?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectGroupMemberMinOrderByAggregateInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    IsGroupLeader?: SortOrder
    StudentCGPA?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectGroupMemberSumOrderByAggregateInput = {
    ProjectGroupMemberID?: SortOrder
    ProjectGroupID?: SortOrder
    StudentID?: SortOrder
    StudentCGPA?: SortOrder
  }

  export type EnumMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusFilter<$PrismaModel> | $Enums.MeetingStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProjectMeetingOrderByRelevanceInput = {
    fields: ProjectMeetingOrderByRelevanceFieldEnum | ProjectMeetingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectMeetingCountOrderByAggregateInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    MeetingDateTime?: SortOrder
    MeetingPurpose?: SortOrder
    MeetingLocation?: SortOrder
    MeetingNotes?: SortOrder
    MeetingStatus?: SortOrder
    MeetingStatusDescription?: SortOrder
    MeetingStatusDatetime?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    StatusUpdatedByStaffID?: SortOrder
  }

  export type ProjectMeetingAvgOrderByAggregateInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    StatusUpdatedByStaffID?: SortOrder
  }

  export type ProjectMeetingMaxOrderByAggregateInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    MeetingDateTime?: SortOrder
    MeetingPurpose?: SortOrder
    MeetingLocation?: SortOrder
    MeetingNotes?: SortOrder
    MeetingStatus?: SortOrder
    MeetingStatusDescription?: SortOrder
    MeetingStatusDatetime?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    StatusUpdatedByStaffID?: SortOrder
  }

  export type ProjectMeetingMinOrderByAggregateInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    MeetingDateTime?: SortOrder
    MeetingPurpose?: SortOrder
    MeetingLocation?: SortOrder
    MeetingNotes?: SortOrder
    MeetingStatus?: SortOrder
    MeetingStatusDescription?: SortOrder
    MeetingStatusDatetime?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
    StatusUpdatedByStaffID?: SortOrder
  }

  export type ProjectMeetingSumOrderByAggregateInput = {
    ProjectMeetingID?: SortOrder
    ProjectGroupID?: SortOrder
    GuideStaffID?: SortOrder
    StatusUpdatedByStaffID?: SortOrder
  }

  export type EnumMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumMeetingStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProjectMeetingScalarRelationFilter = {
    is?: ProjectMeetingWhereInput
    isNot?: ProjectMeetingWhereInput
  }

  export type ProjectMeetingAttendanceOrderByRelevanceInput = {
    fields: ProjectMeetingAttendanceOrderByRelevanceFieldEnum | ProjectMeetingAttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectMeetingAttendanceProjectMeetingIDStudentIDCompoundUniqueInput = {
    ProjectMeetingID: number
    StudentID: number
  }

  export type ProjectMeetingAttendanceCountOrderByAggregateInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
    IsPresent?: SortOrder
    AttendanceRemarks?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectMeetingAttendanceAvgOrderByAggregateInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
  }

  export type ProjectMeetingAttendanceMaxOrderByAggregateInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
    IsPresent?: SortOrder
    AttendanceRemarks?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectMeetingAttendanceMinOrderByAggregateInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
    IsPresent?: SortOrder
    AttendanceRemarks?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectMeetingAttendanceSumOrderByAggregateInput = {
    ProjectMeetingAttendanceID?: SortOrder
    ProjectMeetingID?: SortOrder
    StudentID?: SortOrder
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type ProjectDocumentOrderByRelevanceInput = {
    fields: ProjectDocumentOrderByRelevanceFieldEnum | ProjectDocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProjectDocumentCountOrderByAggregateInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    DocumentType?: SortOrder
    FileName?: SortOrder
    FilePath?: SortOrder
    MimeType?: SortOrder
    UploadedByStaffID?: SortOrder
    UploadedByStudentID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectDocumentAvgOrderByAggregateInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    UploadedByStaffID?: SortOrder
    UploadedByStudentID?: SortOrder
  }

  export type ProjectDocumentMaxOrderByAggregateInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    DocumentType?: SortOrder
    FileName?: SortOrder
    FilePath?: SortOrder
    MimeType?: SortOrder
    UploadedByStaffID?: SortOrder
    UploadedByStudentID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectDocumentMinOrderByAggregateInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    DocumentType?: SortOrder
    FileName?: SortOrder
    FilePath?: SortOrder
    MimeType?: SortOrder
    UploadedByStaffID?: SortOrder
    UploadedByStudentID?: SortOrder
    Description?: SortOrder
    Created?: SortOrder
    Modified?: SortOrder
  }

  export type ProjectDocumentSumOrderByAggregateInput = {
    ProjectDocumentID?: SortOrder
    ProjectGroupID?: SortOrder
    UploadedByStaffID?: SortOrder
    UploadedByStudentID?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type ProjectGroupCreateNestedManyWithoutProjectTypeInput = {
    create?: XOR<ProjectGroupCreateWithoutProjectTypeInput, ProjectGroupUncheckedCreateWithoutProjectTypeInput> | ProjectGroupCreateWithoutProjectTypeInput[] | ProjectGroupUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutProjectTypeInput | ProjectGroupCreateOrConnectWithoutProjectTypeInput[]
    createMany?: ProjectGroupCreateManyProjectTypeInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectGroupUncheckedCreateNestedManyWithoutProjectTypeInput = {
    create?: XOR<ProjectGroupCreateWithoutProjectTypeInput, ProjectGroupUncheckedCreateWithoutProjectTypeInput> | ProjectGroupCreateWithoutProjectTypeInput[] | ProjectGroupUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutProjectTypeInput | ProjectGroupCreateOrConnectWithoutProjectTypeInput[]
    createMany?: ProjectGroupCreateManyProjectTypeInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectGroupUpdateManyWithoutProjectTypeNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutProjectTypeInput, ProjectGroupUncheckedCreateWithoutProjectTypeInput> | ProjectGroupCreateWithoutProjectTypeInput[] | ProjectGroupUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutProjectTypeInput | ProjectGroupCreateOrConnectWithoutProjectTypeInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutProjectTypeInput | ProjectGroupUpsertWithWhereUniqueWithoutProjectTypeInput[]
    createMany?: ProjectGroupCreateManyProjectTypeInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutProjectTypeInput | ProjectGroupUpdateWithWhereUniqueWithoutProjectTypeInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutProjectTypeInput | ProjectGroupUpdateManyWithWhereWithoutProjectTypeInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectGroupUncheckedUpdateManyWithoutProjectTypeNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutProjectTypeInput, ProjectGroupUncheckedCreateWithoutProjectTypeInput> | ProjectGroupCreateWithoutProjectTypeInput[] | ProjectGroupUncheckedCreateWithoutProjectTypeInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutProjectTypeInput | ProjectGroupCreateOrConnectWithoutProjectTypeInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutProjectTypeInput | ProjectGroupUpsertWithWhereUniqueWithoutProjectTypeInput[]
    createMany?: ProjectGroupCreateManyProjectTypeInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutProjectTypeInput | ProjectGroupUpdateWithWhereUniqueWithoutProjectTypeInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutProjectTypeInput | ProjectGroupUpdateManyWithWhereWithoutProjectTypeInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectGroupCreateNestedManyWithoutGuideInput = {
    create?: XOR<ProjectGroupCreateWithoutGuideInput, ProjectGroupUncheckedCreateWithoutGuideInput> | ProjectGroupCreateWithoutGuideInput[] | ProjectGroupUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutGuideInput | ProjectGroupCreateOrConnectWithoutGuideInput[]
    createMany?: ProjectGroupCreateManyGuideInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectMeetingCreateNestedManyWithoutGuideInput = {
    create?: XOR<ProjectMeetingCreateWithoutGuideInput, ProjectMeetingUncheckedCreateWithoutGuideInput> | ProjectMeetingCreateWithoutGuideInput[] | ProjectMeetingUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutGuideInput | ProjectMeetingCreateOrConnectWithoutGuideInput[]
    createMany?: ProjectMeetingCreateManyGuideInputEnvelope
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
  }

  export type ProjectGroupCreateNestedManyWithoutConvenerInput = {
    create?: XOR<ProjectGroupCreateWithoutConvenerInput, ProjectGroupUncheckedCreateWithoutConvenerInput> | ProjectGroupCreateWithoutConvenerInput[] | ProjectGroupUncheckedCreateWithoutConvenerInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutConvenerInput | ProjectGroupCreateOrConnectWithoutConvenerInput[]
    createMany?: ProjectGroupCreateManyConvenerInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectGroupCreateNestedManyWithoutExpertInput = {
    create?: XOR<ProjectGroupCreateWithoutExpertInput, ProjectGroupUncheckedCreateWithoutExpertInput> | ProjectGroupCreateWithoutExpertInput[] | ProjectGroupUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutExpertInput | ProjectGroupCreateOrConnectWithoutExpertInput[]
    createMany?: ProjectGroupCreateManyExpertInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectDocumentCreateNestedManyWithoutStaffInput = {
    create?: XOR<ProjectDocumentCreateWithoutStaffInput, ProjectDocumentUncheckedCreateWithoutStaffInput> | ProjectDocumentCreateWithoutStaffInput[] | ProjectDocumentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStaffInput | ProjectDocumentCreateOrConnectWithoutStaffInput[]
    createMany?: ProjectDocumentCreateManyStaffInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type ProjectMeetingCreateNestedManyWithoutStatusByInput = {
    create?: XOR<ProjectMeetingCreateWithoutStatusByInput, ProjectMeetingUncheckedCreateWithoutStatusByInput> | ProjectMeetingCreateWithoutStatusByInput[] | ProjectMeetingUncheckedCreateWithoutStatusByInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutStatusByInput | ProjectMeetingCreateOrConnectWithoutStatusByInput[]
    createMany?: ProjectMeetingCreateManyStatusByInputEnvelope
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
  }

  export type ProjectGroupUncheckedCreateNestedManyWithoutGuideInput = {
    create?: XOR<ProjectGroupCreateWithoutGuideInput, ProjectGroupUncheckedCreateWithoutGuideInput> | ProjectGroupCreateWithoutGuideInput[] | ProjectGroupUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutGuideInput | ProjectGroupCreateOrConnectWithoutGuideInput[]
    createMany?: ProjectGroupCreateManyGuideInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput = {
    create?: XOR<ProjectMeetingCreateWithoutGuideInput, ProjectMeetingUncheckedCreateWithoutGuideInput> | ProjectMeetingCreateWithoutGuideInput[] | ProjectMeetingUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutGuideInput | ProjectMeetingCreateOrConnectWithoutGuideInput[]
    createMany?: ProjectMeetingCreateManyGuideInputEnvelope
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
  }

  export type ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput = {
    create?: XOR<ProjectGroupCreateWithoutConvenerInput, ProjectGroupUncheckedCreateWithoutConvenerInput> | ProjectGroupCreateWithoutConvenerInput[] | ProjectGroupUncheckedCreateWithoutConvenerInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutConvenerInput | ProjectGroupCreateOrConnectWithoutConvenerInput[]
    createMany?: ProjectGroupCreateManyConvenerInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectGroupUncheckedCreateNestedManyWithoutExpertInput = {
    create?: XOR<ProjectGroupCreateWithoutExpertInput, ProjectGroupUncheckedCreateWithoutExpertInput> | ProjectGroupCreateWithoutExpertInput[] | ProjectGroupUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutExpertInput | ProjectGroupCreateOrConnectWithoutExpertInput[]
    createMany?: ProjectGroupCreateManyExpertInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<ProjectDocumentCreateWithoutStaffInput, ProjectDocumentUncheckedCreateWithoutStaffInput> | ProjectDocumentCreateWithoutStaffInput[] | ProjectDocumentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStaffInput | ProjectDocumentCreateOrConnectWithoutStaffInput[]
    createMany?: ProjectDocumentCreateManyStaffInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput = {
    create?: XOR<ProjectMeetingCreateWithoutStatusByInput, ProjectMeetingUncheckedCreateWithoutStatusByInput> | ProjectMeetingCreateWithoutStatusByInput[] | ProjectMeetingUncheckedCreateWithoutStatusByInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutStatusByInput | ProjectMeetingCreateOrConnectWithoutStatusByInput[]
    createMany?: ProjectMeetingCreateManyStatusByInputEnvelope
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
  }

  export type EnumStaffRoleFieldUpdateOperationsInput = {
    set?: $Enums.StaffRole
  }

  export type ProjectGroupUpdateManyWithoutGuideNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutGuideInput, ProjectGroupUncheckedCreateWithoutGuideInput> | ProjectGroupCreateWithoutGuideInput[] | ProjectGroupUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutGuideInput | ProjectGroupCreateOrConnectWithoutGuideInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutGuideInput | ProjectGroupUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: ProjectGroupCreateManyGuideInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutGuideInput | ProjectGroupUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutGuideInput | ProjectGroupUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectMeetingUpdateManyWithoutGuideNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutGuideInput, ProjectMeetingUncheckedCreateWithoutGuideInput> | ProjectMeetingCreateWithoutGuideInput[] | ProjectMeetingUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutGuideInput | ProjectMeetingCreateOrConnectWithoutGuideInput[]
    upsert?: ProjectMeetingUpsertWithWhereUniqueWithoutGuideInput | ProjectMeetingUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: ProjectMeetingCreateManyGuideInputEnvelope
    set?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    disconnect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    delete?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    update?: ProjectMeetingUpdateWithWhereUniqueWithoutGuideInput | ProjectMeetingUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: ProjectMeetingUpdateManyWithWhereWithoutGuideInput | ProjectMeetingUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
  }

  export type ProjectGroupUpdateManyWithoutConvenerNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutConvenerInput, ProjectGroupUncheckedCreateWithoutConvenerInput> | ProjectGroupCreateWithoutConvenerInput[] | ProjectGroupUncheckedCreateWithoutConvenerInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutConvenerInput | ProjectGroupCreateOrConnectWithoutConvenerInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutConvenerInput | ProjectGroupUpsertWithWhereUniqueWithoutConvenerInput[]
    createMany?: ProjectGroupCreateManyConvenerInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutConvenerInput | ProjectGroupUpdateWithWhereUniqueWithoutConvenerInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutConvenerInput | ProjectGroupUpdateManyWithWhereWithoutConvenerInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectGroupUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutExpertInput, ProjectGroupUncheckedCreateWithoutExpertInput> | ProjectGroupCreateWithoutExpertInput[] | ProjectGroupUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutExpertInput | ProjectGroupCreateOrConnectWithoutExpertInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutExpertInput | ProjectGroupUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ProjectGroupCreateManyExpertInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutExpertInput | ProjectGroupUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutExpertInput | ProjectGroupUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectDocumentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutStaffInput, ProjectDocumentUncheckedCreateWithoutStaffInput> | ProjectDocumentCreateWithoutStaffInput[] | ProjectDocumentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStaffInput | ProjectDocumentCreateOrConnectWithoutStaffInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutStaffInput | ProjectDocumentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: ProjectDocumentCreateManyStaffInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutStaffInput | ProjectDocumentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutStaffInput | ProjectDocumentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectMeetingUpdateManyWithoutStatusByNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutStatusByInput, ProjectMeetingUncheckedCreateWithoutStatusByInput> | ProjectMeetingCreateWithoutStatusByInput[] | ProjectMeetingUncheckedCreateWithoutStatusByInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutStatusByInput | ProjectMeetingCreateOrConnectWithoutStatusByInput[]
    upsert?: ProjectMeetingUpsertWithWhereUniqueWithoutStatusByInput | ProjectMeetingUpsertWithWhereUniqueWithoutStatusByInput[]
    createMany?: ProjectMeetingCreateManyStatusByInputEnvelope
    set?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    disconnect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    delete?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    update?: ProjectMeetingUpdateWithWhereUniqueWithoutStatusByInput | ProjectMeetingUpdateWithWhereUniqueWithoutStatusByInput[]
    updateMany?: ProjectMeetingUpdateManyWithWhereWithoutStatusByInput | ProjectMeetingUpdateManyWithWhereWithoutStatusByInput[]
    deleteMany?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
  }

  export type ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutGuideInput, ProjectGroupUncheckedCreateWithoutGuideInput> | ProjectGroupCreateWithoutGuideInput[] | ProjectGroupUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutGuideInput | ProjectGroupCreateOrConnectWithoutGuideInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutGuideInput | ProjectGroupUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: ProjectGroupCreateManyGuideInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutGuideInput | ProjectGroupUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutGuideInput | ProjectGroupUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutGuideInput, ProjectMeetingUncheckedCreateWithoutGuideInput> | ProjectMeetingCreateWithoutGuideInput[] | ProjectMeetingUncheckedCreateWithoutGuideInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutGuideInput | ProjectMeetingCreateOrConnectWithoutGuideInput[]
    upsert?: ProjectMeetingUpsertWithWhereUniqueWithoutGuideInput | ProjectMeetingUpsertWithWhereUniqueWithoutGuideInput[]
    createMany?: ProjectMeetingCreateManyGuideInputEnvelope
    set?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    disconnect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    delete?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    update?: ProjectMeetingUpdateWithWhereUniqueWithoutGuideInput | ProjectMeetingUpdateWithWhereUniqueWithoutGuideInput[]
    updateMany?: ProjectMeetingUpdateManyWithWhereWithoutGuideInput | ProjectMeetingUpdateManyWithWhereWithoutGuideInput[]
    deleteMany?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
  }

  export type ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutConvenerInput, ProjectGroupUncheckedCreateWithoutConvenerInput> | ProjectGroupCreateWithoutConvenerInput[] | ProjectGroupUncheckedCreateWithoutConvenerInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutConvenerInput | ProjectGroupCreateOrConnectWithoutConvenerInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutConvenerInput | ProjectGroupUpsertWithWhereUniqueWithoutConvenerInput[]
    createMany?: ProjectGroupCreateManyConvenerInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutConvenerInput | ProjectGroupUpdateWithWhereUniqueWithoutConvenerInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutConvenerInput | ProjectGroupUpdateManyWithWhereWithoutConvenerInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutExpertInput, ProjectGroupUncheckedCreateWithoutExpertInput> | ProjectGroupCreateWithoutExpertInput[] | ProjectGroupUncheckedCreateWithoutExpertInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutExpertInput | ProjectGroupCreateOrConnectWithoutExpertInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutExpertInput | ProjectGroupUpsertWithWhereUniqueWithoutExpertInput[]
    createMany?: ProjectGroupCreateManyExpertInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutExpertInput | ProjectGroupUpdateWithWhereUniqueWithoutExpertInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutExpertInput | ProjectGroupUpdateManyWithWhereWithoutExpertInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutStaffInput, ProjectDocumentUncheckedCreateWithoutStaffInput> | ProjectDocumentCreateWithoutStaffInput[] | ProjectDocumentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStaffInput | ProjectDocumentCreateOrConnectWithoutStaffInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutStaffInput | ProjectDocumentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: ProjectDocumentCreateManyStaffInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutStaffInput | ProjectDocumentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutStaffInput | ProjectDocumentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutStatusByInput, ProjectMeetingUncheckedCreateWithoutStatusByInput> | ProjectMeetingCreateWithoutStatusByInput[] | ProjectMeetingUncheckedCreateWithoutStatusByInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutStatusByInput | ProjectMeetingCreateOrConnectWithoutStatusByInput[]
    upsert?: ProjectMeetingUpsertWithWhereUniqueWithoutStatusByInput | ProjectMeetingUpsertWithWhereUniqueWithoutStatusByInput[]
    createMany?: ProjectMeetingCreateManyStatusByInputEnvelope
    set?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    disconnect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    delete?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    update?: ProjectMeetingUpdateWithWhereUniqueWithoutStatusByInput | ProjectMeetingUpdateWithWhereUniqueWithoutStatusByInput[]
    updateMany?: ProjectMeetingUpdateManyWithWhereWithoutStatusByInput | ProjectMeetingUpdateManyWithWhereWithoutStatusByInput[]
    deleteMany?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
  }

  export type DepartmentCreateNestedManyWithoutAcademicYearInput = {
    create?: XOR<DepartmentCreateWithoutAcademicYearInput, DepartmentUncheckedCreateWithoutAcademicYearInput> | DepartmentCreateWithoutAcademicYearInput[] | DepartmentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAcademicYearInput | DepartmentCreateOrConnectWithoutAcademicYearInput[]
    createMany?: DepartmentCreateManyAcademicYearInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type ProjectGroupCreateNestedManyWithoutAcademicYearInput = {
    create?: XOR<ProjectGroupCreateWithoutAcademicYearInput, ProjectGroupUncheckedCreateWithoutAcademicYearInput> | ProjectGroupCreateWithoutAcademicYearInput[] | ProjectGroupUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutAcademicYearInput | ProjectGroupCreateOrConnectWithoutAcademicYearInput[]
    createMany?: ProjectGroupCreateManyAcademicYearInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutAcademicYearInput = {
    create?: XOR<StudentCreateWithoutAcademicYearInput, StudentUncheckedCreateWithoutAcademicYearInput> | StudentCreateWithoutAcademicYearInput[] | StudentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicYearInput | StudentCreateOrConnectWithoutAcademicYearInput[]
    createMany?: StudentCreateManyAcademicYearInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: XOR<DepartmentCreateWithoutAcademicYearInput, DepartmentUncheckedCreateWithoutAcademicYearInput> | DepartmentCreateWithoutAcademicYearInput[] | DepartmentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAcademicYearInput | DepartmentCreateOrConnectWithoutAcademicYearInput[]
    createMany?: DepartmentCreateManyAcademicYearInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type ProjectGroupUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: XOR<ProjectGroupCreateWithoutAcademicYearInput, ProjectGroupUncheckedCreateWithoutAcademicYearInput> | ProjectGroupCreateWithoutAcademicYearInput[] | ProjectGroupUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutAcademicYearInput | ProjectGroupCreateOrConnectWithoutAcademicYearInput[]
    createMany?: ProjectGroupCreateManyAcademicYearInputEnvelope
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutAcademicYearInput = {
    create?: XOR<StudentCreateWithoutAcademicYearInput, StudentUncheckedCreateWithoutAcademicYearInput> | StudentCreateWithoutAcademicYearInput[] | StudentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicYearInput | StudentCreateOrConnectWithoutAcademicYearInput[]
    createMany?: StudentCreateManyAcademicYearInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DepartmentUpdateManyWithoutAcademicYearNestedInput = {
    create?: XOR<DepartmentCreateWithoutAcademicYearInput, DepartmentUncheckedCreateWithoutAcademicYearInput> | DepartmentCreateWithoutAcademicYearInput[] | DepartmentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAcademicYearInput | DepartmentCreateOrConnectWithoutAcademicYearInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutAcademicYearInput | DepartmentUpsertWithWhereUniqueWithoutAcademicYearInput[]
    createMany?: DepartmentCreateManyAcademicYearInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutAcademicYearInput | DepartmentUpdateWithWhereUniqueWithoutAcademicYearInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutAcademicYearInput | DepartmentUpdateManyWithWhereWithoutAcademicYearInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type ProjectGroupUpdateManyWithoutAcademicYearNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutAcademicYearInput, ProjectGroupUncheckedCreateWithoutAcademicYearInput> | ProjectGroupCreateWithoutAcademicYearInput[] | ProjectGroupUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutAcademicYearInput | ProjectGroupCreateOrConnectWithoutAcademicYearInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutAcademicYearInput | ProjectGroupUpsertWithWhereUniqueWithoutAcademicYearInput[]
    createMany?: ProjectGroupCreateManyAcademicYearInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutAcademicYearInput | ProjectGroupUpdateWithWhereUniqueWithoutAcademicYearInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutAcademicYearInput | ProjectGroupUpdateManyWithWhereWithoutAcademicYearInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutAcademicYearNestedInput = {
    create?: XOR<StudentCreateWithoutAcademicYearInput, StudentUncheckedCreateWithoutAcademicYearInput> | StudentCreateWithoutAcademicYearInput[] | StudentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicYearInput | StudentCreateOrConnectWithoutAcademicYearInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutAcademicYearInput | StudentUpsertWithWhereUniqueWithoutAcademicYearInput[]
    createMany?: StudentCreateManyAcademicYearInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutAcademicYearInput | StudentUpdateWithWhereUniqueWithoutAcademicYearInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutAcademicYearInput | StudentUpdateManyWithWhereWithoutAcademicYearInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: XOR<DepartmentCreateWithoutAcademicYearInput, DepartmentUncheckedCreateWithoutAcademicYearInput> | DepartmentCreateWithoutAcademicYearInput[] | DepartmentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutAcademicYearInput | DepartmentCreateOrConnectWithoutAcademicYearInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutAcademicYearInput | DepartmentUpsertWithWhereUniqueWithoutAcademicYearInput[]
    createMany?: DepartmentCreateManyAcademicYearInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutAcademicYearInput | DepartmentUpdateWithWhereUniqueWithoutAcademicYearInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutAcademicYearInput | DepartmentUpdateManyWithWhereWithoutAcademicYearInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type ProjectGroupUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutAcademicYearInput, ProjectGroupUncheckedCreateWithoutAcademicYearInput> | ProjectGroupCreateWithoutAcademicYearInput[] | ProjectGroupUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutAcademicYearInput | ProjectGroupCreateOrConnectWithoutAcademicYearInput[]
    upsert?: ProjectGroupUpsertWithWhereUniqueWithoutAcademicYearInput | ProjectGroupUpsertWithWhereUniqueWithoutAcademicYearInput[]
    createMany?: ProjectGroupCreateManyAcademicYearInputEnvelope
    set?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    disconnect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    delete?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    connect?: ProjectGroupWhereUniqueInput | ProjectGroupWhereUniqueInput[]
    update?: ProjectGroupUpdateWithWhereUniqueWithoutAcademicYearInput | ProjectGroupUpdateWithWhereUniqueWithoutAcademicYearInput[]
    updateMany?: ProjectGroupUpdateManyWithWhereWithoutAcademicYearInput | ProjectGroupUpdateManyWithWhereWithoutAcademicYearInput[]
    deleteMany?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutAcademicYearNestedInput = {
    create?: XOR<StudentCreateWithoutAcademicYearInput, StudentUncheckedCreateWithoutAcademicYearInput> | StudentCreateWithoutAcademicYearInput[] | StudentUncheckedCreateWithoutAcademicYearInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademicYearInput | StudentCreateOrConnectWithoutAcademicYearInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutAcademicYearInput | StudentUpsertWithWhereUniqueWithoutAcademicYearInput[]
    createMany?: StudentCreateManyAcademicYearInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutAcademicYearInput | StudentUpdateWithWhereUniqueWithoutAcademicYearInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutAcademicYearInput | StudentUpdateManyWithWhereWithoutAcademicYearInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type AcademicYearCreateNestedOneWithoutDepartmentsInput = {
    create?: XOR<AcademicYearCreateWithoutDepartmentsInput, AcademicYearUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: AcademicYearCreateOrConnectWithoutDepartmentsInput
    connect?: AcademicYearWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type AcademicYearUpdateOneRequiredWithoutDepartmentsNestedInput = {
    create?: XOR<AcademicYearCreateWithoutDepartmentsInput, AcademicYearUncheckedCreateWithoutDepartmentsInput>
    connectOrCreate?: AcademicYearCreateOrConnectWithoutDepartmentsInput
    upsert?: AcademicYearUpsertWithoutDepartmentsInput
    connect?: AcademicYearWhereUniqueInput
    update?: XOR<XOR<AcademicYearUpdateToOneWithWhereWithoutDepartmentsInput, AcademicYearUpdateWithoutDepartmentsInput>, AcademicYearUncheckedUpdateWithoutDepartmentsInput>
  }

  export type StudentUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutDepartmentInput | StudentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutDepartmentInput | StudentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutDepartmentInput | StudentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput> | StudentCreateWithoutDepartmentInput[] | StudentUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutDepartmentInput | StudentCreateOrConnectWithoutDepartmentInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutDepartmentInput | StudentUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: StudentCreateManyDepartmentInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutDepartmentInput | StudentUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutDepartmentInput | StudentUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutStudentsInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    connect?: DepartmentWhereUniqueInput
  }

  export type AcademicYearCreateNestedOneWithoutStudentsInput = {
    create?: XOR<AcademicYearCreateWithoutStudentsInput, AcademicYearUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: AcademicYearCreateOrConnectWithoutStudentsInput
    connect?: AcademicYearWhereUniqueInput
  }

  export type ProjectGroupMemberCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutStudentInput, ProjectGroupMemberUncheckedCreateWithoutStudentInput> | ProjectGroupMemberCreateWithoutStudentInput[] | ProjectGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutStudentInput | ProjectGroupMemberCreateOrConnectWithoutStudentInput[]
    createMany?: ProjectGroupMemberCreateManyStudentInputEnvelope
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
  }

  export type ProjectMeetingAttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutStudentInput, ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput> | ProjectMeetingAttendanceCreateWithoutStudentInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput | ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: ProjectMeetingAttendanceCreateManyStudentInputEnvelope
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
  }

  export type ProjectDocumentCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProjectDocumentCreateWithoutStudentInput, ProjectDocumentUncheckedCreateWithoutStudentInput> | ProjectDocumentCreateWithoutStudentInput[] | ProjectDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStudentInput | ProjectDocumentCreateOrConnectWithoutStudentInput[]
    createMany?: ProjectDocumentCreateManyStudentInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type ProjectGroupMemberUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutStudentInput, ProjectGroupMemberUncheckedCreateWithoutStudentInput> | ProjectGroupMemberCreateWithoutStudentInput[] | ProjectGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutStudentInput | ProjectGroupMemberCreateOrConnectWithoutStudentInput[]
    createMany?: ProjectGroupMemberCreateManyStudentInputEnvelope
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
  }

  export type ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutStudentInput, ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput> | ProjectMeetingAttendanceCreateWithoutStudentInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput | ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: ProjectMeetingAttendanceCreateManyStudentInputEnvelope
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
  }

  export type ProjectDocumentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ProjectDocumentCreateWithoutStudentInput, ProjectDocumentUncheckedCreateWithoutStudentInput> | ProjectDocumentCreateWithoutStudentInput[] | ProjectDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStudentInput | ProjectDocumentCreateOrConnectWithoutStudentInput[]
    createMany?: ProjectDocumentCreateManyStudentInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type DepartmentUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutStudentsInput
    upsert?: DepartmentUpsertWithoutStudentsInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutStudentsInput, DepartmentUpdateWithoutStudentsInput>, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type AcademicYearUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<AcademicYearCreateWithoutStudentsInput, AcademicYearUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: AcademicYearCreateOrConnectWithoutStudentsInput
    upsert?: AcademicYearUpsertWithoutStudentsInput
    disconnect?: AcademicYearWhereInput | boolean
    delete?: AcademicYearWhereInput | boolean
    connect?: AcademicYearWhereUniqueInput
    update?: XOR<XOR<AcademicYearUpdateToOneWithWhereWithoutStudentsInput, AcademicYearUpdateWithoutStudentsInput>, AcademicYearUncheckedUpdateWithoutStudentsInput>
  }

  export type ProjectGroupMemberUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutStudentInput, ProjectGroupMemberUncheckedCreateWithoutStudentInput> | ProjectGroupMemberCreateWithoutStudentInput[] | ProjectGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutStudentInput | ProjectGroupMemberCreateOrConnectWithoutStudentInput[]
    upsert?: ProjectGroupMemberUpsertWithWhereUniqueWithoutStudentInput | ProjectGroupMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProjectGroupMemberCreateManyStudentInputEnvelope
    set?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    disconnect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    delete?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    update?: ProjectGroupMemberUpdateWithWhereUniqueWithoutStudentInput | ProjectGroupMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProjectGroupMemberUpdateManyWithWhereWithoutStudentInput | ProjectGroupMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProjectGroupMemberScalarWhereInput | ProjectGroupMemberScalarWhereInput[]
  }

  export type ProjectMeetingAttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutStudentInput, ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput> | ProjectMeetingAttendanceCreateWithoutStudentInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput | ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutStudentInput | ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProjectMeetingAttendanceCreateManyStudentInputEnvelope
    set?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    disconnect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    delete?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    update?: ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutStudentInput | ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProjectMeetingAttendanceUpdateManyWithWhereWithoutStudentInput | ProjectMeetingAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProjectMeetingAttendanceScalarWhereInput | ProjectMeetingAttendanceScalarWhereInput[]
  }

  export type ProjectDocumentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutStudentInput, ProjectDocumentUncheckedCreateWithoutStudentInput> | ProjectDocumentCreateWithoutStudentInput[] | ProjectDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStudentInput | ProjectDocumentCreateOrConnectWithoutStudentInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutStudentInput | ProjectDocumentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProjectDocumentCreateManyStudentInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutStudentInput | ProjectDocumentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutStudentInput | ProjectDocumentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectGroupMemberUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutStudentInput, ProjectGroupMemberUncheckedCreateWithoutStudentInput> | ProjectGroupMemberCreateWithoutStudentInput[] | ProjectGroupMemberUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutStudentInput | ProjectGroupMemberCreateOrConnectWithoutStudentInput[]
    upsert?: ProjectGroupMemberUpsertWithWhereUniqueWithoutStudentInput | ProjectGroupMemberUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProjectGroupMemberCreateManyStudentInputEnvelope
    set?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    disconnect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    delete?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    update?: ProjectGroupMemberUpdateWithWhereUniqueWithoutStudentInput | ProjectGroupMemberUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProjectGroupMemberUpdateManyWithWhereWithoutStudentInput | ProjectGroupMemberUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProjectGroupMemberScalarWhereInput | ProjectGroupMemberScalarWhereInput[]
  }

  export type ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutStudentInput, ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput> | ProjectMeetingAttendanceCreateWithoutStudentInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput | ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutStudentInput | ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProjectMeetingAttendanceCreateManyStudentInputEnvelope
    set?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    disconnect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    delete?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    update?: ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutStudentInput | ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProjectMeetingAttendanceUpdateManyWithWhereWithoutStudentInput | ProjectMeetingAttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProjectMeetingAttendanceScalarWhereInput | ProjectMeetingAttendanceScalarWhereInput[]
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutStudentInput, ProjectDocumentUncheckedCreateWithoutStudentInput> | ProjectDocumentCreateWithoutStudentInput[] | ProjectDocumentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutStudentInput | ProjectDocumentCreateOrConnectWithoutStudentInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutStudentInput | ProjectDocumentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ProjectDocumentCreateManyStudentInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutStudentInput | ProjectDocumentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutStudentInput | ProjectDocumentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectTypeCreateNestedOneWithoutProjectGroupsInput = {
    create?: XOR<ProjectTypeCreateWithoutProjectGroupsInput, ProjectTypeUncheckedCreateWithoutProjectGroupsInput>
    connectOrCreate?: ProjectTypeCreateOrConnectWithoutProjectGroupsInput
    connect?: ProjectTypeWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutGuidedGroupsInput = {
    create?: XOR<StaffCreateWithoutGuidedGroupsInput, StaffUncheckedCreateWithoutGuidedGroupsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutGuidedGroupsInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutConvenedGroupsInput = {
    create?: XOR<StaffCreateWithoutConvenedGroupsInput, StaffUncheckedCreateWithoutConvenedGroupsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutConvenedGroupsInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutExpertGroupsInput = {
    create?: XOR<StaffCreateWithoutExpertGroupsInput, StaffUncheckedCreateWithoutExpertGroupsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutExpertGroupsInput
    connect?: StaffWhereUniqueInput
  }

  export type AcademicYearCreateNestedOneWithoutProjectGroupsInput = {
    create?: XOR<AcademicYearCreateWithoutProjectGroupsInput, AcademicYearUncheckedCreateWithoutProjectGroupsInput>
    connectOrCreate?: AcademicYearCreateOrConnectWithoutProjectGroupsInput
    connect?: AcademicYearWhereUniqueInput
  }

  export type ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutProjectGroupInput, ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput> | ProjectGroupMemberCreateWithoutProjectGroupInput[] | ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput | ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput[]
    createMany?: ProjectGroupMemberCreateManyProjectGroupInputEnvelope
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
  }

  export type ProjectMeetingCreateNestedManyWithoutProjectGroupInput = {
    create?: XOR<ProjectMeetingCreateWithoutProjectGroupInput, ProjectMeetingUncheckedCreateWithoutProjectGroupInput> | ProjectMeetingCreateWithoutProjectGroupInput[] | ProjectMeetingUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutProjectGroupInput | ProjectMeetingCreateOrConnectWithoutProjectGroupInput[]
    createMany?: ProjectMeetingCreateManyProjectGroupInputEnvelope
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
  }

  export type ProjectDocumentCreateNestedManyWithoutProjectGroupInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectGroupInput, ProjectDocumentUncheckedCreateWithoutProjectGroupInput> | ProjectDocumentCreateWithoutProjectGroupInput[] | ProjectDocumentUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectGroupInput | ProjectDocumentCreateOrConnectWithoutProjectGroupInput[]
    createMany?: ProjectDocumentCreateManyProjectGroupInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutProjectGroupInput, ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput> | ProjectGroupMemberCreateWithoutProjectGroupInput[] | ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput | ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput[]
    createMany?: ProjectGroupMemberCreateManyProjectGroupInputEnvelope
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
  }

  export type ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput = {
    create?: XOR<ProjectMeetingCreateWithoutProjectGroupInput, ProjectMeetingUncheckedCreateWithoutProjectGroupInput> | ProjectMeetingCreateWithoutProjectGroupInput[] | ProjectMeetingUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutProjectGroupInput | ProjectMeetingCreateOrConnectWithoutProjectGroupInput[]
    createMany?: ProjectMeetingCreateManyProjectGroupInputEnvelope
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
  }

  export type ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectGroupInput, ProjectDocumentUncheckedCreateWithoutProjectGroupInput> | ProjectDocumentCreateWithoutProjectGroupInput[] | ProjectDocumentUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectGroupInput | ProjectDocumentCreateOrConnectWithoutProjectGroupInput[]
    createMany?: ProjectDocumentCreateManyProjectGroupInputEnvelope
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumProjectGroupStatusFieldUpdateOperationsInput = {
    set?: $Enums.ProjectGroupStatus
  }

  export type ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput = {
    create?: XOR<ProjectTypeCreateWithoutProjectGroupsInput, ProjectTypeUncheckedCreateWithoutProjectGroupsInput>
    connectOrCreate?: ProjectTypeCreateOrConnectWithoutProjectGroupsInput
    upsert?: ProjectTypeUpsertWithoutProjectGroupsInput
    connect?: ProjectTypeWhereUniqueInput
    update?: XOR<XOR<ProjectTypeUpdateToOneWithWhereWithoutProjectGroupsInput, ProjectTypeUpdateWithoutProjectGroupsInput>, ProjectTypeUncheckedUpdateWithoutProjectGroupsInput>
  }

  export type StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput = {
    create?: XOR<StaffCreateWithoutGuidedGroupsInput, StaffUncheckedCreateWithoutGuidedGroupsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutGuidedGroupsInput
    upsert?: StaffUpsertWithoutGuidedGroupsInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutGuidedGroupsInput, StaffUpdateWithoutGuidedGroupsInput>, StaffUncheckedUpdateWithoutGuidedGroupsInput>
  }

  export type StaffUpdateOneWithoutConvenedGroupsNestedInput = {
    create?: XOR<StaffCreateWithoutConvenedGroupsInput, StaffUncheckedCreateWithoutConvenedGroupsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutConvenedGroupsInput
    upsert?: StaffUpsertWithoutConvenedGroupsInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutConvenedGroupsInput, StaffUpdateWithoutConvenedGroupsInput>, StaffUncheckedUpdateWithoutConvenedGroupsInput>
  }

  export type StaffUpdateOneWithoutExpertGroupsNestedInput = {
    create?: XOR<StaffCreateWithoutExpertGroupsInput, StaffUncheckedCreateWithoutExpertGroupsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutExpertGroupsInput
    upsert?: StaffUpsertWithoutExpertGroupsInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutExpertGroupsInput, StaffUpdateWithoutExpertGroupsInput>, StaffUncheckedUpdateWithoutExpertGroupsInput>
  }

  export type AcademicYearUpdateOneWithoutProjectGroupsNestedInput = {
    create?: XOR<AcademicYearCreateWithoutProjectGroupsInput, AcademicYearUncheckedCreateWithoutProjectGroupsInput>
    connectOrCreate?: AcademicYearCreateOrConnectWithoutProjectGroupsInput
    upsert?: AcademicYearUpsertWithoutProjectGroupsInput
    disconnect?: AcademicYearWhereInput | boolean
    delete?: AcademicYearWhereInput | boolean
    connect?: AcademicYearWhereUniqueInput
    update?: XOR<XOR<AcademicYearUpdateToOneWithWhereWithoutProjectGroupsInput, AcademicYearUpdateWithoutProjectGroupsInput>, AcademicYearUncheckedUpdateWithoutProjectGroupsInput>
  }

  export type ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutProjectGroupInput, ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput> | ProjectGroupMemberCreateWithoutProjectGroupInput[] | ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput | ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput[]
    upsert?: ProjectGroupMemberUpsertWithWhereUniqueWithoutProjectGroupInput | ProjectGroupMemberUpsertWithWhereUniqueWithoutProjectGroupInput[]
    createMany?: ProjectGroupMemberCreateManyProjectGroupInputEnvelope
    set?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    disconnect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    delete?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    update?: ProjectGroupMemberUpdateWithWhereUniqueWithoutProjectGroupInput | ProjectGroupMemberUpdateWithWhereUniqueWithoutProjectGroupInput[]
    updateMany?: ProjectGroupMemberUpdateManyWithWhereWithoutProjectGroupInput | ProjectGroupMemberUpdateManyWithWhereWithoutProjectGroupInput[]
    deleteMany?: ProjectGroupMemberScalarWhereInput | ProjectGroupMemberScalarWhereInput[]
  }

  export type ProjectMeetingUpdateManyWithoutProjectGroupNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutProjectGroupInput, ProjectMeetingUncheckedCreateWithoutProjectGroupInput> | ProjectMeetingCreateWithoutProjectGroupInput[] | ProjectMeetingUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutProjectGroupInput | ProjectMeetingCreateOrConnectWithoutProjectGroupInput[]
    upsert?: ProjectMeetingUpsertWithWhereUniqueWithoutProjectGroupInput | ProjectMeetingUpsertWithWhereUniqueWithoutProjectGroupInput[]
    createMany?: ProjectMeetingCreateManyProjectGroupInputEnvelope
    set?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    disconnect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    delete?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    update?: ProjectMeetingUpdateWithWhereUniqueWithoutProjectGroupInput | ProjectMeetingUpdateWithWhereUniqueWithoutProjectGroupInput[]
    updateMany?: ProjectMeetingUpdateManyWithWhereWithoutProjectGroupInput | ProjectMeetingUpdateManyWithWhereWithoutProjectGroupInput[]
    deleteMany?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
  }

  export type ProjectDocumentUpdateManyWithoutProjectGroupNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectGroupInput, ProjectDocumentUncheckedCreateWithoutProjectGroupInput> | ProjectDocumentCreateWithoutProjectGroupInput[] | ProjectDocumentUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectGroupInput | ProjectDocumentCreateOrConnectWithoutProjectGroupInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutProjectGroupInput | ProjectDocumentUpsertWithWhereUniqueWithoutProjectGroupInput[]
    createMany?: ProjectDocumentCreateManyProjectGroupInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutProjectGroupInput | ProjectDocumentUpdateWithWhereUniqueWithoutProjectGroupInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutProjectGroupInput | ProjectDocumentUpdateManyWithWhereWithoutProjectGroupInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput = {
    create?: XOR<ProjectGroupMemberCreateWithoutProjectGroupInput, ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput> | ProjectGroupMemberCreateWithoutProjectGroupInput[] | ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput | ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput[]
    upsert?: ProjectGroupMemberUpsertWithWhereUniqueWithoutProjectGroupInput | ProjectGroupMemberUpsertWithWhereUniqueWithoutProjectGroupInput[]
    createMany?: ProjectGroupMemberCreateManyProjectGroupInputEnvelope
    set?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    disconnect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    delete?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    connect?: ProjectGroupMemberWhereUniqueInput | ProjectGroupMemberWhereUniqueInput[]
    update?: ProjectGroupMemberUpdateWithWhereUniqueWithoutProjectGroupInput | ProjectGroupMemberUpdateWithWhereUniqueWithoutProjectGroupInput[]
    updateMany?: ProjectGroupMemberUpdateManyWithWhereWithoutProjectGroupInput | ProjectGroupMemberUpdateManyWithWhereWithoutProjectGroupInput[]
    deleteMany?: ProjectGroupMemberScalarWhereInput | ProjectGroupMemberScalarWhereInput[]
  }

  export type ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutProjectGroupInput, ProjectMeetingUncheckedCreateWithoutProjectGroupInput> | ProjectMeetingCreateWithoutProjectGroupInput[] | ProjectMeetingUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutProjectGroupInput | ProjectMeetingCreateOrConnectWithoutProjectGroupInput[]
    upsert?: ProjectMeetingUpsertWithWhereUniqueWithoutProjectGroupInput | ProjectMeetingUpsertWithWhereUniqueWithoutProjectGroupInput[]
    createMany?: ProjectMeetingCreateManyProjectGroupInputEnvelope
    set?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    disconnect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    delete?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    connect?: ProjectMeetingWhereUniqueInput | ProjectMeetingWhereUniqueInput[]
    update?: ProjectMeetingUpdateWithWhereUniqueWithoutProjectGroupInput | ProjectMeetingUpdateWithWhereUniqueWithoutProjectGroupInput[]
    updateMany?: ProjectMeetingUpdateManyWithWhereWithoutProjectGroupInput | ProjectMeetingUpdateManyWithWhereWithoutProjectGroupInput[]
    deleteMany?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput = {
    create?: XOR<ProjectDocumentCreateWithoutProjectGroupInput, ProjectDocumentUncheckedCreateWithoutProjectGroupInput> | ProjectDocumentCreateWithoutProjectGroupInput[] | ProjectDocumentUncheckedCreateWithoutProjectGroupInput[]
    connectOrCreate?: ProjectDocumentCreateOrConnectWithoutProjectGroupInput | ProjectDocumentCreateOrConnectWithoutProjectGroupInput[]
    upsert?: ProjectDocumentUpsertWithWhereUniqueWithoutProjectGroupInput | ProjectDocumentUpsertWithWhereUniqueWithoutProjectGroupInput[]
    createMany?: ProjectDocumentCreateManyProjectGroupInputEnvelope
    set?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    disconnect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    delete?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    connect?: ProjectDocumentWhereUniqueInput | ProjectDocumentWhereUniqueInput[]
    update?: ProjectDocumentUpdateWithWhereUniqueWithoutProjectGroupInput | ProjectDocumentUpdateWithWhereUniqueWithoutProjectGroupInput[]
    updateMany?: ProjectDocumentUpdateManyWithWhereWithoutProjectGroupInput | ProjectDocumentUpdateManyWithWhereWithoutProjectGroupInput[]
    deleteMany?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
  }

  export type ProjectGroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectGroupCreateWithoutMembersInput, ProjectGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutMembersInput
    connect?: ProjectGroupWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutGroupMembersInput = {
    create?: XOR<StudentCreateWithoutGroupMembersInput, StudentUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupMembersInput
    connect?: StudentWhereUniqueInput
  }

  export type ProjectGroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutMembersInput, ProjectGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutMembersInput
    upsert?: ProjectGroupUpsertWithoutMembersInput
    connect?: ProjectGroupWhereUniqueInput
    update?: XOR<XOR<ProjectGroupUpdateToOneWithWhereWithoutMembersInput, ProjectGroupUpdateWithoutMembersInput>, ProjectGroupUncheckedUpdateWithoutMembersInput>
  }

  export type StudentUpdateOneRequiredWithoutGroupMembersNestedInput = {
    create?: XOR<StudentCreateWithoutGroupMembersInput, StudentUncheckedCreateWithoutGroupMembersInput>
    connectOrCreate?: StudentCreateOrConnectWithoutGroupMembersInput
    upsert?: StudentUpsertWithoutGroupMembersInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutGroupMembersInput, StudentUpdateWithoutGroupMembersInput>, StudentUncheckedUpdateWithoutGroupMembersInput>
  }

  export type ProjectGroupCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<ProjectGroupCreateWithoutMeetingsInput, ProjectGroupUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutMeetingsInput
    connect?: ProjectGroupWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutGuidedMeetingsInput = {
    create?: XOR<StaffCreateWithoutGuidedMeetingsInput, StaffUncheckedCreateWithoutGuidedMeetingsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutGuidedMeetingsInput
    connect?: StaffWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutMeetingStatusByInput = {
    create?: XOR<StaffCreateWithoutMeetingStatusByInput, StaffUncheckedCreateWithoutMeetingStatusByInput>
    connectOrCreate?: StaffCreateOrConnectWithoutMeetingStatusByInput
    connect?: StaffWhereUniqueInput
  }

  export type ProjectMeetingAttendanceCreateNestedManyWithoutMeetingInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput> | ProjectMeetingAttendanceCreateWithoutMeetingInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput | ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput[]
    createMany?: ProjectMeetingAttendanceCreateManyMeetingInputEnvelope
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
  }

  export type ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput> | ProjectMeetingAttendanceCreateWithoutMeetingInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput | ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput[]
    createMany?: ProjectMeetingAttendanceCreateManyMeetingInputEnvelope
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
  }

  export type EnumMeetingStatusFieldUpdateOperationsInput = {
    set?: $Enums.MeetingStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProjectGroupUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutMeetingsInput, ProjectGroupUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutMeetingsInput
    upsert?: ProjectGroupUpsertWithoutMeetingsInput
    connect?: ProjectGroupWhereUniqueInput
    update?: XOR<XOR<ProjectGroupUpdateToOneWithWhereWithoutMeetingsInput, ProjectGroupUpdateWithoutMeetingsInput>, ProjectGroupUncheckedUpdateWithoutMeetingsInput>
  }

  export type StaffUpdateOneRequiredWithoutGuidedMeetingsNestedInput = {
    create?: XOR<StaffCreateWithoutGuidedMeetingsInput, StaffUncheckedCreateWithoutGuidedMeetingsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutGuidedMeetingsInput
    upsert?: StaffUpsertWithoutGuidedMeetingsInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutGuidedMeetingsInput, StaffUpdateWithoutGuidedMeetingsInput>, StaffUncheckedUpdateWithoutGuidedMeetingsInput>
  }

  export type StaffUpdateOneWithoutMeetingStatusByNestedInput = {
    create?: XOR<StaffCreateWithoutMeetingStatusByInput, StaffUncheckedCreateWithoutMeetingStatusByInput>
    connectOrCreate?: StaffCreateOrConnectWithoutMeetingStatusByInput
    upsert?: StaffUpsertWithoutMeetingStatusByInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutMeetingStatusByInput, StaffUpdateWithoutMeetingStatusByInput>, StaffUncheckedUpdateWithoutMeetingStatusByInput>
  }

  export type ProjectMeetingAttendanceUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput> | ProjectMeetingAttendanceCreateWithoutMeetingInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput | ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput[]
    upsert?: ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutMeetingInput | ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: ProjectMeetingAttendanceCreateManyMeetingInputEnvelope
    set?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    disconnect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    delete?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    update?: ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutMeetingInput | ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: ProjectMeetingAttendanceUpdateManyWithWhereWithoutMeetingInput | ProjectMeetingAttendanceUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: ProjectMeetingAttendanceScalarWhereInput | ProjectMeetingAttendanceScalarWhereInput[]
  }

  export type ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<ProjectMeetingAttendanceCreateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput> | ProjectMeetingAttendanceCreateWithoutMeetingInput[] | ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput | ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput[]
    upsert?: ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutMeetingInput | ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: ProjectMeetingAttendanceCreateManyMeetingInputEnvelope
    set?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    disconnect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    delete?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    connect?: ProjectMeetingAttendanceWhereUniqueInput | ProjectMeetingAttendanceWhereUniqueInput[]
    update?: ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutMeetingInput | ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: ProjectMeetingAttendanceUpdateManyWithWhereWithoutMeetingInput | ProjectMeetingAttendanceUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: ProjectMeetingAttendanceScalarWhereInput | ProjectMeetingAttendanceScalarWhereInput[]
  }

  export type ProjectMeetingCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ProjectMeetingCreateWithoutAttendancesInput, ProjectMeetingUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutAttendancesInput
    connect?: ProjectMeetingWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
  }

  export type ProjectMeetingUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ProjectMeetingCreateWithoutAttendancesInput, ProjectMeetingUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ProjectMeetingCreateOrConnectWithoutAttendancesInput
    upsert?: ProjectMeetingUpsertWithoutAttendancesInput
    connect?: ProjectMeetingWhereUniqueInput
    update?: XOR<XOR<ProjectMeetingUpdateToOneWithWhereWithoutAttendancesInput, ProjectMeetingUpdateWithoutAttendancesInput>, ProjectMeetingUncheckedUpdateWithoutAttendancesInput>
  }

  export type StudentUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendancesInput
    upsert?: StudentUpsertWithoutAttendancesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendancesInput, StudentUpdateWithoutAttendancesInput>, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type ProjectGroupCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ProjectGroupCreateWithoutDocumentsInput, ProjectGroupUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutDocumentsInput
    connect?: ProjectGroupWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutProjectDocumentsInput = {
    create?: XOR<StaffCreateWithoutProjectDocumentsInput, StaffUncheckedCreateWithoutProjectDocumentsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutProjectDocumentsInput
    connect?: StaffWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDocumentsInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type ProjectGroupUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<ProjectGroupCreateWithoutDocumentsInput, ProjectGroupUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ProjectGroupCreateOrConnectWithoutDocumentsInput
    upsert?: ProjectGroupUpsertWithoutDocumentsInput
    connect?: ProjectGroupWhereUniqueInput
    update?: XOR<XOR<ProjectGroupUpdateToOneWithWhereWithoutDocumentsInput, ProjectGroupUpdateWithoutDocumentsInput>, ProjectGroupUncheckedUpdateWithoutDocumentsInput>
  }

  export type StaffUpdateOneWithoutProjectDocumentsNestedInput = {
    create?: XOR<StaffCreateWithoutProjectDocumentsInput, StaffUncheckedCreateWithoutProjectDocumentsInput>
    connectOrCreate?: StaffCreateOrConnectWithoutProjectDocumentsInput
    upsert?: StaffUpsertWithoutProjectDocumentsInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutProjectDocumentsInput, StaffUpdateWithoutProjectDocumentsInput>, StaffUncheckedUpdateWithoutProjectDocumentsInput>
  }

  export type StudentUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutDocumentsInput
    upsert?: StudentUpsertWithoutDocumentsInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutDocumentsInput, StudentUpdateWithoutDocumentsInput>, StudentUncheckedUpdateWithoutDocumentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStaffRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleFilter<$PrismaModel> | $Enums.StaffRole
  }

  export type NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StaffRole | EnumStaffRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StaffRole[]
    notIn?: $Enums.StaffRole[]
    not?: NestedEnumStaffRoleWithAggregatesFilter<$PrismaModel> | $Enums.StaffRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStaffRoleFilter<$PrismaModel>
    _max?: NestedEnumStaffRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumProjectGroupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectGroupStatus | EnumProjectGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectGroupStatus[]
    notIn?: $Enums.ProjectGroupStatus[]
    not?: NestedEnumProjectGroupStatusFilter<$PrismaModel> | $Enums.ProjectGroupStatus
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumProjectGroupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProjectGroupStatus | EnumProjectGroupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ProjectGroupStatus[]
    notIn?: $Enums.ProjectGroupStatus[]
    not?: NestedEnumProjectGroupStatusWithAggregatesFilter<$PrismaModel> | $Enums.ProjectGroupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProjectGroupStatusFilter<$PrismaModel>
    _max?: NestedEnumProjectGroupStatusFilter<$PrismaModel>
  }

  export type NestedEnumMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusFilter<$PrismaModel> | $Enums.MeetingStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[]
    notIn?: $Enums.MeetingStatus[]
    not?: NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumMeetingStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type ProjectGroupCreateWithoutProjectTypeInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutProjectTypeInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutProjectTypeInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutProjectTypeInput, ProjectGroupUncheckedCreateWithoutProjectTypeInput>
  }

  export type ProjectGroupCreateManyProjectTypeInputEnvelope = {
    data: ProjectGroupCreateManyProjectTypeInput | ProjectGroupCreateManyProjectTypeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectGroupUpsertWithWhereUniqueWithoutProjectTypeInput = {
    where: ProjectGroupWhereUniqueInput
    update: XOR<ProjectGroupUpdateWithoutProjectTypeInput, ProjectGroupUncheckedUpdateWithoutProjectTypeInput>
    create: XOR<ProjectGroupCreateWithoutProjectTypeInput, ProjectGroupUncheckedCreateWithoutProjectTypeInput>
  }

  export type ProjectGroupUpdateWithWhereUniqueWithoutProjectTypeInput = {
    where: ProjectGroupWhereUniqueInput
    data: XOR<ProjectGroupUpdateWithoutProjectTypeInput, ProjectGroupUncheckedUpdateWithoutProjectTypeInput>
  }

  export type ProjectGroupUpdateManyWithWhereWithoutProjectTypeInput = {
    where: ProjectGroupScalarWhereInput
    data: XOR<ProjectGroupUpdateManyMutationInput, ProjectGroupUncheckedUpdateManyWithoutProjectTypeInput>
  }

  export type ProjectGroupScalarWhereInput = {
    AND?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
    OR?: ProjectGroupScalarWhereInput[]
    NOT?: ProjectGroupScalarWhereInput | ProjectGroupScalarWhereInput[]
    ProjectGroupID?: IntFilter<"ProjectGroup"> | number
    ProjectGroupName?: StringFilter<"ProjectGroup"> | string
    ProjectTypeID?: IntFilter<"ProjectGroup"> | number
    GuideStaffID?: IntFilter<"ProjectGroup"> | number
    ProjectTitle?: StringNullableFilter<"ProjectGroup"> | string | null
    ProjectArea?: StringNullableFilter<"ProjectGroup"> | string | null
    ProjectDescription?: StringNullableFilter<"ProjectGroup"> | string | null
    AverageCPI?: DecimalNullableFilter<"ProjectGroup"> | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: IntNullableFilter<"ProjectGroup"> | number | null
    ExpertStaffID?: IntNullableFilter<"ProjectGroup"> | number | null
    Status?: EnumProjectGroupStatusFilter<"ProjectGroup"> | $Enums.ProjectGroupStatus
    AcademicYearID?: IntNullableFilter<"ProjectGroup"> | number | null
    Description?: StringNullableFilter<"ProjectGroup"> | string | null
    Created?: DateTimeFilter<"ProjectGroup"> | Date | string
    Modified?: DateTimeFilter<"ProjectGroup"> | Date | string
  }

  export type ProjectGroupCreateWithoutGuideInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutGuideInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutGuideInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutGuideInput, ProjectGroupUncheckedCreateWithoutGuideInput>
  }

  export type ProjectGroupCreateManyGuideInputEnvelope = {
    data: ProjectGroupCreateManyGuideInput | ProjectGroupCreateManyGuideInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMeetingCreateWithoutGuideInput = {
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutMeetingsInput
    statusBy?: StaffCreateNestedOneWithoutMeetingStatusByInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingUncheckedCreateWithoutGuideInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingCreateOrConnectWithoutGuideInput = {
    where: ProjectMeetingWhereUniqueInput
    create: XOR<ProjectMeetingCreateWithoutGuideInput, ProjectMeetingUncheckedCreateWithoutGuideInput>
  }

  export type ProjectMeetingCreateManyGuideInputEnvelope = {
    data: ProjectMeetingCreateManyGuideInput | ProjectMeetingCreateManyGuideInput[]
    skipDuplicates?: boolean
  }

  export type ProjectGroupCreateWithoutConvenerInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutConvenerInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutConvenerInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutConvenerInput, ProjectGroupUncheckedCreateWithoutConvenerInput>
  }

  export type ProjectGroupCreateManyConvenerInputEnvelope = {
    data: ProjectGroupCreateManyConvenerInput | ProjectGroupCreateManyConvenerInput[]
    skipDuplicates?: boolean
  }

  export type ProjectGroupCreateWithoutExpertInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutExpertInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutExpertInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutExpertInput, ProjectGroupUncheckedCreateWithoutExpertInput>
  }

  export type ProjectGroupCreateManyExpertInputEnvelope = {
    data: ProjectGroupCreateManyExpertInput | ProjectGroupCreateManyExpertInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDocumentCreateWithoutStaffInput = {
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutDocumentsInput
    student?: StudentCreateNestedOneWithoutDocumentsInput
  }

  export type ProjectDocumentUncheckedCreateWithoutStaffInput = {
    ProjectDocumentID?: number
    ProjectGroupID: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStudentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentCreateOrConnectWithoutStaffInput = {
    where: ProjectDocumentWhereUniqueInput
    create: XOR<ProjectDocumentCreateWithoutStaffInput, ProjectDocumentUncheckedCreateWithoutStaffInput>
  }

  export type ProjectDocumentCreateManyStaffInputEnvelope = {
    data: ProjectDocumentCreateManyStaffInput | ProjectDocumentCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMeetingCreateWithoutStatusByInput = {
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutMeetingsInput
    guide: StaffCreateNestedOneWithoutGuidedMeetingsInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingUncheckedCreateWithoutStatusByInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingCreateOrConnectWithoutStatusByInput = {
    where: ProjectMeetingWhereUniqueInput
    create: XOR<ProjectMeetingCreateWithoutStatusByInput, ProjectMeetingUncheckedCreateWithoutStatusByInput>
  }

  export type ProjectMeetingCreateManyStatusByInputEnvelope = {
    data: ProjectMeetingCreateManyStatusByInput | ProjectMeetingCreateManyStatusByInput[]
    skipDuplicates?: boolean
  }

  export type ProjectGroupUpsertWithWhereUniqueWithoutGuideInput = {
    where: ProjectGroupWhereUniqueInput
    update: XOR<ProjectGroupUpdateWithoutGuideInput, ProjectGroupUncheckedUpdateWithoutGuideInput>
    create: XOR<ProjectGroupCreateWithoutGuideInput, ProjectGroupUncheckedCreateWithoutGuideInput>
  }

  export type ProjectGroupUpdateWithWhereUniqueWithoutGuideInput = {
    where: ProjectGroupWhereUniqueInput
    data: XOR<ProjectGroupUpdateWithoutGuideInput, ProjectGroupUncheckedUpdateWithoutGuideInput>
  }

  export type ProjectGroupUpdateManyWithWhereWithoutGuideInput = {
    where: ProjectGroupScalarWhereInput
    data: XOR<ProjectGroupUpdateManyMutationInput, ProjectGroupUncheckedUpdateManyWithoutGuideInput>
  }

  export type ProjectMeetingUpsertWithWhereUniqueWithoutGuideInput = {
    where: ProjectMeetingWhereUniqueInput
    update: XOR<ProjectMeetingUpdateWithoutGuideInput, ProjectMeetingUncheckedUpdateWithoutGuideInput>
    create: XOR<ProjectMeetingCreateWithoutGuideInput, ProjectMeetingUncheckedCreateWithoutGuideInput>
  }

  export type ProjectMeetingUpdateWithWhereUniqueWithoutGuideInput = {
    where: ProjectMeetingWhereUniqueInput
    data: XOR<ProjectMeetingUpdateWithoutGuideInput, ProjectMeetingUncheckedUpdateWithoutGuideInput>
  }

  export type ProjectMeetingUpdateManyWithWhereWithoutGuideInput = {
    where: ProjectMeetingScalarWhereInput
    data: XOR<ProjectMeetingUpdateManyMutationInput, ProjectMeetingUncheckedUpdateManyWithoutGuideInput>
  }

  export type ProjectMeetingScalarWhereInput = {
    AND?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
    OR?: ProjectMeetingScalarWhereInput[]
    NOT?: ProjectMeetingScalarWhereInput | ProjectMeetingScalarWhereInput[]
    ProjectMeetingID?: IntFilter<"ProjectMeeting"> | number
    ProjectGroupID?: IntFilter<"ProjectMeeting"> | number
    GuideStaffID?: IntFilter<"ProjectMeeting"> | number
    MeetingDateTime?: DateTimeFilter<"ProjectMeeting"> | Date | string
    MeetingPurpose?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingLocation?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingNotes?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingStatus?: EnumMeetingStatusFilter<"ProjectMeeting"> | $Enums.MeetingStatus
    MeetingStatusDescription?: StringNullableFilter<"ProjectMeeting"> | string | null
    MeetingStatusDatetime?: DateTimeNullableFilter<"ProjectMeeting"> | Date | string | null
    Description?: StringNullableFilter<"ProjectMeeting"> | string | null
    Created?: DateTimeFilter<"ProjectMeeting"> | Date | string
    Modified?: DateTimeFilter<"ProjectMeeting"> | Date | string
    StatusUpdatedByStaffID?: IntNullableFilter<"ProjectMeeting"> | number | null
  }

  export type ProjectGroupUpsertWithWhereUniqueWithoutConvenerInput = {
    where: ProjectGroupWhereUniqueInput
    update: XOR<ProjectGroupUpdateWithoutConvenerInput, ProjectGroupUncheckedUpdateWithoutConvenerInput>
    create: XOR<ProjectGroupCreateWithoutConvenerInput, ProjectGroupUncheckedCreateWithoutConvenerInput>
  }

  export type ProjectGroupUpdateWithWhereUniqueWithoutConvenerInput = {
    where: ProjectGroupWhereUniqueInput
    data: XOR<ProjectGroupUpdateWithoutConvenerInput, ProjectGroupUncheckedUpdateWithoutConvenerInput>
  }

  export type ProjectGroupUpdateManyWithWhereWithoutConvenerInput = {
    where: ProjectGroupScalarWhereInput
    data: XOR<ProjectGroupUpdateManyMutationInput, ProjectGroupUncheckedUpdateManyWithoutConvenerInput>
  }

  export type ProjectGroupUpsertWithWhereUniqueWithoutExpertInput = {
    where: ProjectGroupWhereUniqueInput
    update: XOR<ProjectGroupUpdateWithoutExpertInput, ProjectGroupUncheckedUpdateWithoutExpertInput>
    create: XOR<ProjectGroupCreateWithoutExpertInput, ProjectGroupUncheckedCreateWithoutExpertInput>
  }

  export type ProjectGroupUpdateWithWhereUniqueWithoutExpertInput = {
    where: ProjectGroupWhereUniqueInput
    data: XOR<ProjectGroupUpdateWithoutExpertInput, ProjectGroupUncheckedUpdateWithoutExpertInput>
  }

  export type ProjectGroupUpdateManyWithWhereWithoutExpertInput = {
    where: ProjectGroupScalarWhereInput
    data: XOR<ProjectGroupUpdateManyMutationInput, ProjectGroupUncheckedUpdateManyWithoutExpertInput>
  }

  export type ProjectDocumentUpsertWithWhereUniqueWithoutStaffInput = {
    where: ProjectDocumentWhereUniqueInput
    update: XOR<ProjectDocumentUpdateWithoutStaffInput, ProjectDocumentUncheckedUpdateWithoutStaffInput>
    create: XOR<ProjectDocumentCreateWithoutStaffInput, ProjectDocumentUncheckedCreateWithoutStaffInput>
  }

  export type ProjectDocumentUpdateWithWhereUniqueWithoutStaffInput = {
    where: ProjectDocumentWhereUniqueInput
    data: XOR<ProjectDocumentUpdateWithoutStaffInput, ProjectDocumentUncheckedUpdateWithoutStaffInput>
  }

  export type ProjectDocumentUpdateManyWithWhereWithoutStaffInput = {
    where: ProjectDocumentScalarWhereInput
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyWithoutStaffInput>
  }

  export type ProjectDocumentScalarWhereInput = {
    AND?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
    OR?: ProjectDocumentScalarWhereInput[]
    NOT?: ProjectDocumentScalarWhereInput | ProjectDocumentScalarWhereInput[]
    ProjectDocumentID?: IntFilter<"ProjectDocument"> | number
    ProjectGroupID?: IntFilter<"ProjectDocument"> | number
    DocumentType?: EnumDocumentTypeFilter<"ProjectDocument"> | $Enums.DocumentType
    FileName?: StringFilter<"ProjectDocument"> | string
    FilePath?: StringFilter<"ProjectDocument"> | string
    MimeType?: StringNullableFilter<"ProjectDocument"> | string | null
    UploadedByStaffID?: IntNullableFilter<"ProjectDocument"> | number | null
    UploadedByStudentID?: IntNullableFilter<"ProjectDocument"> | number | null
    Description?: StringNullableFilter<"ProjectDocument"> | string | null
    Created?: DateTimeFilter<"ProjectDocument"> | Date | string
    Modified?: DateTimeFilter<"ProjectDocument"> | Date | string
  }

  export type ProjectMeetingUpsertWithWhereUniqueWithoutStatusByInput = {
    where: ProjectMeetingWhereUniqueInput
    update: XOR<ProjectMeetingUpdateWithoutStatusByInput, ProjectMeetingUncheckedUpdateWithoutStatusByInput>
    create: XOR<ProjectMeetingCreateWithoutStatusByInput, ProjectMeetingUncheckedCreateWithoutStatusByInput>
  }

  export type ProjectMeetingUpdateWithWhereUniqueWithoutStatusByInput = {
    where: ProjectMeetingWhereUniqueInput
    data: XOR<ProjectMeetingUpdateWithoutStatusByInput, ProjectMeetingUncheckedUpdateWithoutStatusByInput>
  }

  export type ProjectMeetingUpdateManyWithWhereWithoutStatusByInput = {
    where: ProjectMeetingScalarWhereInput
    data: XOR<ProjectMeetingUpdateManyMutationInput, ProjectMeetingUncheckedUpdateManyWithoutStatusByInput>
  }

  export type DepartmentCreateWithoutAcademicYearInput = {
    DepartmentName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    students?: StudentCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutAcademicYearInput = {
    DepartmentID?: number
    DepartmentName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutAcademicYearInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutAcademicYearInput, DepartmentUncheckedCreateWithoutAcademicYearInput>
  }

  export type DepartmentCreateManyAcademicYearInputEnvelope = {
    data: DepartmentCreateManyAcademicYearInput | DepartmentCreateManyAcademicYearInput[]
    skipDuplicates?: boolean
  }

  export type ProjectGroupCreateWithoutAcademicYearInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutAcademicYearInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutAcademicYearInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutAcademicYearInput, ProjectGroupUncheckedCreateWithoutAcademicYearInput>
  }

  export type ProjectGroupCreateManyAcademicYearInputEnvelope = {
    data: ProjectGroupCreateManyAcademicYearInput | ProjectGroupCreateManyAcademicYearInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutAcademicYearInput = {
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    department?: DepartmentCreateNestedOneWithoutStudentsInput
    groupMembers?: ProjectGroupMemberCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAcademicYearInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    groupMembers?: ProjectGroupMemberUncheckedCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAcademicYearInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAcademicYearInput, StudentUncheckedCreateWithoutAcademicYearInput>
  }

  export type StudentCreateManyAcademicYearInputEnvelope = {
    data: StudentCreateManyAcademicYearInput | StudentCreateManyAcademicYearInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutAcademicYearInput, DepartmentUncheckedUpdateWithoutAcademicYearInput>
    create: XOR<DepartmentCreateWithoutAcademicYearInput, DepartmentUncheckedCreateWithoutAcademicYearInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutAcademicYearInput, DepartmentUncheckedUpdateWithoutAcademicYearInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutAcademicYearInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutAcademicYearInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    DepartmentID?: IntFilter<"Department"> | number
    DepartmentName?: StringFilter<"Department"> | string
    AcademicYearID?: IntFilter<"Department"> | number
    Description?: StringNullableFilter<"Department"> | string | null
    Created?: DateTimeFilter<"Department"> | Date | string
    Modified?: DateTimeFilter<"Department"> | Date | string
  }

  export type ProjectGroupUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: ProjectGroupWhereUniqueInput
    update: XOR<ProjectGroupUpdateWithoutAcademicYearInput, ProjectGroupUncheckedUpdateWithoutAcademicYearInput>
    create: XOR<ProjectGroupCreateWithoutAcademicYearInput, ProjectGroupUncheckedCreateWithoutAcademicYearInput>
  }

  export type ProjectGroupUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: ProjectGroupWhereUniqueInput
    data: XOR<ProjectGroupUpdateWithoutAcademicYearInput, ProjectGroupUncheckedUpdateWithoutAcademicYearInput>
  }

  export type ProjectGroupUpdateManyWithWhereWithoutAcademicYearInput = {
    where: ProjectGroupScalarWhereInput
    data: XOR<ProjectGroupUpdateManyMutationInput, ProjectGroupUncheckedUpdateManyWithoutAcademicYearInput>
  }

  export type StudentUpsertWithWhereUniqueWithoutAcademicYearInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutAcademicYearInput, StudentUncheckedUpdateWithoutAcademicYearInput>
    create: XOR<StudentCreateWithoutAcademicYearInput, StudentUncheckedCreateWithoutAcademicYearInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutAcademicYearInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutAcademicYearInput, StudentUncheckedUpdateWithoutAcademicYearInput>
  }

  export type StudentUpdateManyWithWhereWithoutAcademicYearInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutAcademicYearInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    StudentID?: IntFilter<"Student"> | number
    StudentName?: StringFilter<"Student"> | string
    Phone?: StringNullableFilter<"Student"> | string | null
    Email?: StringFilter<"Student"> | string
    Password?: StringFilter<"Student"> | string
    DepartmentID?: IntNullableFilter<"Student"> | number | null
    AcademicYearID?: IntNullableFilter<"Student"> | number | null
    Description?: StringNullableFilter<"Student"> | string | null
    Created?: DateTimeFilter<"Student"> | Date | string
    Modified?: DateTimeFilter<"Student"> | Date | string
  }

  export type AcademicYearCreateWithoutDepartmentsInput = {
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroups?: ProjectGroupCreateNestedManyWithoutAcademicYearInput
    students?: StudentCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearUncheckedCreateWithoutDepartmentsInput = {
    AcademicYearID?: number
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroups?: ProjectGroupUncheckedCreateNestedManyWithoutAcademicYearInput
    students?: StudentUncheckedCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearCreateOrConnectWithoutDepartmentsInput = {
    where: AcademicYearWhereUniqueInput
    create: XOR<AcademicYearCreateWithoutDepartmentsInput, AcademicYearUncheckedCreateWithoutDepartmentsInput>
  }

  export type StudentCreateWithoutDepartmentInput = {
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    academicYear?: AcademicYearCreateNestedOneWithoutStudentsInput
    groupMembers?: ProjectGroupMemberCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDepartmentInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    groupMembers?: ProjectGroupMemberUncheckedCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentCreateManyDepartmentInputEnvelope = {
    data: StudentCreateManyDepartmentInput | StudentCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type AcademicYearUpsertWithoutDepartmentsInput = {
    update: XOR<AcademicYearUpdateWithoutDepartmentsInput, AcademicYearUncheckedUpdateWithoutDepartmentsInput>
    create: XOR<AcademicYearCreateWithoutDepartmentsInput, AcademicYearUncheckedCreateWithoutDepartmentsInput>
    where?: AcademicYearWhereInput
  }

  export type AcademicYearUpdateToOneWithWhereWithoutDepartmentsInput = {
    where?: AcademicYearWhereInput
    data: XOR<AcademicYearUpdateWithoutDepartmentsInput, AcademicYearUncheckedUpdateWithoutDepartmentsInput>
  }

  export type AcademicYearUpdateWithoutDepartmentsInput = {
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroups?: ProjectGroupUpdateManyWithoutAcademicYearNestedInput
    students?: StudentUpdateManyWithoutAcademicYearNestedInput
  }

  export type AcademicYearUncheckedUpdateWithoutDepartmentsInput = {
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroups?: ProjectGroupUncheckedUpdateManyWithoutAcademicYearNestedInput
    students?: StudentUncheckedUpdateManyWithoutAcademicYearNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutDepartmentInput, StudentUncheckedUpdateWithoutDepartmentInput>
    create: XOR<StudentCreateWithoutDepartmentInput, StudentUncheckedCreateWithoutDepartmentInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutDepartmentInput, StudentUncheckedUpdateWithoutDepartmentInput>
  }

  export type StudentUpdateManyWithWhereWithoutDepartmentInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type DepartmentCreateWithoutStudentsInput = {
    DepartmentName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    academicYear: AcademicYearCreateNestedOneWithoutDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutStudentsInput = {
    DepartmentID?: number
    DepartmentName: string
    AcademicYearID: number
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type DepartmentCreateOrConnectWithoutStudentsInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
  }

  export type AcademicYearCreateWithoutStudentsInput = {
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    departments?: DepartmentCreateNestedManyWithoutAcademicYearInput
    projectGroups?: ProjectGroupCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearUncheckedCreateWithoutStudentsInput = {
    AcademicYearID?: number
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutAcademicYearInput
    projectGroups?: ProjectGroupUncheckedCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearCreateOrConnectWithoutStudentsInput = {
    where: AcademicYearWhereUniqueInput
    create: XOR<AcademicYearCreateWithoutStudentsInput, AcademicYearUncheckedCreateWithoutStudentsInput>
  }

  export type ProjectGroupMemberCreateWithoutStudentInput = {
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutMembersInput
  }

  export type ProjectGroupMemberUncheckedCreateWithoutStudentInput = {
    ProjectGroupMemberID?: number
    ProjectGroupID: number
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupMemberCreateOrConnectWithoutStudentInput = {
    where: ProjectGroupMemberWhereUniqueInput
    create: XOR<ProjectGroupMemberCreateWithoutStudentInput, ProjectGroupMemberUncheckedCreateWithoutStudentInput>
  }

  export type ProjectGroupMemberCreateManyStudentInputEnvelope = {
    data: ProjectGroupMemberCreateManyStudentInput | ProjectGroupMemberCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMeetingAttendanceCreateWithoutStudentInput = {
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    meeting: ProjectMeetingCreateNestedOneWithoutAttendancesInput
  }

  export type ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput = {
    ProjectMeetingAttendanceID?: number
    ProjectMeetingID: number
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingAttendanceCreateOrConnectWithoutStudentInput = {
    where: ProjectMeetingAttendanceWhereUniqueInput
    create: XOR<ProjectMeetingAttendanceCreateWithoutStudentInput, ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type ProjectMeetingAttendanceCreateManyStudentInputEnvelope = {
    data: ProjectMeetingAttendanceCreateManyStudentInput | ProjectMeetingAttendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDocumentCreateWithoutStudentInput = {
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutDocumentsInput
    staff?: StaffCreateNestedOneWithoutProjectDocumentsInput
  }

  export type ProjectDocumentUncheckedCreateWithoutStudentInput = {
    ProjectDocumentID?: number
    ProjectGroupID: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStaffID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentCreateOrConnectWithoutStudentInput = {
    where: ProjectDocumentWhereUniqueInput
    create: XOR<ProjectDocumentCreateWithoutStudentInput, ProjectDocumentUncheckedCreateWithoutStudentInput>
  }

  export type ProjectDocumentCreateManyStudentInputEnvelope = {
    data: ProjectDocumentCreateManyStudentInput | ProjectDocumentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutStudentsInput = {
    update: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
    create: XOR<DepartmentCreateWithoutStudentsInput, DepartmentUncheckedCreateWithoutStudentsInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutStudentsInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutStudentsInput, DepartmentUncheckedUpdateWithoutStudentsInput>
  }

  export type DepartmentUpdateWithoutStudentsInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    academicYear?: AcademicYearUpdateOneRequiredWithoutDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutStudentsInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearUpsertWithoutStudentsInput = {
    update: XOR<AcademicYearUpdateWithoutStudentsInput, AcademicYearUncheckedUpdateWithoutStudentsInput>
    create: XOR<AcademicYearCreateWithoutStudentsInput, AcademicYearUncheckedCreateWithoutStudentsInput>
    where?: AcademicYearWhereInput
  }

  export type AcademicYearUpdateToOneWithWhereWithoutStudentsInput = {
    where?: AcademicYearWhereInput
    data: XOR<AcademicYearUpdateWithoutStudentsInput, AcademicYearUncheckedUpdateWithoutStudentsInput>
  }

  export type AcademicYearUpdateWithoutStudentsInput = {
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutAcademicYearNestedInput
    projectGroups?: ProjectGroupUpdateManyWithoutAcademicYearNestedInput
  }

  export type AcademicYearUncheckedUpdateWithoutStudentsInput = {
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutAcademicYearNestedInput
    projectGroups?: ProjectGroupUncheckedUpdateManyWithoutAcademicYearNestedInput
  }

  export type ProjectGroupMemberUpsertWithWhereUniqueWithoutStudentInput = {
    where: ProjectGroupMemberWhereUniqueInput
    update: XOR<ProjectGroupMemberUpdateWithoutStudentInput, ProjectGroupMemberUncheckedUpdateWithoutStudentInput>
    create: XOR<ProjectGroupMemberCreateWithoutStudentInput, ProjectGroupMemberUncheckedCreateWithoutStudentInput>
  }

  export type ProjectGroupMemberUpdateWithWhereUniqueWithoutStudentInput = {
    where: ProjectGroupMemberWhereUniqueInput
    data: XOR<ProjectGroupMemberUpdateWithoutStudentInput, ProjectGroupMemberUncheckedUpdateWithoutStudentInput>
  }

  export type ProjectGroupMemberUpdateManyWithWhereWithoutStudentInput = {
    where: ProjectGroupMemberScalarWhereInput
    data: XOR<ProjectGroupMemberUpdateManyMutationInput, ProjectGroupMemberUncheckedUpdateManyWithoutStudentInput>
  }

  export type ProjectGroupMemberScalarWhereInput = {
    AND?: ProjectGroupMemberScalarWhereInput | ProjectGroupMemberScalarWhereInput[]
    OR?: ProjectGroupMemberScalarWhereInput[]
    NOT?: ProjectGroupMemberScalarWhereInput | ProjectGroupMemberScalarWhereInput[]
    ProjectGroupMemberID?: IntFilter<"ProjectGroupMember"> | number
    ProjectGroupID?: IntFilter<"ProjectGroupMember"> | number
    StudentID?: IntFilter<"ProjectGroupMember"> | number
    IsGroupLeader?: BoolFilter<"ProjectGroupMember"> | boolean
    StudentCGPA?: DecimalNullableFilter<"ProjectGroupMember"> | Decimal | DecimalJsLike | number | string | null
    Description?: StringNullableFilter<"ProjectGroupMember"> | string | null
    Created?: DateTimeFilter<"ProjectGroupMember"> | Date | string
    Modified?: DateTimeFilter<"ProjectGroupMember"> | Date | string
  }

  export type ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: ProjectMeetingAttendanceWhereUniqueInput
    update: XOR<ProjectMeetingAttendanceUpdateWithoutStudentInput, ProjectMeetingAttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<ProjectMeetingAttendanceCreateWithoutStudentInput, ProjectMeetingAttendanceUncheckedCreateWithoutStudentInput>
  }

  export type ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: ProjectMeetingAttendanceWhereUniqueInput
    data: XOR<ProjectMeetingAttendanceUpdateWithoutStudentInput, ProjectMeetingAttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type ProjectMeetingAttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: ProjectMeetingAttendanceScalarWhereInput
    data: XOR<ProjectMeetingAttendanceUpdateManyMutationInput, ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type ProjectMeetingAttendanceScalarWhereInput = {
    AND?: ProjectMeetingAttendanceScalarWhereInput | ProjectMeetingAttendanceScalarWhereInput[]
    OR?: ProjectMeetingAttendanceScalarWhereInput[]
    NOT?: ProjectMeetingAttendanceScalarWhereInput | ProjectMeetingAttendanceScalarWhereInput[]
    ProjectMeetingAttendanceID?: IntFilter<"ProjectMeetingAttendance"> | number
    ProjectMeetingID?: IntFilter<"ProjectMeetingAttendance"> | number
    StudentID?: IntFilter<"ProjectMeetingAttendance"> | number
    IsPresent?: BoolFilter<"ProjectMeetingAttendance"> | boolean
    AttendanceRemarks?: StringNullableFilter<"ProjectMeetingAttendance"> | string | null
    Description?: StringNullableFilter<"ProjectMeetingAttendance"> | string | null
    Created?: DateTimeFilter<"ProjectMeetingAttendance"> | Date | string
    Modified?: DateTimeFilter<"ProjectMeetingAttendance"> | Date | string
  }

  export type ProjectDocumentUpsertWithWhereUniqueWithoutStudentInput = {
    where: ProjectDocumentWhereUniqueInput
    update: XOR<ProjectDocumentUpdateWithoutStudentInput, ProjectDocumentUncheckedUpdateWithoutStudentInput>
    create: XOR<ProjectDocumentCreateWithoutStudentInput, ProjectDocumentUncheckedCreateWithoutStudentInput>
  }

  export type ProjectDocumentUpdateWithWhereUniqueWithoutStudentInput = {
    where: ProjectDocumentWhereUniqueInput
    data: XOR<ProjectDocumentUpdateWithoutStudentInput, ProjectDocumentUncheckedUpdateWithoutStudentInput>
  }

  export type ProjectDocumentUpdateManyWithWhereWithoutStudentInput = {
    where: ProjectDocumentScalarWhereInput
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyWithoutStudentInput>
  }

  export type ProjectTypeCreateWithoutProjectGroupsInput = {
    ProjectTypeName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectTypeUncheckedCreateWithoutProjectGroupsInput = {
    ProjectTypeID?: number
    ProjectTypeName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectTypeCreateOrConnectWithoutProjectGroupsInput = {
    where: ProjectTypeWhereUniqueInput
    create: XOR<ProjectTypeCreateWithoutProjectGroupsInput, ProjectTypeUncheckedCreateWithoutProjectGroupsInput>
  }

  export type StaffCreateWithoutGuidedGroupsInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedMeetings?: ProjectMeetingCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingCreateNestedManyWithoutStatusByInput
  }

  export type StaffUncheckedCreateWithoutGuidedGroupsInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedMeetings?: ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupUncheckedCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput
  }

  export type StaffCreateOrConnectWithoutGuidedGroupsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutGuidedGroupsInput, StaffUncheckedCreateWithoutGuidedGroupsInput>
  }

  export type StaffCreateWithoutConvenedGroupsInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingCreateNestedManyWithoutGuideInput
    expertGroups?: ProjectGroupCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingCreateNestedManyWithoutStatusByInput
  }

  export type StaffUncheckedCreateWithoutConvenedGroupsInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput
    expertGroups?: ProjectGroupUncheckedCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput
  }

  export type StaffCreateOrConnectWithoutConvenedGroupsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutConvenedGroupsInput, StaffUncheckedCreateWithoutConvenedGroupsInput>
  }

  export type StaffCreateWithoutExpertGroupsInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupCreateNestedManyWithoutConvenerInput
    projectDocuments?: ProjectDocumentCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingCreateNestedManyWithoutStatusByInput
  }

  export type StaffUncheckedCreateWithoutExpertGroupsInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput
    projectDocuments?: ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput
  }

  export type StaffCreateOrConnectWithoutExpertGroupsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutExpertGroupsInput, StaffUncheckedCreateWithoutExpertGroupsInput>
  }

  export type AcademicYearCreateWithoutProjectGroupsInput = {
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    departments?: DepartmentCreateNestedManyWithoutAcademicYearInput
    students?: StudentCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearUncheckedCreateWithoutProjectGroupsInput = {
    AcademicYearID?: number
    YearName: string
    StartDate: Date | string
    EndDate: Date | string
    IsActive?: boolean
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    departments?: DepartmentUncheckedCreateNestedManyWithoutAcademicYearInput
    students?: StudentUncheckedCreateNestedManyWithoutAcademicYearInput
  }

  export type AcademicYearCreateOrConnectWithoutProjectGroupsInput = {
    where: AcademicYearWhereUniqueInput
    create: XOR<AcademicYearCreateWithoutProjectGroupsInput, AcademicYearUncheckedCreateWithoutProjectGroupsInput>
  }

  export type ProjectGroupMemberCreateWithoutProjectGroupInput = {
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    student: StudentCreateNestedOneWithoutGroupMembersInput
  }

  export type ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput = {
    ProjectGroupMemberID?: number
    StudentID: number
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupMemberCreateOrConnectWithoutProjectGroupInput = {
    where: ProjectGroupMemberWhereUniqueInput
    create: XOR<ProjectGroupMemberCreateWithoutProjectGroupInput, ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput>
  }

  export type ProjectGroupMemberCreateManyProjectGroupInputEnvelope = {
    data: ProjectGroupMemberCreateManyProjectGroupInput | ProjectGroupMemberCreateManyProjectGroupInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMeetingCreateWithoutProjectGroupInput = {
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guide: StaffCreateNestedOneWithoutGuidedMeetingsInput
    statusBy?: StaffCreateNestedOneWithoutMeetingStatusByInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingUncheckedCreateWithoutProjectGroupInput = {
    ProjectMeetingID?: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type ProjectMeetingCreateOrConnectWithoutProjectGroupInput = {
    where: ProjectMeetingWhereUniqueInput
    create: XOR<ProjectMeetingCreateWithoutProjectGroupInput, ProjectMeetingUncheckedCreateWithoutProjectGroupInput>
  }

  export type ProjectMeetingCreateManyProjectGroupInputEnvelope = {
    data: ProjectMeetingCreateManyProjectGroupInput | ProjectMeetingCreateManyProjectGroupInput[]
    skipDuplicates?: boolean
  }

  export type ProjectDocumentCreateWithoutProjectGroupInput = {
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    staff?: StaffCreateNestedOneWithoutProjectDocumentsInput
    student?: StudentCreateNestedOneWithoutDocumentsInput
  }

  export type ProjectDocumentUncheckedCreateWithoutProjectGroupInput = {
    ProjectDocumentID?: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStaffID?: number | null
    UploadedByStudentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentCreateOrConnectWithoutProjectGroupInput = {
    where: ProjectDocumentWhereUniqueInput
    create: XOR<ProjectDocumentCreateWithoutProjectGroupInput, ProjectDocumentUncheckedCreateWithoutProjectGroupInput>
  }

  export type ProjectDocumentCreateManyProjectGroupInputEnvelope = {
    data: ProjectDocumentCreateManyProjectGroupInput | ProjectDocumentCreateManyProjectGroupInput[]
    skipDuplicates?: boolean
  }

  export type ProjectTypeUpsertWithoutProjectGroupsInput = {
    update: XOR<ProjectTypeUpdateWithoutProjectGroupsInput, ProjectTypeUncheckedUpdateWithoutProjectGroupsInput>
    create: XOR<ProjectTypeCreateWithoutProjectGroupsInput, ProjectTypeUncheckedCreateWithoutProjectGroupsInput>
    where?: ProjectTypeWhereInput
  }

  export type ProjectTypeUpdateToOneWithWhereWithoutProjectGroupsInput = {
    where?: ProjectTypeWhereInput
    data: XOR<ProjectTypeUpdateWithoutProjectGroupsInput, ProjectTypeUncheckedUpdateWithoutProjectGroupsInput>
  }

  export type ProjectTypeUpdateWithoutProjectGroupsInput = {
    ProjectTypeName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectTypeUncheckedUpdateWithoutProjectGroupsInput = {
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    ProjectTypeName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffUpsertWithoutGuidedGroupsInput = {
    update: XOR<StaffUpdateWithoutGuidedGroupsInput, StaffUncheckedUpdateWithoutGuidedGroupsInput>
    create: XOR<StaffCreateWithoutGuidedGroupsInput, StaffUncheckedCreateWithoutGuidedGroupsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutGuidedGroupsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutGuidedGroupsInput, StaffUncheckedUpdateWithoutGuidedGroupsInput>
  }

  export type StaffUpdateWithoutGuidedGroupsInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedMeetings?: ProjectMeetingUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUncheckedUpdateWithoutGuidedGroupsInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedMeetings?: ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUpsertWithoutConvenedGroupsInput = {
    update: XOR<StaffUpdateWithoutConvenedGroupsInput, StaffUncheckedUpdateWithoutConvenedGroupsInput>
    create: XOR<StaffCreateWithoutConvenedGroupsInput, StaffUncheckedCreateWithoutConvenedGroupsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutConvenedGroupsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutConvenedGroupsInput, StaffUncheckedUpdateWithoutConvenedGroupsInput>
  }

  export type StaffUpdateWithoutConvenedGroupsInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUpdateManyWithoutGuideNestedInput
    expertGroups?: ProjectGroupUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUncheckedUpdateWithoutConvenedGroupsInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput
    expertGroups?: ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUpsertWithoutExpertGroupsInput = {
    update: XOR<StaffUpdateWithoutExpertGroupsInput, StaffUncheckedUpdateWithoutExpertGroupsInput>
    create: XOR<StaffCreateWithoutExpertGroupsInput, StaffUncheckedCreateWithoutExpertGroupsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutExpertGroupsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutExpertGroupsInput, StaffUncheckedUpdateWithoutExpertGroupsInput>
  }

  export type StaffUpdateWithoutExpertGroupsInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUpdateManyWithoutConvenerNestedInput
    projectDocuments?: ProjectDocumentUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUncheckedUpdateWithoutExpertGroupsInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput
    projectDocuments?: ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput
  }

  export type AcademicYearUpsertWithoutProjectGroupsInput = {
    update: XOR<AcademicYearUpdateWithoutProjectGroupsInput, AcademicYearUncheckedUpdateWithoutProjectGroupsInput>
    create: XOR<AcademicYearCreateWithoutProjectGroupsInput, AcademicYearUncheckedCreateWithoutProjectGroupsInput>
    where?: AcademicYearWhereInput
  }

  export type AcademicYearUpdateToOneWithWhereWithoutProjectGroupsInput = {
    where?: AcademicYearWhereInput
    data: XOR<AcademicYearUpdateWithoutProjectGroupsInput, AcademicYearUncheckedUpdateWithoutProjectGroupsInput>
  }

  export type AcademicYearUpdateWithoutProjectGroupsInput = {
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUpdateManyWithoutAcademicYearNestedInput
    students?: StudentUpdateManyWithoutAcademicYearNestedInput
  }

  export type AcademicYearUncheckedUpdateWithoutProjectGroupsInput = {
    AcademicYearID?: IntFieldUpdateOperationsInput | number
    YearName?: StringFieldUpdateOperationsInput | string
    StartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    EndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    departments?: DepartmentUncheckedUpdateManyWithoutAcademicYearNestedInput
    students?: StudentUncheckedUpdateManyWithoutAcademicYearNestedInput
  }

  export type ProjectGroupMemberUpsertWithWhereUniqueWithoutProjectGroupInput = {
    where: ProjectGroupMemberWhereUniqueInput
    update: XOR<ProjectGroupMemberUpdateWithoutProjectGroupInput, ProjectGroupMemberUncheckedUpdateWithoutProjectGroupInput>
    create: XOR<ProjectGroupMemberCreateWithoutProjectGroupInput, ProjectGroupMemberUncheckedCreateWithoutProjectGroupInput>
  }

  export type ProjectGroupMemberUpdateWithWhereUniqueWithoutProjectGroupInput = {
    where: ProjectGroupMemberWhereUniqueInput
    data: XOR<ProjectGroupMemberUpdateWithoutProjectGroupInput, ProjectGroupMemberUncheckedUpdateWithoutProjectGroupInput>
  }

  export type ProjectGroupMemberUpdateManyWithWhereWithoutProjectGroupInput = {
    where: ProjectGroupMemberScalarWhereInput
    data: XOR<ProjectGroupMemberUpdateManyMutationInput, ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupInput>
  }

  export type ProjectMeetingUpsertWithWhereUniqueWithoutProjectGroupInput = {
    where: ProjectMeetingWhereUniqueInput
    update: XOR<ProjectMeetingUpdateWithoutProjectGroupInput, ProjectMeetingUncheckedUpdateWithoutProjectGroupInput>
    create: XOR<ProjectMeetingCreateWithoutProjectGroupInput, ProjectMeetingUncheckedCreateWithoutProjectGroupInput>
  }

  export type ProjectMeetingUpdateWithWhereUniqueWithoutProjectGroupInput = {
    where: ProjectMeetingWhereUniqueInput
    data: XOR<ProjectMeetingUpdateWithoutProjectGroupInput, ProjectMeetingUncheckedUpdateWithoutProjectGroupInput>
  }

  export type ProjectMeetingUpdateManyWithWhereWithoutProjectGroupInput = {
    where: ProjectMeetingScalarWhereInput
    data: XOR<ProjectMeetingUpdateManyMutationInput, ProjectMeetingUncheckedUpdateManyWithoutProjectGroupInput>
  }

  export type ProjectDocumentUpsertWithWhereUniqueWithoutProjectGroupInput = {
    where: ProjectDocumentWhereUniqueInput
    update: XOR<ProjectDocumentUpdateWithoutProjectGroupInput, ProjectDocumentUncheckedUpdateWithoutProjectGroupInput>
    create: XOR<ProjectDocumentCreateWithoutProjectGroupInput, ProjectDocumentUncheckedCreateWithoutProjectGroupInput>
  }

  export type ProjectDocumentUpdateWithWhereUniqueWithoutProjectGroupInput = {
    where: ProjectDocumentWhereUniqueInput
    data: XOR<ProjectDocumentUpdateWithoutProjectGroupInput, ProjectDocumentUncheckedUpdateWithoutProjectGroupInput>
  }

  export type ProjectDocumentUpdateManyWithWhereWithoutProjectGroupInput = {
    where: ProjectDocumentScalarWhereInput
    data: XOR<ProjectDocumentUpdateManyMutationInput, ProjectDocumentUncheckedUpdateManyWithoutProjectGroupInput>
  }

  export type ProjectGroupCreateWithoutMembersInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutMembersInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutMembersInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutMembersInput, ProjectGroupUncheckedCreateWithoutMembersInput>
  }

  export type StudentCreateWithoutGroupMembersInput = {
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    department?: DepartmentCreateNestedOneWithoutStudentsInput
    academicYear?: AcademicYearCreateNestedOneWithoutStudentsInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGroupMembersInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGroupMembersInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupMembersInput, StudentUncheckedCreateWithoutGroupMembersInput>
  }

  export type ProjectGroupUpsertWithoutMembersInput = {
    update: XOR<ProjectGroupUpdateWithoutMembersInput, ProjectGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectGroupCreateWithoutMembersInput, ProjectGroupUncheckedCreateWithoutMembersInput>
    where?: ProjectGroupWhereInput
  }

  export type ProjectGroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectGroupWhereInput
    data: XOR<ProjectGroupUpdateWithoutMembersInput, ProjectGroupUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectGroupUpdateWithoutMembersInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutMembersInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type StudentUpsertWithoutGroupMembersInput = {
    update: XOR<StudentUpdateWithoutGroupMembersInput, StudentUncheckedUpdateWithoutGroupMembersInput>
    create: XOR<StudentCreateWithoutGroupMembersInput, StudentUncheckedCreateWithoutGroupMembersInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutGroupMembersInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutGroupMembersInput, StudentUncheckedUpdateWithoutGroupMembersInput>
  }

  export type StudentUpdateWithoutGroupMembersInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutStudentsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutStudentsNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupMembersInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ProjectGroupCreateWithoutMeetingsInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutMeetingsInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutMeetingsInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutMeetingsInput, ProjectGroupUncheckedCreateWithoutMeetingsInput>
  }

  export type StaffCreateWithoutGuidedMeetingsInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingCreateNestedManyWithoutStatusByInput
  }

  export type StaffUncheckedCreateWithoutGuidedMeetingsInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupUncheckedCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput
    meetingStatusBy?: ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput
  }

  export type StaffCreateOrConnectWithoutGuidedMeetingsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutGuidedMeetingsInput, StaffUncheckedCreateWithoutGuidedMeetingsInput>
  }

  export type StaffCreateWithoutMeetingStatusByInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutMeetingStatusByInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupUncheckedCreateNestedManyWithoutExpertInput
    projectDocuments?: ProjectDocumentUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutMeetingStatusByInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutMeetingStatusByInput, StaffUncheckedCreateWithoutMeetingStatusByInput>
  }

  export type ProjectMeetingAttendanceCreateWithoutMeetingInput = {
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    student: StudentCreateNestedOneWithoutAttendancesInput
  }

  export type ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput = {
    ProjectMeetingAttendanceID?: number
    StudentID: number
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingAttendanceCreateOrConnectWithoutMeetingInput = {
    where: ProjectMeetingAttendanceWhereUniqueInput
    create: XOR<ProjectMeetingAttendanceCreateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput>
  }

  export type ProjectMeetingAttendanceCreateManyMeetingInputEnvelope = {
    data: ProjectMeetingAttendanceCreateManyMeetingInput | ProjectMeetingAttendanceCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type ProjectGroupUpsertWithoutMeetingsInput = {
    update: XOR<ProjectGroupUpdateWithoutMeetingsInput, ProjectGroupUncheckedUpdateWithoutMeetingsInput>
    create: XOR<ProjectGroupCreateWithoutMeetingsInput, ProjectGroupUncheckedCreateWithoutMeetingsInput>
    where?: ProjectGroupWhereInput
  }

  export type ProjectGroupUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: ProjectGroupWhereInput
    data: XOR<ProjectGroupUpdateWithoutMeetingsInput, ProjectGroupUncheckedUpdateWithoutMeetingsInput>
  }

  export type ProjectGroupUpdateWithoutMeetingsInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutMeetingsInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type StaffUpsertWithoutGuidedMeetingsInput = {
    update: XOR<StaffUpdateWithoutGuidedMeetingsInput, StaffUncheckedUpdateWithoutGuidedMeetingsInput>
    create: XOR<StaffCreateWithoutGuidedMeetingsInput, StaffUncheckedCreateWithoutGuidedMeetingsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutGuidedMeetingsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutGuidedMeetingsInput, StaffUncheckedUpdateWithoutGuidedMeetingsInput>
  }

  export type StaffUpdateWithoutGuidedMeetingsInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUncheckedUpdateWithoutGuidedMeetingsInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput
    meetingStatusBy?: ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUpsertWithoutMeetingStatusByInput = {
    update: XOR<StaffUpdateWithoutMeetingStatusByInput, StaffUncheckedUpdateWithoutMeetingStatusByInput>
    create: XOR<StaffCreateWithoutMeetingStatusByInput, StaffUncheckedCreateWithoutMeetingStatusByInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutMeetingStatusByInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutMeetingStatusByInput, StaffUncheckedUpdateWithoutMeetingStatusByInput>
  }

  export type StaffUpdateWithoutMeetingStatusByInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutMeetingStatusByInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput
    projectDocuments?: ProjectDocumentUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type ProjectMeetingAttendanceUpsertWithWhereUniqueWithoutMeetingInput = {
    where: ProjectMeetingAttendanceWhereUniqueInput
    update: XOR<ProjectMeetingAttendanceUpdateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedUpdateWithoutMeetingInput>
    create: XOR<ProjectMeetingAttendanceCreateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedCreateWithoutMeetingInput>
  }

  export type ProjectMeetingAttendanceUpdateWithWhereUniqueWithoutMeetingInput = {
    where: ProjectMeetingAttendanceWhereUniqueInput
    data: XOR<ProjectMeetingAttendanceUpdateWithoutMeetingInput, ProjectMeetingAttendanceUncheckedUpdateWithoutMeetingInput>
  }

  export type ProjectMeetingAttendanceUpdateManyWithWhereWithoutMeetingInput = {
    where: ProjectMeetingAttendanceScalarWhereInput
    data: XOR<ProjectMeetingAttendanceUpdateManyMutationInput, ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingInput>
  }

  export type ProjectMeetingCreateWithoutAttendancesInput = {
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectGroup: ProjectGroupCreateNestedOneWithoutMeetingsInput
    guide: StaffCreateNestedOneWithoutGuidedMeetingsInput
    statusBy?: StaffCreateNestedOneWithoutMeetingStatusByInput
  }

  export type ProjectMeetingUncheckedCreateWithoutAttendancesInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
  }

  export type ProjectMeetingCreateOrConnectWithoutAttendancesInput = {
    where: ProjectMeetingWhereUniqueInput
    create: XOR<ProjectMeetingCreateWithoutAttendancesInput, ProjectMeetingUncheckedCreateWithoutAttendancesInput>
  }

  export type StudentCreateWithoutAttendancesInput = {
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    department?: DepartmentCreateNestedOneWithoutStudentsInput
    academicYear?: AcademicYearCreateNestedOneWithoutStudentsInput
    groupMembers?: ProjectGroupMemberCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendancesInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    groupMembers?: ProjectGroupMemberUncheckedCreateNestedManyWithoutStudentInput
    documents?: ProjectDocumentUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendancesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
  }

  export type ProjectMeetingUpsertWithoutAttendancesInput = {
    update: XOR<ProjectMeetingUpdateWithoutAttendancesInput, ProjectMeetingUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ProjectMeetingCreateWithoutAttendancesInput, ProjectMeetingUncheckedCreateWithoutAttendancesInput>
    where?: ProjectMeetingWhereInput
  }

  export type ProjectMeetingUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ProjectMeetingWhereInput
    data: XOR<ProjectMeetingUpdateWithoutAttendancesInput, ProjectMeetingUncheckedUpdateWithoutAttendancesInput>
  }

  export type ProjectMeetingUpdateWithoutAttendancesInput = {
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutMeetingsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedMeetingsNestedInput
    statusBy?: StaffUpdateOneWithoutMeetingStatusByNestedInput
  }

  export type ProjectMeetingUncheckedUpdateWithoutAttendancesInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentUpsertWithoutAttendancesInput = {
    update: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
    create: XOR<StudentCreateWithoutAttendancesInput, StudentUncheckedCreateWithoutAttendancesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendancesInput, StudentUncheckedUpdateWithoutAttendancesInput>
  }

  export type StudentUpdateWithoutAttendancesInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutStudentsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutStudentsNestedInput
    groupMembers?: ProjectGroupMemberUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendancesInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: ProjectGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ProjectGroupCreateWithoutDocumentsInput = {
    ProjectGroupName: string
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    projectType: ProjectTypeCreateNestedOneWithoutProjectGroupsInput
    guide: StaffCreateNestedOneWithoutGuidedGroupsInput
    convener?: StaffCreateNestedOneWithoutConvenedGroupsInput
    expert?: StaffCreateNestedOneWithoutExpertGroupsInput
    academicYear?: AcademicYearCreateNestedOneWithoutProjectGroupsInput
    members?: ProjectGroupMemberCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupUncheckedCreateWithoutDocumentsInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    members?: ProjectGroupMemberUncheckedCreateNestedManyWithoutProjectGroupInput
    meetings?: ProjectMeetingUncheckedCreateNestedManyWithoutProjectGroupInput
  }

  export type ProjectGroupCreateOrConnectWithoutDocumentsInput = {
    where: ProjectGroupWhereUniqueInput
    create: XOR<ProjectGroupCreateWithoutDocumentsInput, ProjectGroupUncheckedCreateWithoutDocumentsInput>
  }

  export type StaffCreateWithoutProjectDocumentsInput = {
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupCreateNestedManyWithoutExpertInput
    meetingStatusBy?: ProjectMeetingCreateNestedManyWithoutStatusByInput
  }

  export type StaffUncheckedCreateWithoutProjectDocumentsInput = {
    StaffID?: number
    StaffName: string
    Phone?: string | null
    Email: string
    Password: string
    Role?: $Enums.StaffRole
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    guidedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutGuideInput
    guidedMeetings?: ProjectMeetingUncheckedCreateNestedManyWithoutGuideInput
    convenedGroups?: ProjectGroupUncheckedCreateNestedManyWithoutConvenerInput
    expertGroups?: ProjectGroupUncheckedCreateNestedManyWithoutExpertInput
    meetingStatusBy?: ProjectMeetingUncheckedCreateNestedManyWithoutStatusByInput
  }

  export type StaffCreateOrConnectWithoutProjectDocumentsInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutProjectDocumentsInput, StaffUncheckedCreateWithoutProjectDocumentsInput>
  }

  export type StudentCreateWithoutDocumentsInput = {
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    department?: DepartmentCreateNestedOneWithoutStudentsInput
    academicYear?: AcademicYearCreateNestedOneWithoutStudentsInput
    groupMembers?: ProjectGroupMemberCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutDocumentsInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    groupMembers?: ProjectGroupMemberUncheckedCreateNestedManyWithoutStudentInput
    attendances?: ProjectMeetingAttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutDocumentsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
  }

  export type ProjectGroupUpsertWithoutDocumentsInput = {
    update: XOR<ProjectGroupUpdateWithoutDocumentsInput, ProjectGroupUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ProjectGroupCreateWithoutDocumentsInput, ProjectGroupUncheckedCreateWithoutDocumentsInput>
    where?: ProjectGroupWhereInput
  }

  export type ProjectGroupUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ProjectGroupWhereInput
    data: XOR<ProjectGroupUpdateWithoutDocumentsInput, ProjectGroupUncheckedUpdateWithoutDocumentsInput>
  }

  export type ProjectGroupUpdateWithoutDocumentsInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutDocumentsInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type StaffUpsertWithoutProjectDocumentsInput = {
    update: XOR<StaffUpdateWithoutProjectDocumentsInput, StaffUncheckedUpdateWithoutProjectDocumentsInput>
    create: XOR<StaffCreateWithoutProjectDocumentsInput, StaffUncheckedCreateWithoutProjectDocumentsInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutProjectDocumentsInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutProjectDocumentsInput, StaffUncheckedUpdateWithoutProjectDocumentsInput>
  }

  export type StaffUpdateWithoutProjectDocumentsInput = {
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUpdateManyWithoutExpertNestedInput
    meetingStatusBy?: ProjectMeetingUpdateManyWithoutStatusByNestedInput
  }

  export type StaffUncheckedUpdateWithoutProjectDocumentsInput = {
    StaffID?: IntFieldUpdateOperationsInput | number
    StaffName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Role?: EnumStaffRoleFieldUpdateOperationsInput | $Enums.StaffRole
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guidedGroups?: ProjectGroupUncheckedUpdateManyWithoutGuideNestedInput
    guidedMeetings?: ProjectMeetingUncheckedUpdateManyWithoutGuideNestedInput
    convenedGroups?: ProjectGroupUncheckedUpdateManyWithoutConvenerNestedInput
    expertGroups?: ProjectGroupUncheckedUpdateManyWithoutExpertNestedInput
    meetingStatusBy?: ProjectMeetingUncheckedUpdateManyWithoutStatusByNestedInput
  }

  export type StudentUpsertWithoutDocumentsInput = {
    update: XOR<StudentUpdateWithoutDocumentsInput, StudentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<StudentCreateWithoutDocumentsInput, StudentUncheckedCreateWithoutDocumentsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutDocumentsInput, StudentUncheckedUpdateWithoutDocumentsInput>
  }

  export type StudentUpdateWithoutDocumentsInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutStudentsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutStudentsNestedInput
    groupMembers?: ProjectGroupMemberUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDocumentsInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: ProjectGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ProjectGroupCreateManyProjectTypeInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupUpdateWithoutProjectTypeInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutProjectTypeInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateManyWithoutProjectTypeInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupCreateManyGuideInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingCreateManyGuideInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
  }

  export type ProjectGroupCreateManyConvenerInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupCreateManyExpertInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentCreateManyStaffInput = {
    ProjectDocumentID?: number
    ProjectGroupID: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStudentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingCreateManyStatusByInput = {
    ProjectMeetingID?: number
    ProjectGroupID: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupUpdateWithoutGuideInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutGuideInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateManyWithoutGuideInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingUpdateWithoutGuideInput = {
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutMeetingsNestedInput
    statusBy?: StaffUpdateOneWithoutMeetingStatusByNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateWithoutGuideInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateManyWithoutGuideInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectGroupUpdateWithoutConvenerInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutConvenerInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateManyWithoutConvenerInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupUpdateWithoutExpertInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    academicYear?: AcademicYearUpdateOneWithoutProjectGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutExpertInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateManyWithoutExpertInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentUpdateWithoutStaffInput = {
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutDocumentsNestedInput
    student?: StudentUpdateOneWithoutDocumentsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateWithoutStaffInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStudentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutStaffInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStudentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingUpdateWithoutStatusByInput = {
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutMeetingsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedMeetingsNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateWithoutStatusByInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateManyWithoutStatusByInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepartmentCreateManyAcademicYearInput = {
    DepartmentID?: number
    DepartmentName: string
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupCreateManyAcademicYearInput = {
    ProjectGroupID?: number
    ProjectGroupName: string
    ProjectTypeID: number
    GuideStaffID: number
    ProjectTitle?: string | null
    ProjectArea?: string | null
    ProjectDescription?: string | null
    AverageCPI?: Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: number | null
    ExpertStaffID?: number | null
    Status?: $Enums.ProjectGroupStatus
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type StudentCreateManyAcademicYearInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    DepartmentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type DepartmentUpdateWithoutAcademicYearInput = {
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutAcademicYearInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutAcademicYearInput = {
    DepartmentID?: IntFieldUpdateOperationsInput | number
    DepartmentName?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupUpdateWithoutAcademicYearInput = {
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectType?: ProjectTypeUpdateOneRequiredWithoutProjectGroupsNestedInput
    guide?: StaffUpdateOneRequiredWithoutGuidedGroupsNestedInput
    convener?: StaffUpdateOneWithoutConvenedGroupsNestedInput
    expert?: StaffUpdateOneWithoutExpertGroupsNestedInput
    members?: ProjectGroupMemberUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateWithoutAcademicYearInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupNestedInput
    meetings?: ProjectMeetingUncheckedUpdateManyWithoutProjectGroupNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutProjectGroupNestedInput
  }

  export type ProjectGroupUncheckedUpdateManyWithoutAcademicYearInput = {
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    ProjectGroupName?: StringFieldUpdateOperationsInput | string
    ProjectTypeID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    ProjectTitle?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectArea?: NullableStringFieldUpdateOperationsInput | string | null
    ProjectDescription?: NullableStringFieldUpdateOperationsInput | string | null
    AverageCPI?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ConvenerStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    ExpertStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Status?: EnumProjectGroupStatusFieldUpdateOperationsInput | $Enums.ProjectGroupStatus
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutAcademicYearInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: DepartmentUpdateOneWithoutStudentsNestedInput
    groupMembers?: ProjectGroupMemberUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAcademicYearInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: ProjectGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutAcademicYearInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyDepartmentInput = {
    StudentID?: number
    StudentName: string
    Phone?: string | null
    Email: string
    Password: string
    AcademicYearID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type StudentUpdateWithoutDepartmentInput = {
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    academicYear?: AcademicYearUpdateOneWithoutStudentsNestedInput
    groupMembers?: ProjectGroupMemberUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutDepartmentInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    groupMembers?: ProjectGroupMemberUncheckedUpdateManyWithoutStudentNestedInput
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentNestedInput
    documents?: ProjectDocumentUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutDepartmentInput = {
    StudentID?: IntFieldUpdateOperationsInput | number
    StudentName?: StringFieldUpdateOperationsInput | string
    Phone?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    AcademicYearID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberCreateManyStudentInput = {
    ProjectGroupMemberID?: number
    ProjectGroupID: number
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingAttendanceCreateManyStudentInput = {
    ProjectMeetingAttendanceID?: number
    ProjectMeetingID: number
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectDocumentCreateManyStudentInput = {
    ProjectDocumentID?: number
    ProjectGroupID: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStaffID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupMemberUpdateWithoutStudentInput = {
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectGroupMemberUncheckedUpdateWithoutStudentInput = {
    ProjectGroupMemberID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberUncheckedUpdateManyWithoutStudentInput = {
    ProjectGroupMemberID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingAttendanceUpdateWithoutStudentInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    meeting?: ProjectMeetingUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type ProjectMeetingAttendanceUncheckedUpdateWithoutStudentInput = {
    ProjectMeetingAttendanceID?: IntFieldUpdateOperationsInput | number
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingAttendanceUncheckedUpdateManyWithoutStudentInput = {
    ProjectMeetingAttendanceID?: IntFieldUpdateOperationsInput | number
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentUpdateWithoutStudentInput = {
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    projectGroup?: ProjectGroupUpdateOneRequiredWithoutDocumentsNestedInput
    staff?: StaffUpdateOneWithoutProjectDocumentsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateWithoutStudentInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutStudentInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    ProjectGroupID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberCreateManyProjectGroupInput = {
    ProjectGroupMemberID?: number
    StudentID: number
    IsGroupLeader?: boolean
    StudentCGPA?: Decimal | DecimalJsLike | number | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingCreateManyProjectGroupInput = {
    ProjectMeetingID?: number
    GuideStaffID: number
    MeetingDateTime: Date | string
    MeetingPurpose?: string | null
    MeetingLocation?: string | null
    MeetingNotes?: string | null
    MeetingStatus?: $Enums.MeetingStatus
    MeetingStatusDescription?: string | null
    MeetingStatusDatetime?: Date | string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
    StatusUpdatedByStaffID?: number | null
  }

  export type ProjectDocumentCreateManyProjectGroupInput = {
    ProjectDocumentID?: number
    DocumentType?: $Enums.DocumentType
    FileName: string
    FilePath: string
    MimeType?: string | null
    UploadedByStaffID?: number | null
    UploadedByStudentID?: number | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectGroupMemberUpdateWithoutProjectGroupInput = {
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutGroupMembersNestedInput
  }

  export type ProjectGroupMemberUncheckedUpdateWithoutProjectGroupInput = {
    ProjectGroupMemberID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectGroupMemberUncheckedUpdateManyWithoutProjectGroupInput = {
    ProjectGroupMemberID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsGroupLeader?: BoolFieldUpdateOperationsInput | boolean
    StudentCGPA?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingUpdateWithoutProjectGroupInput = {
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    guide?: StaffUpdateOneRequiredWithoutGuidedMeetingsNestedInput
    statusBy?: StaffUpdateOneWithoutMeetingStatusByNestedInput
    attendances?: ProjectMeetingAttendanceUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateWithoutProjectGroupInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    attendances?: ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type ProjectMeetingUncheckedUpdateManyWithoutProjectGroupInput = {
    ProjectMeetingID?: IntFieldUpdateOperationsInput | number
    GuideStaffID?: IntFieldUpdateOperationsInput | number
    MeetingDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    MeetingPurpose?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingLocation?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatus?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    MeetingStatusDescription?: NullableStringFieldUpdateOperationsInput | string | null
    MeetingStatusDatetime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    StatusUpdatedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProjectDocumentUpdateWithoutProjectGroupInput = {
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    staff?: StaffUpdateOneWithoutProjectDocumentsNestedInput
    student?: StudentUpdateOneWithoutDocumentsNestedInput
  }

  export type ProjectDocumentUncheckedUpdateWithoutProjectGroupInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    UploadedByStudentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectDocumentUncheckedUpdateManyWithoutProjectGroupInput = {
    ProjectDocumentID?: IntFieldUpdateOperationsInput | number
    DocumentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    FileName?: StringFieldUpdateOperationsInput | string
    FilePath?: StringFieldUpdateOperationsInput | string
    MimeType?: NullableStringFieldUpdateOperationsInput | string | null
    UploadedByStaffID?: NullableIntFieldUpdateOperationsInput | number | null
    UploadedByStudentID?: NullableIntFieldUpdateOperationsInput | number | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingAttendanceCreateManyMeetingInput = {
    ProjectMeetingAttendanceID?: number
    StudentID: number
    IsPresent?: boolean
    AttendanceRemarks?: string | null
    Description?: string | null
    Created?: Date | string
    Modified?: Date | string
  }

  export type ProjectMeetingAttendanceUpdateWithoutMeetingInput = {
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type ProjectMeetingAttendanceUncheckedUpdateWithoutMeetingInput = {
    ProjectMeetingAttendanceID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMeetingAttendanceUncheckedUpdateManyWithoutMeetingInput = {
    ProjectMeetingAttendanceID?: IntFieldUpdateOperationsInput | number
    StudentID?: IntFieldUpdateOperationsInput | number
    IsPresent?: BoolFieldUpdateOperationsInput | boolean
    AttendanceRemarks?: NullableStringFieldUpdateOperationsInput | string | null
    Description?: NullableStringFieldUpdateOperationsInput | string | null
    Created?: DateTimeFieldUpdateOperationsInput | Date | string
    Modified?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}