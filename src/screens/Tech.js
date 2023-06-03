import '../css/tech.css'
function Tech() {
    return (
      <div>
        <div className="tec">
        <img className="tec-img" src="tec.jpg" alt="tecmology" />
        <div className="tec-tit">
          <h1 className='tec-tit-h1'>SPACE-TECH</h1>
          <button className="tec-tit-btn" onClick={()=>{
        if(window.location.href==='http://localhost:3000/spt'){
          window.scrollTo(0,795);
      }}}>EXPLORE MORE</button>
        </div>
        <div className='tec-content'>
          <h1 className='tec-content-main-h1'>WHAT WE DO</h1>
          <p className='tec-content-main-p'>Focuses on the design, development, manufacture, and operation of basic devices and systems engineered for outer space missions.<br /> It includes spacecraft command systems, space station research equipments technology, launch vehicle abort systems, communication and <br />in-space services such as weather forecasting, remote sensing, satellite navigation systems and electronics.</p>
        </div>
      </div>
      <div className='tec-content2'>
            <p className='tec-content2-p'>At Stellar JC, we believe in pushing the boundaries of exploration and innovation.
             We offer opportunities for members to engage in satellite making projects. From designing and assembling miniature
              satellites to programming their functions, these projects allow our members to gain practical experience in 
              aerospace engineering and contribute to the advancement of space technology.</p>
            <img className='tec-content2-img' src='tec2.jpg' />
      </div>
      <div className='tec-content3'>
      <img className='tec-content3-img' src='tec3.jpg' />
            <p className='tec-content3-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.<br /> Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum</p>
      </div>
      </div>
    );
  }
  
  export default Tech;