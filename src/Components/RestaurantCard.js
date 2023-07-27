import { useParams, Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="w-[250px] h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.info.cloudinaryImageId
        }
      />

      <h3 className="font-bold p-1">{resData.info.name}</h3>
      <h4 className="p-1">{resData.info.cuisines.join(", ")}</h4>
      <h4 className="p-1">{resData.info.avgRating + "⭐"}</h4>
      <h4 className="p-1">{resData.info.sla.slaString}</h4>
      <h4 className="p-1">{resData.info.costForTwo}</h4>
      <h4>
        <Link to={`/viewres/${resData.info.id}`} className="p-1 bg-green-200">
          {" "}
          Order Now
        </Link>
      </h4>
    </div>
  );
};

export default RestaurantCard;
