import React from "react";
import PageTitle from "../components/PageTitle";
import Marquee from "react-fast-marquee";

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
  const breadCrumbs = {
    "Digital Resources": "",
  };
  return (
    <>
      {/* Page Title */}
      <PageTitle breadCrumbs={breadCrumbs} title="Digital Resources" />
      {/* End Page Title */}

      {/* Popular Assets */}
      <section className="bg-gray-50">
        <div className="container px-5 py-24 mx-auto">
          <Marquee>
            {inDemandBooks.map((product) => (
              <div key={product.id} className="group relative mx-2">
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
    </>
  );
}

export default DigitalAssetsPage;
