import { getLocalStorage} from './LSHelpers';

// передається обєкт налаштувань {TASK_KEY, container}
export function localStorageDataMarkup({TASK_KEY, container}) {
    console.log(TASK_KEY, container)
    const data = getLocalStorage(TASK_KEY)

    if (!data) return

    const dataMarkUp = data.map(item => {
        return `<li id=${item.id}> ${item.task} <button class="deleteBtn"  type='button'>x</button></li >`
    }).join('')

    container.insertAdjacentHTML("beforeend", dataMarkUp)
}
