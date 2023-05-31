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
                <p className="home-main-aim-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor posuere ac ut consequat semper. At quis risus sed vulputate odio ut enim blandit. Vitae semper quis lectus nulla. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Arcu vitae elementum curabitur vitae nunc sed velit dignissim. Sed vulputate mi sit amet. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices. Egestas maecenas pharetra convallis posuere morbi. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo.

                    Feugiat nisl pretium fusce id velit ut tortor pretium. Lobortis feugiat vivamus at augue. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Etiam non quam lacus suspendisse faucibus interdum posuere. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Libero nunc consequat interdum varius. Lobortis feugiat vivamus at augue eget arcu. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Massa tempor nec feugiat nisl pretium fusce id velit ut. Sed tempus urna et pharetra pharetra massa massa ultricies. Tortor at risus viverra adipiscing at in tellus. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Venenatis cras sed felis eget velit aliquet. Non enim praesent elementum facilisis. Gravida arcu ac tortor dignissim. Sed nisi lacus sed viverra tellus in hac habitasse platea. Vitae et leo duis ut diam quam nulla porttitor. Amet cursus sit amet dictum sit amet. Scelerisque in dictum non consectetur a.

                    Amet purus gravida quis blandit turpis cursus in hac.</p>
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