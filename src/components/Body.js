import { useEffect, useState } from "react";
import { SEARCH_URL } from "../utils/constants";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();    
    },[])

const fetchData = async () => {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await response.json()
    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

//Conditonal Rendering

    if (listOfRestaurants.length === 0) {
        return <div>
            <div className="search">
            <input type="text" className='searchbox' placeholder='Search....' />
            <img src={SEARCH_URL}
             alt="search" className="searchlogo" />
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={
                () => {
                    const myList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.0
                    );
                    setListOfRestaurants(myList)                  
                }
            }>
                Top Rated Restaurants</button>
        </div>
        < Shimmer />
        </div>
    }
    return (
    <div>
        <div className="search">
            <input type="text" className='searchbox' placeholder='Search....' />
            <img src={SEARCH_URL}
             alt="search" className="searchlogo" />
        </div>
        <div className="filter">
            <button className="filter-btn" onClick={
                () => {
                    const myList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.0
                    );
                    setListOfRestaurants(myList)                  
                }
            }>
                Top Rated Restaurants</button>
        </div>
        <div className="card-sec">
            {
                listOfRestaurants.map((restaurant) => (
                    <RestCard key = {restaurant.info.id} resObj = {restaurant} />
                ))
            }
       
        </div>
    </div>
    );
};

export default Body;