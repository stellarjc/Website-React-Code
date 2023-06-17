import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
function Home2() {

    window.addEventListener('scroll', function (e) {
        console.log(this.window.scrollY);
        if (this.window.location.href === 'http://localhost:3000/h2') {
            if (this.window.scrollY > 350) {
                console.log('scrolling down');
                window.location.href = '/h3';
            }
        }
    });

    return <div className="home">
        <div className="home-main">
            <div className="home-main-aim">
                <h1 className="home-main-aim-h1">AIM</h1>
                <p className="home-main-aim-p">If you are fascinated by the wonders of space, eager to explore the
                    mysteries of the cosmos, and want to connect with like-minded individuals, we invite you to join
                    Stellar JC. Whether you are a seasoned astronomer or just starting your cosmic journey, our club
                    offers a supportive and inclusive environment that nurtures your passion for all things space-related.
                    Embark on a captivating odyssey through the cosmos with Stellar JC. Together, let us venture into the
                    unknown, unravel the secrets of the universe, and foster a deeper appreciation for the vastness and
                    beauty of space.</p>
            </div>
            <div className="home-main-aim">
                <h1 className="home-main-aim-h1">MISSION</h1>
                <p className="home-main-aim-p">To cultivate inspiration and curiosity in students about space exploration. And letting them experience the wonders of astronomy
                    To encourage scientific discovery and investigation. And addressing the social need for science for the benefit of society
                    To make a social out reach to people for spreading awareness about various astronomical phenomena and their effects on common man's life. On how its knowledge helps fighting social and environmental issues like climate change, global connectivity, global warming etc.
                    To help students keep in pace with the recent technological advancement and promote hands on tech building experience. And developed real time engineering skills
                    To help students seize future opportunities in the space sector And achieve pride for India and the entire world
                </p>
            </div>
            <div className="home-main-aim">
                <h1 className="home-main-aim-h1">VISION</h1>
                <p className="home-main-aim-p">A vision serves as a guiding light, illuminating the path towards a desired
                    future. For Stellar JC, the compelling vision is crucial in shaping its purpose, direction, and impact.
                    By envisioning a future where the wonders of the cosmos are explored, minds are inspired, and horizons
                    are expanded, the club can chart a course towards becoming a catalyst for astronomical discovery and
                    education. Our vision of the club is to focus on its commitment to exploration, inspiration, and the
                    pursuit of knowledge of the outer space.
                </p>
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
        <div className="home-b2">
            <button className="home-b2-btn" onClick={() => {
                window.location.href = '/h3';
            }}>Next</button>
        </div>
    </div>
}

export default Home2;