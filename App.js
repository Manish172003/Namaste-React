import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-images">
        <img
          className="nav-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTKo8o3HS6bE5Sy-XvlpIX5xY2kmprIeefIQ&usqp=CAU"
        />
      </div>
      <div className="items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "85973",
      name: "Laziz Pizza",
      cloudinaryImageId: "maxymgfzs3vuyovkxvkx",
      locality: "Kothapet",
      areaName: "Brodipet",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "American", "Indian", "Pastas", "Beverages"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "85973",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "2299",
      avgRatingString: "3.5",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=6266565~p=1~eid=00000187-37aa-2309-0bb5-43f600b00113~45995",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
  },
  {
    info: {
      id: "86353",
      name: "Pizza World - Arundelpet",
      cloudinaryImageId: "hgo2xhmxq9yxtzzztgd8",
      locality: "Arundelpet",
      areaName: "Brodipet",
      costForTwo: "₹250 for two",
      cuisines: [
        "Pizzas",
        "Chinese",
        "Beverages",
        "Continental",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "86353",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "14564",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
  },
  {
    info: {
      id: "443833",
      name: "Modern Pizza World",
      cloudinaryImageId: "oqt9wclgyxnfjvdfcfjh",
      areaName: "Brodipet",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Tandoor", "South Indian"],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "443833",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "386808",
      avgRatingString: "3.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
  },
  {
    info: {
      id: "86943",
      name: "Mourya Tasty Foods",
      cloudinaryImageId: "jlk2at5lezdiavt2fs8g",
      locality: "Naidupet",
      areaName: "Lakshmipuram",
      costForTwo: "₹150 for two",
      cuisines: [
        "South Indian",
        "Indian",
        "Biryani",
        "Andhra",
        "Chinese",
        "Beverages",
      ],
      avgRating: 4.3,
      veg: true,
      feeDetails: {
        restaurantId: "86943",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "14586",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "14 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=86943",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "86274",
      name: "Varalakshmi Tiffins",
      cloudinaryImageId: "3632e911860bd3a90f9558fc81372b73",
      locality: "Chandramouli Nagar",
      areaName: "Lakshmipuram",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "86274",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "6482",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=6070245~p=3~eid=00000187-37aa-2309-0bb5-43f800b00339~45995",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=86274",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "380923",
      name: "RATNA FOOD COURT",
      cloudinaryImageId: "tojryee5rjrk4d24kury",
      locality: "Brahmam Gari Street",
      areaName: "Lakshmipuram",
      costForTwo: "₹200 for two",
      cuisines: ["Chinese", "Indian", "Juices", "Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "380923",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "167539",
      avgRatingString: "3.8",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.1,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "0.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=380923",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "211717",
      name: "Anand Juice And Chat",
      cloudinaryImageId: "aw5zutizwwk1smmzkih2",
      areaName: "Brodipet",
      costForTwo: "₹100 for two",
      cuisines: ["Fast Food", "Beverages"],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: "211717",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "32784",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=211717",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "121917",
      name: "Akhil Food World",
      cloudinaryImageId: "rqlxzsp9fgexbdbaowpb",
      areaName: "Brodipet",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "121917",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "14433",
      avgRatingString: "3.9",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=121917",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "660516",
      name: "Bread Basket",
      cloudinaryImageId: "7269956703cda0eb41ab88e0db7be371",
      locality: "Brundawan Gardens",
      areaName: "Lakshmipuram",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "660516",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "6495",
      avgRatingString: "3.9",
      totalRatingsString: "20+",
      promoted: true,
      adTrackingId:
        "cid=6278518~p=5~eid=00000187-37aa-2309-0bb5-43fa00b00561~45995",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=660516",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "87223",
      name: "Bombay Chaat Bhandar",
      cloudinaryImageId: "znv8emb3liz2zhg5bkf5",
      locality: "Siddhartha Road",
      areaName: "Brodipet",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "Chaat"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "87223",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "48608",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.9,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "0.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=87223",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "87242",
      name: "Bakers Fun",
      cloudinaryImageId: "qvcoaj4b9lwfk4bilwhv",
      areaName: "Lakshmipuram",
      costForTwo: "₹250 for two",
      cuisines: [
        "Chinese",
        "Bakery",
        "Chaat",
        "Pizzas",
        "Biryani",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "87242",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "40220",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=87242",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "86553",
      name: "Hotel Babu Biryani Point",
      cloudinaryImageId: "o0u91hqjnggyprefextz",
      locality: "Etukur road",
      areaName: "Railpet & Kothapet",
      costForTwo: "₹300 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "Desserts",
        "Tandoor",
        "Kebabs",
        "Indian",
      ],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "86553",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "9568",
      avgRatingString: "3.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-04-01 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=86553",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "437790",
      name: "Desi Shakes",
      cloudinaryImageId: "asx7e2hp8vt2vblsosqr",
      areaName: "Lakshmipuram",
      costForTwo: "₹250 for two",
      cuisines: ["Beverages"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "437790",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "264148",
      avgRatingString: "3.8",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=6266602~p=7~eid=00000187-37aa-2309-0bb5-43fc00b00743~45995",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.6,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "0.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=437790",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "515985",
      name: "Dessert House",
      cloudinaryImageId: "nipt5ogocvhv0ryslmic",
      locality: "Ashok Nagar",
      areaName: "Lakshmipuram",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Beverages"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "515985",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "71430",
      avgRatingString: "4.0",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=515985",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "114986",
      name: "Sri Lakshmi Foods",
      cloudinaryImageId: "onz11xl4xklt69p2k1dr",
      locality: "Siddhartha Gardens",
      areaName: "Srinivasa Nagar Colony",
      costForTwo: "₹150 for two",
      cuisines: [
        "Biryani",
        "Chinese",
        "South Indian",
        "Andhra",
        "North Indian",
      ],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "114986",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "14471",
      avgRatingString: "3.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=114986",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "86556",
      name: "Amaravathi Food Court",
      cloudinaryImageId: "scqmj3e1tdrfq7xxd3ku",
      locality: "Chandramouli Nagar",
      areaName: "Lakshmipuram",
      costForTwo: "₹250 for two",
      cuisines: [
        "Chinese",
        "Biryani",
        "Combo",
        "Beverages",
        "Lebanese",
        "Indian",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "86556",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 1900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 1900,
      },
      parentId: "14568",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 1.8,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "1.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-03-31 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=86556",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

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
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        {" "}
        <h5>Search</h5>
      </div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
