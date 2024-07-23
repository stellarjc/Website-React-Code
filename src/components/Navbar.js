import '../css/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Drawer } from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    


    return <div className="navbar">
        <div className="logo">
        <img src="/logo-3.png" className="logo-img" alt="logo" />
        <Link to="/"><p className="logo-text">StellarJC</p></Link>
        </div>
        <div className="menu">
            <ul className="menu-list">
                <li><Link className="menu-list-item-a1" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/'>StellarJC</Link></li>
                <li><Link className="menu-list-item-a" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/cosmology'>Cosmology</Link></li>
                <li><Link className="menu-list-item-a" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/rocketry'>Rocketry</Link></li>
                <li><Link className="menu-list-item-a" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/technology'>Space Tech</Link></li>
                <li><Link className="menu-list-item-a" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/blog'>Space Talk</Link></li>
                <li><Link className="menu-list-item-a" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/team'>The Team</Link></li>
                <li><Link className="menu-list-item-a" onClick={() => window.scrollTo({top:0,left:0,behavior:"instant"})} to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
        <div className="dropdown">
        <MenuIcon color="primary" onClick={showDrawer} sx={{"marginTop":"7px"}}/>
        <Drawer placement="right" onClose={onClose} open={open} width="200px" 
        bodyStyle={{"textAlign":"right","backgroundColor":"black"}}
        style={{"textAlign":"right","backgroundColor":"black"}}
        >
            <p><Link className="menu-list-item-a" to='/' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>Home</Link></p>
            <p><Link className="menu-list-item-a" to='/cosmology' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>Cosmology</Link></p>
            <p><Link className="menu-list-item-a" to='/rocketry' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>Rocketry</Link></p>
            <p><Link className="menu-list-item-a" to='/technology' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>Space Tech</Link></p>
            <p><Link className="menu-list-item-a" to='/blog' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>Space Talk</Link></p>
            <p><Link className="menu-list-item-a" to='/team' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>The Team</Link></p>
            <p><Link className="menu-list-item-a" to='/contact' onClick={()=>{setOpen(false);window.scrollTo({top:0,left:0,behavior:"instant"})}}>Contact Us</Link></p>
        </Drawer>
        </div>
    </div>
}

export default Navbar;