
import { refs } from './refs';
import { getLocalStorage, setLocalStorage } from './LSHelpers';
import { TASK_KEY } from './consts';


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
