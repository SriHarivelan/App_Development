import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FriendTable = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get('http://localhost:2020/frie/friend') // Replace with your actual API endpoint
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{paddingTop:"4%",}}>
      <h2><center>Friend Table</center></h2><br></br>
      <table>
        <thead>
          <tr>
            <th>Artist ID</th>
            <th>Name</th>
            <th>Domain</th>
          </tr>
        </thead>
        <tbody>
          {friends.map(friend => (
            <tr key={friend.artist_id}>
              <td>{friend.artist_id}</td>
              <td>{friend.name}</td>
              <td>{friend.domain}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FriendTable;
