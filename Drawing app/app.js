var canvas = document.getElementById('canvas');  
var color = document.querySelector('input');
var eraser = document.querySelector('.eraser');
var size = document.querySelector('.value');
var reduce = document.querySelector('.reduce');
var increase = document.querySelector('.increase');
var clear = document.querySelector('.clear');
var save = document.querySelector('.save');


var ctx = canvas.getContext("2d");
var isdrawing = false;
var currentColor = '#000000';
var colorPaint;
var sizepaint = 5;
var isEraser = false;
var pointer1 = {
    x: 0,
    y: 0
}
var pointer2 = {
    x: 0,
    y: 0
}
canvas.addEventListener('mousedown' , function(e) {
    pointer1.x = e.offsetX;
    pointer1.y = e.offsetY;
    
    isdrawing = true;
})
canvas.addEventListener('mousemove' , function(e) {
    if (isdrawing) {
        pointer2.x = e.offsetX;
        pointer2.y = e.offsetY;

        ctx.beginPath();
        ctx.arc(pointer1.x, pointer1.y, sizepaint, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint;
        ctx.fill()
    
        ctx.beginPath();
        ctx.moveTo(pointer1.x, pointer1.y);
        ctx.lineTo(pointer2.x, pointer2.y);
        ctx.strokeStyle = colorPaint;
        ctx.lineWidth =sizepaint*2;
        ctx.stroke();
        
    
        pointer1.x = pointer2.x;
        pointer1.y = pointer2.y;
    }

})
canvas.addEventListener('mouseup' , function(e) {
    isdrawing = false;
})

color.addEventListener('change' , function(e) {
    currentColor = e.target.value;
    colorPaint = currentColor;
})
eraser.addEventListener('click' , function() {
    isEraser = !isEraser;
    isEraser == true ? colorPaint = '#ffffff' : colorPaint = currentColor;
})
reduce.onclick = function() {
    if (sizepaint > 5) {
        sizepaint -= 5;
    }
    else {
        sizepaint = 5;
    }
    size.innerText = sizepaint;
}
increase.onclick = function() {
    if (sizepaint < 20) {
        sizepaint += 5;
    }
    else {
        sizepaint = 20;
    }
    size.innerText = sizepaint;
}
clear.onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
save.onclick = function() {
    save.href = canvas.toDataURL("image/png");
}