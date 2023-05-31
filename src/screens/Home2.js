import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
function Home2(){

    window.addEventListener('scroll', function (e) {
        console.log(this.window.scrollY);
        if (this.window.scrollY >50) {
            console.log('scrolling down');
            window.location.href = '/h3';
        }
    });

    return <div className="home">
        <div className="home-main">
            <div className="home-main-aim">
                <h1 className="home-main-aim-h1">AIM</h1>
                <p className="home-main-aim-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.</p>
           </div>
           <div className="home-main-aim">
                <h1 className="home-main-aim-h1">MISSION</h1>
                <p className="home-main-aim-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.</p>
           </div>
           <div className="home-main-aim">
                <h1 className="home-main-aim-h1">VISION</h1>
                <p className="home-main-aim-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                id est laborum.</p>
           </div>
           <h1 className="home-main-h1">MISSION</h1>
           <h1 className="home-main-h1">AIM</h1>
           <h1 className="home-main-h1">AIM</h1>
            <nav className="home-content-nav">
                <Link to="/"><span className="home-content-nav-span">.</span></Link>
                <Link to="/h2"><span className="home-content-nav-spana">.</span></Link>
                <Link to="/h3"><span className="home-content-nav-span">.</span></Link>
            </nav>
        </div>
        {/* <div className="home-b1"> */}
        {/* </div> */}
    </div>
}

export default Home2;