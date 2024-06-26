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
                <li className="menu-list-item"><Link className="menu-list-item-a1" to='/'>StellarJC</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/cosmology'>Cosmology</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/roccketry'>Rocketry</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/technology'>Space Tech</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/blog'>Space Talk</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/team'>The Team</Link></li>
                <li className="menu-list-item"><Link className="menu-list-item-a" to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
        <div className="dropdown">
        <MenuIcon color="primary" onClick={showDrawer} sx={{"marginTop":"7px"}}/>
        <Drawer placement="right" onClose={onClose} open={open} width="200px" 
        bodyStyle={{"text-align":"right","background-color":"black"}}
        style={{"text-align":"right","background-color":"black"}}
        >
            <p><Link className="menu-list-item-a" to='/' onClick={()=>{setOpen(false);}}>Home</Link></p>
            <p><Link className="menu-list-item-a" to='/cosmology' onClick={()=>{setOpen(false);}}>Cosmology</Link></p>
            <p><Link className="menu-list-item-a" to='/rocketry' onClick={()=>{setOpen(false);}}>Rocketry</Link></p>
            <p><Link className="menu-list-item-a" to='/technology' onClick={()=>{setOpen(false);}}>Space Tech</Link></p>
            <p><Link className="menu-list-item-a" to='/blog' onClick={()=>{setOpen(false);}}>Space Talk</Link></p>
            <p><Link className="menu-list-item-a" to='/team' onClick={()=>{setOpen(false);}}>The Team</Link></p>
            <p><Link className="menu-list-item-a" to='/contact' onClick={()=>{setOpen(false);}}>Contact Us</Link></p>
        </Drawer>
        </div>
    </div>
}

export default Navbar;