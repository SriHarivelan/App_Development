import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MusicList = () => {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to fetch the data
    axios.get('http://localhost:2020/mus/get')
      .then(response => {
        setMusic(response.data);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>",response.data )
      })
      .catch(error => {
        console.error('Error fetching music data:', error);
      });
  }, []);

  const handleButtonClick = (musicId) => {
    // You can customize what happens when the button is clicked
    console.log(`Clicked row with Music ID: ${musicId}`);
  };

  return (
    <div style={{paddingTop:"3%", paddingBottom:"3%"}}>
      <h1><center>Music List</center></h1>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Music ID</th>
            <th>Genre</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {music?.map(song => (
            <tr key={song?.music_id}>
              <td>{song?.music_id}</td>
              <td>{song?.genre}</td>
              <td>{song?.gender}</td>
              <td>
                <button
                  onClick={() => handleButtonClick(song.Music_id)}
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

export default MusicList;
