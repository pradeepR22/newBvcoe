import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (<>
    <div className="grid md:grid-cols-2  bg-amber-600 p-4">
      <div className="text-white text-xl uppercase font-medium order-2 md:order-1">
        <ul>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/dishes">Browse More</Link>{" "}
          </li>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/login">Log In</Link>
          </li>
          <li className="hover:bg-gray-200 hover:text-black w-40 rounded-xl p-1">
            <Link to="/signin">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="text-center">
        <p className="text-6xl md:text-8xl text-white font-extrabold">Food <span className="text-black">Ka</span></p>
        <div className="">
        <a href="https://www.youtube.in/"><i className="fa-brands fa-youtube  text-3xl  md:text-5xl m-4 hover:text-white"></i></a>
        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram  text-3xl  md:text-5xl m-4 hover:text-black text-white"></i></a>
        <a href="https://www.instagram.com/"><i className="fa-brands fa-twitter  text-3xl  md:text-5xl m-4 hover:text-white"></i></a>
        </div>
      </div>
    </div>
    <div className="pt-10 w-full text-sm text-center bg-amber-600 text-white"><p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. <br/> All trademarks are properties of their respective owners. 2022 © FoodKa™ Ltd. All rights reserved.</p> </div>
    </>
  );
}

export default Footer;
