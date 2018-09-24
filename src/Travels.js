import React from "react";
import Travel from './Travel';

const travels = [
  {
    destination:"New-York",
    country:"Etat-Unis",
    photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/NYC_-_Time_Square_-_From_upperstairs.jpg/1200px-NYC_-_Time_Square_-_From_upperstairs.jpg",
    distance:"5245 km"
  },
  {
    destination:"Paris",
    country:"France",
    photo:"https://www.riotgames.com/darkroom/1440/b2b587d91d3c5d2922953ac62fbb2cb8:dfd0d5c2d07f981fb8cda29623b5e54e/paris.jpg",
    distance:"0 km"
  },
  {
    destination:"Los Angeles",
    country:"Etats-unis",
    photo:"https://www.breizh-info.com/wp-content/uploads/2018/01/Hollywood_Sign_Zuschnitt-e1515409906782.jpg",
    distance:"8654 km"
  },
  {
    destination:"Londres",
    country:"Angleterre",
    photo:"https://thumbs.dreamstime.com/b/big-ben-londres-32915756.jpg",
    distance:"2181 km"
  }
];

const Travels = () => (
    <div>
        {
          travels.map((travel,index) => (
            <Travel key={index} {...travel} />
          ))
        }
    </div>
  );
  
export default Travels;