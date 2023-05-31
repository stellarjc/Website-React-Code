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
            <p className='cos-content-main-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec<br /> diam laoreet sollicitudin.Fusce ullamcorper imperdiet turpis, non accumsan enim egestas in. </p>
        </div>
    </div>
  );
}

export default Cosmology;