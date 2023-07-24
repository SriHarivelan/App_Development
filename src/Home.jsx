import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
// import AOS from "aos";
// import "aos/dist/aos.css";
import { FaRegCopyright } from "react-icons/fa6";
const Home = () => {
  return (
    
      <div className='home'>
        {/* <div className='hari' style={{backgroundImage:'url(/images/imp.jpg)'}}> */}
        <div className='root' style={{ marginLeft: '20px' }} data-aos="fade-down">
          <div className="hp" data-aos="fade-down" >
            <p>
              "Let's Share our Work with great Colloboratin to do the best one "
            </p>
            {/* <div className='forpic'>
     <img src='/images/handshake.png'></img>
     </div> */}

            {/* <div className="but">
        <nav>
          <Link to='/reg'>
    <button type='submit'>GET STARTED NOW!</button>
    </Link>
    </nav>
    

</div> */}
            <div>
              <div className="logo-box" style={{ width: "50%", marginTop: "30px", marginLeft: "0%", borderRadius: "100%" }}>
                <h1><b><i>VShare</i></b></h1><br></br>
              </div>


              <div className="logo-box" style={{ width: "90%", marginTop: "5px", marginLeft: "0%", borderRadius: "100%" }}>
                <h3>Conncet To Work Together</h3>
              </div>
              <img src="hand.gif"></img>
            </div>
            <div className="drops">
              <p>
                ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
              </p>

            </div>

          </div>
          <div className="cal">

          </div>
        </div>
        <div className="para" data-aos="fade-down">
          <p>Worried about insufficient teamates!?Don't Worry we are here to help you..!</p>
        </div>
        <div className="som">
          <p>
            VShare-We Share our work and do our best!!!
          </p>
        </div>
        <div className="bt">
          <div className="pro">
            <ul className="no-bullets">
              <h4>Product</h4>
              <br />
              <li>Home</li>
              <li>Projects</li>
              <li>Community</li>
              <li>My Team</li>
            </ul>
          </div>

          <div className="pro">
            <ul className="no-bullets">
              <h4>Support</h4>
              <br />
              <li>Help</li>
              <li>need help ?</li>
              <li>+91 6379626366</li>
              <li>+91 9788259259</li>
            </ul>
          </div>

          <div className="pro">
            <ul className="no-bullets">
              <h4>Contact us on</h4>
              <br />
              <h6>Artistic collab</h6>
              <li>1671 Coastal Highway</li>
              <li>Lewes Delaware 15576</li>
              <li>USA</li>
              <li>contact@artisticcollab.com</li>
              <li>Privacy Policy</li>
              <li>Terms of use</li>
              <li>GDPR</li>
            </ul>
          </div>
          <div className="ta">
            <a href="https://www.instagram.com/srihari._.karthikeyan/">
              <FaSquareInstagram fontSize={40} />
            </a>
            <a href="https://twitter.com/login?lang=en">
              <FaSquareTwitter fontSize={40} />
            </a>
            <a href="https://in.linkedin.com/">
              <FaLinkedinIn fontSize={40} />
            </a>
            <a href="https://www.facebook.com/">
              <FaSquareFacebook fontSize={40} />
            </a>
          </div>

        </div>
      </div>
      



  )
}

export default Home