import React, { useRef, useState, useEffect } from "react";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import Banner from "../Static/Images/banner.png";
import BillPay from "../Static/Images/Bill-Pay.png";
import DematAC from "../Static/Images/Demat-AC.png";
import Forex from "../Static/Images/Forex.png";
import Insurance from "../Static/Images/Insurance.png";
import Loan from "../Static/Images/Loan.png";
import Travel from "../Static/Images/Travel.png";
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

import AllahabadBank from "../Static/Images/Allahabad-Bank.webp";
import AXISBank from "../Static/Images/AXIS-Bank.webp";
import BajajFinserv from "../Static/Images/Bajaj-Finserv.webp";
import BankofBaroda from "../Static/Images/Bank-of-Baroda.webp";
import Citi from "../Static/Images/citi.webp";
import Edelweiss from "../Static/Images/Edelweiss.webp";
import ABCGroup from "../Static/Images/group_3.webp";
import HDFCBank from "../Static/Images/HDFC-Bank.webp";
import HSBCBank from "../Static/Images/HSBC-Bank.webp";
import ICICIBank from "../Static/Images/ICICI-Bank.webp";
import IDFCFirst from "../Static/Images/IDFC-First.webp";
import KotakBank from "../Static/Images/Kotak-Bank.webp";
import Other from "../Static/Images/other.webp";
import SBIBank from "../Static/Images/SBI-Bank.webp";
import TVS from "../Static/Images/TVS.webp";

