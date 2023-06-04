import { ArchiveBoxIcon, ChartPieIcon, Squares2X2Icon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sideBarMenu = [
  {
    key: "dashboard",
    title: "Табло",
    icon: (
      <ChartPieIcon className="w-6 h-6 text-green-500" />
    ),
    url: "/",
  },
  {
    key: "apiaries",
    title: "Пчелини",
    icon: (
      <Squares2X2Icon className="w-6 h-6 text-sky-500" />
    ),
    url: "/apiaries",
    submenu: [
      { key: "all-apiaries", url: "/apiaries", title: "Всички пчелини" },
      { key: "add-apiary", url: "/apiaries/add", title: "Добави пчелин" },
    ],
  },
  {
    key: "beehives",
    title: "Кошери",
    icon: (
      <ArchiveBoxIcon className="w-6 h-6 text-amber-500" />
    ),
    url: "/beehives",
    submenu: [
      { key: "all-beehives", url: "/beehives", title: "Всички кошери" },
      { key: "add-beehive", url: "/beehives/add", title: "Добави кошер" },
    ],
  },
];

export default function Sidebar({ mobileMenuOpen, toggleMobileMenu }) {
  let [isDropDownHidden, setIsDropDownHidden] = useState(true);

  function toggleDropDown(event) {
    if(event.currentTarget.nextSibling.classList.contains('hidden')) {
      event.currentTarget.nextSibling.classList.remove(('hidden'))
      return
    }
    event.currentTarget.nextSibling.classList.add(('hidden'))
  }

  useEffect(() => {
    function handleClickOutsideSidebar () {
      console.log(mobileMenuOpen)
      if(mobileMenuOpen) {
        toggleMobileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutsideSidebar);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideSidebar);
    };
  }, []);

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 ${mobileMenuOpen ? '' : 'hidden'} w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width`}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:border-gray-700">
        <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:divide-gray-700">
            <ul className="pb-2 space-y-2">
              <li>
                <form action="#" method="GET" className="lg:hidden">
                  <label htmlFor="mobile-search" className="sr-only">
                    Търсене
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="mobile-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-200 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Търсене"
                    />
                  </div>
                </form>
              </li>
              {sideBarMenu.map((item) => {
                if (!item.submenu) {
                  return (
                    <li key={item.key}>
                      <Link
                        to={item.url}
                        className="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
                      >
                        {item.icon}
                        <span className="ml-3" sidebar-toggle-item="">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      aria-controls="dropdown-layouts"
                      data-collapse-toggle="dropdown-layouts"
                      onClick={toggleDropDown}
                    >
                      {item.icon}
                      <span
                        className="flex-1 ml-3 text-left whitespace-nowrap"
                        sidebar-toggle-item=""
                      >
                        {item.title}
                      </span>
                      <svg
                        sidebar-toggle-item=""
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                    <ul id="dropdown-layouts" className={`py-2 space-y-2 ${isDropDownHidden ? 'hidden' : ''}`}>
                      {item.submenu.map((subitem) => {
                        return (
                          <li key={subitem.key}>
                            <Link
                              to={subitem.url}
                              className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                              {subitem.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
