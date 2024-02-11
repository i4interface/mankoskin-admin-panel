import React from 'react';

function AsideImg({ images,removeImg }) {
    return (
        <aside className="flex flex-row flex-wrap mt-4">
            <div draggable="true" className='flex gap-4' data-handler-id="T0">
            
                    <div className="relative">
                        <img
                            className="inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2 m-2"
                            src="https://department-of-computer-science-engineering.newhorizoncollegeofengineering.in/wp-content/uploads/2020/01/default_image_01.png"
                            alt="product"
                        />
                        <p className="text-xs absolute py-1 w-full bottom-0 inset-x-0 bg-blue-500 rounded-full text-white text-center ">
                            Product Image
                        </p>
                        <button type="button" className="absolute top-0 right-0 text-red-500 focus:outline-none">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" y1="9" x2="9" y2="15"></line>
                                <line x1="9" y1="9" x2="15" y2="15"></line>
                            </svg>
                        </button>
                    </div>
            </div>
        </aside>
    );
}

export default AsideImg;
