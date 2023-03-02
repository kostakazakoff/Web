let counter = 0;
let countArr = [];
const countEl = document.getElementById('counter-text');
const infoEl = document.getElementById('saved-info')
const countBtn = document.getElementById("count-btn");
const saveBtn = document.getElementById("save-btn");
const submitBtn = document.getElementById("submit-btn")
const resetBtn = document.getElementById("reset-btn")

countBtn.addEventListener('click', function () {
    counter ++;
    countEl.textContent = counter;
    console.log(counter);
})

saveBtn.addEventListener('click', function () {
    countArr.push(counter)
    counter = 0;
    countEl.textContent = counter;
    infoEl.value = countArr.join(' ')
})

