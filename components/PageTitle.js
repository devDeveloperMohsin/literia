import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

function PageTitle({ breadCrumbs, title }) {
  return (
    <div className="bg-gray-800">
      <div className="container p-5 items-center max-w-[1200px] mx-auto">
        <div className="breadcrumbs flex items-center text-gray-400 text-sm">
          <Link href="/" className="hover:text-indigo-500">
            Home
          </Link>{" "}
          <FiChevronRight className="-mb-1" />
          {Object.keys(breadCrumbs).map((breadTitle, index) => {
            if (breadCrumbs[breadTitle] == "") {
              return (
                <span key={index} className="text-gray-200">
                  {breadTitle}
                </span>
              );
            } else {
              return (
                <React.Fragment key={index}>
                  <Link href="/" className="hover:text-indigo-500">
                    Blogs
                  </Link>{" "}
                  <FiChevronRight className="-mb-1" />
                </React.Fragment>
              );
            }
          })}
        </div>
        <h1 className="text-2xl md:text-4xl text-white">{title}</h1>
      </div>
    </div>
  );
}

export default PageTitle;
