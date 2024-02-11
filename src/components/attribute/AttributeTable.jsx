import React from 'react'
import { useNavigate } from 'react-router-dom'


function AttributeTable({ attributes, setEditcategory ,setEditvisible,}) {
    const navigate = useNavigate()
  return (
    <div>
    <table className="w-full whitespace-nowrap overflow-x-auto">
        <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-100">
            <tr>
                <td className="px-4 py-2">
                    <input id="selectAll" name="selectAll" type="checkbox" />
                </td>
                <td className="px-4 py-2">ID</td>
                <td className="px-4 py-2">ATTRIBUTE NAME</td>
                {/* <td className="px-4 py-2">VALUES </td> */}
                <td className="px-4 py-2 text-center">PUBLISHED</td>
                <td className="px-4 py-2 text-right">NEW VALUE </td>
                <td className="px-4 py-2 text-right">ACTIONS</td>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-gray-800">
            {attributes.map((attribute, index) => (
                <tr key={index} className="">
                    <td className="px-4 py-2">
                        <input id="644501ab7094a0000851284b" name="Premium T-Shirt" type="checkbox" />
                    </td>
                    <td className="px-4 py-2">
                        <span className="text-sm">{index}</span>
                    </td>
                    <td className="px-4 py-2">
                        <span className="text-sm font-semibold">{attribute.name}</span>
                    </td>
                    {/* <td className="px-4 py-2">
                        {
                            attribute?.variants?.map((variant, subIndex) => (
                            <span key={subIndex} className="text-xs font-light">{variant}{',  '}</span>
                            ))
                        }
                    </td> */}
                   

                    <td className="px-4 py-2 text-center">
                        <div className=" flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold ">
                            <label className="w-7 h-4 relative cursor-pointer mb-0">
                                {attribute.isPublished ? 
                                  <input
                                  type="checkbox"
                                  className="peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer"
                                  id="custom_switch_checkbox1"
                                  checked
                              /> :
                              <input
                              type="checkbox"
                              className="peer absolute w-full h-full opacity-0 z-10 focus:ring-0 focus:outline-none cursor-pointer"
                              id="custom_switch_checkbox1"
                          />
                                }
                                <span className="rounded-full border border-[#adb5bd] bg-white peer-checked:bg-primary peer-checked:border-primary block h-full before:absolute ltr:before:left-0.5 rtl:before:right-0.5 ltr:peer-checked:before:left-3.5 rtl:peer-checked:before:right-3.5 peer-checked:before:bg-white before:bg-[#adb5bd] before:bottom-[2px] before:w-3 before:h-3 before:rounded-full before:transition-all before:duration-300"></span>
                            </label>
                        </div>
                    </td>
                    <td className="px-4 py-2">
                    <div className="flex justify-end text-right">
                            <button onClick={()=>{
                                navigate('/apps/invoice/attributevalues')
                                }} className="p-2 cursor-pointer text-gray-400 hover:text-success focus:outline-none">
                                <p data-tip="true" data-for="edit" className="text-xl">
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
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </p>
                            </button>
                            {/* <button type="button" className="p-2 cursor-pointer text-gray-400 hover:text-danger focus:outline-none">
                                <p data-tip="true" data-for="delete" className="text-xl">
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
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </p>
                            </button> */}
                        </div>
                    </td>
                    <td className="px-4 py-2">
                        <div className="flex justify-end text-right">
                            <button onClick={()=>{
                                setEditcategory(attribute)
                                setEditvisible(true)
                                }} className="p-2 cursor-pointer text-gray-400 hover:text-info focus:outline-none">
                                <p data-tip="true" data-for="edit" className="text-xl">
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
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </p>
                            </button>
                            <button type="button" className="p-2 cursor-pointer text-gray-400 hover:text-danger focus:outline-none">
                                <p data-tip="true" data-for="delete" className="text-xl">
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
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </p>
                            </button>
                        </div>
                    </td>
                </tr>
 

            ))}
        </tbody>
    </table>
</div>
  )
}

export default AttributeTable