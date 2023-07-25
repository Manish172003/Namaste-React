import RestaurantCard from "../Components/RestaurantCard";

import { resObj2 } from "../common/mockdata";

import Shimer from "../Components/Shimer";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Body = () => {
  const [resObj, setresObj] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [filteredlist, setFilteredList] = useState(null);

  useEffect(() => {
    console.log("Iam use Effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true"
    );

    const json = await data.json();

    console.log(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );

    setresObj(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );

    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    
  };
  
  if(resObj === null)
  {
    return <Shimer/>
  }
 
  return (
    <div className="body">
      <div className="filter">
        <input
          className="filter-input"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const filteredlist1 = resObj?.filter((res) =>
              res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredList(filteredlist1);
          }}
        >
          Search
        </button>
      </div>
      <div className="search">
        {" "}
        <h5>
          <button
            className="btn btn-danger"
            onClick={() => {
              const resObjdummy = resObj?.filter(
                (res) => res?.info?.avgRating > 3.8
              );

              setFilteredList(resObjdummy);
            }}
          >
            Top Rated
          </button>
        </h5>
      </div>
      <div className="res-container">
        {filteredlist?.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/viewres/" + restaurant.info.id}>
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
      {console.log("I am Use state")}
    </div>
  );
};

export default Body;
