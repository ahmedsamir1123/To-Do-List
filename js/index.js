
// https://todos.routemisr.com/api/v1/todos/6758b00460a208ee1fdddf2c get all todo
//6758b00460a208ee1fdddf2c api key


// https://todos.routemisr.com/api/v1/todos add todo need api key and title

let myData = [];
async function getTodo() {
    let myHttp = await fetch(`https://todos.routemisr.com/api/v1/todos/6758b00460a208ee1fdddf2c`)
    let data = await myHttp.json()
    myData = data.todos
    showTodo()
}
getTodo()
function showTodo() {
    let temp = '';
    myData.forEach((el) => {

        let { title, _id, completed } = el;
        console.log(completed);
        

        temp += `
                    <div class="row shadow mt-3 bg-secondary-subtlee">
        <div class="col-md-8 bg-transparent ">
                    <p id ="checkedtext" class="  ${completed ? "text-decoration-line-through" : "text-decoration-none"} checkedtext"> ${title} </p>
                </div>
                 <div class="col-md-2 bg-transparent ">
        
    <input type="checkbox" class="checkedBox    " name="" id="checkedBox" onclick="PutTodo('${_id}')" ${completed ? 'checked' : ''}>
    </div>

                <div class="col-md-2 bg-transparent ">
                    <a href="#" id="deletebtn" onclick="deleteTodo('${_id}')" class = "text-danger"> <i class="fa-regular fa-trash-can"></i></a>
 </div> 
                </div> `
        let myRow = document.querySelector("#myRow").innerHTML = temp



    })




}

let inputTodoo = document.querySelector("#inputTodoo")
let addtodo = document.querySelector("#Addtodo")

addtodo.addEventListener("click", (e) => {
    e.preventDefault();
    postTodo()
})


async function postTodo() {
    let todo = {
        title: inputTodoo.value,
        apiKey: "6758b00460a208ee1fdddf2c",
    }
    let opj = {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json"
        }
    }
    let myHttp = await fetch(`https://todos.routemisr.com/api/v1/todos`, opj)
    let todoData = await myHttp.json();

    console.log(todoData);
    inputTodoo.value = ''
    getTodo()


}

async function deleteTodo(_id) {
    
    let todo = {
        todoId: _id

    }
    let opj = {
        method: "DELETE",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json"
        }
    }
    let myHttp = await fetch(`https://todos.routemisr.com/api/v1/todos`, opj)
    let todoData = await myHttp.json();


    getTodo()


}




async function PutTodo(_id) {
    let todo = {
        todoId: _id

    }
    let opj = {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json"
        }
    }
    let myHttp = await fetch(`https://todos.routemisr.com/api/v1/todos`, opj)
    let todoData = await myHttp.json();
    getTodo()




}
