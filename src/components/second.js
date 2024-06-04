import React from "react";
import gov from "../img/gov.jpg";
import gov2 from "../img/xyz.jpg";
export default function Title({ url }) {
  return (
    <div className="  gradient">
      <main className="container mx-auto flex flex-col">
       
     
        <div className="sec1 ml-4 flex flex-col tablet:flex-row tablet:container tablet:mx-auto">
          <div className="w-4/5 flex flex-col items-start my-5">
            <h1 className="text-3xl font-bold 0 py-3">
              A Journey of thousand miles starts with a single step
            </h1>
            <p  style={{ textAlign: 'left' }} className="py-3 text-sm  ">
          You are just a step away as  schemes are programmes launched by the government to improve the standard of living of all citizens. Government schemes are typically categorised into two main types, i.e. central sector and centrally sponsored schemes</p>
       
          </div>
          <div className="img mt-5 tablet:w-4/5">
            {/* <img className="w-full sm:h-64 mx-auto rounded-full" alt="img" src={gov} /> */}
            <img className="img mt-5 tablet:w-4/5 rounded-full" alt="img" src={gov} />
          </div>
        </div>
        <div className="sec2 ml-4 mt-7 flex flex-col  tablet:container tablet:mx-auto tablet:flex-row-reverse">
          <div className="w-4/5 flex flex-col items-start my-5">
            <h1 className="text-3xl font-bold py-3">
              With Personalized scheme finder , get instant eligible schemes.
            </h1>
            <p  style={{ textAlign: 'left' }} className="py-3 text-sm">
              Get the maximum benefit from the government.As it improves access to essential goods and services: Free schemes can help to ensure that all citizens have access to essential goods and services, such as healthcare, education, and food. This can have a positive impact on health, education, and well-being
            </p>
          </div>
          <div className="img mt-5 tablet:w-4/5">
            <img className="img mt-5 tablet:w-4/5 rounded-full" alt="img" src={gov2} />
          </div>
        </div>
      </main>
    </div>

  );
}
