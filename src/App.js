import React from 'react';
import Task from "./components/Task";

class App extends React.Component {
    render() {


        return (
            <div className="App">
                <h1 className="top">Active tasks: 4</h1>
                <Task />
                <div>Task Input</div>
            </div>
        )
    }


}
export default App;
