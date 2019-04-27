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

    app.appendChild(title);
    app.appendChild(inputItem);
    app.appendChild(addItem);

    //Adds new item to the list
    addItem.addEventListener('click', () => {
        const itemUL = document.createElement('ul');
        itemUL.className = 'itemUL';
        const itemLI = document.createElement('li');
        itemLI.className = 'itemLI';
        itemLI.innerHTML = inputItem.value;
        const checkBox = document.createElement('input');
        checkBox.className = 'checkBox';
        checkBox.type = 'checkbox';
        const removeItem = document.createElement('button');
        removeItem.className = 'removeItem';
        removeItem.innerHTML = `Remove`;
    
        //Appends elements
        if (inputItem.value !== ''){
            app.appendChild(itemUL);
            itemUL.appendChild(itemLI);
            itemLI.appendChild(removeItem);
        } else {
            alert('You must specify an item to add');
        }

        //Checkbox to cross out completed items without deleting them
        /* checkBox.addEventListener('click', () => {
            if (itemLI.style.textDecoration !== 'line-through') {
                itemLI.style.textDecoration = 'line-through';
            } else {
                itemLI.style.textDecoration = 'none';
            }
        })*/

        inputItem.value = ''; //Clears input field after adding item
    
        //Removes item from list
        removeItem.addEventListener('click', (e) => {
            itemLI.remove(e);
        })
    })
})();


