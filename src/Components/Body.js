import RestaurantCard from "../Components/RestaurantCard";

import { resObj2 } from "../common/mockdata";

import Shimer from "../Components/Shimer";

import { useEffect, useState } from "react";

const Body = () => {
  const [resObj, setresObj] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filteredlist, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setresObj(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredList(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );

    console.log(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (resObj.length === 0 ) ? ( <Shimer/> ) : (
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
            const filteredlist1 = resObj.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
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
            className="btn-btn-danger"
            onClick={() => {
              const resObjdummy = resObj.filter(
                (res) => res.info.avgRating > 3.8
              );

              setFilteredList(resObjdummy);
            }}
          >
            Top Rated
          </button>
        </h5>
      </div>
      <div className="res-container">
        {filteredlist?.map((restaurant, index) => (
          <RestaurantCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
