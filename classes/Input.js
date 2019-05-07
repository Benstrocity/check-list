class Input {
    constructor() {
        this.input = this.createInputs();
    }

    createInputs() {
        const app = document.querySelector('.app');

        const input = document.createElement('input');
        input.setAttribute('class', 'inputItem');
        input.placeholder = `Enter New Item`;

        const add = document.createElement('button');
        add.setAttribute('class', 'addItem');
        add.innerHTML = `Add Item`;

        app.append(input);
        app.append(add);

        add.addEventListener('click', () => {
            new List();
        })
    }
}

const inputItems = new Input();