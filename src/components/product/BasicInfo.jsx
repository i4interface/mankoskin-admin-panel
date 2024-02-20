import React from 'react'

function BasicInfo() {
  return (
    <div>
    <div>
        <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="border relative h-12 p-2 flex justify-between items-center">
                <span>Select..</span>
                <div className="flex gap-2">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="text-gray-500 hover:tex">
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L8 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="absolute w-full left-0 top-[56px] bg-white shadow-md hidden">
                    <div className="relative w-full p-2 bg-slate-50">
                        <input
                            type="text"
                            name="search-comb"
                            id="searchComb"
                            placeholder="Search.."
                            className="w-full h-full bg-transparent focus:outline-none border-none"
                        />
                        <button className="absolute right-[16px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 1</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 2</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 3</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border relative h-12 p-2 flex justify-between items-center">
                <span>Select..</span>
                <div className="flex gap-2">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="text-gray-500 hover:tex">
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L8 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="absolute w-full left-0 top-[56px] bg-white shadow-md hidden">
                    <div className="relative w-full p-2 bg-slate-50">
                        <input
                            type="text"
                            name="search-comb"
                            id="searchComb"
                            placeholder="Search.."
                            className="w-full h-full bg-transparent focus:outline-none border-none"
                        />
                        <button className="absolute right-[16px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 1</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 2</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 3</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border relative h-12 p-2 flex justify-between items-center">
                <span>Select..</span>
                <div className="flex gap-2">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="text-gray-500 hover:tex">
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L8 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="absolute w-full left-0 top-[56px] bg-white shadow-md hidden">
                    <div className="relative w-full p-2 bg-slate-50">
                        <input
                            type="text"
                            name="search-comb"
                            id="searchComb"
                            placeholder="Search.."
                            className="w-full h-full bg-transparent focus:outline-none border-none"
                        />
                        <button className="absolute right-[16px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 1</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 2</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 3</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border relative h-12 p-2 flex justify-between items-center">
                <span>Select..</span>
                <div className="flex gap-2">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-x"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="text-gray-500 hover:tex">
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 1L8 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <div className="absolute w-full left-0 top-[56px] bg-white shadow-md hidden">
                    <div className="relative w-full p-2 bg-slate-50">
                        <input
                            type="text"
                            name="search-comb"
                            id="searchComb"
                            placeholder="Search.."
                            className="w-full h-full bg-transparent focus:outline-none border-none"
                        />
                        <button className="absolute right-[16px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x"
                            >
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 1</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 2</span>
                            </label>
                        </li>
                        <li className="hover:bg-slate-50 p-2">
                            <label className="flex items-center !mb-0">
                                <input type="checkbox" className="form-checkbox" />
                                <span>option 3</span>
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="flex justify-end mb-6">
            <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 mx-2"
                type="button"
            >
                <span className="text-xs">Generate Variants</span>
            </button>
            <button
                className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 mx-2"
                type="button"
            >
                <span className="text-xs">Clear Variants</span>
            </button>
        </div>

        <div className="table-responsive">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Combination</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Sale price</th>
                        <th className="text-center">Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="flex flex-col gap-2 justify-center items-start">
                            <button className="w-[24px] aspect-square">
                                <img src="assets/images/drag-4.jpg" className="w-full h-full object-contain" alt="product-image" />
                            </button>
                            <button className="text-blue-500 " onclick="closePopup2('variantImage')">
                                Change
                            </button>
                        </td>
                        <td className="whitespace-nowrap">Red</td>
                        <td>
                            <input
                                type="text"
                                className="w-full focus:outline-none border-[0.5px] border-slate-400 p-2 bg-slate-100 rounded-lg max-w-20 focus:bg-white focus:border"
                                name="SKU"
                                id="sku"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full focus:outline-none border-[0.5px] border-slate-400 p-2 bg-slate-100 rounded-lg max-w-20 focus:bg-white focus:border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                name="price"
                                id="prod-price"
                                value="10.00"
                            />
                        </td>
                        <td>
                            <input
                                type="text"
                                className="w-full focus:outline-none border-[0.5px] border-slate-400 p-2 bg-slate-100 rounded-lg max-w-20 focus:bg-white focus:border"
                                name="sale-price"
                                id="prod-sale-price"
                            />
                        </td>
                        <td>
                            <input
                                className="w-full focus:outline-none border-[0.5px] border-slate-400 p-2 bg-slate-100 rounded-lg max-w-20 focus:bg-white focus:border"
                                type="number"
                                name="Quantity"
                                id="prod-quantity"
                                min="1"
                            />
                        </td>
                        <td className="text-center">
                            <button type="button" x-tooltip="Delete">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto h-5 w-5">
                                    <path d="M20.5001 6H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <path
                                        d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                    ></path>
                                    <path opacity="0.5" d="M9.5 11L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <path opacity="0.5" d="M14.5 11L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <path
                                        opacity="0.5"
                                        d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    ></path>
                                </svg>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}

export default BasicInfo