import React from 'react';

function ValuesTable() {
    return (
        <table className="w-full whitespace-nowrap">
            <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                <tr>
                    <td className="px-4 py-2">
                        <input id="selectAll" name="selectAll" type="checkbox" />
                    </td>
                    <td className="px-4 py-2">Id</td>
                    <td className="px-4 py-2">Name</td>
                    <td className="px-4 py-2">Type</td>
                    <td className="px-4 py-2 text-center">Status</td>
                    <td className="px-4 py-2 text-right">Actions</td>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                <tr className>
                    <td className="px-4 py-2">
                        <input id="63f078f54b86ed26b05281b3" name="child-attribute" type="checkbox" />
                    </td>
                    <td className="px-4 py-2 font-semibold uppercase text-xs">81b3</td>
                    <td className="px-4 py-2 font-medium text-sm">Red</td>
                    <td className="px-4 py-2 font-medium text-sm">Dropdown</td>
                    <td className="px-4 py-2 text-center">
                        <div
                            className="react-switch md:ml-0"
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                textAlign: 'left',
                                opacity: 1,
                                direction: 'ltr',
                                borderRadius: '7.5px',
                                transition: 'opacity 0.25s ease 0s',
                                touchAction: 'none',
                                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                userSelect: 'none',
                            }}
                        >
                            <div
                                className="react-switch-bg"
                                style={{
                                    height: 15,
                                    width: 30,
                                    margin: 0,
                                    position: 'relative',
                                    background: 'rgb(229, 62, 62)',
                                    borderRadius: '7.5px',
                                    cursor: 'pointer',
                                    transition: 'background 0.25s ease 0s',
                                }}
                            >
                                <div style={{ height: 15, width: 17, position: 'relative', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 73,
                                            height: '100%',
                                            fontSize: 14,
                                            color: 'white',
                                            paddingLeft: 20,
                                            paddingTop: 1,
                                        }}
                                    />
                                </div>
                                <div style={{ height: 15, width: 17, position: 'absolute', opacity: 1, right: 0, top: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: 120, fontSize: 14, color: 'white', paddingRight: 22, paddingTop: 1 }} />
                                </div>
                            </div>
                            <div
                                className="react-switch-handle"
                                style={{
                                    height: 13,
                                    width: 13,
                                    background: 'rgb(255, 255, 255)',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    transform: 'translateX(1px)',
                                    top: 1,
                                    outline: 0,
                                    border: 0,
                                    transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s',
                                }}
                            />
                            <input
                                type="checkbox"
                                role="switch"
                                aria-checked="false"
                                style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: 1, margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: 1 }}
                            />
                        </div>
                    </td>
                    <td className="px-4 py-2">
                        <div className="flex justify-end text-right">
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                                <p data-tip="true" data-for="edit" className="text-xl">
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
                                </p>
                            </button>
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                                <p data-tip="true" data-for="delete" className="text-xl">
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
                                </p>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className>
                    <td className="px-4 py-2">
                        <input id="63f078f54b86ed26b05281b4" name="child-attribute" type="checkbox" />
                    </td>
                    <td className="px-4 py-2 font-semibold uppercase text-xs">81b4</td>
                    <td className="px-4 py-2 font-medium text-sm">Green</td>
                    <td className="px-4 py-2 font-medium text-sm">Dropdown</td>
                    <td className="px-4 py-2 text-center">
                        <div
                            className="react-switch md:ml-0"
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                textAlign: 'left',
                                opacity: 1,
                                direction: 'ltr',
                                borderRadius: '7.5px',
                                transition: 'opacity 0.25s ease 0s',
                                touchAction: 'none',
                                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                userSelect: 'none',
                            }}
                        >
                            <div
                                className="react-switch-bg"
                                style={{
                                    height: 15,
                                    width: 30,
                                    margin: 0,
                                    position: 'relative',
                                    background: 'rgb(47, 133, 90)',
                                    borderRadius: '7.5px',
                                    cursor: 'pointer',
                                    transition: 'background 0.25s ease 0s',
                                }}
                            >
                                <div style={{ height: 15, width: 17, position: 'relative', opacity: 1, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 73,
                                            height: '100%',
                                            fontSize: 14,
                                            color: 'white',
                                            paddingLeft: 20,
                                            paddingTop: 1,
                                        }}
                                    />
                                </div>
                                <div style={{ height: 15, width: 17, position: 'absolute', opacity: 0, right: 0, top: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: 120, fontSize: 14, color: 'white', paddingRight: 22, paddingTop: 1 }} />
                                </div>
                            </div>
                            <div
                                className="react-switch-handle"
                                style={{
                                    height: 13,
                                    width: 13,
                                    background: 'rgb(255, 255, 255)',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    transform: 'translateX(16px)',
                                    top: 1,
                                    outline: 0,
                                    border: 0,
                                    transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s',
                                }}
                            />
                            <input
                                type="checkbox"
                                role="switch"
                                aria-checked="true"
                                defaultChecked
                                style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: 1, margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: 1 }}
                            />
                        </div>
                    </td>
                    <td className="px-4 py-2">
                        <div className="flex justify-end text-right">
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                                <p data-tip="true" data-for="edit" className="text-xl">
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
                                </p>
                            </button>
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                                <p data-tip="true" data-for="delete" className="text-xl">
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
                                </p>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className>
                    <td className="px-4 py-2">
                        <input id="63f078f54b86ed26b05281b5" name="child-attribute" type="checkbox" />
                    </td>
                    <td className="px-4 py-2 font-semibold uppercase text-xs">81b5</td>
                    <td className="px-4 py-2 font-medium text-sm">Blue</td>
                    <td className="px-4 py-2 font-medium text-sm">Dropdown</td>
                    <td className="px-4 py-2 text-center">
                        <div
                            className="react-switch md:ml-0"
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                textAlign: 'left',
                                opacity: 1,
                                direction: 'ltr',
                                borderRadius: '7.5px',
                                transition: 'opacity 0.25s ease 0s',
                                touchAction: 'none',
                                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                userSelect: 'none',
                            }}
                        >
                            <div
                                className="react-switch-bg"
                                style={{
                                    height: 15,
                                    width: 30,
                                    margin: 0,
                                    position: 'relative',
                                    background: 'rgb(47, 133, 90)',
                                    borderRadius: '7.5px',
                                    cursor: 'pointer',
                                    transition: 'background 0.25s ease 0s',
                                }}
                            >
                                <div style={{ height: 15, width: 17, position: 'relative', opacity: 1, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 73,
                                            height: '100%',
                                            fontSize: 14,
                                            color: 'white',
                                            paddingLeft: 20,
                                            paddingTop: 1,
                                        }}
                                    />
                                </div>
                                <div style={{ height: 15, width: 17, position: 'absolute', opacity: 0, right: 0, top: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: 120, fontSize: 14, color: 'white', paddingRight: 22, paddingTop: 1 }} />
                                </div>
                            </div>
                            <div
                                className="react-switch-handle"
                                style={{
                                    height: 13,
                                    width: 13,
                                    background: 'rgb(255, 255, 255)',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    transform: 'translateX(16px)',
                                    top: 1,
                                    outline: 0,
                                    border: 0,
                                    transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s',
                                }}
                            />
                            <input
                                type="checkbox"
                                role="switch"
                                aria-checked="true"
                                defaultChecked
                                style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: 1, margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: 1 }}
                            />
                        </div>
                    </td>
                    <td className="px-4 py-2">
                        <div className="flex justify-end text-right">
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                                <p data-tip="true" data-for="edit" className="text-xl">
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
                                </p>
                            </button>
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                                <p data-tip="true" data-for="delete" className="text-xl">
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
                                </p>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr className>
                    <td className="px-4 py-2">
                        <input id="65c0798d40282000083affbb" name="child-attribute" type="checkbox" />
                    </td>
                    <td className="px-4 py-2 font-semibold uppercase text-xs">ffbb</td>
                    <td className="px-4 py-2 font-medium text-sm">purple</td>
                    <td className="px-4 py-2 font-medium text-sm">Dropdown</td>
                    <td className="px-4 py-2 text-center">
                        <div
                            className="react-switch md:ml-0"
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                textAlign: 'left',
                                opacity: 1,
                                direction: 'ltr',
                                borderRadius: '7.5px',
                                transition: 'opacity 0.25s ease 0s',
                                touchAction: 'none',
                                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                                userSelect: 'none',
                            }}
                        >
                            <div
                                className="react-switch-bg"
                                style={{
                                    height: 15,
                                    width: 30,
                                    margin: 0,
                                    position: 'relative',
                                    background: 'rgb(229, 62, 62)',
                                    borderRadius: '7.5px',
                                    cursor: 'pointer',
                                    transition: 'background 0.25s ease 0s',
                                }}
                            >
                                <div style={{ height: 15, width: 17, position: 'relative', opacity: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: 73,
                                            height: '100%',
                                            fontSize: 14,
                                            color: 'white',
                                            paddingLeft: 20,
                                            paddingTop: 1,
                                        }}
                                    />
                                </div>
                                <div style={{ height: 15, width: 17, position: 'absolute', opacity: 1, right: 0, top: 0, pointerEvents: 'none', transition: 'opacity 0.25s ease 0s' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', height: '100%', width: 120, fontSize: 14, color: 'white', paddingRight: 22, paddingTop: 1 }} />
                                </div>
                            </div>
                            <div
                                className="react-switch-handle"
                                style={{
                                    height: 13,
                                    width: 13,
                                    background: 'rgb(255, 255, 255)',
                                    display: 'inline-block',
                                    cursor: 'pointer',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    transform: 'translateX(1px)',
                                    top: 1,
                                    outline: 0,
                                    border: 0,
                                    transition: 'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s',
                                }}
                            />
                            <input
                                type="checkbox"
                                role="switch"
                                aria-checked="false"
                                style={{ border: 0, clip: 'rect(0px, 0px, 0px, 0px)', height: 1, margin: '-1px', overflow: 'hidden', padding: 0, position: 'absolute', width: 1 }}
                            />
                        </div>
                    </td>
                    <td className="px-4 py-2">
                        <div className="flex justify-end text-right">
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                                <p data-tip="true" data-for="edit" className="text-xl">
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
                                </p>
                            </button>
                            <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                                <p data-tip="true" data-for="delete" className="text-xl">
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
                                </p>
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ValuesTable;
