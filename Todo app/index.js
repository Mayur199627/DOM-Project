let taskName = document.querySelector(".task-input-box");
let priority = document.querySelector("#priority");
let addTaskBtn = document.querySelector(".add-task-btn");
let taskList = document.querySelector(".all-task");
let highFilterBtn = document.querySelector(".high");
let moderateFilterBtn = document.querySelector(".moderate");
let lowFilterBtn = document.querySelector(".low");
let allTaskBtn = document.querySelector(".All")
let searchBox = document.querySelector(".search-box-text")
let searchBtn = document.querySelector(".search-btn")


let TaskArr = JSON.parse(localStorage.getItem("task")) || []
renderArr()

// function for reset
function reset() {
    taskName.value = "";
    priority.value = ""
}

// function for add task

function addTask() {
    let taskObj = {
        id: Date.now(),
        task: taskName.value,
        taskPriority: priority.value
    }
    TaskArr.push(taskObj)
    localStorage.setItem("task", JSON.stringify(TaskArr))
    renderArr()
}

// function for render task

function renderArr(){
    taskList.innerHTML = `<tr>
    <th>Task</th>
    <th>Priority</th>
    <th>Action</th>
</tr>`
    TaskArr.map((ele)=>{
            let newTask = document.createElement('tr');
            newTask.setAttribute("id",ele.taskPriority)
            newTask.innerHTML = `<td>${(ele.task).toUpperCase()}</td>
                                                <td>${ele.taskPriority}</td>
                                                <td><button id=${ele.id} class="delete-btn">Delete</button></td>`
        taskList.append(newTask);
    })
    console.log(TaskArr)
}

// function for delete task

function deleteTask(e){
    if (e.target.classList.contains("delete-btn")) {
        let row = e.target.parentElement.parentElement;
        row.remove()
    }
    let id = e.target.getAttribute('id')
    TaskArr.forEach((ele,idx)=>{
        if(ele.id == id){
            TaskArr.splice(idx,1)
            localStorage.setItem("task", JSON.stringify(TaskArr))
        }
    })
}

function filterTask(e){
    // console.log(e.target.innerText)
    let filterPriority = e.target.innerText;
    taskList.innerHTML = `<tr>
    <th>Task</th>
    <th>Priority</th>
    <th>Action</th>
</tr>`
    TaskArr.filter((ele)=>{
        if(ele.taskPriority == filterPriority){
            let newTask = document.createElement('tr');
            newTask.setAttribute("id",ele.taskPriority)
            newTask.innerHTML = `<td>${(ele.task).toUpperCase()}</td>
                                                <td>${ele.taskPriority}</td>
                                                <td><button id=${ele.id} class="delete-btn">Delete</button></td>`
        taskList.append(newTask);
        };
    })
}

function searchedTask(){
    let task = searchBox.value
    taskList.innerHTML = `<tr>
    <th>Task</th>
    <th>Priority</th>
    <th>Action</th>
</tr>`
TaskArr.filter((ele)=>{
    console.log(ele.task)
    if(ele.task==task){
        let newTask = document.createElement('tr');
        newTask.setAttribute("id",ele.taskPriority)
        newTask.innerHTML = `<td>${(ele.task).toUpperCase()}</td>
                                            <td>${ele.taskPriority}</td>
                                            <td><button id=${ele.id} class="delete-btn">Delete</button></td>`
    taskList.append(newTask);

    }
})
}

// Event listener

addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addTask();
    reset();
})

document.addEventListener("click", deleteTask);
highFilterBtn.addEventListener("click",filterTask)
moderateFilterBtn.addEventListener("click",filterTask)
lowFilterBtn.addEventListener("click",filterTask)
allTaskBtn.addEventListener("click", renderArr);
searchBtn.addEventListener("click", searchedTask)