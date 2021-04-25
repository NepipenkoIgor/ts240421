interface IPerson {
    readonly name: string;
    age: number;
    info: { male: boolean };
    subjects?: string[]
}

type NotReadonly<T> = {
    -readonly [P in keyof T]-?: T[P]
}

p.name = 'Egor'

type KeysWithoutSpecialType<T, E> = {
    [P in keyof T]: E extends T[P] ? never : P
}[keyof T]

/*
*  name: name
* age: age
* info : never
* subjects: subjects
*
* name | age  | subjects
* */
const k: KeysWithoutSpecialType<IPerson, 'Ihor'> = 'info'

type RemoveByFieldName<T, E> = {
    [P in keyof T as Exclude<P, E>]: T[P]
}


const p: RemoveByFieldName<NotReadonly<IPerson>, 'info' | 'subjects' > = {
    name: 'Ihor',
    age: 35
}



type CapitalizedKeysAndGetter<T> = {
    [P in keyof T as `get${Capitalize<string & P>}`]: ()=> T[P]
}

const getUser: CapitalizedKeysAndGetter<NotReadonly<IPerson>> = {
    getName: () => 'Ihor',
    getAge: () => 35,
    getInfo: () => ({male: true}),
    getSubjects: () => ['TS']
}
