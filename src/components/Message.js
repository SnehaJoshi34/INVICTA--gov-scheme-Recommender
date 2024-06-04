import React from "react";
import img from "../img/hero.png";
import { Link } from "react-router-dom";

export default function Message() {
  return (
    <>
      <div className="gradient w-screen h-full tablet:h-screen pt-24 text-center">
        <div className="flex flex-col text-white  tablet:flex-row container mx-auto ">
          <div className="w-full flex flex-col  tablet:items-start tablet:text-left">
            <p className="uppercase text-2xl mb-3">
              What Schemes can help you ?
            </p>
            <h1 className="font-bold text-5xl my-4">
              Let us give you a hand to define them according to your needs!
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Just in 2 steps Click below to start
            </p>
            {/* <button className='mx-auto tablet:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8'>Profile</button> */}
            <Link to="/form">
              <button className="mx-auto tablet:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8">
                Profile
              </button>
            </Link>
          </div>
          <div className="img tablet:w-4/5 tablet:text-center">
            <img className="bg-cover" alt="img" src={img} />
          </div>
        </div>
      </div>
    </>
  );
}
