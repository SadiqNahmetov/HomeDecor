import React, { useState } from "react";
import "./profile.scss";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import changeTitle from "../../utils/Change";

const Profile = () => {
  const location = useLocation();

  useState(() => {
    changeTitle("Profile");
  }, []);
  return (
    <div className="account">
      <div className="profile">
        <h2 className="profile__title">MY ACCOUNT</h2>
        <ul className="profile__list">
          <li className="profile__list--item">
            {location.pathname === "/myaccount/info" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="12" cy="6" r="4" fill="#2D2D2B" />
                <ellipse cx="12" cy="17" rx="7" ry="4" fill="#2D2D2B" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6C7.25 8.62335 9.37665 10.75 12 10.75C14.6234 10.75 16.75 8.62335 16.75 6C16.75 3.37665 14.6234 1.25 12 1.25ZM8.75 6C8.75 4.20507 10.2051 2.75 12 2.75C13.7949 2.75 15.25 4.20507 15.25 6C15.25 7.79493 13.7949 9.25 12 9.25C10.2051 9.25 8.75 7.79493 8.75 6Z"
                  fill="#2D2D2B"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 12.25C9.96067 12.25 8.07752 12.7208 6.67815 13.5204C5.3 14.3079 4.25 15.5101 4.25 17C4.25 18.4899 5.3 19.6921 6.67815 20.4796C8.07752 21.2792 9.96067 21.75 12 21.75C14.0393 21.75 15.9225 21.2792 17.3219 20.4796C18.7 19.6921 19.75 18.4899 19.75 17C19.75 15.5101 18.7 14.3079 17.3219 13.5204C15.9225 12.7208 14.0393 12.25 12 12.25ZM5.75 17C5.75 16.2807 6.26701 15.483 7.42236 14.8228C8.55649 14.1747 10.1733 13.75 12 13.75C13.8267 13.75 15.4435 14.1747 16.5776 14.8228C17.733 15.483 18.25 16.2807 18.25 17C18.25 17.7193 17.733 18.517 16.5776 19.1772C15.4435 19.8253 13.8267 20.25 12 20.25C10.1733 20.25 8.55649 19.8253 7.42236 19.1772C6.26701 18.517 5.75 17.7193 5.75 17Z"
                  fill="#2D2D2B"
                />
              </svg>
            )}

            <Link to="/myaccount/info">PERSONAL INFORMATION</Link>
          </li>
          <li className="profile__list--item">
            {location.pathname === "/myaccount/wishlist" ? (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#2D2D2B"/>
           </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8.96173 18.9108L9.42605 18.3218L8.96173 18.9108ZM12 5.50057L11.4596 6.02067C11.601 6.16757 11.7961 6.25057 12 6.25057C12.2039 6.25057 12.399 6.16757 12.5404 6.02067L12 5.50057ZM15.0383 18.9108L15.5026 19.4998L15.0383 18.9108ZM9.42605 18.3218C7.91039 17.127 6.25307 15.9602 4.93829 14.4797C3.64922 13.0282 2.75 11.3344 2.75 9.13704H1.25C1.25 11.8026 2.3605 13.836 3.81672 15.4757C5.24723 17.0865 7.07077 18.3752 8.49742 19.4998L9.42605 18.3218ZM2.75 9.13704C2.75 6.98617 3.96537 5.18246 5.62436 4.42413C7.23607 3.68741 9.40166 3.88251 11.4596 6.02067L12.5404 4.98047C10.0985 2.44346 7.26409 2.02533 5.00076 3.0599C2.78471 4.07286 1.25 6.42497 1.25 9.13704H2.75ZM8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6599C10.6739 20.9854 11.3096 21.2499 12 21.2499V19.7499C11.6904 19.7499 11.3261 19.6292 10.8736 19.3648C10.4213 19.1005 9.95208 18.7365 9.42605 18.3218L8.49742 19.4998ZM15.5026 19.4998C16.9292 18.3752 18.7528 17.0865 20.1833 15.4757C21.6395 13.836 22.75 11.8026 22.75 9.13704H21.25C21.25 11.3344 20.3508 13.0282 19.0617 14.4797C17.7469 15.9602 16.0896 17.127 14.574 18.3218L15.5026 19.4998ZM22.75 9.13704C22.75 6.42497 21.2153 4.07286 18.9992 3.0599C16.7359 2.02533 13.9015 2.44346 11.4596 4.98047L12.5404 6.02067C14.5983 3.88251 16.7639 3.68741 18.3756 4.42413C20.0346 5.18246 21.25 6.98617 21.25 9.13704H22.75ZM14.574 18.3218C14.0479 18.7365 13.5787 19.1005 13.1264 19.3648C12.6739 19.6292 12.3096 19.7499 12 19.7499V21.2499C12.6904 21.2499 13.3261 20.9854 13.8832 20.6599C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998L14.574 18.3218Z"
                  fill="#2D2D2B"
                />
              </svg>
            )}
            <Link to="/myaccount/wishlist">WISHLIST</Link>
          </li>
          <li className="profile__list--item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="272"
              height="2"
              viewBox="0 0 272 2"
              fill="none"
            >
              <path d="M1 1L271 1" stroke="#EAE6DF" strokeLinecap="round" />
            </svg>
          </li>
          <li className="profile__list--item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17"
                stroke="#2D2D2B"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15 12L2 12M2 12L5.5 9M2 12L5.5 15"
                stroke="#2D2D2B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link>LOG OUT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
