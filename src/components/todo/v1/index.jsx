import React, { useState } from "react";
import SearchBar from "../../SearchBar";
import Alert from "../../bootstrap-component/Alert";

const Todo = (props) => {
  const [userTasks, setUserTasks] = useState(props.tasks);
  const [userInput, setUserInput] = useState(null);

  const onFormSubmit = (data) => {
    setUserInput(data);
    if (userInput !== "" && !is_task_exist()) {
      let temp = userTasks;
      temp.push({ body: userInput, is_done: false });
      setUserTasks([...temp]);
    }
    if (is_task_exist() === true) {
      // task already exist
    }
  };

  const is_task_exist = () => {
    for (let x in userTasks) {
      if (userTasks.hasOwnProperty(x) && userTasks[x].body === userInput) {
        return true;
      }
    }
    return false;
  };

  const onCheckChange = (index, is_done) => {
    let temp = userTasks;
    temp[index].is_done = is_done;
    setUserTasks([...temp]);
  };

  const delete_tasks = (index) => {
    let temp = userTasks;
    temp.splice(index, 1);
    setUserTasks([...temp]);
  };

  const Tasks = () => {
    return userTasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          task={task}
          id={index}
          delete_tasks={delete_tasks}
          onCheckChange={onCheckChange}
        />
      );
    });
  };

  const show_message = () => {
    if (userTasks.length > 0) {
      return <div className="list-group"> {Tasks()} </div>;
    } else {
      return (
        <Alert>
          <i className="fas fa-info-circle h5 m-0 me-3"></i>
          <span> No tasks added yet</span>
        </Alert>
      );
    }
  };

  return (
    <>
      <h1 className="text-center mb-5"><i className="far fa-check-circle h2 m-0"></i>MyTodo's</h1>
      <SearchBar
        placeholder="Add New Task"
        label="Add"
        onFormSubmit={onFormSubmit}
        auto_submit={false}
      />
      <div className="mt-4">{show_message()}</div>
    </>
  );
};

const TaskItem = (props) => {
  return (
    <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
      <div className="">
        <input
          className="form-check-input me-2"
          id={`task-${props.id}`}
          type="checkbox"
          checked={props.task.is_done}
          value={props.task.body}
          onChange={(e) => props.onCheckChange(props.id, e.target.checked)}
        />
        <label htmlFor={`task-${props.id}`} className="h5 m-0 cursor-pointer">
          {props.task.body}
        </label>
      </div>
      <div className="">
        <i
          className="far fa-trash-alt text-danger cursor-pointer"
          onClick={(e) => {
            props.delete_tasks(props.id);
          }}
        ></i>
      </div>
    </div>
  );
};

export default Todo;
