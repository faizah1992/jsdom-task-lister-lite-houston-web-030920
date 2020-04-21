
const handleSubmit = function(e){
   e.preventDefault()
   let taskDescription = document.querySelector("#new-task-description")
   let description = (taskDescription.value)

   let taskPriority = document.querySelector("quantity")
   let priority = (taskPriority.value)
  
   let item = document.createElement("option")
   item.innerText = description
   let p = document.createElement()
   debugger
   document.getElementById("option").append(item)
 }

let form = document.querySelector("#create-task-form")
form.addEventListener("submit", handleSubmit)

function deletetasks() {
  let t = document.getElementById("option");
  t.remove(t.selectedIndex);
}



