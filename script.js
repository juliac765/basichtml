function addToDo(){
    const toDoElement = document.getElementById("new-to-do");
    const todo = toDoElement.value;
    
    if (todo.length<3){
        return alert("You must have at least three characters")
    }
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const text = document.createTextNode(todo);
    li.setAttribute("onclick", "this.remove()")
    li.appendChild(text);

    list.appendChild(li)

}
