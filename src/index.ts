// function fn(_a: any, _b) {
//
// }
//
// fn(123);
// fn(,{a: 1});

// interface/type/fn/class


// interface IUser<ID = number, GeneralInfo extends { male: boolean } = { male: boolean}> {
//     id: ID,
//     name: string,
//     info: GeneralInfo
// }
// interface IUser<ID = number, GeneralInfo extends { male: boolean } = { male: boolean}> {
//     id: ID,
//     name: string,
//     info: GeneralInfo
// }
//
// const user: IUser<string> = {
//     id: '1',
//     name: 'Ihor',
//     info: {
//         male: true
//     }
// }
//
//
// const admin: IUser<string, { male: boolean, subjects: string[] }> = {
//     id: '1',
//     name: 'Ihor',
//     info: {
//         subjects: ['TS', 'Angular'],
//         male: true
//     }
// }

interface IUser {
    name: string;
    age: number
}

interface IProduct {
    name: string;
    price: number
}

interface IState {
    user: IUser;
    products: IProduct[];
}


type Select<T> = <F extends keyof T>(state: T, field: F) => T[F];

const state: IState = {
    user: {name: 'Ihor', age: 35},
    products: [{name: 'IPhone XR', price: 100}]
}
const select: Select<IState> = (state, field) => state[field];

const user: IUser = select(state, 'user');
const products: IProduct[] = select(state, 'products');
