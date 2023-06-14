import '../css/Navbar.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Drawer } from 'antd';
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
            <img src="logo-3.png" className="logo-img" alt="logo" />
            <p className="logo-text">STELLAR-JC</p>
        </div>
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
        <div className="dropdown">
        <MenuIcon color="secondary" onClick={showDrawer} />
        <Drawer placement="right" onClose={onClose} open={open} width="200px">
            <p><Link className="menu-list-item-a" to='/' onClick={()=>{setOpen(false);}}>HOME</Link></p>
            <p><Link className="menu-list-item-a" to='/cos' onClick={()=>{setOpen(false);}}>COSMOLOGY</Link></p>
            <p><Link className="menu-list-item-a" to='/roc' onClick={()=>{setOpen(false);}}>ROCKETRY</Link></p>
            <p><Link className="menu-list-item-a" to='/spt' onClick={()=>{setOpen(false);}}>SPACE-TECH</Link></p>
            <p><Link className="menu-list-item-a" to='/spn' onClick={()=>{setOpen(false);}}>SPACE-NEWS</Link></p>
            <p><Link className="menu-list-item-a" to='/tem' onClick={()=>{setOpen(false);}}>TEAM</Link></p>
            <p><Link className="menu-list-item-a" to='/con' onClick={()=>{setOpen(false);}}>CONTACT-US</Link></p>
        </Drawer>
        </div>
    </div>
}

export default Navbar;