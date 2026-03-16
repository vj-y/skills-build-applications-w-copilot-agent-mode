import React, { useEffect, useState } from 'react';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);


  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        let results = data.results || data;
        if (!results || results.length === 0) {
          results = [
            { user_email: 'superman@dc.com', activity: 'Flight', duration: 60 },
            { user_email: 'ironman@marvel.com', activity: 'Suit Training', duration: 45 },
          ];
        }
        setActivities(results);
        console.log('Activities API endpoint:', apiUrl);
        console.log('Fetched activities:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Activities</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>#</th>
                  <th>User Email</th>
                  <th>Activity</th>
                  <th>Duration (min)</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{activity.user_email}</td>
                    <td>{activity.activity}</td>
                    <td>{activity.duration}</td>
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

export default Activities;
