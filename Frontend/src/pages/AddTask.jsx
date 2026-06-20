import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../services/taskService';

function AddTask() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', description: '', status: 'Pending' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [saving, setSaving] = useState(false);

  const validate = () => {
    const err = {};
    if (!form.title.trim()) err.title = 'Title is required';
    if (form.description.trim().length < 20) err.description = 'Description must be at least 20 characters';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    if (!validate()) return;

    setSaving(true);
    try {
      await createTask(form);
      setSuccess('Task created! Redirecting to dashboard...');
      setTimeout(() => navigate('/'), 1500);
    } catch {
      setErrors({ form: 'Failed to create task. Try again.' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="page">
      <h1>Add Task</h1>
      {success && <p className="msg success">{success}</p>}
      {errors.form && <p className="msg error">{errors.form}</p>}

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Task Title</label>
        <input id="title" name="title" value={form.title} onChange={handleChange} />
        {errors.title && <span className="field-err">{errors.title}</span>}

        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="4" value={form.description} onChange={handleChange} />
        {errors.description && <span className="field-err">{errors.description}</span>}

        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={form.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
        </select>

        <button type="submit" className="btn submit" disabled={saving}>
          {saving ? 'Saving...' : 'Create Task'}
        </button>
      </form>
    </div>
  );
}

export default AddTask;
