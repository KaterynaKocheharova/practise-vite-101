import { TASK_KEY } from "./js/consts";
import { localStorageDataMarkup } from "./js/dataMarkup";
import { removeTask } from "./js/removeItem";
import { refs } from "./js/refs";

// передається обєкт налаштувань {TASK_KEY, container}
localStorageDataMarkup({TASK_KEY, container: refs.favoriteList});
removeTask(refs.favoriteList, TASK_KEY);

// ЦЕ ПРИКЛАД ЗАМИКАННЯ (НЕ ЧАСТИНА ВСЬОГО ІНШОГО КОДУ)

function person(name) {
    const a = 10;
    return function(age) {
console.log(a);
console.log(`Person ${name}${age}`)
    }
}

// Читабельний варіант
const Katya = person(18)
Katya(18);


// Спрощений варіант, важливо знати
person("Katya")(18);
