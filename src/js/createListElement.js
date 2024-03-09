import { nanoid } from 'nanoid';
import { refs } from './refs';
import { saveDataToLS } from './savDataToLS';


export function createListEl(textValue) {
    const id = nanoid();
    refs.taskEl.insertAdjacentHTML("beforeend", `<li id=${id}>${textValue}<button class="deleteBtn" type='button'>x</button></li>`)
    saveDataToLS(id, textValue);
}


