import React from "react";
import CounterContainer from "../../common/counter/CounterContainer";

function ItemDetail({ product , onAdd }) {
  return (
    
    <div className="flex justify-center items-center">
    <div className="border-inherit border-2 rounded-2xl p-6 w-auto">
      <img src={product.img} alt={product.title} className="w-2/3 mx-auto" />
      <div className="">
        <h2 className="text-1xl my-6">{product.title}</h2>
        <h3 className="text-2xl mb-6">$ {product.price}</h3> 
        <h4 className="text-1xl">{product.description}</h4>
        <CounterContainer stock={product.stock} onAdd= {onAdd} />
       
      </div>
    </div>
  </div>
  
  );
}

export default ItemDetail;