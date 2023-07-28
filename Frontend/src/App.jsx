import './App.css';
import LoginPage from "./log";
import Form from './FormValidator';
import Navbar from './navbar';
import Home from './Home';
import {Routes, Route} from 'react-router-dom'
import Services from './services';
import Contact from './contact';
import Friend from './frnd';
import Community from './community';

import UserProfile from './UserProfile';


import Arts from './Arts';
import Program from './Program';
import Music from './Music';
import Video from './Video';
import Hackathon from './Hackathon';
import Short from './Short';
import FeedbackForm from './feedback';
// import FeedForm from './FeedForm';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Form />} />
        <Route path="/frnd" element={<Friend/>}/>
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<UserProfile/>} />
        <Route path="/com" element={<Community/>}/>
        <Route path="/arts" element={<Arts/>}/>
        <Route path="/Program" element={<Program/>}/>
        <Route path="/Music" element={<Music/>}/>
        <Route path="/Video" element={<Video/>}/>
        <Route path="/Hackathon" element={<Hackathon/>}/>
        <Route path="/Short" element={<Short/>}/>
        <Route path="/fed" element={<FeedbackForm/>}/>
        

      </Routes>
    </div>

  );
}

export default App;
