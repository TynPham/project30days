const searchBtn = document.querySelector('.search-box-btn');
searchBtn.onclick = function() {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
}