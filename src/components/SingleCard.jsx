import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const SingleCard = ({ coffee }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="   bg-gray-100/50 py-8 px-16  rounded-lg flex items-center justify-between  ">
      {/* Left - Image and Info */}
      <div className="flex items-center space-x-4">
        <img src={photo} alt={name} className="w-20 h-28 object-cover " />
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price} Taka
          </p>
        </div>
      </div>

      {/* Right - Buttons */}
      <div className="flex flex-col space-y-2 ml-4">
        <Link to={`/coffee/${_id}`}><button className="btn btn-sm  btn-ghost text-white bg-amber-600">
          <FaEye />
        </button></Link>
        <Link to={`/update-coffee/${_id}`}   ><button className="btn btn-sm btn-ghost text-white bg-gray-700">
          <FaEdit />
        </button></Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-ghost text-white bg-red-600"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
