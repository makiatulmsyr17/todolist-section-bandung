// mengambil form element 
const formElement = document.querySelector(".form-todo");
// menambhakan form event listener 
formElement.addEventListener("submit", (event) => {
    event.preventDefault();// biar tidak mereflesh 

    // ambil input elemnt di html
    const inputElement = document.querySelector(".input-todo")
    console.log(inputElement.value);
    //  ambil wrapeer todo sebagi entry poin todo item 

    const wrapperTodoElement = document.querySelector(".wrapper-todo");
    // membuat todo item di js 
    // const todoItem =`<li class ="todo-item">${inputElement.value}</li>`
    const todoItem = document.createElement("li");
    todoItem.innerHTML = inputElement.value;
    // menambhakann todo item kedalam wrapper todo
    // wrapperTodoElement.innerHTML=todoItem;
    wrapperTodoElement.append(todoItem);

    // mengahapus input value setelah submit 
    inputElement.value="";
})
