const $ = document.querySelector.bind(document);

const form = $('form');
const input = $('.container-input');
const todolist = $('.container__todolist');

form.addEventListener('submit' , function(e) {
    e.preventDefault();
    
    let value = input.value.trim();
    if (value) {
        var li = document.createElement('li');
        li.classList.add('container__todolist-item');
        li.innerHTML = `
                        <span class="todolist-item-content">${value}</span>
                        <i class="fa-solid fa-trash-can"></i>
                    `
        todolist.appendChild(li);
        input.value = '';
    }

    li.onclick = function() {
        li.classList.toggle('complete');
    }
})