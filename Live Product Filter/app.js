const input = document.querySelector('.search-input');
const listproduct = document.querySelector('.container__listproduct');


function loadListProduct() {
    let api = 'https://fakestoreapi.com/products';
    fetch(api)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        listproduct.innerHTML = '';
        data.forEach(function(item) {
            let li = document.createElement('li');
            li.classList.add('listproduct-item');
            li.innerHTML = `
                    <img src="${item.image}" alt="">
                    <div class="listproduct-item-content">
                        <span class="item-title">${item.category}</span>
                        <span class="item-value">${item.price}$</span>
                    </div>
            `
            listproduct.appendChild(li);
        })
    })
}

loadListProduct();
console.log(listproduct);
input.addEventListener('input' , function(e) {
    const listProductItems = document.querySelectorAll('.listproduct-item')
    listProductItems.forEach(function(product) {
        if (!product.innerText.includes(e.target.value.trim())) {
            product.classList.add('hide');
        }
        else {
            product.classList.remove('hide');
        }
    })
})

