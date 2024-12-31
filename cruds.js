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

let mood = 'create';
let temp;



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


showData () ;

submit.onclick = function() {
   
    let products = {
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }


   if(title.value != '' && price.value != '' && category.value != '' && products.count < 100) {
    // Count
    if (mood === 'create') {
    if (products.count > 1){
        for (let i = 0; i < products.count; i++) {
            DataProd.push(products);
        }
    }
    else {
        DataProd.push(products);
    }}

    else {
        DataProd[temp] = products;
        mood = 'create';
        submit.innerHTML = 'Create';
        count.style.display = 'block';


    }
    clearInput(); //clear input
}
    localStorage.setItem('products', JSON.stringify(DataProd));

    showData (); //refresh data
    
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


function showData () {

    let tbody = '';

    for (let i = 0; i < DataProd.length; i++) {
        tbody += `
        <tr>
            <td>${i+1}</td>
            <td>${DataProd[i].title}</td>
            <td>${DataProd[i].price}</td>
            <td>${DataProd[i].taxes}</td>
            <td>${DataProd[i].ads}</td>
            <td>${DataProd[i].discount}</td>
            <td>${DataProd[i].total}</td>
            <td>${DataProd[i].count}</td>
            <td>${DataProd[i].category}</td>
            <td>
            <button id="edit" onclick="updateItem(${i})">Edit</button>
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

    getTotal();
}








//delete Item

function deleteItem(i) {
    DataProd.splice(i ,1);
    localStorage.products = JSON.stringify(DataProd);
    showData(); //refresh data
}


//update Item

function updateItem(i) {
    title.value = DataProd[i].title;
    price.value = DataProd[i].price;
    taxes.value = DataProd[i].taxes;
    ads.value = DataProd[i].ads;
    discount.value = DataProd[i].discount;
    total.innerHTML = DataProd[i].total;
    count.style.display = 'none';   
    category.value = DataProd[i].category;
    submit.innerHTML = 'Update';
    getTotal();
    mood = 'update';
    temp = i;
    scroll({
        top: 0,
        behavior: 'smooth',
    })

}



// delete all

function deleteAll() {
    localStorage.clear();
    DataProd.splice(0);
    showData(); //refresh data

    // Code by me

    mood = 'create';
    submit.innerHTML = 'Create';
    count.style.display = 'block';
    clearInput();
    getTotal(); 
}







// Serach



let searchMood = 'Title';

function searchButtons(id) {

    let search = document.getElementById('search');
    SeachEmpty = search;

    if (id === 'searchTitle') {
        searchMood = 'Title';
    }

    else {
        searchMood = 'Category';
    }

search.placeholder = `Search by ${searchMood}`;
search.focus();
search.value = '';
showData();

}




function search(value) {
 let tbody = '';
    for(let i = 0 ; i < DataProd.length; i++) {
    if (searchMood === 'Title')  {
         if (DataProd[i].title.includes(value.toLowerCase())) {
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
            <button id="edit" onclick="updateItem(${i})">Edit</button>
            <button id="delete" onclick="deleteItem(${i})">Delete</button>
            </td>
            </tr>
        `
         }
    }



    else{
        if (DataProd[i].category.includes(value.toLowerCase())) {
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
            <button id="edit" onclick="updateItem(${i})">Edit</button>
            <button id="delete" onclick="deleteItem(${i})">Delete</button>
            </td>
            </tr>
        `
         }
    }

    
}

document.getElementById('tbody').innerHTML = tbody;

}



// Finish

