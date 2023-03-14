import React from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#023047',
    fontFamily: 'Arial',
};
export default function Navbar() {
    return (

        <div>
            <nav className='navbar'>
                <ul className="nav-links">

                    <li className="nav-item">
                        <Link to="/" style={linkStyle}>Home</Link>
                    </li>
                    <li className="nav-item"><Link style={linkStyle} to="/about">About</Link></li>
                    <li className="nav-item"><Link style={linkStyle} to="/experience">Experience</Link></li>
                    <li className="nav-item"><Link style={linkStyle} to="/skills">Skills</Link></li>

                </ul>
            </nav>
        </div>

    )
}