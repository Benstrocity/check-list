class List {
    constructor() {
        this.add = this.addToList();
    }

    addToList() {
        const app = document.querySelector('.app');
        const input = document.querySelector('.inputItem');

        const itemUL = document.createElement('ul');
        itemUL.className = 'itemUL';
        const itemLI = document.createElement('li');
        itemLI.className = 'itemLI';
        itemLI.innerHTML = input.value;
        const complete = document.createElement('button');
        complete.className = 'completeItem';
        complete.innerHTML = '&#10003';
        const remove = document.createElement('button');
        remove.className = 'removeItem';
        remove.innerHTML = `Remove`;
    
        //Appends elements
        if (input.value !== ''){
            app.appendChild(itemUL);
            itemUL.appendChild(itemLI);
            itemUL.prepend(complete);
            itemUL.appendChild(remove);
        } else {
            alert('You must specify an item to add');
        }

        input.value = ''; //Clears input field after adding item

        complete.addEventListener('click', (e) => {
            e = itemLI;
            if (e.style.textDecoration !== 'line-through') {
                e.style.textDecoration = 'line-through';
                e.style.fontStyle = 'italic';
                complete.className = 'completeItemTrue';
            } else {
                e.style.textDecoration = 'none';
                e.style.fontStyle = 'normal';
                complete.className = 'completeItem';
            }
        })

        remove.addEventListener('click', (e) => {
            itemUL.remove(e);
        })
    }
}