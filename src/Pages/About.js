import React from "react";

function About() {
  return (
    <div className="m-10">
      <h1 className="text-white font-extrabold text-5xl md:text-7xl text-center m-10 underline decoration-amber-500 select-none hover:text-amber-500 hover:decoration-white">About Us</h1>
      <div className="bg-gray-50 text-center p-10 flex flex-col items-center select-none gap-10 mb-10 rounded-2xl">
        <h1 className="font-bold text-xl md:text-2xl ">GREAT TASTE, DELIVERED SAFE</h1>
        <p className=" md:text-lg">
          At FoodKa’s we understand the growing concerns regarding food safety
          and hygiene. That’s why we take all the necessary precautions and
          follow strict safety ad hygiene protocols while making delivering your
          food. So, you can enjoy your safe virtual celebrations with the safest
          ever virtual feast.
        </p>
        <img
          src="https://www.dominos.co.in/theme2/front/images/corp_query/untouuched@3x.png"
          alt="banner_saftey"
          className="w-60 md:w-3/4"
        />
      </div>
      <div className="text-center bg-gray-50 flex flex-col gap-10 select-none p-10  rounded-2xl">
        <h1 className="text-xl md:text-2xl font-bold">CELEBRATIONS MADE EASY</h1>
        <p className="md:text-lg">
          Convert your work from home into party from home with FoodKa’s Virtual
          Feast. Order some good old favourites from FoodKa’s and celebrate with
          your colleagues in a new and safer way. <br/>
          <span className="text-8xl">🇮🇳</span>
        </p>
      </div>
    </div>
  );
}

export default About;
