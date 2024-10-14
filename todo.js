const pageContainer = document.querySelector(".js-container");
let todoArray = [];
document.querySelector(".js-btn").addEventListener("click", (buttonElement) => {
  if(!(document.querySelector(".js-date").value=='' || document.querySelector('.js-time').value=='' || document.querySelector('.js-time').value=='')){
        let preHtml = "";
    let todoObject = {};
    const todoItem = document.querySelector(".js-todo").value;
    const todoDate = document.querySelector(".js-date").value;
    const todoTime = document.querySelector('.js-time').value;
    const todoID = todoTime;
    todoObject.todo = todoItem;
    todoObject.date = todoDate;
    todoObject.time=todoTime;
    todoObject.todoId = todoID;

    //add the todo object to todoArray
    todoArray.push(todoObject);
    console.log(todoArray);

    function loopAndRender(){
        preHtml='';
        todoArray.forEach((todoItems) => {
            preHtml += `<div id="${todoItems.time}" class="row mb-3 align-items-top ">
                        <div class="col">${todoItems.todo}</div>
                        <div class="col">${todoItems.date}</div>
                        <div class="col">${todoItems.time}</div>
                        <div class="col">
                            <div data-info=${todoItems.time} type="button"  class="button js-delete-btn btn btn-danger">DELETE</div>
                        </div>
                    </div>`;
        });
        pageContainer.innerHTML = preHtml;
        document.querySelector('.js-todo').value='';
        document.querySelector(".js-date").value='';
        document.querySelector('.js-time').value='';
    }
    loopAndRender()

    document.querySelectorAll(".js-delete-btn").forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", () => {
        const dataInfo = deleteBtn.dataset.info;
        const deletedPage = document.getElementById(dataInfo);
        deletedPage.remove();
        todoArray= todoArray.filter((value)=>{
            if(value.todoId===dataInfo){
                return false;
            }
            else{
                return true;
            }
        });
        console.log(todoArray)
        
        });
    });
    }
});
