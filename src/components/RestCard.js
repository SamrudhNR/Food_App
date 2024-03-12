import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
    const { resObj } = props;
    console.log(resObj.info.name);
    return (<div className="card">
        <img src={CDN_URL + resObj.info.cloudinaryImageId} alt="food-img" className="food-img" />
        <div className="info">
            <h3>{resObj.info.name}</h3>
            <h4>{resObj.info.cuisines.join(", ")}</h4>
            <h4>{resObj.info.avgRatingString + " stars"}</h4>
            <h4>{resObj.info.costForTwo}</h4>
            <h4>{resObj.info.sla.slaString}</h4>
        </div>
    </div>
    );
};

export default RestCard;