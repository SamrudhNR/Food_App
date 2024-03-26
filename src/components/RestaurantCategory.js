import React, { useState } from 'react'
import ItemCards from './ItemCards';

const RestauratCategory = (props) => {
    const category = props.category?.card?.card;
    const items = category?.itemCards;
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    }

  return (
    <div>
      <div className='flex justify-between p-4 cursor-pointer shadow-lg' onClick={handleClick}>
        <h1 className='font-bold'>{category?.title+" ("+category?.itemCards.length+")"}</h1>
        <span className="icon-[carbon--chevron-down]" />
      </div>
      {
      isActive &&
        <ItemCards key={category?.card?.info?.id} item={category?.itemCards}/>
      }
    </div>
  )
}

export default RestauratCategory;