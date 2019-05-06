class List {
    constructor() {
        this.add = this.addToList();
        this.complete = this.completeListItem();
        this.remove = this.removeFromList();
    }

    addToList() {
        const app = document.querySelector('.app');
        const input = document.querySelector('.inputItem');

        const itemUL = document.createElement('ul');
        itemUL.className = 'itemUL';
        const itemLI = document.createElement('li');
        itemLI.className = 'itemLI';
        itemLI.innerHTML = input.value;
        const completeItem = document.createElement('button');
        completeItem.className = 'completeItem';
        completeItem.innerHTML = '&#10003';
        const removeItem = document.createElement('button');
        removeItem.className = 'removeItem';
        removeItem.innerHTML = `Remove`;
    
        //Appends elements
        if (input.value !== ''){
            app.appendChild(itemUL);
            itemUL.appendChild(itemLI);
            itemUL.prepend(completeItem);
            itemUL.appendChild(removeItem);
        } else {
            alert('You must specify an item to add');
        }

        input.value = ''; //Clears input field after adding item
    }

    //Cross out completed items
    completeListItem() {
        const complete = document.querySelector('.completeItem');
        const item = document.querySelector('.itemLI');

        complete.addEventListener('click', (e) => {
            e = item;
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
    }

    //Removes item from list
    removeFromList() {
        const remove = document.querySelector('.removeItem');
        const ul = document.querySelector('.itemUL');

        remove.addEventListener('click', (e) => {
            ul.remove(e);
        })
    }
}