import React from 'react'
import Image from 'next/image';
const Username = ({params}) => {
    console.log(params.username);
  return (
    <div className='min-h-[calc(100vh-128px)]'>
      <div className="cover w-full relative h-96">
        <Image
          src="/cover.jpg"
          alt="cover"
          fill= {true}
          objectFit='cover'
          objectPosition='center'
          />
        <Image className='absolute bottom-[-60px] left-1/2 translate-x-[-50%] rounded-xl'
          src="/pfp.jpg"
          alt="pfp"
          height={120}
          width={120}
        />
      </div>
      <div className="user flex flex-col items-center mt-16">
        <h1 className="text-3xl font-bold">{params.username}</h1>
        <p className="text-md text-[#efefef] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className='text-md text-[#8d8d8d]'>25 posts</p>
      </div>
      <div className='flex justify-center mt-5'>
        <button className='h-10 w-56 bg-white text-[#414248] font-bold rounded-lg'>Join</button>
      </div>
    </div>
  )
}

export default Username