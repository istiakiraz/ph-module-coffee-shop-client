import React from "react";
import { Link, useLoaderData } from "react-router";
import bg from "../assets/icons/11.png";
import { GoArrowLeft } from "react-icons/go";

const UpdateCoffee = () => {
  const { name, supplier, price, chef, taste, details, photo } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);
    const UpdateCoffee = Object.fromEntries(formData.entries());
    console.log(UpdateCoffee);
  };

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

        <div className="bg-[#F4F3F0]">
          <div className="w-9/12 px-12 rounded-xl py-12 mx-auto">
            <h1
              className="text-center text-4xl mb-4 rancho"
              style={{
                textShadow:
                  "0 0 3px #fff, 0 0 3px #fff, 0 0 3px #331A15, 0 0 3px #331A15",
              }}
            >
              Update Coffee
            </h1>

            <form onSubmit={handleUpdateCoffee} className="grid grid-cols-2">
              <div>
                <fieldset className="fieldset rounded-box w-xs  p-4">
                  <label className="label font-bold">Name</label>
                  <input
                    required
                    name="name"
                    defaultValue={name}
                    type="text"
                    className="input  mb-2 w-96"
                    placeholder="Enter coffee name"
                  />

                  <label className="label font-bold">Supplier</label>
                  <input
                    required
                    name="supplier"
                    type="text"
                    defaultValue={supplier}
                    className="input mb-2 w-96"
                    placeholder="Enter coffee supplier"
                  />

                  <label className=" font-bold label">Price</label>
                  <input
                    type="number"
                    required
                    name="price"
                    defaultValue={price}
                    className="input mb-2 w-96"
                    placeholder="Enter coffee price"
                  />
                </fieldset>
              </div>
              <div>
                <fieldset className="fieldset rounded-box w-xs  p-4">
                  <label className="label font-bold">Chef</label>
                  <input
                    required
                    name="chef"
                    type="text"
                    defaultValue={chef}
                    className="input mb-2 w-96"
                    placeholder="Enter coffee chef"
                  />

                  <label className="label font-bold">Taste</label>
                  <input
                    required
                    name="taste"
                    defaultValue={taste}
                    type="text"
                    className="input mb-2 w-96"
                    placeholder="Enter coffee taste"
                  />

                  <label className=" font-bold label">Details</label>
                  <input
                    required
                    type="text"
                    name="details"
                    defaultValue={details}
                    className="input mb-2 w-96"
                    placeholder="Enter coffee details"
                  />
                </fieldset>
              </div>
              <div className="flex flex-col">
                <fieldset className="fieldset rounded-box w-xs  px-3">
                  <label className="label text-sm font-bold">Photo</label>
                  <input
                    required
                    name="photo"
                    type="text"
                    defaultValue={photo}
                    className="input mb-4 mx-auto w-[820px]"
                    placeholder="Enter photo URL"
                  />
                </fieldset>
              </div>
              <button
                type="submit"
                className="btn col-span-full w-[820px] mx-3 bg-[#D2B48C] rancho text-[#331A15] "
              >
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
