import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
function Home3() {

    window.addEventListener('scroll', function (e) {
        console.log(this.window.scrollY);
        if(this.window.location.href==='http://localhost:3000/h3'){
        if (this.window.scrollY >50) {
            console.log('scrolling down');
            window.location.href = '/';
        }
    }
    });
    
    return <div className="home">
        <div className="home-main">
            <div className="home-main-aim">
                <h1 className="home-main-aim-h1">ABOUT US</h1>
                <p className="home-main-aim-p">Welcome to Stellar JC, a captivating space and astronomy club dedicated to unraveling the 
                mysteries of the cosmos and sharing our awe-inspiring discoveries with fellow enthusiasts. We are passionate stargazers, 
                scientists, and explorers who come together to foster a community of knowledge, curiosity, and appreciation for the vast 
                wonders of the universe.Embark on a captivating odyssey through the cosmos with Stellar JC. Together, let us venture into
                 the unknown, unravel the secrets of the universe, and foster a deeper appreciation for the vastness and beauty of space.</p>
            </div>
            <h1 className="home-main-h1">MISSION</h1>
            <h1 className="home-main-h1">AIM</h1>
            <h1 className="home-main-h1">AIM</h1>
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