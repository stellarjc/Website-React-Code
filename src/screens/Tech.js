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
          <p className='tec-content-main-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec<br /> diam laoreet sollicitudin.Fusce ullamcorper imperdiet turpis, non accumsan enim egestas in. </p>
        </div>
      </div>
      </div>
    );
  }
  
  export default Tech;