import React from 'react';
import '../css/Home.css';
function Home(){
    return <div className="home">
        <video  className="home-video" src="/club-comp.mp4" autoPlay loop muted />
        <div className="home-content">
            <h1 className='home-content-h1'>STELLAR JC</h1>
            <p className="home-content-p">A place where you can learn, grow and explore</p>
            {/* <button className="home-content-btn">EXPLORE</button> */}
            <nav className="home-content-nav">
                <span className="home-content-nav-span">.</span>
                <span className="home-content-nav-span">.</span>
                <span className="home-content-nav-span">.</span>
            </nav>
        </div>
        {/* <div className="home-b1"> */}
        {/* </div> */}
    </div>
}

export default Home;