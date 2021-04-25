// T extends U ? X : Y

type nonUndefined<T> = T extends undefined | null ? never : T;

const v: nonUndefined<string | number | null> = null;

interface IHydrantA {
    name: string,
    type: 'a'
}

interface IHydrantB {
    name: string,
    type: string
}

interface IHydrantC {
    name: string,
    type: number
}

type Hydrants = IHydrantA | IHydrantB | IHydrantC;

const h1: Exclude<Hydrants, IHydrantC> = {
    name: 'H',
    type: 1
}

/** params types and return type**/

// eslint-disable-next-line @typescript-eslint/ban-types
// type FunctionParamReturnType<T extends Function> = T extends (...args: [infer U, infer Y]) => infer Z
//     ? U | Z | Y
//     : never;
//
// function fn0(_a: number) {
//     return 's'
// }
//
// function fn1(_a: number, _b: number) {
//     return 's'
// }
//
// function fn2(_a: number, _b: (a: number) => number) {
//     return true
// }
//
// function fn3(_a: (a: string) => string, _b: (a: number) => number) {
//     return true
// }

// const v2: FunctionParamReturnType< typeof fn> = true;

// const v0: FunctionParamReturnType<typeof fn0> = {a:1}; //  number |  string;
// const v1: FunctionParamReturnType<typeof fn1> = true; //  number |  string;
// const v2: FunctionParamReturnType<typeof fn2> = 's' // number | { (a: number): number } | boolean;
// const v3: FunctionParamReturnType<typeof fn3> = 's' //{ (a: string): string } | { (a: number): number } | boolean;
interface IUser {
    name: string
}

// type Arr = [() => IUser, () => number | null];
//
// //const arr: Arr = [() => ({name: 'Ihor'}), () => 2];
//
// type FirstReturnType<T> =
//     T extends   [infer U, ...unknown[]]
//         ? U extends (...args: unknown[]) => infer R
//             ? R
//             :never
//         : never
//
// const v4: FirstReturnType<Arr> = {name: 'Maksim'};

// eslint-disable-next-line @typescript-eslint/ban-types
// type NonFunction<T> = T extends Function ? never : T;
// // eslint-disable-next-line @typescript-eslint/ban-types
// type FunctionParamReturnType<T extends Function> = T extends (...args: infer U) => infer R
//     ? NonFunction<U[Exclude<keyof U, 'length'>]> | R
//     : never;
//
// function fn1(_a: number, _b: boolean, _user: IUser) {
//     return 's'
// }
//
// const v11: FunctionParamReturnType<typeof fn1> = {a: 1};

type SomeType<T> = T extends Array<infer U> ? SomeType<U> : T;

function deepFlatten<Z extends readonly unknown[]>(_x: Z): SomeType<Z>[] {
    throw new Error('')
}

const arr1: number[]  = deepFlatten([1,2,3]);
const arr2: number[]  = deepFlatten([[1],[2],3]);
const arr3: number[]  = deepFlatten([[[1]],[2,3],4]);
