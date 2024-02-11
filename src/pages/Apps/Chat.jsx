
const Chat = () => {
  
  return (
    <div className="panel mt-6">
    <h2 className="text-black text-3xl font-semibold mb-2">Orders</h2>
    <div x-data="all-product">
        <script src="assets/js/simple-datatables.js"></script>
        <div className="panel border-[#e0e6ed] px-0 ">
            <div className="rounded-lg overflow-hidden bg-white min-w-0 shadow-xs">
                <div className="p-4">
                    <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex justify-between">
                        <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
                            <div className=" lg:flex md:flex flex-grow-0">
                                <div className="flex">
                                    <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                                        <button className="border flex justify-center items-center border-gray-300 hover:border-[#EABC1E] hover:text-[#EABC1E]  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mr-2"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="17 8 12 3 7 8"></polyline>
                                                <line x1="12" y1="3" x2="12" y2="15"></line>
                                            </svg>
                                            <span className="text-xs">Export</span>
                                        </button>
                                    </div>
                                    <div className="lg:flex-1 md:flex-1 mr-3  sm:flex-none">
                                        <button className="border flex justify-center items-center h-10 w-20 hover:text-yellow-400  border-gray-300 dark:text-gray-300 cursor-pointer  py-2 hover:border-yellow-400 rounded-md focus:outline-none">
                                            <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="mr-2"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                <polyline points="7 10 12 15 17 10"></polyline>
                                                <line x1="12" y1="15" x2="12" y2="3"></line>
                                            </svg>
                                            <span className="text-xs">Import</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white !bg-[#A58311] opacity-50 hover:opacity-100 border border-transparent w-full h-12 "
                                    disabled=""
                                    type="button"
                                >
                                    <span className="mr-2">
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
                                    </span>
                                    Bulk Action
                                </button>
                            </div>
                            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent cursor-not-allowed w-full rounded-md h-12 bg-red-300 disabled btn-red"
                                    disabled=""
                                    type="button"
                                >
                                    <span className="mr-2">
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
                                    </span>
                                    Delete
                                </button>
                            </div>
                            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                <button
                                    onClick={openPopup}
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-[#EABC1E] border border-transparent active:bg-[#A58311] hover:bg-[#A58311] w-full rounded-md h-12"
                                    type="button"
                                >
                                    <span className="mr-2">
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
                                            <line x1="12" y1="5" x2="12" y2="19"></line>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                        </svg>
                                    </span>
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="min-w-0 rounded-lg overflow-hidden bg-white shadow-xs rounded-t-lg rounded-0 mb-4">
                <div className="p-4">
                    <div className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200"
                                type="search"
                                name="search"
                                placeholder="Search Product"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-5 mr-1"></button>
                        </div>
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow min-w-[100px]">
                            <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm focus:outline-none rounded-md form-select focus:bg-white focus:border-gray-200 border-gray-200 leading-5">
                                <option value="All" hidden="">
                                    Category
                                </option>
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category.categoryName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm focus:outline-none rounded-md form-select focus:bg-white focus:border-gray-200 border-gray-200 leading-5">
                                <option value="All" hidden="">
                                    Price
                                </option>
                                <option value="low">Low to High</option>
                                <option value="high">High to Low</option>
                                <option value="published">Published</option>
                                <option value="unPublished">Unpublished</option>
                                <option value="status-selling">Status - Selling</option>
                                <option value="status-out-of-stock"> Status - Out of Stock</option>
                                <option value="date-added-asc">Date Added (Asc)</option>
                                <option value="date-added-desc">Date Added (Desc)</option>
                                <option value="date-updated-asc">Date Updated (Asc)</option>
                                <option value="date-updated-desc">Date Updated (Desc)</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <div className="w-full mx-1">
                                <button
                                    className="!bg-[#EABC1E] align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent active:!bg-[#A58311] hover:!bg-[#A58311] h-12 w-full "
                                    type="submit"
                                >
                                    Filter
                                </button>
                            </div>
                            <div className="w-full mx-1">
                                <button
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-gray-600 border-gray-200 border focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex  md:py-1  h-12 text-sm"
                                    type="reset"
                                >
                                    <span className="text-black">Reset</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="invoice-table mt-5 overflow-x-auto">
                {/* <!-- Table--> */}
                <ProductTable productList={products} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Chat
