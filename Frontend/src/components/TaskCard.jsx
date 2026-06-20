function formatDate(date) {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function TaskCard({ task, onComplete, onDelete }) {
  const done = task.status === 'Completed';

  return (
    <div className="task-card">
      <div className="card-top">
        <h3>{task.title}</h3>
        <span className={`badge badge-${task.status.replace(' ', '-').toLowerCase()}`}>{task.status}</span>
      </div>
      <p>{task.description}</p>
      <small>Created: {formatDate(task.createdAt)}</small>
      <div className="card-btns">
        {!done && (
          <button type="button" className="btn green" onClick={() => onComplete(task._id)}>
            Complete
          </button>
        )}
        <button type="button" className="btn red" onClick={() => onDelete(task._id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
