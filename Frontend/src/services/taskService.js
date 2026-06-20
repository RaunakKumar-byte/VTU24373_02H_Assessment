import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks';

export const getTasks = () => axios.get(API_URL);

export const createTask = (task) => axios.post(API_URL, task);

export const updateTaskStatus = (id, status) =>
  axios.put(`${API_URL}/${id}`, { status });

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
