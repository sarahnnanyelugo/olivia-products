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
    detail:"what we sell",
    moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",
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
    detail:"what we sell 2",
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
    detail:"Multipurpose, deeply cleansing, and gentle on skin — a must-have for every home.",
    bestSeller:true,
    moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."

  },
  {
    firstImg: product5,
    hoverImg: product6,
    id: 4,
    price: 12000,
    rating: 4.5, // Added rating
    heading: "Hair Care",
    name: "Hair Care",
    additionalImgs: [Hair, Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
    category: ["hair-care"],
    detail:"what we sell4",
    bestSeller:true,
    moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

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
    detail:"what we sell5",
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
    detail:"what we sell6",
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
    detail:"what we sell7",
    bestSeller:true,
    moreDetail:"Achieve crystal-clear transparency with Olivia Window Cleaner — your go-to solution for streak-free glass and mirrors. Powered by vinegar extract and ammonia-free polish agents, it effortlessly removes smudges, fingerprints, and dust while being safe for indoor use. Watch your windows sparkle like never before."

  },
  {
    firstImg: SkinCare1,
    heading: "Skin Care",
    hoverImg:SkinCare1,
    price: 1000,
    rating: 3.9, // Added rating
    id: 8,
    name: "Skin Care",
    detail:"what we sell8",
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
  detail:"Gentle on skin, ruthless on germs — protect your hands with every wash.",
  moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",

  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},
{
  heading: "Hand Wash",
  firstImg: HandWash2,
  hoverImg: HandWash2,
  id: 10,
  price: 16000,
  detail:"Gentle on skin, ruthless on germs — protect your hands with every wash.",
  rating: 4.2, // Added rating
  name: "Strawberry Mix",
  moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",

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
  moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",

  detail:"Gentle on skin, ruthless on germs — protect your hands with every wash.",
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
  moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",

  detail:"Gentle on skin, ruthless on germs — protect your hands with every wash.",
  additionalImgs: [HandWash1, HandWash2, HandWash3, HandWash4, HandWash5, HandWash6],
  category: ["hand-soap", "liquid-soap"],
  
},{
  heading: "Hand Wash",
  firstImg: HandWash5,
  hoverImg: HandWash5,
  id: 13,
  price: 16000,
  detail:"Gentle on skin, ruthless on germs — protect your hands with every wash.",
  rating: 4.2, // Added rating
  name: "Fruit Assemble",
  moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",

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
  moreDetail:"Olivia Hand Wash is your first line of defense against germs, offering a luxurious lather that gently yet effectively cleanses your hands. Enriched with natural antibacterial agents like tea tree oil and aloe vera, it not only protects but also nourishes your skin, leaving your hands feeling soft, refreshed, and lightly scented after every wash. Ideal for frequent use and perfect for the whole family.",

  detail:"Gentle on skin, ruthless on germs — protect your hands with every wash.",
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
  detail:"Cuts through grease in seconds — for dishes that shine like new.",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],
  moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."
},
{
  firstImg: product4,
  hoverImg: product4,
  id: 16,
  heading: "Dish Wash",
  price: 5000,
  rating: 4.0, // Added rating
  name: "Olivia Lemon",
  detail:"Cuts through grease in seconds — for dishes that shine like new.",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],
  moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."

},{
  firstImg: Dish5,
  hoverImg: Dish5,
  id: 17,
  heading: "Dish Wash",
  price: 3000,
  rating: 4.0, // Added rating
  name: "Olivia Fruity",
  detail:"Cuts through grease in seconds — for dishes that shine like new.",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],
  moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."

},{
  firstImg: Dish3,
  hoverImg: Dish3,
  id: 18,
  heading: "Dish Wash",
  price: 3000,
  rating: 4.0, // Added rating
  name: "Olivia Apple",
  detail:"Cuts through grease in seconds — for dishes that shine like new.",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],
  moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."

},{
  firstImg: Dish4,
  hoverImg: Dish4,
  id: 19,
  heading: "Dish Wash",
  price: 2000,
  rating: 4.0, // Added rating
  name: "Olivia Plain",
  detail:"Cuts through grease in seconds — for dishes that shine like new.",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],
  moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."

},{
  firstImg: Dish6,
  hoverImg: Dish6,
  id: 20,
  heading: "Dish Wash",
  price: 12000,
  rating: 4.0, // Added rating
  name: "Olivia Fruity",
  detail:"Cuts through grease in seconds — for dishes that shine like new.",
  additionalImgs: [product3, product4, Dish3, Dish4, Dish5, Dish6],
  category: ["dish-wash", "liquid-soap"],
  moreDetail:"Tough on grease but gentle on your hands, Olivia Dish Wash cuts through the most stubborn food residue, leaving your dishes sparkling clean. Powered by lemon extract and plant-based surfactants, it delivers a streak-free shine while being eco-friendly and safe on skin. One drop goes a long way — making dishwashing feel less like a chore and more like a breeze."

},
{
  firstImg: product1,
  hoverImg: product1,
  id: 21,
  heading: "Air Freshener",
  price: 10000,
  rating: 4.8, // Added rating
  name: "Primrose",
  detail:"Instantly refresh your space with long-lasting, mood-lifting fragrance.",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
  moreDetail:"Transform any room into a haven of freshness with Olivia Air Freshener. Designed to eliminate odors — not just mask them — this product infuses your space with long-lasting natural fragrances like lavender, citrus blossom, and eucalyptus. Perfect for homes, cars, and offices, its ultra-fine mist spreads evenly and instantly uplifts your environment."
},
{
  firstImg: product2,
  hoverImg: product2,
  id: 22,
  heading: "Air Freshener",
  price: 10000,
  rating: 4.8, // Added rating
  name: "Belle Rose",
  detail:"Instantly refresh your space with long-lasting, mood-lifting fragrance.",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
  moreDetail:"Transform any room into a haven of freshness with Olivia Air Freshener. Designed to eliminate odors — not just mask them — this product infuses your space with long-lasting natural fragrances like lavender, citrus blossom, and eucalyptus. Perfect for homes, cars, and offices, its ultra-fine mist spreads evenly and instantly uplifts your environment."

},
{
  firstImg: AF4,
  hoverImg: AF4,
  id: 23,
  heading: "Air Freshener",
  price: 9000,
  rating: 4.8, // Added rating
  name: "Lily",
  detail:"Instantly refresh your space with long-lasting, mood-lifting fragrance.",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
  moreDetail:"Transform any room into a haven of freshness with Olivia Air Freshener. Designed to eliminate odors — not just mask them — this product infuses your space with long-lasting natural fragrances like lavender, citrus blossom, and eucalyptus. Perfect for homes, cars, and offices, its ultra-fine mist spreads evenly and instantly uplifts your environment."

},{
  firstImg: AF5,
  hoverImg: AF5,
  id: 24,
  heading: "Air Freshener",
  price: 9000,
  rating: 4.8, // Added rating
  name: "Murray Berry",
  detail:"Instantly refresh your space with long-lasting, mood-lifting fragrance.",
  additionalImgs: [AF1, AF2, AF3, AF4, AF5 ],
  category: ["air-freshener"],
  moreDetail:"Transform any room into a haven of freshness with Olivia Air Freshener. Designed to eliminate odors — not just mask them — this product infuses your space with long-lasting natural fragrances like lavender, citrus blossom, and eucalyptus. Perfect for homes, cars, and offices, its ultra-fine mist spreads evenly and instantly uplifts your environment."

},
{
  firstImg: product5,
  hoverImg: product5,
  id: 25,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Beauty Shampoo",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [Hair, Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

 
},{
  firstImg: product6,
  hoverImg: product6,
  id: 26,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Neutralizing Shampoo",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

},{
  firstImg: Hair2,
  hoverImg:Hair2,
  id: 27,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Hair Cream",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

 
},{
  firstImg: Hair3,
  hoverImg:Hair3,
  id: 28,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Shea Butter Relaxer",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

},{
  firstImg: Hair5,
  hoverImg:Hair5,
  id: 29,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Styling Gel",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

},{
  firstImg: Hair6,
  hoverImg:Hair6,
  id: 30,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Hair Food",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

},{
  firstImg: Hair7,
  hoverImg:Hair7,
  id: 31,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Ella Bella Shampoo",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

},{
  firstImg: Hair8,
  hoverImg:Hair8,
  id: 32,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Ella Bella Conditioner",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
  moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

},
{
  firstImg: Hair10,
  hoverImg:Hair10,
  id: 33,
  price: 12000,
  rating: 4.5, // Added rating
  heading: "Hair Care",
  name: "Mentholated Shampoo",
  detail:"Nourish your hair from root to tip — for softness you can feel and shine you can flaunt.",
  additionalImgs: [ Hair2, Hair3, Hair5, Hair6, Hair7, Hair8, Hair9, Hair10],
  category: ["shampoo"],
     moreDetail:"Olivia Hair Care is a rich, nourishing formula designed to restore strength and shine to dull or damaged hair. Packed with argan oil, keratin, and vitamins B5 & E, it deeply conditions, tames frizz, and promotes healthy hair growth. Whether it’s shampoo or conditioner, this line transforms your haircare routine into a salon-worthy experience."

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
  detail:"Give your ride a showroom finish — powerful clean, streak-free shine.",
  category: ["car-wash", "liquid-soap"],
  moreDetail:"Olivia Car Wash cleans, protects, and polishes — all in one go. Its concentrated foam formula lifts dirt and grime effortlessly while preserving your car’s paint and shine. Infused with wax-enhancing agents and anti-scratch polymers, it delivers a spotless, showroom finish that turns heads and defies weather damage."
},{
  firstImg: product8,
  hoverImg: product8,
  id: 35,
  heading: "Car Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Car Wash",
  detail:"Give your ride a showroom finish — powerful clean, streak-free shine.",
  additionalImgs: [],
  category: ["car-wash", "liquid-soap"],
  moreDetail:"Olivia Car Wash cleans, protects, and polishes — all in one go. Its concentrated foam formula lifts dirt and grime effortlessly while preserving your car’s paint and shine. Infused with wax-enhancing agents and anti-scratch polymers, it delivers a spotless, showroom finish that turns heads and defies weather damage."

},
{
  firstImg:Toilet,
  hoverImg:Toilet,
  id: 36,
  heading: "Toilet Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Toilet Wash",
  detail:"Knock out stains and odors — for a toilet that looks and smells freshly scrubbed.",
  additionalImgs: [Toilet],
  category: ["toilet"],
  moreDetail:"Olivia Toilet Wash destroys 99.9% of germs and limescale with every flush, leaving your toilet hygienically clean and smelling fresh. Its thick formula clings to the bowl, breaking down stains and eliminating foul odors. Fortified with active disinfectants and natural pine oil, it's a powerhouse of cleanliness for your bathroom"
},{
  firstImg:Window,
  hoverImg:Window,
  id: 37,
  heading: "Car Wash",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Window Cleaner",
  detail:"Streak-free clarity in one wipe — let the light in, beautifully.",
  additionalImgs: [],
  category: ["window-cleaner"],
  moreDetail:"Achieve crystal-clear transparency with Olivia Window Cleaner — your go-to solution for streak-free glass and mirrors. Powered by vinegar extract and ammonia-free polish agents, it effortlessly removes smudges, fingerprints, and dust while being safe for indoor use. Watch your windows sparkle like never before."
},
{
  firstImg:SkinCare1,
  hoverImg:SkinCare1,
  id: 38,
  heading: "Personal Care",
  price: 9000,
  rating: 4.3, // Added rating
  name: "Petroluem Jelly",
  additionalImgs: [],
  detail:"Pamper yourself daily — premium care for skin that deserves the best.",
  category: ["personal-care"],
  moreDetail:"Olivia Personal Care products are crafted for daily self-care rituals that feel indulgent yet purposeful. From body lotions to face cleansers, each formula is infused with botanical extracts, vitamins, and soothing essential oils to hydrate, protect, and revive your skin. Elevate your wellness routine with clean, conscious, and caring skincare."
},
];
