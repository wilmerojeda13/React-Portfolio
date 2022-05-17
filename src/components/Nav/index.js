import React from 'react';


function Nav(props) {
    const {currentNav, setNav } = props;

    return (
        <nav>
            <ul className="flex-row mobile-view">
                <li className={currentNav === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() =>setNav("about")}>About Me</span>
                </li>

                <li className={currentNav === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() =>setNav("portfolio")}>Portfolio</span>
                </li>

                <li className={currentNav === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() =>setNav("contact")}>Contact</span>
                </li>

                <li className={currentNav === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() =>setNav("resume")}>Resume</span>
                </li>
    
                
            </ul>
        </nav>
    );
}

export default Nav;