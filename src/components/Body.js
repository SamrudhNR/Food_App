import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEARCH_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();    
    },[])

    const [searchBtn, setSearchBtn] = useState("");

const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await response.json()
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    const orginalList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurants(orginalList)
    setFilteredData(orginalList)
}

//Conditonal Rendering
const onlineStatus = useOnlineStatus();

if( !onlineStatus) return (
    <div>Something went wrong, please check your internet connection! 🔴</div>
) 

    if (listOfRestaurants.length === 0) {
        return  < Shimmer />
    }
    return (
    <div>
        <div className="filter">
            <button className="filter-btn" onClick={
                () => {
                    const myList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.0
                    );
                    setFilteredData(myList)                  
                }
            }>
                Top Rated Restaurants</button>
                <div className="search">
            <input type="text" className='searchbox' placeholder='Search....' value={searchBtn} 
            onChange={ (e) => {
                setSearchBtn(e.target.value);
            }}
            />
            <button className="search-btn" 
            onClick={ () =>{
                const myList = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchBtn.toLowerCase())
                );
                setFilteredData(myList)    
            }} 
            > Search</button>
        </div>
        </div>
        <div className="card-sec">
            {
                filteredData.map((restaurant) => (
                    <Link key = {restaurant.info.id} 
                    to={restaurant?.cta?.link}
                    style={{ textDecoration: 'none' }}><RestCard resObj = {restaurant} /> </Link>
                ))
            }
       
        </div>
    </div>
    );
};

export default Body;