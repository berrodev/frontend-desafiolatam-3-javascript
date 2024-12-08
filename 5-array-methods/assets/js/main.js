console.log('js is linked');

// Array de tareas
const DUMMY_TASKS = [
  {
    id: 1,
    task: 'Lavar la ropa',
    completed: true,
  },
  {
    id: 2,
    task: 'Hacer la tarea',
    completed: false,
  },
  {
    id: 3,
    task: 'Estudiar para el examen',
    completed: false,
  },
  {
    id: 4,
    task: 'Comprar la comida',
    completed: false,
  },
  {
    id: 5,
    task: 'Lavar la loza',
    completed: true,
  },
];

// Función para mostrar las tareas en el DOM
const showTasks = () => {
  // Elemento donde se mostrarán las tareas
  const tasksList = document.getElementById('tasks-list');
  tasksList.innerHTML = '';
  DUMMY_TASKS.forEach((task) => {
    tasksList.innerHTML += `
      <td>${task.id}</td>
      <td class='${task.completed && 'text-decoration-line-through'}'>${
      task.task
    }</td>
      <td>
        <input
          type="checkbox"
          class="form-check-input mark-completed"
          ${task.completed ? 'checked' : ''}
          onchange=markTaskAsCompleted(${task.id})
        />
      </td>
      <td>
        <button class="btn btn-danger btn-sm delete-task" onclick=deleteTask(${
          task.id
        })>
          Eliminar
        </button>
      </td>
    `;
  });
};

// Mostrar las tareas en el DOM
showTasks();

// Agregar tarea, generando un nuevo id
const addTask = (task) => {
  DUMMY_TASKS.push({
    id: DUMMY_TASKS.length + 1,
    task,
    completed: false,
  });
  showTasks();
};

// Marcar tarea como completada
const markTaskAsCompleted = (taskId) => {
  const task = DUMMY_TASKS.find((task) => task.id === taskId);
  task.completed = !task.completed;
  showTasks();
};

// Eliminar tarea
const deleteTask = (taskId) => {
  const taskIndex = DUMMY_TASKS.findIndex((task) => task.id === taskId);
  DUMMY_TASKS.splice(taskIndex, 1);
  showTasks();
};
