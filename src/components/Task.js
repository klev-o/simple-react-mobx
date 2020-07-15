import React from 'react';

const Task = (props) => {

    const task = props.task;

    return (
        <div className='task'>
            <p>{task.title}</p>
            <div className="action-btn">
                {task.done ?
                    <span aria-label="done" role="img">
                      ✔️
                    </span>
                :
                    <span aria-label="done" role="img">
                      ❌
                    </span>
                }
            </div>
        </div>
    );
};

export default Task;
