import React from 'react'

export default function Header() {
    return (
        <div className="flex flex-row-reverse z-40 sticky top-0 w-full bg-blue-600">
            <div className="blue-500 p-6">
                <button 
                    className="
                    border-gray-200
                    border-2
                    whitespace-nowrap
                    inline-flex
                    rounded-md bg-white 
                    py-2 px-3 text-xs 
                    font-semibold uppercase 
                    text-white hover:bg-opacity-90
                    bg-blue-500"
                >
                    Register
                </button>
            </div>
            <div className="blue-500 p-6">
                <button 
                    className="
                    border-blue-500
                    whitespace-nowrap
                    inline-flex
                    rounded-md bg-white 
                    py-2 px-3 text-xs 
                    font-semibold uppercase 
                    text-blue-500 hover:bg-opacity-90"
                >
                    Login
                </button>
            </div>
        </div>
    )
}
