// DOM

// SELECTORS

let insertInput = document.querySelector("#insertInput");
let btnSendTask = document.querySelector("#sendTask");
let btnRestartInput = document.querySelector("#restartInput");

let taskContainerPending = document.querySelector(".taskContainerPending");
let taskContainerFinished = document.querySelector(".taskContainerFinished");

// FUNCTIONS

let sendTaskTo = () => {
    if (insertInput.value === "") {
        alert("Empty!");
    } else {
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
};

btnSendTask.addEventListener("click", () => {
    sendTaskTo();
});

btnRestartInput.addEventListener("click", () => {
    insertInput.value = "";
});

taskContainerPending.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === 'BUTTON' && clickedElement.id === 'removeTask') {
        const taskContainer = clickedElement.closest('.taskContainer');
        if (taskContainer) {
            taskContainer.remove();
        }
    }
});

taskContainerPending.addEventListener("click", (event) => {
    const clickedElement = event.target;

    if (clickedElement.tagName === "BUTTON" && clickedElement.id === "finishTask") {
        const taskContainer = clickedElement.closest(".taskContainer");
        if (taskContainer) {
            let finishedTaskContainer = document.createElement("div");
            finishedTaskContainer.classList.add("taskContainer");
            let finishedTask = document.createElement("div");
            finishedTask.classList.add("task");
            let parFinished = document.createElement("p");
            parFinished.textContent = `${insertInput.value}`;
            let btnRemoveFinishedTask = document.createElement("button");
            btnRemoveFinishedTask.textContent = "✘";
            btnRemoveFinishedTask.setAttribute("id", "removeFinishedTask");

            finishedTask.appendChild(parFinished);
            finishedTaskContainer.appendChild(finishedTask);
            finishedTaskContainer.appendChild(btnRemoveFinishedTask);

            taskContainerFinished.appendChild(finishedTaskContainer);
        }
    }
});

taskContainerFinished.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON" && clickedElement.id === "removeFinishedTask") {
        const taskContainer = clickedElement.closest(".taskContainer");
        if(taskContainer) {
            taskContainer.remove();
        }
    } 
});
