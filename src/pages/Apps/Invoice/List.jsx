import { useEffect, useState } from 'react';
import ProductTable from '../../../components/product/ProductTable';
import axiosInstance from '../../../api/axios';
// import './Dashtar.css'
import AsideImg from '../../../components/product/AsideImg';
import { toast } from 'react-toastify';
import IconCode from '../../../components/Icon/IconCode';
import Dropdown from '../../../components/Dropdown';
import IconCaretDown from '../../../components/Icon/IconCaretDown';
import CodeHighlight from '../../../components/Highlight';
import { useSelector } from 'react-redux';
const Basic = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [products, setproducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [tab, setTab] = useState('home');
    const [categories, setcategories] = useState([]);
    // const [productListings, setSelectedListings] = useState([]);

    const [images, setImages] = useState([]);
    const [productSlug, setProductSlug] = useState('');
    const [productListings, setSelectedListings] = useState([]);

    const [productName, setProductName] = useState('');
    const [variant, setVariant] = useState(false);
    const [mainCategory, setMainCategory] = useState('');
    const [inputs, setInputs] = useState({
        productSKU: '',
        productPrice: 0,
        salePrice: 0,
        productDescription: '',
        productQuantity: 0,
        productDimensions: '',
        productFinish: '',
        metaTitle: '',
        metaDescription: ''
    });

    const isRtl = useSelector((state) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [codeArr, setCodeArr] = useState([]);

    const toggleCode = (name) => {
        if (codeArr.includes(name)) {
            setCodeArr((value) => value.filter((d) => d !== name));
        } else {
            setCodeArr([...codeArr, name]);
        }
    };

    console.log('selectedcategory', selectedCategory);

    const handleCategoryChange = (categoryName, mainCategory) => {
        setSelectedCategory(categoryName);
        setMainCategory(mainCategory);
    };

    const handleListingChange = (e) => {
        const name = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedListings((prevListings) => [...prevListings, name]);
        } else {
            setSelectedListings((prevListings) => prevListings.filter((item) => item !== name));
        }
    };

    const removeImg = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
    };

    const handleProductNameChange = (e) => {
        const name = e.target.value;
        setProductName(name);
        const slug = name.toLowerCase().replace(/\s+/g, '-');
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
        setPopupVisible(false);
    };
    useEffect(() => {
        axiosInstance.get('/admin/listcategories').then((res) => {
            setcategories(res.data.categories);
        });
    }, []);
    function isValidImage(logo) {
        const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
        const extension = logo.substr(logo.lastIndexOf('.')).toLowerCase();
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
                toast.error('Add valid image');
                break;
            }
        }
    };
    const submitProduct = () => {
        //         console.log('images', images);
        // console.log('productName', productName);
        // console.log('productSlug', productSlug);
        // console.log('inputs.productSKU', inputs.productSKU);
        // console.log('inputs.productDescription', inputs.productDescription);
        // console.log('inputs.metaTitle', inputs.metaTitle);
        console.log('productListings', productListings);
        // console.log('inputs.metaDescription', inputs.metaDescription);

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
            toast.error('Please fill all the field');
        } else if (inputs.productPrice <= 0 || inputs.salePrice <= 0 || inputs.productQuantity <= 0) {
            toast.error('Please enter valid price or quantit');
        } else {

            // console.log('herere', inputs, images, productSlug, productName, productListings);
            // axiosInstance.post('/admin/addproduct', { inputs, images, productSlug, productName, selectedCategory, mainCategory, productListings }).then((res) => {
            //     toast.success(res.data.message);
            //     closePopup();
            // });


            console.log('herere', inputs, images, productSlug, productName, productListings);
            axiosInstance
                .post('/admin/addproduct', { inputs, images, productSlug, productName, selectedCategory, mainCategory, productListings })
                .then((res) => {
                    if (res.data.success) {
                        toast.success(res.data.message);
                        closePopup();
                    } else {
                        toast.error('Failed to add product. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('Error adding product:', error);
                    toast.error('An error occurred while adding the product.');
                });
        }
    };

    useEffect(() => {
        axiosInstance.get('/admin/listproducts').then((res) => {
            setproducts(res.data.products);
        });
    }, []);
    console.log(products);
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

            {/* modal add product */}
            {popupVisible && (
                <div className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-white " id="addProduct">
                    <div className="panel">
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex flex-col text-xl font-semibold text-black gap-2">
                                Add Product
                                <span className="text-sm ">Add your product and necessary information from here</span>
                            </div>

                            <button className="closeBtn w-[49px] flex justify-center items-center aspect-square rounded-full shadow-lg " onClick={closePopup}>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2L17 17" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M2 17L17 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full flex justify-end items-center gap-4">
                            Does this product have variant ?
                            <div className="flipswitch">
                                <input onChange={(e) => setVariant(e.target.checked)} id="fs" className="flipswitch-cb w-7 h-7" name="flipswitch" type="checkbox" />
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
                                            onClick={() => handleTabClick('home')}
                                            style={tab === 'home' ? { border: '1px solid white', borderBottom: '1px solid white' } : {}}
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
                                {tab === 'home' && (
                                    <div>
                                        <div className="active">
                                            <div className="block relative" id="block">
                                                <div className="px-6 pt-8 flex-grow w-full h-full max-h-full pb-40 md:pb-32 lg:pb-32 xl:pb-32">
                                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">Product Title/Name</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product Description</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product Images</label>
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
                                                                            <line x1="12" y1="12" x2="12" y2="21"></line>
                                                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                                                            <polyline points="16 16 12 12 8 16"></polyline>
                                                                        </svg>
                                                                    </span>
                                                                    <p className="text-sm mt-2">Drag your images here</p>
                                                                    <em className="text-xs text-gray-400">(Only *.jpeg, *.webp and *.png images will be accepted)</em>
                                                                </div>
                                                                <div className="text-emerald-500">Uploading ..</div>

                                                                <aside className="flex flex-row flex-wrap mt-4">
                                                                    {images.length === 0 ? (
                                                                        <AsideImg />
                                                                    ) : (
                                                                        images.map((image, index) => (
                                                                            <div draggable="true" className="flex gap-4" data-handler-id="T0">
                                                                                <div className="relative mr-4 " key={index}>
                                                                                    <img className="inline-flex border rounded-md border-gray-100 w-24 max-h-24 p-2 m-2" src={image} alt="product" />
                                                                                    <p className="text-xs absolute py-1 w-full bottom-0 inset-x-0 bg-blue-500 rounded-full text-white text-center ">
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
                                                                                            <circle cx="12" cy="12" r="10"></circle>
                                                                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                                                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                                                                        </svg>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        ))
                                                                    )}
                                                                </aside>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Category</label>
                                                        <div className="col-span-8 sm:col-span-4">
                                                            <div className="mb-2">
                                                                <div className="w-full h-60 border border-gray-700 overflow-auto ">
                                                                    <div className="w-full h-6 bg-slate-50 text-sm font-medium flex items-center p-4">All Product categories</div>
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
                                                                                            onChange={() => handleCategoryChange(category.categoryName, category._id)}
                                                                                        />
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
                                                                                                        onChange={() => handleCategoryChange(subCategory.categoryName, category._id)}
                                                                                                    />
                                                                                                    <span>{subCategory}</span>
                                                                                                </label>
                                                                                            </li>
                                                                                        ))}
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">Product SKU</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">MRP</label>
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
                                                        <label className="block  text-gray-800 col-span-4 sm:col-span-2 font-medium text-sm">Sale Price</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product Stock</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product Listings</label>
                                                        <div className="col-span-8 sm:col-span-4">
                                                            <div className="mb-2">
                                                                <div className="w-full h-60 border border-gray-700 overflow-auto ">
                                                                    <div className="w-full h-6 bg-slate-50 text-sm font-medium flex items-center p-4">Select Locations</div>
                                                                    <ul className="ml-4">
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="productListings"
                                                                                    className="mr-2"
                                                                                    value={'newarrivals'}
                                                                                    onChange={(e) => handleListingChange(e)}
                                                                                />
                                                                                <span>New Arrivals</span>
                                                                            </label>
                                                                        </li>
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="productListings"
                                                                                    className="mr-2"
                                                                                    value={'hottestdeals'}
                                                                                    onChange={(e) => handleListingChange(e)}
                                                                                />
                                                                                <span>Hottest Deals</span>
                                                                            </label>
                                                                        </li>
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="productListings"
                                                                                    className="mr-2"
                                                                                    value={'designerpick'}
                                                                                    onChange={(e) => handleListingChange(e)}
                                                                                />
                                                                                <span>Designer's Pick</span>
                                                                            </label>
                                                                        </li>
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="productListings"
                                                                                    className="mr-2"
                                                                                    value={'bestseller'}
                                                                                    onChange={(e) => handleListingChange(e)}
                                                                                />
                                                                                <span>Best Seller</span>
                                                                            </label>
                                                                        </li>
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="productListings"
                                                                                    className="mr-2"
                                                                                    value={'featured'}
                                                                                    onChange={(e) => handleListingChange(e)}
                                                                                />
                                                                                <span>Featured</span>
                                                                            </label>
                                                                        </li>
                                                                        <li className="my-2">
                                                                            <label className="inline-flex">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    name="productListings"
                                                                                    className="mr-2"
                                                                                    value={'comboset'}
                                                                                    onChange={(e) => handleListingChange(e)}
                                                                                />
                                                                                <span>Combo Set</span>
                                                                            </label>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium ">Product Slug</label>
                                                        <div className="col-span-8 sm:col-span-4">
                                                            <input
                                                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 mr-2 p-2"
                                                                type="text"
                                                                name="productSlug"
                                                                value={productSlug}
                                                                placeholder="Product Slug"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product Finish</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product Dimensions</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Product meta title</label>
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
                                                        <label className="block text-sm text-gray-800 col-span-4 sm:col-span-2 font-medium">Meta Description</label>
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
                                )} */}
                            </div>
                        </div>

                        {/* <!-- change variant image --> */}
                        <div
                            className="fixed hidden z-30 rounded-xl w-[90%] sm:w-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center popUp-social bg-white shadow-lg p-8"
                            style={{ boxShadow: '2px 5px 20px 3px #4361eeb8' }}
                            id="variantImage"
                        >
                            <div className="flex flex-col justify-center items-center gap-4 mb-4">
                                <img src="assets/images/carousel2.jpeg" className="w-[100px] aspect-square rounded-full object-cover" alt="new-product-img" />
                                <span id="img-name">Image_name.jpg</span>
                            </div>

                            {/* <!-- add new social media --> */}
                            <div className="flex flex-col gap-4">
                                <button className="w-full h-12 bg-blue-400 hover:bg-blue-600 text-white font-semibold uppercase rounded-lg transition-all duration-300 ease-in-out">Update</button>
                                <button onClick={closePopup} type="button" className="w-full h-12 bg-slate-100 border-[0.5px] border-slate-200 hover:bg-slate-200 text-danger font-semibold rounded-lg">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Basic;