import AxisbankIcon from "../Static/Images/axisbank.webp";
import AxisF from "../Static/Images/axis-f.webp";
import ABank from "../Static/Images/A-bank.webp";
import axisfin from "../Static/Images/axis-fin.webp";
import AxisHeader from "../Static/Images/axis-header.webp";
import Hdfc from "../Static/Images/hdfc.webp";
import DoneIcon from "../Static/Images/done-icon.webp";
import GooglePlay from "../Static/Images/google-play-logo.webp";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Dashboard(props) {
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
  let history = useHistory();
  const [BillPayopen, BillPaysetOpen] = React.useState(false);
  const BillPaytwoClickOpen = () => {
    // BillPaysetOpen(true);
    history.push("/bank-pay-emi");
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

  {
    /* Bill Pay Step Four */
  }
  const [BillPayFouropen, BillPayFoursetOpen] = React.useState(false);
  const BillPayFourClickOpen = () => {
    BillPayFoursetOpen(true);
  };
  const BillPayFourClose = () => {
    BillPayFoursetOpen(false);
  };

  {
    /* Bill Pay Step Five */
  }
  const [BillPayFiveopen, BillPayFivesetOpen] = React.useState(false);
  const BillPayFiveClickOpen = () => {
    BillPayFivesetOpen(true);
  };
  const BillPayFiveClose = () => {
    BillPayFivesetOpen(false);
  };

  {
    /* Bill Pay Step Six */
  }
  const [BillPaySixopen, BillPaySixsetOpen] = React.useState(false);
  const BillPaySixClickOpen = () => {
    BillPaySixsetOpen(true);
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
    BillPayFivesetOpen(false);
    BillPayFoursetOpen(false);
    BillPayThreesetOpen(false);
    BillPaysetOpen(false);
    setOpen(false);
  };

  return (
    <>
      <div className="px-4 phone-base">
        <div className="d-flex align-center justify-between top-header">
          <h1>PayEMI</h1>
          <div>
            <img src={BharatBillpay} />
          </div>
        </div>
        <div className="banner mb-4">
          <img src={Banner} className="w-100" />
        </div>

        <div className="dash-nav">
          <div className="row">
            <div className="col-6">
              <Button
                variant="outlined"
                className="dash-btn"
                onClick={BillPayClickOpen}
              >
                <img src={BillPay} />
                <p className="mb-1">Bill Pay</p>
                <p className="mb-0">
                  <span>Pay your EMI</span>
                </p>
              </Button>
            </div>
            <div className="col-6">
              <Button
                variant="outlined"
                className="dash-btn"
                onClick={BillPayClickOpen}
              >
                <img src={Loan} />
                <p className="mb-0">Loan</p>
                <p className="mb-0">
                  <span>Get Loan in 5 Min</span>
                </p>
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Button
                variant="outlined"
                className="dash-btn"
                onClick={BillPayClickOpen}
              >
                <img src={DematAC} />
                <p className="mb-0">Demat A/C</p>
                <p className="mb-0">
                  <span>Open your Account</span>
                </p>
              </Button>
            </div>
            <div className="col-6">
              <Button
                variant="outlined"
                className="dash-btn"
                onClick={BillPayClickOpen}
              >
                <img src={Forex} />
                <p className="mb-0">Forex</p>
                <p className="mb-0">
                  <span>Money Exchange</span>
                </p>
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <Button
                variant="outlined"
                className="dash-btn"
                onClick={BillPayClickOpen}
              >
                <img src={Travel} />
                <p className="mb-0">Travel</p>
                <p className="mb-0">
                  <span>Dream comes true</span>
                </p>
              </Button>
            </div>
            <div className="col-6">
              <Button
                variant="outlined"
                className="dash-btn"
                onClick={BillPayClickOpen}
              >
                <img src={Insurance} />
                <p className="mb-0">Insurance</p>
                <p className="mb-0">
                  <span>For your Family</span>
                </p>
              </Button>
            </div>
          </div>
        </div>
        <div className="bottom-menu d-flex justify-between px-4 py-3 d-flex">
          <a href="#" className="active">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.51 14.646a.704.704 0 0 0-.596-.727 9.7 9.7 0 0 1-2.123-.53.7.7 0 0 0-.736.156l-.89.889a.7.7 0 0 1-.841.113 11.904 11.904 0 0 1-4.465-4.463.7.7 0 0 1 .114-.84l.886-.887a.7.7 0 0 0 .157-.74 9.67 9.67 0 0 1-.527-2.114.702.702 0 0 0-.708-.602h-2.1a.7.7 0 0 0-.698.752 13.158 13.158 0 0 0 2.045 5.768 12.962 12.962 0 0 0 3.992 3.989 13.153 13.153 0 0 0 5.726 2.039.7.7 0 0 0 .764-.703v-2.1zm1.4.008v2.09a2.1 2.1 0 0 1-2.302 2.098 14.558 14.558 0 0 1-6.345-2.254 14.348 14.348 0 0 1-4.414-4.41 14.56 14.56 0 0 1-2.26-6.388A2.1 2.1 0 0 1 5.68 3.5h2.095a2.103 2.103 0 0 1 2.102 1.813c.081.62.233 1.228.451 1.813a2.101 2.101 0 0 1-.475 2.218l-.503.502a10.504 10.504 0 0 0 3.212 3.21l.505-.504a2.101 2.101 0 0 1 2.215-.473c.586.218 1.195.37 1.821.452a2.1 2.1 0 0 1 1.808 2.123z"
                fill="#a1a1a1"
                fillRule="evenodd"
              />
            </svg>
            Help
          </a>
          <a href="#">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#a1a1a1" fillRule="evenodd">
                <path d="M17.712 13.652a.7.7 0 0 1 1.29.545A7.705 7.705 0 0 1 4.28 12.28a7.7 7.7 0 0 1 4.546-8.14.7.7 0 0 1 .56 1.283 6.3 6.3 0 0 0 1.707 12.023 6.304 6.304 0 0 0 6.62-3.794z" />
                <path d="M19.611 11.201a.7.7 0 0 1-.7.7h-7.004a.7.7 0 0 1-.7-.7v-7a.7.7 0 0 1 .7-.7 7.706 7.706 0 0 1 7.704 7.7zm-3.247-4.455a6.305 6.305 0 0 0-3.757-1.806V10.5h5.564a6.3 6.3 0 0 0-1.807-3.755z" />
              </g>
            </svg>
            Report
          </a>
          <a href="#">
            <svg
              width="23"
              height="23"
              viewBox="0 0 23 23"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.409 12.602v-3.5c0-2.32-1.882-4.201-4.203-4.201a4.201 4.201 0 0 0-4.202 4.2v3.5c0 .51-.136.989-.375 1.4h9.155a2.787 2.787 0 0 1-.375-1.4zm2.801 2.8H4.202c-.933 0-.933-1.4 0-1.4a1.4 1.4 0 0 0 1.401-1.4v-3.5c0-3.094 2.509-5.602 5.603-5.602a5.602 5.602 0 0 1 5.604 5.601v3.5a1.4 1.4 0 0 0 1.4 1.4c.934 0 .934 1.4 0 1.4zm-5.186 2.451a2.101 2.101 0 0 1-3.635 0 .7.7 0 0 1 .606-1.051h2.423a.7.7 0 0 1 .606 1.051z"
                fill="#a1a1a1"
                fillRule="evenodd"
              />
            </svg>
            Alert
          </a>
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
            <div className="container-fluid">
              <div className="row mb-4 pb-2">
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={HDFCBank} />
                    <p className="mb-0">HDFC Bank</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={ICICIBank} />
                    <p className="mb-0">ICICI Bank</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={SBIBank} />
                    <p className="mb-0">SBI Bank</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-4 pb-2">
                <div className="col-4">
                  <Button
                    variant="outlined"
                    onClick={BillPayThreeClickOpen}
                    className="side-pane-btn"
                  >
                    <img src={AXISBank} />
                    <p className="mb-0">AXIS Bank</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={KotakBank} />
                    <p className="mb-0">Kotak Bank</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={TVS} />
                    <p className="mb-0">TVS</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-4 pb-2">
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Edelweiss} />
                    <p className="mb-0">Edelweiss</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={BajajFinserv} />
                    <p className="mb-0">Bajaj Finserv</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={IDFCFirst} />
                    <p className="mb-0">IDFC First</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-4 pb-2">
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={AllahabadBank} />
                    <p className="mb-0">Allahabad Bank</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={HSBCBank} />
                    <p className="mb-0">HSBC Bank</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={BankofBaroda} />
                    <p className="mb-0">Bank of Baroda</p>
                  </Button>
                </div>
              </div>
              <div className="row mb-4 pb-2">
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Citi} />
                    <p className="mb-0">Citi</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={ABCGroup} />
                    <p className="mb-0">ABC Group</p>
                  </Button>
                </div>
                <div className="col-4">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={Other} />
                    <p className="mb-0">Other</p>
                  </Button>
                </div>
              </div>
            </div>
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
                <img src={AxisbankIcon} className="head-icon me-2" />
                AXIS Bank
              </div>
              <div>
                <img src={BharatBillpay} />
              </div>
            </div>
          </AppBar>
          <div className="py-0 px-3">
            <div className="container-fluid">
              <div className="row mb-3 pb-2">
                <div className="col-12">
                  <Button
                    variant="outlined"
                    onClick={BillPayFourClickOpen}
                    className="side-pane-btn"
                  >
                    <img src={AxisF} />
                  </Button>
                </div>
              </div>
              <div className="row mb-4 pb-2">
                <div className="col-12">
                  <Button variant="outlined" className="side-pane-btn">
                    <img src={ABank} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>

        {/* Bill Pay Step Four */}
        <Dialog
          fullScreen
          open={BillPayFouropen}
          onClose={BillPayFourClose}
          TransitionComponent={Transition}
          className="side-pane side-pane-second"
        >
          <AppBar sx={{ position: "relative" }} className="side-pane-header">
            <div className="d-flex align-center justify-between">
              <div onClick={BillPayFourClose} className="d-flex align-center">
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
                <img src={AxisbankIcon} className="head-icon me-2" />
                Pay Your Loan EMI
              </div>
              <div>
                <img src={BharatBillpay} />
              </div>
            </div>
          </AppBar>
          <div className="py-0 px-3">
            <div className="container-fluid">
              <img src={axisfin} className="w-75" />
              <div className="mt-4">
                <div className="row mb-4">
                  <div className="col-12">
                    <label for="Batch" className="col-form-label pt-0">
                      Loan Account Number
                    </label>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-12">
                    <label for="Batch" className="col-form-label pt-0">
                      Loan Account Number
                    </label>
                    <input
                      name="Batch"
                      type="text"
                      className="form-control"
                    ></input>
                    <p className="text-muted">
                      <small>
                        Mobile number should linked to your account.
                      </small>
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <button
                      onClick={BillPayFiveClickOpen}
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Get Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>

        {/* Bill Pay Step Five */}
        <Dialog
          fullScreen
          open={BillPayFiveopen}
          onClose={BillPayFiveClose}
          TransitionComponent={Transition}
          className="side-pane side-pane-second"
        >
          <AppBar sx={{ position: "relative" }} className="side-pane-header">
            <div className="d-flex align-center justify-between">
              <div onClick={BillPayFiveClose} className="d-flex align-center">
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
                <img src={AxisHeader} className="head-icon-2 me-2" />
                <div>
                  <p className="m-0">AXIS Finance</p>
                  <p className="m-0 text-muted">CAR Loan</p>
                </div>
              </div>
              <div>
                <img src={BharatBillpay} />
              </div>
            </div>
          </AppBar>
          <div className="py-0 px-3">
            <div className="row mb-3">
              <div className="col-12">
                <div className="tx-16 text-black">Payment Information</div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Due Date</p>
                  <p className="m-0">15 Aug 21</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Charges Levied</p>
                  <p className="m-0">Rs.5,822</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Base Bill Amount</p>
                  <p className="m-0">Rs. 14,000</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Late Payment Fee</p>
                  <p className="m-0">Rs. 288</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Additional Charges</p>
                  <p className="m-0">Rs. 0</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Fixed Charges</p>
                  <p className="m-0">Rs. 0</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">EMI</p>
                  <p className="m-0">5</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Tenure</p>
                  <p className="m-0">60 Months</p>
                </div>
              </div>
            </div>
            <div className="row mb-3 mt-4">
              <div className="col-12">
                <div className="tx-16 text-black">Amount</div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Amount</p>
                  <p className="m-0">Rs. 14,000</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between">
                  <p className="m-0 pe-3 text-muted">Service Tax</p>
                  <p className="m-0">Rs. 288</p>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="d-flex align-center justify-between border-bottom border-top border-1 pt-2 pb-2">
                  <p className="m-0 pe-3 tx-16 text-black">Total Amount</p>
                  <p className="m-0 tx-16 text-black">Rs. 14,288</p>
                </div>
              </div>
            </div>
            <div className="row mb-3 mt-5">
              <div className="col-12">
                <button
                  onClick={BillPaySixClickOpen}
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </Dialog>

        {/* Bill Pay Step Six */}
        <Dialog
          fullScreen
          open={BillPaySixopen}
          onClose={BillPaySixClose}
          TransitionComponent={Transition}
          className="side-pane side-pane-second"
        >
          <AppBar sx={{ position: "relative" }} className="side-pane-header">
            <div className="d-flex align-center justify-between">
              <div onClick={BillPaySixClose} className="d-flex align-center">
                <p className="ms-1 m-0 tx-20">
                  <strong>PayEMI</strong>
                </p>
              </div>
              <div>
                <img src={BharatBillpay} />
              </div>
            </div>
          </AppBar>
          <div className="bg-gray">
            <div className="py-3 px-3">
              <div className="row">
                <div className="col-2 text-start">
                  <img src={Hdfc} />
                </div>
                <div className="col-10">
                  <p className="m-0">Ritu Raj Srivastava</p>
                  <p className="m-0">Car Loan</p>
                  <p className="m-0">Rs. 14,288</p>
                </div>
              </div>
            </div>
          </div>
          <div className="py-0 px-3">
            <div className="container-fluid">
              <div className="mt-4">
                <div className="row mb-4">
                  <div className="col-12">
                    <p className="ms-1 mb-4 tx-20 text-center">
                      <strong>Paying HDFC Bank</strong>
                    </p>
                    <div className="w-auto d-flex align-center">
                      <p className="tx-20 mb-0 me-2 text-muted">
                        <strong>&#8377;</strong>
                      </p>
                      {/* <p className='form-control-blank mb-0'>14,288</p> */}
                      <input
                        name="Batch"
                        type="text"
                        value="14,288"
                        className="form-control form-control-blank"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    <input
                      name="Batch"
                      placeholder="Emi Payment"
                      type="text"
                      className="form-control bg-gray"
                    ></input>
                    <p className="text-muted lh-1 mt-1">
                      <small>
                        <em>
                          Once you have paid this, your loan account will be
                          immediately updated.
                        </em>
                      </small>
                    </p>
                  </div>
                </div>

                <div className="row mb-3 mt-4 pt-4">
                  <div className="col-12">
                    <button
                      onClick={BillPaySevenClickOpen}
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Pay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>

        {/* Bill Pay Step Seven */}
        <Dialog
          fullScreen
          open={BillPaySevenopen}
          onClose={BillPaySevenClose}
          TransitionComponent={TransitionUp}
          className="side-pane side-pane-second"
        >
          <AppBar sx={{ position: "relative" }} className="side-pane-header">
            <div className="d-flex align-center justify-between">
              <div onClick={BillPaySevenClose} className="d-flex align-center">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.928 3.072c-4.095-4.096-10.76-4.096-14.856 0s-4.096 10.76 0 14.856 10.76 4.096 14.856 0 4.096-10.76 0-14.856zm-3.285 11.57a.808.808 0 0 1-1.143 0l-3-3-3.142 3.143a.808.808 0 1 1-1.143-1.143L9.357 10.5l-3-3A.808.808 0 1 1 7.5 6.357l3 3L13.357 6.5A.808.808 0 1 1 14.5 7.643L11.643 10.5l3 3a.808.808 0 0 1 0 1.142z"
                    fill="#000"
                    fillRule="nonzero"
                    opacity=".495"
                  />
                </svg>
              </div>
            </div>
          </AppBar>
          <div className="py-0 px-3">
            <div className="container-fluid">
              <div className="mt-4">
                <div className="row mb-5">
                  <div className="col-12">
                    <p className="text-center">
                      <img src={DoneIcon} className="w-50" />
                    </p>
                    <p className="mb-4 tx-23 text-center text-success">
                      Bill Payment Successful
                    </p>
                    <p className="mb-0 text-center text-black">
                      To AXIS Finance Bank Limited
                    </p>
                    <p className="mb-4 text-center text-muted">CAR Loan</p>
                    <div className="w-auto d-flex align-center justify-center mb-2">
                      <p className="tx-23 mb-0 me-2 text-muted">&#8377;</p>
                      <p className="tx-60 mb-0 me-2 text-black weight-300 lh-1">
                        14,288
                      </p>
                    </div>
                    <p className="mb-0 text-center text-black">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        className="me-2"
                      >
                        <path
                          d="M6 0a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm2.871 4.94-3.09 3.09a.75.75 0 0 1-1.061 0L3.129 6.44a.75.75 0 0 1 1.06-1.061l1.061 1.06 2.56-2.56a.75.75 0 0 1 1.061 1.06z"
                          fill="#0B7C05"
                          fillRule="nonzero"
                        />
                      </svg>
                      Completed | 15 Oct 21 11:34 AM
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="tx-16 text-black">Receipt</div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Biller name</p>
                      <p className="m-0">
                        <strong>HDFC Bank</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Bill period</p>
                      <p className="m-0">
                        <strong>14 Sep-15 Oct</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Bill date</p>
                      <p className="m-0">
                        <strong>31 Oct 21</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Bill number</p>
                      <p className="m-0">
                        <strong>90909090</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Biller ID</p>
                      <p className="m-0">
                        <strong>1234567</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Total Amount</p>
                      <p className="m-0">
                        <strong>Rs. 14,288</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Transaction status</p>
                      <p className="m-0">
                        <strong>SUCCESS</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Transaction ID</p>
                      <p className="m-0">
                        <strong>CC0112345</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">
                        Transaction date & time
                      </p>
                      <p className="m-0">
                        <strong>31 Oct 21 | 9:29 PM</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Approval Number</p>
                      <p className="m-0">
                        <strong>738287</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="border-bottom-dash"></div>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Customer name</p>
                      <p className="m-0">
                        <strong>Ritu Raj Srivastava</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Customer number</p>
                      <p className="m-0">
                        <strong>9876543212</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Initiating channel</p>
                      <p className="m-0">
                        <strong>Online</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Payment mode</p>
                      <p className="m-0">
                        <strong>Online</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Bill Amount</p>
                      <p className="m-0">
                        <strong>Rs. 14,000</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">
                        Customer Convinience Fee
                      </p>
                      <p className="m-0">
                        <strong>Rs. 0.00</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Service Tax</p>
                      <p className="m-0">
                        <strong>Rs. 288</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3">
                        <strong>Total Amount</strong>
                      </p>
                      <p className="m-0">
                        <strong>Rs. 14,288</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="row mb-5 mt-4 pt-0">
                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-outline-primary w-100"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#412E8D" fillRule="evenodd">
                          <path d="M15.125 8.938a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm0-1.376a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75zM6.875 13.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm0-1.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75zM15.125 18.563a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm0-1.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75z" />
                          <path d="M8.31 12.632a.688.688 0 0 1 .692-1.188l4.695 2.736a.688.688 0 0 1-.692 1.188L8.31 12.632zM12.998 6.632a.688.688 0 0 1 .693 1.187l-4.689 2.737a.688.688 0 0 1-.693-1.188l4.689-2.736z" />
                        </g>
                      </svg>
                      Share
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      type="submit"
                      className="btn btn-outline-primary w-100"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="#412E8D" fillRule="evenodd">
                          <path d="M4.125 14.438a.687.687 0 1 1 1.375 0V16.5c0 .38.308.688.688.688h9.625c.38 0 .687-.308.687-.688v-2.063a.687.687 0 1 1 1.375 0V16.5c0 1.14-.923 2.063-2.063 2.063H6.188A2.062 2.062 0 0 1 4.124 16.5v-2.063z" />
                          <path d="M13.264 10.514a.687.687 0 1 1 .972.972l-2.75 2.75a.687.687 0 0 1-.972 0l-2.75-2.75a.687.687 0 1 1 .972-.972L11 12.778l2.264-2.264z" />
                          <path d="M10.313 4.125a.687.687 0 1 1 1.374 0v9.625a.687.687 0 1 1-1.374 0V4.125z" />
                        </g>
                      </svg>
                      Download
                    </button>
                  </div>
                </div>

                <div className="row mb-3 mt-5">
                  <div className="col-12">
                    <div className="text-center">
                      <img src={GooglePlay} className="w-50" />
                    </div>
                  </div>
                </div>

                <div className="row mb-4 mt-0">
                  <div className="col-3">
                    <div className="text-center">
                      <svg
                        width="60"
                        height="19"
                        viewBox="0 0 60 19"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <g fillRule="nonzero">
                            <path fill="#FBFBFB" d="M0 9.1V0h27.16v18.2H0z" />
                            <path
                              d="M.07 9.1V.07h27.02v18.06H.07V9.1zm26.95 0V6.16H.14v2.893c0 1.592.021 2.915.047 2.94.025.026 6.073.047 13.44.047H27.02V9.1zm-14.063 2.765c-1.122-.251-1.98-1.166-2.186-2.33-.323-1.838 1.406-3.567 3.244-3.243 1.553.273 2.603 1.718 2.357 3.243-.26 1.614-1.829 2.684-3.415 2.33zm.728-.455c.024-.039.164-.07.31-.07.153 0 .305-.046.355-.105a.367.367 0 0 1 .251-.105.29.29 0 0 0 .235-.132.432.432 0 0 1 .246-.176.3.3 0 0 0 .22-.22.432.432 0 0 1 .176-.247.29.29 0 0 0 .132-.234c0-.09.047-.203.105-.251.059-.049.105-.202.105-.345 0-.142.036-.294.081-.338.061-.062.06-.107-.008-.189-.049-.059-.075-.202-.058-.318.021-.144-.01-.247-.097-.326a.473.473 0 0 1-.128-.31c0-.125-.045-.209-.125-.234-.068-.022-.16-.134-.204-.25-.044-.116-.124-.21-.178-.21-.054 0-.168-.08-.253-.178-.085-.098-.186-.158-.225-.134-.04.024-.157-.013-.26-.082-.18-.12-.384-.161-.785-.161-.405 0-.618.037-.727.128a.67.67 0 0 1-.302.117c-.102.011-.214.071-.25.134a.515.515 0 0 1-.233.178.465.465 0 0 0-.236.236.515.515 0 0 1-.178.234c-.063.035-.123.147-.135.25a.67.67 0 0 1-.116.301c-.091.11-.129.323-.129.727 0 .401.042.605.161.784.07.104.107.222.083.26-.024.04.036.141.134.226.097.086.177.2.177.254 0 .054.095.134.21.177.116.044.229.136.25.204.026.08.11.125.234.125.107 0 .248.058.312.13.075.082.18.118.285.098a.498.498 0 0 1 .296.043c.163.094.215.096.268.009h.001zm-.64-.753c.048-.44.061-.441-.304.053-.195.263-.242.124-.08-.24.077-.176.12-.32.093-.318-.027 0-.173.095-.324.21-.15.113-.29.191-.309.172-.019-.019.069-.162.194-.319.126-.157.217-.296.203-.31-.015-.015-.165.035-.334.11-.428.192-.517.129-.164-.116.162-.112.296-.228.297-.257.002-.03-.178-.037-.4-.017l-.402.036.385-.19.385-.191-.332-.063c-.4-.075-.428-.165-.07-.225.144-.024.294-.052.332-.062.039-.01-.08-.084-.262-.165-.183-.081-.333-.17-.333-.196 0-.027.181-.029.403-.005.439.048.441.062-.053-.304-.26-.192-.134-.233.235-.075.179.077.325.122.325.1 0-.022-.098-.164-.218-.316-.28-.353-.216-.418.137-.138.152.12.294.219.316.219.022 0-.023-.147-.1-.326-.197-.462-.132-.526.144-.142.129.18.245.328.258.328.014 0 .004-.174-.021-.385-.025-.212-.023-.385.003-.385.027 0 .115.15.196.332.081.183.156.301.166.263.01-.039.037-.188.061-.333.06-.355.16-.33.217.052.05.338.127.36.203.06.025-.104.095-.254.155-.334.1-.135.105-.117.065.257-.024.222-.02.402.01.402s.124-.11.211-.245c.15-.23.354-.347.276-.157l-.149.35c-.061.145-.094.263-.072.263.022 0 .164-.1.316-.222s.292-.206.31-.187c.02.019-.058.158-.172.31-.115.15-.209.296-.21.322-.001.027.142-.015.319-.093.354-.157.512-.111.243.07-.094.063-.236.17-.315.236-.139.118-.13.12.259.078.22-.024.402-.022.402.005s-.15.115-.332.196c-.183.081-.301.155-.263.165.039.01.192.039.342.064.32.053.266.145-.133.23l-.279.06.333.149c.182.082.332.17.332.196 0 .026-.181.026-.402.002l-.403-.046.175.138c.096.075.238.184.315.241.227.17.08.199-.25.051-.169-.075-.318-.125-.333-.11-.014.014.051.13.146.258.094.127.197.276.227.33.067.117-.026.07-.372-.186-.128-.094-.244-.16-.258-.145-.015.014.035.164.11.332.226.505.086.473-.303-.068-.122-.17-.123-.167-.08.231.025.222.023.403-.003.403s-.114-.15-.196-.333l-.149-.332-.06.278c-.084.4-.176.453-.23.133a7.16 7.16 0 0 0-.063-.341c-.01-.039-.085.08-.166.262-.08.183-.169.333-.196.333-.026 0-.028-.181-.004-.403z"
                              fill="#97A7CE"
                            />
                            <path
                              d="M.07 9.1V.07h27.02v18.06H.07V9.1zm26.95 0V6.16H.14v5.88h26.88V9.1zm-14.286 2.63c-.721-.274-1.301-.77-1.606-1.374-.856-1.696.128-3.64 2.015-3.983 1.172-.212 2.413.458 2.944 1.59.167.357.188.485.188 1.138 0 .69-.014.767-.227 1.198a2.914 2.914 0 0 1-1.332 1.308c-.333.155-.513.19-1.066.203-.43.01-.753-.017-.916-.08zm1.025-.256c.028-.045.14-.06.273-.034.17.031.255.009.345-.091.07-.077.177-.12.251-.1.086.023.17-.026.245-.14a.575.575 0 0 1 .285-.218.3.3 0 0 0 .213-.213.575.575 0 0 1 .218-.285c.115-.076.163-.16.14-.245-.02-.075.024-.182.101-.252.098-.088.124-.176.094-.313a.507.507 0 0 1 .049-.337c.075-.12.075-.172 0-.292a.507.507 0 0 1-.05-.337c.03-.137.005-.225-.093-.313-.077-.07-.12-.177-.1-.252.022-.086-.027-.17-.148-.25-.1-.065-.182-.171-.182-.236a.295.295 0 0 0-.286-.286c-.065 0-.17-.079-.232-.175-.069-.105-.181-.175-.28-.175a.376.376 0 0 1-.257-.111c-.062-.075-.156-.098-.291-.071a.539.539 0 0 1-.337-.046c-.108-.068-.166-.068-.274 0a.539.539 0 0 1-.336.046c-.135-.027-.23-.004-.292.07a.374.374 0 0 1-.254.112c-.162 0-.381.164-.381.285 0 .036-.057.065-.126.065a.295.295 0 0 0-.294.294c0 .07-.03.126-.065.126-.122 0-.285.22-.285.381 0 .09-.05.203-.111.254-.076.062-.099.156-.072.291a.539.539 0 0 1-.045.337c-.068.108-.068.166 0 .274a.539.539 0 0 1 .045.337c-.027.135-.004.229.072.291.06.05.11.166.11.257 0 .098.071.21.176.28.096.062.175.167.175.232a.33.33 0 0 0 .084.202.33.33 0 0 0 .202.084c.064 0 .171.082.237.182.079.12.162.17.249.147.074-.02.181.023.25.1.091.1.177.122.346.09.133-.024.245-.01.273.035.026.042.106.076.179.076.072 0 .153-.034.179-.076zm-.25-1.172c0-.207-.09-.239-.185-.066l-.09.16-.002-.158c-.003-.19-.051-.197-.236-.035-.134.117-.138.117-.093-.006a.836.836 0 0 0 .047-.235c0-.083.044-.095.192-.055.173.046.516.05.886.012.093-.01.15.047.189.187l.055.202-.17-.161-.172-.161-.002.205c-.002.172-.013.185-.074.082-.096-.164-.204-.155-.204.018 0 .077-.032.14-.07.14-.039 0-.07-.058-.07-.128v-.001zm-.833-.382c.096-.211.297-.323.262-.145-.013.062-.095.162-.184.22-.158.105-.16.104-.078-.075zm1.648.015c-.102-.08-.166-.176-.143-.214.049-.08.214.04.315.231.089.165.055.162-.172-.017zm-1.79-.313.16-.172-.204-.002c-.173-.002-.186-.013-.082-.073.163-.096.154-.205-.02-.205-.076 0-.14-.031-.14-.07 0-.038.064-.07.14-.07.173 0 .183-.108.018-.204-.11-.064-.106-.072.035-.074.19-.002.197-.052.037-.229-.116-.128-.114-.132.07-.085.21.052.228.022.115-.188-.068-.126-.061-.133.066-.065.21.112.24.094.187-.115-.046-.184-.043-.187.085-.07.177.16.227.152.23-.037.002-.14.01-.145.073-.035.096.164.205.155.205-.018 0-.077.031-.14.07-.14.038 0 .07.063.07.14 0 .173.108.182.204.018.06-.104.072-.091.073.082l.003.205.17-.161.172-.161-.051.193c-.051.19-.063.193-.614.201-.76.011-.83.081-.84.84-.009.552-.012.564-.202.614l-.193.052.161-.172h.002zm2 .117c-.11-.044-.13-.137-.14-.66-.006-.423.016-.609.073-.609.045 0 .14-.02.21-.046.103-.037.095-.01-.042.14l-.17.186.205.003c.203.002.203.003.045.09-.173.097-.14.187.066.187.07 0 .129.032.129.07 0 .039-.063.07-.14.07-.173 0-.182.109-.018.205.104.06.09.071-.082.073l-.205.002.165.175c.166.177.141.207-.095.114zm-1.395-.167c-.155-.124-.198-.22-.207-.462-.01-.265.018-.333.222-.515.198-.176.275-.203.484-.17.633.103.808.82.297 1.216-.18.14-.58.105-.796-.069zm1.04-1.192c.021-.056.12-.138.22-.184.18-.081.18-.08.076.078-.121.183-.358.267-.296.106z"
                              fill="#A7A7A7"
                            />
                            <path
                              d="M.14 15.085V12.11H27.02l-.018 2.958-.018 2.957-13.423.018L.14 18.06v-2.976zm12.594-3.354c-.721-.275-1.301-.772-1.606-1.375-.856-1.696.128-3.64 2.015-3.983 1.172-.213 2.413.457 2.944 1.59.167.357.188.485.188 1.138 0 .69-.014.766-.227 1.198a2.914 2.914 0 0 1-1.332 1.308c-.333.155-.513.19-1.066.203-.43.01-.753-.017-.916-.08zm1.025-.257c.028-.045.14-.06.273-.034.17.031.255.009.345-.092.07-.076.177-.118.251-.099.086.022.17-.026.245-.14a.575.575 0 0 1 .285-.219.3.3 0 0 0 .213-.213.575.575 0 0 1 .218-.284c.115-.076.163-.16.14-.245-.02-.075.024-.182.101-.252.098-.088.124-.176.094-.314a.507.507 0 0 1 .049-.336c.075-.12.075-.172 0-.292a.507.507 0 0 1-.05-.337c.03-.137.005-.225-.093-.313-.077-.07-.12-.177-.1-.252.022-.087-.027-.17-.148-.25-.1-.065-.182-.171-.182-.237a.295.295 0 0 0-.286-.285c-.065 0-.17-.079-.232-.175-.069-.105-.181-.175-.28-.175a.376.376 0 0 1-.257-.111c-.062-.075-.156-.098-.291-.071a.539.539 0 0 1-.337-.046c-.108-.068-.166-.068-.274 0a.539.539 0 0 1-.336.046c-.135-.027-.23-.004-.292.07a.374.374 0 0 1-.254.112c-.162 0-.381.164-.381.285 0 .035-.057.065-.126.065a.295.295 0 0 0-.294.294c0 .07-.03.126-.065.126-.122 0-.285.219-.285.381 0 .089-.05.203-.111.254-.076.062-.099.156-.072.291a.539.539 0 0 1-.045.337c-.068.108-.068.166 0 .274a.539.539 0 0 1 .045.336c-.027.135-.004.23.072.292.06.05.11.166.11.257 0 .098.071.21.176.28.096.062.175.167.175.232a.33.33 0 0 0 .084.202.33.33 0 0 0 .202.084c.064 0 .171.082.237.181.079.121.162.17.249.148.074-.02.181.023.25.1.091.1.177.122.346.09.133-.024.245-.01.273.035.026.041.106.076.179.076.072 0 .153-.035.179-.076zm-.25-1.172c0-.207-.09-.239-.185-.067l-.09.16-.002-.157c-.003-.19-.051-.197-.236-.035-.134.117-.138.116-.093-.006a.836.836 0 0 0 .047-.235c0-.083.044-.095.192-.055.173.046.516.05.886.012.093-.01.15.047.189.187l.055.201-.17-.16-.172-.161-.002.204c-.002.173-.013.186-.074.083-.096-.164-.204-.155-.204.018 0 .077-.032.14-.07.14-.039 0-.07-.058-.07-.129zm-.833-.382c.096-.211.297-.323.262-.146-.013.063-.095.162-.184.221-.158.105-.16.104-.078-.075zm1.648.014c-.102-.08-.166-.176-.143-.213.049-.08.214.04.315.23.089.166.055.162-.172-.017zm-1.79-.313.16-.17-.204-.003c-.173-.002-.186-.013-.082-.074.163-.095.154-.204-.02-.204-.076 0-.14-.031-.14-.07 0-.038.064-.07.14-.07.173 0 .183-.109.018-.204-.11-.064-.106-.072.035-.074.19-.002.197-.052.037-.23-.116-.128-.114-.13.07-.085.21.053.228.023.115-.187-.068-.127-.061-.133.066-.065.21.112.24.094.187-.116-.046-.183-.043-.186.085-.07.177.16.227.153.23-.036.002-.141.01-.145.073-.035.096.164.205.155.205-.018 0-.077.031-.14.07-.14.038 0 .07.063.07.14 0 .173.108.182.204.018.06-.104.072-.091.073.082l.003.204.17-.16.172-.161-.051.193c-.051.189-.063.193-.614.2-.76.012-.83.082-.84.841-.009.552-.012.563-.202.614l-.193.052.161-.172h.002zm2 .118c-.11-.044-.13-.137-.14-.66-.006-.423.016-.609.073-.609.045 0 .14-.02.21-.046.103-.037.095-.01-.042.14l-.17.186.205.003c.203.002.203.003.045.09-.173.096-.14.187.066.187.07 0 .129.032.129.07 0 .039-.063.07-.14.07-.173 0-.182.109-.018.204.104.06.09.072-.082.074l-.205.002.165.175c.166.177.141.207-.095.114zm-1.395-.167c-.155-.124-.198-.22-.207-.462-.01-.266.018-.333.222-.515.198-.176.275-.204.484-.17.633.103.808.82.297 1.215-.18.14-.58.106-.796-.068zm1.04-1.192c.021-.056.12-.138.22-.184.18-.081.18-.08.076.078-.121.183-.358.267-.296.106zM.14 3.115V.14l13.423.017 13.423.018v5.88l-13.423.018L.14 6.09V3.115z"
                              fill="#E6914F"
                            />
                            <path
                              d="M.14 15.085V12.11H27.02l-.018 2.958-.018 2.957-13.423.018L.14 18.06v-2.976zm12.594-3.354c-.721-.275-1.301-.772-1.606-1.375-.856-1.696.128-3.64 2.015-3.983 1.172-.213 2.413.457 2.944 1.59.167.357.188.485.188 1.138 0 .69-.014.766-.227 1.198a2.914 2.914 0 0 1-1.332 1.308c-.333.155-.513.19-1.066.203-.43.01-.753-.017-.916-.08zm1.025-.257c.028-.045.14-.06.273-.034.17.031.255.009.345-.092.07-.076.177-.118.251-.099.086.022.17-.026.245-.14a.575.575 0 0 1 .285-.219.3.3 0 0 0 .213-.213.575.575 0 0 1 .218-.284c.115-.076.163-.16.14-.245-.02-.075.024-.182.101-.252.098-.088.124-.176.094-.314a.507.507 0 0 1 .049-.336c.075-.12.075-.172 0-.292a.507.507 0 0 1-.05-.337c.03-.137.005-.225-.093-.313-.077-.07-.12-.177-.1-.252.022-.087-.027-.17-.148-.25-.1-.065-.182-.171-.182-.237a.295.295 0 0 0-.286-.285c-.065 0-.17-.079-.232-.175-.069-.105-.181-.175-.28-.175a.376.376 0 0 1-.257-.111c-.062-.075-.156-.098-.291-.071a.539.539 0 0 1-.337-.046c-.108-.068-.166-.068-.274 0a.539.539 0 0 1-.336.046c-.135-.027-.23-.004-.292.07a.374.374 0 0 1-.254.112c-.162 0-.381.164-.381.285 0 .035-.057.065-.126.065a.295.295 0 0 0-.294.294c0 .07-.03.126-.065.126-.122 0-.285.219-.285.381 0 .089-.05.203-.111.254-.076.062-.099.156-.072.291a.539.539 0 0 1-.045.337c-.068.108-.068.166 0 .274a.539.539 0 0 1 .045.336c-.027.135-.004.23.072.292.06.05.11.166.11.257 0 .098.071.21.176.28.096.062.175.167.175.232a.33.33 0 0 0 .084.202.33.33 0 0 0 .202.084c.064 0 .171.082.237.181.079.121.162.17.249.148.074-.02.181.023.25.1.091.1.177.122.346.09.133-.024.245-.01.273.035.026.041.106.076.179.076.072 0 .153-.035.179-.076zm-.25-1.172c0-.207-.09-.239-.185-.067l-.09.16-.002-.157c-.003-.19-.051-.197-.236-.035-.134.117-.138.116-.093-.006a.836.836 0 0 0 .047-.235c0-.083.044-.095.192-.055.173.046.516.05.886.012.093-.01.15.047.189.187l.055.201-.17-.16-.172-.161-.002.204c-.002.173-.013.186-.074.083-.096-.164-.204-.155-.204.018 0 .077-.032.14-.07.14-.039 0-.07-.058-.07-.129zm-.833-.382c.096-.211.297-.323.262-.146-.013.063-.095.162-.184.221-.158.105-.16.104-.078-.075zm1.648.014c-.102-.08-.166-.176-.143-.213.049-.08.214.04.315.23.089.166.055.162-.172-.017zm-1.79-.313.16-.17-.204-.003c-.173-.002-.186-.013-.082-.074.163-.095.154-.204-.02-.204-.076 0-.14-.031-.14-.07 0-.038.064-.07.14-.07.173 0 .183-.109.018-.204-.11-.064-.106-.072.035-.074.19-.002.197-.052.037-.23-.116-.128-.114-.13.07-.085.21.053.228.023.115-.187-.068-.127-.061-.133.066-.065.21.112.24.094.187-.116-.046-.183-.043-.186.085-.07.177.16.227.153.23-.036.002-.141.01-.145.073-.035.096.164.205.155.205-.018 0-.077.031-.14.07-.14.038 0 .07.063.07.14 0 .173.108.182.204.018.06-.104.072-.091.073.082l.003.204.17-.16.172-.161-.051.193c-.051.189-.063.193-.614.2-.76.012-.83.082-.84.841-.009.552-.012.563-.202.614l-.193.052.161-.172h.002zm2 .118c-.11-.044-.13-.137-.14-.66-.006-.423.016-.609.073-.609.045 0 .14-.02.21-.046.103-.037.095-.01-.042.14l-.17.186.205.003c.203.002.203.003.045.09-.173.096-.14.187.066.187.07 0 .129.032.129.07 0 .039-.063.07-.14.07-.173 0-.182.109-.018.204.104.06.09.072-.082.074l-.205.002.165.175c.166.177.141.207-.095.114zm-1.395-.167c-.155-.124-.198-.22-.207-.462-.01-.266.018-.333.222-.515.198-.176.275-.204.484-.17.633.103.808.82.297 1.215-.18.14-.58.106-.796-.068zm1.04-1.192c.021-.056.12-.138.22-.184.18-.081.18-.08.076.078-.121.183-.358.267-.296.106zM.257 5.973C.23 5.948.21 4.64.21 3.068V.21l13.352.017 13.353.018v5.74l-13.306.018C6.292 6.013.283 5.999.257 5.973z"
                              fill="#659BA4"
                            />
                            <path
                              d="M.21 15.085V12.18h26.74v5.81H.21v-2.905zm12.722-3.327c-.78-.196-1.468-.77-1.825-1.524-.201-.424-.222-.532-.222-1.134 0-.6.021-.71.22-1.129.306-.647.645-.994 1.272-1.304.501-.247.568-.262 1.2-.262.605 0 .712.02 1.137.222a2.755 2.755 0 0 1 1.337 1.339c.192.409.22.545.222 1.064.002.726-.09 1.05-.457 1.6-.302.452-.913.922-1.384 1.064-.358.108-1.185.143-1.5.064zm.892-.268c.038-.022.168-.03.289-.02.147.013.233-.017.26-.09.026-.065.126-.11.247-.11a.35.35 0 0 0 .316-.17.466.466 0 0 1 .27-.193.199.199 0 0 0 .182-.181c.012-.088.099-.21.192-.271a.35.35 0 0 0 .17-.315c0-.121.045-.222.11-.247.075-.029.103-.114.09-.274-.012-.127.002-.254.03-.282.028-.027.05-.134.05-.237 0-.102-.022-.21-.05-.237-.028-.028-.041-.159-.03-.292.015-.169-.012-.254-.09-.283-.064-.026-.11-.125-.11-.243a.351.351 0 0 0-.175-.316c-.096-.063-.175-.175-.175-.248 0-.08-.075-.162-.188-.205a.71.71 0 0 1-.284-.209.339.339 0 0 0-.244-.137.488.488 0 0 1-.277-.117c-.11-.1-.422-.16-.827-.16-.405 0-.716.06-.826.16a.49.49 0 0 1-.278.117.342.342 0 0 0-.243.137.71.71 0 0 1-.284.208c-.104.04-.189.12-.189.179s-.078.176-.175.26c-.096.083-.175.214-.175.29a.478.478 0 0 1-.117.27c-.217.24-.216 1.472 0 1.631.065.047.117.167.117.266 0 .1.061.224.137.277a.71.71 0 0 1 .208.284c.044.114.125.188.206.188.073 0 .185.079.248.175.078.12.178.175.315.175.119 0 .219.046.244.11.029.076.114.105.27.092a.76.76 0 0 1 .363.057c.125.07.247.06.423-.039zm-.651-1.992c-.4-.426-.006-1.117.546-.959.291.084.416.253.42.566.004.5-.625.756-.966.393zm.574.013a.601.601 0 0 0 .257-.28c.164-.396-.3-.764-.664-.526-.38.25-.264.719.22.88.007.003.092-.03.187-.074zm-.41-.198c-.285-.316.14-.741.456-.456.172.156.175.327.01.477-.17.153-.313.146-.465-.021zM.258 5.974C.231 5.948.21 4.641.21 3.069V.21l13.353.018 13.352.017v5.74l-13.305.018C6.292 6.013.283 6 .257 5.974z"
                              fill="#ED7A20"
                            />
                            <path
                              d="M.21 15.085V12.18h26.74v5.81H.21v-2.905zm12.722-3.327c-.78-.196-1.468-.77-1.825-1.524-.201-.424-.222-.532-.222-1.134 0-.6.021-.71.22-1.129.306-.647.645-.994 1.272-1.304.501-.247.568-.262 1.2-.262.605 0 .712.02 1.137.222a2.755 2.755 0 0 1 1.337 1.339c.192.409.22.545.222 1.064.002.726-.09 1.05-.457 1.6-.302.452-.913.922-1.384 1.064-.358.108-1.185.143-1.5.064zm.892-.268c.038-.022.168-.03.289-.02.147.013.233-.017.26-.09.026-.065.126-.11.247-.11a.35.35 0 0 0 .316-.17.466.466 0 0 1 .27-.193.199.199 0 0 0 .182-.181c.012-.088.099-.21.192-.271a.35.35 0 0 0 .17-.315c0-.121.045-.222.11-.247.075-.029.103-.114.09-.274-.012-.127.002-.254.03-.282.028-.027.05-.134.05-.237 0-.102-.022-.21-.05-.237-.028-.028-.041-.159-.03-.292.015-.169-.012-.254-.09-.283-.064-.026-.11-.125-.11-.243a.351.351 0 0 0-.175-.316c-.096-.063-.175-.175-.175-.248 0-.08-.075-.162-.188-.205a.71.71 0 0 1-.284-.209.339.339 0 0 0-.244-.137.488.488 0 0 1-.277-.117c-.11-.1-.422-.16-.827-.16-.405 0-.716.06-.826.16a.49.49 0 0 1-.278.117.342.342 0 0 0-.243.137.71.71 0 0 1-.284.208c-.104.04-.189.12-.189.179s-.078.176-.175.26c-.096.083-.175.214-.175.29a.478.478 0 0 1-.117.27c-.217.24-.216 1.472 0 1.631.065.047.117.167.117.266 0 .1.061.224.137.277a.71.71 0 0 1 .208.284c.044.114.125.188.206.188.073 0 .185.079.248.175.078.12.178.175.315.175.119 0 .219.046.244.11.029.076.114.105.27.092a.76.76 0 0 1 .363.057c.125.07.247.06.423-.039zm-.651-1.992c-.4-.426-.006-1.117.546-.959.291.084.416.253.42.566.004.5-.625.756-.966.393zm.574.013a.601.601 0 0 0 .257-.28c.164-.396-.3-.764-.664-.526-.38.25-.264.719.22.88.007.003.092-.03.187-.074zm-.41-.198c-.285-.316.14-.741.456-.456.172.156.175.327.01.477-.17.153-.313.146-.465-.021z"
                              fill="#3050A0"
                            />
                            <path
                              fill="#109352"
                              d="M.21 15.085V12.18h26.74v5.81H.21z"
                            />
                          </g>
                          <g
                            fill="#505050"
                            fontFamily="Roboto-Medium, Roboto"
                            fontWeight="400"
                          >
                            <text fontSize="6.8" transform="translate(32)">
                              <tspan x="0" y="6">
                                MADE IN
                              </tspan>
                            </text>
                            <text fontSize="10.2" transform="translate(32)">
                              <tspan x="0" y="16.48">
                                INDIA
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-center">
                      <svg
                        width="50"
                        height="20"
                        viewBox="0 0 50 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fillRule="nonzero" fill="none">
                          <path
                            d="M8.367 2.563A8.369 8.369 0 0 0 0 10.93a8.368 8.368 0 1 0 8.367-8.367zm-.031 2.624a5.74 5.74 0 0 1 5.742 5.743 5.74 5.74 0 0 1-5.742 5.742 5.747 5.747 0 0 1-5.75-5.742 5.747 5.747 0 0 1 5.75-5.742z"
                            fill="#FEB511"
                          />
                          <path
                            d="M19.219 4.367v7.29h1.453V6.6l2.578 5.055h1.57V4.367h-1.453v4.547l-2.383-4.546H19.22zm8.922 1.805a2.778 2.778 0 0 0-2.782 2.781 2.784 2.784 0 1 0 5.57 0 2.784 2.784 0 0 0-2.788-2.781zm.007 1.352a1.426 1.426 0 1 1-1.43 1.429 1.433 1.433 0 0 1 1.43-1.43zm3.159-1.234v5.366h1.578V9.478c0-.772.169-1.229.449-1.56.29-.343.546-.545 1.327-.555l.592.008.008 2.454c.001.376.02.693.104.962.194.62.665.96 1.576.96a3.47 3.47 0 0 0 1.208-.197l-.19-1.09c-.18.07-.396.113-.56.115-.463.004-.57-.198-.568-.682V7.37h1.136l.005-1.081H36.83l-.004-1.52-1.274-.003-.273 1.523h-.742c-.236 0-.419.002-.598.047-.76.192-1.072.75-1.264 1.101L32.23 6.29h-.923zm9.626-.118a2.778 2.778 0 0 0-2.781 2.781 2.784 2.784 0 1 0 5.57 0 2.784 2.784 0 0 0-2.789-2.781zm.008 1.352a1.426 1.426 0 1 1-1.43 1.429 1.433 1.433 0 0 1 1.43-1.43zm6.246-1.352c-.721.004-1.314.351-1.867.945l-.304-.828h-.922v5.367h1.539V7.97c.157-.179.513-.509.968-.508.579 0 .789.372.79.789l.008 3.406h1.57V8.203c.001-1.343-.78-2.037-1.782-2.031zm1.925.74v-.513h-.15v-.106h.419v.106h-.154v.513h-.115zm.348 0v-.62h.167l.11.41.105-.41H50v.62h-.088V6.43l-.136.482h-.084l-.125-.491v.491h-.107zM16.812.656v.641h.641V.656h-.64zm0 .641h-1.187v.64h1.188v-.64zm-1.187.64h-.594v1.25h.594v-1.25zm0 1.25v.61h.61v-.61h-.61zm.61 0h.671v-.601h-.672v.602zm-.61.61h-.594v.625h-.617v-.625h-1.008v.445h-.547v.547h.602v.61h-.61l.008-.61h-.656v.961h-.61v.601h-.413v.61h-.438c-.94 1.543-1.696 2.969-2.133 4.023C7.41 9.387 6.848 8.813 5.836 8.25c-.361-.201-.683-.295-.914-.164-.24.136-.31.563-.007.898 1.877 2.08 2.215 3.19 2.898 4.774.203.472.587.675 1.023.687.233.007.52-.064.711-.289.089-.104.115-.247.188-.422.57-1.376 1.204-2.755 2.117-4.07l.008-.687h.484l-.008-.61h.524l-.008-.727h.61v-.663h-.618l.008-.626h.61v.625h.608v-.632h.477V5.6h.555v-.507h.523V3.797zm-1.211 0h.617v-.61h-.617v.61zm0-.61v-.585h-.617v.586h.617z"
                            fill="#000"
                          />
                          <path
                            d="M15.625 1.94h.608v.642h-.608v-.641zM17.45 1.3h.658v.641h-.658V1.3zm0-1.299h.658v.657h-.658V0z"
                            fill="#FEB511"
                          />
                          <path
                            d="M19.564 17.428h-.29v-4h.489v1.479c.193-.242.464-.409.763-.4.812.026 1.112.749 1.121 1.448.011.838-.45 1.52-1.194 1.528a.904.904 0 0 1-.777-.404l-.111.349zm.202-.633c.2.184.238.284.624.287.58.005.73-.639.729-1.086-.002-.565-.157-1.048-.661-1.062-.317-.01-.534.147-.686.319l-.006 1.543zm2.304 1.631.063-.368c.41.081.706-.007.867-.46l-1.015-3.033h.508l.718 2.418.678-2.418h.496l-.987 3.143c-.227.725-.76.854-1.328.719zm3.81-1.42.25-.343c.378.271.663.381 1.128.383.504.003.825-.26.823-.665-.008-1.138-1.961-.5-1.994-2.017-.015-.665.577-.992 1.148-.995.431-.002.836.063 1.111.257l-.215.387c-.129-.129-.594-.214-.847-.216-.44-.004-.718.17-.73.54-.038 1.088 2.02.49 2.017 2.033-.002.72-.539 1.094-1.314 1.1-.716.007-1.25-.317-1.376-.463zm5.928.418V14.57h.3l.118.465c.237-.315.648-.526.993-.525.408.002.582.29.634.5.258-.3.603-.5.953-.502.602-.005.74.434.74.927v1.99l-.488.001v-1.833c0-.402-.048-.662-.392-.655-.381.008-.584.259-.723.383v2.105h-.508v-1.887c0-.383-.062-.605-.387-.598-.328.007-.424.138-.741.39v2.095l-.5-.002zm6.161-.34a1.214 1.214 0 0 1-.882.389c-.485-.005-.878-.3-.876-.78.002-.586.406-.748.752-.863.341-.114.614-.153.924-.207.013-.509-.095-.697-.511-.7-.376-.002-.698.168-.837.24l-.177-.327c.137-.106.482-.323 1.047-.328.619-.005.988.343.988.993v1.925h-.3l-.128-.342zm-.078-1.128c-.308.06-.477.11-.718.187-.31.098-.46.255-.456.539.004.298.2.413.445.407.293-.007.481-.102.727-.288l.002-.845zm5.674 1.083.075.34c-.172.094-.428.088-.531.088-.603.002-.694-.389-.694-.835v-1.711h-.426v-.356h.426l.146-.813.35-.002v.815h.642v.356h-.642v1.737c0 .424.176.426.343.433.16.006.31-.052.31-.052h.001zm2.482-.24.207.296c-.217.17-.461.379-.985.38-.873.003-1.262-.665-1.259-1.459.004-.791.37-1.503 1.174-1.508 1-.005 1.142.961 1.141 1.634h-1.786c.001.541.221.934.671.938.465.004.837-.281.837-.281zm-1.508-.999h1.27c-.026-.448-.141-.92-.62-.914-.514.007-.615.48-.65.914zm4.387 1.295c-.204.198-.529.37-.948.373-.803.006-1.199-.614-1.199-1.47 0-.852.43-1.489 1.264-1.49.37-.001.637.147.828.302l-.216.328c-.12-.096-.385-.23-.617-.226-.569.008-.745.427-.744 1.073.001.538.12 1.082.742 1.088.184.002.407-.064.648-.272l.242.294zm-19.975 1.332.064-.37c.41.082.706-.006.867-.458l-1.016-3.034h.509l.718 2.418.677-2.418h.497l-.987 3.143c-.228.725-.76.854-1.329.719zm10.279-1.003V14.57h.3l.118.465a1.413 1.413 0 0 1 1.082-.525c.52.005.724.463.724.945v1.971h-.508v-1.887c0-.383-.062-.605-.387-.598-.328.007-.512.138-.83.39v2.095l-.5-.002z"
                            fill="#999"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-center">
                      <svg
                        width="54"
                        height="18"
                        viewBox="0 0 54 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            d="M13.862 8.002c.517 0 .976.25 1.263.633a1.573 1.573 0 1 1 0 1.878 1.573 1.573 0 1 1-1.262-2.512zM6.27 6.709c1.742 1.104 3.317 1.627 4.667 1.504.086 1.75-.096 3.238-.515 4.477h8.16a.454.454 0 0 0 .321-.135.454.454 0 0 0 .135-.321V6.238H.626v5.996c0 .124.05.238.134.321a.454.454 0 0 0 .322.135h1.102c-.413-1.239-.611-2.744-.565-4.55 1.586.084 3.143-.26 4.65-1.431zm3.912 6.606c-.778 1.794-2.115 2.995-3.895 3.666-1.747-.639-3.08-1.813-3.867-3.666H1.082c-.298 0-.568-.121-.764-.317A1.072 1.072 0 0 1 0 12.235V1.882A1.084 1.084 0 0 1 1.082.8H18.58a1.078 1.078 0 0 1 1.08 1.08v10.352c0 .298-.122.568-.317.763a1.079 1.079 0 0 1-.763.319h-8.4v.001zm-3.909-5.65c1.448.919 2.757 1.353 3.878 1.25.077 1.543-.099 2.826-.494 3.877l-.011.029c-.013.032-.024.064-.037.094l-.014.035-.036.087-.014.033-.038.087-.018.04-.034.072-.024.048c-.657 1.357-1.734 2.265-3.145 2.797-1.389-.508-2.463-1.394-3.127-2.797l-.004-.01-.002-.011-.005-.01-.033-.075-.005-.01-.005-.009-.005-.01-.005-.01-.004-.009-.034-.077-.005-.01-.005-.009-.004-.01-.048-.116-.004-.01-.003-.01-.035-.089-.003-.01-.003-.01-.004-.009-.003-.01-.033-.09-.004-.01c-.361-1.03-.537-2.296-.497-3.837 1.321.067 2.614-.218 3.867-1.19zM.626 3.13h18.41V1.882a.454.454 0 0 0-.135-.322.454.454 0 0 0-.322-.134H1.082a.454.454 0 0 0-.322.134.454.454 0 0 0-.134.322V3.13z"
                            fill="#262626"
                          />
                          <path
                            d="m3.94 11.574.826-.01.063.015a3.21 3.21 0 0 1 .776.626 11.446 11.446 0 0 1 2.11-2.53l.08-.03H8.7l-.182.201a18.852 18.852 0 0 0-2.76 3.98l-.114.22-.104-.222a5.4 5.4 0 0 0-.697-1.131 4.577 4.577 0 0 0-.968-.896l.065-.223z"
                            fill="#69C229"
                            fillRule="nonzero"
                          />
                          <g
                            fill="#505050"
                            fontFamily="Roboto-Medium, Roboto"
                            fontWeight="400"
                          >
                            <text fontSize="8" transform="translate(23.2)">
                              <tspan x="0" y="7">
                                SECURE
                              </tspan>
                            </text>
                            <text fontSize="6.4" transform="translate(23.2)">
                              <tspan x="0" y="14.8">
                                PAYMENT
                              </tspan>
                            </text>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="text-center">
                      <svg
                        width="52"
                        height="23"
                        viewBox="0 0 52 23"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fillRule="nonzero" fill="none">
                          <path
                            fill="#B6004F"
                            d="M18.01 2.687h-.876v-.875h.875zM18.01.944h-.876V.07h.875zM26.087 15.196h.343c.294 1.498 1.092 2.751 2.8 2.751 1.148 0 2.114-.65 2.114-1.855 0-1.344-1.169-1.883-2.254-2.31-1.35-.518-2.779-1.232-2.779-2.919s1.316-2.667 2.933-2.667c.812 0 1.568.28 2.233.756l.343-.574h.168l.07 2.562h-.35c-.336-1.232-1.036-2.338-2.47-2.338-.946 0-1.73.61-1.73 1.568 0 1.17 1.05 1.568 1.967 1.96 1.54.637 3.262 1.407 3.262 3.346 0 1.94-1.813 2.87-3.542 2.87-1.008 0-1.792-.294-2.597-.889l-.357.623h-.16v-2.884M33.591 9.008c0-.448.357-.798.805-.798.441 0 .784.357.784.798 0 .427-.343.784-.756.784-.448 0-.833-.322-.833-.784m1.596 2.64V16.4c.028.973-.133 1.421 1.036 1.498v.301c-.504-.014-1.05-.049-1.589-.063-.58.014-1.148.042-1.729.063v-.3c1.092-.07 1.008-.428 1.022-1.408v-2.114c0-.28 0-1.42-.063-1.645-.098-.37-.72-.343-1.022-.322v-.294l2.345-.469M40.612 14.027c0-.945-.357-2.044-1.484-2.044-1.14 0-1.449 1.106-1.449 2.044 0 .89.357 1.981 1.428 1.981 1.141.007 1.505-1.022 1.505-1.98m-1.036 3.478c1.512.12 3.101.175 3.101 2.163 0 1.876-1.743 2.485-3.36 2.485-1.225 0-3.1-.427-3.1-1.967 0-.609.454-1.232 1.091-1.232.252 0 .441.105.616.266-.483.091-.763.588-.763 1.05 0 1.288 1.316 1.54 2.352 1.54 1.036 0 2.163-.44 2.163-1.645 0-1.449-1.63-1.372-2.653-1.435-.98-.028-2.324 0-2.324-1.33 0-.714.665-1.183 1.302-1.274V16.1c-.86-.28-1.582-1.092-1.582-2.044 0-1.568 1.33-2.415 2.78-2.415.685 0 1.378.21 1.882.665.4-.308.896-.623 1.435-.623.378 0 .868.182.868.637 0 .266-.203.49-.49.49-.455 0-.504-.518-.959-.518-.21 0-.448.147-.609.28.357.4.532.917.532 1.456 0 1.743-1.316 2.247-2.842 2.324-.448.014-1.589.014-1.589.623 0 .518.812.462 1.141.49l1.008.042M50.496 16.4c0 .973-.119 1.421 1.036 1.498v.301c-.532-.014-1.085-.049-1.617-.063-.58.014-1.14.042-1.715.063v-.3c1.113-.07 1.036-.428 1.036-1.408v-1.897c0-1.022.042-2.47-1.365-2.47-1.155 0-1.897.902-1.897 1.987v2.296c0 .973-.133 1.421 1.036 1.498v.301c-.532-.014-1.085-.049-1.61-.063-.58.014-1.148.042-1.722.063v-.3c1.113-.07 1.036-.428 1.036-1.408v-1.82c0-.413 0-1.456-.077-1.792-.119-.532-.518-.476-.987-.476v-.294c.763-.09 1.316-.329 2.037-.462l.196 1.344h.028c.518-.917 1.316-1.344 2.366-1.344 1.414 0 2.205.637 2.205 2.044V16.4M15.49 3.541h-.813v-.86h.812z"
                          />
                          <path
                            d="M14.67 4.36h-.798v.812h.798V4.36zm-.798.82h-.826v.825h.826V5.18zM10.946 7.32h.82V6.51h-.82v.812zM4.254 18.745c-.7-1.687-1.435-3.794-3.752-6.349-1.015-1.043-.273-1.7.33-1.519 1.126.364 2.554 1.386 4.395 3.948.511-1.274 2.205-4.403 2.877-5.404H8.7v-.819h.546v-.819h.82v-1.28h.867v-.729h.735V5.18h1.372v-.812h-.819v-.784h.82v.784h.825v-1.68h.798V1.82h1.59V.951h.867v.868h-.868v.868h-1.589v1.68h.812v-.819h.917v.82h-.917v.811h-.812v1.743h-.707v.686h-.728V8.61h-.65v.82h-.813v-.82h-.826v.82h.826v.923h-.826v.952h-.686v.826h-.658v.91c-1.218 1.764-2.26 3.913-2.968 5.824-.329.91-2.002.77-2.373-.119"
                            fill="#221F1F"
                          />
                          <path
                            d="M13.88 13.79c.237 0 .72.076.72-.295 0-.917-.504-1.512-1.435-1.512-1.106 0-1.554.84-1.729 1.806h2.443zm1.924 3.303c-.7.861-1.526 1.26-2.639 1.26-1.834 0-3.346-1.288-3.346-3.185 0-1.848 1.407-3.52 3.332-3.52 1.45 0 2.821.811 2.821 2.414 0 .196-.217.133-.364.133H11.36l-.063.714c0 1.407.742 2.975 2.324 2.975.756 0 1.428-.504 1.87-1.092l.314.301M17.288 14.664c0-.399.021-1.456-.084-1.792-.133-.532-.504-.476-.98-.476v-.294c.7-.049 1.351-.315 2.002-.462.133.427.196.96.175 1.498h.028c.385-.903 1.127-1.498 2.15-1.498.461 0 1.05.224 1.05.77 0 .28-.239.532-.519.532-.623 0-.49-.77-1.07-.77-.442 0-.932.371-1.149.742-.343.61-.343 1.337-.343 2.016v1.463c0 1.085-.119 1.435 1.127 1.498v.301c-.567-.014-1.148-.049-1.7-.063-.582.014-1.142.042-1.716.063v-.3c1.113-.07 1.036-.428 1.036-1.408v-1.82M22.77 9.008c0-.448.356-.798.797-.798.448 0 .791.357.791.798 0 .427-.343.784-.756.784-.448 0-.833-.322-.833-.784m1.603 2.64V16.4c.028.973-.133 1.421 1.036 1.498v.301c-.504-.014-1.05-.049-1.589-.063-.58.014-1.155.042-1.729.063v-.3c1.092-.07 1.001-.428 1.022-1.408v-2.114c0-.28 0-1.42-.063-1.645-.098-.37-.72-.343-1.022-.322v-.294l2.345-.469"
                            fill="#221F1F"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}

export default Dashboard;
