import React, { useEffect, useState } from 'react';

const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities API endpoint:', apiUrl);
        console.log('Fetched activities:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity, idx) => (
          <li key={idx} className="list-group-item">
            {activity.user_email} - {activity.activity} ({activity.duration} min)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
