import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";

// Images
import Hdfc from "../Static/Images/hdfc.webp";
import Car from "../Static/Images/car.webp";
import Upi from "../Static/Images/upi.webp";
import Phonepe from "../Static/Images/phonepe.webp";
import Gpay from "../Static/Images/gpay.webp";
import Bhim from "../Static/Images/bhim.webp";
import PhonepeIcon from "../Static/Images/phonepeicon.webp";
import MobiKwik from "../Static/Images/mobikwik.webp";
import AmazonPay from "../Static/Images/amazonpay.webp";
import Paytm from "../Static/Images/paytm.webp";
import AxisBank from "../Static/Images/axisbank.webp";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function AddCard(props) {
  {
    /* AddCard */
  }
  const [AddCard, AddCardsetOpen] = React.useState(false);
  const AddCardClickOpen = () => {
    AddCardsetOpen(true);
  };
  const AddCardClose = () => {
    AddCardsetOpen(false);
  };

  {
    /* Add UPI */
  }
  const [AddUpi, AddUpisetOpen] = React.useState(false);
  const AddUpiClickOpen = () => {
    AddUpisetOpen(true);
  };
  const AddUpiClose = () => {
    AddUpisetOpen(false);
  };

  {
    /* Add Select Wallet */
  }
  const [AddWallet, AddWalletsetOpen] = React.useState(false);
  const AddWalletClickOpen = () => {
    AddWalletsetOpen(true);
  };
  const AddWalletClose = () => {
    AddWalletsetOpen(false);
  };

  {
    /* Add Net Banking */
  }
  const [AddNetBanking, AddNetBankingsetOpen] = React.useState(false);
  const AddNetBankingClickOpen = () => {
    AddNetBankingsetOpen(true);
  };
  const AddNetBankingClose = () => {
    AddNetBankingsetOpen(false);
  };

  return (
    <>
      <div className="h-100">
        <div className="side-pane">
          <div className="d-flex align-center justify-between side-pane-header pt-3 pb-3">
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
              <img src={Hdfc} height="30" className="me-2" />
              <div>
                <img src={Car} height="22" className="me-2 ms-2" />
              </div>
            </div>
            <div>
              <p className="mb-1 tx-12">Pending Amount</p>
              <p className="mb-0 tx-16 text-black">
                <strong>Rs. 13,000</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray h-100 py-4">
          <div className="py-0 px-3">
            <p className="mb-1 tx-12">Credit/Debit Card</p>
          </div>
          <div className="py-0 px-0 mb-4">
            <div className="pay-card bg-white  saved-card-box">
              <div className="accordion border-bottom" id="accordionExample">
                <div className="accordion-item border-bottom">
                  <h2 className="accordion-header" id="headingOne">
                    <div
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="row align-center">
                        <div className="col-2">
                          <img src={AxisBank} />
                        </div>
                        <div className="col-10">
                          <div className="row justify-content-between">
                            <div className="col-12">
                              <p className="mb-1 tx-12">9876-xxxx-xxxx-1234</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row justify-content-between">
                        <div className="col-2"></div>
                        <div className="col-10">
                          <div className="row align-end justify-content-between">
                            <div className="col-3 pe-0">
                              <label className="col-form-label pt-0 tx-10 pb-0">
                                CVV
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-9">
                              <button
                                type="submit"
                                className="btn btn-success w-100"
                              >
                                Pay
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <div
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="row align-center">
                        <div className="col-2">
                          <img src={AxisBank} />
                        </div>
                        <div className="col-10">
                          <div className="row justify-content-between">
                            <div className="col-12">
                              <p className="mb-1 tx-12">9876-xxxx-xxxx-1234</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row justify-content-between">
                        <div className="col-2"></div>
                        <div className="col-10">
                          <div className="row align-end justify-content-between">
                            <div className="col-3 pe-0">
                              <label className="col-form-label pt-0 tx-10 pb-0">
                                CVV
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="col-9">
                              <button
                                type="submit"
                                className="btn btn-success w-100"
                              >
                                Pay
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pay-card bg-white py-3 px-3"
              onClick={AddCardClickOpen}
            >
              <div className="d-flex align-center justify-between">
                <div className="d-flex align-center justify-between">
                  <div>
                    <svg
                      width="29"
                      height="21"
                      viewBox="0 0 29 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#000" fillRule="nonzero" opacity=".55">
                        <path d="M25.8 0H3a3.036 3.036 0 0 0-3 3v14.4a3.036 3.036 0 0 0 3 3h22.8a3.036 3.036 0 0 0 3-3V3a3.036 3.036 0 0 0-3-3zM3 1.2h22.8A1.83 1.83 0 0 1 27.6 3v3H1.2V3A1.83 1.83 0 0 1 3 1.2zm22.8 18H3a1.83 1.83 0 0 1-1.8-1.8V7.2h26.4v10.2a1.83 1.83 0 0 1-1.8 1.8z" />
                        <path d="M3.6 10.8h6V12h-6z" />
                      </g>
                    </svg>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 lh-1 text-black tx-12">
                      <strong>Add New Card</strong>
                    </p>
                    <p className="mb-0 lh-1 tx-12">Save a pay via card</p>
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.317 11.201 9.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                      fill="#1A1A1A"
                      fillRule="evenodd"
                      opacity=".46"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Card End */}

          <div className="py-0 px-3">
            <p className="mb-1 tx-12">Pay via UPI</p>
          </div>
          <div className="py-0 px-0 mb-4">
            <div className="pay-card bg-white py-3 px-3 border-bottom">
              <div className="d-flex align-center justify-between">
                <div className="d-flex align-center justify-between">
                  <div>
                    <img src={Upi} height="18" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 lh-1 text-black tx-14">Google Pay</p>
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.317 11.201 9.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                      fill="#1A1A1A"
                      fillRule="evenodd"
                      opacity=".46"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="pay-card bg-white py-3 px-3"
              onClick={AddUpiClickOpen}
            >
              <div className="d-flex align-center justify-between">
                <div className="d-flex justify-between">
                  <div>
                    <img src={Upi} height="18" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 lh-1 text-black tx-12">
                      <strong>Add New UPI ID</strong>
                    </p>
                    <p className="mb-2 lh-1 tx-12">
                      You need to have a registered UPI ID
                    </p>
                    <div className="d-flex align-center">
                      <img src={Gpay} height="21" className="me-3" />
                      <img src={Bhim} height="12" className="me-3" />
                      <img src={Phonepe} height="19" className="me-3" />
                    </div>
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.317 11.201 9.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                      fill="#1A1A1A"
                      fillRule="evenodd"
                      opacity=".46"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Card End */}

          <div className="py-0 px-3">
            <p className="mb-1 tx-12">Wallet</p>
          </div>
          <div className="py-0 px-0 mb-4">
            <div className="pay-card bg-white py-3 px-3 border-bottom">
              <div className="d-flex align-center justify-between mb-2">
                <div className="d-flex align-center justify-between">
                  <div>
                    <img src={Paytm} height="17" />
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 lh-1 text-black tx-14">Paytm</p>
                  </div>
                </div>
                <div className="d-flex align-center">
                  <p className="mb-0 lh-1 text-black tx-12">Rs.2.36</p>
                  <input
                    className="form-check-input mt-0 ms-3"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                </div>
              </div>
              <p className="tx-11 mb-0 mt-1 text-danger">
                Low balance. You need <strong>Rs.12,997.64</strong> more in your
                account.
              </p>
            </div>
            <div
              className="pay-card bg-white py-3 px-3"
              onClick={AddWalletClickOpen}
            >
              <div className="d-flex align-center justify-between">
                <div className="d-flex align-center justify-between">
                  <div>
                    <svg
                      width="29"
                      height="27"
                      viewBox="0 0 29 27"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#000" fillRule="nonzero" opacity=".55">
                        <path d="M26.4 6V0L2.256 2.298A2.478 2.478 0 0 0 0 4.77v16.284A5.4 5.4 0 0 0 5.4 26.4h18a5.359 5.359 0 0 0 5.4-5.34V6h-2.4zM2.37 3.492 25.2 1.32V6H2.502A1.272 1.272 0 0 1 1.2 4.74a1.254 1.254 0 0 1 1.17-1.248zM27.6 18.6h-5.4a3 3 0 0 1 0-6h5.4v6zm-5.4-7.2a4.2 4.2 0 0 0 0 8.4h5.4v1.26a4.152 4.152 0 0 1-4.2 4.14h-18a4.152 4.152 0 0 1-4.2-4.14V6.894c.397.22.848.327 1.302.306H27.6v4.2h-5.4z" />
                        <circle cx="22.8" cy="15.6" r="1.2" />
                      </g>
                    </svg>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 lh-1 text-black tx-12">
                      <strong>Add Wallets</strong>
                    </p>
                    <p className="mb-0 lh-1 tx-12">
                      Paytm, PhonePe, Amazon Pay & more
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.317 11.201 9.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                      fill="#1A1A1A"
                      fillRule="evenodd"
                      opacity=".46"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Card End */}

          <div className="py-0 px-3">
            <p className="mb-1 tx-12">Netbanking</p>
          </div>
          <div className="py-0 px-0 mb-4">
            <div className="pay-card bg-white pt-3 pt-3">
              <div className="px-4 pb-3 pt-0 d-flex align-center bank-row justify-content-between border-bottom">
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
              </div>
            </div>
            <div
              className="pay-card bg-white py-3 px-3"
              onClick={AddNetBankingClickOpen}
            >
              <div className="d-flex align-center justify-between">
                <div className="d-flex align-center justify-between">
                  <div>
                    <svg
                      width="29"
                      height="29"
                      viewBox="0 0 29 29"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.8 8.4V4.974L14.4 0 0 4.974V8.4h3.6v14.4H3a3 3 0 0 0-3 3v3h28.8v-3a3 3 0 0 0-3-3h-.6V8.4h3.6zM1.2 7.2V5.826l13.2-4.554 13.2 4.554V7.2H1.2zM12 22.8H8.4V8.4H12v14.4zm1.2-14.4h2.4v14.4h-2.4V8.4zm3.6 0h3.6v14.4h-3.6V8.4zm-12 0h2.4v14.4H4.8V8.4zm21 15.6a1.8 1.8 0 0 1 1.8 1.8v1.8H1.2v-1.8A1.8 1.8 0 0 1 3 24h22.8zM24 22.8h-2.4V8.4H24v14.4z"
                        fill="#000"
                        fillRule="nonzero"
                        opacity=".55"
                      />
                    </svg>
                  </div>
                  <div className="ms-3">
                    <p className="mb-0 lh-1 text-black tx-12">
                      <strong>Netbanking</strong>
                    </p>
                    <p className="mb-0 lh-1 tx-12">
                      Select from a list of banks
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.317 11.201 9.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                      fill="#1A1A1A"
                      fillRule="evenodd"
                      opacity=".46"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Card */}
      <Dialog
        fullScreen
        open={AddCard}
        onClose={AddCardClose}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header pb-2">
          <div className="d-flex align-center justify-between pb-0">
            <div className="d-flex align-center">
              <a onClick={AddCardClose}>
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
              </a>
              <p className="mb-0 tx-16">Add New Card</p>
            </div>
          </div>
        </AppBar>
        <div className="h-100">
          <div className="home-base home-base-notification h-100">
            <div className="h-100 py-4 px-0">
              <div className="bg-gray px-4 py-3 mb-3">
                <div className="d-flex align-center justify-between">
                  <div className="d-flex align-center">
                    <img src={Hdfc} height="30" className="me-2" />
                    <img src={Car} height="22" className="me-2 ms-2" />
                  </div>
                  <div>
                    <p className="mb-0 tx-12">Pending Amount</p>
                    <p className="mb-0 tx-16 text-black">
                      <strong>Rs. 13,000</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-3">
                <div className="row">
                  <div className="col-12">
                    <label className="col-form-label pt-0">Card number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Card Number"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 pt-0 mb-3">
                <div className="row mb-4">
                  <div className="col-12">
                    <label className="col-form-label pt-0">
                      Name of the card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name of the card"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 pt-0 mb-3">
                <div className="row mb-4">
                  <div className="col-6">
                    <label className="col-form-label pt-0">Valid Through</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="col-6">
                    <label className="col-form-label pt-0">CVV</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name of the card"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 pt-0 mb-3">
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Securely save card details
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-0 mb-3">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100">
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Add UPI */}
      <Dialog
        fullScreen
        open={AddUpi}
        onClose={AddUpiClose}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header pb-2">
          <div className="d-flex align-center justify-between pb-0">
            <div className="d-flex align-center">
              <a onClick={AddUpiClose}>
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
              </a>
              <p className="mb-0 tx-16">Add New UPI ID</p>
            </div>
          </div>
        </AppBar>
        <div className="h-100">
          <div className="home-base home-base-notification h-100">
            <div className="h-100 py-4 px-0">
              <div className="bg-gray px-4 py-3 mb-3">
                <div className="d-flex align-center justify-between">
                  <div className="d-flex align-center">
                    <img src={Hdfc} height="30" className="me-2" />
                    <img src={Car} height="22" className="me-2 ms-2" />
                  </div>
                  <div>
                    <p className="mb-0 tx-12">Pending Amount</p>
                    <p className="mb-0 tx-16 text-black">
                      <strong>Rs. 13,000</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-3">
                <div className="row">
                  <div className="col-12">
                    <label className="col-form-label pt-0">UPI ID/ VPA</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your UPI ID"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 pt-0 mb-3">
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Securely VPA
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 pt-0 mb-3">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary w-100">
                    Verify and Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Add Select Wallet */}
      <Dialog
        fullScreen
        open={AddWallet}
        onClose={AddWalletClose}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header pb-2">
          <div className="d-flex align-center justify-between pb-0">
            <div className="d-flex align-center">
              <a onClick={AddWalletClose}>
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
              </a>
              <p className="mb-0 tx-16">Select Wallet</p>
            </div>
          </div>
        </AppBar>
        <div className="h-100">
          <div className="home-base home-base-notification h-100">
            <div className="h-100 py-3 px-0">
              <div className="bg-gray px-4 py-3 mb-0">
                <div className="d-flex align-center justify-between">
                  <div className="d-flex align-center">
                    <img src={Hdfc} height="30" className="me-2" />
                    <img src={Car} height="22" className="me-2 ms-2" />
                  </div>
                  <div>
                    <p className="mb-0 tx-12">Pending Amount</p>
                    <p className="mb-0 tx-16 text-black">
                      <strong>Rs. 13,000</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <div className="d-flex align-center">
                      <div style={{ width: "76px" }}>
                        <img src={Paytm} height="17" className="me-2" />
                      </div>
                      <p className="mb-0 tx-14">Paytm</p>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/" className="text-success">
                      Link Account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <div className="d-flex align-center">
                      <div style={{ width: "76px" }}>
                        <img src={AmazonPay} height="27" className="me-2" />
                      </div>
                      <p className="mb-0 tx-14">Amazon Pay</p>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/" className="text-success">
                      Link Account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <div className="d-flex align-center">
                      <div style={{ width: "76px" }}>
                        <img src={MobiKwik} height="26" className="me-2" />
                      </div>
                      <p className="mb-0 tx-14">Mobikwik</p>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/" className="text-success">
                      Link Account
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <div className="d-flex align-center">
                      <div style={{ width: "76px" }}>
                        <img src={PhonepeIcon} height="29" className="me-2" />
                      </div>
                      <p className="mb-0 tx-14">Phone Pe</p>
                    </div>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/" className="text-success">
                      Link Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Add Net Banking */}
      <Dialog
        fullScreen
        open={AddNetBanking}
        onClose={AddNetBankingClose}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header pb-2">
          <div className="d-flex align-center justify-between pb-0">
            <div className="d-flex align-center">
              <a onClick={AddNetBankingClose}>
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
              </a>
              <p className="mb-0 tx-16">Net Banking</p>
            </div>
          </div>
        </AppBar>
        <div className="h-100">
          <div className="home-base home-base-notification h-100">
            <div className="h-100 px-0">
              <div className="mb-4 px-4 pb-3 pt-2 d-flex align-center bank-row justify-content-between border-bottom">
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
                <img src={Hdfc} height="30" className="me-2" />
              </div>
              <div className="px-4 mb-3">
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Bank"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">Axis Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">Bandhan Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">Catholic Syrian Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">City Union Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">DCB Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">Dhanlaxmi Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">Federal Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">HDFC Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">ICICI Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">IDBI Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">IDFC First Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="px-4 mb-0 py-3 border-bottom">
                <div className="row">
                  <div className="col-7">
                    <p className="mb-0 tx-14">IndusInd Bank</p>
                  </div>
                  <div className="col-5 text-end">
                    <Link to="/">
                      <svg
                        width="23"
                        height="23"
                        viewBox="0 0 23 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.317 11.201 8.61 7.496a.7.7 0 1 1 .99-.99l4.203 4.2a.7.7 0 0 1 0 .99l-4.203 4.2a.7.7 0 0 1-.99-.99l3.707-3.705z"
                          fill="#1A1A1A"
                          fillRule="evenodd"
                          opacity=".442"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default AddCard;
