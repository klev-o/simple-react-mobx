import React from 'react';

const Task = (props) => {

    const task = props.task;

    const classes = ['task']
    if (task.done) {
        classes.push('task-done')
    }

    return (
        <div className={classes.join(' ')} onClick={props.toggleTask}>
            <p>{task.title}</p>
            <div className="action-btn" onClick={props.deleteTask}>
                <span aria-label="delete" role="img">
                  ❌
                </span>
            </div>
        </div>
    );
};

export default Task;
