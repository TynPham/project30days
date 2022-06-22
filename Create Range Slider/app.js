const body = document.querySelector('body');
const value = document.querySelector('.range__body span');
const range = document.querySelector('.range__body');
const range_bar = document.querySelector('.range__body-bar');

function setRangeBar(percent) {
    body.style.backgroundColor = `rgba(0 , 0 , 0 , ${percent / 100})`;
    value.innerText = percent + '%';
    range_bar.style.width = `${percent}%`;
}

range.addEventListener('mousemove' , function(e) {
    let percent = Math.round((e.pageX - this.offsetLeft) / this.offsetWidth * 100);
    setRangeBar(percent);
})
setRangeBar(50);