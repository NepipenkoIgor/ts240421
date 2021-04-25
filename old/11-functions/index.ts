// function average(a: number, b: number, c: number): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 3);
// average(1, 2, 's');
// const v: number = average(1, 2, 3);

// function average(a: number, b?: number, c?: number): string {
//     if(b === undefined){
//         b = 0;
//     }
//     if(c === undefined){
//         c = 0;
//     }
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 3);
// average(1, 2, 's');
// const v: number = average(1, 2, 3);

// function average(a: number, b: number = 0, c: number = 0): string {
//     const avg: number = (a + b + c) / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2);
// average(1, 2, 3);
// average(1, 2, 's');
// const v: number = average(1, 2, 3);

// function isString(arg: string | boolean | number): arg is string {
//     return typeof arg === 'string';
// }
//
// function isBoolean(arg: boolean | number): arg is boolean {
//     return typeof arg === 'boolean';
// }
//
export function average(a: string, b: number): string
export function average(a: number, b: string): string
export function average(a: number, b: number, c: number): string
export function average(...args: (number | boolean | string)[]): string {
    let total: number = 0;
    for (const arg of args) {
        if (isString(arg)) {
            total += Number(arg);
            continue;
        }
        if (isBoolean(arg)) {
            continue;
        }
        total += arg;
    }
    const avg: number = total / args.length;
    return `Average is ${avg}`;
}
//
// average(1);
// average(1, 2);
// average('1', 2);
// average(1, '2');
// average(1, 2, 3);
// average(1, 2, 3, 4, 4, 5);
// average(1, 2, '2', '4', 4);
// average(1, 2, '1');
// const v: number = average(1, 2, 3);


function getFullName(this: { name: string, age: number }) {
    return `${this.name}-${this.age}`;
}

const account = {
    name: 'Ihor',
    age: 35,
    getFullName
}

account.getFullName();
