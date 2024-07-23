import '../css/rocketry.css'
function Rocketry() {
  return (
    <div>
      <div className="roc">
        <img className="roc-img" src="roc.jpg" alt="rocmology" />
        <div className="roc-tit">
          <h1 className='roc-tit-h1'>ROCKETRY</h1>
          <button className="roc-tit-btn" onClick={()=>{
        if(window.location.href===`${window.location.protocol+'//'+window.location.host}/rocketry`){
          window.scrollTo({
            top: 800,
            left: 0,
            behavior: "smooth",
          });
      }}}>EXPLORE MORE</button>
        </div>
        <div className='roc-content'>
          <h1 className='roc-content-main-h1'>WHAT WE DO</h1>
          <p className='roc-content-main-p'>Focuses on aerospace, aerodynamics, orbital mechanics, 
          cryogenic fuels, rocket science and dynamics, launch pad systems.
Learn about the principles of Rocket Science, Rocket Design and Propulsion systems.</p>
        </div>
        <div className='roc-content2'>
        <ul className='roc-content2-p'>
              <li> Join us on <span className='gradient-underline-pinkk'>mesmerizing stargazing expeditions</span> where we explore the celestial marvels that adorn our night sky. </li>
             <li> From observing distant galaxies to tracking the movements of planets, 
             we provide opportunities to witness astronomical phenomena firsthand.</li>
             <li> Engage in thought-provoking conversations
              and debates about cosmology, astrophysics, and the future of space exploration. </li>
              <li> Our club provides a platform 
              for intellectual discourse, where members can exchange ideas, challenge conventional wisdom, and <span className='gradient-underline-bluee'>explore the 
              mysteries that still elude us. </span></li></ul>
            <img className='roc-content2-img' alt="rocket in the background" src='roc2.jpg' />
      </div>
      <div className='roc-content3'>
      <img className='roc-content3-img' alt="rocket" src='roc3.png' />
        <ul className='roc-content3-p'>
              <li>Participate in <span className='gradient-underline-light-greenn'>interactive workshops and demonstrations</span> where you can delve into 
            various aspects of astronomy and space science.</li>
              <li>Whether it's learning about astrophotography, understanding the 
            life cycles of stars, or constructing your own model rocket, we offer hands-on experiences that ignite curiosity 
            and foster practical skills.</li> </ul>
      </div>
      </div>
    </div>
  );
}

export default Rocketry;