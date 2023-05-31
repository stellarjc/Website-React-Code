import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
function Home3(){

    window.addEventListener('scroll', function (e) {
        console.log(this.window.scrollY);
    });


    return <div className="home">
        <video  className="home-video" src="/club-comp.mp4" autoPlay loop muted />
        <div className="home-content">
            <h1 className='home-content-h1'>STELLAR JC</h1>
            <p className="home-content-p">A place where you can learn, grow and explore</p>
            {/* <button className="home-content-btn">EXPLORE</button> */}
            <nav className="home-content-nav">
                <Link to="/"><span className="home-content-nav-span">.</span></Link>
                <Link to="/h2"><span className="home-content-nav-span">.</span></Link>
                <Link to="/h3"><span className="home-content-nav-spana">.</span></Link>
            </nav>
        </div>
        {/* <div className="home-b1"> */}
        {/* </div> */}
    </div>
}

export default Home3;