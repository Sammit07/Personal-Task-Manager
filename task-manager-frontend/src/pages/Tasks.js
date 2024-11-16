// src/pages/Tasks.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found'); // Ensure token exists

      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      if (error.response && error.response.status === 401) {
        // Redirect to login if unauthorized
        localStorage.removeItem('token');
        navigate('/login');
      } else {
        alert('Could not fetch tasks. Please make sure you are logged in.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No token found'); // Ensure token exists

      await axios.post(
        '/api/tasks',
        { title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle('');
      setDescription('');
      fetchTasks(); // Refresh the task list after adding
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Could not add task. Please try again.');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="col-md-8 offset-md-2">
      <h2 className="my-4">Tasks</h2>
      
      {loading ? <p>Loading tasks...</p> : null}

      <form onSubmit={handleAddTask}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success mt-3">Add Task</button>
      </form>

      <ul className="list-group mt-4">
        {tasks.length === 0 ? (
          <li className="list-group-item">No tasks available</li>
        ) : (
          tasks.map((task) => (
            <li key={task._id} className="list-group-item">
              <h5>{task.title}</h5>
              <p>{task.description}</p>
              <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Tasks;
