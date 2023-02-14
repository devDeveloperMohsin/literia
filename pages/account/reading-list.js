import React, { useEffect, useState } from "react";
import axios from "../../helpers/axios";
import PageTitle from "../../components/PageTitle";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/slices/authSlice";
import { HiHeart, HiUser, HiXMark } from "react-icons/hi2";
import { FaHeartBroken } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import Link from "next/link";
import Modal from "../../components/Modal";

const inDemandBooks = [
  {
    id: 1,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/b/id/8587804-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 2,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/w/id/221872-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 3,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/b/id/10389354-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 4,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/b/id/9407338-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 5,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/b/id/9168741-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 6,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/b/id/10551941-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 7,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/w/id/575572-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
  {
    id: 8,
    name: "Basic Tee",
    imageSrc: "https://covers.openlibrary.org/w/id/12015500-M.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    category: "Classic",
    author: "Richard",
    available: "Yes",
  },
];

function ReadingList() {
  const [bookDetailsModalOpen, setBookDetailsModalOpen] = useState(false);
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
              Favourite EBooks
            </Link>
          </li>
          <li>
            <Link
              href="/account/reading-list"
              className="flex justify-center items-center py-3 text-sm md:text md:text-base bg-indigo-500 text-white rounded-full shadow"
            >
              <FaBookReader className="mr-1" />
              Reading List
            </Link>
          </li>
          <li>
            <Link
              href="/account/settings"
              className="flex justify-center items-center py-3 text-sm md:text md:text-base"
            >
              <HiUser className="mr-1" />
              Settings
            </Link>
          </li>
        </ul>
      </section>
      {/* End Nav */}

      {/* Reading List */}
      <section>
      <div className="container px-5 pb-24 mx-auto max-w-[1200px]">
        <div className="flex flex-wrap">
          {inDemandBooks.map((product) => (
            <div
              key={product.id}
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 p-4 w-full cursor-pointer"
              onClick={() => setBookDetailsModalOpen(true)}
            >
              <div className="block relative h-52 rounded overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="object-contain object-center w-full h-full block"
                  src={product.imageSrc}
                  alt={product.imageAlt}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {product.name}
                </h2>
                <div className="text-xs rounded-full px-2 py-1 w-full text-center bg-indigo-500 text-white">
                  Available
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
      {/* End Reading List */}

      {/* Book Details Modal */}
      <Modal
        open={bookDetailsModalOpen}
        setOpen={setBookDetailsModalOpen}
        panelClasses="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
      >
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
            onClick={() => setBookDetailsModalOpen(false)}
          >
            <HiXMark className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={"https://covers.openlibrary.org/b/id/8587804-M.jpg"}
                alt="image"
                className="object-cover object-center mx-auto w-full"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                Court of Mist and Fury
              </h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <div>
                  <h3 className="text-xs mb-1 text-indigo-500">
                    Book Information
                  </h3>
                  <p className="flex justify-between border-t text-sm py-1">
                    <strong>Category:</strong> Clasics
                  </p>
                  <p className="flex justify-between border-t text-sm py-1">
                    <strong>Author:</strong> Stephen King
                  </p>
                  <p className="flex justify-between border-t text-sm py-1">
                    <strong>Read:</strong> 200 times
                  </p>
                  <p className="flex justify-between border-t text-sm py-1">
                    <strong>Available In Library:</strong>
                    <span className="text-xs rounded-full px-2 py-1 text-center bg-red-500 text-white">
                      No
                    </span>
                  </p>
                  <p className="flex justify-between border-t text-sm py-1">
                    <strong>Expected Availability:</strong> Feb 28, 20223
                  </p>
                </div>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <button className="text-white bg-red-500 border-0 w-full py-2 px-6 focus:outline-none hover:bg-red-600 rounded flex items-center justify-center">
                  <FaHeartBroken className="mr-1" /> Remove from reading list
                </button>
              </section>
            </div>
          </div>
        </div>
      </Modal>
      {/* Book Details Modal */}
    </>
  );
}

export default ReadingList;
