import first from "../assets/images/laundry-tab.avif";
import second from "../assets/images/laundry-tab-u.avif";
import product1 from "../assets/images/product1.avif";
import product2 from "../assets/images/product2.avif";
import product3 from "../assets/images/product3.avif";
import product4 from "../assets/images/product4.avif";
import PaperTablet from "../assets/images/paper-tablet.avif";
import TabletSample from "../assets/images/tablet-sample.avif";
import Tablet3 from "../assets/images/tablet3.avif";
import TabletCompare from "../assets/images/tablet-compare.avif";

export const allProductsData = [
  {
    heading: "Hand Soap",
    firstImg: first,
    hoverImg: second,
    id: 1,
    price: 16000,
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
    name: "Organic Shampoo",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["dish-wash"],
  },
  {
    firstImg: product3,
    hoverImg: product4,
    id: 3,
    heading: "Dish Wash",
    price: 5000,
    name: "Dish wash",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["dish-wash"],
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 4,
    price: 12000,
    heading: "Laundry",
    name: "Laundry stones",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["laundry"],
  },
  {
    firstImg: first,
    hoverImg: second,
    id: 5,
    heading: "Toilet Wash",
    price: 9000,
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
    name: "Body wash",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["shampoo"],
  },
  {
    firstImg: product3,
    heading: "Personal Care",
    hoverImg: product4,
    price: 1000,
    id: 7,
    name: "Face wash",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["personal-care"],
  },
  {
    firstImg: product1,
    hoverImg: product2,
    id: 8,
    heading: "Hair Care",
    price: 3400,
    name: "Disinfectant",
    additionalImgs: [PaperTablet, Tablet3, TabletCompare, TabletSample],
    category: ["hair-care"],
  },
];
