import React from "react";
import tanisball from "../assets/images-removebg-preview.png";
import player from "../assets/view-tennis-player-with-digital-art-style-effect-removebg-preview.png";
import team1 from "../assets/download (1).jpeg";
import team2 from "../assets/download (2).jpeg";
import team3 from "../assets/download-removebg-preview (1).png";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center">
        <img className="h-16 w-16" src={tanisball} alt="Upcoming Event" />
        <h2 className="mt-2 text-xl font-bold">Cash For Supremacy</h2>
        <i className="mt-4 mb-8 text-6xl font-bold">Upcoming Court Battles</i>
      </div>

      <div className="flex w-full items-start justify-between">
        {/* Player Image Section */}
        <div className="">
          <img
            src={player}
            alt="Player Image"
            style={{ width: "50rem", height: "50rem" }}
          />
        </div>
        {/* Matches Section */}
        <div className="flex w-2/3 flex-col">
          <div className="mb-8 flex h-64 w-full items-center rounded-md border border-gray-300 p-4">
            <img
              src={team3}
              alt="Team 1 logo"
              className="ml-6 h-24 w-24 rounded-lg"
            />
            <div className="mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold">Spin Doctors</h2>
              <i className="text-2xl font-bold text-yellow-400">VS</i>
              <h2 className="text-3xl font-bold">Tennis Builders</h2>
              <hr className="mt-8 w-64" />
              <p className="mt-4 text-lg font-bold">Little Park Stadium</p>
            </div>
            <img
              src={team1}
              alt="Team 2 logo"
              className="mr-8 ml-6 h-24 w-24 rounded-lg"
            />
          </div>

          <div className="mb-8 flex h-64 w-full items-center rounded-md border border-gray-300 p-4">
            <img
              src={team2}
              alt="Team 1 logo"
              className="ml-6 h-24 w-24 rounded-lg"
            />
            <div className="mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold">Net Ninjas</h2>
              <i className="text-2xl font-bold text-yellow-400">VS</i>
              <h2 className="text-3xl font-bold">Spin Doctors</h2>
              <hr className="mt-8 w-64" />
              <p className="mt-4 text-lg font-bold">Little Park Stadium</p>
            </div>
            <img
              src={team3}
              alt="Team 2 logo"
              className="mr-8 ml-6 h-24 w-24 rounded-lg"
            />
          </div>

          <div className="mb-8 flex h-64 w-full items-center rounded-md border border-gray-300 p-4">
            <img
              src={team1}
              alt="Team 1 logo"
              className="ml-6 h-24 w-24 rounded-lg"
            />
            <div className="mx-auto flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold">Tennis Builders</h2>
              <i className="text-2xl font-bold text-yellow-400">VS</i>
              <h2 className="text-3xl font-bold">Net Ninjas</h2>
              <hr className="mt-8 w-64" />
              <p className="mt-4 text-lg font-bold">Little Park Stadium</p>
            </div>
            <img
              src={team2}
              alt="Team 2 logo"
              className="mr-8 ml-6 h-24 w-24 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
