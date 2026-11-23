const API_URL = 'http://localhost:8080/api/task';

export let tasks = [];

export const fetchTasks = async () => {
 const response = await fetch(API_URL);
 if (!response.ok) throw new Error('No se pudieron cargar las tareas.');
 tasks = await response.json();
 return tasks;
}

export const addTask = async (task) => {
 const response = await fetch(API_URL, {
  method: 'POST',
  headers:{ 'Content-Type': 'application/json' },
  body: JSON.stringify({ text: task.text, completed: task.completed ?? false })
 })
  if (!response.ok) throw new Error('No se pudo crear la tarea.');
  const nextTask = await response.json();
  tasks.push(nextTask);
  return nextTask;
}

export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}?id=${encodeURIComponent(id)}`, {
        method: 'DELETE'
    });
    if (!response.ok) throw new Error('No se pudo borrar la tarea.');
    tasks = tasks.filter(t => String(t.id) !== String(id));
    return tasks;
};




export const toggleTask = async (id) => {
    const task = tasks.find(t => String(t.id) === String(id));
    if (!task) return;

    // Preparamos el objeto con el estado invertido
    const updatedTask = { ...task, completed: !task.completed };
   
    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
    });
    if (!response.ok) throw new Error('No se pudo completar la tarea.');
    const savedTask = await response.json();
    task.completed = savedTask.completed; // Sincronizamos
    return tasks;
};




export const editTask = async (id, newText) => {
    const task = tasks.find(t => String(t.id) === String(id));
    if (!task) return;


    const updatedTask = { ...task, text: newText };


    const response = await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTask)
    });

    if (!response.ok) throw new Error('No se pudo editar la tarea.');
    const savedTask = await response.json();
    task.text = savedTask.text; // Sincronizamos
    return tasks;
};
