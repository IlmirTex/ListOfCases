

// Create Element
const output = document.querySelector('.tasks');
const button = document.querySelector('.task__button-add');
const input  = document.querySelector('.text');

function create() {
  if(input.value === "") return; 

  let newTask = document.createElement('div');
  let buttonsTask = document.createElement('div')
  let buttonReady = document.createElement('button');
  let buttonDelete = document.createElement('button');
  let circle = document.createElement('div');
  let inputValue = input.value;
  let taskMain = document.createElement('div');
  let taskText = document.createElement('div');
  
  buttonDelete.classList.add('button-delete');
  buttonDelete.classList.add('button-task');
  circle.classList.add('circle');
  buttonReady.classList.add('button-ready');
  buttonReady.classList.add('button-task');
  newTask.classList.add('task');
  taskMain.classList.add('taskMain');
  taskText.classList.add('task-text');

  buttonDelete.innerText = "DELETE"
  buttonReady.innerText = "READY";
  taskText.innerText = inputValue;

  output.appendChild(newTask);
  taskMain.appendChild(taskText);
  buttonsTask.appendChild(buttonReady);
  buttonsTask.appendChild(buttonDelete);
  taskMain.appendChild(buttonsTask);
  newTask.appendChild(taskMain);
  newTask.appendChild(circle); 
}

button.addEventListener('click', create); 

// Remove Button

const removeAllButton = document.querySelector('.task-list__button-remove');

function removeAllTasks() {
    const tasksArray = document.querySelectorAll('.task');
    tasksArray.forEach(element => {
        element.remove();
    });
}

removeAllButton.addEventListener('click', removeAllTasks);

// Delete Button

function deleteTask(event) {
    if (event.target.classList.contains('button-delete')) {
        event.target.parentNode.parentNode.parentNode.remove();
    }
}

output.addEventListener('click', (event) => {
    deleteTask(event);
});

// Ready All button 

 const readyAllButton = document.querySelector('.task-list__button-ready');

 function readyAllTasks () {
    const circleArray = document.querySelectorAll('.circle');
    circleArray.forEach(element =>{
        element.classList.add('circle-ready');
    })
 }
 readyAllButton.addEventListener('click', readyAllTasks);

// Ready button

function readyButton (event) {
    if(event.target.classList.contains('button-ready')) {
        event.target.parentNode.parentNode.nextSibling.classList.add('circle-ready');
        event.target.innerText = "UNREADY";
        event.target.classList.add('button-unready');
        event.target.classList.remove('button-ready');
    } else
    if (event.target.classList.contains('button-unready')){
        console.log(111);
        event.target.parentNode.parentNode.nextSibling.classList.remove('circle-ready');
        event.target.innerText = "READY";
        event.target.classList.remove('button-unready');
        event.target.classList.add('button-ready');

    }
}

output.addEventListener('click',(event) => {
    readyButton(event);
});