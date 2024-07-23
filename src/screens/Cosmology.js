import '../css/cosmology.css'
function Cosmology() {
  return (
    <div className="cos">
    <img className="cos-img" src="cos.jpg" alt="cosmology" />
    <div className="cos-tit">
      <h1 className='cos-tit-h1'>Cosmology</h1>
      <p className='cos-tit-p'>Wander into the stars</p>
      <button className="cos-tit-btn" onClick={()=>{
        if(window.location.href===`${window.location.protocol+'//'+window.location.host}/cosmology`){
          window.scrollTo({
            top: 800,
            left: 0,
            behavior: "smooth",
          });
      }}}>Explore More</button>
    </div>
     <div className='cos-content'>
            <h1 className='cos-content-main-h1'>What do we do?</h1>
            <p className='cos-content-main-p'>We focus on the various <span className='gradient-underline-pinkk'>astronomical and meteorological observations</span>, sky studies, operations of telescopes and special purpose sensors and cameras, composition of planets, motion of celestial bodies, eclipses, <span className="gradient-underline-bluee">meteor showers, planetary alignments</span>, origin and evolution of the universe, astrobiology, Geeky astrophysical phenomena like <span className='gradient-underline-light-greenn'>black holes, neutron stars, nebulae, galaxy motions</span>, birth of starts and other concepts like gravity,space-time, twin paradox etc. To find the fundamental nature of the universe and our place within it</p>
      </div>
      <div className='cos-content2'>
            <ul className='cos-content2-p'>
              <li> Join us on <span className='gradient-underline-pinkk'>mesmerizing stargazing expeditions</span> where we explore the celestial marvels that adorn our night sky. </li>
             <li> From observing distant galaxies to tracking the movements of planets, 
             we provide opportunities to witness astronomical phenomena firsthand.</li>
             <li> Engage in thought-provoking conversations
              and debates about cosmology, astrophysics, and the future of space exploration. </li>
              <li> Our club provides a platform 
              for intellectual discourse, where members can exchange ideas, challenge conventional wisdom, and <span className='gradient-underline-bluee'>explore the 
              mysteries that still elude us. </span></li></ul>
            <img className='cos-content2-img' src='cos2.jpg' alt="cosmology2"/>
      </div>
      <div className='cos-content3'>
      <img className='cos-content3-img' src='cos3.jpg' alt="cosmology3"/>
            <ul className='cos-content3-p'>
              <li>Participate in <span className='gradient-underline-light-greenn'>interactive workshops and demonstrations</span> where you can delve into 
            various aspects of astronomy and space science.</li>
              <li>Whether it's learning about astrophotography, understanding the 
            life cycles of stars, or constructing your own model rocket, we offer hands-on experiences that ignite curiosity 
            and foster practical skills.</li> </ul>
      </div>
    </div>
  );
}

export default Cosmology;