class BasePoint {

    #p: number = 1;

    // public constructor(x: number)
    // public constructor(x: number, y: number)
    public constructor(
        public readonly x: number,
        protected y: number,
        private z: number
    ) {

    }

    onInit() {
        //this.x = 1;
        this.y = 1;
        this.z = 1;
        this.#p = 1;
    }

    sum(): number {
        return this.x + this.y + this.z + this.#p;
    }
}

class Point extends Timestamp(Tagged(BasePoint)) {
    constructor(x: number, y: number, z: number) {
        super(x, y, z);
    }

    sum(): number {
        return super.sum();
    }
}

// const p = new Point(1);
const p1 = new Point(1, 2, 3);

console.log(p1.timestamp);
console.log(p1.tags);
console.log(p1.sum());

class Singleton {

    private static instance: Singleton

    private constructor() {
    }

    public static geInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance
    }
}


const inst1 = Singleton.geInstance();
const inst2 = Singleton.geInstance();
const inst3 = Singleton.geInstance();
const inst4 = Singleton.geInstance();

console.log(inst2 === inst4);


type Constructable = new (...args: any[]) => any;

function Timestamp<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public timestamp = new Date();
    }
}

function Tagged<BaseClass extends Constructable>(BC: BaseClass) {
    return class extends BC {
        public tags = ['ts', 'rxjs'];
    }
}


abstract class AbstractControl<Model = string> {
    public abstract model: Model;

    public abstract getModel(): Model;

    public onFocus() {

    }

    public onBlur() {

    }
}

abstract class AbstractControlWithSet<T = string> extends AbstractControl<T> {

    public abstract setModel(model: T): void;
}

interface IDropDownItem {
    text: string;
    value: string;
}


class MHDropDown extends AbstractControlWithSet<IDropDownItem[]> {
    public model: IDropDownItem[] = [];

    public getModel(): IDropDownItem[] {
        return [];
    }

    public setModel(_model: IDropDownItem[]) {
    }
}

class MHInput extends AbstractControlWithSet {
    public model: string = '';

    public getModel(): string {
        return '';
    }

    public setModel(_model: string) {
    }
}
