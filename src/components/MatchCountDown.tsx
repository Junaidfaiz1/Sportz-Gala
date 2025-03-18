import React from "react";
import ball from "../assets/images-removebg-preview.png";
import player from "../assets/c68fa9a4-8c9b-4256-8fe3-700f373cedde-removebg-preview.png";
import team1 from "../assets/download (1).jpeg";
import team2 from "../assets/download (2).jpeg";
import troffi from "../assets/download__4_-removebg-preview.png";

const MatchCountDown: React.FC = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-around">
        {/* start section */}
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start justify-center">
            <img src={ball} className="h-12 w-12" alt="This is Ball" />
            <h1 className="mt-3 text-center">CLAY MASTERS TOURNAMENT</h1>

            <h1 className="mt-3 text-center text-3xl font-bold">
              Knights <i className="mt-1 text-center text-xl">VS</i> Electric
              Lions
            </h1>
          </div>

          <div className="mt-6 flex flex-col items-start justify-center">
            <h1 className="text-center text-2xl font-medium">
              Match Countdown :
            </h1>
            <div className="flex flex-row items-start justify-center">
              <h1 className="mr-2 rounded-md border border-gray-300 p-6 text-2xl">
                28
              </h1>
              <h1 className="mr-2 rounded-md border border-gray-300 p-6 text-2xl">
                13
              </h1>
              <h1 className="mr-2 rounded-md border border-gray-300 p-6 text-2xl">
                08
              </h1>
              <h1 className="rounded-md border border-gray-300 p-6 text-2xl">
                57
              </h1>
            </div>
            <div className="flex flex-row items-start justify-center">
              <div className="flex flex-row items-center justify-center">
                <h1 className="mr-10 ml-3 pt-1 text-lg font-medium">Days</h1>
                <h1 className="mr-8 pt-1 text-lg font-medium">Hours</h1>
                <h1 className="mr-5 pt-1 text-lg font-medium">Minutes</h1>
                <h1 className="pt-1 text-lg font-medium">Seconds</h1>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-6 flex flex-col items-start justify-center">
            <button className="w-48 rounded-lg border border-gray-300 bg-amber-400 p-4 font-medium text-stone-950">
              Watch Stream
            </button>
          </div>
        </div>

        {/* center section */}
        <div className="flex flex-col">
          <img src={player} alt="" />
        </div>

        {/* end section */}
        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-col items-start justify-center">
            <img src={ball} className="h-12 w-12" alt="This is Ball" />
            <h1 className="mt-3 text-center text-lg">
              One Last Fight For Glory
            </h1>

            <i className="mt-3 text-center text-4xl font-bold">
              Pre Final Battle
            </i>
          </div>

          <div
            className="mt-6 flex flex-row items-center justify-center rounded-lg border border-gray-300 px-8 py-6"
            style={{ backgroundColor: "#F3F4F6" }}
          >
            <img src={team1} className="mr-16 h-24 w-24" alt="" />
            <div className="flex flex-col items-center justify-center gap-7">
              <img src={troffi} className="h-32 w-32" alt="" />
              <h1 className="text-3xl font-bold">Knights</h1>
            </div>

            <img src={team2} className="ml-16 h-24 w-24" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCountDown;
