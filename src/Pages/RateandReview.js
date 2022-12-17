import React, { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MainMenu from "../Components/MainMenu";
import { styled, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

function RateandReview(props) {
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
              <p className="mb-0">Rate and Review</p>
            </div>
          </div>

          <div className="review-page py-2 mx-3 mb-3">Review</div>

          <div className="py-2 mx-3 mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Add Your Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RateandReview;
