const taskInput = document.getElementById("taskInput")
const tasklist = document.getElementById("tasklist")

function addTask(){
    if(taskInput.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        tasklist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value = ""; 
    saveData();
}

tasklist.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
       e.target.classList.toggle("checked");
       saveData();
    }
     else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
     }
},false);

function saveData(){
    localStorage.setItem("data", tasklist.innerHTML);
}

function showTask(){
    tasklist.innerHTML = localStorage.getItem("data");
}
showTask();
