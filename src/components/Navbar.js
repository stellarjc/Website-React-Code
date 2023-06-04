import '../css/Navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
    return <div className="navbar">
        {/* <div className="logo">
            <img src="logo-3.png" className="logo-img" alt="logo" />
            <p className="logo-text">STELLAR-JC</p>
        </div> */}
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-list-item"><Link className="menu-list-item-a1" to='/'>HOME</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/cos'>COSMOLOGY</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/roc'>ROCKETRY</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/spt'>SPACE-TECH</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/spn'>SPACE-NEWS</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/tem'>TEAM</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/con'>CONTACT-US</Link></li>
            </ul>
        </div>
    </div>
}

export default navbar;