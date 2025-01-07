import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_85%,rgba(120,119,198,0.3),rgba(255,255,255,0))] z-10 h-14 sticky top-0 flex items-center px-4 justify-between text-white'>
        
        <div className='font-bold text-xl'>
            <div className='flex items-center gap-2'>
                <Image src='/favicon.ico' width={40} height={40} alt='logo'/>
                <span>Patronize</span>
            </div>
            </div>
        <ul className='flex gap-5 justify-between'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar