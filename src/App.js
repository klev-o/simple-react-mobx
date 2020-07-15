import React from 'react';
import Task from "./components/Task";
import store from './store';
import { observer } from 'mobx-react';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1 className="top">Active tasks: {store.activeTasksCount}</h1>
                {store.sortedTasks.map(task => (
                    <Task
                        task={task}
                        key={task.id}
                    ></Task>
                ))}
                <div>Task Input</div>
            </div>
        )
    }


}

export default observer(App);