// get total     #
// Create product      #
// Save local storage       #
// clear input      #
// read      #
// count
// delete Item      #
// update Item
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

let DataProd ;

if (localStorage.products != null) { 
    DataProd = JSON.parse(localStorage.getItem('products'));
}
else {
    DataProd = [];
}


submit.onclick = function() {
   
    let products = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value
    }

    // Count
    if (products.count > 1){
        for (let i = 0; i < products.count; i++) {
            DataProd.push(products);
        }
    }
    else {
        DataProd.push(products);
    }
    
    localStorage.setItem('products', JSON.stringify(DataProd));

    
    clearInput() //clear input
    showData () //refresh data
}

// localStorage.clear();



//clear input

function clearInput() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    category.value = '';
}






//read 

showData (); //refresh data

function showData () {

    let tbody = '';

    for (let i = 0; i < DataProd.length; i++) {
        tbody += `
        <tr>
            <td>${i}</td>
            <td>${DataProd[i].title}</td>
            <td>${DataProd[i].price}</td>
            <td>${DataProd[i].taxes}</td>
            <td>${DataProd[i].ads}</td>
            <td>${DataProd[i].discount}</td>
            <td>${DataProd[i].total}</td>
            <td>${DataProd[i].count}</td>
            <td>${DataProd[i].category}</td>
            <td>
            <button id="edit">Edit</button>
            <button id="delete" onclick="deleteItem(${i})">Delete</button>
            </td>
            </tr>
        `
    }

    document.getElementById('tbody').innerHTML = tbody;

    //Delete All Button
    let DeleteBtn = document.getElementById('DeleteAll');
    if (DataProd.length > 0) {
        DeleteBtn.innerHTML = `<button onclick='deleteAll()' class='Bigbtn'>Delete All (${DataProd.length})</button>`
    }
    else {
        DeleteBtn.innerHTML = '';
    }
}








//delete Item

function deleteItem(i) {
    DataProd.splice(i ,1);
    localStorage.products = JSON.stringify(DataProd);
    showData(); //refresh data
}




// delete all

function deleteAll() {
    localStorage.clear();
    DataProd.splice(0);
    showData(); //refresh data
}




