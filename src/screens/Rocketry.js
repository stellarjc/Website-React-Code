import '../css/rocketry.css'
function Rocketry() {
  return (
    <div>
      <div className="roc">
        <img className="roc-img" src="roc.jpg" alt="rocmology" />
        <div className="roc-tit">
          <h1 className='roc-tit-h1'>ROCKETRY</h1>
          <button className="roc-tit-btn" onClick={() => {

          }}>EXPLORE</button>
        </div>
        <div className='roc-content'>
          <h1 className='roc-content-main-h1'>WHAT WE DO</h1>
          <p className='roc-content-main-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec<br /> diam laoreet sollicitudin.Fusce ullamcorper imperdiet turpis, non accumsan enim egestas in. </p>
        </div>
      </div>
    </div>
  );
}

export default Rocketry;