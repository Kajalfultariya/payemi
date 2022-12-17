import React, { useRef, useState, useEffect } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Slide from "@mui/material/Slide";
import AppBar from "@mui/material/AppBar";
import Dialog from "@mui/material/Dialog";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import Step1 from "../Static/Images/step1.webp";
import Step2 from "../Static/Images/step2.webp";
import Step3 from "../Static/Images/step3.webp";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
function OnboardingStep(props) {
  {
    /* Bill Pay */
  }
  const [open, setOpen] = React.useState(false);
  const BillPayClickOpen = () => {
    setOpen(true);
  };
  const BillPayClose = () => {
    setOpen(false);
  };

  {
    /* Bill Pay Step Two */
  }
  const [BillPayopen, BillPaysetOpen] = React.useState(false);
  const BillPaytwoClickOpen = () => {
    BillPaysetOpen(true);
  };
  const BillPaytwoClose = () => {
    BillPaysetOpen(false);
  };

  {
    /* Bill Pay Step Three */
  }
  const [BillPayThreeopen, BillPayThreesetOpen] = React.useState(false);
  const BillPayThreeClickOpen = () => {
    BillPayThreesetOpen(true);
  };
  const BillPayThreeClose = () => {
    BillPayThreesetOpen(false);
  };

  return (
    <>
      <div className="onboarding-step d-flex align-center justify-center">
        <div className="text-center">
          <div className="mb-5">
            <img src={Step1} className="w-75" />
          </div>
          <div className="mb-5">
            <p className="ms-1 mb-4 tx-20 text-center">
              <strong>Check Your Loan Status</strong>
            </p>
            <p className="text-muted lh-1 mt-1">
              Have an eye at each and every <br />
              loan in brief.
            </p>
          </div>
          <div className="btn-box">
            <button type="submit" className="btn btn-primary w-auto">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="14px"
                height="14px"
                viewBox="-423.8 494.7 14 14"
              >
                <g>
                  <g transform="translate(9 9)">
                    <path
                      fill="none"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                      d="M-428.7,486.9l5.8,5.8l-5.8,5.8"
                    />
                  </g>
                </g>
              </svg>
            </button>
            <CircularProgress />
          </div>
        </div>
      </div>

      {/* Bill Pay */}
      <Dialog
        fullScreen
        open={open}
        onClose={BillPayClose}
        TransitionComponent={Transition}
        className="side-pane"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header">
          <div className="d-flex align-center justify-between">
            <div onClick={BillPayClose} className="d-flex align-center">
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
              Bill Pay
            </div>
            <div>
              <img src={BharatBillpay} />
            </div>
          </div>
        </AppBar>
        <div className="py-0 px-0">
          <div className="container-fluid"></div>
        </div>
      </Dialog>

      {/* Bill Pay Step two */}
      <Dialog
        fullScreen
        open={BillPayopen}
        onClose={BillPaytwoClose}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header">
          <div className="d-flex align-center justify-between">
            <div onClick={BillPaytwoClose} className="d-flex align-center">
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
              Bill Pay
            </div>
            <div>
              <img src={BharatBillpay} />
            </div>
          </div>
        </AppBar>
        <div className="py-0 px-3">
          <div className="container-fluid"></div>
        </div>
      </Dialog>

      {/* Bill Pay Step Three */}
      <Dialog
        fullScreen
        open={BillPayThreeopen}
        onClose={BillPayThreeClose}
        TransitionComponent={Transition}
        className="side-pane side-pane-second"
      >
        <AppBar sx={{ position: "relative" }} className="side-pane-header">
          <div className="d-flex align-center justify-between">
            <div onClick={BillPayThreeClose} className="d-flex align-center">
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
              AXIS Bank
            </div>
            <div>
              <img src={BharatBillpay} />
            </div>
          </div>
        </AppBar>
        <div className="py-0 px-3">
          <div className="container-fluid"></div>
        </div>
      </Dialog>
    </>
  );
}

export default OnboardingStep;
