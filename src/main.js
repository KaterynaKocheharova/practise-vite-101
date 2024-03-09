import { nanoid } from 'nanoid'
import { getLocalStorage, setLocalStorage } from './js/LSHelpers';
import { refs } from './js/refs';
import { TASK_KEY } from './js/consts';

localStorageDataMarkup()

refs.form.addEventListener("submit", onTaskSubmit);

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
    refs.taskEl.insertAdjacentHTML("beforeend", `<li id=${id}>${textValue}<button class="deleteBtn" type='button'>x</button></li>`)
    saveDataToLS(id, textValue);
}

function saveDataToLS(id, task) {
    const dataArray = getLocalStorage(TASK_KEY) || [];

    const obj = {
        task,
        id
    }

    dataArray.push(obj);

    setLocalStorage(TASK_KEY, dataArray);
}

function localStorageDataMarkup() {
    const data = getLocalStorage(TASK_KEY)

    if (!data) return

    const dataMarkUp = data.map(item => {
        return `<li id=${item.id}> ${item.task} <button class="deleteBtn"  type='button'>x</button></li >`
    }).join('')

    refs.taskEl.insertAdjacentHTML("beforeend", dataMarkUp)
}

refs.taskEl.addEventListener("click", onRemoveTask);

function onRemoveTask(event) {
    if (!event.target.classList.contains("deleteBtn")) return;

    console.log(event.target.parentNode.id);

    const id = event.target.parentNode.id;

    const dataArray = getLocalStorage(TASK_KEY)

    const newData = dataArray.filter(listItem => listItem.id !== id);

    setLocalStorage(TASK_KEY, newData)

    event.target.parentNode.remove();

}

