// Array de tareas DUMMY
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

// Elementos del DOM
const tasksList = document.getElementById('tasks-list');
const completedTasksCounter = document.getElementById('completed-count');
const totalTasksCounter = document.getElementById('total-count');
const addTaskForm = document.getElementById('add-task-form');

// Función para mostrar las tareas en el DOM
const showTaskList = () => {
  tasksList.innerHTML = DUMMY_TASKS.map((task) => {
    return `
        <tr>
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
    </tr>
    `;
  }).join('');
};

// Función para mostrar los contadores actualizados
const showCounters = () => {
  const completedTasks = DUMMY_TASKS.filter((task) => task.completed);
  completedTasksCounter.textContent = completedTasks.length;
  const allTasks = DUMMY_TASKS.length;
  totalTasksCounter.textContent = allTasks;
};

// Función para renderizar los elementos en el DOM
const render = () => {
  // Actualizar listado de tareas
  showTaskList();

  // Actualizar contadores
  showCounters();
};

// Mostrar las tareas en el DOM
render();

// Event listener para el formulario de agregar tarea
addTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTaskText = event.target['new-task'].value;
  if (!newTaskText || newTaskText.trim() === '') {
    return;
  }
  const newTask = {
    id: DUMMY_TASKS.length + 1,
    task: newTaskText,
    completed: false,
  };
  DUMMY_TASKS.push(newTask);
  render();
});

// Función para marcar tarea como completada
const markTaskAsCompleted = (taskId) => {
  const task = DUMMY_TASKS.find((task) => task.id === taskId);
  task.completed = !task.completed;
  render();
};

// Función para eliminar tarea
const deleteTask = (taskId) => {
  const taskIndex = DUMMY_TASKS.findIndex((task) => task.id === taskId);
  DUMMY_TASKS.splice(taskIndex, 1);
  render();
};
