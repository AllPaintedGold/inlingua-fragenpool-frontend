

import { Fragment, useState } from 'react';
import { Menu } from '@headlessui/react';


export default function DopDownMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="min-h-screen bg-indigo-100 flex justify-end p-4">
            <div className="relative">
                {/* Menu Button */ }
                <button 
                    className="inline-flex justify-center w-full rounded-md border border-gray-300
                    shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100
                    focus:ring-indigo-500"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Options Menu
                    <ChevronDownIcon className="-mr1 ml2 h-5 w-5" aria-hidden="true" />
                </button>
                {/* Menu items */}
                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg
                    bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100
                    focus:outline-none">
                        <div className="py-1">
                            <a href="/" className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
                                <PencilAltIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-white" aria-hidden="true" />

                            </a>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}