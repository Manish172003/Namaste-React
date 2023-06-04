import RestaurantCard from "../Components/RestaurantCard";

import { resObj2 } from "../common/mockdata";

import Shimer from "../Components/Shimer";

import { useEffect, useState } from "react";

const Body = () => {
  const [resObj, setresObj] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=16.2893144&lng=80.4604643"
    );
    const json = await data.json();

    setresObj(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        .restaurants
    );
    console.log(json);
  };

  if (resObj.length === 0) {
    return <Shimer/>
  }

  return (
    <div className="body">
      <div className="search">
        {" "}
        <h5>
          <button
            className="btn-btn-danger"
            onClick={() => {
              resObj1 = resObj.filter((res) => res.info.avgRating > 3.8);

              setresObj(resObj1);
            }}
          >
            Top Rated
          </button>
        </h5>
      </div>
      <div className="res-container">
        {resObj.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
