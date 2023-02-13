import { Fragment, useState } from "react";
import {
  Dialog,
  Disclosure,
  Menu,
  RadioGroup,
  Transition,
} from "@headlessui/react";
import {
  HiChevronDown,
  HiFunnel,
  HiHeart,
  HiMagnifyingGlass,
  HiMinus,
  HiPlus,
  HiStar,
  HiXMark,
} from "react-icons/hi2";
import PageTitle from "../components/PageTitle";
import Link from "next/link";
import Modal from "../components/Modal";

// Sort Options In Use
const sortOptions = [
  { name: "Name (A to Z)", href: "#", current: true },
  { name: "Name (Z to A)", href: "#", current: false },
  { name: "Most Popular", href: "#", current: false },
  { name: "Best Rating", href: "#", current: false },
];

// Sort Options In Use
const subCategories = [
  { name: "Adventure stories", href: "#" },
  { name: "Biography", href: "#" },
  { name: "Classics", href: "#" },
  { name: "Crime", href: "#" },
  { name: "Fantasy", href: "#" },
  { name: "Literary fiction", href: "#" },
  { name: "Poetry", href: "#" },
  { name: "Romance", href: "#" },
  { name: "Science fiction", href: "#" },
  { name: "Short stories", href: "#" },
  { name: "Self-help", href: "#" },
  { name: "Thrillers", href: "#" },
  { name: "War", href: "#" },
];

const authors = [
  "Chinua Achebe",
  "Peter Ackroyd",
  "Douglas Adams",
  "Chimamanda Ngozi Adichie",
  "Aaron Akinyemi",
  "Alexandra Harris",
  "Monica Ali",
  "Dante Alighieri",
  "Alistair Cooke",
  "Isabel Allende",
  "Kingsley Amis",
  "Martin Amis",
  "Maya Angelou",
  "Annie Proulx",
  "Jeffrey Archer",
  "Philip Ardagh",
  "Simon Armitage",
  "Isaac Asimov",
  "Åsne Seierstad",
  "Diana Athill",
  "Kate Atkinson",
  "Margaret Atwood",
  "WH Auden",
  "Jane Austen",
  "Paul Auster",
];

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BooksPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [bookDetailsModalOpen, setBookDetailsModalOpen] = useState(false);

  const breadCrumbs = {
    Books: "",
  };

  return (
    <>
      {/* Page Title */}
      <PageTitle breadCrumbs={breadCrumbs} title="Books" />
      {/* End Page Title */}

      {/* Books Section */}
      <section>
        <div className="container py-24 mx-auto max-w-[1200px]">
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-30 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <HiXMark className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-4 px-4 border-t border-gray-200">
                      {/* Categories */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-bold text-gray-900">
                                  Categories
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <HiMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <HiPlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <ul
                                role="list"
                                className="space-y-4 text-sm font-medium text-gray-900"
                              >
                                {subCategories.map((category, index) => (
                                  <li key={category.name}>
                                    <a
                                      href={category.href}
                                      className={
                                        index == 1 ? "text-red-500" : ""
                                      }
                                    >
                                      {category.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      {/* End Categories */}

                      {/* Authors */}
                      <Disclosure
                        as="div"
                        defaultOpen={true}
                        className="border-b border-gray-200 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                <span className="font-bold text-gray-900">
                                  Authors
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <HiMinus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <HiPlus
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="flex flex-wrap">
                                {authors.map((name, index) => (
                                  <Link
                                    key="index"
                                    href="/books"
                                    className="text-xs block mb-1 text-white p-1 px-2 mr-1 rounded-full bg-indigo-400 hover:bg-indigo-500"
                                  >
                                    {name}
                                  </Link>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                      {/* End Authors */}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <div className="hidden lg:block">
                  {/* Categories */}
                  <Disclosure
                    as="div"
                    defaultOpen={true}
                    className="border-b border-gray-200 pb-6 pt-4"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-bold text-gray-900">
                              Categories
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <HiMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiPlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <ul
                            role="list"
                            className="space-y-4 text-sm font-medium text-gray-900"
                          >
                            {subCategories.map((category, index) => (
                              <li key={category.name}>
                                <a
                                  href={category.href}
                                  className={index == 1 ? "text-red-500" : ""}
                                >
                                  {category.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* End Categories */}

                  {/* Authors */}
                  <Disclosure
                    as="div"
                    defaultOpen={true}
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-bold text-gray-900">
                              Authors
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <HiMinus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <HiPlus
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="flex flex-wrap">
                            {authors.map((name, index) => (
                              <Link
                                key="index"
                                href="/books"
                                className="text-xs block mb-1 text-white p-1 px-2 mr-1 rounded-full bg-indigo-400 hover:bg-indigo-500"
                              >
                                {name}
                              </Link>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  {/* End Authors */}
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  {/* Search & Sort */}
                  <div className="flex justify-between border-b mb-5 border-gray-200 pb-5">
                    {/* Search Box */}
                    <div className="flex relative flex-1 max-w-xl">
                      <HiMagnifyingGlass className="text-xl absolute top-[10px] left-[10px] text-gray-500" />
                      <input
                        type="text"
                        placeholder="Search book by title"
                        class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 pl-9 mr-2 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    {/* End Search Box */}

                    <div className="flex items-center">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                            Sort
                            <HiChevronDown
                              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              {sortOptions.map((option) => (
                                <Menu.Item key={option.name}>
                                  {({ active }) => (
                                    <a
                                      href={option.href}
                                      className={classNames(
                                        option.current
                                          ? "font-medium text-gray-900"
                                          : "text-gray-500",
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      {option.name}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <button
                        type="button"
                        className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                        onClick={() => setMobileFiltersOpen(true)}
                      >
                        <HiFunnel className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  {/* End Search & Sort */}

                  {/* Books */}
                  <div>
                    <div className="flex flex-wrap -m-4">
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
                  {/* End Books */}
                </div>
                {/* End Products Grid */}
              </div>
            </section>
          </main>
        </div>
      </section>
      {/* End Books Section */}

      {/* Book Details Modal */}
      {/* Contact Us Modal */}
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
                <button className="text-white bg-indigo-500 border-0 w-full py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded flex items-center justify-center">
                  <HiHeart className="mr-1" /> Add to reading list
                </button>
              </section>
            </div>
          </div>
        </div>
      </Modal>
      {/* End Contact Us Modal */}
      {/* Book Details Modal */}
    </>
  );
}
