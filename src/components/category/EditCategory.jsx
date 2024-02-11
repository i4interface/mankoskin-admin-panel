import React, {useState}  from 'react'
import axiosInstance from '../../api/axios';
import { toast } from 'react-toastify';

function EditCategory({editCategory ,setEditvisible, categoryList }) {
    const [updatedName,setUpdatedName] = useState("")
    const [mainCategory,setMainCategory] = useState(false)
    const categoryId = editCategory?._id
    const CategoryChange = (categoryName) => {
        setMainCategory(false)
        setSelectedCategory(categoryName);

    };

  const onSubmit = ()=>{
      axiosInstance.put('/editcategory',{categoryId,updatedName}).then((res)=>{
          if(res.data.errmsg){
            toast.error(res.data.errmsg)
          }else{
            toast.success(res.data.message)
            setEditvisible(false)
          }
      })
  }

  return (
   
        <div className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-white " id="addProduct">
            <div className="panel">
                <div className="mb-5 flex items-center justify-between">
                    <div className="flex flex-col text-xl font-semibold text-black gap-2">
                        Edit category
                        <span className="text-sm ">Edit your Product category and necessary information from here</span>
                    </div>

                    <button className="closeBtn w-[49px] flex justify-center items-center aspect-square rounded-full shadow-lg " onClick={()=>setEditvisible(false)}>
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
                                                    onChange={(e) => setUpdatedName(e.target.value)}
                                                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 "
                                                    type="text"
                                                    name="title"
                                                    // value={editCategory?.categoryName}
                                                    placeholder={editCategory?.categoryName}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Parent Category</label>
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
                                                                        checked
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
                                                                        <input type="radio" name="category" className="mr-2"  />
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
                                                                                        onChange={() => CategoryChange(subCategory.categoryName)}
                                                                                    />
                                                                                    <span>{subCategory.categoryName}</span>
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
                                                onClick={()=>setEditvisible(false)}
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
   
  )
}

export default EditCategory