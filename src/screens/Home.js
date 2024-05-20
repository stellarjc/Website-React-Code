import React from 'react';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import mentors from "../assets/mentors.jpeg";
import team from "../assets/team.jpeg";

function Home() {
    return (
    <div className="home">
        <img className="home-video" src="/rotating-grid-square.gif" alt="club-comp" />
        <div className="hero">
            <img className="club-logo" src={logo} alt="club-logo" />
            {/* <h1 className='home-content-h1'>StellarJC</h1> */}
            <p className="hero-p">✨ In the void of space, we find our place. ✨</p>
        </div>
        <div className="home-main">
                <h1>About Us 👋</h1>
                <p>We are Stellar JC, a captivating space and astronomy club dedicated to unraveling the 
                mysteries of the cosmos and sharing our awe-inspiring discoveries with fellow enthusiasts.
                </p>
                <p>We are passionate stargazers, scientists, and explorers who come together to foster a community of knowledge, curiosity, and appreciation for the vast 
                wonders of the universe.Embark on a captivating odyssey through the cosmos with Stellar JC. Together, let us venture into
                 the unknown, unravel the secrets of the universe, and foster a deeper appreciation for the vastness and beauty of space.</p>
                <div class="section-images">
                    <div class="float-image tilt-back-right"><img class="polaroid-border" alt="The team" src={team}/></div>
                    <div class="float-image tilt-back-right"><img class="polaroid-border" alt="Our mentors" src={mentors}/></div>
                </div>
                <h1>Our Aim 🎯</h1>
                <p>If you are fascinated by the wonders of space, eager to explore the
                    mysteries of the cosmos, and want to connect with like-minded individuals, we invite you to join
                    Stellar JC. Whether you are a seasoned astronomer or just starting your cosmic journey, our club
                    offers a supportive and inclusive environment that nurtures your passion for all things space-related.
                    Embark on a captivating odyssey through the cosmos with Stellar JC. Together, let us venture into the
                    unknown, unravel the secrets of the universe, and foster a deeper appreciation for the vastness and
                    beauty of space.</p>
                <h1>Our Mission 🚀</h1>
                <p>To cultivate inspiration and curiosity in students about space exploration. And letting them experience the wonders of astronomy
                    To encourage scientific discovery and investigation. And addressing the social need for science for the benefit of society
                    To make a social out reach to people for spreading awareness about various astronomical phenomena and their effects on common man's life. On how its knowledge helps fighting social and environmental issues like climate change, global connectivity, global warming etc.
                    To help students keep in pace with the recent technological advancement and promote hands on tech building experience. And developed real time engineering skills
                    To help students seize future opportunities in the space sector And achieve pride for India and the entire world
                </p>
                <h1>Our Vision 🔭</h1>
                <p>A vision serves as a guiding light, illuminating the path towards a desired
                    future. For Stellar JC, the compelling vision is crucial in shaping its purpose, direction, and impact.
                    By envisioning a future where the wonders of the cosmos are explored, minds are inspired, and horizons
                    are expanded, the club can chart a course towards becoming a catalyst for astronomical discovery and
                    education. Our vision of the club is to focus on its commitment to exploration, inspiration, and the
                    pursuit of knowledge of the outer space.
                </p>
        </div>
    </div>
    );
}

export default Home;