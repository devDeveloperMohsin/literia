import React, { useEffect, useState } from "react";
import {
  HiArrowRightOnRectangle,
  HiBookOpen,
  HiChartPie,
  HiEnvelope,
  HiUsers,
  HiXMark,
} from "react-icons/hi2";
import { FcKindle } from "react-icons/fc";
import { MdArticle, MdCategory } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

function AdminSidebar() {
  const [navOpened, setNavOpened] = useState(true);

  const toggleNavOpened = () => {
    setNavOpened(() => {
      return !navOpened;
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleNavOpened}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Toggle sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          navOpened ? "-translate-x-full" : ""
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
          <Link href="/admin" class="flex items-center pl-2.5 mb-5">
            <Image
              src="/images/logo.svg"
              className="h-6 mr-3 sm:h-7"
              width={25}
              height={50}
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              PAWC
            </span>
          </Link>
          <ul className="space-y-2">
            {/* Navbar Toggle Button */}
            <li className="sm:hidden">
              <button
                type="button"
                onClick={toggleNavOpened}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <HiXMark className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="ml-3">Hide Sidebar</span>
              </button>
            </li>
            {/* End Navbar Toggle Button */}

            <li>
              <Link
                href="/admin"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <HiChartPie className="w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <HiUsers className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/categories"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <MdCategory className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Categories
                </span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <HiBookOpen className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">Books</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <FcKindle className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Digital Assets
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <MdArticle className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">Blogs</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-200 "
              >
                <RiCustomerService2Fill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Customer Support
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200 "
              >
                <HiEnvelope className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Newsletter Subscriptions
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                <HiArrowRightOnRectangle className="flex-shrink-0 w-6 h-6 transition duration-75  group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className="sm:ml-64"></div>
    </>
  );
}

export default AdminSidebar;
