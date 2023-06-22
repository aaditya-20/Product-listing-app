import React from 'react'

export default function ProductCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="bg-yellow-500">
      <img
        className="w-full h-48 object-cover"
        src={props.image}
        alt="Product"
      />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-900 font-bold text-xl">${props.price}</div>
          <button id={props.id} onClick={props.onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
