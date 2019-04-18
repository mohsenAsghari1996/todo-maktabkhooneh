import React,{Component} from 'react'
import Todoitem from './Todoitem'
import todoStore from '../stores/TodoStore'
import {observer} from 'mobx-react'

@observer
class TodoItems extends Component{

    render(){

        return(
            <section className="main">
                <ul className="todo-list">
                    {
                        todoStore.todos.map(todo=>{
                            return(
                                <Todoitem key={todo.id} todo={todo}/>
                            )
                        })
                    }

                </ul>
            </section>
        )
    }
}
export default TodoItems