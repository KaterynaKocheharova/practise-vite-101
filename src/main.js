
import { createListEl } from './js/createListElement';
import { refs } from './js/refs';
import { removeTask } from "./js/removeItem";
import { localStorageDataMarkup } from './js/dataMarkup';
import { TASK_KEY } from './js/consts';

// передається обєкт налаштувань {TASK_KEY, container}
localStorageDataMarkup({container: refs.taskEl, TASK_KEY});

removeTask(refs.taskEl,TASK_KEY);
refs.form.addEventListener("submit", onTaskSubmit);

function onTaskSubmit(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.taskName.value.trim();
    if (!inputValue) return;
    createListEl(inputValue);
    console.log(inputValue);
    event.currentTarget.reset();
}




