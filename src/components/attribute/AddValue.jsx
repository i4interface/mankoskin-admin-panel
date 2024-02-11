import React from 'react';

function AddValue() {
    return (
        <>
        {/* <div className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-white " id="addProduct">
        <div className="panel">
        <div tabIndex={-1} className="drawer drawer-right drawer-open">
            <div className="drawer-mask" />
            <div className="drawer-content-wrapper" style={{ width: '50%' }}>
                <div className="drawer-content">
                    <button className="absolute focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                    </button>
                    <div className="flex flex-col w-full h-full justify-between">
                        <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            <div className="flex md:flex-row flex-col justify-between mr-20">
                                <div>
                                    <h4 className="text-xl font-medium dark:text-gray-300">Add/Update Attribute Values</h4>
                                    <p className="mb-0 text-sm dark:text-gray-300">Add your attribute values and necessary information from here</p>
                                </div>
                                <select
                                    name="language"
                                    className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700"
                                >
                                    <option value="en" hidden>
                                        en
                                    </option>
                                    <option value="fr">fr </option>
                                    <option value="aa">aa </option>
                                    <option value="vi">vi </option>
                                    <option value="hi">hi </option>
                                    <option value="tr">tr </option>
                                    <option value="ne">ne </option>
                                    <option value="bn">bn </option>
                                    <option value="es">es </option>
                                    <option value="de">de </option>
                                    <option value="en">en </option>
                                </select>
                            </div>
                        </div>
                        <div
                            className="w-full md:w-7/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200"
                            style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}
                        >
                            <div style={{ position: 'absolute', inset: 0, overflow: 'scroll', marginRight: '-17px', marginBottom: '-17px' }}>
                               <form><div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full pb-40"><div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center"><label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Display Name</label><div className="col-span-8 sm:col-span-4"><input className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2" type="text" name="name" placeholder="Color or Size or Dimension or Material or Fabric" defaultValue /></div></div><div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center"><label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">Published</label><div className="col-span-8 sm:col-span-4"><div className="mb-3"><div className="flex flex-wrap items-center"><label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" /><div className="react-switch md:ml-0 ml-3" style={{position: 'relative', display: 'inline-block', textAlign: 'left', opacity: 1, direction: 'ltr', borderRadius: 15, transition: 'opacity 0.25s ease 0s', touchAction: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', userSelect: 'none'}}><div className="react-switch-bg" style={{height: 30, width: 80, margin: 0, position: 'relative', background: 'rgb(229, 62, 62)', borderRadius: 15, cursor: 'pointer', transition: 'background 0.25s ease 0s'}}><div style={{height: 30, width: 45, position: 'relative', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s'}}><div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 14, color: 'white', paddingLeft: 8, paddingTop: 1}}>Yes</div></div><div style={{height: 30, width: 45, position: 'absolute', opacity: 1, right: 0, top: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s'}}><div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', fontSize: 14, color: 'white', paddingRight: 5, paddingTop: 1}}>No</div></div></div><div className="react-switch-handle" style={{height: 28, width: 28, background: 'rgb(255, 255, 255)', display: 'inline-block', cursor: 'pointer', borderRadius: '50%', position: 'absolute', transform: 'translateX(1px)', top: 1, outline: 0, border: 0, transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s'}} /><input type="checkbox" role="switch" aria-checked="false" id style={{border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: 1, margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: 1}} /></div></div></div></div></div></div><div className="fixed z-10 bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300" style={{}}><div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow"><button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none rounded-lg border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center cursor-pointer h-12 h-12 bg-white w-full text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700" type="button">Cancel</button></div><div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow"><button className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12" type="submit"><span>Add Attribute</span></button></div></div></form>

                            </div>
                            <div style={{ position: 'absolute', height: 6, right: 2, bottom: 2, left: 2, borderRadius: 3 }}>
                                <div
                                    style={{
                                        position: 'relative',
                                        display: 'block',
                                        height: '100%',
                                        cursor: 'pointer',
                                        borderRadius: 'inherit',
                                        backgroundColor: 'rgba(0, 0, 0, 0.2)',
                                        width: 0,
                                        transform: 'translateX(0px)',
                                    }}
                                />
                            </div>
                            <div style={{ position: 'absolute', width: 6, right: 2, bottom: 2, top: 2, borderRadius: 3 }}>
                                <div style={{ position: 'relative', display: 'block', width: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 0 }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer-handle">
                    <i className="drawer-handle-icon" />
                </div>
            </div>
        </div>
        </div>
        </div> */}

<div className="popup showPopUp w-full absolute right-0 top-[8%] md:w-[80%] min-h-screen bg-gray " id="addProduct">
<div className="panel">
    <div className="mb-5 flex items-center justify-between">
        <div className="flex flex-col text-xl font-semibold text-black gap-2">
            Add Attribute
            <span className="text-sm ">Add your attribute and necessary information from here</span>
        </div>

        <button className="closeBtn w-[49px] flex justify-center items-center aspect-square rounded-full shadow-lg " >
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
                                        
                                        className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none  leading-5 rounded-md bg-gray-100 focus:bg-white focus:border-gray-200 border-gray-200 "
                                        type="text"
                                        name="title"
                                        placeholder="Attribute Title/Name"
                                    />
                                </div>
                            </div>

                            {/* <Select placeholder="Select an option" options={options5} isMulti isSearchable={false} /> */}

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
                                    
                                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                                >
                                    <span>Add Attribute</span>
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
</>
    );
}

export default AddValue;
