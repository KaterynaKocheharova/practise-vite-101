import { nanoid } from 'nanoid'

const form = document.querySelector("#task-form");
const taskEl = document.querySelector('#task-list')


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
}