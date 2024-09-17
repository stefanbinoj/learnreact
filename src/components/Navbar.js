import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar(props) {
    const [color, setColor] = useState({
        nav: 'light',
        color: 'white',
        text:"black"
    });
    const [btntext, setBtnText] = useState('Enable Dark Mode');

    const darkmode = () => {
        if (color.nav === 'light') {
            setColor({
                nav: 'dark',
                color: 'black',
                text:"white"
            });
            document.body.style.backgroundColor='black'
            setBtnText("Enable Light Mode");
        } else {
            setColor({
                nav: 'light',
                color: 'white',
                text:"black"
            });
            setBtnText("Enable Dark Mode");            
            document.body.style.backgroundColor='white'


        }
    };

    return (
        <div style={{ backgroundColor: `${color.color }`}}>
            <nav className={`navbar text-${color.text} navbar-expand-lg bg-${color.nav} `}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        <div className="justify-content-end">
                            <button onClick={darkmode}>{btntext}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

Navbar.defaultProps = {
    about: "About Us",
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string,
};

export default Navbar;
