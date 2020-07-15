import React from 'react';
import Task from "./components/Task";
import store from './store';
import { observer } from 'mobx-react';
import TaskInput from "./components/TaskInput";

class App extends React.Component {
    render() {

        const activeTasks = store.sortedTasks.filter(item => !item.done);
        const doneTasks = store.sortedTasks.filter(item => item.done);

        return (
            <div className="App">
                <h1 className="top">Active tasks: {store.activeTasksCount}</h1>
                {activeTasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleTask={() => store.toggleTask(task.id)}
                        deleteTask={() => store.deleteTask(task.id)}
                    ></Task>
                ))}
                <hr/>
                {doneTasks.map(task => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleTask={() => store.toggleTask(task.id)}
                        deleteTask={() => store.deleteTask(task.id)}
                    ></Task>
                ))}
                <TaskInput addTask={(task) => store.addTask(task)} />
            </div>
        )
    }


}

export default observer(App);