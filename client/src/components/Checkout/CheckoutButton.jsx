import React from "react";

const CheckoutButton = (props) => {
  return (
    <div>
      <button
        type="button"
        class=" text-white bg-blue-900/80 hover:bg-blue-800  focus:bg-blue-900 font-bold rounded-full text-base w-48 h-14 text-center mr-2 mb-2 px-2"
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default CheckoutButton;
