const digit: 1 | 2 | 3 | 4 | 5 = 10; // union type

// type baseType = 'ease';
// type direction = 'in' | 'out'
//
// interface AnimationOptions {
//     delay: number,
//     type:  `${baseType}-${direction}` // 'ease-in' | 'ease-out'
// }
//
// function animate(_options: AnimationOptions = {delay: 1000, type: 'ease-out'}) {
//
// }
//
//
// animate({delay: 1000, type: 'ease-in'})


enum AnimationTypes {
    EASE_IN = 'ease-in',
    EASE_OUT = 'ease-out',
}

interface AnimationOptions {
    delay: number,
    type: AnimationTypes // 'ease-in' | 'ease-out'
}

function animate(_options: AnimationOptions = {delay: 1000, type: AnimationTypes.EASE_IN}) {

}


animate({delay: 1000, type: AnimationTypes.EASE_IN})

let a: keyof typeof AnimationTypes = 1;

Object.keys(AnimationTypes).map((item: string) => {
    return AnimationTypes[item as any as keyof typeof AnimationTypes]
})


const str: HTMLElement = HTMLElement as any as string;


type UserAccount = {
    firstName: string;
    age: number;
}

const userKeys: 'firstName' | 'age' = 'age'


class Point {
}

const p: Point = Point;


interface IFact {
    factId: string;
    userId: number;
}

const dataList: { action: string, data: IFact }[] = [];

const uniqueValue = (): keyof IFact=> {
    return 'factId'
}

dataList.map((item: { action: string, data: IFact }) => {
    if (item.data[uniqueValue()]) {

    }
    return item;
})
