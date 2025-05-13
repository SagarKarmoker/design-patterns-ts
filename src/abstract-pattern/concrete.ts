import { Button, Checkbox, GUIFactory } from "./abstract-type";

// concrete product
class WindowsButton implements Button {
    render(): void {
        console.log("Windows button rendered");
    }
}

class MacButton implements Button {
    render(): void {
        console.log("Mac button rendered");
    }
}

class WindowsCheckbox implements Checkbox {
    check(): void {
        console.log("Windows checkbox checked");
    }
}

class MacCheckbox implements Checkbox {
    check(): void {
        console.log("Mac checkbox checked");
    }
}


// conerete factory
export class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton()
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

export class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}