import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
    <div className="header">
        <img src={LOGO_URL} alt="logo" className="logo" />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>MyCart</li>
                <li>Profile</li>
                <button className="auth" 
                onClick={ () =>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }
                }>{btnName}</button>
            </ul>
        </div>
    </div>
    );
};

export default Header;