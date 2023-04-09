import {Bars3Icon} from "@heroicons/react/24/outline/index.js";
import {Popover} from "@headlessui/react";
import {Link} from "react-router-dom";

export default function DesktopHeader ({handleMobileMenuOpen}) {
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <a href="#" className="-m-1.5 p-1.5 text-amber-500 font-bold text-lg">
                    BeesTracker
                </a>
            </div>
            <div className="flex lg:hidden">
                <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => handleMobileMenuOpen(true)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500">
                    Home
                </Link>
                <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500">
                    About Us
                </Link>
                <Link to="/contacts" className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500">
                    Contacts
                </Link>
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="/register" className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500 px-3">
                    Register
                </Link>
                <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-amber-500 px-3">
                    Log in <span aria-hidden="true">&rarr;</span>
                </Link>
            </div>
        </nav>
    )
}