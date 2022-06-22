const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $('.show.Success');
const warningBtn = $('.show.Warning');
const errorBtn = $('.show.Error');

const listBtn = $$('button');

listBtn.forEach(function(btn) {
    btn.onclick = function() {
        addToast(btn.name);
    }
})

const toasts = {
    success: {
        icon: '<i class="fa-solid fa-circle-check"></i>',
        message: 'This is a success message !',
    },
    warning: {
        icon: '<i class="fa-solid fa-circle-exclamation"></i>',
        message: 'This is a warning message !',
    },
    error: {
        icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
        message: 'This is a error message !',
    }
}

function addToast(status) {
    let toast = document.createElement('div');
    toast.className = `toast toast-${status}`;

    toast.innerHTML = `
            <span class="span-left span-${status}"></span>
            ${toasts[status].icon}
            <span class="toast-content">${toasts[status].message}</span>
            <span class="loading loading-${status}"></span>
    `

    let Toasts = document.getElementById('toast');
    Toasts.appendChild(toast);

    setTimeout(function() {
        toast.style.animation = 'slide-hide 1s ease forwards';
    } , 3000)
    setTimeout(function() {
        toast.remove();
    } , 4000)
}