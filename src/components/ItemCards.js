import React from 'react';

const ItemCards = (props) => {
    const items = props.item;
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    console.log(items)

  return (
    <div key={items?.card?.info?.id}>
        {
            items.map((item) => (
                <div className='flex border-b-2 py-8 items-center justify-between'>
                    {console.log(CDN_URL+item?.card?.info?.imageId)}
        <div className='p-2 m-1 w-2/3'>
            <h2 className="font-semibold text-sm text-gray-600">{item?.card?.info?.name}</h2>
            <h3 className="font-medium text-sm text-gray-600">₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</h3>
            <h4 className="my-1.5 text-sm text-gray-500">₹ {item?.card?.info?.description}</h4>
        </div>
        <div className='w-1/4 p-1'>
            <img className="w-[120px] h-[95px] rounded-lg" src={CDN_URL+item?.card?.info?.imageId} onError={(e)=>{
                e.target.onError=null;
                e.target.style.display='none';

                }} />
            <div className="absolute top-auto w-[100%] h-[100%]">
                <button className='bg-white shadow-lg rounded-lg px-[30px] py-1.5 mx-[8px] text-green-600 font-bold'>Add +</button>
            </div>
        </div>
        </div>
        ))}
    </div>
  )
}

export default ItemCards;