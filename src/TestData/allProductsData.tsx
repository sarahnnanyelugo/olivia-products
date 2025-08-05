import first from "../assets/images/hand-wash1.png";
import second from "../assets/images/hand-wash2.png";
import product1 from "../assets/images/air-freshner1.png";
import product2 from "../assets/images/air-freshner3.png";
import product3 from "../assets/images/dish-wash1.png";
import product4 from "../assets/images/dish-wash2.png";
import product5 from "../assets/images/shampoo1.png";
import product6 from "../assets/images/shampoo2.png";
import product7 from "../assets/images/car-wash1.png";
import product8 from "../assets/images/car-wash2.png";
import PaperTablet from "../assets/images/shampoo1.png";
import TabletSample from "../assets/images/shampoo2.png";
import Tablet3 from "../assets/images/tablet3.avif";
import TabletCompare from "../assets/images/tablet-compare.avif";
import HandWash1 from "../assets/images/hand-wash1.png";
import HandWash2 from "../assets/images/hand-wash2.png";
import HandWash3 from "../assets/images/hand-wash3.png";
import HandWash4 from "../assets/images/hand-wash4.png";
import HandWash5 from "../assets/images/hand-wash5.png";
import HandWash6 from "../assets/images/hand-wash6.png";
import AF1 from "../assets/images/air-freshner1.png";
import AF2 from "../assets/images/air-freshner2.png";
import AF3 from "../assets/images/air-freshner3.png";
import AF4 from "../assets/images/air-freshner4.png";
import Dish3 from "../assets/images/dish-wash3.png";
import Dish4 from "../assets/images/dish-wash4.png";
import Dish5 from "../assets/images/dish-wash5.png";
import Dish6 from "../assets/images/dish-wash6.png";
import Hair from "../assets/images/hair-care.png";
import Hair2 from "../assets/images/hair-care2.png";
import Hair3 from "../assets/images/hair-care3.png";
import Hair5 from "../assets/images/hair-care5.png";
import Hair6 from "../assets/images/hair-care6.png";
import Hair7 from "../assets/images/hair-care7.png";
import Hair8 from "../assets/images/hair-care8.png";
import Hair9 from "../assets/images/hair-care9.png";
import Hair10 from "../assets/images/hair-care10.png";
import Tile1 from "../assets/images/tile1.png";
import Tile2 from "../assets/images/tile2.png";
import Window from "../assets/images/window-cleaner.png";
import SkinCare1 from "../assets/images/jelly.png";

export const allProductsData = [
  {
    heading: "Hand Wash",
    firstImg: first,
    hoverImg: second,
    id: 1,
    price: 16000,
    rating: 4.2, // Added rating
    name: "Hand Wash",
    additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
    category: ["hand-soap"],
    bestSeller:true
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 2,
    heading: "Air Freshener",
    price: 10000,
    rating: 4.8, // Added rating
    name: "Air Freshener",
    additionalImgs: [AF1, AF2, AF3, AF4 ],
    category: ["dish-wash", "hand-soap"],
  },
  {
    firstImg: product3,
    hoverImg: product4,
    id: 3,
    heading: "Dish Wash",
    price: 5000,
    rating: 4.0, // Added rating
    name: "Dish wash",
    additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
    category: ["dish-wash", "hand-soap"],
    bestSeller:true

  },
  {
    firstImg: product5,
    hoverImg: product6,
    id: 4,
    price: 12000,
    rating: 4.5, // Added rating
    heading: "Hair Care",
    name: "Laundry stones",
    additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
    category: ["laundry"],
  },
  {
    firstImg: product7,
    hoverImg: product8,
    id: 5,
    heading: "Car Wash",
    price: 9000,
    rating: 4.3, // Added rating
    name: "Laundry Tablets",
    additionalImgs: [],
    category: ["toilet-wash"],
  },
  {
    firstImg: Tile1,
    hoverImg: Tile2,
    id: 6,
    heading: "Tile / Floor",
    price: 2220,
    rating: 4.1, // Added rating
    name: "Tile / Floor",
    additionalImgs: [],
    category: ["shampoo"],
  },
  {
    firstImg: Window,
    hoverImg: Window,
    heading: "Window Cleaner",
    price: 1000,
    rating: 3.9, // Added rating
    id: 7,
    name: "Face wash",
    additionalImgs: [],
    category: ["personal-care"],
  },
  {
    firstImg: SkinCare1,
    heading: "Skin Care",
    hoverImg:SkinCare1,
    price: 1000,
    rating: 3.9, // Added rating
    id: 8,
    name: "Skin Care",
    additionalImgs: [],
    category: ["hand-soap"],
  },
 
];
