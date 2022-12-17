import React, { useRef, useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import { useParams } from "react-router-dom";
import UseSignIn from "../Hooks/UseSignIn";

import { useHistory, useLocation } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function VerifyMobileNumber(props) {
  let history = useHistory();
  let location = useLocation();
  console.log(location, history);

  const [error, setError] = React.useState("");
  const [verifyError, setVerifyError] = React.useState("");
  //   verfication useState
  const [code1, setCode1] = React.useState();
  const [code2, setCode2] = React.useState();
  const [code3, setCode3] = React.useState();
  const [code4, setCode4] = React.useState();

  const { number } = useParams();

  const handleVerify = async () => {
    fetch(
      `https://api.payemi.net/checkotp/?phone=${number}&otp=${code1}${code2}${code3}${code4}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          setVerifyError(data.message);
        } else {
          localStorage.setItem("access_token", data?.access_token);
          localStorage.setItem("login_time", new Date());
          localStorage.setItem("profile", data?.id);
          localStorage.setItem("full_name", data?.fullname);
          const access_token = localStorage.getItem("access_token");
          if (access_token) {
            history.push("/home");
          }
        }
      });
  };

  const HandleSendOtp = async (number) => {
    localStorage.setItem("MobileNumber", number);
    fetch(`https://api.payemi.net/sendotp/?phone=${number}&source=reactapp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          setVerifyError(data?.message);
        } else {
          alert(`your verify code is ${data.payload}`);
        }
      });
  };

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
    HandleSendOtp(number);
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
    /* Bill Pay Step Seven */
  }
  const [BillPaySevenopen, BillPaySevensetOpen] = React.useState(false);

  // next input
  const handleFocus = (e) => {
   
    if (e.target.value) {
      if (e.target.nextSibling) {
        e.target.nextSibling.focus();
      }
    }
  };

  useEffect(() => {
    // handle send function call
    HandleSendOtp(number);
  }, [number]);

  return (
    <>
      <Dialog
        fullScreen
        open={true}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <div className="h-100 d-flex align-center justify-center signin">
          <div className="py-0 px-3">
            <div className="row">
              <div className="col-12">
                <div className="tx-40 font-300 text-center">Verify Number</div>
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
                    {twoDigits(minutesToDisplay)}: {twoDigits(secondsToDisplay)}
                  </p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="text-danger fw-bold">{verifyError}</p>
              </div>
            </div>
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
    </>
  );
}

export default VerifyMobileNumber;

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
