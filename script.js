const inputField = document.querySelector("#todoInput");
const list = document.querySelector("#tasksList")

function addTask() {
    if(inputField.value == ''){
        alert("Write some task");
    }
    else{
        console.log(inputField.value);
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputField.value = "";
    saveTask();
}

list.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
}, false);

function saveTask(){
    localStorage.setItem('tasks', list.innerHTML);

}

function Task(){
    list.innerHTML = localStorage.getItem("tasks");
}
Task();