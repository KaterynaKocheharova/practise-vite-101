import { getLocalStorage, setLocalStorage } from './LSHelpers';
import { TASK_KEY } from './consts';


export function saveDataToLS(id, task) {
    const dataArray = getLocalStorage(TASK_KEY) || [];

    const obj = {
        task,
        id
    }

    dataArray.push(obj);

    setLocalStorage(TASK_KEY, dataArray);
}