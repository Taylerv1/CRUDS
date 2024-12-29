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
   