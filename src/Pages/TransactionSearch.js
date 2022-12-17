import React, { useRef, useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MainMenu from "../Components/MainMenu";
import { styled, useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import { getTransactionSearchRefData } from "../API";

function TransactionSearch(props) {
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

  const [OtpOpen, setOtpOpen] = React.useState(false);
  const handleOpen = () => setOtpOpen(true);
  const handleClose = () => setOtpOpen(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // use state
  const [transasctionData, setTransasctionData] = useState([]);
  const [error, setError] = useState();

  const onSubmit = async (data) => {
    console.log(data?.start_date, data?.end_date);
    // check condition
    if (data?.transasction_reference_id) {
      fetch(
        `https://api.payemi.net/transactionSearch/?transaction_ref_id=${data?.transasction_reference_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.error === true) {
            console.log(data);
            setError(data.message);
          } else {
            setTransasctionData(data?.data[0]);
            reset();
            setError("");
            handleOpen();
          }
        });
    } else if (data?.mobile_number && data?.start_date && data?.end_date) {
      const url = `https://api.payemi.net/transactionSearch/?mobile_no=${data?.mobile_number}&start_date=${data?.start_date}&end_date=${data?.end_date}`;

      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error === true) {
            setError(data.message);
          } else {
            setTransasctionData(data?.data[0]);
            reset();
            setError("");
            handleOpen();
            console.log(data);
          }
        });
    } else {
      setError("please enter your value");
    }
  };
  return (
    <>
      <Box sx={{ display: "flex" }} className="menu-sidebar">
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
          variant="persistent"
          anchor="left"
          open={openq}
        >
          <MainMenu />
        </Drawer>
      </Box>
      <div className={open1 ? "menu-close" : "menu-open"}>
        <div className="home-main header-second">
          <div className="drawer-toggle">
            <a onClick={handleDrawerClose}></a>
          </div>
          <div className="d-flex align-center justify-between px-4">
            <div className="d-flex align-center position-relative head-info">
              <div className="me-2">
                <a onClick={handleDrawerOpen}>
                  <svg
                    width="37"
                    height="37"
                    viewBox="0 0 37 37"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#505050" fillRule="evenodd">
                      <path d="M11.563 12.719a1.156 1.156 0 0 1 0-2.313h15.03a1.156 1.156 0 0 1 0 2.313h-15.03zM11.563 19.656a1.156 1.156 0 0 1 0-2.312h15.03a1.156 1.156 0 0 1 0 2.312h-15.03zM11.563 26.594a1.156 1.156 0 0 1 0-2.313h15.03a1.156 1.156 0 0 1 0 2.313h-15.03z" />
                    </g>
                  </svg>
                </a>
              </div>
              <p className="mb-0 tx-16">Transaction Search</p>
            </div>
            <div>
              <img src={BharatBillpay} />
            </div>
          </div>

          <div className="px-4 complaint-tracking mt-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row mb-4 position-relative mobile-otp">
                <div className="col-12">
                  <label className="col-form-label pt-0">
                    Transasction Reference Id
                  </label>
                  <input
                    {...register("transasction_reference_id")}
                    type="text"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="seprator-or mb-2">
                <div>
                  <span>Or</span>
                </div>
              </div>

              <div className="row mb-4 position-relative mobile-otp">
                <div className="col-12">
                  <label className="col-form-label pt-0">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    {...register("mobile_number")}
                  />
                </div>
              </div>
              <div className="row mb-4 position-relative">
                <div className="col-12">
                  <label className="col-form-label pt-0">
                    Select Date Range
                  </label>
                  <div className="row">
                    <div className="col-6">
                      <input
                        type="date"
                        className="form-control"
                        {...register("start_date")}
                      />
                    </div>
                    <div className="col-6">
                      <input
                        type="date"
                        className="form-control"
                        {...register("end_date")}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-danger">{error}</p>
              <div className="row mb-4 position-relative">
                <div className="col-12">
                  <input
                    type="submit"
                    // onClick={handleOpen}
                    className="btn btn-primary w-100"
                    value={"Search"}
                  />
                </div>
              </div>
            </form>

            {/* OTP */}
            <Modal
              open={OtpOpen}
              onClose={handleClose}
              className="modal-alert"
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="modal-wrap">
                <p className="text-black mb-0 tx-16">
                  <strong>Transaction Details</strong>
                </p>
                <div className="d-flex align-center justify-content-between">
                  <div>Agent Id</div>
                  <div>{transasctionData?.agentId}</div>
                </div>
                <div className="d-flex align-center justify-content-between">
                  <div>Amount</div>
                  <div>{transasctionData?.amount}</div>
                </div>
                <div className="d-flex align-center justify-content-between">
                  <div>Biller Name</div>
                  <div>{transasctionData?.biller_name}</div>
                </div>
                <div className="d-flex align-center justify-content-between">
                  <div>Transaction Date</div>
                  <div>{transasctionData?.transaction_date}</div>
                </div>
                <div className="d-flex align-center justify-content-between">
                  <div>Txn Ref Id</div>
                  <div>{transasctionData?.transaction_ref_id}</div>
                </div>
                <div className="d-flex align-center justify-content-between">
                  <div>Transaction Status</div>
                  <div className="text-success">
                    {transasctionData?.transation_status}
                  </div>
                </div>
                <div className="mo-close">
                  <a
                    onClick={handleClose}
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
        </div>
      </div>
    </>
  );
}

export default TransactionSearch;
