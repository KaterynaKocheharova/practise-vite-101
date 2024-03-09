import { nanoid } from 'nanoid'

const form = document.querySelector("#task-form");
const taskEl = document.querySelector('#task-list');
const TASK_KEY = "tasks"

localStorageDataMarkup()

form.addEventListener("submit", onTaskSubmit);

function onTaskSubmit(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.taskName.value.trim();
    if (!inputValue) return;
    createListEl(inputValue);
    console.log(inputValue);
    event.currentTarget.reset();
}

function createListEl(textValue) {
    const id = nanoid();
    taskEl.insertAdjacentHTML("beforeend", `<li id=${id}>${textValue}<button type='button'>x</button></li>`)
    saveDataToLS(id, textValue);
}

function saveDataToLS(id, task) {
    const dataArray = JSON.parse(localStorage.getItem(TASK_KEY)) || [];

    const obj = {
        task,
        id
    }

    dataArray.push(obj);

    localStorage.setItem(TASK_KEY, JSON.stringify(dataArray));
}

function localStorageDataMarkup() {
    const data = JSON.parse(localStorage.getItem(TASK_KEY))

    if (!data) return

    const dataMarkUp = data.map(item => {
        return `<li id=${item.id}> ${item.task} <button type='button'>x</button></li >`
    }).join('')

    taskEl.insertAdjacentHTML("beforeend", dataMarkUp)
}

