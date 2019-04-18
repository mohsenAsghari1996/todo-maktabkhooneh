import {observable,action} from 'mobx'
import TodoStore from './TodoStore'

export default class TodoModel{
    store
    id
    @observable completed
    @observable title

    constructor(store,title,completed,id){
        this.title=title
        this.completed=completed
        this.id=id
        this.store=store
    }

    @action
    toggle(){
        this.completed=!this.completed

    }

    @action
    deleteItem() {
        this.store.allTodos.remove(this);
        this.store.todos = this.store.allTodos;
        TodoStore.todosLength = TodoStore.allTodos.length;
        if(TodoStore.todos.length == 0){
            TodoStore.footerFlag = false
        }
    }
}