import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SEARCH_URL, SWIGGY_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestCard from "./RestCard";
import RestMenu from "./RestMenu";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();    
    },[])

    const [searchBtn, setSearchBtn] = useState("");

const fetchData = async () => {
    const response = await fetch(SWIGGY_API)
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
    <div className="bg-blue-50">
        <div className="flex justify-between p-4 m-4">
            <button className="px-5 w-15 py-2 bg-blue-100 hover:bg-blue-300 mx-4 rounded-lg " onClick={
                () => {
                    const myList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.0
                    );
                    setFilteredData(myList)                  
                }
            }>
                Top Rated Restaurants</button>
                <div className="flex">
            <input type="text" className=' focus:ring-blue-300 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-400 shadow-sm ' placeholder='Search....' value={searchBtn} 
            onChange={ (e) => {
                setSearchBtn(e.target.value);
            }}
            />
            <button className="px-4 py-2 bg-blue-100 hover:bg-blue-300 mx-4 rounded-lg" 
            onClick={ () =>{
                const myList = listOfRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchBtn.toLowerCase())
                );
                setFilteredData(myList)    
            }} 
            > Search</button>
        </div>
        </div>
        <div className="flex flex-wrap justify-center items-center">
            {
                filteredData.map((restaurant) => (
                    <Link key = {restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestCard  resObj = {restaurant} /> </Link>
                ))
            }
       
        </div>
    </div>
    );
};

export default Body;