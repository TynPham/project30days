const preview = document.querySelector('.preview');
const mypicture = document.querySelector('#mypicture');
const error = document.querySelector('.error');

mypicture.addEventListener('change' , function(e) {
    let file = e.target.files[0];
    if (file.size / (1024 * 1024) > 5) {
        error.innerText = 'Dung luong file khong duoc vuot qua 5mb';
        return;
    }
    else if (file.type !== 'image/jpeg') {
        error.innerText = 'File phai co duoi la jpg';
        return;
    }
    else {
        let img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    }
})
preview.onclick = function() {
    error.innerText = '';
}