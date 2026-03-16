import React, { useEffect, useState } from 'react';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        let results = data.results || data;
        if (!results || results.length === 0) {
          results = [
            { name: 'Superman', email: 'superman@dc.com', team: 'DC' },
            { name: 'Iron Man', email: 'ironman@marvel.com', team: 'Marvel' },
          ];
        }
        setUsers(results);
        console.log('Users API endpoint:', apiUrl);
        console.log('Fetched users:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Users</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Team</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.team}</td>
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

export default Users;
