import '../css/cosmology.css'
function Cosmology() {
  return (
    <div className="cos">
    <img className="cos-img" src="cos.jpg" alt="cosmology" />
    <div className="cos-tit">
      <h1 className='cos-tit-h1'>COSMOLOGY</h1>
      <button className="cos-tit-btn" onClick={()=>{

      }}>EXPLORE</button>
    </div>
     <div className='cos-content'>
            <h1 className='cos-content-main-h1'>WHAT WE DO</h1>
            <p className='cos-content-main-p'>Focuses on the various astronomical and meteorological observations, sky studies, operations of telescopes and special<br /> purpose sensors and cameras, composition of planets, motion of celestial bodies, eclipses, meteor showers, planetary alignments, origin and <br />evolution of the universe, astrobiology, geeky astrophysical phenomena like black holes, neutron stars, nebulae, galaxy motions, birth of starts and other concepts like gravity,space-time, twin paradox etc. To find the fundamental nature of the universe and our place within it</p>
        </div>
    </div>
  );
}

export default Cosmology;