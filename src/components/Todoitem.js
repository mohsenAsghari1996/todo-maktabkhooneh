import React, {Component} from 'react'
import {observer} from 'mobx-react'
import TodoStore from '../stores/TodoStore'
let i = -1;
@observer
class Todoitem extends Component {

    onToggle = () => {
        this.props.todo.toggle()

        if (this.props.todo.completed == true) {
            TodoStore.activeItemLeft = TodoStore.activeItemLeft - 1;
        }
        else {
            TodoStore.activeItemLeft = TodoStore.activeItemLeft + 1;
        }
    };
    deleteThisItem = () => {
        this.props.todo.deleteItem()
        if (this.props.todo.completed != true) {
            TodoStore.activeItemLeft = TodoStore.activeItemLeft-1;
        }

    };

    render() {
        const {todo} = this.props;
        return (
            <li className = {todo.completed ? "completed" : " "} >
                <div className = "view" >
                    <input
                        onChange = {this.onToggle}
                        type = "checkbox" value = "on" className = "toggle" checked = {todo.completed} />
                    <label>{todo.title}</label>
                    <button
                        onClick = {this.deleteThisItem}
                        className = "destroy" />
                </div>
            </li>
        )
    }
}
export default Todoitem