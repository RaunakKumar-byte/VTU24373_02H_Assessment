function formatDate(date) {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function TaskTable({ tasks, onComplete, onDelete }) {
  return (
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>
                <span className={`badge badge-${task.status.replace(' ', '-').toLowerCase()}`}>
                  {task.status}
                </span>
              </td>
              <td>{formatDate(task.createdAt)}</td>
              <td>
                {task.status !== 'Completed' && (
                  <button type="button" className="btn green" onClick={() => onComplete(task._id)}>
                    Complete
                  </button>
                )}
                <button type="button" className="btn red" onClick={() => onDelete(task._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
