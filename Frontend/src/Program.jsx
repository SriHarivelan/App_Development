import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgramList = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to fetch the data
    axios.get('http://localhost:2020/pro/get')
      .then(response => {
        setPrograms(response.data);
      })
      .catch(error => {
        console.error('Error fetching program data:', error);
      });
  }, []);

  const handleButtonClick = (programId) => {
    // You can customize what happens when the button is clicked
    console.log(`Clicked row with Program ID: ${programId}`);
  };

  return (
    <div style={{ paddingTop: "10%", paddingBottom:"10%" }}>
      
      <h1><center>Programming Projects List</center></h1>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Program ID</th>
            <th>Program Name</th>
            <th>Number of Months</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {programs.map(program => (
            <tr key={program.prog_id}>
              <td>{program.prog_id}</td>
              <td>{program.porg_name}</td>
              <td>{program.no_of_months}</td>
              <td>
                <button
                  onClick={() => handleButtonClick(program.prog_id)}
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

export default ProgramList;
