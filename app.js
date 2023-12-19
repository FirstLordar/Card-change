let addButton = document.getElementById('addButton');
let heroes = [['Axe','Tank'],['Crystale','support']];
//let newHeroName = nameInput.value;
//let newHeroClass = classInput.value;


function displayHeroes() {
    let heroesContainer = document.getElementById('heroesContainer');
    heroesContainer.innerHTML = '';
    for (i = 0; i < heroNames.length; i++) {
    let newElement = document.createElement('div');
    newElement.innerHTML = `
    <h3>${heroNames[i]}</h3>
    <p>${heroCalsses[i]}</p>
    `
    }
    heroesContainer.appendChild(newElement);
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
   // displayHeroes()
    
    nameInput.value = '';
    classInput.value = '';
}

addButton.onclick = addHero





