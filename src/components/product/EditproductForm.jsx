import React,{useState} from 'react'


function EditproductForm() {
    const [productSKU,setproductSKU] = useState('')
    const [productPrice,setproductPrice] =useState("")
    const [salePrice,setSalePrice] = useState("")
    const [productDescription,setProductDescription] =useState("")
    const [productQuantity,setproductQuantity] = useState("")
    const [productDimensions,setProductDimensions] = useState("")
    const [productFinish,setProductFinish] = useState("")
    const [metaTitle,setMetaTitle] = useState("")
    const [metaDescription,setMetaDescription] = useState("")
  return (
    <div
          className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-white "
          id="addProduct"
        >
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex flex-col text-xl font-semibold text-black gap-2">
                {edit === true ? "Edit product" : "Add Product"}
                <span className="text-sm ">
                  Add your product and necessary information from here
                </span>
              </div>

              <button
                className="closeBtn w-[49px] flex justify-center items-center aspect-square rounded-full shadow-lg "
                onClick={closePopup}
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L17 17"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 17L17 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full flex justify-end items-center gap-4">
              Does this product have variant ?
              <div className="flipswitch">
                <input
                //   onChange={(e) => setVariant(e.target.checked)}
                  id="fs"
                  className="flipswitch-cb w-7 h-7"
                  name="flipswitch"
                  type="checkbox"
                />
                <label htmlFor="fs" className="flipswitch-label">
                  <div className="flipswitch-inner"></div>
                  <div className="flipswitch-switch"></div>
                </label>
              </div>
            </div>
            <div className="mb-5" x-data="{tab: 'home'}">
              <div>
                <ul className="mt-3 flex flex-wrap border-b text-lg border-white-light">
                  <li>
                    <a
                      href="javascript:;"
                      className="-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary"
                      onClick={() => handleTabClick("home")}
                      style={
                        tab === "home"
                          ? {
                              border: "1px solid white",
                              borderBottom: "1px solid white",
                            }
                          : {}
                      }
                    >
                      Basic info
                    </a>
                  </li>
                  {/* <li>
                                        <a
                                            href="javascript:;"
                                            className="-mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary"
                                            onClick={() => handleTabClick('basic-info')}
                                            style={tab === 'basic-info' ? { border: '1px solid white', borderBottom: '1px solid white' } : {}}
                                        >
                                            Combinations
                                        </a>
                                    </li> */}
                </ul>
              </div>
              <div className="flex-1 pt-5 text-sm">
                {tab === "home" && (
                   
                  <div>
                    <div className="active">
                      <div className="block relative" id="block">
                        <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">
                              Product Title/Name
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 "
                                type="text"
                                name="productName"
                                value={  edit === true
                                    ? selectedProduct.productName
                                    :"" }
                                onChange={handleProductNameChange}
                                placeholder="Product Name"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Description
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <textarea
                                className="block w-full border bg-gray-100 focus:bg-white rounded-md focus:outline-none p-3 text-sm border-gray-200"
                                name="productDescription"
                                value={
                                  edit === true
                                    ? selectedProduct.productDescription
                                    : ""
                                }
                                onChange={handleChange}
                                placeholder="Product DesCription"
                                rows="4"
                                spellCheck="false"
                              ></textarea>
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Images
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="w-full text-center">
                                <div
                                  className="border-2 relative border-gray-300 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                                  role="presentation"
                                  tabIndex="0"
                                >
                                  <input
                                    onChange={handleImageChange}
                                    type="file"
                                    name="photo"
                                    acceptedfiles=".jpg,.jpeg,.png,.webp"
                                    id="file"
                                    multiple
                                    className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
                                  />
                                  <span className="mx-auto flex justify-center">
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="text-3xl text-emerald-500"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <polyline points="16 16 12 12 8 16"></polyline>
                                      <line
                                        x1="12"
                                        y1="12"
                                        x2="12"
                                        y2="21"
                                      ></line>
                                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                      <polyline points="16 16 12 12 8 16"></polyline>
                                    </svg>
                                  </span>
                                  <p className="text-sm mt-2">
                                    Drag your images here
                                  </p>
                                  <em className="text-xs text-gray-400">
                                    (Only *.jpeg, *.webp and *.png images will
                                    be accepted)
                                  </em>
                                </div>
                                <div className="text-emerald-500">
                                  Uploading ..
                                </div>

                                <aside className="flex flex-row flex-wrap mt-4">
                                  {edit ? (
                                    selectedProduct.productImage.length > 0 ? (
                                      selectedProduct.productImage.map(
                                        (image, index) => (
                                          <div
                                            draggable="true"
                                            className="flex gap-4"
                                            data-handler-id="T0"
                                            key={index}
                                          >
                                            <div className="relative mr-4 ">
                                              <img
                                                className="inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2 m-2"
                                                src={image}
                                                alt="product"
                                              />
                                              <p className="text-xs absolute py-1 w-full bottom-0 inset-x-0 bg-blue-500 rounded-full text-white text-center">
                                                Product Image
                                              </p>
                                              <button
                                                onClick={() => removeImg(index)}
                                                type="button"
                                                className="absolute top-0 right-0 text-red-500 focus:outline-none"
                                              >
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
                                                  <circle
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                  ></circle>
                                                  <line
                                                    x1="15"
                                                    y1="9"
                                                    x2="9"
                                                    y2="15"
                                                  ></line>
                                                  <line
                                                    x1="9"
                                                    y1="9"
                                                    x2="15"
                                                    y2="15"
                                                  ></line>
                                                </svg>
                                              </button>
                                            </div>
                                          </div>
                                        )
                                      )
                                    ) : (
                                      <AsideImg />
                                    )
                                  ) : selectedProduct.productImage.length >
                                    0 ? (
                                    images.map((image, index) => (
                                      <div
                                        draggable="true"
                                        className="flex gap-4"
                                        data-handler-id="T0"
                                        key={index}
                                      >
                                        <div className="relative mr-4 ">
                                          <img
                                            className="inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2 m-2"
                                            src={image}
                                            alt="product"
                                          />
                                          <p className="text-xs absolute py-1 w-full bottom-0 inset-x-0 bg-blue-500 rounded-full text-white text-center">
                                            Product Image
                                          </p>
                                          <button
                                            onClick={() => removeImg(index)}
                                            type="button"
                                            className="absolute top-0 right-0 text-red-500 focus:outline-none"
                                          >
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
                                              <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                              ></circle>
                                              <line
                                                x1="15"
                                                y1="9"
                                                x2="9"
                                                y2="15"
                                              ></line>
                                              <line
                                                x1="9"
                                                y1="9"
                                                x2="15"
                                                y2="15"
                                              ></line>
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <AsideImg />
                                  )}
                                </aside>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Category
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="mb-2">
                                <div className="w-full h-60 border border-gray-700 overflow-auto ">
                                  <div className="w-full h-6 bg-slate-50 text-sm font-medium flex items-center p-4">
                                    All Product categories
                                  </div>
                                  <form>
                                    <ul className="ml-4">
                                      {/* Main Categories */}
                                      {categories?.map((category, index) => (
                                        <li className="my-2" key={index}>
                                          <label className="inline-flex">
                                            <input
                                              type="checkbox"
                                              name="category"
                                              className="mr-2"
                                              checked={
                                                edit &&
                                                category.categoryName ===
                                                  selectedProduct.mainCategory
                                                    .categoryName
                                              }
                                              onChange={() =>
                                                handleCategoryChange(category._id)
                                              }
                                            />
                                            <span>{category.categoryName}</span>
                                          </label>
                                          <ul className="ml-4 mt-2">
                                            {/* Sub Categories */}
                                            {category?.subCategories?.map(
                                              (subCategory, subIndex) => (
                                                <li key={subIndex}>
                                                  <label className="inline-flex">
                                                    <input
                                                      name="subCategory"
                                                      type="checkbox"
                                                      className="mr-2 "
                                                      checked={
                                                        edit &&
                                                        selectedProduct.subCategory ===
                                                          subCategory
                                                      }
                                                    />
                                                    <span className="text-black">
                                                      {subCategory}
                                                    </span>
                                                  </label>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </li>
                                      ))}
                                    </ul>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">
                              Product SKU
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                type="text"
                                name="productSKU"
                                value={edit ? selectedProduct.productSKU : ""}
                                onChange={handleChange}
                                placeholder="Product SKU"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              MRP
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="flex flex-row h-12">
                                <div className="bg-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] ">
                                  ₹
                                </div>
                                <input
                                  name="productPrice"
                                  onChange={handleChange}
                                  value={
                                    edit ? selectedProduct.productPrice : 0
                                  }
                                  type="number"
                                  placeholder='Product Price'
                                  className="h-full bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200  form-input ltr:rounded-l-none rtl:rounded-r-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block  text-gray-800 col-span-4 sm:col-span-2 font-medium text-sm">
                              Sale Price
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="flex flex-row h-12">
                                <div className="bg-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-[#e0e6ed] ">
                                  ₹
                                </div>
                                <input
                                  name="salePrice"
                                  onChange={handleChange}
                                  type="number"
                                  value={edit ? selectedProduct.salePrice : 0}
                                  placeholder="0"
                                  className="h-full bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200  form-input ltr:rounded-l-none rtl:rounded-r-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Stock
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="flex flex-row">
                                <input
                                  className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white border-gray-400 opacity-50 mr-2 p-2"
                                  type="number"
                                  name="productQuantity"
                                  onChange={handleChange}
                                  value={
                                    edit ? selectedProduct.productQuantity : 1
                                  }
                                  placeholder="Product Quantity"
                                  min="1"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Listings
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="mb-2">
                                <div className="w-full h-60 border border-gray-700 overflow-auto ">
                                  <div className="w-full h-6 bg-slate-50 text-sm font-medium flex items-center p-4">
                                    Select Locations
                                  </div>
                                  <ul className="ml-4">
                                    {
                                        listings.map((list,index)=>(
                                            <li key={index} className="my-2">
                                            <label className="inline-flex">
                                              <input
                                                type="checkbox"
                                                name="productListings"
                                                className="mr-2"
                                                value={list.value}
                                                onChange={(e) =>
                                                  handleListingChange(e)
                                                }
                                              />
                                              <span>{list.name}</span>
                                            </label>
                                          </li>
                                        ))
                                    }
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">
                              Product Slug
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                type="text"
                                name="productSlug"
                                value={
                                  edit
                                    ? selectedProduct.productSlug
                                    : productSlug
                                }
                                placeholder="Product Slug"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Finish
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                type="text"
                                name="productFinish"
                                value={
                                  edit ? selectedProduct.productFinish : ""
                                }
                                onChange={handleChange}
                                placeholder="Product finish"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Dimensions
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                type="text"
                                name="productDimensions"
                                value={
                                  edit ? selectedProduct.productDimensions : ""
                                }
                                onChange={handleChange}
                                placeholder="Dimension"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product meta title
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                type="text"
                                name="metaTitle"
                                value={edit ? selectedProduct.metaTitle : ""}
                                onChange={handleChange}
                                placeholder="Meta title"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Meta Description
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <textarea
                                className="block w-full border bg-gray-100 focus:bg-white rounded-md focus:outline-none p-3 text-sm border-gray-200"
                                name="metaDescription"
                                onChange={handleChange}
                                value={
                                  edit ? selectedProduct?.metaDescription : ""
                                }
                                placeholder="Meta Description"
                                rows="4"
                                spellcheck="false"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="fixed md:w-[80%] z-10 bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 ">
                          <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <button
                              onClick={closePopup}
                              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 "
                              type="button"
                            >
                              Cancel
                            </button>
                          </div>
                          <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                            <button
                              onClick={submitProduct}
                              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                              type="submit"
                            >
                              <span>Add Product</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )}

                {/* {tab === 'basic-info' && (
                                      <BasicInfo/>
                     )} */}
              </div>
            </div>

            {/* <!-- change variant image --> */}
            <div
              className="fixed hidden z-30 rounded-xl w-[90%] sm:w-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center popUp-social bg-white shadow-lg p-8"
              style={{ boxShadow: "2px 5px 20px 3px #4361eeb8" }}
              id="variantImage"
            >
              <div className="flex flex-col justify-center items-center gap-4 mb-4">
                <img
                  src="assets/images/carousel2.jpeg"
                  className="w-[100px] aspect-square rounded-full object-cover"
                  alt="new-product-img"
                />
                <span id="img-name">Image_name.jpg</span>
              </div>

              {/* <!-- add new social media --> */}
              <div className="flex flex-col gap-4">
                <button className="w-full h-12 bg-blue-400 hover:bg-blue-600 text-white font-semibold uppercase rounded-lg transition-all duration-300 ease-in-out">
                  Update
                </button>
                <button
                  onClick={closePopup}
                  type="button"
                  className="w-full h-12 bg-slate-100 border-[0.5px] border-slate-200 hover:bg-slate-200 text-danger font-semibold rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}

export default EditproductForm