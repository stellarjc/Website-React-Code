import '../css/team.css'
import { SocialIcon } from 'react-social-icons';
function Team() {

    const Leads = [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: ["hashirazhaf@gmail.com", "https://www.linkedin.com/in/hashir-azhaf-898243233", "https://instagram.com/lion_heart_003?igshid=MzNlNGNkZWQ4Mg=="]
        },
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: ["hashirazhaf@gmail.com", "https://www.linkedin.com/in/hashir-azhaf-898243233", "https://instagram.com/lion_heart_003?igshid=MzNlNGNkZWQ4Mg=="]
        },
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: ["hashirazhaf@gmail.com", "https://www.linkedin.com/in/hashir-azhaf-898243233", "https://instagram.com/lion_heart_003?igshid=MzNlNGNkZWQ4Mg=="]
        },
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const publicRelations = [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const content = [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const eventManagment = [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const socialMedia = [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const sat= [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const ast= [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const rc= [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const Card = (props) => {
        return props.cont.map((person) => {
            return <div className="card">
                <div className="card-img-div">
                    <img className='card-img' src={person.image} alt={person.name} />
                </div>
                <div className="card-content">
                    <h1 className='card-content-h1'>{person.name}</h1>
                    <h2 className='card-content-h2'>{person.position}</h2>
                    <div className="card-links">
                        <SocialIcon className="card-content-icons" url={person.links[0]} />
                        <SocialIcon className="card-content-icons" url={person.links[1]} />
                        <SocialIcon className="card-content-icons" url={person.links[2]} />
                    </div>
                </div>
            </div>
        })
    }


    return <div className="main">
        <div className="team-head">
            <h1 className="team-head-h1">Leads</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={Leads} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Public Relations</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={publicRelations} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Content</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={content} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Event Managment</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={eventManagment} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Social Media</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={socialMedia} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Satellite Development</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={sat} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Cosmology</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={ast} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Rocketry</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={rc} />
            </div>
        </div>
    </div>
}

export default Team;