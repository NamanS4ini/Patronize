import React from "react";
import Image from "next/image";
const Username = ({ params }) => {
  console.log(params.username);
  return (
    <div className="min-h-[calc(100vh-128px)]">
      <div className="cover w-full pt-[25%] relative h-32">
        <Image
          src="/cover.jpg"
          alt="cover"
          fill={true}
          objectFit="cover"
          objectPosition="left"
        />
        <Image
          className="absolute bottom-[-60px] left-1/2 translate-x-[-50%] rounded-xl"
          src="/pfp.jpg"
          alt="pfp"
          height={120}
          width={120}
        />
      </div>
      <div className="user flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold">{params.username}</h1>
        <p className="text-md text-[#efefef] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-md text-[#8d8d8d]">25 posts</p>
      </div>
      <div className="flex justify-center mt-5">
        <button className=" hover:bg-[#c5c5c5] h-10 w-56 bg-white text-[#414248] font-bold rounded-lg">
          Join
        </button>
      </div>
      <div className="h-px bg-blue-600 rounded-full my-10 w-[90%] mx-auto"></div>
      <div className="paymentArea pb-10 flex gap-9 justify-center ">
        <div className="suppoters max-w-[700px]  w-1/2">
          <ul className="border-2 flex flex-col gap-5 h-full max-h-96 overflow-x-hidden overflow-scroll w-full border-[#414248] rounded-lg p-4">
            <li className="flex items-center gap-5 ">
              <span className="w-1/3 min-w-40">
                Anon donated{" "}
                <span className="font-bold text-green-300">$1000</span>
              </span>
              <div className="min-w-px h-6 bg-gray-600"></div>
              <span className=" text-gray-300">hi</span>
            </li>
          </ul>
        </div>
        <div className="makePayment border-[#414248] w-96 border-2 rounded-lg p-4">
          <h1 className="text-xl font-bold mb-4">Make a Payment</h1>
          <div className="flex flex-col mb-4 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-10 bg-[#414248] outline-none text-white rounded-lg p-2"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full h-10 bg-[#414248] outline-none text-white rounded-lg p-2"
              />
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Amount"
              className="w-full h-10 bg-[#414248] outline-none text-white rounded-lg p-2"
            />
            <button className=" hover:bg-[#5d5e66] bg-[#414248] py-2 px-4 rounded-lg">Pay</button>
          </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button className=" hover:bg-[#5d5e66] outline-none py-2 rounded-lg bg-[#414248]">pay $10</button>
              <button className=" hover:bg-[#5d5e66] outline-none py-2 rounded-lg bg-[#414248]">pay $20</button>
              <button className=" hover:bg-[#5d5e66] outline-none py-2 rounded-lg bg-[#414248]">pay $30</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Username;
