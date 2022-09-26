'use strict';

const basket_info = document.querySelector(".htmlBasket");
const basket = document.querySelector(".basket");
const cartIcon = document.querySelector(".cartIcon");
const addButton = document.querySelectorAll(".featuredItem")
const basketTotalValue = document.querySelector(".basketTotalValue")

// Создаем необходимые переменные, массивы
let basketSave = {}
let htmlTotalCount = 0
let totalSumm = 0


// Добавление / удаление hidden
cartIcon.addEventListener('click', () => {
    if (basket.classList.contains('hidden')) {
        basket.classList.remove('hidden');
    } else {
        basket.classList.add('hidden');
    }
}
)

function returnHtmlForm(key, name, price, count) {
    return `
    <div class = "htmlBasketPageBlock">
    <div class = "htmlBasketPage">
        <span">${key}</span>
    </div>

    <div  class = "htmlBasketPage">
        <span>${name}</span>
    </div>

    <div class = "htmlBasketPage">
        <span>${price}</span>
    </div>

    <div class = "htmlBasketPage">
        <span>${count} </span>
    </div>

    <div class = "htmlBasketPage">
        <span >${Number(price) * Number(count)}</span>
    </div>
</div>
`;

}

// Функция добавления информации в словарь в паре "ключ: словарь" ИЛИ count + 1
function basketInfoAdd(self) {
    let featuredName = self.querySelector(".featuredName").textContent;
    let featuredPrice = self.querySelector('.featuredPrice').textContent;
    let objId = self.attributes[1].textContent;
    totalSumm += Number(featuredPrice)
    if (!basketSave[objId]) {
        basketSave[objId] = { id: objId, name: featuredName, price: featuredPrice, count: 1 };
    }
    else { basketSave[objId].count++ };
}

// Функция создание HTML
function htmlPaperFunction(basketSave) {
    window.htmlBasket = "" // Обнуляем html с информацией для корзины
    for (let [key, value] of Object.entries(basketSave)) {
        let productRow = returnHtmlForm(key, value.name, value.price, value.count)
        window.htmlBasket += productRow;

    }
}


// Вызывает функцию добавления информации в словарь И увеличивает счетчик корзины на 1
for (let el of addButton) {
    el.addEventListener('click', event => {
        if (!event.target.classList.contains('addToCart')) {
            return;
        }
        basketInfoAdd(el); // Функция добавления инф. в словарь.
        htmlTotalCount++; // Счетчик товаров
        // Выводит счетчик колличества обьектов в корзине
        document.querySelector(".productCounter").innerHTML = htmlTotalCount;

        htmlPaperFunction(basketSave); // Создает HTML отображения наполнения корзины
        basketTotalValue.innerHTML = totalSumm; // Счетчик сумму корзины
        basket_info.innerHTML = window.htmlBasket; // Отображает заготовленный HTML

        console.log(htmlBasket);
    })
}




// => Не удавшаяся попытка... :(

 // let htmlCount = []
        // let htmlPrice = []
        // let htmlName = []
        // function htmlLer(name, count, price) {
        //     htmlName.push(`${name}\n`,)
        //     htmlCount.push(`${count}\n`)
        //     htmlPrice.push(`$${price}\n`)
        //     totalSumm += Number(price);
        // }


        // for (let [key, value] of Object.entries(basketSave)) {
        //     htmlLer(value.name, value.count, value.price)
        // }


        // document.querySelector('.name').innerHTML = htmlName;
        // document.querySelector('.count').innerHTML = htmlCount;
        // document.querySelector('.price').innerHTML = htmlPrice;
        // document.querySelector('.summ').innerHTML = `$${totalSumm}`;
