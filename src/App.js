// App.js
import './App.css';
import React from 'react';
import Header from './component/header';

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className='logo_container'>
//         <img className='logo' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="Logo" />
//       </div>
//       <div className='nav_items'>
//         <ul>
//           <li>Home</li>
//           <li>About Us</li>
//           <li>Contact Us</li>
//           <li>Cart</li>
//         </ul>
//       </div>
//     </div>
//   );
// };


const resList = [
  {
    "info": {
      "id": "253596",
      "name": "Burger King",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_253596.JPG",
      "locality": "Tathawade",
      "areaName": "Tathawade",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "avgRating": 4.2,
      "parentId": "166",
      "avgRatingString": "4.2",
      "totalRatingsString": "21K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 05:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.1",
          "ratingCount": "10K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/burger-king-tathawade-rest253596",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "745868",
      "name": "Olio - The Wood Fired Pizzeria",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/19/2d369c2d-429a-4ab1-a853-b6e07a08e59f_745868.jpg",
      "locality": "Wakad Road",
      "areaName": "Haveli",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Snacks",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "11633",
      "avgRatingString": "4.4",
      "totalRatingsString": "2.2K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 05:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/olio-the-wood-fired-pizzeria-wakad-road-haveli-rest745868",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "23728",
      "name": "McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/8fe33d59-d502-497e-8003-950c3b06099c_23728.jpg",
      "locality": "Santosh Nagar",
      "areaName": "Dange Chowk",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "19K+",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:45:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/mcdonalds-santosh-nagar-dange-chowk-rest23728",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "576382",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "qhfw858zccsx8kph6tch",
      "locality": "Hinjewadi",
      "areaName": "Hinjewadi",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4,
      "parentId": "4961",
      "avgRatingString": "4.0",
      "totalRatingsString": "2.4K+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "3.7",
          "ratingCount": "373"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/la-pinoz-pizza-hinjewadi-rest576382",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "14778",
      "name": "Pizza Hut",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/e72f87cb-49d5-46ca-898f-d425afbd9212_14778.jpg",
      "locality": "Sector 24",
      "areaName": "Nigdi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4,
      "parentId": "721",
      "avgRatingString": "4.0",
      "totalRatingsString": "14K+",
      "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 8.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "8.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/pizza-hut-sector-24-nigdi-rest14778",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "3417",
      "name": "Subway",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/54ea5497-2a98-48a0-9141-126e7a07ef4d_3417.jpg",
      "locality": "Blue Ridge Township",
      "areaName": "Hinjawadi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.1,
      "parentId": "2",
      "avgRatingString": "4.1",
      "totalRatingsString": "13K+",
      "sla": {
        "deliveryTime": 34,
        "lastMileTravel": 5.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "5.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/subway-blue-ridge-township-hinjawadi-rest3417",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "41800",
      "name": "Faasos - Wraps, Rolls & Shawarma",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/02be427d-bfc7-4989-995c-a498d82c9b64_41800.JPG",
      "locality": "Maan Road Om plaza 2nd floor",
      "areaName": "Hinjawadi",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "21809",
      "avgRatingString": "4.3",
      "totalRatingsString": "14K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 4.8,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/faasos-wraps-rolls-and-shawarma-maan-road-om-plaza-2nd-floor-hinjawadi-rest41800",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "202642",
      "name": "Irani Cafe",
      "cloudinaryImageId": "tfsksql6wnebha3zcttj",
      "locality": "Laxman Nagar",
      "areaName": "Baner",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Snacks",
        "Fast Food",
        "Desserts",
        "Beverages",
        "Indian",
        "Street Food"
      ],
      "avgRating": 4.5,
      "parentId": "4057",
      "avgRatingString": "4.5",
      "totalRatingsString": "22K+",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 8.6,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "8.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-23 00:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/irani-cafe-laxman-nagar-baner-rest202642",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "145719",
      "name": "Bebe Di Rasoi - Punjabi",
      "cloudinaryImageId": "ilovbsdcukuuath8ltza",
      "locality": "Wakad",
      "areaName": "Hinjawadi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Punjabi",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "parentId": "230548",
      "avgRatingString": "4.2",
      "totalRatingsString": "32K+",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 4.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/bebe-di-rasoi-punjabi-wakad-hinjawadi-rest145719",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "800574",
      "name": "B Burger - Bigger Burger",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/2/f43904be-770c-4923-8ac6-460b9927faac_800574.jpg",
      "locality": "Ffi Cloud India Pvt. Ltd",
      "areaName": "Hinjewadi",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "Fast Food",
        "American"
      ],
      "avgRating": 4.1,
      "parentId": "454391",
      "avgRatingString": "4.1",
      "totalRatingsString": "628",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "newg.png",
            "description": "Gourmet"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Gourmet",
                  "imageId": "newg.png"
                }
              }
            ]
          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/b-burger-bigger-burger-ffi-cloud-india-pvt-ltd-hinjewadi-rest800574",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "622197",
      "name": "MOJO Pizza - 2X Toppings",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622197.JPG",
      "locality": "Infotech Park",
      "areaName": "Hinjewadi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Fast Food",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "11329",
      "avgRatingString": "4.5",
      "totalRatingsString": "631",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹159"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/mojo-pizza-2x-toppings-infotech-park-hinjewadi-rest622197",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "491973",
      "name": "Mealful Rolls - India's Biggest Rolls",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c6d98b17-67f6-4ad0-95a8-cf40554297fb_491973.JPG",
      "locality": "Village Marunji",
      "areaName": "Mulshi Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "10390",
      "avgRatingString": "4.5",
      "totalRatingsString": "148",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/mealful-rolls-indias-biggest-rolls-village-marunji-mulshi-road-rest491973",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "192294",
      "name": "McCafe by McDonald's",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/8de3a295-362a-4950-98cb-6cf6a776c5ce_192294.jpg",
      "locality": "Hinjewadi",
      "areaName": "Hinjawadi",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "American",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "8263",
      "avgRatingString": "4.4",
      "totalRatingsString": "82",
      "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 8.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "8.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:45:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {

      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/mccafe-by-mcdonalds-hinjewadi-hinjawadi-rest192294",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "395250",
      "name": "McDonald's Gourmet Burger Collection",
      "cloudinaryImageId": "tdbxkfkfjtyaojmzybgd",
      "locality": "Santosh Nagar",
      "areaName": "Wakad",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "10761",
      "avgRatingString": "4.5",
      "totalRatingsString": "398",
      "sla": {
        "deliveryTime": 31,
        "lastMileTravel": 6.2,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "6.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:45:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/mcdonalds-gourmet-burger-collection-santosh-nagar-wakad-rest395250",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "643827",
      "name": "WeFit - Protein Bowls, Salads & Sandwiches",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/30/19a46a25-cc86-4bbf-8383-89e0db3cb9bb_643827.JPG",
      "locality": "Mulshi",
      "areaName": "Marunji",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Healthy Food",
        "Salads",
        "Keto",
        "Snacks"
      ],
      "avgRating": 4.6,
      "parentId": "355285",
      "avgRatingString": "4.6",
      "totalRatingsString": "208",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/wefit-protein-bowls-salads-and-sandwiches-mulshi-marunji-rest643827",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "566237",
      "name": "Faasos' Signature Wraps & Rolls",
      "cloudinaryImageId": "c583ca6ce40b426797a78ae2ac91f2ec",
      "locality": "Maan Road Om plaza 2nd floor",
      "areaName": "Hinjawadi",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Fast Food",
        "Snacks",
        "North Indian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "340366",
      "avgRatingString": "4.3",
      "totalRatingsString": "195",
      "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 4.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/faasos-signature-wraps-and-rolls-maan-road-om-plaza-2nd-floor-hinjawadi-rest566237",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "323673",
      "name": "WarmOven Cake & Desserts",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/d44b4cae-5218-49a6-8e55-76e44f3b0235_323673.JPG",
      "locality": "Bhujbal Wasti",
      "areaName": "Wakad",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Bakery",
        "Desserts",
        "Ice Cream",
        "Beverages",
        "Cakes"
      ],
      "avgRating": 4.1,
      "parentId": "9696",
      "avgRatingString": "4.1",
      "totalRatingsString": "3.3K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 05:00:00",
        "opened": true
      },
      "badges": {

      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {

          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/warmoven-cake-and-desserts-bhujbal-wasti-wakad-rest323673",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "323668",
      "name": "Kaati Zone Rolls & Wraps",
      "cloudinaryImageId": "reykt14ijxya20zbpiud",
      "locality": "Bhujbal Wasti",
      "areaName": "Wakad",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Fast Food",
        "Bengali",
        "Beverages",
        "Desserts",
        "Rolls"
      ],
      "avgRating": 3.6,
      "parentId": "248306",
      "avgRatingString": "3.6",
      "totalRatingsString": "745",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 05:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/kaati-zone-rolls-and-wraps-bhujbal-wasti-wakad-rest323668",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "323664",
      "name": "Indiana Burgers",
      "cloudinaryImageId": "m2s6jxl0fjnpqcu0rpwj",
      "locality": "Bhujbal Wasti",
      "areaName": "Wakad",
      "costForTwo": "₹150 for two",
      "cuisines": [
        "Burgers",
        "American",
        "Fast Food",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 3.8,
      "parentId": "5714",
      "avgRatingString": "3.8",
      "totalRatingsString": "752",
      "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 4.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "4.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 05:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/indiana-burgers-bhujbal-wasti-wakad-rest323664",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "692221",
      "name": "BOOM - Sub Style Sandwiches",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c5bbd782-00ef-45a8-aae7-ed1f86cee653_692221.JPG",
      "locality": "Village Marunji",
      "areaName": "Mulshi Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Snacks",
        "Indian",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "401169",
      "avgRatingString": "4.5",
      "totalRatingsString": "90",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 5,
        "serviceability": "SERVICEABLE",
        "slaString": "20-30 mins",
        "lastMileTravelString": "5.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-11-17 02:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {

          },
          "textBased": {

          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "lottie": {

          },
          "video": {

          }
        }
      },
      "reviewsSummary": {

      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {

      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      "context": "seo-data-7ef194d4-5e7d-4d8c-8f60-fe1968a5a118"
    },
    "cta": {
      "link": "https://www.swiggy.com/city/pune/boom-sub-style-sandwiches-village-marunji-mulshi-road-rest692221",
      "type": "WEBLINK"
    }
  }
]

const Body = () => {
  return (
    <div className='body'>
      <div className='search' style={{ margin: "1rem" }}>Search</div>
      <div className='res-container' style={{ display: "flex", flexWrap: "wrap", }}>
        {
          resList.map((restaurant) => (
          <CardMenu key={restaurant.info.id} resData={restaurant} />))
        }

      </div>
    </div>
  );
};

const CardMenu = (props) => {
  const { resData } = props;

  return (
    <div className='res-card' style={{ backgroundColor: "#D3D3D3", margin: "1rem" }}>
      <img
        className='imgStyle'

        src={` https://media-assets.swiggy.com/swiggy/image/upload/${resData.info.cloudinaryImageId}`}
        alt={`${resData.info.name}`}
        style={{ height:"150px", objectFit: "cover" }}
      />
      <h4 style={{ paddingLeft: "10px" }}>{resData.info.name}</h4>
      <h4 style={{ paddingLeft: "10px" }}>{resData.info.cuisines.join(", ")}</h4>
      <h4 style={{ paddingLeft: "10px" }}>{resData.info.avgRating} Stars</h4>
      <h4 style={{ paddingLeft: "10px" }}>{resData.info.sla.deliveryTime} Min</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

function App() {
  return <AppLayout />;
}

export default App;
