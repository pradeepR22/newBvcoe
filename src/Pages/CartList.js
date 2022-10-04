import React, { useEffect, useState } from "react";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div className="text-white bg-white m-4 grid grid-row-1 rounded-2xl">
      {CART?.map((cartItem, cartIndex) => {
        return (
          <div key={cartItem.id} className=" p-2  flex gap-5 content-around">
            <div className="w-2/12">
              <img
                src={cartItem.imgUrl}
                alt={cartItem.name}
                className="w=3/12 rounded-xl object-cover  p-1"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl text-black font-bold select-none">
                {cartItem.name}
              </h1>
              <div className="flex gap-4">
                <button
                  className="text-black bg-gray-300 hover:bg-red-300 w-10 p-2 rounded-md cursor-pointer"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIndex === index
                        ? { ...item, quantity: item.quantity - 1 > 0 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  -
                </button>
                <h1 className="text-2xl text-black text-left select-none">
                  {cartItem.quantity}
                </h1>
                <button
                  className="text-black bg-gray-300 hover:bg-green-300 w-10 p-2 rounded-md cursor-pointer"
                  onClick={() => {
                    const _CART = CART.map((item, index) => {
                      return cartIndex === index
                        ? { ...item, quantity: item.quantity + 1 }
                        : item;
                    });
                    setCART(_CART);
                  }}
                >
                  +
                </button>
              </div>

              <h2 className="text-black text-3xl select-none">
                <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
                {cartItem.price * cartItem.quantity}
              </h2>
            </div>
          </div>
        );
      })}
      <div className="bg-green-300 rounded-b-2xl flex flex-row items-center ">
        <p className="text-black text-4xl font-bold m-3 cursor-pointer select-none">
          <i class="fa-solid fa-indian-rupee-sign"></i>{" "}
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}{" "}
          /-
        </p>
        <button
          className="text-back text-xl font-extrabold m-3 p-2 rounded-2xl bg-red-400 hover:bg-white hover:text-black"
          onClick={(refreshPage) => {
            window.location.reload();
          }}
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
}

export default CartList;
