import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => (
    <div className="header">
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="logo" className="logo" />
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>MyCart</li>
                <li>Profile</li>
            </ul>
        </div>
    </div>
)

const RestCard = (props) => (
    <div className="card">
        <img src="https://freepngimg.com/thumb/food/8-2-food-free-download-png.png" alt="food-img" className="food-img" />
        <div className="info">
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>{props.delivery}</h4>
        </div>
    </div>
)

const Body = () => (
    <div>
        <div className="search">
            <input type="text" className='searchbox' placeholder='Search....' />
            <img src="https://www.clipartmax.com/png/middle/16-163646_search-icon-orange-clip-art-search-icon-png-orange.png" alt="search" className="searchlogo" />
        </div>
        <div className="card-sec">
        <RestCard resName="The Good Bowl" cuisine="Biryani, Pastas" rating="4.4 stars" delivery="37 minutes"/>
        <RestCard resName="KFC" cuisine="Chicken" rating="3.8 stars" delivery="40 minutes" />
       
        </div>
    </div>
)
const AppLayout = () => (
    <div className="app">
        <Header/>
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);