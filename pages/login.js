import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { login, selectAuthToken } from '../store/slices/authSlice';

function LoginPage({toast}) {
  const token = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async() => {
    if(email == "" && password == "") {
      toast.error("Please fill all fields");
      return;
    }

    dispatch(login({email, password}));
  }


  useEffect(() => {
    if(token) {
      router.push('/account');
    }
  }, [token]);

  return (
    <section className="text-gray-600 body-font max-w-[1200px] mx-auto">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Welcome to the Library Management System
          </h1>
          <p className="leading-relaxed mt-4">
            Please enter your username and password to access your account and
            manage your library resources
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Login
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
          <p className="text-xs flex text-gray-500 mt-3">
            <Link href="/signup" className="text-indigo-500 underline">
              Register
            </Link>
            &nbsp;as a new user?
            <a href="#" className="text-indigo-500 underline ml-auto">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
