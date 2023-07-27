import React, { useEffect, useState } from "react";
import Shimer from "../Components/Shimer";
import ResCategory from "../Components/ResCategory";
import { useParams } from "react-router-dom";
const ViewRes = () => {
  const [res, setRes] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    loadMenu();
  }, []);

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

  // console.log(res.cards[3].groupedCard.cardGroupMap.REGULAR);

  const {
    name,
    cuisines,
    locality,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
    aggregatedDiscountInfo,
  } =
    res?.cards[0]?.card?.card?.info ||
    res?.cards[1]?.card?.card?.info ||
    res?.cards[2]?.card?.card?.info;

  console.log(res?.cards[0]?.card?.card?.info);

  const { itemCards } =
    res?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);

  const categories =
    res?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ||
    res?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="menu pt-6">
        {/* <h1 className="text-center font-bold py-3">{name}</h1> */}

        {/* <ul>
          {itemCards?.map((item, index) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} - {" Rs "}{" "}
              {item?.card?.info?.price / 100}
            </li>
          ))}
        </ul> */}
        <div className="w-8/12 m-auto shadow-lg p-4 rounded-xl">
          <div className="flex justify-between border-b-2 border-dashed py-2">
            <div>
              <div className="font-bold py-1">{name}</div>
              <div className="text-sm text-slate-600 py-1">
                {cuisines.join(", ")}
              </div>
              <div className="text-xs text-slate-600 pt-1 pb-3">{locality}</div>
            </div>
            <div className="px-2 bg-white border">
              <div className="text-green-500 text-opacity-100  border-b-2 border-dashed my-3">
                ⭐{avgRating}
              </div>
              <div className="text-opacity-100 text-sm">
                {totalRatingsString}
              </div>
            </div>
          </div>
          <div className="flex py-3">
            <div className="font-bold">🕙{sla.maxDeliveryTime} MIN</div>
            <div className="px-4 font-bold">{costForTwoMessage}</div>
          </div>

          <div className="flex">
            {aggregatedDiscountInfo?.descriptionList?.map((offer) => (
              <div className="w-3/12 rounded-lg bg-white border shadow-lg p-3 mr-1 text-zinc-900">
                {offer?.meta}
              </div>
            ))}
          </div>
        </div>
        {categories?.map((category) => (
          <ResCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
};

export default ViewRes;
