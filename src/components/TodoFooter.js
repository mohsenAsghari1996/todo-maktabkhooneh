import React, {Component} from "react";
import {observer} from "mobx-react"

@observer
class TodoFooter extends Component {

    render() {
        const todoStore = this.props.todoStore

        if (todoStore.footerFlag==false) return null;
        return (
            <footer className="footer">
                <div className="todo-count">
                    {todoStore.activeItemLeft} item left
                </div>
                <ul className="filters">
                    <li><button
                        onClick={() => this.props.todoStore.showAllTasks()}>All</button></li>
                    <li><button
                        onClick={() => this.props.todoStore.showActiveTasks()} >Active</button></li>
                    <li><button
                        onClick={() => this.props.todoStore.showCompletedTasks()}>Completed</button></li>
                </ul>
                <button className="clear-completed"
                        onClick={() => {
                            todoStore.clearCompletedTasks()
                        }}>
                    Clear completed
                </button>
            </footer>

        )
    }
}

export default TodoFooter