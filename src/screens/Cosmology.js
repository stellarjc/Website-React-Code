import '../css/cosmology.css'
function Cosmology() {
  return (
    <div className="cos">
    <img className="cos-img" src="cos.jpg" alt="cosmology" />
    <div className="cos-tit">
      <h1 className='cos-tit-h1'>COSMOLOGY</h1>
      <button className="cos-tit-btn" onClick={()=>{
        if(window.location.href==='http://localhost:3000/cos'){
          window.scrollTo(0,1000);
      }}}>EXPLORE MORE</button>
    </div>
     <div className='cos-content'>
            <h1 className='cos-content-main-h1'>What we do</h1>
            <p className='cos-content-main-p'>We focus on the various astronomical and meteorological observations, sky studies, operations of telescopes and special<br /> purpose sensors and cameras, composition of planets, motion of celestial bodies, eclipses, meteor showers, planetary alignments, origin and <br />evolution of the universe, astrobiology, geeky astrophysical phenomena like black holes, neutron stars, nebulae, galaxy motions, birth of starts and other concepts like gravity,space-time, twin paradox etc. To find the fundamental nature of the universe and our place within it</p>
      </div>
      <div className='cos-content2'>
            <p className='cos-content2-p'>Join us on mesmerizing stargazing expeditions where we explore the celestial
             marvels that adorn our night sky. From observing distant galaxies to tracking the movements of planets, 
             we provide opportunities to witness astronomical phenomena firsthand.Engage in thought-provoking conversations
              and debates about cosmology, astrophysics, and the future of space exploration. Our club provides a platform 
              for intellectual discourse, where members can exchange ideas, challenge conventional wisdom, and explore the 
              mysteries that still elude us</p>
            <img className='cos-content2-img' src='cos2.jpg' alt="cosmology2"/>
      </div>
      <div className='cos-content3'>
      <img className='cos-content3-img' src='cos3.jpg' alt="cosmology3"/>
            <p className='cos-content3-p'>Participate in interactive workshops and demonstrations where you can delve into 
            various aspects of astronomy and space science. Whether it's learning about astrophotography, understanding the 
            life cycles of stars, or constructing your own model rocket, we offer hands-on experiences that ignite curiosity 
            and foster practical skills.</p>
      </div>
    </div>
  );
}

export default Cosmology;