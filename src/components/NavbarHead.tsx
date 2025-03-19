import React from "react";

const NavbarHead: React.FC = () => {
  return (
    <div
      className="hidden w-full bg-yellow-400 md:block"
      style={{ height: "50px" }}
    >
      <div className="mr-16 ml-16 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              className="w-16 p-4"
              src="data:image/png;base64,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"
              alt=""
            />
            <p className="font-bold text-black">PAK</p>
          </div>
          <div className="border-black-500 h-8 w-4 border-r-2"></div>
          <div className="ml-4 flex items-center">
            <i className="font-bold text-black underline">SPORTZ SHOP</i>
          </div>
        </div>

        {/* CENTER   */}
        <div>
          <div className="flex items-center">
            <i
              className="bg-neutral-950 text-center font-bold text-yellow-500"
              style={{ height: "28px", width: "50px" }}
            >
              Live
            </i>
            <p className="ml-2 text-center text-lg font-medium">
              Legends Faceoff : Encode vs Eagles
            </p>
          </div>
        </div>
        <div>
          <i className="font-bold underline">Live Event Pass</i>
        </div>
      </div>
    </div>
  );
};

export default NavbarHead;
