import React, { useEffect, useState } from "react";
import Shimer from "../Components/Shimer";
import { useParams } from "react-router-dom";
const ViewRes = () => {
  const [res, setRes] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    loadMenu();
  },[]);

  const loadMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.2893144&lng=80.4604643&restaurantId=" +
        id +
        "&catalog_qa=undefined"
    );

    const json = await data.json();
    setRes(json.data);

  };

  if (res === null) {
    return <Shimer />;
  }

  console.log(res.cards)

  const {name} =
    res?.cards[0]?.card?.card?.info ||
    res?.cards[1]?.card?.card?.info ||
    res?.cards[2]?.card?.card?.info; 
 
  const { itemCards } =
    res?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item, index) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {" Rs "} {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewRes;
