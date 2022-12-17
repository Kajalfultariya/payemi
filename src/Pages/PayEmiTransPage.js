import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import {
  getTransPageDetail,
  getScratchCash,
  getScratchCashResp,
} from "../API";
import ScratchCard from "react-scratchcard";
import moment from "moment";
import PeSpinner from "../Components/PeSpinner";
import { useHistory } from "react-router-dom";
import ScratchHalf from "../Static/Images/scratch-half-2.png";
import SCard from "../Static/Images/scratch-card.png";

const PayEmiTransPage = (props) => {
  const history = useHistory();
  const id = localStorage.getItem("profile");
  const billerInfo = JSON.parse(localStorage.getItem("home_bill_info"));
  const [transpage, setTransPage] = useState([]);
  const [cashAmount, setCashAmount] = useState([]);
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = React.useState(true);
  const [isreed, setIsreed] = React.useState(true);

  //api Call
  useEffect(() => {
    fetchTrans();
  }, []);

  const fetchTrans = async () => {
    const response = await getTransPageDetail(id, billerInfo?.biller__billerId);
    setTransPage(response?.data);
    setErr(response?.error);
    setMsg(response?.message);
    setLoading(false);
  };

  //scratchcard
  const [showActive, setshowActive] = useState("false");
  const [open, setopen] = React.useState(false);
  const handclose = async () => {
    setopen(false);
  };
  const [bId, setBId] = useState("");
  const handopen = async (cashData) => {
    setIsreed(cashData.is_redeemed);
    setBId(cashData.bill_id);
    var biId = cashData.bill_id;
    var pId = cashData.profile_id;
    const response = await getScratchCash(biId, pId);
    setCashAmount(response.cashback_amount);
    setopen(true);
  };
  const scartchapicall = async () => {
    const responsescratch = await getScratchCashResp(id, bId);
    // setopen(true)
  };

  const settings = {
    image: SCard,
    height: 280,
    width: 290,
    finishPercent: 50,
    onComplete: () => {
      setshowActive(!showActive);
      scartchapicall();
    },
  };

  //date
  const getDateValue = (dd) => {
    return new Date(dd);
  };

  const PaidClickOpen = (data) => {
    if (data !== null)
      localStorage.setItem("TransData", JSON.stringify(data))
    history.push("transaction-Paid");

  };

  const ProcessingClickOpen = (data) => {
    if (data !== null) {
      localStorage.setItem("TransBillId", JSON.stringify(data?.bill_id))
      localStorage.setItem("TransData", JSON.stringify(data))
      history.push("transaction-Process");
    }
  };
  const FailedClickOpen = async (data) => {

    if (data !== null) {
      localStorage.setItem("TransBillId", JSON.stringify(data?.bill_id))
      localStorage.setItem("TransData", JSON.stringify(data))
      history.push("transaction-Failed");
    }
  };

  // Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const BooleanOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log(billerInfo);

  return (
    <>
      <div className="home-main h-100">
        <div className="d-flex align-center justify-between header-white px-4">
          <div className="d-flex align-center">
            <Link to="/home">
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#505050" fillRule="evenodd">
                  <path d="M20.25 12.656a.844.844 0 1 1 0 1.688H6.75a.844.844 0 1 1 0-1.688h13.5z" />
                  <path d="m7.943 13.5 4.466 4.466a.844.844 0 1 1-1.193 1.193l-5.063-5.062a.844.844 0 0 1 0-1.194l5.063-5.062a.844.844 0 0 1 1.193 1.193L7.943 13.5z" />
                </g>
              </svg>
            </Link>
            <div className="d-flex align-center ms-2">
              {billerInfo && (
                <img width={25} src={billerInfo?.biller__logo_url} />
              )}
              <div>
                <p className="mb-0 lh-1 tx-14 ms-2">
                  {billerInfo?.biller__billerName}
                </p>
                <p className="mb-0 lh-1 tx-14 text-muted ms-2">
                  <span>{billerInfo?.loan_type} Loan</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <Button
              id="demo-positioned-button"
              aria-controls={BooleanOpen ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={BooleanOpen ? "true" : undefined}
              onClick={handleClick}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#1A1A1A" fillRule="evenodd" opacity=".44">
                  <path d="M11 13.063a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.124zm0-1.376a.687.687 0 1 0 0-1.374.687.687 0 0 0 0 1.374zM11 7.563a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.124zm0-1.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375zM11 18.563a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.124zm0-1.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.374z" />
                </g>
              </svg>
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={BooleanOpen}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>Menu Item</MenuItem>
              <MenuItem onClick={handleClose}>Menu Item</MenuItem>
              <MenuItem onClick={handleClose}>Menu Item</MenuItem>
            </Menu>
          </div>
        </div>
        <div className="home-base home-base-notification h-100">
          <div className="home-content px-3 pt-2">
            <div className="row">
              <div className="col-12">
                <div className="py-0 px-0 text-center mb-2">
                  <p className="mb-1 tx-12 time-stamp">
                    <span>
                      {moment().utcOffset("+05:30").format("DD MMM hh:mm a")}
                    </span>
                  </p>
                </div>
              </div>
              {err === false ? (
                transpage?.length > 0 ? (
                  <>
                    {transpage?.map((item) => {
                      var status = "";
                      var name = "";
                      if (item?.bbps_transaction_status === "FA") {
                        status = FailedClickOpen;
                        name = "Failed";
                      } else if (item?.bbps_transaction_status === "SU") {
                        status = PaidClickOpen;
                        name = "Paid";
                      } else {
                        status = ProcessingClickOpen;
                        name = "Processing";
                      }
                      return (
                        <>
                          {" "}
                          {item.type !== "cashback" ? (
                            <div className="col-7">
                              <div
                                className="home-card"
                                onClick={() => status(item)}
                              >
                                <div className="mb-3">
                                  <div className="d-flex align-center ">
                                    <div>
                                      <p className="mb-1 lh-1 text-black">
                                        Payment to {item.biller_name}
                                      </p>
                                      <p className="mb-0 lh-1 tx-12">
                                        <span>{item.type}</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <p className="mb-1 tx-24 font-500 text-black">
                                    Rs. {item.amount}
                                  </p>
                                </div>
                                <div className="d-flex align-center justify-between">
                                  <div className="d-flex align-center">
                                    {name == "Paid" ? (
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
                                    ) : name == "Failed" ? (
                                      <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="me-1"
                                      >
                                        <g fill="none" fillRule="evenodd">
                                          <path
                                            d="M5.002 12.936a5.5 5.5 0 1 1 7.778-7.778 5.5 5.5 0 0 1-7.778 7.778z"
                                            fill="#FF3B30"
                                          />
                                          <path
                                            d="M9.952 7.279a.5.5 0 0 1 .707.707L7.83 10.814a.5.5 0 0 1-.707-.707L9.952 7.28z"
                                            fill="#FFF"
                                          />
                                          <path
                                            d="M7.123 7.986a.5.5 0 0 1 .707-.707l2.829 2.828a.5.5 0 0 1-.707.707L7.123 7.986z"
                                            fill="#FFF"
                                          />
                                        </g>
                                      </svg>
                                    ) : (
                                      <>
                                        <svg
                                          width="14"
                                          height="14"
                                          viewBox="0 0 14 14"
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="me-2"
                                        >
                                          <g fill="none" fillRule="evenodd">
                                            <path
                                              d="M7 13.188A6.187 6.187 0 1 1 7 .813a6.187 6.187 0 0 1 0 12.374z"
                                              fill="#FF9500"
                                            />
                                            <path
                                              d="M6.438 4.75a.563.563 0 0 1 1.125 0V7a.563.563 0 0 1-1.125 0V4.75zM7 8.688a.563.563 0 1 1 0 1.125.563.563 0 0 1 0-1.126z"
                                              fill="#FFF"
                                            />
                                          </g>
                                        </svg>
                                      </>
                                    )}

                                    <p className="mb-0 lh-1 tx-12">
                                      <span>
                                        {name} |{" "}
                                        {getDateValue(
                                          item?.transaction_datetime
                                        ).getDate()}{" "}
                                        {getDateValue(
                                          item?.transaction_datetime
                                        ).toLocaleString("en-us", {
                                          month: "short",
                                        })}
                                      </span>
                                    </p>
                                  </div>
                                  <div>
                                    <svg
                                      width="18"
                                      height="18"
                                      viewBox="0 0 18 18"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.892 9 6.915 6.023a.562.562 0 1 1 .795-.796l3.375 3.375c.22.22.22.576 0 .796L7.71 12.773a.562.562 0 1 1-.795-.796L9.892 9z"
                                        fill="#1A1A1A"
                                        fillRule="evenodd"
                                        opacity=".496"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <div className="row justify-content-end">
                                <div className="col-7">
                                  <div
                                    className="home-card px-0 pb-0"
                                    onClick={() => handopen(item)}
                                  >
                                    <div className="d-flex justify-between px-3">
                                      <div>
                                        <p className="mb-1 lh-1 tx-24 font-500 text-black">
                                          Scratch Now
                                        </p>
                                        <p className="mb-0 lh-1 tx-12">
                                          <span>Earn a reward!</span>
                                        </p>
                                      </div>
                                      <div>
                                        <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 18 18"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M9.892 9 6.915 6.023a.562.562 0 1 1 .795-.796l3.375 3.375c.22.22.22.576 0 .796L7.71 12.773a.562.562 0 1 1-.795-.796L9.892 9z"
                                            fill="#1A1A1A"
                                            fillRule="evenodd"
                                            opacity=".496"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="mt-3">
                                      <img
                                        className="ScratchCard"
                                        src={ScratchHalf}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      );
                    })}
                  </>
                ) : transpage ? (
                  loading && <PeSpinner />
                ) : (
                  <>
                    {" "}  <p1> There is No Record..</p1>{" "}
                  </> )
              ) : (
                <>
                 <p1 style={{ color: "Red", fontSize: "20px" }}><strong>No Records</strong> [....{msg}]</p1>{" "}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handclose}
        className="modal-alert"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-wrap scratch-modal p-0 text-center">
          {isreed === true ? (
            <>
              {" "}
              <div
                className={!showActive ? "d-none" : "d-block py-3 px-3"}
                style={{ height: "300px", width: "300px" }}
              >
                <div style={{ marginTop: "120px" }}>
                  <p className="mb-1 lh-1 tx-24 font-500 text-black">
                    Rs. {cashAmount}
                  </p>
                  <p className="mb-0 lh-1 tx-12">
                    <span>You earned a reward!</span>
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                className={showActive ? "d-block py-3 px-3" : "d-none"}
                style={{ marginLeft: "-153px" }}
              >
                {" "}
                <ScratchCard {...settings}></ScratchCard>
              </div>
            </>
          )}
          <div
            className={showActive ? "d-none" : "d-block py-3 px-3"}
            style={{ height: "300px", width: "300px" }}
          >
            <div style={{ marginTop: "120px" }}>
              <p className="mb-1 lh-1 tx-24 font-500 text-black">
                Rs. {cashAmount}
              </p>
              <p className="mb-0 lh-1 tx-12">
                <span>You earned a reward!</span>
              </p>
            </div>
          </div>
          <div className="mo-close">
            <a onClick={handclose} type="submit" className="btn btn-link">
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
    </>
  );
};

export default PayEmiTransPage;
