import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
    const { resObj } = props;
    {
        if(resObj.info.cuisines.length > 3){
            resObj.info.cuisines=resObj.info.cuisines.slice(0,3);
            resObj.info.cuisines.push("....");
        }
    }
    return (<div className="m-4 p-2 w-[250px] h-[375px] bg-orange-100 hover:bg-orange-300 rounded-lg" >
        
        <img className="mb-4 w-[200px] h-[150px] block mx-auto rounded-lg" src={CDN_URL + resObj.info.cloudinaryImageId} alt="food-img" />
        <div className="w-[200px] m-3">
            <h3 className="font-bold py-1 text-lg">{resObj.info.name}</h3>
            <h4>{resObj.info.cuisines.join(", ")}</h4>
            <h4>{resObj.info.avgRatingString + " stars"}</h4>
            <h4>{resObj.info.costForTwo}</h4>
            <h4>{resObj.info.sla.slaString}</h4>
        </div>
    </div>
    );
};

export default RestCard;