import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../utils/constants';
import RestauratCategory from './RestaurantCategory';
import Shimmer from './Shimmer';

const RestMenu = () => {
    const {restId} = useParams();

    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        const response = await fetch(MENU_API_URL+restId)
        const json = await response.json();
        setMenu(json.data)
        console.log(json.data);
        // const categories = menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(categories);
    }

    const categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(menu);

  return (
    !menu ? <Shimmer/> :
    <div className='w-3/5 mx-auto my-4'>
      <div className='py-2 border-b-2'>
        <div className='flex justify-between'>
          <div>
            <h1 className='font-bold text-lg'>{menu?.cards[2]?.card?.card?.info?.name}</h1>
            <p className='text-xs text-gray-500'>{menu?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
            <p className='text-xs text-gray-500'>{menu?.cards[2]?.card?.card?.info?.areaName}</p>
          </div>
          <div className='border border-gray-300 p-3'>
            <div className="flex border-b-2">
            <span className="icon-[carbon--star-filled] bg-green-500 my-1.5" />
            <h1 className='font-bold text-xl text-green-500 px-1'>{menu.cards[2]?.card?.card?.info?.avgRatingString}</h1>
            </div>
            <h3 className='text-xs text-gray-500'>{menu?.cards[2]?.card?.card?.info?.totalRatingsString}</h3>
          </div>
        </div>
        <div className="flex">
          <span className="icon-[carbon--cyclist] mx-2"></span>
          <p className="text-xs text-gray-500">{menu?.cards[2]?.card?.card?.info?.sla?.lastMileTravel} KMs | ₹{menu.cards[0]?.card?.card?.info?.feeDetails?.totalFee/100?menu.cards[0]?.card?.card?.info?.feeDetails?.totalFee/100:40} Delivery fee will apply</p>
        </div>
      </div>
      <div className='flex my-2 p-1'>
        <span className="icon-[carbon--time]"/>
        <p className="text-xs text-gray-500 px-2">{menu?.cards[2]?.card?.card?.info?.sla?.slaString}</p>
        <span className="icon-[carbon--currency]" color='#666666' />
        <p className="text-xs text-gray-500 px-2">{menu?.cards[2]?.card?.card?.info?.costForTwoMessage}</p>
      </div>
      {categories.map((category) => (<RestauratCategory key={category?.card?.card?.title} category={category}/>))}
    </div>
  )
}

export default RestMenu;