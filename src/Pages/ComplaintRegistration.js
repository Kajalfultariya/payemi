import React, { useRef, useState, useEffect } from "react";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import OtpMobile from "../Static/Images/otp-mobile.webp";

import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import UseSignIn from "../Hooks/UseSignIn";

function ComplaintRegistration(props) {
  const [OtpOpen, setOtpOpen] = React.useState(false);
  const [OtpOpenDiv, setOtpOpenDiv] = React.useState(false);
  const [ComplaintOpenDiv, setComplaintOpenDiv] = React.useState(false);
  const [Number, setNumber] = React.useState();
  const [NumberCheck, setNumberCheck] = React.useState(false);
  const [OtpNumber, setOtpNumber] = React.useState();
  const [NumberError, setNumberError] = React.useState("");
  const [OtpNumberError, setOtpNumberError] = React.useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
  };

  const INITIAL_COUNT = 15;

  //   resend useState
  const [secondsRemaining, setSecondsRemaining] = React.useState(INITIAL_COUNT);
  const [status, setStatus] = React.useState(STATUS.STOPPED);

  const { HandleSendOtp, handleVerify } = UseSignIn();

  const handleOpen = () => {
    if (Number && Number?.length >= 10) {
      setOtpOpen(true);
      setOtpOpenDiv(true);
      setNumberError("");
      HandleSendOtp(Number);
      setNumberCheck(true);
      setStatus(STATUS.STARTED);
    } else if (Number?.length < 10) {
      setNumberError("Please Enter Your Correct Number");
    } else {
      setNumberError("Please Enter Your Mobile Number");
    }
  };
  const handleClose = () => setOtpOpen(false);

  const [ComplaintOpen, setComplaintOpen] = React.useState(false);
  const handleComplaintOpen = () => setComplaintOpen(true);
  const handleComplaintClose = () => setComplaintOpen(false);
  const handleVerifyOpen = () => {
    if (OtpNumber) {
      setComplaintOpenDiv(true);
      setOtpNumberError("");
    } else {
      setOtpNumberError("Please Enter Your Otp Number");
    }
  };

  //   time
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  //   handle Resend Function
  const handleResend = () => {
    setStatus(STATUS.STARTED);
    setSecondsRemaining(120);
    handleOpen();
  };
  //   useinterval
  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        setStatus(STATUS.STOPPED);
      }
    },
    status === STATUS.STARTED ? 1000 : null
    // passing null stops the interval
  );

  const onSubmit = (data) => {
    console.log(data);
    setComplaintOpen(true);
    reset();
  };

  return (
    <>
      <div className="px-4 complaint-tracking">
        <div className="d-flex align-center justify-between top-header">
          <p className="mb-0 tx-16">Complaint & Tracking</p>
          <div>
            <img src={BharatBillpay} />
          </div>
        </div>
        <div className="row mb-1">
          <div className="col-12">
            <div className="tx-16 text-muted">Complaints</div>
          </div>
        </div>

        <ul
          className="nav nav-tabs complaint-tabs mb-4"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="registration-tab"
              data-bs-toggle="tab"
              data-bs-target="#registration"
              type="button"
              role="tab"
              aria-controls="registration"
              aria-selected="true"
            >
              <div></div> Registration
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="tracking-tab"
              data-bs-toggle="tab"
              data-bs-target="#tracking"
              type="button"
              role="tab"
              aria-controls="tracking"
              aria-selected="false"
            >
              <div></div> Tracking
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="registration"
            role="tabpanel"
            aria-labelledby="registration-tab"
          >
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="Batch" className="col-form-label pt-0">
                  Complaint Type
                </label>
                <select className="form-select">
                  <option value="">Select Complaint Type</option>
                  <option value="">Complaint Type 1</option>
                  <option value="">Complaint Type 2</option>
                </select>
              </div>
            </div>
            <div className="row mb-4 position-relative mobile-otp">
              <div className="col-12">
                <label htmlFor="Batch" className="col-form-label pt-0">
                  Mobile Number
                </label>
                <input
                  onBlur={(e) => setNumber(e.target.value)}
                  name="Batch"
                  type="text"
                  className="form-control"
                  disabled={NumberCheck}
                />
                {NumberCheck ? (
                  status === STATUS.STOPPED ? (
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={handleResend}
                    >
                      Resend Otp
                    </button>
                  ) : (
                    <button type="button" className="btn btn-link">
                      <span> resend otp at </span>
                      <span>
                        {twoDigits(minutesToDisplay)}:
                        {twoDigits(secondsToDisplay)}
                      </span>
                    </button>
                  )
                ) : (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleOpen}
                  >
                    Send OTP
                  </button>
                )}
              </div>
            </div>
            <p className="text-danger">{NumberError}</p>

            {OtpOpenDiv && (
              <div className="row mb-4 position-relative mobile-otp">
                <div className="col-12">
                  <label htmlFor="Batch" className="col-form-label pt-0">
                    OTP
                  </label>
                  <input
                    name="Batch"
                    type="text"
                    className="form-control"
                    onBlur={(e) => setOtpNumber(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleVerifyOpen}
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}
            <p className="text-danger">{OtpNumberError}</p>
            {ComplaintOpenDiv && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-gray nagative-margin py-4 px-4"
              >
                <div className="row mb-4">
                  <div className="col-12">
                    <label htmlFor="Batch" className="col-form-label pt-0">
                      Complaint Id
                    </label>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      {...register("complaint-id")}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <label
                      htmlFor="Batch"
                      className="col-form-label pt-0"
                      required
                    >
                      Complaint Status
                    </label>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      {...register("complaint-status")}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <label htmlFor="Batch" className="col-form-label pt-0">
                      Complaint Assigned
                    </label>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      {...register("complaint-assigned")}
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div
            className="tab-pane fade"
            id="tracking"
            role="tabpanel"
            aria-labelledby="tracking-tab"
          >
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="Batch" className="col-form-label pt-0">
                  Complaint Type
                </label>
                <select className="form-select">
                  <option value="">Select Complaint Type</option>
                  <option value="">Transaction Based Complaint</option>
                  <option value="">Transaction Based Complaint</option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <label htmlFor="Batch" className="col-form-label pt-0">
                  Complaint Id
                </label>
                <input name="Batch" type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <button
                  onClick={handleComplaintOpen}
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* OTP */}
        <Modal
          open={OtpOpen}
          onClose={handleClose}
          className="modal-alert"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-wrap text-center">
            <img src={OtpMobile} className="w-50 mb-3" />
            <p className="text-black mb-0 tx-16">
              OTP has been sent on {Number}
            </p>
            <div className="mo-close">
              <a onClick={handleClose} type="submit" className="btn btn-link">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.928 3.072c-4.095-4.096-10.76-4.096-14.856 0s-4.096 10.76 0 14.856 10.76 4.096 14.856 0 4.096-10.76 0-14.856zm-3.285 11.57a.808.808 0 0 1-1.143 0l-3-3-3.142 3.143a.808.808 0 1 1-1.143-1.143L9.357 10.5l-3-3A.808.808 0 1 1 7.5 6.357l3 3L13.357 6.5A.808.808 0 1 1 14.5 7.643L11.643 10.5l3 3a.808.808 0 0 1 0 1.142z"
                    fill="#696969"
                    fillRule="nonzero"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Modal>

        {/* Complaint Registered */}
        <Modal
          open={ComplaintOpen}
          onClose={handleComplaintClose}
          className="modal-alert"
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="modal-wrap">
            <p className="text-black mb-0 tx-16">
              Your complaint has been registered successfully.
            </p>
            <p className="text-black mb-0 tx-16">
              Your complaint Id is
              <strong>
                <u>PE82908377</u>
              </strong>
              assigned to
              <strong>
                <u>AXIS Finance Bank</u>
              </strong>
              . You can track status of your complaint using your complaint Id.
            </p>
            <div className="mo-close">
              <a
                onClick={handleComplaintClose}
                type="submit"
                className="btn btn-link"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.928 3.072c-4.095-4.096-10.76-4.096-14.856 0s-4.096 10.76 0 14.856 10.76 4.096 14.856 0 4.096-10.76 0-14.856zm-3.285 11.57a.808.808 0 0 1-1.143 0l-3-3-3.142 3.143a.808.808 0 1 1-1.143-1.143L9.357 10.5l-3-3A.808.808 0 1 1 7.5 6.357l3 3L13.357 6.5A.808.808 0 1 1 14.5 7.643L11.643 10.5l3 3a.808.808 0 0 1 0 1.142z"
                    fill="#696969"
                    fillRule="nonzero"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default ComplaintRegistration;

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const twoDigits = (num) => String(num).padStart(2, "0");
