// get total
// Create product
// Save local storage   
// clear input
// read
// count
// delete
// update
// search
// clean data


// get total

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');



function getTotal() {
     if(price.value != '') {
        let result = (+price.value + +ads.value + +ads.value ) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = 'green';
     }
     else {
        total.innerHTML = '';
        total.style.backgroundColor = 'rgb(152, 18, 3)';
     }
}
   

// Create product

let Dataprod ;

if (localStorage.Product != null) {
    Dataprod = JSON.parse(localStorage.getItem('Product'));
}
else {
    Dataprod = [];
}



submit.onclick = function() {
    let newprod = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }
    Dataprod.push(newprod);
    localStorage.setItem('Product',JSON.stringify(Dataprod));
}
