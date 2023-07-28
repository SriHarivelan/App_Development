import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to fetch the data
    axios.get('http://localhost:2020/films/film')
      .then(response => {
        setFilms(response.data);
      })
      .catch(error => {
        console.error('Error fetching film data:', error);
      });
  }, []);

  const handleButtonClick = (filmId) => {
    // You can customize what happens when the button is clicked
    console.log(`Clicked row with Film ID: ${filmId}`);
  };

  return (
    <div style ={{ paddingTop:"3%"}}>
      <h1><center>ShortFilm List</center> </h1><br></br>
      <table>
        <thead>
          <tr>
            <th>Film ID</th>
            <th>Film Name</th>
            <th>Rewards</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {films.map(film => (
            <tr key={film.film_id}>
              <td>{film.film_id}</td>
              <td>{film.film_name}</td>
              <td>{film.rewads}</td>
              <td>
                <button
                  onClick={() => handleButtonClick(film.film_id)}
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

export default FilmList;
