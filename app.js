let checked = document.querySelector('input[id="2"]:checked');
let addButton = document.getElementById('addButton');
let heroes = [['Axe','Tank'],['Crystale','support']];
//Получение элементов формы
const form = document.forms.addHero; // Получаем форму
const nameInput = form.elements.heroName; // Получаем поле с именем
const descriptionInput = form.elements.description; // Получаем поле с описанием
const strInput = form.elements.str; // Получаем поле с уровнем силы
const agiInput = form.elements.agi; // Получаем поле с уровнем ловкости
const hpInput = form.elements.hp; // Получаем поле с уровнем здоровья
const intInput = form.elements.int; // Получаем поле с уровнем интеллекта



function displayHeroes() {
    let heroesContainer = document.getElementById('heroesContainer');
    heroesContainer.innerHTML = '';
    for (i = 0; i < heroes.length; i++) {
    let newElement = document.createElement('div');
    
    newElement.classList.add(`card__${i + 1}`);
    newElement.setAttribute('id', `card-${i + 1}`);

    newElement.innerHTML = `
    <img src="/img/hero_card.png" alt="hero_card" class="hero__card">
    <div class="hero__title">
    <h2 class="hero__title-name">${heroes[i][heroName]}</h2>
    <p>${heroes[i][description]}</p>
    </div>
    `
    heroesContainer.appendChild(newElement);
    
    }
    
}

function addHero () {
    if (nameInput.value != '') {
        if (descriptionInput.value != '') {
            let newHero = {
              heroName: nameInput.value,
              description: descriptionInput.value,
              str: strInput.value,
              agi: agiInput.value,
              hp: hpInput.value,
              int: intInput.value,
                // укажем тестовую почту для регистрации карточки
                studentEmail: "student@yandex.ru",
            };
            heroes.push(newHero);
        } else {
            alert('Введите класс персонажа')
        }
    } else {
        alert('Введите имя Персонажа')
    }
   displayHeroes()
    
    nameInput.value = '';
    descriptionInput.value = '';
}




addButton.onclick = addHero

// form.addEventListener('submit', function (evt) {
//     // Отменяем стандартное поведение
//     evt.preventDefault();
  
//     // Формируем данные и запрос
//   });

//   let newHeroJSON = JSON.stringify(newHero);

//   // Создаём объект с новым персонажем и записываем данные


// Используем api нашего сервера 
fetch("https://api-code.practicum-team.ru/heroes", {
    method: "POST", // POST нужен для сохранения и записи данных
  body: newHeroJSON, // Тело запроса в JSON-формате
  headers: {
      // Добавляем необходимые заголовки
      "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    // Смотрим ответ сервера на наш запрос
  .then((data) => console.log(data))


  form.addEventListener('submit', function (evt) {
    // Отменяем стандартное поведение
    evt.preventDefault();
    // Формируем данные и запрос...
  
      // Сбрасываем все поля
      form.reset();
  });



// //Функция для анимации карточек при клике
// function animateCard (event) {
//     let newElement = event.target; newElement.classList.toggle("animated")

// }

// //Привязка функции анимации карточек к событию клика на каждой карточке
// function attachClickEvent () {
//     let cardsAnimate = 
//     document.getElementsByClassName("card__1");
//     for (i = 0; i < heroesContainer; i++) {
//         cardsAnimate[i].addEventListener("click", animateCard)
//     }
// }
