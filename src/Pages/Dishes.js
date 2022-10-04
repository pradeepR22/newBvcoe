import React from "react";

function Dishes({ product , addToCart}) {
  return (
    <div className="text-white m-4">
      <div className="grid grid-cols-3 gap-4">
        {product.map((newA) => {
          return (
            <div key={newA.id} className="bg-white rounded-xl p-2">
              <div>
                <img
                  src={newA.imgUrl}
                  alt={newA.name}
                  className="rounded-xl h-3/6 object-cover w-full max-h-full"
                />
                <div className=" text-black rounded-b-xl">
                  <h2>{newA.name}</h2>
                  <p>Rs. {newA.price}</p>
                  <button className="px-4 py-2 bg-amber-500 rounded-lg"
                  onClick={()=> addToCart(newA)}
                  
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dishes;