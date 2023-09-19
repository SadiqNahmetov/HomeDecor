import React from "react";
import "./registerLayout.scss";
import { Link } from "react-router-dom";
import AccountImage from "../../components/AccountImage";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";



function RegisterLayout() {
  return (
    <main className="main_registerLayout">
    <div className="form__area">
      <div className="form__head">
        <div className="svg">
          <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
          >
            <path
              d="M12.8408 4L4.84082 12L12.8408 20L14.2658 18.6L8.66582 13H20.8408V11H8.66582L14.2658 5.4L12.8408 4Z"
              fill="#EEF0F2"
            />
          </svg>
          </Link>
        </div>
        <p>back</p>
      </div>
      {<Outlet />}
    </div>
    <AccountImage />
    <Toaster position="top-left" />
  </main>
  )
}

export default RegisterLayout