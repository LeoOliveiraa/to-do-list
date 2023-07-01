const button = document.querySelector(".button-task")
const input = document.querySelector(".input-task")
const ListColplet = document.querySelector(".list-tasks")

let myTaskList = []


function addNewTask() {

    if (input.value.trim() === '') {
        alert("Por favor, preencha o campo!");
        return;
    }

    myTaskList.push({
        task: input.value,
        complete: false
    })

    input.value =""

    showTask()
}

function showTask() {



    let newLi = ""
    myTaskList.forEach((task , position) => {
        newLi = newLi + `
        <li class="task ${task.complete && "done"}"> 
            <img  src="./img/check.png" alt="check-icon" onclick="taskComplete(${position})">
            <p>${task.task}</p>
            <img src="./img/trash1.png" alt="trash-icon" onclick="deletIten(${position})">
        </li>
        ` 
    })

    ListColplet.innerHTML = newLi

    localStorage.setItem("list", JSON.stringify(myTaskList))
}

function taskComplete(position){
    myTaskList[position].complete = !myTaskList[position].complete
    showTask()
}

function deletIten(position){
    myTaskList.splice(position, 1)
    showTask()
}

function reloadTasks(){
    const tasksLocalStorege = localStorage.getItem("list")
    if(tasksLocalStorege){
    myTaskList = JSON.parse(tasksLocalStorege)
    }
    showTask()
}

reloadTasks()

button.addEventListener("click", addNewTask)