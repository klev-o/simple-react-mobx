import React from 'react';

class TaskInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addTask = () => {
        if (this.state.input) {
            this.props.addTask(this.state.input);
            this.setState({ input: '' });
        }
    };

    handleEnter = e => {
        if (e.key === 'Enter') this.addTask();
    };

    inputChange = e => {
        this.setState({ input: e.target.value });
    };

    render() {

        return (
            <div className="task-input">
                <input
                    onKeyPress={this.handleEnter}
                    onChange={this.inputChange}
                    value={this.state.input}
                />
                <button onClick={this.addTask}>Add</button>
            </div>
        );
    }
};

export default TaskInput;
