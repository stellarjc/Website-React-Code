import '../css/Navbar.css'
import { Link } from 'react-router-dom'
function navbar() {
    return <div className="navbar">
        <div className="logo">
            <img src="logo-3.png" className="logo-img" alt="logo" />
            <p className="logo-text">STELLAR-JC</p>
        </div>
        <div className="menu">
            <ul className="menu-list">
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/'>Home</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/cos'>Cosmology</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/roc'>Rocketry</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/spt'>Space-Tech</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/spn'>Space-News</Link></li>
            </ul>
        </div>
    </div>
}

export default navbar;