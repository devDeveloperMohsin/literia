import React, { useEffect } from "react"
import AdminSidebar from '../components/AdminSidebar'

import { useDispatch } from "react-redux"
import { setToken } from '../store/slices/authSlice'
import {getCookie} from '../helpers/cookies'

function AdminLayout({ children }) {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setToken({token: getCookie('user-token')}));
  }, []);

  return (
    <>
      <AdminSidebar />
      <div className="p-4 sm:ml-64">
        {children}
      </div>
    </>
  );
}

export default AdminLayout;
