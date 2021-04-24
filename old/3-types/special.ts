let anyType: any = null;
anyType.a.a = 1;
anyType['a'] = 1;
anyType();

let unkType: unknown = {a: 1};
unkType = () => {
};
unkType = 'str';

unkType.a = 2;
unkType = 1;
unkType.a.b = 1;
unkType['a'] = 1;
unkType();


let v: void = undefined;

function log(p: unknown): void {
    console.log(p);
}

log(2 + 3)
