import React from "react";
import PageTitle from "../../components/PageTitle";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
function index() {
  return (
    <>
      <h1 className="font-bold text-xl pt-2 mb-5">Dashboard</h1>

      {/* Stats */}
      <section>
        <div className="flex items-center justify-center bg-gray-100 p-2 rounded overflow-hidden">
          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row ">
              <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                <div className="flex items-center justify-start w-full">
                  <div className="flex-col w-[85%]">
                    <div className="text-sm font-medium text-violet-600 my-2">
                      Total Users
                    </div>
                    <div className="className flex items-center">
                      <div className="text-3xl font-bold text-gray-700">
                        $2,30,568
                      </div>
                      <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                        <div className="text-xs bg-green-200 px-2 rounded-lg">
                          + 78%
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                      <div className="w-[78%] h-1 rounded bg-green-500"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-400 ">
                      Weekly Goal
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                <div className="flex items-center justify-start w-full">
                  <div className="flex-col w-[85%]">
                    <div className="text-sm font-medium text-violet-600 my-2">
                      Total Categories
                    </div>
                    <div className="className flex items-center">
                      <div className="text-3xl font-bold text-gray-700">
                        32.78%
                      </div>
                      <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                        <div className="text-xs bg-red-200 px-2 rounded-lg">
                          - 7%
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                      <div className="w-[33%] h-1 rounded bg-red-500"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-400 ">
                      Daily Goal
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row ">
              <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                <div className="flex items-center justify-start w-full">
                  <div className="flex-col w-[85%]">
                    <div className="text-sm font-medium text-violet-600 my-2">
                      Total Books
                    </div>
                    <div className="className flex items-center">
                      <div className="text-3xl font-bold text-gray-700">
                        $2,30,568
                      </div>
                      <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
                        <div className="text-xs bg-green-200 px-2 rounded-lg">
                          + 78%
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                      <div className="w-[78%] h-1 rounded bg-green-500"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-400 ">
                      Weekly Goal
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-xl flex items-start h-32 w-[90%] lg:w-1/2 justify-center py-4 px-8 mx-4 my-2">
                <div className="flex items-center justify-start w-full">
                  <div className="flex-col w-[85%]">
                    <div className="text-sm font-medium text-violet-600 my-2">
                      Total Digital Assets
                    </div>
                    <div className="className flex items-center">
                      <div className="text-3xl font-bold text-gray-700">
                        32.78%
                      </div>
                      <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-red-500 font-medium ">
                        <div className="text-xs bg-red-200 px-2 rounded-lg">
                          - 7%
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-1 rounded bg-gray-300 my-1">
                      <div className="w-[33%] h-1 rounded bg-red-500"></div>
                    </div>
                    <div className="text-xs font-medium text-gray-400 ">
                      Daily Goal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Stats */}

      <section className="mt-5">
        <div className="">
          <h2 className="font-bold">Recent Queries</h2>
          <table className="w-full">
            <thead className="text-left text-gray-400 border-b">
              <tr>
                <th className="font-normal py-2 px-4">Name</th>
                <th className="font-normal py-2 px-4">Email</th>
                <th className="font-normal py-2 px-4">Message</th>
                <th className="font-normal py-2 px-4">Status</th>
                <th className="font-normal py-2 px-4">Date Time</th>
              </tr>
            </thead>
            <tbody>
              {[1, 1, 1, 1, 1, 1].map((el, index) => (
                <tr key={index} className="border-b last:border-b-0 odd:bg-gray-50">
                  <td className="py-2 px-4">Mohsin</td>
                  <td className="py-2 px-4">Mohsin@tkxel.io</td>
                  <td className="py-2 px-4">Want Book named "7 Best Languages to Learn"</td>
                  <td className="py-2 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      Resolved
                    </span>
                  </td>
                  <td className="py-2 px-4">Feb 16, 2023 10:30 AM</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default index;
