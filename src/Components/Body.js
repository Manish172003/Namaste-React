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

    setresObj(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
    );

    setFilteredList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        .restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants ||
        json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
    );
  };

  if (resObj === null) {
    return <Shimer />;
  }

  return (
    <div className="body">
      <div className="flex justify-center ">
        <div className="m-4 ">
          <input
            className="border border-solid border-gray-600"
            placeholder=" Favourite restaurants 🔍"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 bg-green-100"
            onClick={() => {
              const filteredlist1 = resObj?.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilteredList(filteredlist1);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4">
          {" "}
          <h5>
            <button
              className="px-4 bg-green-100"
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
      </div>
      <div className="flex flex-wrap justify-center ">
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
