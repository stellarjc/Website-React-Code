import '../css/read.css'
const Read = (props) => {

    const spaceArticle = `
<h2>Exploring the Vast Cosmos: A Journey into the Depths of Space</h2>

<p>The cosmos has always captivated the human imagination, beckoning us to embark on a journey of exploration and discovery. Space, the final frontier, stretches out infinitely, its vastness peppered with galaxies, stars, planets, and mysteries waiting to be unraveled. Let us embark on a cosmic adventure, gazing into the depths of space and marveling at its wonders.</p>

<h2>The Marvels of the Milky Way</h2>

<p>Our home galaxy, the Milky Way, is a breathtaking sight. With over 100 billion stars, it spans a staggering 100,000 light-years. Glimpsing its ethereal band of light in the night sky fills us with awe and a sense of belonging to something greater than ourselves.</p>

<h2>A Symphony of Stars and Nebulas</h2>

<p>Among the countless stars, some shine more brightly than others. Sirius, the Dog Star, gleams brilliantly, captivating observers throughout history. And then there's Betelgeuse, a red supergiant star that might one day explode in a supernova, shaping the night with its reddish hue.</p>

<p>Nebulas add an artistic touch to space, their swirling colors formed from gas and dust. The Orion Nebula, a stellar nursery, births new stars, illuminating the dark expanse with their cosmic radiance.</p>

<h2>Planets: The Celestial Wanderers</h2>

<p>Our solar system hosts an array of planets, each with its unique personality. Mercury, closest to the Sun, scorches under its intense rays, while Venus hides behind its thick toxic atmosphere. Mars, the Red Planet, continues to captivate our imagination with the potential for extraterrestrial life.</p>

<p>The gas giants, Jupiter and Saturn, don their mesmerizing rings, while Uranus and Neptune, the ice giants, showcase their serene beauty from afar. And of course, the blue gem of our solar system, Earth, stands out as a haven for life in the vastness of space.</p>

<h2>Exploring the Unknown: Deep Space Missions</h2>

<p>Humans have extended their reach beyond Earth, sending probes and rovers to explore distant planets and moons. From the Viking landers on Mars to the rovers Opportunity and Curiosity, we have learned much about our neighboring red planet.</p>

<p>Voyager 1 and 2 continue to journey toward the outer reaches of the solar system, carrying a golden record with sounds and images of Earth – a message to potential extraterrestrial civilizations.</p>

<h2>The Enigma of Black Holes</h2>

<p>Black holes remain one of the most enigmatic and powerful entities in the cosmos. Formed from the remnants of massive stars, their gravitational pull is so intense that nothing, not even light, can escape their grasp. They lurk in the depths of space, and while we cannot see them directly, their influence on surrounding matter reveals their presence.</p>

<h2>Wonders of the Universe: Distant Galaxies</h2>

<p>Beyond our Milky Way lie other galaxies, each with billions of stars and their own unique stories. The Andromeda Galaxy, the nearest spiral galaxy to our own, beckons in the night sky. Observing distant galaxies allows us to look back in time, as their light has traveled across billions of years to reach us.</p>

<h2>The Cosmic Web: Dark Matter and Energy</h2>

<p>While visible matter – stars, planets, and galaxies – is awe-inspiring, it makes up only a small fraction of the universe. The majority is composed of mysterious dark matter and dark energy, both of which elude direct detection. They shape the cosmos, influencing the motion and evolution of galaxies on a grand scale.</p>

<h2>The Search for Extraterrestrial Life</h2>

<p>The question of whether we are alone in the universe has long intrigued humanity. Scientists are actively searching for signs of life beyond Earth, scanning distant exoplanets for habitable conditions and potential biosignatures. The discovery of even simple microbial life beyond our planet would have profound implications for our understanding of life's place in the universe.</p>

<h2>Awe and Wonder: The Essence of Space Exploration</h2>

<p>Space, with its vastness and mysteries, inspires us to dream, to explore, and to seek answers to the most profound questions. It reminds us of our interconnectedness and the importance of preserving our pale blue dot in the cosmos. As we continue to gaze into the night sky with wonder, let us remember that space exploration is not just about discovering distant realms; it is about understanding our place in the grand cosmic tapestry.</p>

<p>Let the stars be our guide as we embrace the challenges of exploring space, for in doing so, we discover more about ourselves and the limitless possibilities that lie ahead. May the quest to unravel the secrets of the universe inspire generations to come, guiding us toward a future where the wonders of space are a beacon of hope and knowledge.</p>
`


    return <div className="read">
        <h1 className='read-head'>Create Custom Links and Prevent Transitions With React Router</h1>
        <div className="read-img-div">
        <img src='roc2.jpg' alt='rocket' className='read-img' />
        <div dangerouslySetInnerHTML={{ __html: spaceArticle }} className='read-main-text'/>
        </div>
    </div>
}

export default Read;