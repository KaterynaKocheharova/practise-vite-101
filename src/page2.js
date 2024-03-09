import { getLocalStorage } from "./js/LSHelpers";
import { TASK_KEY } from "./js/consts";
import { localStorageDataMarkup } from "./js/dataMarkup";
import "./js/removeItem";

console.log(getLocalStorage(TASK_KEY))
localStorageDataMarkup()