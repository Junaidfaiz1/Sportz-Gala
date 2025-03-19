import React from "react";
import tanisball from "../assets/images-removebg-preview.png";
import player from "../assets/view-tennis-player-with-digital-art-style-effect-removebg-preview.png";
import team1 from "../assets/download (1).jpeg";
import team2 from "../assets/download (2).jpeg";
import team3 from "../assets/download-removebg-preview (1).png";

const UpcomingEvents: React.FC = () => {
  return (
    <div className="mt-6 px-4 sm:mt-8 md:mt-10">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center text-center">
        <img
          className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16"
          src={tanisball}
          alt="Tennis Ball Icon"
        />
        <h2 className="mt-2 text-lg font-bold text-yellow-400 sm:text-xl md:text-2xl">
          Cash For Supremacy
        </h2>
        <i className="mt-3 mb-6 text-3xl font-bold sm:text-4xl md:mb-8 md:text-5xl">
          Upcoming Court Battles
        </i>
      </div>

      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-12">
        {/* Player Image Section - Hidden on mobile */}
        <div className="hidden md:block md:w-1/3">
          <img
            src={player}
            alt="Tennis Player"
            className="w-full object-contain sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
          />
        </div>

        {/* Matches Section */}
        <div className="w-full space-y-6 md:w-2/3">
          {/* First Match */}
          <div className="rounded-lg border-2 border-gray-200 bg-white p-4 shadow-md sm:p-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
              <div className="flex flex-col items-center">
                <img
                  src={team1}
                  alt="Team Spin Doctors"
                  className="h-16 w-16 rounded-lg sm:h-18 sm:w-18 md:h-20 md:w-20"
                />
                <h3 className="mt-2 text-lg font-bold sm:text-xl md:text-2xl">
                  Spin Doctors
                </h3>
              </div>

              <div className="flex flex-col items-center px-4">
                <span className="text-xl font-bold text-yellow-400 sm:text-2xl md:text-3xl">
                  VS
                </span>
                <hr className="my-4 w-32 border-gray-300 sm:w-40 md:w-48" />
                <p className="text-sm font-semibold text-gray-600 sm:text-base">
                  Little Park Stadium
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={team2}
                  alt="Team Tennis Builders"
                  className="h-16 w-16 rounded-lg sm:h-18 sm:w-18 md:h-20 md:w-20"
                />
                <h3 className="mt-2 text-lg font-bold sm:text-xl md:text-2xl">
                  Tennis Builders
                </h3>
              </div>
            </div>
          </div>

          {/* Second Match */}
          <div className="rounded-lg border-2 border-gray-200 bg-white p-4 shadow-md sm:p-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
              <div className="flex flex-col items-center">
                <img
                  src={team2}
                  alt="Team Net Ninjas"
                  className="h-16 w-16 rounded-lg sm:h-18 sm:w-18 md:h-20 md:w-20"
                />
                <h3 className="mt-2 text-lg font-bold sm:text-xl md:text-2xl">
                  Net Ninjas
                </h3>
              </div>

              <div className="flex flex-col items-center px-4">
                <span className="text-xl font-bold text-yellow-400 sm:text-2xl md:text-3xl">
                  VS
                </span>
                <hr className="my-4 w-32 border-gray-300 sm:w-40 md:w-48" />
                <p className="text-sm font-semibold text-gray-600 sm:text-base">
                  Little Park Stadium
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={team3}
                  alt="Team Spin Doctors"
                  className="h-16 w-16 rounded-lg sm:h-18 sm:w-18 md:h-20 md:w-20"
                />
                <h3 className="mt-2 text-lg font-bold sm:text-xl md:text-2xl">
                  Spin Doctors
                </h3>
              </div>
            </div>
          </div>

          <div className="rounded-lg border-2 border-gray-200 bg-white p-4 shadow-md sm:p-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
              <div className="flex flex-col items-center">
                <img
                  src={team1}
                  alt="Team Net Ninjas"
                  className="h-16 w-16 rounded-lg sm:h-18 sm:w-18 md:h-20 md:w-20"
                />
                <h3 className="mt-2 text-lg font-bold sm:text-xl md:text-2xl">
                  Net Ninjas
                </h3>
              </div>

              <div className="flex flex-col items-center px-4">
                <span className="text-xl font-bold text-yellow-400 sm:text-2xl md:text-3xl">
                  VS
                </span>
                <hr className="my-4 w-32 border-gray-300 sm:w-40 md:w-48" />
                <p className="text-sm font-semibold text-gray-600 sm:text-base">
                  Little Park Stadium
                </p>
              </div>

              <div className="flex flex-col items-center">
                <img
                  src={team2}
                  alt="Team Spin Doctors"
                  className="h-16 w-16 rounded-lg sm:h-18 sm:w-18 md:h-20 md:w-20"
                />
                <h3 className="mt-2 text-lg font-bold sm:text-xl md:text-2xl">
                  Spin Doctors
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
