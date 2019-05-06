class Title {
    constructor() {
        this.title = this.createTitle();
    }

    createTitle()  {
        const app = document.querySelector('.app');
        const title = document.createElement('h1');
        title.setAttribute('class', 'title');
        title.innerHTML = `Check List`;
        app.append(title);
    }
}

const appTitle = new Title();