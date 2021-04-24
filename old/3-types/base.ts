interface UserAccount {
    firstName: string;
    age: number;
}

//
// const person: UserAccount = UserAccount;
const user: UserAccount = {
    firstName: 'Ihor',
    age: 35
}
//
// const user1: UserAccount = user as UserAccount;

//
// const person: (typeof user) = user;

// const el: HTMLElement;
// const div: HTMLDivElement = el as HTMLDivElement;

// const obj: typeof user= {
//     firstName: 'Oleg',
//     age: 15,
// }
// const sn: string | number | UserAccount = user;

let num: number | null = 6;
num = 0b0101;
num = NaN;
num = null;
// num.toFixed();


let str: string = 'str';
str = `${num}`;

let bool: boolean = true;
bool = false;

const nill: null = null;
const und: undefined = undefined;

const big: bigint = 4n;

const key1 = Symbol('key1');
const key2: unique symbol = Symbol('key2');

const strictObj = {
    [key1]: 100,
    [key2]: 100,
}

const v1 = strictObj[key1];

function onlyKey1(_value: typeof key1) {

}

onlyKey1(key2);
