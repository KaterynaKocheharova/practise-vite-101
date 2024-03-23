
import { getLocalStorage, setLocalStorage } from './LSHelpers';

export function removeTask(element, key) {
    element.addEventListener("click", onRemoveTask);

    
function onRemoveTask(event) {
    if (!event.target.classList.contains("deleteBtn")) return;

    console.log(event.target.parentNode.id);

    const id = event.target.parentNode.id;

    const dataArray = getLocalStorage(key)

    const newData = dataArray.filter(listItem => listItem.id !== id);

    setLocalStorage(key, newData)

    event.target.parentNode.remove();
}
}
