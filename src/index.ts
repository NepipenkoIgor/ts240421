import { CheckTypeInRuntime, Debounce, LogInputValue, SavePersistence, Range, Validate } from './decorators';

class SearchComponent {

    @CheckTypeInRuntime
    @SavePersistence
    public inputValue!: string;

    public constructor(
        private readonly inputEl: HTMLInputElement
    ) {
        this.inputEl.addEventListener('input', this.onSearch.bind(this))
        console.log(this.inputValue);
    }

    @Debounce(500)
    @LogInputValue
    private onSearch(_e: Event) {
        const inputRef = _e.target as HTMLInputElement;

        this.inputValue = inputRef.value
    }
}

const inputEl: HTMLInputElement = document.querySelector('input') as HTMLInputElement;
new SearchComponent(inputEl);


// setTimeout(() => {
//     (inst.inputValue as any) = 2321;
// }, 7000)


class Calculator {
    @Validate
    public updatePercentage(
        _oldValue: number,
        @Range(30, 70) _newValue: number
    ) {
        console.log(_oldValue, _newValue)
    }
}

const inst = new Calculator();

inst.updatePercentage(50, 50);
setTimeout(() => {
    inst.updatePercentage(10, 10);
}, 7000)
