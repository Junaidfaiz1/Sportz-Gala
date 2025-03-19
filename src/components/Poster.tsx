import React from "react";

const Poster: React.FC = () => {
  return (
    <div
      className="relative min-h-screen w-full bg-neutral-950 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://thegodofsports.com/wp-content/uploads/2022/11/tennis-girl-professional-tennis-court.jpg)",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl space-y-6 text-center">
          {/* Header Text */}
          <div className="space-y-4">
            <p className="text-lg font-bold tracking-wider text-yellow-400 sm:text-xl md:text-2xl lg:text-3xl">
              ACE OF THE COURT CLASSIC
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              CHASE GLORY ON COURT
            </h1>
          </div>

          {/* Content Box */}
          <div className="mx-auto w-full max-w-3xl rounded-xl bg-black/30 p-6 backdrop-blur-sm sm:p-8 md:p-10">
            <p className="text-base leading-relaxed font-medium text-white sm:text-lg md:text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, ut
              consequatur. Dolore ratione vel excepturi a enim dignissimos
              laborum, recusandae incidunt totam ipsam quae, deleniti minus?
              Sapiente eveniet voluptatem dolores!
            </p>

            {/* Buttons Container */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
              {/* Book Ticket Button */}
              <button className="group relative overflow-hidden rounded-lg bg-yellow-500 px-6 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-yellow-600 hover:shadow-lg sm:px-8 sm:py-4">
                <span className="relative z-10">Book My Ticket</span>
                <div className="absolute inset-0 h-full w-full translate-y-full transform bg-yellow-600 transition-transform duration-300 group-hover:translate-y-0" />
              </button>

              {/* Read More Button */}
              <button className="group relative overflow-hidden rounded-lg bg-white/90 px-6 py-3 text-lg font-bold text-neutral-900 transition-all duration-300 hover:bg-white hover:shadow-lg sm:px-8 sm:py-4">
                <span className="relative z-10">Read More</span>
                <div className="absolute inset-0 h-full w-full -translate-x-full transform bg-gray-100 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
            </div>
          </div>
        </div>

        
      
      </div>
    </div>
  );
};

export default Poster;
