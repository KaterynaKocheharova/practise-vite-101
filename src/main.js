
import { createListEl } from './js/createListElement';
import { refs } from './js/refs';
import "./js/removeItem";
import { localStorageDataMarkup } from './js/dataMarkup';

localStorageDataMarkup();

refs.form.addEventListener("submit", onTaskSubmit);

function onTaskSubmit(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.taskName.value.trim();
    if (!inputValue) return;
    createListEl(inputValue);
    console.log(inputValue);
    event.currentTarget.reset();
}




