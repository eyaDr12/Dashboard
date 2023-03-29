import React, { useState } from 'react';
import './Tache.css';

import { AiOutlineDelete } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";
const Kanban = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Task 1', description: 'Description of task 1' },
    { id: 2, title: 'Task 2', description: 'Description of task 2' }
  ]);
  const [doingList, setDoingList] = useState([
    { id: 3, title: 'Task 3', description: 'Description of task 3' }
  ]);
  const [doneList, setDoneList] = useState([
    { id: 4, title: 'Task 4', description: 'Description of task 4' }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [editedTask, setEditedTask] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState('');
  const [editedTaskDescription, setEditedTaskDescription] = useState('');

  const handleDragStart = (event, item, listName) => {
    event.dataTransfer.setData('item', JSON.stringify(item));
    event.dataTransfer.setData('listName', listName);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, listName) => {
    event.preventDefault();
    const item = JSON.parse(event.dataTransfer.getData('item'));
    const prevListName = event.dataTransfer.getData('listName');

    if (prevListName === listName) return;

    switch (prevListName) {
      case 'todo':
        setTodoList(todoList.filter(t => t.id !== item.id));
        break;
      case 'doing':
        setDoingList(doingList.filter(t => t.id !== item.id));
        break;
      case 'done':
        setDoneList(doneList.filter(t => t.id !== item.id));
        break;
      default:
        break;
    }

    switch (listName) {
      case 'todo':
        setTodoList([...todoList, item]);
        break;
      case 'doing':
        setDoingList([...doingList, item]);
        break;
      case 'done':
        setDoneList([...doneList, item]);
        break;
      default:
        break;
    }
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      description: newTaskDescription
    };
    setTodoList([...todoList, newTask]);
    setShowAddForm(false);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const handleEditTask = (task) => {
    setEditedTask(task);
    setEditedTaskTitle(task.title);
    setEditedTaskDescription(task.description);
  };

  const handleSaveTask = (event) => {
    event.preventDefault();
    const updatedTask = {
      ...editedTask,
      title: editedTaskTitle,
      description: editedTaskDescription
    };
    const listName = getListName(editedTask.id);
    switch (listName) {
      case 'todo':
        setTodoList(todoList.map(t => t.id === updatedTask.id ? updatedTask : t));
        break;      case 'doing':
        setDoingList(doingList.map(t => t.id === updatedTask.id ? updatedTask : t));
        break;
      case 'done':
        setDoneList(doneList.map(t => t.id === updatedTask.id ? updatedTask : t));
        break;
      default:
        break;
    }
    setEditedTask(null);
    setEditedTaskTitle('');
    setEditedTaskDescription('');
  };

  const handleDeleteTask = (taskId) => {
    const listName = getListName(taskId);
    switch (listName) {
      case 'todo':
        setTodoList(todoList.filter(t => t.id !== taskId));
        break;
      case 'doing':
        setDoingList(doingList.filter(t => t.id !== taskId));
        break;
      case 'done':
        setDoneList(doneList.filter(t => t.id !== taskId));
        break;
      default:
        break;
    }
  };

  const handleCancelEdit = () => {
    setEditedTask(null);
    setEditedTaskTitle('');
    setEditedTaskDescription('');
  };

  const getListName = (taskId) => {
    if (todoList.find(t => t.id === taskId)) {
      return 'todo';
    }
    if (doingList.find(t => t.id === taskId)) {
      return 'doing';
    }
    if (doneList.find(t => t.id === taskId)) {
      return 'done';
    }
    return '';
  };

  return (
    <div className="kanban">
     
        <h1>Kanban Board</h1>
    
      <div className="kanban__content">
        <div
          className="kanban__list"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, 'todo')}
        >
          <h2 className="kanban__list-title">To Do</h2>
          <ul className="kanban__list-items">
            {todoList.map(task => (
              <li
                key={task.id}
                className="kanban__list-item"
                draggable
                onDragStart={(event) => handleDragStart(event, task, 'todo')}
              >
                <div className="kanban__list-item-content">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="kanban__list-item-actions">
                  <button className="kanban__list-item-action-button" onClick={() => handleEditTask(task)}>
                    <i className="fas fa-pencil-alt"><TfiPencil/></i>
                  </button>
                  <button className="kanban__list-item-action-button" onClick={() => handleDeleteTask(task.id)}>
                    <i className="fas fa-trash"><AiOutlineDelete/></i>
                  </button>
                </div>
              </li>
            ))}
            {showAddForm ? (
              <li className="klm">
                <form onSubmit={handleAddTask}>
                  <input
                  className='klma'
                    type="text"
                    placeholder="Task Title"
                    value={newTaskTitle}
                    onChange={(event) => setNewTaskTitle(event.target.value)}
                  />
                  <textarea
                    className='klma'
                    placeholder="Task Description"
                    value={newTaskDescription}
                    onChange={(event) => setNewTaskDescription(event.target.value)}
                  />
                  <div >
                    <button type="submit" className='klifa'>Add Task</button>
                   
                    <button type="button" className='klifa' onClick={() => setShowAddForm(false)}>Cancel</button>
                  </div>
                </form>
              </li>
            ) : (
              <li className="kanban__list-item kanban__list-item-add" onClick={() => setShowAddForm(true)}>
                <i className="fas fa-plus"></i>
                <span>Add Task</span>
              </li>
            )}
          </ul>
        </div>
        <div
          className="kanban__list"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, 'doing')}
          
        >
          <h2 className="kanban__list-title">Doing</h2>
          <ul className="kanban__list-items">
            {doingList.map(task => (
              <li
                key={task.id}
                className="kanban__list-item"
                draggable
                onDragStart={(event) => handleDragStart(event, task, 'doing')}
              >
                <div className="kanban__list-item-content">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="kanban__list-item-actions">
                  <button className="kanban__list-item-action-button" onClick={() => handleEditTask(task)}>
                    <i className="fas fa-pencil-alt"><TfiPencil/></i>
                  </button>
                  <button className="kanban__list-item-action-button" onClick={() => handleDeleteTask(task.id)}>
                    <i className="fas fa-trash"><AiOutlineDelete/></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="kanban__list"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, 'done')}>
          <h2 className="kanban__list-title">Done</h2>
          <ul className="kanban__list-items">
            {doneList.map(task => (
              <li
                key={task.id}
                className="kanban__list-item"
                draggable
                onDragStart={(event) => handleDragStart(event, task, 'done')}
              >
                <div className="kanban__list-item-content">
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                </div>
                <div className="kanban__list-item-actions">
                  <button className="kanban__list-item-action-button" onClick={() => handleEditTask(task)}>
                    <i className="fas fa-pencil-alt"><TfiPencil/></i>
                  </button>
                  <button className="kanban__list-item-action-button" onClick={() => handleDeleteTask(task.id)}>
                    <i className="fas fa-trash"><AiOutlineDelete/></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kanban;

