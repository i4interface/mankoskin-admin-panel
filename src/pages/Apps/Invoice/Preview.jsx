import { useEffect, useState } from 'react';
import CategoryTable from '../../../components/category/CategoryTable';
import axiosInstance from '../../../api/axios';
import {toast} from 'react-toastify'
import EditCategory from "../../../components/category/EditCategory"
// import './Dashtar.css'

const Preview = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [EditVisible ,setEditvisible] = useState(false)
    const [categoryName, setCategoryName] = useState('');
    const [categoryList, setCategoryList] = useState([]);
    const [mainCategory, setMainCategory] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [editcategory,setEditcategory] = useState(null)
 
    console.log("editcategory",editcategory)

    const handleCategoryChange = (categoryName) => {
        setMainCategory(false)
        setSelectedCategory(categoryName);

    };

    const openPopup = () => {
        setPopupVisible(!popupVisible);
    };
    const closePopup = () => {
        setPopupVisible(false);
    };

    useEffect(() => {
        axiosInstance.get('/admin/listcategories').then((res) => {
            setCategoryList(res.data.categories);
        });
    }, [EditVisible]);

    const onSubmit = () => {
        axiosInstance.post('/admin/addcategory', { categoryName,mainCategory,selectedCategory }).then((res) => {
            if(res.data.message){
                toast.success(res.data.message)
                setPopupVisible(false)
            }else{
                toast.error(res.data.errmsg)
            }
        });
    };

    return (
        <>
            <div>
                <div className="panel mt-6">
                    <h2 className="text-black text-3xl font-semibold mb-2">Categories</h2>
                    <div x-data="all-product">
                        <script src="assets/js/simple-datatables.js"></script>

                        <div className="panel border-[#e0e6ed] px-0 ">
                            <div className="rounded-lg overflow-hidden bg-white min-w-0 shadow-xs">
                                <div className="p-4">
                                    <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex justify-between">
                                        <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
                                            <div className=" lg:flex md:flex flex-grow-0">
                                                {/* <div className="flex">
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
                                                </div> */}
                                            </div>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            {/* <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
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
                                            </div> */}
                                            {/* <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
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
                                            </div> */}
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
                                                    Add Category
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="min-w-0 rounded-lg overflow-hidden bg-white shadow-xs rounded-t-lg rounded-0 mb-4">
                                <div className="p-4">
                                    <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                                        <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                            <input
                                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200"
                                                type="search"
                                                name="search"
                                                placeholder="Search by category name"
                                            />
                                            <button type="submit" className="absolute right-0 top-0 mt-5 mr-1"></button>
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
                                    </form>
                                </div>
                            </div>

                            <div className="invoice-table mt-5 overflow-x-auto">
                                {/* <!-- Table--> */}
                                <CategoryTable categories={categoryList} setEditcategory={setEditcategory} setEditvisible={setEditvisible} closePopup={closePopup} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal add product */}
                {popupVisible && (
                    <div className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-white " id="addProduct">
                        <div className="panel">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex flex-col text-xl font-semibold text-black gap-2">
                                    Add category
                                    <span className="text-sm ">Add your Product category and necessary information from here</span>
                                </div>

                                <button className="closeBtn w-[49px] flex justify-center items-center aspect-square rounded-full shadow-lg " onClick={closePopup}>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L17 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                        <path d="M2 17L17 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-5" x-data="{tab: 'home'}">
                                <div className="flex-1 pt-5 text-sm">
                                    <div>
                                        <div className="active">
                                            <div className="block relative" id="block">
                                                <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">Name</label>
                                                        <div className="col-span-8 sm:col-span-4">
                                                            <input
                                                                onChange={(e) => setCategoryName(e.target.value)}
                                                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 "
                                                                type="text"
                                                                name="title"
                                                                placeholder="Category Title/Name"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Category</label>
                                                        <div className="col-span-8 sm:col-span-4">
                                                            <div className="mb-2">
                                                                <div className="w-full h-60 border border-gray-700 overflow-auto ">
                                                                    <div className="w-full h-6 bg-slate-50 text-sm font-medium flex items-center p-4">All categories</div>
                                                                    <ul className="ml-4">
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    onChange={(e) => setMainCategory(e.target.checked)}
                                                                                    value={mainCategory}
                                                                                    type="radio"
                                                                                    name="category"
                                                                                    className="mr-2"
                                                                                />
                                                                                <span>None</span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                    <ul className="ml-4">
                                                                        {/* Main Categories */}
                                                                        {categoryList?.map((category, index) => (
                                                                            <li className="my-2" key={index}>
                                                                                <label className="inline-flex">
                                                                                    <input type="radio" name="category" className="mr-2" onChange={() => handleCategoryChange(category.categoryName)} />
                                                                                    <span>{category.categoryName}</span>
                                                                                </label>
                                                                                <ul className="ml-4 mt-2">
                                                                                    {/* Sub Categories */}
                                                                                    {category?.subCategories?.map((subCategory, subIndex) => (
                                                                                        <li key={subIndex}>
                                                                                            <label className="inline-flex">
                                                                                                <input
                                                                                                    name="subCategory"
                                                                                                    type="radio"
                                                                                                    className="mr-2"
                                                                                                    onChange={() => handleCategoryChange(subCategory)}
                                                                                                />
                                                                                                <span>{subCategory}</span>
                                                                                            </label>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="fixed md:w-[80%] z-10 bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 ">
                                                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                                        <button
                                                            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 "
                                                            type="button"
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                    <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                                                        <button
                                                            onClick={onSubmit}
                                                            className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                                                        >
                                                            <span>Add Category</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- change variant image --> */}
                        </div>
                    </div>
                )}
                {
                  EditVisible && (
                    <div>
                        <EditCategory editCategory={editcategory} categoryList={categoryList} setEditvisible={setEditvisible}/>
                    </div>
                  )
                }
            </div>
        </>
    );
};

export default Preview;
