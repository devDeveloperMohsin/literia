import React, { useEffect, useState } from "react";
import axios from "../../helpers/axios";
import PageTitle from "../../components/PageTitle";
import { useSelector } from "react-redux";
import { selectAuthToken } from "../../store/slices/authSlice";
import { HiHeart, HiUser } from "react-icons/hi2";
import { FaBookReader } from "react-icons/fa";
import Link from "next/link";
import SidePanel from "../../components/SidePanel";

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

function Account() {
  const [openSidePanel, setOpenSidePanel] = useState(false);
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
      <section className="container py-7 mx-auto max-w-[1200px]">
        <ul className="grid grid-flow-col text-center bg-gray-100 rounded-full p-1">
          <li>
            <Link
              href="/account"
              className="flex justify-center items-center py-3 text-sm md:text-base bg-indigo-500 text-white rounded-full shadow"
            >
              <HiHeart className="mr-1" />
              Favourite EBooks
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
              className="flex justify-center items-center py-3 text-sm md:text md:text-base"
            >
              <HiUser className="mr-1" />
              Settings
            </Link>
          </li>
        </ul>
      </section>
      {/* End Nav */}

      {/* Ebooks */}
      <section>
        <div className="container px-5 pb-24 mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:gap-x-8">

            {inDemandBooks.map((product) => (
              <div
                key={product.id}
                className="group relative mx-2 cursor-pointer"
                onClick={() => setOpenSidePanel(true)}
              >
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Ebooks */}

      {/* Side Panels */}
      <SidePanel
        openSidePanel={openSidePanel}
        setOpenSidePanel={setOpenSidePanel}
        title={"Read Book"}
      >
        <iframe
          src="pdfs/Seven-Habits-of-Highly-Effective-Teens.pdf"
          className="w-full h-full"
        ></iframe>
      </SidePanel>
      {/* End Side Panels */}
    </>
  );
}

export default Account;
