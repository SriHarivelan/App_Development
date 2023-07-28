
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './community.css'

const Community = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    APICall();
  }, []);

  const APICall = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:2020/com/get`);
      setCommunities(response.data);
    } catch (error) {
      console.error('Error in getting the data....', error);
    }
  };

  const getRandomColor = () => {
    const colors = ["antiquewhite", "rgb(222, 242, 188)", "rgb(185, 207, 230)", "rgb(230, 185, 222)", "rgb(230, 185, 185)"];
    
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="bod" style={{borderRadius:'5px',margin:'40px'}}>
        <center>

      <h1 style={{marginBottom:'30px',color:'whitesmoke',fontSize:'50px'}}>Community Details</h1>
        </center>
      {communities.map((community, index) => (
        <center>

       
        <div
          key={`${community.artist_id}_${index}`}
          style={{ backgroundColor: getRandomColor(), padding: "10px", marginBottom: "40px",width:'555px',borderRadius:'20px' }}
        >
          <span className="txt" >Artist ID: {community.artist_id}</span>
          <br />
          
          <span className="txt">Artist Name: {community.name}</span>
          <br />
          <span className="txt">Artist Domain: {community.domain}</span>
          <br />
          <span className="txt">Artist YOP: {community.yop}</span>
        </div>
        </center>
      ))}
    </div>
  );
};

export default Community;

