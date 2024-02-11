import React,{useState} from 'react'
import ValuesTable from '../../../components/attribute/ValuesTable'
import AddValue from '../../../components/attribute/AddValue'


function Attributevalues() {
    const [addValue,setAddValue] = useState(false)
  return (
    <div>
    <main className="h-full overflow-y-auto">
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
            <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">Attributes Values</h1>
            <div className="flex items-center pb-4">
                <ol className="flex items-center w-full overflow-hidden font-serif">
                    <li className="text-sm pr-1 transition duration-200 ease-in cursor-pointer hover:text-emerald-500 font-semibold">
                        <a className="text-blue-700" href="/attributes">
                            Attributes
                        </a>
                    </li>
                    <span className="flex items-center font-serif dark:text-gray-400">
                        <li className="text-sm mt-[1px]">
                            {' '}
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>{' '}
                        </li>
                        <li className="text-sm pl-1 font-semibold dark:text-gray-400">Color</li>
                    </span>
                </ol>
            </div>
            <div className="min-w-0 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-xs mb-5">
                <div className="p-4 py-3 grid gap-4 justify-end lg:gap-4 xl:gap-4 md:flex xl:flex">
                    <div className="flex justify-end items-end">
                        <button
                         onClick={()=>setAddValue(true)}
                            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 rounded-md h-12"
                            type="button"
                        >
                            <span className="mr-3">
                                <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                </svg>
                            </span>
                            Add Value
                        </button>
                    </div>
                    <div className="w-full md:w-24 lg:w-24 xl:w-24">
                        <button
                            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 cursor-not-allowed w-full rounded-md h-12"
                            disabled
                            type="button"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                            </svg>
                            Bulk Action
                        </button>
                    </div>
                    <button
                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 cursor-not-allowed rounded-md h-12 bg-red-500"
                        disabled
                        type="button"
                    >
                        <span className="mr-3">
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="3 6 5 6 21 6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                <line x1={10} y1={11} x2={10} y2={17} />
                                <line x1={14} y1={11} x2={14} y2={17} />
                            </svg>
                        </span>
                        Delete
                    </button>
                </div>
            </div>
            <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8">
                <div className="w-full overflow-x-auto">
                   <ValuesTable/>
                </div>
                
            </div>
        </div>
       
    </main>
     {
        addValue && (<AddValue/>)
    }
    </div>
  )
}

export default Attributevalues
