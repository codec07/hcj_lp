function newTodo() {
    var todoTitle = document.getElementById('inps').value;

    var newItem = document.createElement('div');
    newItem.classList.add('item');

    var itemTitle = document.createElement('h3');
    itemTitle.innerHTML = todoTitle

    newItem.appendChild(itemTitle);

    var holder = document.getElementById('app');
    holder.appendChild(newItem);
}