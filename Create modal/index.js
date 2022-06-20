const openBtn = document.querySelector('.Modal__button-btn');
const Modal = document.querySelector('.Modal__overlay');
const Close = document.querySelector('.Modal__header i');
const closeBtn = document.querySelector('.Modal__footer-btn');
function open_close() {
    Modal.classList.toggle('open');
}

openBtn.addEventListener('click' , open_close);
Modal.addEventListener('click' , function(e) {
    if (e.target === e.currentTarget) {
        open_close();
    }
});
Close.addEventListener('click' , open_close);
closeBtn.addEventListener('click' , open_close);