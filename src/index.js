import React, { useState } from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Form = () => {

    const ToDo = () => {
        return(
             <button>userInput</button>
        );
    }

    const [count, setCount] = useState(0);
    const [toDoList, setToDoList] = useState([]);
    const [userInput, setUserInput ] = useState('');
    const [taskDate, setTaskDate ] = useState('');

    const handleChange = event => {
           setUserInput(event.currentTarget.value)
    };

    const handleSubmit = event => {
           event.preventDefault();
           setToDoList(toDoList.concat(<ToDo key={toDoList.length} />));
           setToDoList(toDoList.concat(<ToDo key={toDoList.length} />));
           setCount(count + 1);
           setUserInput("");
    };

    const onAddBtnClick = event => {
        event.preventDefault();
        setToDoList(toDoList.concat(<ToDo key={toDoList.length} />));
        setCount(count + 1);
        setUserInput("");
    };


    return (
        <div>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button onClick={onAddBtnClick}>+</button> <br /><br />
            Active tasks: {count} <br /><br />
            {toDoList} <br />
            {new Date().toLocaleString() + ""} <br />
        </div>
      );
};






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <Form />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
