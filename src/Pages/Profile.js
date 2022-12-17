import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MainMenu from "../../src/Components/MainMenu";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
// Images
import ProfileImg from "../Static/Images/profile.png";

function Profile(props) {
  // mobile number
  const mobileNumber = localStorage.getItem("MobileNumber");
 
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
    formState: { errors },
    reset,
  } = useForm();

  const [image, setImage] = useState({
    image: "https://i.ibb.co/fY5xtWh/admin.png",
  });
  const handleImageSubmit = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
    event.preventDefault();
    console.log("click");
  };

  const onSubmit = (data) => {
    console.log(data, image?.image);
    fetch(
      `https://api.payemi.net/profileInfo/?phone_number=${mobileNumber}&address=${data?.address}&fullname=${data?.full_name}&photo=${image?.image}&email=${data?.user_email}&user_name=${data.user_name}`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error === true) {
          alert(data?.message);
        } else {
          localStorage.setItem("profile_info", JSON.stringify(data?.data[0]));
          localStorage.setItem("full_name", data?.data[0].fullname);
          swal("Good job!", "Your Profile Update", "success").then(() =>
            window.location.reload(true)
          );
        }
      });
  };
  const profile_info = JSON.parse(localStorage.getItem("profile_info"));

  console.log(image?.image);
  return (
    <>
      <Box sx={{ display: "flex" }} className="menu-sidebar">
        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={openq}
        >
          <MainMenu />
        </Drawer>
      </Box>
      <div className={open1 ? "menu-close" : "menu-open"}>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                <p className="mb-0">Profile</p>
              </div>
            </div>
            <div className="py-3 px-4 text-center profile-img">
              {image?.image == "https://i.ibb.co/fY5xtWh/admin.png" ? (
                <img
                  id="target"
                  width={"120px"}
                  height={"120px"}
                  className="profile-img rounded-circle"
                  src={
                    profile_info?.profile_url
                      ? profile_info?.profile_url
                      : image?.image
                  }
                  alt=""
                />
              ) : (
                <img
                  id="target"
                  width={"120px"}
                  height={"120px"}
                  className="profile-img rounded-circle"
                  src={image?.image || ProfileImg}
                  alt="this is "
                />
              )}
              <p className="mb-0 tx-16">
                <label htmlFor="files" className="mb-0 tx-16 btn">
                  Edit
                </label>
                <input
                  {...register("photo")}
                  onChange={(event) => handleImageSubmit(event)}
                  id="files"
                  style={{ visibility: "hidden" }}
                  type="file"
                />
              </p>
            </div>
            <div className="py-2 px-3 mx-3 profile-info mb-3">
              <p className="mb-0 tx-14 text-muted">Full Name</p>
              <input
                {...register("full_name", { required: "true" })}
                type="text"
                className="form-control"
                defaultValue={profile_info?.fullname}
              />
              {errors?.full_name && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>

            <div className="py-2 px-3 mx-3 profile-info mb-3">
              <p className="mb-0 tx-14 text-muted">Email</p>
              <input
                {...register("user_email", { required: "true" })}
                type="email"
                className="form-control"
                defaultValue={profile_info?.email}
              />
              {errors?.user_email && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>

            <div className="py-2 px-3 mx-3 profile-info mb-3">
              <p className="mb-0 tx-14 text-muted">Phone Number</p>
              <input
                type="text"
                className="form-control"
                value={mobileNumber || ""}
                readOnly
              />
            </div>

            <div className="py-2 px-3 mx-3 profile-info mb-3">
              <p className="mb-0 tx-14 text-muted">Username</p>
              <input
                {...register("user_name", { required: "true" })}
                type="text"
                className="form-control"
                defaultValue={profile_info?.user_name}
              />
              {errors?.user_name && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>

            <div className="py-2 px-3 mx-3 profile-info mb-3">
              <p className="mb-0 tx-14 text-muted">Address</p>
              <textarea
                {...register("address", { required: "true" })}
                className="form-control form-textarea"
                defaultValue={profile_info?.address}
              />
              {errors?.address && (
                <span className="text-danger fw-bold">
                  This field is required
                </span>
              )}
            </div>

            <div className="py-2 mx-3 mb-3">
              <input
                type="submit"
                // onClick={handleOpen}
                className="btn btn-primary w-100"
                value={"Update"}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
