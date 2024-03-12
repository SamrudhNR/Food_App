import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
    <div className="header">
        <img src={LOGO_URL} alt="logo" className="logo" />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>MyCart</li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
    );
};

export default Header;