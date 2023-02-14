import React, { useEffect, useState } from "react";
import axios from "../../helpers/axios";
import PageTitle from "../../components/PageTitle";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/slices/authSlice";
import { HiHeart, HiUser } from "react-icons/hi2";
import { FaBookReader } from "react-icons/fa";
import Link from "next/link";

function Settings() {
  const [authUser, setAuthUser] = useState();
  const authToken = useSelector(selectAuthToken);

  const breadCrumbs = {
    Profile: "",
  };

  const fetchUser = async () => {
    try {
      // let userResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINTS}/auth-user`, {
      //   headers: {
      //     'Authorization': `Bearer ${authToken}`,
      //   }
      // });

      let userResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINTS}/auth-user`
      );

      setAuthUser(userResponse.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      {/* Page Title */}
      <PageTitle breadCrumbs={breadCrumbs} title="Your Profile" />
      {/* End Page Title */}

      {/* Nav */}
      <section className="container py-5 mx-auto max-w-[1200px]">
        <ul className="grid grid-flow-col text-center bg-gray-100 rounded-full p-1">
          <li>
            <Link
              href="/account"
              className="flex justify-center items-center py-3 text-sm md:text-base"
            >
              <HiHeart className="mr-1" />
              Favourite Ebooks
            </Link>
          </li>
          <li>
            <Link
              href="/account/reading-list"
              className="flex justify-center items-center py-3 text-sm md:text md:text-base"
            >
              <FaBookReader className="mr-1" />
              Reading List
            </Link>
          </li>
          <li>
            <Link
              href="/account/settings"
              className="flex justify-center items-center py-3 text-sm md:text md:text-base bg-indigo-500 text-white rounded-full shadow"
            >
              <HiUser className="mr-1" />
              Settings
            </Link>
          </li>
        </ul>
      </section>
      {/* End Nav */}

      {/* Settings Form */}
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pb-24 mx-auto max-w-[1200px]">
          <div className="flex flex-wrap flex-col">
            <div className="p-2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  Current Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">
                  New Password <span className="text-xs">(Fill if you want to update your password)</span>
                </label>
                <input
                  type="password"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End Settings Form */}
    </>
  );
}

export default Settings;
