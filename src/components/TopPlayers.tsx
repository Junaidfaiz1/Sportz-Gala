import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ball from "../assets/images-removebg-preview.png";

const players = [
  {
    name: "Anna Maria",
    role: "TEAM HEAD",
    image:
      "https://t3.ftcdn.net/jpg/06/17/57/14/360_F_617571490_Lagtv4frKo0T4zoElZsldDuzznAATG10.jpg",
  },
  {
    name: "Luca Matteo",
    role: "TEAM PLAYERS",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/026/843/788/small/portrait-of-smart-young-man-with-happy-and-confident-face-on-studio-background-business-concept-ai-generated-free-photo.jpeg",
  },
  {
    name: "Mia Rose",
    role: "TEAM HEAD",
    image:
      "https://static.vecteezy.com/system/resources/previews/033/129/417/non_2x/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
  },
  {
    name: "Hugo Alexander",
    role: "TEAM HEAD",
    image:
      "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg",
  },
  {
    name: "Lily Grace",
    role: "TEAM HEAD",
    image:
      "https://media.istockphoto.com/id/1163294201/photo/smiling-confident-businesswoman-posing-with-arms-folded.jpg?s=612x612&w=0&k=20&c=9SY62tujbyx46_NbVH6pYAauliGvM0ixcaEfup9y_kU=",
  },
];

const PlayerSlider: React.FC = () => {
  return (
    <div className="bg-[#000000] px-4 py-8 text-white sm:px-6 sm:py-12">
      <div className="text-center">
        <div className="flex justify-center">
          <img src={ball} className="h-8 w-8 sm:h-12 sm:w-12" alt="" />
        </div>
        <p className="text-xs tracking-wide text-yellow-400 uppercase sm:text-sm">
          Our Players, Our Pride
        </p>
        <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
          OUR TALENTED PLAYERS
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mt-6 px-2 sm:mt-10"
      >
        {players.map((player, index) => (
          <SwiperSlide key={index} className="pb-12 text-center">
            <div className="transform rounded-lg bg-white p-3 text-black shadow-lg transition-transform duration-300 hover:scale-105 sm:p-4">
              <img
                src={player.image}
                alt={player.name}
                className="h-40 w-full rounded-md object-cover sm:h-60"
                loading="lazy"
              />
              <h3 className="mt-2 truncate text-lg font-semibold sm:mt-3 sm:text-xl">
                {player.name}
              </h3>
              <p className="text-sm text-gray-500 sm:text-base">
                {player.role}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlayerSlider;
