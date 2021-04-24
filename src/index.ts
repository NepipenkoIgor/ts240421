/** Object/Functions**/
//
// interface IPoint {
//     x: number;
//     y: number;
// }
//
// type TPoint = {
//     x: number;
//     y: number;
// }
//
//
// interface ISum {
//     (a: number, b: number): number
// }
//
// type TSum = (a: number, b: number) => number
//
//
// const p1: TPoint = {
//     x: 1,
//     y: 1
// }
//
// const sum: TSum = (a: number, b: number) => {
//     return a + b;
// }

/**extends*/
// type TX = {
//     x: number
// }
//
// type TY = {
//     y: number
// }
//
// interface IX {
//     x: number
//     z: { c2: string };
// }
//
// interface IY {
//     z: { c1: number };
//     y: number
// }
//
//
// interface IPoint extends IX, IY {
//     z: { c1: number, c2: string }
// }
//
// type TPoint = TX & IY;
//
// const p: IPoint = {
//     x: 1,
//     y: 1,
//     z: {c1: 1, c2: '2'}
// }

/*implements*/

// type TX = {
//     x: number
// }
//
// type TY = {
//     y: number
// }
//
// interface IX {
//     x: number
// }
//
// interface IY {
//     y: number
// }
//
// class Point implements IX, TY {
//     public x = 1;
//     public y = 1;
// }

type snb = string | number | boolean;


interface IUser {
    name: string;
    age: number;
}


const user: IUser = {
    name: 'Ihor',
    age: 35,
    male: true
}









interface IUser {
    male: boolean
}


interface IAdmin extends IUser{
    subject: string[]
}

type UserState = IUser | IAdmin;


