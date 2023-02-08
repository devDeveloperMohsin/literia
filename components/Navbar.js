import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import Modal from "./Modal";

function Navbar() {
  const router = useRouter();
  const userToken = useSelector((state) => state.auth.token);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <>
      <header className="text-gray-600 body-font bg-white border-b sticky top-0 z-50">
        <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center max-w-[1200px] mx-auto">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">PAWC</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link href="/blogs" className="mr-5 hover:text-gray-900">
              Blogs
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Digital Assets
            </Link>
            <Link href="/" className="mr-5 hover:text-gray-900">
              Books
            </Link>
            <button
              onClick={() => setContactModalOpen(true)}
              className="mr-5 hover:text-gray-900"
            >
              Contact Us
            </button>
            <Link href="/account" className="mr-5 hover:text-gray-900">
              Profile
            </Link>
          </nav>

          {userToken && userToken ? (
            <button className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0">
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          )}
        </div>
      </header>

      {/* Contact Us Modal */}
      <Modal open={contactModalOpen} setOpen={setContactModalOpen}>
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              Icon
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed. This action cannot be
                  undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setContactModalOpen(false)}
          >
            Deactivate
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            onClick={() => setContactModalOpen(false)}
            // ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </Modal>
      {/* End Contact Us Modal */}
    </>
  );
}

export default Navbar;
