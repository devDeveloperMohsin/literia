import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import Marquee from "react-fast-marquee";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import SidePanel from "../components/SidePanel";

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

function DigitalAssetsPage() {
  const [openSidePanel, setOpenSidePanel] = useState(false);

  const breadCrumbs = {
    "Digital Resources": "",
  };
  return (
    <>
      {/* Page Title */}
      <PageTitle breadCrumbs={breadCrumbs} title="Digital Resources" />
      {/* End Page Title */}

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

      {/* Popular Assets */}
      <section className="bg-gray-900">
        <div className="container px-5 pb-24 pt-14 mx-auto max-w-[1200px]">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-14 text-white">
            Popular <span className="text-indigo-500">Books</span>
          </h1>
          <Marquee
            gradient={false}
            pauseOnHover={true}
            pauseOnClick={true}
            speed={40}
          >
            {inDemandBooks.map((product) => (
              <div key={product.id} className="group relative mx-2 cursor-pointer" onClick={() => setOpenSidePanel(true)}>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      {/* End Popular Assets */}

      {/* Popular Assets */}
      <section>
        <div className="container px-5 pb-24 pt-14 mx-auto max-w-[1200px]">
          <div class="flex justify-between items-center border-b-2 mb-4">
            <h1 class="uppercase py-4 text-xl font-sans font-bold">
              Magazines
            </h1>
            <a
              href="/"
              className="hover:underline underline-offset-4 font-semibold decoration-2 decoration-indigo-500 text-black hover:text-indigo-500 py-2"
            >
              View All
            </a>
          </div>
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={40}
              totalSlides={inDemandBooks.length}
              visibleSlides={6}
              infinite={true}
              isIntrinsicHeight={true}
              interval={3000}
              isPlaying={true}
            >
              <Slider>
                {inDemandBooks.map((product) => (
                  <Slide index={product.id - 1} key={product.id}>
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
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>

              <div className="flex justify-end bg-gray-50 py-2 mt-2">
                <ButtonBack className="bg-indigo-500 text-white px-2 py-1 rounded mr-2">
                  <HiArrowLongLeft />
                </ButtonBack>
                <ButtonNext className="bg-indigo-500 text-white px-2 py-1 rounded">
                  <HiArrowLongRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>

        <div className="container px-5 pb-24 mx-auto max-w-[1200px]">
          <div class="flex justify-between items-center border-b-2 mb-4">
            <h1 class="uppercase pb-4  text-xl font-sans font-bold">
              Magazines
            </h1>
            <a
              href="/"
              className="hover:underline underline-offset-4 font-semibold decoration-2 decoration-indigo-500 text-black hover:text-indigo-500 pb-4"
            >
              View All
            </a>
          </div>
          <div>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={40}
              totalSlides={inDemandBooks.length}
              visibleSlides={6}
              infinite={true}
              isIntrinsicHeight={true}
              interval={3000}
              isPlaying={true}
            >
              <Slider>
                {inDemandBooks.map((product) => (
                  <Slide index={product.id - 1} key={product.id}>
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
                            <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            />
                            {product.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>

              <div className="flex justify-end bg-gray-50 py-2 mt-2">
                <ButtonBack className="bg-indigo-500 text-white px-2 py-1 rounded mr-2">
                  <HiArrowLongLeft />
                </ButtonBack>
                <ButtonNext className="bg-indigo-500 text-white px-2 py-1 rounded">
                  <HiArrowLongRight />
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </section>
      {/* End Popular Assets */}
    </>
  );
}

export default DigitalAssetsPage;
