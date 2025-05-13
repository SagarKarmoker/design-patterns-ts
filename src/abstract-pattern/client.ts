import { Button, Checkbox, GUIFactory } from "./abstract-type";
import { MacFactory, WindowsFactory } from "./concrete";

// The client code uses only the abstract factory and abstract products.
class Application {
    private readonly button: Button;
    private readonly checkbox: Checkbox;

    constructor(factory: GUIFactory) {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    renderUI(): void {
        this.button.render();
        this.checkbox.check();
    }
}


// usgae
function main() {
    const os = "Windows"

    let factory: GUIFactory;

    if(os === 'Windows'){
        factory = new WindowsFactory();
    }
    else if(os === 'Mac'){
        factory = new MacFactory();
    }
    else{
        throw new Error('Unknown OS');
    }

    const app = new Application(factory);
    app.renderUI();
}

main();