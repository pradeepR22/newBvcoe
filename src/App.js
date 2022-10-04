import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Dishes from "./Pages/Dishes";
import { useState } from "react";
import Signup from "./Pages/signup";
import CartList from "./Pages/CartList";
import Footer from "./Components/Footer";

const App = () => {
  // Chicken lollipop , butter chicken , bav bhaji images to be changed
  // eslint-disable-next-line
  const [product, setProduct] = useState([
    {
      id: 0,
      name: "Octopus Magetta",
      price: "300",
      veg: false,
      imgUrl:
        "https://images.unsplash.com/photo-1559070135-f259b369bf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Chicken Biriyani ",
      price: "250",
      veg: false,
      imgUrl:
        "https://recipe52.com/wp-content/uploads/2022/03/chicken-handi-10.jpg",
    },
    {
      id: 4,
      name: "Chicken Lollipop",
      price: "180",
      veg: false,
      imgUrl:
        "https://media.istockphoto.com/photos/chicken-lollipop-appetizer-picture-id1090502088?b=1&k=20&m=1090502088&s=170667a&w=0&h=SxvdE0645A4_nQt2ALBnBOJ-EgiXZkSk06yfujXit_0=",
    },
    {
      id: 6,
      name: "Shawarma",
      price: "110",
      veg: false,
      imgUrl:
        "https://images.pexels.com/photos/6416559/pexels-photo-6416559.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      name: "Fish Masala",
      price: "320",
      veg: "false",
      imgUrl:
        "https://media.istockphoto.com/photos/macher-jhol-in-black-bowl-isolated-on-white-indian-cuisine-bengali-picture-id1295772358?b=1&k=20&m=1295772358&s=170667a&w=0&h=6sFsEgh9iiib5yQyXto3mOsM5UgawKSmXSud2JKJi2w=",
    },
    {
      id: 10,
      name: "Butter Chicken",
      price: "350",
      veg: false,
      imgUrl:
        "https://media.istockphoto.com/photos/indian-butter-chicken-picture-id639390540?b=1&k=20&m=639390540&s=170667a&w=0&h=zhF-luTj0uh0zlha-SLuWKG6tiTeyMwnWyIF6H4wON8=",
    },
    {
      id: 12,
      name: "Fried Rice",
      price: "180",
      veg: false,
      imgUrl:
        "https://media.istockphoto.com/photos/braised-chicken-in-a-vegetable-tomato-rice-picture-id481711278?b=1&k=20&m=481711278&s=170667a&w=0&h=iENwpigBSyBnrcfKY1L6hnOh85vWqbW0XqIU0BTzyqE=",
    },
    // Veg
    {
      id: 3,
      name: "Pav Bhaji",
      price: "120",
      veg: true,
      imgUrl:
        "https://media.istockphoto.com/photos/masala-pavbhaji-or-pav-bhaji-picture-id800368868?b=1&k=20&m=800368868&s=612x612&w=0&h=DfmVXU81F6JmL15aI8i1JM6R-EOI4G3-JoZp1bYfk10=",
    },
  ]);

  // empty cart
  const [cart, setCart] = useState([]);
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
    console.log(cart);
  };

  return (
    <>
      <div className="text-white grid grid-cols-2 bg-amber-500  font-bold p-4">
        <div className="text-3xl cursor-pointer">
          Food<span className="text-black font-extrabold">Ka</span>
        </div>
        <ul className="grid grid-cols-7 gap-4 text-xl">
          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/dishes">Dishes</Link>
          </li>
          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/login">Log In</Link>
          </li>
          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/signup">Sign Up</Link>
          </li>
          <li className="hover:bg-white hover:text-black py-1 px-0.5 text-center rounded-xl">
            <Link to="/cart">
              Cart{" "}
              <sup className="bg-sky-500 rounded-full px-1 pb-0.5">
                {cart.length}
              </sup>
            </Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dishes"
          element={<Dishes product={product} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartList cart={cart} />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
