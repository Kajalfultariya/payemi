import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const UseSignIn = (props) => {
  // react router
  const history = useHistory();
  const [number, setNumber] = React.useState();

  const [verifyError, setVerifyError] = React.useState("");
  //   verfication useState
  const [code1, setCode1] = React.useState();
  const [code2, setCode2] = React.useState();
  const [code3, setCode3] = React.useState();
  const [code4, setCode4] = React.useState();

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
        if (data?.payload) {
          const userStatus = localStorage.setItem("user_status", data.new_user);
          alert(`your verify code is ${data.payload}`);
        }
        if (data.error === true) {
          alert(data.message);
        }
      });
  };
  const userStatus = localStorage.getItem("user_status");
  console.log(userStatus);
  //   handle verify
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
        if (data?.customer_id) {
          localStorage.setItem("profile", data?.id);
          localStorage.setItem("access_token", data?.access_token);
          localStorage.setItem("full_name", data?.fullname);
          localStorage.setItem("login_time", new Date());
          if (userStatus === true) {
            window.location.href = "/category";
          } else {
            window.location.href = "/home";
          }
        } else if (data.error === true) {
          setVerifyError(data.message);
        }
      });
  };
  return {
    number,
    setNumber,
    verifyError,
    setVerifyError,
    HandleSendOtp,
    handleVerify,
    code1,
    setCode1,
    code2,
    setCode2,
    code3,
    setCode3,
    code4,
    setCode4,
  };
};

export default UseSignIn;
