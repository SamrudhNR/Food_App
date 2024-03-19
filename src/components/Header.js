import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
    <div className="header">
        <img src={LOGO_URL} alt="logo" className="logo" />
        <div className="nav-items">
            <ul>
                <li>
                    <div>Online Status: {onlineStatus ? '🟢' : '🔴' } </div>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>MyCart</li>
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