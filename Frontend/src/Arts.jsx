import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Arts.css'

const ArtsList = () => {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to fetch the data
    axios.get('http://localhost:2020/co/get') // Replace '/api/arts' with your backend API endpoint for fetching the arts data
      .then(response => {
        setArts(response.data);
      })
      .catch(error => {
        console.error('Error fetching arts data:', error);
      });
  }, []);

  
    return (
        <div style={{ justifyContent: "center", paddingTop: "10%", paddingBottom:"5%" }}>
          <h1 style={{ paddingLeft: "42%" }}>Arts Project List</h1>
          <br />
          <table>
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Number of Days</th>
                <th>For more</th> {/* Add the "Action" column header */}
              </tr>
            </thead>
            <tbody>
              {arts.map(art => (
                <tr key={art.pro_id}>
                  <td>{art.pro_id}</td>
                  <td>{art.pro_name}</td>
                  <td>{art.no_of_days}</td>
                  <td>
                    <button
                      onClick={() => handleRowClick(art.pro_id)}
                      style={{ cursor:"pointer" }}
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

export default ArtsList;
