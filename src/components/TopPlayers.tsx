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
    <div className="bg-[#000000] px-6 py-12 text-white">
      <div className="text-center">
        <div className="flex justify-center">
          <img src={ball} className="h-12 w-12" alt="" />
        </div>
        <p className="text-sm tracking-wide text-yellow-400 uppercase">
          Our Players, Our Pride
        </p>
        <h2 className="mt-2 text-3xl font-bold">OUR TALENTED PLAYERS</h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={40}
        navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="mt-10"
      >
        {players.map((player, index) => (
          <SwiperSlide key={index} className="text-center">
            <div className="rounded-lg bg-white p-4 text-black shadow-lg">
              <img
                src={player.image}
                alt={player.name}
                className="h-60 w-full rounded-md object-cover"
              />
              <h3 className="mt-3 text-xl font-semibold">{player.name}</h3>
              <p className="text-gray-500">{player.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlayerSlider;
