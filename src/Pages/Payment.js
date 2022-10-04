import React from "react";

function Payment() {
  return (
    <div className="bg-white w-full h-full text-black md:py-10 py-8 flex flex-col items-center md:block">
      <div className="md:mx-52 mx-10 glass_m w-fit  ">
        <img
          src="https://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png"
          alt="visa"
        />
        <form className="md:p-8 p-12 flex flex-col gap-4">
          <label className="text-lg font-bold">Personal Details </label>
          <label>Full Name: </label>
          <input type="text" className="bg-gray-300 rounded-lg p-2"></input>
          <label>Email Id: </label>
          <input type="email" className="bg-gray-300 rounded-lg p-2"></input>
          <label className="text-lg font-bold">Card Details </label>
          <label>Expiry Date: </label>
          <input type="date" className="bg-gray-300 rounded-lg p-2"></input>
          <label>Card Number: </label>
          <input type="number" className="bg-gray-300 rounded-lg p-2"></input>
          <label className="text-lg font-bold">
            Amount <sub>(Rs.)</sub>
          </label>
          <input type="number" className="bg-gray-300 rounded-lg p-2"></input>
          <label className="text-lg font-bold">Password</label>
          <input type="password" className="bg-gray-300 rounded-lg p-2"></input>

          <input type="reset" className="bg-red-300 rounded-lg p-2"></input>
          <input type="submit" className="bg-green-300 rounded-lg p-3"></input>
        </form>
      </div>
    </div>
  );
}

export default Payment;
