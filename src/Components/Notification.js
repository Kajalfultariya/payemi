import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Images
import AxisbankIcon from "../Static/Images/axisbank.webp";

function Notification(props) {
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
            <div className="py-0 px-0 mb-4">
              <div className="ntfn-card bg-white py-3 px-3">
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <div>
                      <img src={AxisbankIcon} height="21" className="me-2" />
                    </div>
                    <div className="ms-3">
                      <p className="mb-2 lh-1 text-black tx-14">
                        Your EMI (Rs. 12446) due for AXIS
                      </p>
                      <p className="mb-2 lh-1 tx-12 text-muted">
                        28 minute ago
                      </p>
                      <button type="submit" className="btn btn-primary btn-sm">
                        Pay Now & Earn Cashback
                      </button>
                    </div>
                  </div>
                  <div>
                    <svg
                      width="5"
                      height="14"
                      viewBox="0 0 5 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="rotate(-180 2.056 6.719)"
                        fill="#AEAECD"
                        fillRule="evenodd"
                      >
                        <ellipse cx="1.562" cy="1.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="11.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="6.5" rx="1.562" ry="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card End */}

            <div className="py-0 px-0 mb-4">
              <div className="ntfn-card ntfn-card-bg py-3 px-3">
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <div>
                      <svg
                        width="38"
                        height="35"
                        viewBox="0 0 38 35"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <ellipse
                            fill="#ffffff"
                            id="a"
                            cx="18.222"
                            cy="17.5"
                            rx="18.222"
                            ry="17.5"
                          />
                        </defs>
                        <g
                          transform="translate(.5)"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <use fill="#FFF" />
                          <g mask="url(#b)" fill="#A69BF4" fillRule="nonzero">
                            <path d="M23.995 13.77h-1.72a2.793 2.793 0 0 0-4.505-3.294 2.793 2.793 0 0 0-4.505 3.294h-1.72a1.246 1.246 0 0 0-1.245 1.245v2.49a1.246 1.246 0 0 0 1.245 1.245v6.225a1.246 1.246 0 0 0 1.245 1.245h9.96a1.246 1.246 0 0 0 1.245-1.245V18.75a1.246 1.246 0 0 0 1.245-1.245v-2.49a1.246 1.246 0 0 0-1.245-1.245zm-5.602-1.556a1.556 1.556 0 1 1 1.556 1.556h-1.556v-1.556zm-2.802-1.556a1.558 1.558 0 0 1 1.557 1.556v1.556H15.59a1.556 1.556 0 0 1 0-3.112zm-4.046 4.357h5.603v2.49h-5.603v-2.49zm1.245 3.735h4.358v6.225H12.79V18.75zm9.96 6.225h-4.357V18.75h4.357v6.225zm-4.357-7.47v-2.49h5.602v2.49h-5.602z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <p className="mb-2 lh-1 text-black tx-14 font-500">
                        You earned cashback on Rs. 1200
                      </p>
                      <p className="mb-2 lh-1 tx-12 text-muted">
                        49 minute ago
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      width="5"
                      height="14"
                      viewBox="0 0 5 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="rotate(-180 2.056 6.719)"
                        fill="#AEAECD"
                        fillRule="evenodd"
                      >
                        <ellipse cx="1.562" cy="1.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="11.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="6.5" rx="1.562" ry="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card End */}

            <div className="py-0 px-0 mb-4">
              <div className="ntfn-card ntfn-card-bg py-3 px-3">
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <div>
                      <svg
                        width="38"
                        height="35"
                        viewBox="0 0 38 35"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs>
                          <ellipse
                            id="a"
                            cx="18.222"
                            cy="17.5"
                            rx="18.222"
                            ry="17.5"
                          />
                        </defs>
                        <g
                          transform="translate(.5)"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <use fill="#FFF" />
                          <g mask="url(#b)" fill="#A69BF4" fillRule="nonzero">
                            <path d="M23.995 13.77h-1.72a2.793 2.793 0 0 0-4.505-3.294 2.793 2.793 0 0 0-4.505 3.294h-1.72a1.246 1.246 0 0 0-1.245 1.245v2.49a1.246 1.246 0 0 0 1.245 1.245v6.225a1.246 1.246 0 0 0 1.245 1.245h9.96a1.246 1.246 0 0 0 1.245-1.245V18.75a1.246 1.246 0 0 0 1.245-1.245v-2.49a1.246 1.246 0 0 0-1.245-1.245zm-5.602-1.556a1.556 1.556 0 1 1 1.556 1.556h-1.556v-1.556zm-2.802-1.556a1.558 1.558 0 0 1 1.557 1.556v1.556H15.59a1.556 1.556 0 0 1 0-3.112zm-4.046 4.357h5.603v2.49h-5.603v-2.49zm1.245 3.735h4.358v6.225H12.79V18.75zm9.96 6.225h-4.357V18.75h4.357v6.225zm-4.357-7.47v-2.49h5.602v2.49h-5.602z" />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="ms-3">
                      <p className="mb-2 lh-1 text-black tx-14 font-500">
                        You earned cashback Redeem Now
                      </p>
                      <p className="mb-2 lh-1 tx-12 text-muted">
                        49 minute ago
                      </p>
                      <button type="submit" className="btn btn-primary btn-sm">
                        Redeem Now
                      </button>
                    </div>
                  </div>
                  <div>
                    <svg
                      width="5"
                      height="14"
                      viewBox="0 0 5 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="rotate(-180 2.056 6.719)"
                        fill="#AEAECD"
                        fillRule="evenodd"
                      >
                        <ellipse cx="1.562" cy="1.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="11.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="6.5" rx="1.562" ry="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card End */}

            <div className="py-0 px-0 mb-4">
              <div className="ntfn-card bg-white py-3 px-3">
                <div className="d-flex justify-between">
                  <div className="d-flex justify-between">
                    <div>
                      <img src={AxisbankIcon} height="21" className="me-2" />
                    </div>
                    <div className="ms-3">
                      <p className="mb-2 lh-1 text-black tx-14">
                        You EMI of (Rs. 12,366) has been <br />
                        successfully paid to be Axis Finance
                      </p>
                      <p className="mb-2 lh-1 tx-12 text-muted">
                        28 minute ago
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      width="5"
                      height="14"
                      viewBox="0 0 5 14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="rotate(-180 2.056 6.719)"
                        fill="#AEAECD"
                        fillRule="evenodd"
                      >
                        <ellipse cx="1.562" cy="1.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="11.5" rx="1.562" ry="1.5" />
                        <ellipse cx="1.562" cy="6.5" rx="1.562" ry="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
