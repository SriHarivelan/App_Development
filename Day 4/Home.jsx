import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div>
    <div className='root' style={{marginLeft:'20px'} }>
    <div className="hp" >
      <p>
      "Let's Share our Work with great Colloboratin to do the best one "
      </p>
     

      <div className="but">
    <button type='submit'>GET STARTED NOW!</button>
    

</div>
<div className="logo-box" style={{width:"50%", marginTop:"30px", marginLeft:"0%", borderRadius:"100%"}}>
      {/* <img src="images/pg.jpeg"></img> */}
      <h1><b><i>VShare</i></b></h1><br></br>
      </div>
      <div className="logo-box" style={{width:"90%", marginTop:"5px", marginLeft:"0%", borderRadius:"100%"}}>
      <h3>Conncet To Work Together</h3>
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
    <div className="para">
      <p>Worried about insufficient teamates!?Don't Worry we are here to help you..!</p>
    </div>
    <div className="som">
      <p>
      VShare-We Share our work and do our best!!!
      </p>
    </div>
  
   
    </div> 
  )
}

export default Home