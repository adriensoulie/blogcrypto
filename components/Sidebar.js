import React from 'react'

export default function Sidebar() {
    return (
        <div className="
            fixed
            z-0
            inset-0 
            flex-none 
            h-screen 
            bg-black 
            bg-opacity-25 
            w-full lg:bg-white
            lg:static lg:h-auto 
            lg:pt-0 lg:w-60 xl:w-72 lg:block hidden"
            >
                <div>
                        <nav className="pt-40 fixed p-4">
                            <h3 className="px-3 py-2 text-black">Getting Started</h3>
                            <p className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">Basics</p>
                            <p className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">Basic 2</p>
                            <p className="px-3 py-2 transition-colors duration-200 relative block hover:text-gray-900 text-gray-500">Basics 3</p>
                        </nav>
                </div>
        </div>
    )
}
