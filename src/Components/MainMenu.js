import React, { useRef, useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Link, useHistory } from "react-router-dom";

function MainMenu(props) {
  const theme = useTheme();
  const [openq, setOpenq] = React.useState(false);

  const [open1, setOpen1] = useState(true);
  const handleDrawerOpen = () => {
    setOpenq(true);
    setOpen1(false);
  };
  const handleDrawerClose = () => {
    setOpenq(false);
    setOpen1(true);
  };

  const name = localStorage.getItem("full_name");
  let history = useHistory();
  const logout = () => {
    localStorage.clear();

    history.push("sign-in");
  };
  return (
    <>
      <div className="d-flex align-center justify-content-between py-4 px-3">
        <div className="d-flex align-center menu-user">
          <div>RS</div>
          {name}
        </div>
        <button className="menu-btn">
          <svg
            onClick={() => logout()}
            width="23"
            height="23"
            viewBox="0 0 23 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#FFF" fillRule="evenodd">
              <path d="M9.806 17.502a.7.7 0 1 1 0 1.4H6.304a2.1 2.1 0 0 1-2.102-2.1V5.601c0-1.16.941-2.1 2.102-2.1h3.502a.7.7 0 1 1 0 1.4H6.304a.7.7 0 0 0-.7.7v11.201a.7.7 0 0 0 .7.7h3.502zM16.52 11.201l-2.307-2.305a.7.7 0 1 1 .99-.99l2.802 2.8a.7.7 0 0 1 0 .99l-2.801 2.8a.7.7 0 0 1-.99-.99l2.305-2.305z" />
              <path d="M17.51 10.501a.7.7 0 1 1 0 1.4H9.105a.7.7 0 1 1 0-1.4h8.405z" />
            </g>
          </svg>
        </button>
      </div>
      <div className="d-flex py-4 px-4 h-100">
        <ul>
          <li>
            <div className="d-flex align-center">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                className="me-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFF" fillRule="evenodd" opacity=".502">
                  <path d="M5.603 9.444v7.358a.7.7 0 0 0 .7.7h9.806a.7.7 0 0 0 .7-.7V9.444l-5.603-4.357-5.603 4.357zm-1.13-.896 6.303-4.9a.7.7 0 0 1 .86 0l6.304 4.9a.7.7 0 0 1 .27.553v7.701a2.1 2.1 0 0 1-2.1 2.1H6.303a2.1 2.1 0 0 1-2.102-2.1v-7.7a.7.7 0 0 1 .27-.554z" />
                  <path d="M9.806 11.901v6.301a.7.7 0 0 1-1.401 0v-7a.7.7 0 0 1 .7-.7h4.203a.7.7 0 0 1 .7.7v7a.7.7 0 0 1-1.4 0v-6.3H9.805z" />
                </g>
              </svg>
              <Link to="/home">
                <span className="menu-text">Home</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <div className="d-flex align-center">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <svg
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        className="me-3"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#FFF" fillRule="evenodd" opacity=".5">
                          <path d="M10.408 5.143a2.103 2.103 0 0 1 3.597 0l5.938 9.909a2.1 2.1 0 0 1-1.804 3.15H6.266a2.101 2.101 0 0 1-1.79-3.16l5.932-9.9zM5.683 15.752a.7.7 0 0 0 .591 1.05h11.857a.7.7 0 0 0 .605-1.04l-5.93-9.896a.7.7 0 0 0-1.198-.002l-5.925 9.888z" />
                          <path d="M11.506 9.101a.7.7 0 0 1 1.4 0v2.8a.7.7 0 0 1-1.4 0v-2.8zM12.206 13.302a.7.7 0 0 1 0 1.4.7.7 0 0 1 0-1.4z" />
                        </g>
                      </svg>
                      Complaint
                    </button>
                  </div>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        <Link to="/register-complaint">
                          <span className="menu-text">Register</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/complaint-tracking">
                          <span className="menu-text">Tracking</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-center">
              <svg
                width="24"
                height="23"
                className="me-3"
                viewBox="0 0 24 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFF" fillRule="evenodd" opacity=".5">
                  <path d="M5.903 6.3a.7.7 0 0 0-.7.7v8.402a.7.7 0 0 0 .7.7H18.51a.7.7 0 0 0 .7-.7V7a.7.7 0 0 0-.7-.7H5.903zm0-1.4H18.51A2.1 2.1 0 0 1 20.61 7v8.402a2.1 2.1 0 0 1-2.101 2.1H5.903a2.1 2.1 0 0 1-2.101-2.1V7c0-1.16.94-2.1 2.1-2.1z" />
                  <path d="M4.502 10.501a.7.7 0 1 1 0-1.4h15.409a.7.7 0 1 1 0 1.4H4.502z" />
                </g>
              </svg>

              <Link to="/transaction-search">
                <span className="menu-text">Transaction Search</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-center">
              <svg
                width="24"
                height="23"
                className="me-3"
                viewBox="0 0 24 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFF" fillRule="evenodd" opacity=".5">
                  <path d="M18.51 17.502a.7.7 0 0 1-1.4 0v-1.4a2.1 2.1 0 0 0-2.102-2.1H9.405a2.1 2.1 0 0 0-2.101 2.1v1.4a.7.7 0 0 1-1.401 0v-1.4c0-1.933 1.568-3.5 3.502-3.5h5.603a3.501 3.501 0 0 1 3.502 3.5v1.4zM12.206 11.201a3.501 3.501 0 1 1-.001-7.002 3.501 3.501 0 0 1 .001 7.002zm0-1.4a2.1 2.1 0 1 0 .001-4.201 2.1 2.1 0 0 0 0 4.201z" />
                </g>
              </svg>
              <Link to="/profile">
                <span className="menu-text">Profile</span>
              </Link>
            </div>
          </li>

          <li>
            <div className="d-flex align-center">
              <svg
                width="24"
                height="23"
                className="me-3"
                viewBox="0 0 24 23"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12.206 5.782-1.536 3.11a.7.7 0 0 1-.527.384l-3.436.502 2.486 2.42a.7.7 0 0 1 .202.62l-.587 3.418 3.072-1.615a.7.7 0 0 1 .652 0l3.073 1.615-.587-3.418a.7.7 0 0 1 .202-.62l2.486-2.42-3.437-.502a.7.7 0 0 1-.526-.383l-1.537-3.11zm-2.63 2.161 2.002-4.052a.7.7 0 0 1 1.256 0l2.002 4.052 4.476.654a.7.7 0 0 1 .387 1.195l-3.238 3.152.764 4.454a.7.7 0 0 1-1.016.738l-4.003-2.104-4.002 2.104a.7.7 0 0 1-1.016-.738l.764-4.454-3.238-3.152A.7.7 0 0 1 5.1 8.597l4.476-.654z"
                  fill="#FFF"
                  fillRule="evenodd"
                  opacity=".502"
                />
              </svg>
              <Link to="/rate-and-review">
                <span className="menu-text">Rate this App</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-center">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                className="me-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.409 12.602v-3.5c0-2.32-1.882-4.201-4.203-4.201a4.201 4.201 0 0 0-4.202 4.2v3.5c0 .51-.136.989-.375 1.4h9.155a2.787 2.787 0 0 1-.375-1.4zm2.801 2.8H4.202c-.933 0-.933-1.4 0-1.4a1.4 1.4 0 0 0 1.401-1.4v-3.5c0-3.094 2.509-5.602 5.603-5.602a5.602 5.602 0 0 1 5.604 5.601v3.5a1.4 1.4 0 0 0 1.4 1.4c.934 0 .934 1.4 0 1.4zm-5.186 2.451a2.101 2.101 0 0 1-3.635 0 .7.7 0 0 1 .606-1.051h2.423a.7.7 0 0 1 .606 1.051z"
                  fill="#FFF"
                  fillRule="evenodd"
                  opacity=".502"
                />
              </svg>
              <Link to="/notification">
                <span className="menu-text">Notification</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="d-flex align-center">
              <svg
                width="24"
                height="23"
                viewBox="0 0 24 23"
                className="me-3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.51 14.646a.704.704 0 0 0-.596-.727 9.7 9.7 0 0 1-2.123-.53.7.7 0 0 0-.736.156l-.89.889a.7.7 0 0 1-.841.113 11.904 11.904 0 0 1-4.465-4.463.7.7 0 0 1 .114-.84l.886-.887a.7.7 0 0 0 .157-.74 9.67 9.67 0 0 1-.527-2.114.702.702 0 0 0-.708-.602h-2.1a.7.7 0 0 0-.698.752 13.158 13.158 0 0 0 2.045 5.768 12.962 12.962 0 0 0 3.992 3.989 13.153 13.153 0 0 0 5.726 2.039.7.7 0 0 0 .764-.703v-2.1zm1.4.008v2.09a2.1 2.1 0 0 1-2.302 2.098 14.558 14.558 0 0 1-6.345-2.254 14.348 14.348 0 0 1-4.414-4.41 14.56 14.56 0 0 1-2.26-6.388A2.1 2.1 0 0 1 6.68 3.5h2.095a2.103 2.103 0 0 1 2.102 1.813c.081.62.233 1.228.451 1.813a2.101 2.101 0 0 1-.475 2.218l-.503.502a10.504 10.504 0 0 0 3.212 3.21l.505-.504a2.101 2.101 0 0 1 2.215-.473c.586.218 1.195.37 1.821.452a2.1 2.1 0 0 1 1.808 2.123z"
                  fill="#FFF"
                  fillRule="evenodd"
                  opacity=".502"
                />
              </svg>
              <Link to="/home">
                <span className="menu-text">Help</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MainMenu;
