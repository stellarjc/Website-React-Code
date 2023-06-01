import '../css/tech.css'
function Tech() {
    return (
      <div>
        <div className="tec">
        <img className="tec-img" src="tec.jpg" alt="tecmology" />
        <div className="tec-tit">
          <h1 className='tec-tit-h1'>SPACE-TECH</h1>
          <button className="tec-tit-btn" onClick={() => {

          }}>EXPLORE</button>
        </div>
        <div className='tec-content'>
          <h1 className='tec-content-main-h1'>WHAT WE DO</h1>
          <p className='tec-content-main-p'>Focuses on the design, development, manufacture, and operation of basic devices and systems engineered for outer space missions.<br /> It includes spacecraft command systems, space station research equipments technology, launch vehicle abort systems, communication and <br />in-space services such as weather forecasting, remote sensing, satellite navigation systems and electronics.</p>
        </div>
      </div>
      </div>
    );
  }
  
  export default Tech;