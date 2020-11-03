import React from 'react'; // installed es7 extention 
                            // used rfce to populate snippet
import "./Header.css";  
import SearchIcon from "@material-ui/icons/Search"; // You must import from material UI 
import HomeIcon from "@material-ui/icons/Home";                            // pieces can be found using the inspect tool in browser
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

function Header() {
    return <div className="header">
        <div className="header__left"> 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/214px-Facebook_f_logo_%282019%29.svg.png"
        alt="Facebook Logo" 
        />
        <div className="header__input">
            <SearchIcon />
            <input type="text" />
        </div>
        </div> 

        <div className="header__middle"></div>
            <div className="header__option">
                <HomeIcon fontSize="large" />
            </div>

        <div className="header__right"></div>
    </div>;
}

export default Header;
