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
        <div className='roc-content2'>
            <p className='roc-content2-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <img className='roc-content2-img' src='cos2.jpg' />
      </div>
      <div className='roc-content3'>
      <img className='roc-content3-img' src='cos2.jpg' />
            <p className='roc-content3-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      </div>
    </div>
  );
}

export default Rocketry;