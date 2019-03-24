'use strict'

let taskList = [];

function Task(val,status){
    this.val = val,
    this.status = status
}

                    // add new task as object to tasklist
function addItem(){
    let task = document.querySelector('.todo input');
    if(task.value != ""){

            let newTask = new Task(task.value,'active');
            taskList.push(newTask);
            task.value = "";
            showList();
    }
}

                        // if element status active than set status done or vice versa
function done(event){        
    let currTask = event.target.id;
        if(taskList[currTask].status == 'active'){
            taskList[currTask].status = 'done'
        }
        else{
            taskList[currTask].status = 'active'
        }
      showList();
}

                      // if task is done than remove. if task is not done ask user for confirm
function remove(event){
    let elementIndex = event.target.previousElementSibling.id;
  
    if(taskList[elementIndex].status == 'done'){
        taskList.splice(elementIndex,1);
    }
    else{
        let isDelete = confirm('"'+ taskList[elementIndex].val +'" is not done. Are you sure you want to delete the task?');
        if(isDelete){
            taskList.splice(elementIndex,1);
        }
    }
    showList();
}


                    // Set for all buttons

 function setToAll(event){
    let button = event.target.id;

if(taskList.length > 0){

        if(button == 1){
            for(let i=0; i< taskList.length;i++){
                taskList[i].status = 'done';
            }
        }
        else if(button == 2){
            for(let i=0; i< taskList.length;i++){
                if(taskList[i].status == 'done'){
                    taskList.splice(i,1);
                }
            }
        }
        else{
            let isRemove = confirm("are u sure to remove all tasks?");
            if(isRemove){
                taskList.length = 0;
            }
        }
        showList();
    }
}

                        // show elements and set array index as id of the element for getting status of elements. if 'done' than show overline or vice versa
function showList(){   

         let ul = document.querySelector('.todo ul');
         let li = "";

        for(let i = 0; i < taskList.length; i++){
            li += '<li  class="list-group-item d-flex px-0">';

            if(taskList[i].status == 'active'){
                li += '<i class="far fa-circle"></i> <span id="'+ i +'" onclick="done(event)">' + taskList[i].val + '</span> ';
            }
            else{
                li += '<i style="color: #e74c3c;" class="far fa-check-circle"></i><span id="'+ i +'" style="text-decoration: line-through;" onclick="done(event)">' + taskList[i].val + '</span>';
            }
            li += '<i onclick="remove(event)" class="far fa-trash-alt del"></i></li>';
        }
        ul.innerHTML = li;
}

