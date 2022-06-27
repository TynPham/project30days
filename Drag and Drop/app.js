const listBox = document.querySelectorAll('.box');
const img = document.querySelector('.box-img');
function inandout() {
    img.addEventListener('dragstart' , function() {
        this.classList.add('border');
    })
    img.addEventListener('dragend' , function() {
        this.classList.remove('border');
    })
}
function draganddrop(items) {
    items.addEventListener('dragover' , function(e) {
        e.preventDefault();
        this.appendChild(img);
    })
}

listBox.forEach(function(items) {
    draganddrop(items);
})
inandout();