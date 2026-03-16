import React, { useEffect, useState } from 'react';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        let results = data.results || data;
        if (!results || results.length === 0) {
          results = [
            { name: 'Marvel' },
            { name: 'DC' },
          ];
        }
        setTeams(results);
        console.log('Teams API endpoint:', apiUrl);
        console.log('Fetched teams:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Teams</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{team.name}</td>
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

export default Teams;
