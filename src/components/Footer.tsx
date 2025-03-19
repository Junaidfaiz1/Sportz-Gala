import React from "react";
import SportsIcon from "@mui/icons-material/Sports";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer: React.FC = () => {
  return (
    <div className="relative bg-[#000000] px-6 py-12 text-white">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Column 1 - Logo and Social */}
        <div className="col-span-1 md:ml-7">
          <div className="align-start flex justify-center">
            <SportsIcon
              className="mr-1 text-yellow-400"
              style={{ fontSize: "4rem" }}
            />
            <i className="font-md text-4xl">CHAMPIONS</i>
          </div>
          <div className="flex items-start justify-center">
            <p className="text-sm/6 leading-6 uppercase">
              Follow Us Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dignissimos, fuga asperiores nostrum deleniti ab, quae error
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="mt-6 w-full">
            <h3 className="mb-4 text-xl font-bold">Subscribe to Newsletter</h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded bg-neutral-800 p-2 text-white"
              />
              <button className="rounded bg-yellow-400 px-4 py-2 text-black hover:bg-yellow-500">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-4 flex flex-col items-start justify-start">
            <i className="border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
              Social Media
            </i>
            <div className="mt-4 flex flex-row items-start justify-start gap-4">
              <FacebookIcon className="cursor-pointer hover:text-blue-600" />
              <TwitterIcon className="cursor-pointer hover:text-blue-400" />
              <InstagramIcon className="cursor-pointer hover:text-pink-500" />
              <LinkedInIcon className="cursor-pointer hover:text-blue-700" />
              <PinterestIcon className="cursor-pointer hover:text-red-600" />
            </div>
          </div>
        </div>

        {/* Column 2 - Information */}
        <div className="col-span-1 md:ml-10">
          <div className="flex flex-col items-start justify-start">
            <i className="border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
              Information
            </i>
            <div className="mt-4 flex flex-col items-start justify-start gap-2">
              <p className="cursor-pointer hover:text-yellow-400">Careers</p>
              <p className="cursor-pointer hover:text-yellow-400">About Us</p>
              <p className="cursor-pointer hover:text-yellow-400">
                Press Release
              </p>
              <p className="cursor-pointer hover:text-yellow-400">Portfolio</p>
            </div>
          </div>
        </div>

        {/* Column 3 - Sports */}
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start">
            <i className="border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
              Sports
            </i>
            <div className="mt-4 flex flex-col items-start justify-start gap-2">
              <p className="cursor-pointer hover:text-yellow-400">
                Sports News
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Live Scores
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Players Profiles
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Upcoming Events
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Fantasy Sports
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Sports Blogs
              </p>
            </div>
          </div>
        </div>

        {/* Column 4 - Resources */}
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start">
            <i className="border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
              Resources
            </i>
            <div className="mt-4 flex flex-col items-start justify-start gap-2">
              <p className="cursor-pointer hover:text-yellow-400">
                Contact Sport
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Help Center
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Customer Services
              </p>
              <p className="cursor-pointer hover:text-yellow-400">Live Chat</p>
              <p className="cursor-pointer hover:text-yellow-400">
                Account Sport
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Order Status
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Membership Status
              </p>
            </div>
          </div>
        </div>

        {/* Column 5 - Legal */}
        <div className="col-span-1">
          <div className="flex flex-col items-start justify-start">
            <i className="border-b-2 border-yellow-400 pb-2 text-2xl font-bold text-white">
              Legal
            </i>
            <div className="mt-4 flex flex-col items-start justify-start gap-2">
              <p className="cursor-pointer hover:text-yellow-400">
                Privacy Policy
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Terms & Conditions
              </p>
              <p className="cursor-pointer hover:text-yellow-400">Disclaimer</p>
              <p className="cursor-pointer hover:text-yellow-400">
                Refund Policy
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Cookie Policy
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Support Policy
              </p>
              <p className="cursor-pointer hover:text-yellow-400">
                Payment Policy
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-7 text-stone-800" />

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          © 2024 Champions. All Rights Reserved.
        </p>
        <p className="text-sm text-gray-500">Designed by: Junaid Faiz</p>
      </div>
    </div>
  );
};

export default Footer;
