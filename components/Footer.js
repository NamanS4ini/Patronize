import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='p-4 bg-black text-white'>
        <p className='sm:text-2xl text-center font-bold'>Copyright &copy; {year} Patronize - All rights reserved</p>
        {/* <p className='text-xl mx-auto w-3/4 text-center font-semibold'>Empowering creators and fostering communities. This modern Patreon clone, built with Next.js, focuses on seamless payment integration and authentication systems to support creators and connect them with their audience. It's a work in progress, showcasing my journey in learning and implementing advanced web development skills. Feedback and contributions are always welcome!</p> */}
    </footer>
  )
}

export default Footer