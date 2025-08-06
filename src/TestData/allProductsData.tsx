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
import AF5 from "../assets/images/air-freshner5.png";
import Toilet from "../assets/images/toilet-cleaner.png";

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
    category: ["" ],
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
    additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
    category: ["", ""],
    bestSeller:true
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
    category: ["", "liquid-soap"],
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
    additionalImgs: [Hair, Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
    category: ["laundry"],
    bestSeller:true

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
    category: ["car-wash"],
    bestSeller:true
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
    category: [""],
    bestSeller:true
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
    category: ["window-cleaner"],
    bestSeller:true

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
    category: [""],
  },
 ////////////////////////////////////////other products other than bestsellers displayed on the home page


 ///////below is handsoap catergory
 {
  heading: "Hand Wash",
  firstImg: first,
  hoverImg: first,
  id: 9,
  price: 16000,
  rating: 4.2, // Added rating
  name: "Banana Splash",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},
{
  heading: "Hand Wash",
  firstImg: HandWash2,
  hoverImg: HandWash2,
  id: 10,
  price: 16000,
  rating: 4.2, // Added rating
  name: "Strawberry Mix",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},
{
  heading: "Hand Wash",
  firstImg: HandWash3,
  hoverImg: HandWash3,
  id: 11,
  price: 16000,
  rating: 4.2, // Added rating
  name: "Citrus Blend",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},
{
  heading: "Hand Wash",
  firstImg: HandWash4,
  hoverImg: HandWash4,
  id: 12,
  price: 16000,
  rating: 4.2, // Added rating
  name: "Grabe Overflow",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},{
  heading: "Hand Wash",
  firstImg: HandWash5,
  hoverImg: HandWash5,
  id: 13,
  price: 16000,
  rating: 4.2, // Added rating
  name: "Fruit Assemble",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},{
  heading: "Hand Wash",
  firstImg: HandWash6,
  hoverImg: HandWash6,
  id: 14,
  price: 16000,
  rating: 4.2, // Added rating
  name: "Milkyway",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},

///////Below is for dishwash

{
  firstImg: product3,
  hoverImg: product3,
  id: 15,
  heading: "Dish Wash",
  price: 5000,
  rating: 4.0, // Added rating
  name: "Olivia Lemon",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],

},
{
  firstImg: product4,
  hoverImg: product4,
  id: 16,
  heading: "Dish Wash",
  price: 5000,
  rating: 4.0, // Added rating
  name: "Olivia Lemon",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],

},{
  firstImg: Dish5,
  hoverImg: Dish5,
  id: 17,
  heading: "Dish Wash",
  price: 3000,
  rating: 4.0, // Added rating
  name: "Olivia Fruity",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],

},{
  firstImg: Dish3,
  hoverImg: Dish3,
  id: 18,
  heading: "Dish Wash",
  price: 3000,
  rating: 4.0, // Added rating
  name: "Olivia Apple",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],

},{
  firstImg: Dish4,
  hoverImg: Dish4,
  id: 19,
  heading: "Dish Wash",
  price: 2000,
  rating: 4.0, // Added rating
  name: "Olivia Plain",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],

},{
  firstImg: Dish6,
  hoverImg: Dish6,
  id: 20,
  heading: "Dish Wash",
  price: 12000,
  rating: 4.0, // Added rating
  name: "Olivia Fruity",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],

},
{
  firstImg: product1,
  hoverImg: product1,
  id: 21,
  heading: "Air Freshener",
  price: 10000,
  rating: 4.8, // Added rating
  name: "Primrose",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
},
{
  firstImg: product2,
  hoverImg: product2,
  id: 22,
  heading: "Air Freshener",
  price: 10000,
  rating: 4.8, // Added rating
  name: "Belle Rose",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
},
{
  firstImg: AF4,
  hoverImg: AF4,
  id: 23,
  heading: "Air Freshener",
  price: 9000,
  rating: 4.8, // Added rating
  name: "Lily",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
},{
  firstImg: AF5,
  hoverImg: AF5,
  id: 24,
  heading: "Air Freshener",
  price: 9000,
  rating: 4.8, // Added rating
  name: "Murray Berry",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
},
{
  firstImg: product5,
  hoverImg: product5,
  id: 25,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Beauty Shampoo",
  additionalImgs: [Hair, Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: product6,
  hoverImg: product6,
  id: 26,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Neutralizing Shampoo",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: Hair2,
  hoverImg:Hair2,
  id: 27,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Hair Cream",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: Hair3,
  hoverImg:Hair3,
  id: 28,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Shea Butter Relaxer",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: Hair5,
  hoverImg:Hair5,
  id: 29,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Styling Gel",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: Hair6,
  hoverImg:Hair6,
  id: 30,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Hair Food",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: Hair7,
  hoverImg:Hair7,
  id: 31,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Ella Bella Shampoo",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},{
  firstImg: Hair8,
  hoverImg:Hair8,
  id: 32,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Ella Bella Conditioner",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},
{
  firstImg: Hair10,
  hoverImg:Hair10,
  id: 33,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Mentholated Shampoo",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
 
},


{
  firstImg: product7,
  hoverImg: product7,
  id: 34,
  heading: "Car Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Car Wash",
  additionalImgs: [],
  category: ["car-wash", "liquid-soap"],
},{
  firstImg: product8,
  hoverImg: product8,
  id: 35,
  heading: "Car Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Car Wash",
  additionalImgs: [],
  category: ["car-wash", "liquid-soap"],
},
{
  firstImg:Toilet,
  hoverImg:Toilet,
  id: 36,
  heading: "Car Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Toilet Wash",
  additionalImgs: [Toilet],
  category: [""],
},{
  firstImg:Window,
  hoverImg:Window,
  id: 37,
  heading: "Car Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Window Cleaner",
  additionalImgs: [],
  category: ["window-cleaner"],
},
{
  firstImg:SkinCare1,
  hoverImg:SkinCare1,
  id: 37,
  heading: "Personal Care",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Petroluem Jelly",
  additionalImgs: [],
  category: ["personal-care"],
},
];
