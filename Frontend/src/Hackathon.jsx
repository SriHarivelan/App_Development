import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HackList = () => {
  const [hacks, setHacks] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to fetch the data
    axios.get('http://localhost:2020/mus/has')
      .then(response => {
        setHacks(response.data);
      })
      .catch(error => {
        console.error('Error fetching hack data:', error);
      });
  }, []);

  const handleButtonClick = (hackId) => {
    // You can customize what happens when the button is clicked
    console.log(`Clicked row with Hack ID: ${hackId}`);
  };

  return (
    <div>
      <h1><center> Hackathon List</center></h1><br></br>
      <table>
        <thead>
          <tr>
            <th>Hack ID</th>
            <th>Hack Name</th>
            <th>Number of Participants</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hacks.map(hack => (
            <tr key={hack.hack_id}>
              <td>{hack.hack_id}</td>
              <td>{hack.hack_name}</td>
              <td>{hack.nop}</td>
              <td>
                <button
                  onClick={() => handleButtonClick(hack.hack_id)}
                  style={{ cursor: "pointer" }}
                >
                  Click Here
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HackList;
