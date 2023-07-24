import { useParams, Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating}</h4>
      <h4>{resData.info.sla.slaString}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>
        <Link to={`/viewres/${1}`} className="btn btn-outinle-success">
          {" "}
          Order Now
        </Link>
      </h4>
    </div>
  );
};

export default RestaurantCard;
