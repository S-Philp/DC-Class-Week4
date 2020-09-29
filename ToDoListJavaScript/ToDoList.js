let taskNameTextBox = document.getElementById("taskNameTextBox")
let addButton = document.getElementById("addButton")
let tasksUL = document.getElementById("tasksUL")
let completedTasksUL = document.getElementById("completedTasksUL")

addButton.addEventListener("click", function() {

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("click", function() {
        completedTasksUL.appendChild(this.parentElement)
    })

    let li = document.createElement("li")
    let label = document.createElement("label")
    let removeButton = document.createElement("button")
    removeButton.addEventListener("click", function(){

        if(this.checked) {
            completedTasksUL.appendChild(this.parentElement)
        } else {
            completedTasksUL.removeChild(this.parentElement)
        }
    })
    
    label.innerHTML = taskNameTextBox.value
    removeButton.innerHTML = "Remove"

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(removeButton)

    
    pendingTasksUL.appendChild(li)

})


