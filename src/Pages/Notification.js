import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import AxisbankIcon from "../Static/Images/axisbank.webp";
import SingleNotification from "./SingleNotification";

function Notification(props) {
  // mobile number
  const mobileNumber = localStorage.getItem("MobileNumber");
  // notification
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.payemi.net/shownotification/?phone_number=${mobileNumber}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error === true) {
          alert(data?.message);
        } else {
          setNotifications(data.data);
        }
      });
  }, []);

  return (
    <>
      <div className="h-100">
        <div className="side-pane">
          <div className="d-flex align-center justify-between side-pane-header pb-0">
            <div className="d-flex align-center">
              <Link to="/home">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#1A1A1A" fillRule="evenodd">
                    <path d="M23.25 14.531a.969.969 0 1 1 0 1.938H7.75a.969.969 0 0 1 0-1.938h15.5z" />
                    <path d="m9.12 15.5 5.128 5.127a.969.969 0 0 1-1.37 1.37l-5.813-5.812a.969.969 0 0 1 0-1.37l5.812-5.813a.969.969 0 1 1 1.37 1.37L9.12 15.5z" />
                  </g>
                </svg>
              </Link>
            </div>
            <div>
              <p className="mb-1 tx-16">
                <strong>Notifications</strong>
              </p>
            </div>
            <div>
              <button className="btn btn-outline-secondary">Clear All</button>
            </div>
          </div>
        </div>
        <div className="home-base home-base-notification h-100">
          <div className="h-100 py-4 px-3">
            <div className="py-0">
              <p className="mb-2 tx-16">Today</p>
            </div>
            {notifications?.map((data) => (
              <SingleNotification key={data.time} notifications={data} />
            ))}

            {/* Card End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
