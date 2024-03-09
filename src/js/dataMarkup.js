
import { refs } from './refs';
import { getLocalStorage} from './LSHelpers';
import { TASK_KEY } from './consts';


export function localStorageDataMarkup() {
    const data = getLocalStorage(TASK_KEY)

    if (!data) return

    const dataMarkUp = data.map(item => {
        return `<li id=${item.id}> ${item.task} <button class="deleteBtn"  type='button'>x</button></li >`
    }).join('')

    refs.taskEl.insertAdjacentHTML("beforeend", dataMarkUp)
}