import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
function Home() {

    window.addEventListener('scroll', function (e) {
        console.log(this.window.scrollY);
        console.log(this.window.location.href);
        if (this.window.location.href === 'http://localhost:3000/') {
            if (this.window.scrollY > 50) {
                console.log('scrolling down');
                window.location.href = '/h2';
            }
        }
    });

    return <div className="home">
        {/* <video className="home-video" src="/club-comp.mp4" autoPlay loop muted /> */}
        <img className="home-video" src="/rotating-grid-square.gif" alt="club-comp" />
        <div className="home-content">
            <h1 className='home-content-h1'>STELLAR JC</h1>
            <p className="home-content-p">A place where you can learn, grow and explore</p>
            <nav className="home-content-nav">
                <Link to="/"><span className="home-content-nav-spana">.</span></Link>
                <Link to="/h2"><span className="home-content-nav-span">.</span></Link>
                <Link to="/h3"><span className="home-content-nav-span">.</span></Link>
            </nav>
        </div>
        <div className="home-b1">
            <button className="home-b1-btn" onClick={() => {
                    window.location.href = '/h2';
            }}>EXPLORE MORE</button>
        </div>
    </div>
}

export default Home;