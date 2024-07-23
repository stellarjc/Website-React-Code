import '../css/team.css'
import { SocialIcon } from 'react-social-icons';
import {leads,content, eventManagment, socialMedia, sat, rc} from '../data/teamData'
function Team() {

    const Lk=(props)=>{
        return props.links.map((link)=>{
            return <SocialIcon className="card-content-icons" url={link} />
        })
    }
    const Card = (props) => {
        return props.cont.map((person) => {
            return (
                <div className="card">
                    <div className="card-img-div">
                        <img className='card-img' src={person.image} alt={person.name} />
                    </div>
                    <div className="card-content">
                        <h1 className='card-content-h1'>{person.name}</h1>
                        <h2 className='card-content-h2'>{person.position}</h2>
                        <div className="card-links">
                            <Lk links={person.links}/>
                        </div>
                    </div>
                </div>
            )
        })
    }

    const groups = {"Leadership":leads, "Content Team":content, "Event Management":eventManagment, "Social Media": socialMedia, "Satellite Development":sat, "Rocketry":rc}

    return (
        <div className="main">
            <img className='team-img' src="teamimg.jpg" alt="team" />
            {Object.entries(groups).map(([key, value]) => (
                <>
                <div className="team-head">
                    <h1 className="team-head-h1">{key}</h1>
                </div>
                <div className="team">
                    <div className="team-1">
                        <Card cont={value} />
                    </div>
                </div>
                </>
            ))}
        </div>
    )
}

export default Team;