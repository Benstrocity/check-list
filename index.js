const createList = (() => {
    //Assigning variables to elements and classNames
    const app = document.querySelector('.app');
    const title = document.createElement('h1');
    title.className = 'title';
    const inputItem = document.createElement('input');
    inputItem.className = 'inputItem';
    const addItem = document.createElement('button');
    addItem.className = 'addItem';
    title.innerHTML = `Check List`;
    inputItem.placeholder = `Enter New Item`;
    addItem.innerHTML = `Add Item`;
    const version = document.createElement('p');
    version.className = 'version';
    version.innerHTML = 'v1.0';

    app.appendChild(title);
    app.appendChild(inputItem);
    app.appendChild(addItem);
    app.appendChild(version);

    //Adds new item to the list
    addItem.addEventListener('click', () => {
        const itemUL = document.createElement('ul');
        itemUL.className = 'itemUL';
        const itemLI = document.createElement('li');
        itemLI.className = 'itemLI';
        itemLI.innerHTML = inputItem.value;
        const completeItem = document.createElement('button');
        completeItem.className = 'completeItem';
        completeItem.innerHTML = '&#10003';
        const removeItem = document.createElement('button');
        removeItem.className = 'removeItem';
        removeItem.innerHTML = `Remove`;
    
        //Appends elements
        if (inputItem.value !== ''){
            app.appendChild(itemUL);
            itemUL.appendChild(itemLI);
            itemUL.prepend(completeItem);
            itemUL.appendChild(removeItem);
        } else {
            alert('You must specify an item to add');
        }

        //Checkbox to cross out completed items without deleting them
        completeItem.addEventListener('click', (e) => {
            e = itemLI;
            if (e.style.textDecoration !== 'line-through') {
                e.style.textDecoration = 'line-through';
                e.style.fontStyle = 'italic';
                completeItem.className = 'completeItemTrue';
            } else {
                e.style.textDecoration = 'none';
                e.style.fontStyle = 'normal';
                completeItem.className = 'completeItem';
            }
        })

        inputItem.value = ''; //Clears input field after adding item
    
        //Removes item from list
        removeItem.addEventListener('click', (e) => {
            itemUL.remove(e);
        })
    })
})();


