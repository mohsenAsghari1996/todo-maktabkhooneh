import {observable, action} from 'mobx'
import TodoModel from './TodoModel'
class TodoStore {
    @observable todos = [];
    @observable allTodos = [];
    @observable footerFlag = false;
    @observable activeItemLeft = 0;
    @observable activeTodos = [];
    @observable completedTodos = [];
    lastID = 0;

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++));
        this.allTodos = this.todos;
        this.activeItemLeft++;
    }


    @action
    clearCompletedTasks() {
        let temp = [];
        for (let index of this.allTodos) {
            if (index.completed != true) {
                temp.push(index);
            }
        }

        this.todos = temp;
        this.allTodos = temp;
        if (this.todos.length == 0) {
            this.footerFlag = false;
        }
    }

    @action
    showAllTasks() {
        this.todos = this.allTodos;
    }

    @action
    showActiveTasks() {
        this.activeTodos = this.allTodos.filter(obj => obj.completed == false);
        this.todos = this.activeTodos
    }

    @action
    showCompletedTasks() {
        this.completedTodos = this.allTodos.filter(obj => obj.completed == true);
        this.todos = this.completedTodos
    }
}
const store = new TodoStore()
export default store