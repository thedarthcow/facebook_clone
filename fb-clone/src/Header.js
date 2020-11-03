import React from 'react'; // installed es7 extention 
                            // used rfce to populate snippet
import "./Header.css";

function Header() {
    return <div className="header">
        <div className="header__left"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png" alt="Facebook Logo" />
        <div className="header__middle"></div>

        <div className="header__right"></div>
    </div>;
}

export default Header;
