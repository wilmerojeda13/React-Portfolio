import React from "react";
import Nav from "../Nav";

function Header(props) {
    const {currentNav, setNav } = props;

    return (
        <header>
            <div>
                <h2>WIlmer React Portfolio</h2>
            </div>
            <div>
                <Nav
                currentNav={currentNav}
                setNav={setNav}
                ></Nav>
            </div>
        </header>
    )
}
export default Header;

