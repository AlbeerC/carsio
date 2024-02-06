import './Navbar.scss'
import { FaInstagram, FaFacebook, FaXTwitter, FaBars } from "react-icons/fa6";
import { useState } from 'react';
import logo from '../../assets/logo-carsio.png'
import { Link } from 'react-router-dom';

function Navbar () {

    const [showMenu, setShowMenu] = useState(false)

    const handleToggle = () => {
        setShowMenu(!showMenu)
    }

    return (
        <header>
            <nav className="nav-mobile">
                <Link to='/'><img src={logo} alt="logo carsio" /></Link>
                <button onClick={handleToggle}><FaBars className='hide'/></button>
            </nav>
            <ul className={showMenu ? 'show' : 'hide'}>
{/*                 <li>Buscar</li>
                <li>Nosotros</li>
                <li>Contacto</li> */}
            </ul>
            <div className="socials">
                <a href=""><FaInstagram /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaXTwitter /></a>
            </div>
        </header>
    )
}

export default Navbar