
import * as state from "./state.js";
import * as ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("taskInput");
    const addBtn = document.querySelector("#addBtn");
    const list = document.getElementById("taskList");

    function showError(message) {
        window.alert(message);
    }

    async function addTask() {
        const text = input.value.trim();
        if (text === "") return;

        try {
            await state.addTask({ text, completed: false });
            input.value = "";
            ui.render(state.tasks);
        } catch (error) {
            showError(error.message || "No se pudo crear la tarea.");
        }
    }

    addBtn.addEventListener("click", addTask);

    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    list.addEventListener("click", async (event) => {
        if (!(event.target instanceof Element)) return;

        const button = event.target.closest("button[data-action]");
        if (!button) return;

        const li = button.closest("li");
        if (!li) return;

        const id = li.dataset.id;
        const action = button.dataset.action;

        try {
            if (action === "edit") {
                const text = window.prompt("Escribe el nuevo texto:", li.querySelector("span").textContent);
                if (text === null || text.trim() === "") return;

                await state.editTask(id, text.trim());
                const task = state.tasks.find((item) => String(item.id) === id);
                li.querySelector("span").textContent = task.text;
            } else if (action === "complete") {
                await state.toggleTask(id);
                const task = state.tasks.find((item) => String(item.id) === id);
                li.classList.toggle("completed", task.completed);
            } else if (action === "delete") {
                await state.deleteTask(id);
                li.parentNode.removeChild(li);
            }
        } catch (error) {
            showError(error.message || "No se pudo completar la acción.");
        }
    });

    state.fetchTasks()
        .then((tasks) => ui.render(tasks))
        .catch((error) => {
            console.error("No se pudieron cargar las tareas:", error);
            showError(error.message || "No se pudieron cargar las tareas.");
        });
});
