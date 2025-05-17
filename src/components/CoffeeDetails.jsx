import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import bg from "../assets/icons/11.png";
import { GoArrowLeft } from "react-icons/go";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const coffee = data.find((singleCoffee) => singleCoffee._id === id);

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
            className=" bg-cover bg-center  h-[900px]"
    >
 <div className="w-8/12 py-16 mx-auto">
        <Link to="/">
          <span
            className="flex gap-2 mb-10 rancho text-2xl   items-center"
            style={{
              textShadow:
                "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15",
            }}
          >
            {" "}
            <GoArrowLeft /> Back to home
          </span>
        </Link>

        <div className="  bg-[#F4F3F0]/50 p-8 md:flex gap-10 rounded-lg ">
        
        {/* Left Image */}
        <div className="flex justify-center items-center">
          <img
            src={coffee?.photo}
            alt={coffee?.name}
            className="w-96"
          />
        </div>

        {/* Right Details */}
        <div className="my-6 w-1/2 ">
          <h2
            className="text-3xl rancho font-bold mb-4 text-[#331A15]"
            style={{
              textShadow:
                "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15",
            }}
          >
            Niceties
          </h2>

          <p className="mb-2">
            <span className="font-semibold">Name:</span> {coffee?.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Chef:</span> {coffee?.chef}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Supplier:</span> {coffee?.supplier}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Taste:</span> {coffee?.taste}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Category:</span> Americano
          </p>
          <p className="mb-2">
            <span className="font-semibold">Details:</span> {coffee?.details}
          </p>
        </div>
      </div>

        
      </div>

      
    </div>
  );
};

export default CoffeeDetails;
