const carMake = document.getElementById("make");
const carModel = document.getElementById("model");
const carYear = document.getElementById("year");
const carPrice = document.getElementById("price");
const carPosition = document.getElementById("position");
const addCarBtn = document.querySelector(".addCar");
const clearCarBtn = document.querySelector(".clearCar");

const productList = document.querySelector(".products-list");

const productListArray = []

addCarBtn.addEventListener("click", addProduct);
clearCarBtn.addEventListener("click", clearProductList);

function addProduct() {
    const make = carMake.value;
    const model = carModel.value;
    const year = carYear.value;
    const price = carPrice.value;
    const position = carPosition.value;

    if (!make || !model || !year || !price || !position) {
        alert('Заполните все поля');
        return;
    }

    const product = {
        make: make,
        model: model,
        year: year,
        price: price,
        position: position,
    };

    productListArray.push(product);
    carMake.value=""
    carModel.value=""
    carYear.value=""
    carPrice.value=""
    carPosition.value=""
    clearProductListArray();
}

function clearProductListArray() {
    productList.innerHTML = '';
    productListArray.forEach((prod, index) => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `Марка: <b>${prod.make}</b>, Модель: <b>${prod.model}</b>, Год выпуска: <b>${prod.year}</b>, Цена: <b>${prod.price}</b>, Позиция: <b>${prod.position}</b>   `;
        
        const trashButton = document.createElement('button');
        const trashIcon = document.createElement('img');
        trashIcon.src = './img/trashIcon.png';
        trashIcon.alt = 'Удалить';
        trashIcon.style.width = '20px';    
        trashButton.appendChild(trashIcon);

        trashButton.onclick = function() {
            productListArray.splice(index, 1);
            clearProductListArray();
        };

        productItem.appendChild(trashButton);
        productList.appendChild(productItem);
    });
}

function clearProductList() {
    productListArray.length = 0;
    productList.innerHTML = '';
}
