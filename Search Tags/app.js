const content = document.querySelector('.Search-Tags-content');
const input = document.querySelector('.content-input');
const removeBtn = document.querySelector('.Search-Tags-removeBtn');

var Tags = ['nodejs' , 'reactjs'];

function render() {
    content.innerHTML = '';
    Tags.forEach(function(tag , index) {
        content.innerHTML += `
            <li class="content-items">
                ${tag}
                <i class="fa-solid fa-xmark" onclick = remove(${index})></i>
            </li>
        `
    })
    content.appendChild(input);
}

function remove(index) {
    Tags.splice(index , 1);
    render();
    input.focus();
}
render();

input.addEventListener('keydown' , function(e) {
    if (e.keyCode === 13) {
        const tag = input.value.trim()
        if (tag != '' && !Tags.includes(tag)) {
            Tags.push(tag);
            render();
        }
        input.value = '';
        input.focus();
    }
})
removeBtn.onclick = function() {
    Tags = [];
    render();
    input.focus();
}
