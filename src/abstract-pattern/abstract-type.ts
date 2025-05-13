// abstruct product
export interface Button{
    render(): void;
}

export interface Checkbox {
    check(): void;
}


// Abstract factory instance
export interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}
