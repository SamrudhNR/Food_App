import React from 'react'

const CartItems = (props) => {
    const item = props.item;
    const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    console.log(item);
  return (
    <div >
        {
                <div className='flex border-b-2 py-2 items-center justify-between'>
                    {/* {console.log(CDN_URL+item?..imageId)} */}
        <div className='p-2 m-1 w-2/3'>
            <h2 className="font-semibold text-sm text-gray-600">{item?.name}</h2>
            <h3 className="font-medium text-sm text-gray-600">₹ {item?.price ? item?.price/100 : item?.defaultPrice/100}</h3>
        </div>
        <div className='w-1/4 p-1'>
            <img className="w-[120px] h-[95px] rounded-lg" src={CDN_URL+item?.imageId} onError={(e)=>{
                e.target.onError=null;
                e.target.style.display='none';

                }} />
        </div>
        </div>
        }
    </div>
  )
}

export default CartItems