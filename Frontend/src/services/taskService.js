import axios from 'axios';

const API_URL = 'https://vtu-24373-02-h-assessment-i5n85u1vi.vercel.app/tasks';

export const getTasks = () => axios.get(API_URL);

export const createTask = (task) => axios.post(API_URL, task);

export const updateTaskStatus = (id, status) =>
  axios.put(`${API_URL}/${id}`, { status });

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
