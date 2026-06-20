import { useCallback, useEffect, useMemo, useState } from 'react';
import { deleteTask, getTasks, updateTaskStatus } from '../services/taskService';
import LoadingSpinner from '../components/LoadingSpinner';
import Statistics from '../components/Statistics';
import SearchBar from '../components/SearchBar';
import TaskTable from '../components/TaskTable';
import TaskCard from '../components/TaskCard';
import Pagination from '../components/Pagination';

const PAGE_SIZE = 5;

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [page, setPage] = useState(1);

  const loadTasks = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch {
      setError('Failed to load tasks. Make sure backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  const handleComplete = async (id) => {
    try {
      const res = await updateTaskStatus(id, 'Completed');
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    } catch {
      setError('Could not update task.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch {
      setError('Could not delete task.');
    }
  };

  const filtered = useMemo(() => {
    let list = [...tasks];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((t) => t.title.toLowerCase().includes(q));
    }

    if (statusFilter !== 'All') {
      list = list.filter((t) => t.status === statusFilter);
    }

    list.sort((a, b) => {
      const d1 = new Date(a.createdAt);
      const d2 = new Date(b.createdAt);
      return sortOrder === 'newest' ? d2 - d1 : d1 - d2;
    });

    return list;
  }, [tasks, search, statusFilter, sortOrder]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [search, statusFilter, sortOrder]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="page">
      <h1>Dashboard</h1>
      {error && <p className="msg error">{error}</p>}

      <Statistics tasks={tasks} />

      <SearchBar
        search={search}
        onSearchChange={setSearch}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />

      {filtered.length === 0 ? (
        <div className="empty">
          <p>No tasks found.</p>
          {tasks.length === 0 && <p>Add your first task from the Add Task page.</p>}
        </div>
      ) : (
        <>
          <div className="show-desktop">
            <TaskTable tasks={visible} onComplete={handleComplete} onDelete={handleDelete} />
          </div>
          <div className="show-mobile">
            {visible.map((task) => (
              <TaskCard key={task._id} task={task} onComplete={handleComplete} onDelete={handleDelete} />
            ))}
          </div>
          <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
}

export default Dashboard;
