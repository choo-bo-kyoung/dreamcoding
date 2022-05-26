'use strick'

const input = document.querySelector('#list_txt_input');
const addBtn = document.querySelector('.btn-list-input');
const items = document.querySelector('ul');
const form = document.querySelector('.new-form');

form.addEventListener('submit', evnet => {
    event.preventDefault();
    onAdd();
})

function onAdd(){
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block:'center'});
    input.value ='';
    input.focus();
}

let id = 0;
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'list');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <span class="list-txt">${text}</span>
        <button class="btn-list-complete" data-id=${id}>완료</button>
    `;
    // const itemTxt = document.createElement('span');
    // itemTxt.setAttribute('class', 'list-txt');
    // itemTxt.innerText = text;
    // const itemDel = document.createElement('button');
    // itemDel.setAttribute('class','btn-list-complete');
    // itemDel.innerText = '완료';
    // itemDel.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // });

    // itemRow.appendChild(itemTxt);
    // itemRow.appendChild(itemDel);
    id++;
    return itemRow;
}

// addBtn.addEventListener('click', () => {
//     onAdd();
// });

// input.addEventListener('keydown', (event) => {
//     if(event.key === 'Enter'){
//         onAdd();
//     }
// });

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.list[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});