import { useEffect, useState } from "react";
import ProductTable from "../../../components/product/ProductTable";
import axiosInstance from "../../../api/axios";
// import './Dashtar.css'
import AsideImg from "../../../components/product/AsideImg";
import { toast } from "react-toastify";
import IconCode from "../../../components/Icon/IconCode";
import Dropdown from "../../../components/Dropdown";
import IconCaretDown from "../../../components/Icon/IconCaretDown";
import CodeHighlight from "../../../components/Highlight";
import BasicInfo from "../../../components/product/BasicInfo";
import { useSelector } from "react-redux";
import EditproductForm from "../../../components/product/EditproductForm";
const Basic = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [products, setproducts] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false)
  const [productId,setProductId] = useState('')
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [edit, setEdit] = useState(false);
  const [tab, setTab] = useState("home");
  const [categories, setcategories] = useState([]);
  const [images, setImages] = useState([]);
  const [productSlug, setProductSlug] = useState("");
  const [productListings, setSelectedListings] = useState([]);
  const [productName, setProductName] = useState(
    selectedProduct?.productName || ""
  );
  const [variant, setVariant] = useState(false);
  const [mainCategory, setMainCategory] = useState("");
  const [taxClass, setTaxClass] = useState(0);

  const handleConfirm = (confirm) => {
    if (confirm === "yes") {
       setDeleteModal(false)
        axiosInstance.delete(`/admin/deleteproduct/${productId}`).then((res) => {
            const updatedProducts = products.filter(product => product._id !== productId);
            setproducts(updatedProducts);
            toast.success(res.data.message)
        }).catch((error) => {
          toast.error(res.data.error)
        });
    }else{
       setDeleteModal(false)
    }
}

  const [inputs, setInputs] = useState({
    productSKU: "",
    productHSNcode: "",
    productPrice: 0,
    salePrice: 0,
    productDescription: "",
    productQuantity: 0,
    productDimensions: "",
    productFinish: "",
    metaTitle: "",
    metaDescription: "",
  });

  const listings = [
    {
      id: 1,
      value: "newarrivals",
      name: "New Arrivals",
    },
    {
      id: 2,
      value: "featured",
      name: "Featured",
    },
    {
      id: 3,
      value: "comboset",
      name: "Combo Set",
    },
    {
      id: 4,
      value: "hottestdeals",
      name: "Hottest Deals",
    },
    {
      id: 5,
      value: "designerpick",
      name: "Designer Pick",
    },
    {
      id: 6,
      value: "bestseller",
      name: "Best Seller",
    },
  ];

  const isRtl =
    useSelector((state) => state.themeConfig.rtlClass) === "rtl" ? true : false;

  const [codeArr, setCodeArr] = useState([]);
  const toggleCode = (name) => {
    if (codeArr.includes(name)) {
      setCodeArr((value) => value.filter((d) => d !== name));
    } else {
      setCodeArr([...codeArr, name]);
    }
  };

  const handleCategoryChange = (mainCategory) => {
    setMainCategory(mainCategory);
  };

  const changeSubCategory = (e) => {
    const name = e.target.name;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategory((prev) => [...prev, name]);
    } else {
      setSelectedCategory((prev) => prev.filter((item) => item !== name));
    }
  };

  const handleEditProduct = (product) => {
    setEdit(true);
    setSelectedProduct(product);
  };

  const handleListingChange = (e) => {
    const name = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedListings((prevListings) => [...prevListings, name]);
    } else {
      setSelectedListings((prevListings) =>
        prevListings.filter((item) => item !== name)
      );
    }
  };

  const removeImg = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleProductNameChange = (e) => {
    const name = e.target.value;
    // const name2 = e.target.defaultValue;

    setProductName(name);
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    setProductSlug(slug);
  };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleTabClick = (newTab) => {
    setTab(newTab);
  };
  const openPopup = () => {
    setPopupVisible(true);
  };
  const closePopup = () => {
    setEdit(false);
    setPopupVisible(false);
  };
  useEffect(() => {
    axiosInstance.get("/admin/listcategories").then((res) => {
      setcategories(res.data.categories);
    });
  }, []);

  function isValidImage(logo) {
    const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    const extension = logo.substr(logo.lastIndexOf(".")).toLowerCase();
    return validExtensions.includes(extension);
  }

  const handleImageChange = (event) => {
    const files = event.target.files;
    const results = [];

    for (let i = 0; i < files.length; i++) {
      console.log(files[i].name);
      if (isValidImage(files[i].name)) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          results.push(reader.result);
          if (results.length === files.length) {
            setImages(results);
          }
        };

        reader.onerror = (error) => {
          console.log(error);
        };

        reader.readAsDataURL(file);
      } else {
        toast.error("Add valid image");
        break;
      }
    }
  };
  const submitProduct = () => {
    if (
      images.length === 0 ||
      productName.length === 0 ||
      productSlug.length === 0 ||
      inputs.productSKU.length === 0 ||
      inputs.productDescription.length === 0 ||
      inputs.metaTitle.length === 0 ||
      productListings.length === 0 ||
      inputs.metaDescription.length === 0
    ) {
      toast.error("Please fill all the field");
    } else if (
      inputs.productPrice <= 0 ||
      inputs.salePrice <= 0 ||
      inputs.productQuantity <= 0 ||
      taxClass <= 0
    ) {
      toast.error("Please enter valid price or quantity");
    } else {
      console.log("herere", selectedCategory, mainCategory);
      axiosInstance
        .post("/admin/addproduct", {
          inputs,
          taxClass,
          images,
          productSlug,
          productName,
          selectedCategory,
          mainCategory,
          productListings,
        })
        .then((res) => {
          toast.success(res.data.message);
          setImages([]);
          closePopup();
        });
    }
  };

  useEffect(() => {
    axiosInstance.get("/admin/listproducts").then((res) => {
      setproducts(res.data.products);
    });
  }, []);

  console.log("products",products)
  return (
    <div>
      <div className="panel mt-6">
        <h2 className="text-black text-3xl font-semibold mb-2">All products</h2>
        <div x-data="all-product">
          <script src="assets/js/simple-datatables.js"></script>
          <div className="panel border-[#e0e6ed] px-0 ">
            <div className="rounded-lg overflow-hidden bg-white min-w-0 shadow-xs">
              <div className="p-4">
                <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex justify-between">
                  <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
                    <div className=" lg:flex md:flex flex-grow-0">
                      <div className="flex">
                        {/* <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
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
                                                </div> */}
                        {/* <div className="lg:flex-1 md:flex-1 mr-3  sm:flex-none">
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
                                                </div> */}
                      </div>
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
                    <button
                      type="submit"
                      className="absolute right-0 top-0 mt-5 mr-1"
                    ></button>
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
                      <option value="status-out-of-stock">
                        {" "}
                        Status - Out of Stock
                      </option>
                      <option value="date-added-asc">Date Added (Asc)</option>
                      <option value="date-added-desc">Date Added (Desc)</option>
                      <option value="date-updated-asc">
                        Date Updated (Asc)
                      </option>
                      <option value="date-updated-desc">
                        Date Updated (Desc)
                      </option>
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
              <ProductTable
                setProductId={setProductId}
                setDeleteModal={setDeleteModal}
                productList={products}
                handleEditProduct={handleEditProduct}
              />
            </div>

            {/* <!-- change variant image --> */}
            {
              deleteModal && (
                <div className="fixed  inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-md shadow-md">
                  <p className="mb-4">Are you sure you want to delete this product?</p>
                  <button
                    onClick={() => handleConfirm("yes")}
                    className=" bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleConfirm("no")}
                    className="bg-black text-white px-4 py-2 rounded-md"
                  >
                    No
                  </button>
                </div>
              </div>
              )
            }

          </div>
        </div>
      </div>

      {edit && (
        <EditproductForm
          isValidImage={isValidImage}
          listings={listings}
          selectedProduct={selectedProduct}
          handleTabClick={handleTabClick}
          tab={tab}
          categories={categories}
          edit={edit}
          closePopup={closePopup}
        />
      )}

      {/* modal add product */}
      {popupVisible && (
        <div
          className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-white "
          id="addProduct"
        >
          <div className="panel">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex flex-col text-xl font-semibold text-black gap-2">
                Add Product
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
                  onChange={(e) => setVariant(e.target.checked)}
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
                                onChange={handleProductNameChange}
                                placeholder="Product Title/Name"
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
                                onChange={handleChange}
                                placeholder="Product Description"
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
                                  {images?.length > 0 ? (
                                    images?.map((image, index) => (
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
                                              type="radio"
                                              name="category"
                                              className="mr-2"
                                              onChange={() =>
                                                handleCategoryChange(
                                                  category._id
                                                )
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
                                                      name={subCategory}
                                                      type="checkbox"
                                                      className="mr-2"
                                                      onChange={(e) =>
                                                        changeSubCategory(e)
                                                      }
                                                    />
                                                    <span>{subCategory}</span>
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
                                  type="number"
                                  placeholder="0"
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
                                  placeholder="Product Quantity"
                                  min="1"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">
                              Product HSN
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                type="text"
                                name="productHSNcode"
                                onChange={handleChange}
                                placeholder="Product HSN"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                            <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">
                              Product Tax
                            </label>
                            <div className="col-span-8 sm:col-span-4">
                              <div className="mb-2">
                                <div className="w-full h-50 border border-gray-700 overflow-auto ">
                                  <div className="w-full h-6 bg-slate-50 text-sm font-medium flex items-center p-4">
                                    All Product taxes
                                  </div>
                                  <form>
                                    <ul className="ml-4">
                                      {[5, 12, 18].map((tax, i) => (
                                        <li className="my-2" key={i}>
                                          <label className="inline-flex">
                                            <input
                                              type="radio"
                                              name="category"
                                              className="mr-2"
                                              onChange={() => setTaxClass(tax)}
                                            />
                                            <span>{tax}%</span>
                                          </label>
                                        </li>
                                      ))}
                                    </ul>
                                  </form>
                                </div>
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
                                    {listings.map((list, index) => (
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
                                    ))}
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
                                value={productSlug}
                                placeholder="Product Slug"
                                onChange={(e) => setProductSlug(e.target.value)}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Basic;
