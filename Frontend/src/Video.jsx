import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to fetch the data
    axios.get('http://localhost:2020/vid/show')
      .then(response => {
        setVideos(response.data);
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  }, []);

  const handleButtonClick = (videoId) => {
    // You can customize what happens when the button is clicked
    console.log(`Clicked row with Video ID: ${videoId}`);
  };

  return (
    <div style={{paddingTop:"3%"}}>
      <h1><center>Video Projects List</center></h1><br></br>
      <table>
        <thead>
          <tr>
            <th>Video ID</th>
            <th>Project Name</th>
            <th>Number of Days</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {videos.map(video => (
            <tr key={video.vid_id}>
              <td>{video.vid_id}</td>
              <td>{video.pro_name}</td>
              <td>{video.no_of_days}</td>
              <td>
                <button
                  onClick={() => handleButtonClick(video.Vid_id)}
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

export default VideoList;
