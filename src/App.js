import React, { Component } from 'react';
import './App.css';
import {observer} from 'mobx-react'
import TodoEntry from './components/TodoEntry'
import TodoItems from "./components/TodoItems";
import TodoFooter from "./components/TodoFooter";
import TodoStore from "./stores/TodoStore"


@observer
class App extends Component {
    render() {
        return (
            <div id="todoapp" className="todoapp">
                <TodoEntry/>
                <TodoItems/>
                <TodoFooter todoStore = {TodoStore}/>

            </div>
        );
    }
}

export default App;
