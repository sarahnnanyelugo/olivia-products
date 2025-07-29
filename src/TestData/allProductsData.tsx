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
export const allProductsData = [
  {
    heading: "Hand Soap",
    firstImg: first,
    hoverImg: second,
    id: 1,
    price: 16000,
    rating: 4.2, // Added rating
    name: "Hair food",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["hand-soap"],
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 2,
    heading: "Dish Wash",
    price: 10000,
    rating: 4.8, // Added rating
    name: "Organic Shampoo",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
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
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["dish-wash", "hand-soap"],
  },
  {
    firstImg: product5,
    hoverImg: product6,
    id: 4,
    price: 12000,
    rating: 4.5, // Added rating
    heading: "Laundry",
    name: "Laundry stones",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["laundry"],
  },
  {
    firstImg: product7,
    hoverImg: product8,
    id: 5,
    heading: "Toilet Wash",
    price: 9000,
    rating: 4.3, // Added rating
    name: "Laundry Tablets",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["toilet-wash"],
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 6,
    heading: "Shampoo",
    price: 2220,
    rating: 4.1, // Added rating
    name: "Body wash",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["shampoo"],
  },
  {
    firstImg: product3,
    heading: "Personal Care",
    hoverImg: product4,
    price: 1000,
    rating: 3.9, // Added rating
    id: 7,
    name: "Face wash",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["personal-care"],
  },
  {
    firstImg: product3,
    heading: "Personal Care",
    hoverImg: product4,
    price: 1000,
    rating: 3.9, // Added rating
    id: 7,
    name: "Face wash",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["hand-soap"],
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 8,
    heading: "Hair Care",
    price: 3400,
    rating: 4.6, // Added rating
    name: "Disinfectant",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["hand-soap"],
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 8,
    heading: "Hair Care",
    price: 3400,
    rating: 4.6, // Added rating
    name: "Disinfectant",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["hair-care"],
  },
];
