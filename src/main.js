

const form = document.querySelector("#task-form");

form.addEventListener("submit", onTaskSubmit);

function onTaskSubmit(event) {
    event.preventDefault();
    const inputValue = event.currentTarget.elements.taskName.value.trim();
    if(!inputValue) return;
    console.log(inputValue);
    event.currentTarget.reset();
}