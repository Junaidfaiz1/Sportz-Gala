import React from "react";
import ball from "../assets/images-removebg-preview.png";
import player from "../assets/c68fa9a4-8c9b-4256-8fe3-700f373cedde-removebg-preview.png";
import team1 from "../assets/download (1).jpeg";
import team2 from "../assets/download (2).jpeg";
import troffi from "../assets/download__4_-removebg-preview.png";

const MatchCountDown: React.FC = () => {
  return (
    <div className="mt-8 md:mt-12 lg:mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-around gap-8 md:flex-row md:items-start">
          {/* First Section - Match Details */}
          <div className="w-full max-w-md">
            <div className="text-center md:text-left">
              <img
                src={ball}
                className="mx-auto h-12 w-12 md:mx-0"
                alt="Tennis Ball"
              />
              <h2 className="mt-4 text-lg font-semibold text-yellow-400">
                CLAY MASTERS TOURNAMENT
              </h2>
              <div className="mt-2 text-3xl font-bold">
                Knights <span className="text-yellow-400">VS</span> Electric
                Lions
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-center text-xl font-medium md:text-left">
                Match Countdown
              </h3>
              <div className="mt-4 grid grid-cols-4 gap-4">
                <div className="rounded-lg border-2 border-yellow-400 p-4">
                  <div className="text-2xl font-bold">28</div>
                  <div className="text-sm">Days</div>
                </div>
                <div className="rounded-lg border-2 border-yellow-400 p-4">
                  <div className="text-2xl font-bold">13</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="rounded-lg border-2 border-yellow-400 p-4">
                  <div className="text-2xl font-bold">08</div>
                  <div className="text-sm">Mins</div>
                </div>
                <div className="rounded-lg border-2 border-yellow-400 p-4">
                  <div className="text-2xl font-bold">57</div>
                  <div className="text-sm">Secs</div>
                </div>
              </div>
            </div>

            <button className="mt-8 w-full rounded-lg bg-yellow-400 px-6 py-3 text-lg font-semibold text-black shadow-lg transition-all hover:bg-yellow-500 hover:shadow-xl md:w-auto">
              Watch Stream
            </button>
          </div>

          {/* Center Section - Player Image */}
          <div className="hidden md:block">
            <img
              src={player}
              alt="Player"
              className="h-[600px] w-auto object-contain"
            />
          </div>

          {/* Final Section - Pre Final Battle */}
          <div className="w-full max-w-md">
            <div className="text-center md:text-left">
              <img
                src={ball}
                className="mx-auto h-12 w-12 md:mx-0"
                alt="Tennis Ball"
              />
              <h2 className="mt-4 text-lg font-semibold text-yellow-400">
                One Last Fight For Glory
              </h2>
              <div className="mt-2 text-3xl font-bold">Pre Final Battle</div>
            </div>

            <div className="mt-8 rounded-xl bg-neutral-900 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="text-center">
                  <img
                    src={team1}
                    alt="Team 1"
                    className="h-24 w-24 rounded-full border-2 border-yellow-400 object-cover"
                  />
                </div>

                <div className="text-center">
                  <img src={troffi} alt="Trophy" className="h-32 w-32" />
                  <div className="mt-2 text-2xl font-bold text-yellow-400">
                    Finals
                  </div>
                </div>

                <div className="text-center">
                  <img
                    src={team2}
                    alt="Team 2"
                    className="h-24 w-24 rounded-full border-2 border-yellow-400 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCountDown;
