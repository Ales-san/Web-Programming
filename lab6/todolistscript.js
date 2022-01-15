
class TODO_List {
    constructor(task_list) {
        this.list = task_list;
    }

    addFromStorage(userTask, userDone) {
        if (userTask === "") {
            alert("No any task found!");
        } else {
            document.getElementById('todo-list__task').value = "";
            tasks.push({
                num : size,
                task : userTask,
                done : userDone
            });
            size++;

        }
    }

    add() {
        let userTask = document.getElementById('todo-list__task').value;
        this.addFromStorage(userTask, false);
        this.display();
        localStorage.setItem(userTask, 'false');

    }

    display() {
        this.list.innerHTML = "";
        for(let i = 0; i < tasks.length; i++) {
            let task_element = document.createElement("span");
            let del_element = document.createElement("span");

            task_element.classList.add("todo-list__item");
            del_element.classList.add("todo-list__del");

            task_element.innerText = tasks[i].task;
            task_element.dataset.num = tasks[i].num;
            del_element.dataset.num = tasks[i].num;
            del_element.innerText = "Удалить";

            task_element.appendChild(del_element);

            task_element.addEventListener("click",
                (el) => {todo_list.done(tasks[i].num);}
            );
            if(tasks[i].done) {
                task_element.classList.add("done");
            }

            del_element.addEventListener("click",
                (event) => {todo_list.delete(tasks[i].num); if(i < tasks.length) {todo_list.done(tasks[i].num);}}
            );

            this.list.appendChild(task_element);
        }
    }

    done(key) {
        let index = tasks.findIndex((item) => item.num === key);
        tasks[index].done = (tasks[index].done === false);
        localStorage.setItem(tasks[index].task, String(tasks[index].done));
        this.display();
    }

    delete(key) {
        let index = tasks.findIndex((item) => item.num === key);
        localStorage.removeItem(tasks[index].task);
        tasks.splice(index, 1);
        this.display();

    }
}

var todo_list;
var tasks = [];
var size = 0;

document.addEventListener('DOMContentLoaded', () => {
    todo_list = new TODO_List(document.getElementById('todo-list__body'));
    for (let key of Object.keys(localStorage)) {
        if (key !== "") {
            todo_list.addFromStorage(key, localStorage.getItem(key) === "true");
        } else {
            localStorage.removeItem(key);
        }
    }
    todo_list.display();
});

function onsubmitlist() {
    todo_list.add();
    return false;
}
