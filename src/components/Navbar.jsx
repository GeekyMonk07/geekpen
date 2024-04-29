import React from 'react'
import Logo from '../asset/logo.png'

function Navbar() {
    return (
        <div
            className='px-4 bg-[#2f3640] py-4'>
                <div className="flex gap-x-2 items-center font-bold text-2xl text-white text-center">
                    <img className='w-10 bg-white' src={Logo} alt="" />
                    <h1>Geek Pen</h1>
                </div>
        </div>
    )
}

export default Navbar