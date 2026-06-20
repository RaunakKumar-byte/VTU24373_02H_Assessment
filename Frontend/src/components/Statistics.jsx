function Statistics({ tasks }) {
  const total = tasks.length;
  const pending = tasks.filter((t) => t.status === 'Pending').length;
  const completed = tasks.filter((t) => t.status === 'Completed').length;

  return (
    <div className="stats">
      <div className="stat-box">
        <p>Total Tasks</p>
        <h2>{total}</h2>
      </div>
      <div className="stat-box">
        <p>Pending Tasks</p>
        <h2>{pending}</h2>
      </div>
      <div className="stat-box">
        <p>Completed Tasks</p>
        <h2>{completed}</h2>
      </div>
    </div>
  );
}

export default Statistics;
