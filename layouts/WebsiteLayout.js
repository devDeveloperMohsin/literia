import React, { useEffect } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import { useDispatch } from "react-redux"
import { setToken } from '../store/slices/authSlice'
import {getCookie} from '../helpers/cookies'

function WebsiteLayout({ children }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setToken({token: getCookie('user-token')}));
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default WebsiteLayout;
