import React from "react";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

function PageTitle({ breadCrumbs }) {
  return (
    <div className="bg-gray-800">
      <div className="container p-5 items-center max-w-[1200px] mx-auto">
        <div className="breadcrumbs flex items-center text-gray-400 text-sm">
          <Link href="/" className="hover:text-indigo-500">Home</Link> <FiChevronRight className="-mb-1" />

          {Object.keys(breadCrumbs).map((title, index) => {
            if (breadCrumbs[title] == "") {
              return (
                <span key={index} className="text-gray-200">
                  {title}
                </span>
              );
            } else {
              return (
                <>
                  <Link href="/" key={index} className="hover:text-indigo-500">
                    Blogs
                  </Link>{" "}
                  <FiChevronRight className="-mb-1" />
                </>
              );
            }
          })}

        </div>
        <h1 className="text-white text-4xl">Blogs</h1>
      </div>
    </div>
  );
}

export default PageTitle;
