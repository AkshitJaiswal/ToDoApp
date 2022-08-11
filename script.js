var taskList=document.getElementById('taskList');
var newTask=document.getElementById('inputTxt');

newTask.addEventListener("keypress",function(event){
  if (event.key === "Enter") {
    event.preventDefault();

    let val=newTask.value;
    val=val.trim();
    if(val.length!=0){
      let taskBox=document.createElement("div");
      let task=document.createElement("input");
      task.setAttribute("type","checkbox");
      let taskLabel=document.createElement("label");
      taskLabel.innerText=val;
      taskBox.append(task);
      taskBox.append(taskLabel);

      let delBtn=document.createElement("button");
      delBtn.innerText="\u2A2F";
      taskBox.append(delBtn);

      let updateBtn=document.createElement("button");
      updateBtn.innerText="\u2710";
      taskBox.append(updateBtn);
      
      
      let br=document.createElement("br"); 
      taskBox.append(br);
      taskList.append(taskBox);
      task.addEventListener("click",function(){
        if(this.checked) {
            taskLabel.style.textDecoration='line-through';
        }
        else{
          taskLabel.style.textDecoration='none';
        }
      });

      updateBtn.addEventListener("click",function(){
          let inp=document.createElement("input");
          inp.placeholder="enter updated text";
          taskBox.append(inp);
          inp.addEventListener("keypress",function(event){
          if (event.key === "Enter") {
            event.preventDefault();
            taskLabel.innerText=inp.value;
            inp.value="";
            taskBox.removeChild(inp);
          }});
      });

      delBtn.addEventListener("click",function(){
        taskBox.removeChild(task);
        taskBox.removeChild(taskLabel);
        taskBox.removeChild(delBtn);
        taskBox.removeChild(updateBtn);
        taskBox.removeChild(br);
      });
    
  }
  newTask.value="";
  }
  
})