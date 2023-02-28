let countEl = document.getElementById('counter-text');
let infoEl = document.getElementById('saved-info')
let counter = 0;
let countArr = [];

function increment() {
    counter ++;
    countEl.textContent = counter;
    console.log(counter);
}

function saveInfo() {
    countArr.push(counter)
    counter = 0;
    countEl.textContent = counter;
    infoEl.textContent = countArr.join(' ')
}