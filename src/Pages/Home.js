import React from "react";
import "../index.css";
import {Link } from 'react-router-dom'

const Home = () => {
  const banner = [
    {
      id: 0,
      imgUrl:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1499969942143-ad2a66bc72dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1453824979084-c8fd42932378?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];
  const card = [
    {
      id: 0,
      name: "Chris Bowler",
      about:
        "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.",
      img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 1,
      name: "Marie Laursen",
      about:
        "It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.",
      img: "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 2,
      name: "Ranolds K",
      about:
        "We are so fortunate to have this place just a few minutes drive away from home. Food is stunning, both the tapas and downstairs restaurant. Cocktails wow, wine great and lovely selection of beers. Love this place and will continue to visit.",
      img: "https://images.unsplash.com/photo-1520451644838-906a72aa7c86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=550&q=80",
    },
  ];
  return (
    <div className="text-white m-8">
      <section className="grid grid-cols-2 justify-items-center ">
        <div className="grid grid-cols-2 gap-4">
          {banner.map((New) => {
            return (
              <div key={New.id}>
                <img
                  src={New.imgUrl}
                  alt={New.id}
                  className="w-full h-full object-cover rounded-3xl hover:opacity-90"
                />
              </div>
            );
          })}
        </div>
        <div className="m-4">
          <h1 className="text-6xl  my-2 select-none">
            Good Food <br />
            Choices are <br />{" "}
            <span className="text-amber-600  font-extrabold">
              Good Investments
            </span>
          </h1>
          <p className="text-4xl my-8 select-none">
            All happinesse depends on <br /> a leisurely breakfast <br />{" "}
            Freshness in Every Bite
          </p>
          <button className="hover:bg-orange-300 hover:text-black bg-orange-500 text-2xl uppercase font-extrabold rounded-xl p-4 my-6 cursor-pointer">
            <Link to="/dishes" >Order Now →</Link>
          </button>
        </div>
      </section>
      <section className="mt-40">
        <div className="grid grid-cols-2 w-full mb-10">
          <div className="info">
            <h1 className="text-8xl font-bold select-none">
              {" "}
              Quality Food <br /> Delivered!
            </h1>
            <p className="text-3xl my-2 select-none">
              {" "}
              <span className="text-amber-500 font-bold text-5xl ">
                50% OFF
              </span>{" "}
              <br /> <sup>*</sup>Limited Offer{" "}
            </p>
            <button className="px-6 text-xl font-extrabold py-4 my-4 bg-amber-500 rounded-3xl  hover:bg-white hover:text-black">
              <Link to="/dishes" >Get Started</Link>
            </button>
          </div>
          <div className="img flex justify-center">
            <img
              src="https://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png"
              alt="burger"
              className="w-4/5 -rotate-12"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full mb-10 mt-12">
          <div className="info order-2">
            <h1 className="text-8xl font-bold">
              {" "}
              Traditional <br /> Vegetarian Food
            </h1>
            <p className="text-2xl my-4">
              {" "}
              Taste Like Nothing <br /> Else in world!{" "}
            </p>
            <button className="px-6 text-xl py-4 my-2 bg-amber-500 hover:bg-amber-200 hover:text-black font-extrabold rounded-3xl">
              <Link to="/dishes" >Get Started</Link>
            </button>
          </div>
          <div className="img flex justify-center">
            <img
              src="https://www.neehees.com/wp-content/uploads/2020/10/Andra-Spicy-Masala-Dosa-min.png"
              alt="dosa"
              className="w-4/5"
            />
          </div>
        </div>
      </section>
      <section className="happy-customers text-center mt-52 mb-40 cursor-pointer select-none">
        <p className="uppercase text-sky-400 font-medium ">Testimonials </p>
        <h1 className="text-4xl uppercase mb-10 hover:text-orange-600">Our Happy Customers</h1>
        <div className="grid grid-cols-3 gap-10 mb-8">
          {card.map((newC) => {
            return (
              <div
                key={newC.id}
                className="flex flex-col items-center bg-white text-black rounded-2xl p-4"
              >
                <img
                  src={newC.img}
                  alt={newC.name}
                  className="rounded-full w-3/12 hover:opacity-75"
                />
                <h3 className="text-amber-700 font-semibold hover:text-black ">
                  {newC.name}
                </h3>
                <p className="break-words m-1 text-left  hover:text-gray-700">
                  {newC.about}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
