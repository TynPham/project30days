const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const listPictures = document.querySelectorAll('.listPicture li img');
const currentPicture = document.querySelector('.main img');

var currentIndex = 0;

function changeSlide(currentIndex) {
    currentPicture.src = listPictures[currentIndex].src;
    let currentPicturesActive = document.querySelector('.listPicture-items.active');
    currentPicturesActive.classList.remove('active');
    listPictures[currentIndex].parentElement.classList.add('active');
}

prev.onclick = function() {
    if (currentIndex === 0) {
        currentIndex = listPictures.length - 1;
        changeSlide(currentIndex);
    }
    else {
        currentIndex--;
        changeSlide(currentIndex);
    }
}
next.onclick = function() {
    if (currentIndex === listPictures.length - 1) {
        currentIndex = 0;
        changeSlide(currentIndex);
    }
    else {
        currentIndex++;
        changeSlide(currentIndex);
    }
}
listPictures.forEach(function(pictures , index) {
    pictures.onclick = function() {
        changeSlide(index);
    }
})