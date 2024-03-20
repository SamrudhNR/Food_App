import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
    <div className="flex justify-between shadow-lg bg-orange-100 p-2">
        <img src={LOGO_URL} alt="logo" className="w-36 rounded-full px-2 mx-4" />
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">
                    <div>Online Status: {onlineStatus ? '🟢' : '🔴' } </div>
                </li>
                <li className="px-4">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="px-4">MyCart</li>
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