const pressBtn = document.querySelector('.press');
const box = document.querySelector('.box');
const ekey = document.querySelector('.card.key .card-content');
const elocation = document.querySelector('.card.location .card-content');
const ewhich = document.querySelector('.card.which .card-content');
const ecode = document.querySelector('.card.code .card-content');
const result = document.querySelector('.result');

document.addEventListener('keydown' , (e) => {
    let spaceName = e.keyCode === 32 ? 'Space' : e.key;

    ekey.innerText = spaceName;
    elocation.innerText = e.location;
    ewhich.innerText = e.which;
    ecode.innerText = e.code;
    result.innerText = e.which;

    pressBtn.classList.add('hide');
    box.classList.remove('hide');
})