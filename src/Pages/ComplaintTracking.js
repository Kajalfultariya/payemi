import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MainMenu from "../Components/MainMenu";
import { styled, useTheme } from "@mui/material/styles";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import OtpMobile from "../Static/Images/otp-mobile.webp";

import Modal from "@mui/material/Modal";

function ComplaintTracking(props) {
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

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [complaintData, setComplaintData] = useState();
  const [ComplaintOpen, setComplaintOpen] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data);
    fetch(
      `https://api.payemi.net/trackComplaint/?comp_id=${data.complaint_Id}&comp_type=Transaction`,
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
        setComplaintData(data.data);
        setComplaintOpen(true);
        console.log(data);
        reset();
      });
  };

  const handleComplaintClose = () => setComplaintOpen(false);

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
              <p className="mb-0">Complaint Tracking</p>
            </div>
            <div>
              <img src={BharatBillpay} />
            </div>
          </div>

          <div className="px-4 complaint-tracking mt-5">
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
                  <div></div> Transaction
                </button>
              </li>
            </ul>
            <form
              className="tab-content"
              id="myTabContent"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div
                className="tab-pane fade show active"
                id="registration"
                role="tabpanel"
                aria-labelledby="registration-tab"
              >
                <div className="row mb-4 position-relative mobile-otp">
                  <div className="col-12">
                    <label className="col-form-label pt-0">Complaint Id</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("complaint_Id", { required: true })}
                      placeholder="Enter your Complaint Id"
                    />
                  </div>
                </div>
                {errors.complaint_Id && (
                  <span className="fw-bold text-danger d-block my-3">
                    This field is required
                  </span>
                )}
                <div className="row mb-4 position-relative">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">
                      Check Status
                    </button>
                  </div>
                </div>
              </div>
            </form>

            {/* Complaint Success */}
            <Modal
              open={ComplaintOpen}
              onClose={handleComplaintClose}
              className="modal-success"
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="modal-wrap">
                <div className="mo-close">
                  <a onClick={handleComplaintClose} type="submit">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.928 3.072c-4.095-4.096-10.76-4.096-14.856 0s-4.096 10.76 0 14.856 10.76 4.096 14.856 0 4.096-10.76 0-14.856zm-3.285 11.57a.808.808 0 0 1-1.143 0l-3-3-3.142 3.143a.808.808 0 1 1-1.143-1.143L9.357 10.5l-3-3A.808.808 0 1 1 7.5 6.357l3 3L13.357 6.5A.808.808 0 1 1 14.5 7.643L11.643 10.5l3 3a.808.808 0 0 1 0 1.142z"
                        fill="#ffffff"
                        fillRule="nonzero"
                      />
                    </svg>
                  </a>
                </div>
                <p className="mb-2 tx-16">
                  <strong>Complaint Registered Successfully!</strong>
                </p>
                <div className="row">
                  <div className="col-6">Complaint Id</div>
                  <div className="col-6">{complaintData?.complaint_id} </div>
                </div>
                <div className="row">
                  <div className="col-6">Complaint Assigned</div>
                  <div className="col-6">
                    {complaintData?.complaint_assigned_to}
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">Complaint Status</div>
                  <div className="col-6">{complaintData?.complaint_status}</div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComplaintTracking;
