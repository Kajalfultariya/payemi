import React, { useRef, useState, useEffect } from "react";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import MoneyDag from "../Static/Images/money_bag.webp";
import Building from "../Static/Images/building.webp";
import CableTv from "../Static/Images/cable_tv.webp";
import Charge from "../Static/Images/charge.webp";
import Club from "../Static/Images/club.webp";
import CreditCard from "../Static/Images/credit_card.webp";
import Fire from "../Static/Images/fire.webp";
import GasTank from "../Static/Images/gas_tank.webp";
import Hospital from "../Static/Images/hospital.webp";
import Landline from "../Static/Images/landline.webp";
import LifeInsurance from "../Static/Images/life_insurance.webp";
import Lightning from "../Static/Images/lightning.webp";
import Router from "../Static/Images/router.webp";
import Service from "../Static/Images/service.webp";
import Smartphone from "../Static/Images/smartphone.webp";
import Subscribe from "../Static/Images/subscribe.webp";
import Tax from "../Static/Images/tax.webp";
import TollRoad from "../Static/Images/toll_road.webp";
import Transmitter from "../Static/Images/transmitter.webp";
import Waterdrop from "../Static/Images/waterdrop.webp";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
function BillPayCategory(props) {
  const BillPayClose = () => {
    window.location.href = "/category";
  };

  const BillPaytwoClickOpen = () => {
    window.location.href = "/all-bank";
    window.location.reload();
  };

  return (
    <>
      <div className="px-4 phone-base">
        <Dialog
          fullScreen
          open={true}
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
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-4 pe-1">
                  <Button
                    variant="outlined"
                    onClick={BillPaytwoClickOpen}
                    className="side-pane-btn"
                  >
                    <img src={MoneyDag} />
                    <p className="mb-0">Pay EMI</p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Smartphone} />
                    <p className="mb-0">Mobile</p>
                  </Button>
                </div>
                <div className="col-4 ps-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Landline} />
                    <p className="mb-0">Landline</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Transmitter} />
                    <p className="mb-0">DTH</p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Lightning} />
                    <p className="mb-0">Electricity</p>
                  </Button>
                </div>
                <div className="col-4 ps-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Fire} />
                    <p className="mb-0">Piped Gas</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Waterdrop} />
                    <p className="mb-0">Water</p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Router} />
                    <p className="mb-0">Broadband</p>
                  </Button>
                </div>
                <div className="col-4 ps-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={GasTank} />
                    <p className="mb-0">LPG Cylinder</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={TollRoad} />
                    <p className="mb-0">Fast Tag</p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={CableTv} />
                    <p className="mb-0">Cable TV</p>
                  </Button>
                </div>
                <div className="col-4 ps-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={LifeInsurance} />
                    <p className="mb-0">Insurance</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Building} />
                    <p className="mb-0">Housing Society</p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Tax} />
                    <p className="mb-0">Municipal Taxes</p>
                  </Button>
                </div>
                <div className="col-4 ps-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Charge} />
                    <p className="mb-0">Education Fees</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-4 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Club} />
                    <p className="mb-0">Clubs and Associations </p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={CreditCard} />
                    <p className="mb-0">Credit Card</p>
                  </Button>
                </div>
                <div className="col-4 ps-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Hospital} />
                    <p className="mb-0">Hospital and Pathology</p>
                  </Button>
                </div>
              </div>
              <div className="row">
                <div className="col-4 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Service} />
                    <p className="mb-0">Municipal Services</p>
                  </Button>
                </div>
                <div className="col-4 ps-1 pe-1">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Subscribe} />
                    <p className="mb-0">Subscription</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default BillPayCategory;
