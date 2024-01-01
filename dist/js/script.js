// DOM

// SELECTORS

let insertInput = document.querySelector("#insertInput");
let btnSendTask = document.querySelector("#sendTask");
let btnRestartInput = document.querySelector("#restartInput");

console.log(btnSendTask);

let taskContainerPending = document.querySelector(".taskContainerPending");

let sendTaskTo = () => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    let task = document.createElement("div");
    task.classList.add("task");
    let parSend = document.createElement("p");
    parSend.textContent = `${insertInput.value}`;
    let btnFinishTask = document.createElement("button");
    let btnRemoveTask = document.createElement("button");
    btnFinishTask.textContent = "✔";
    btnRemoveTask.textContent = "✘";
    btnFinishTask.setAttribute("id", "finishTask");
    btnRemoveTask.setAttribute("id", "removeTask");

    task.appendChild(parSend);
    taskContainer.appendChild(task);
    taskContainer.appendChild(btnFinishTask);
    taskContainer.appendChild(btnRemoveTask);

    taskContainerPending.appendChild(taskContainer);
}

btnSendTask.addEventListener("click", () => {
    sendTaskTo();
});