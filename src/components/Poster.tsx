import React from "react";

const Poster: React.FC = () => {
  return (
    <div
      className="bg-neutral-950 w-full"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://thegodofsports.com/wp-content/uploads/2022/11/tennis-girl-professional-tennis-court.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex flex-col justify-center items-center text-center gap-4 "
        style={{ height: "90vh" }}
      >
        <p className="text-white text-xl font-bold">
          ACE OF THE COURT CLASSIC
        </p>
        <i
          className="text-red-400 text-4xl font-bold"
          style={{ fontSize: "3rem" }}
        >
          CHASE GLORY ON COURT
        </i>
        <div
          className="w-1/2 p-4 rounded"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.25)" }}
        >
          <p className="text-white font-bold text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, ut
            consequatur. Dolore ratione vel excepturi a enim dignissimos
            laborum, recusandae incidunt totam ipsam quae, deleniti minus?
            Sapiente eveniet voluptatem dolores!
          </p>
<div className="flex justify-center gap-7 mt-4">
          <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md shadow">
            Book My Ticket
          </button>
          <button className="bg-white hover:bg-blue-700 text-stone-950 font-bold py-2 px-4 border border-gray-400 rounded-md shadow">
            Read More
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
