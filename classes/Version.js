class Version {
    constructor() {
        this.version = this.createVersion();
    }

    createVersion() {
        const app = document.querySelector('.app');

        const version = document.createElement('p');
        version.setAttribute('class', 'version');
        version.innerHTML = `v1.1`;

        app.append(version);
    }
}

const version = new Version();