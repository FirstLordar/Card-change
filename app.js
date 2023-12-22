let addButton = document.getElementById('addButton');
let heroes = [['Axe','Tank'],['Crystale','support']];



function displayHeroes() {
    let heroesContainer = document.getElementById('heroesContainer');
    heroesContainer.innerHTML = '';
    for (i = 0; i < heroes.length; i++) {
    let newElement = document.createElement('label');
    newElement.className = `card__${i + 1}`;
    newElement.setAttribute('id', `card-${i + 1}`);
    newElement.addEventListener("change", function(event) {
        console.log(newElement.target.type)})
    newElement.innerHTML = `
    <img src="/img/hero_card.png" alt="hero_card" class="hero__card">
    <div class="hero__title">
    <h2 class="hero__title-name">${heroes[i][0]}</h2>
    <p>${heroes[i][1]}</p>
    </div>
    `
    heroesContainer.appendChild(newElement);
    
    }
    
}

function addHero () {
    let nameInput = document.getElementById('heroName');
    let classInput = document.getElementById('heroClass');
    if (nameInput.value != '') {
        if (classInput.value != '') {
            let newHero = [nameInput.value, classInput.value]
            heroes.push(newHero);
        } else {
            alert('Введите класс персонажа')
        }
    } else {
        alert('Введите имя Персонажа')
    }
   displayHeroes()
    
    nameInput.value = '';
    classInput.value = '';
}

addButton.onclick = addHero



