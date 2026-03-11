
// Navbar

document
    .getElementById("musawerxd")
    .addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/musawerxd/", "_blank");
    });



// Theme Toggle

const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeBtn.innerText = isLight
        ? "🌙 Dark Mode"
        : "☀ Light Mode";
});



// references 
let taskArr = [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("Addbtn");
const filterBtns = document.querySelectorAll(".filterbtn");

const taskList = document.getElementById("taskList");
const stats = document.getElementById("statsText");
const clearBtn = document.getElementById("clearBtn");




//render 
function render() {
    taskList.innerHTML = "";

    const filteredTasks = taskArr.filter((todo) => {

        if (currentFilter === "all") return true;
        if (currentFilter === "active") return !todo.done;
        if (currentFilter === "completed") return todo.done;
    })

    if (filteredTasks.length === 0) {
        taskList.innerHTML = `
         <li class="empty">
        ✏️ No tasks yet. Add one above!
        </li>
        `
        updateStats();
        return;
    }

    let html = '';

    filteredTasks.forEach((task) => {

        html += `
        <li class="task ${task.done ? "completed" : ""}" data-id="${task.id}">

        <div class="taskLeft">
            <button class="markbtn">${task.done ? "✓" : ""}</button>
            <p class="tasktxt">${task.text}</p>
        </div>

        <div class="taskRight">
            <button class="edit">✎</button>
            <button class="delete">✕</button>
        </div>

      </li>
        `
    })

    taskList.innerHTML = html;
    updateStats()
}







//Add task

function addTask() {
    const input = taskInput.value.trim();
    if (!input) {
        taskInput.style.borderColor = "red"
        setTimeout(() => {
            taskInput.style.borderColor = ""
        }, 600);
        return;
    }
    taskArr.push({
        id: Date.now(),
        text: input,
        done: false
    })
    taskInput.value = ""
    taskInput.focus()

    render();
}






//Edit task

function editTask(id) {
    const task = taskArr.find(task => task.id === id)

    if (!task) return;

    const newTask = prompt("Enter new Text: ", task.text)

    if (newTask !== null && newTask.trim() !== "") {
        task.text = newTask.trim();
        render()
    }
}





//Remove task

function removeTask(id) {
    const li = document.querySelector(`[data-id="${id}"]`)

    if (!li) return;

    li.classList.add("removing")
    setTimeout(() => {
        taskArr = taskArr.filter((task) => task.id !== id)
        render()
    }, 300);
}






//Clear task
function clearTasks() {
    if (confirm("This cannot be undone, sure to delete all tasks?")) {
        taskArr = [];
        currentFilter = "all"
        filterBtns.forEach((btn) => btn.classList.remove("active"))
        document.querySelector(`.filterbtn[data-filter="all"]`).classList.add("active");
        render();
    }
}





//toggle done
function toggleDone(id) {
    const task = taskArr.find(task => task.id === id)
    if (!task) return;

    task.done = !task.done;
    render()
}




//update stats

function updateStats() {
    let total = taskArr.length
    let done = taskArr.filter(t => t.done).length
    let left = total - done;

    stats.innerText = `${total} total · ${done} done · ${left} left`
}







//filter btn 
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => {
            b.classList.remove("active")
        })
        btn.classList.add("active");
        currentFilter = btn.dataset.filter
        render()
    })
})





//Event Listeners

taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
})

addBtn.addEventListener("click", () => {
    addTask();
})

taskList.addEventListener("click", (event) => {

    const li = event.target.closest(".task")

    if (!li) return;

    const id = Number(li.dataset.id)

    if (event.target.classList.contains("delete")) {
        removeTask(id)
    }
    if (event.target.classList.contains("edit")) {
        editTask(id)
    }
    if (event.target.classList.contains("markbtn")) {
        toggleDone(id)
    }
})

clearBtn.addEventListener("click", () => {
    clearTasks()
})