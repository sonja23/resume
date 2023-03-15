import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
    return (
        <header>
            <nav className='navbar'>
                <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                    </li>
                    <li className="nav-item"><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                    <li className="nav-item"><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                    <li className="nav-item"><Link to="education" spy={true} smooth={true} offset={50} duration={500}>Education</Link></li>
                    <li className="nav-item"><Link to="experience" spy={true} smooth={true} offset={50} duration={500} >Experience</Link></li>
                </ul>
            </nav>
        </header>

    )
}