import '../css/team.css'
import { SocialIcon } from 'react-social-icons';
function Team() {

    const Leads = [
        {
            name: "Hashir Azhaf",
            position: "President",
            image: "team/hashir.jpg",
            links: ["mailto:hashirazhaf@gmail.com", "https://www.linkedin.com/in/hashir-azhaf-898243233", "https://instagram.com/lion_heart_003?igshid=MzNlNGNkZWQ4Mg=="]
        },
        {
            name: "Afnan Khazi",
            position: "Vice president",
            image: "team/afnan.jpg",
            links: ["mailto:hashirazhaf@gmail.com", "https://www.linkedin.com/in/hashir-azhaf-898243233", "https://instagram.com/lion_heart_003?igshid=MzNlNGNkZWQ4Mg=="]
        },
        {
            name: "Yash P Jain",
            position: "Secretary",
            image: "team/yash.jpg",
            links: ["https://instagram.com/yash.pjain?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="]
        },
        {
            name: "Avinash Reddy C",
            position: "Web, Content, Graphics",
            image: "team/avinash.jpeg",
            links: ["mailto:avihanvaisri@gmail.com", "https://www.linkedin.com/in/avinash-reddy-c-857057235/", "https://github.com/avinash84319"]
        },
        {
            name: "Nikitha Rathod",
            position: "Treasurer",
            image: "team/nikita.jpg",
            links: ["https://www.linkedin.com/in/sai-dikshith-088270227","https://www.instagram.com/nikita_rathod_31"]
        },
        {
            name: "Rashid",
            position: "Rocketry Head",
            image: "team/rashid.jpg",
            links: ["https://www.linkedin.com/in/mohammedrashid2002","https://www.instagram.com/rashid_5525_rabbani/"]
        },
        {
            name: "Lalitha",
            position: "Public relations",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const content = [
        {
            name: "Lumbini AT",
            position: "Content Head",
            image: "team/lumbini.jpg",
            links: []
        },
        {
            name: "Amreen Ahmedi",
            position: "Graphics Head",
            image: "team/amreen.png",
            links: ["https://instagram.com/am.reeeeeeen?igshid=OGQ5ZDc2ODk2ZA==","https://www.linkedin.com/in/amreen-ahmedi-b92911273?trk=contact-info"]
        },
        {
            name: "Nida Fathima",
            position: "Content writer",
            image: "team/nida.jpg",
            links: ["https://www.linkedin.com/in/syedanidafathima","https://instagram.com/nid.aaa_?igshid=NGExMmI2YTkyZg=="]
        },
        {
            name: "Guruprasad",
            position: "Content writer",
            image: "team/guru.jpg",
            links: ["https://in.linkedin.com/in/guruprasad-navalihalkar-b3077b258"]
        },
        {
            name: "DEEKSHITH R",
            position: "Content writer",
            image: "team/dekshit.jpg",
            links: ["https://www.linkedin.com/in/deekshith-r-51b545258","https://instagram.com/deeksh2004?igshid=OGQ5ZDc2ODk2ZA=="]
        },
        {
            name: "Akash Acharya",
            position: "Graphic designer",
            image: "team/akash.jpg",
            links: ["https://instagram.com/__a_cash?igshid=NGVhN2U2NjQ0Yg==","https://www.linkedin.com/in/akash-acharya-82b702255"]
        },
        {
            name: "Rujwal K",
            position: "Content writer",
            image: "team/rujwal.jpg",
            links: ["https://www.linkedin.com/in/rujwal-k-2014b3258","https://instagram.com/rujwal7?igshid=OGQ5ZDc2ODk2ZA=="]
        },
        {
            name: "Nikhil",
            position: "Graphic designer",
            image: "team/hashir.jpg",
            links: []
        }
    ]

    const eventManagment = [
        {
            name: "Niranjan",
            position: "Event Managment Head",
            image: "team/dixit.jpg",
            links: ["https://www.linkedin.com/in/sai-dikshith-088270227"]
        },
        {
            name: "Sai Dikshith M",
            position: "Event Managment",
            image: "team/dixit.jpg",
            links: ["https://www.linkedin.com/in/sai-dikshith-088270227","https://instagram.com/sai_dikshith_369?igshid=MzMyNGUyNmU2YQ=="]
        },
    ]

    const socialMedia = [
        {
            name: "Amreen Ahmedi",
            position: "Graphics Head",
            image: "team/amreen.png",
            links: ["https://instagram.com/am.reeeeeeen?igshid=OGQ5ZDc2ODk2ZA==","https://www.linkedin.com/in/amreen-ahmedi-b92911273?trk=contact-info"]
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
            name: "Suhani S K",
            position: "Cosmology lead",
            image: "team/suhani.jpg",
            links: ["https://instagram.com/suhani45218?igshid=MzNlNGNkZWQ4Mg==","https://www.linkedin.com/in/suhani-s-k-240659279","https://twitter.com/Suhani28941670?t=iGxNmfl6JW49qAn5HI1nZQ&s=09"]
        }
    ]

    const rc= [
        {
            name: "Rashid",
            position: "Rocketry Head",
            image: "team/rashid.jpg",
            links: ["https://www.linkedin.com/in/mohammedrashid2002","https://www.instagram.com/rashid_5525_rabbani/"]
        },
        {
            name: "Charitha M N",
            position: "Rocketry Head",
            image: "team/charitha.jpg",
            links: ["https://www.linkedin.com/in/charitha-gowda-a379ab207"]
        }
    ]
    const Lk=(props)=>{
        return props.links.map((link)=>{
            return <SocialIcon className="card-content-icons" url={link} />
        })
    }
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
                        <Lk links={person.links}/>
                        {/* <SocialIcon className="card-content-icons" url={person.links[0]} />
                        <SocialIcon className="card-content-icons" url={person.links[1]} />
                        <SocialIcon className="card-content-icons" url={person.links[2]} /> */}
                    </div>
                </div>
            </div>
        })
    }


    return <div className="main">
        <img className='team-img' src="teamimg.jpg" alt="team" />
        <div className="team-head" style={{"paddingTop":"70px"}}>
            <h1 className="team-head-h1">Leads</h1>
        </div>
        <div className="team">
            <div className="team-1">
                <Card cont={Leads} />
            </div>
        </div>
        <div className="team-head">
            <h1 className="team-head-h1">Content And Graphics</h1>
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