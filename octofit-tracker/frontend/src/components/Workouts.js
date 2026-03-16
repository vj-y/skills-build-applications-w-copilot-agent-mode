import React, { useEffect, useState } from 'react';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

function Workouts() {
  const [workouts, setWorkouts] = useState([]);


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        let results = data.results || data;
        if (!results || results.length === 0) {
          results = [
            { name: 'Strength Training', suggested_for: 'DC' },
            { name: 'Agility Drills', suggested_for: 'Marvel' },
          ];
        }
        setWorkouts(results);
        console.log('Workouts API endpoint:', apiUrl);
        console.log('Fetched workouts:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Workouts</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Suggested For</th>
                </tr>
              </thead>
              <tbody>
                {workouts.map((workout, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{workout.name}</td>
                    <td>{workout.suggested_for}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
