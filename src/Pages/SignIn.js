import React, { useRef, useState, useEffect } from "react";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import AxisHeader from "../Static/Images/axis-header.webp";
import Hdfc from "../Static/Images/hdfc.webp";
import DoneIcon from "../Static/Images/done-icon.webp";
import GooglePlay from "../Static/Images/google-play-logo.webp";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";

import Countdown from "react-countdown";
import { useHistory } from "react-router-dom";
import UseSignIn from "../Hooks/UseSignIn";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function SignIn(props) {
  // use sign in
  const {
    number,
    setNumber,
    verifyError,
    HandleSendOtp,
    setCode1,
    setCode2,
    setCode3,
    setCode4,
    handleVerify,
  } = UseSignIn();

  const STATUS = {
    STARTED: "Started",
    STOPPED: "Stopped",
  };

  const INITIAL_COUNT = 120;

  //   resend useState
  const [secondsRemaining, setSecondsRemaining] = React.useState(INITIAL_COUNT);
  const [status, setStatus] = React.useState(STATUS.STOPPED);

  //   time
  const secondsToDisplay = secondsRemaining % 60;
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60;
  const minutesToDisplay = minutesRemaining % 60;

  //   handle Resend Function
  const handleResend = () => {
    setStatus(STATUS.STARTED);
    setSecondsRemaining(120);
    BillPaySixClickOpen();
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
  {
    /* Bill Pay Step Six */
  }

  const [BillPaySixopen, BillPaySixsetOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  // bill pay six click open function
  const BillPaySixClickOpen = () => {
    if (number && number?.length === 10) {
      HandleSendOtp(number);
      BillPaySixsetOpen(true);
      setStatus(STATUS.STARTED);
    }
    // when not number given
    else if (number?.length === 0) {
      setError("Please Enter Your Mobile Number");
    }
    // when value is higher or lower
    else {
      setError("Please Enter Your Correct Number");
    }
  };

  const BillPaySixClose = () => {
    BillPaySixsetOpen(false);
  };

  {
    /* Bill Pay Step Seven */
  }
  const [BillPaySevenopen, BillPaySevensetOpen] = React.useState(false);
  const BillPaySevenClickOpen = () => {
    BillPaySevensetOpen(true);
  };
  const BillPaySevenClose = () => {
    BillPaySevensetOpen(false);
    BillPaySixsetOpen(false);
  };
  // next input
  const handleFocus = (e) => {

    //validation start
    const reg = /^[0-9\b]+$/
    let preval = e.target.value
    if (e.target.value === '' || reg.test(e.target.value)) {
      setError("  ")
    }
    else {
      e.target.value = preval.substring(0, (preval.length - 1))
      setError("Please Enter Only Number")
    }
    //validation end
    if (e.target.value) {
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  };

  return (
    <>
      <div className="h-100 d-flex align-center justify-center signin">
        <div className="py-0 px-3">
          <div className="row">
            <div className="col-12">
              <div className="tx-40 font-300 text-center">Sign In</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <div className="pt-2 pb-5">
                <p className="m-0 tx-14 text-center">
                  Sign in below to enjoy hassle free loan payment
                </p>
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-12">
              <div className="d-flex align-center number-box">
                <select className="form-select w-25">
                  <option value="">+91</option>
                  <option value="">+92</option>
                  <option value="">+93</option>
                </select>

                <input
                  name="Batch"
                  type="text"
                  value={number || ""}
                  onChange={(e) => setNumber(e.target.value)}
                  className="form-control w-75"
                  placeholder="Enter Your Mobile Number"
                ></input>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <p className="text-danger fw-bold">{error}</p>
          </div>
          <div className="row mb-3 pt-5">
            <div className="col-12">
              <button
                onClick={BillPaySixClickOpen}
                type="submit"
                className="btn btn-primary w-100"
              >
                Send OTP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 phone-base">
        {/* Bill Pay Step Six */}
        <Dialog
          fullScreen
          open={BillPaySixopen}
          onClose={BillPaySixClose}
          TransitionComponent={Transition}
          className="side-pane side-pane-second"
        >
          <div className="h-100 d-flex align-center justify-center signin">
            <div className="py-0 px-3">
              <div className="row">
                <div className="col-12">
                  <div className="tx-40 font-300 text-center">
                    Verify Number
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div className="pt-2 pb-5">
                    <p className="m-0 tx-14 text-center">
                      4 digit code sent to
                      <span className="text-black"> {number}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <div className="d-flex align-center number-otp justify-between">
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      maxLength={1}
                      onChange={handleFocus}
                      autoFocus={true}
                      onBlur={(e) => setCode1(e.target.value)}
                    ></input>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      maxLength={1}
                      onChange={handleFocus}
                      onBlur={(e) => setCode2(e.target.value)}
                    ></input>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      maxLength={1}
                      onChange={handleFocus}
                      onBlur={(e) => setCode3(e.target.value)}
                    ></input>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                      maxLength={1}
                      onChange={handleFocus}
                      onBlur={(e) => setCode4(e.target.value)}
                    ></input>
                  </div>
                  {status === STATUS.STOPPED ? (
                    <div className="m-0 mt-2 pe-3 tx-12 text-end">
                      <button onClick={handleResend} className="btn btn-danger">
                        Resend Code
                      </button>
                    </div>
                  ) : (
                    <p className="m-0 mt-2 pe-3 tx-12 text-end">
                      {twoDigits(minutesToDisplay)}:{" "}
                      {twoDigits(secondsToDisplay)}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text-danger fw-bold">{verifyError}</p>
                </div>
              </div>
              {error !== undefined && (
                <div className="text-danger">{error}</div>
              )}
              <div className="row mb-3">
                <div className="col-12">
                  <button
                    onClick={handleVerify}
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Verify Your Number
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default SignIn;

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
