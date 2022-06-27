const homeTitle = document.querySelector('.home__title');
const homeContent = document.querySelector('.home__content');
const listItemsShow = document.querySelectorAll('.show');

window.onscroll = function() {
    listItemsShow.forEach(function(items) {
        showSlide(items);
    })
}

function showSlide(items) {
        let rect = items.getClientRects()[0];
        if (!(rect.bottom < 0 || rect.top > window.innerHeight)) {
            items.classList.add('start');
        }
        else {
            items.classList.remove('start');
        }
}

showSlide(homeTitle);
showSlide(homeContent);