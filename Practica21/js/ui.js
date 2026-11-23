const list = document.getElementById("taskList");

export const render = (tasks) => {
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.className = `task-item${task.completed ? " completed" : ""}`;
        li.dataset.id = task.id;

        const text = document.createElement("span");
        text.textContent = task.text;
        li.appendChild(text);

        const actions = document.createElement("div");
        actions.className = "actions";

        const completeButton = document.createElement("button");
        completeButton.className = "btn-complete";
        completeButton.dataset.action = "complete";
        completeButton.textContent = "Completar";
        actions.appendChild(completeButton);

        const editButton = document.createElement("button");
        editButton.className = "btn-edit";
        editButton.dataset.action = "edit";
        editButton.textContent = "Editar";
        actions.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn-delete";
        deleteButton.dataset.action = "delete";
        deleteButton.textContent = "Borrar";
        actions.appendChild(deleteButton);

        li.appendChild(actions);
        list.appendChild(li);
    });
};
