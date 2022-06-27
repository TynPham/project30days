const listCounter = document.querySelectorAll('.Counter-Up__items');

function load(items) {
    let count = 0;
    let itemsContent = items.querySelector('.items-content');
    let times = parseInt(itemsContent.innerText);
    let jumb = times / 100;
    let set = setInterval(function() {
        count += jumb;
        if (count > times) {
            clearInterval(set);
            itemsContent.innerText = times;   
        }
        else { 
            itemsContent.innerText = Math.round(count);
        }
    } , 1)
}

listCounter.forEach(function(counter) {
    load(counter);
})