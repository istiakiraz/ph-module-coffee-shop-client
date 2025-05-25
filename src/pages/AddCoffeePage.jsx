import React from "react";
import bg from "../assets/icons/11.png";
import { Link } from "react-router";
import { GoArrowLeft } from "react-icons/go";
import Swal from "sweetalert2";
const AddCoffeePage = () => {

  const handleAddCoffee = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const supplier = e.target.supplier.value;
    // const price = e.target.price.value;
    // const chef = e.target.chef.value;
    // const taste = e.target.taste.value;
    // const details = e.target.details.value;
    // const photo = e.target.photo.value;

    // const list= {name, supplier, price, chef, taste, details, photo}

    // console.log(list);

    //impotent

    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

    newCoffee.price = parseInt(newCoffee.price)
    console.log(newCoffee);


    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added a new coffee",
            icon: "success",
            draggable: true,
          });

          // form.reset()

        }
      });
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
              Add New Coffee
            </h1>
            <p className="text-center font-thin mb-8">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            <form onSubmit={handleAddCoffee} className="grid grid-cols-2">
              <div>
                <fieldset className="fieldset rounded-box w-xs  p-4">
                  <label className="label font-bold">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="input  mb-2 w-96"
                    placeholder="Enter coffee name"
                  />

                  <label className="label font-bold">Supplier</label>
                  <input
                    required
                    name="supplier"
                    type="text"
                    className="input mb-2 w-96"
                    placeholder="Enter coffee supplier"
                  />

                  <label className=" font-bold label">Price</label>
                  <input
                    type="number"
                    required
                    name="price"
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
                    className="input mb-2 w-96"
                    placeholder="Enter coffee chef"
                  />

                  <label className="label font-bold">Taste</label>
                  <input
                    required
                    name="taste"
                    type="text"
                    className="input mb-2 w-96"
                    placeholder="Enter coffee taste"
                  />

                  <label className=" font-bold label">Details</label>
                  <input
                    required
                    type="text"
                    name="details"
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

export default AddCoffeePage;
