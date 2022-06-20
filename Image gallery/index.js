const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.images img');
const galleryImg = document.querySelector('.gallery-inner img');
const closeBtn = document.querySelector('.gallery-icon');
const backBtn = document.querySelector('.gallery-control.left');
const nextBtn = document.querySelector('.gallery-control.right');

console.log(nextBtn , backBtn);
var currentindex;

function showGallery() {
    if (currentindex === images.length - 1) {
        nextBtn.classList.add('hide');
    } 
    else {
        nextBtn.classList.remove('hide');
    }

    if (currentindex === 0) {
        backBtn.classList.add('hide');
    } 
    else {
        backBtn.classList.remove('hide');
    }

    galleryImg.src = images[currentindex].src;
    gallery.classList.add('show');
}
images.forEach((items , index) => {
    items.onclick = function() {
        currentindex = index;
        showGallery();
    }
})
closeBtn.onclick = function() {
    gallery.classList.remove('show');
}
nextBtn.onclick = function() {
    if (currentindex < images.length - 1) {
        currentindex++;
    }
    showGallery();
}
backBtn.onclick = function() {
    if (currentindex> 0) {
        currentindex--;
    }
    showGallery();
}
document.addEventListener('keydown' , function(e) {
    if (e.keyCode === 27) {
        gallery.classList.remove('show');
    }
    if (e.keyCode === 37) {
        if (currentindex > 0) {
            currentindex--;
        }
        showGallery();
    }
    if (e.keyCode === 39) {
        if (currentindex < images.length - 1) {
            currentindex++;
        }
        showGallery();
    }
})
