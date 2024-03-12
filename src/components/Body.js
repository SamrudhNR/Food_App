import { SEARCH_URL } from "../utils/constants";
import restList from "../utils/mockData";
import RestCard from "./RestCard";

const Body = () => {
    return (
    <div>
        <div className="search">
            <input type="text" className='searchbox' placeholder='Search....' />
            <img src={SEARCH_URL}
             alt="search" className="searchlogo" />
        </div>
        <div className="card-sec">
            {
                restList.map((restaurant) => (
                    <RestCard key = {restaurant.info.id} resObj = {restaurant} />
                ))
            }
       
        </div>
    </div>
    );
};

export default Body;