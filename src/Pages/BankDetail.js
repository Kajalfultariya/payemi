import React, { Fragment, useEffect, useState } from "react";
import { getInputParamField } from "../API";
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
import { getDetailData } from "../API";
import PeSpinner from "../Components/PeSpinner";
import Category from "./Category";
import PayEmi from "./PayEmi";
import { useHistory, useParams } from "react-router-dom";

const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const GetBankDetail = (props) => {
  const history = useHistory();
  const { billerId } = useParams();

  const logo = JSON.parse(localStorage.getItem("currentBankBranch"))?.logo_url;
  const pid = JSON.parse(localStorage.getItem("profile"));
  const mobile = JSON.parse(localStorage.getItem("MobileNumber"));

  const [data, setData] = useState([]);
  const [gDetail, setGDetail] = useState([]);
  const [optionalFields, setOptionalFields] = useState(null);
  const [mandratoryFields, setMandratoryFields] = useState(null);
  const [saveOptinalData, setSaveOptinalData] = useState([]);
  const [saveMandratoryData, setSaveMandratoryData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [mno, setMno] = useState("");
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const [showError, setShowError] = useState(true);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchInputData();
  }, []);

  const fetchInputData = async () => {
    const response = await getInputParamField(billerId);
    setErr(response?.error);
    setMsg(response?.message);
    setLoading(false);
    if (response) {
      setData(response);
      let temp = [];
      let temp1 = [];
      let optional = response?.data?.optional_params;
      let mandatory = response?.data?.mandatory_params;
      optional !== null &&
        Object.keys(optional).map((key, v) => {
          temp.push({
            id: v,
            label: key,
            value: optional[key]?.key,
            type: optional[key]?.type,
            regex: optional[key]?.regex,
          });
        });
      mandatory !== null &&
        Object.keys(mandatory).map((key, v) => {
          temp1.push({
            id: v,
            label: key,
            value: mandatory[key]?.key,
            type: mandatory[key]?.type,
            regex: mandatory[key]?.regex,
          });
        });
      setOptionalFields(temp);
      setMandratoryFields(temp1);
    }
  };

  var removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  };

  const getInputData = (e, all) => {
    let { value } = e.target;
    if (all?.label?.indexOf("Mobile") !== -1) {
      setMno(e.target.value);
    }
    let temp1 = [...errors];
    var regex = new RegExp(all?.regex);
    if (all?.regex === "null") {
      removeByAttr(temp1, all?.id, 1);
    } else if (!regex.test(value)) {
      var err = temp1.find((val) => val?.id === all?.id);
      err === undefined &&
        temp1.push({
          id: all?.id,
          msg: "Please enter " + all?.label + " in correct format.",
        });
    }
    if (regex.test(value)) {
      temp1.splice(
        temp1.findIndex((a) => a.id === all.id),
        1
      );
    }
    setErrors(temp1);
    setSaveOptinalData({ ...saveOptinalData, [all?.value]: value });
  };

  const getInputMandratoryData = (e, all) => {
    if (all?.label?.indexOf("Mobile") !== -1) {
      setMno(e.target.value);
    }
    let { value } = e.target;
    let temp1 = [...errors];
    var regex = new RegExp(all?.regex);

    if (all?.regex === "null") {
      removeByAttr(temp1, all?.id, 1);
    } else if (!regex.test(value)) {
      temp1.push({
        id: all?.id,
        msg: "Please enter " + all?.label + " in correct format.",
      });
    } else {
      removeByAttr(temp1, all?.id, 1);
    }

    setErrors(temp1);
    setSaveMandratoryData({ ...saveMandratoryData, [all?.value]: value });
  };

  const [RegisteredMobile, RegisteredMobilesetOpen] = React.useState(false);
  const RegisteredMobileClickOpen = () => {
    RegisteredMobilesetOpen(true);
  };
  const RegisteredMobileClose = () => {
    RegisteredMobilesetOpen(false);
  };

  const fetchGetDetail = async (pid, billerId, mobile, both) => {
    setLoader(true);
    let response = await getDetailData(pid, billerId, mobile, both);
    console.log(response);
    if (response) {
      setGDetail(response);
      setLoader(false);
      errorHand(response);
      console.log(response);
      localStorage.setItem("fetch_bill_data", JSON.stringify(response));
      console.log("gDetail::", response);
    } else {
      setGDetail("");
      setShowError(true);
    }
  };

  const onClickGetBankDetail = (e) => {
    e.preventDefault();
    let md = {};
    let od = {};
    let both = {};
    if (saveMandratoryData !== null) {
      Object.keys(saveMandratoryData).map((key, v) => {
        md = { ...md, [key]: saveMandratoryData[key] };
      });
    }
    if (saveOptinalData !== null) {
      Object.keys(saveOptinalData).map((key, v) => {
        od = { ...od, [key]: saveOptinalData[key] };
      });
    }
    both = { ...md, ...od };

    if (
      errors.length > 0 ||
      mandratoryFields?.length !== Object.keys(saveMandratoryData).length
    ) {
      setShowError(false);
    } else if (mno !== localStorage.getItem("MobileNumber") && mno === null) {
      RegisteredMobileClickOpen();
    } else {
      fetchGetDetail(pid, billerId, mobile, both);
    }
  };

  const errorHand = (data) => {
    if (data?.status === 200) {
      setShowError(true);
      window.location.href = "/pay-emi";
      // history.push("pay-emi");
      console.log("go to next");
    } else {
      setShowError(false);
      console.log("error", data);
    }
  };
  const backToReturn = () => {
  
    window.location.href = "/billers";
    // history.push("billers")
  };

  return (
    <>
      <>
        <div className="bank-pay">
          <div
            className="d-flex align-center justify-between"
            style={{ marginTop: "20px" }}
          >
            <div onClick={() => backToReturn()}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#1A1A1A">
                  <path d="M23.25 14.531a.969.969 0 1 1 0 1.938H7.75a.969.969 0 0 1 0-1.938h15.5z" />
                  <path d="m9.12 15.5 5.128 5.127a.969.969 0 0 1-1.37 1.37l-5.813-5.812a.969.969 0 0 1 0-1.37l5.812-5.813a.969.969 0 1 1 1.37 1.37L9.12 15.5z" />
                </g>
              </svg>
              <img
                src={data?.data?.logo}
                height="20px"
                width="20px"
                className="mx-2"
              />
              <span className="relative t-4">Pay Your Loan EMI</span>
            </div>
            <div>
              <img src={BharatBillpay} />
            </div>
          </div>
        </div>
        <div className="py-0 px-3 mt-4">
          <div className="container-fluid">
            <h5 className="bank_logo_fields">
              <img src={data?.data?.logo} height="30px" width="30px" />
              <span className="mx-1">{data?.data?.billerName}</span>
            </h5>
            <div className="mt-4">
              {err === false ? (
                mandratoryFields !== null ? (
                  mandratoryFields.map((item, index) => {
                    var err = errors.find((val) => val?.id === item?.id)?.msg;
                    return (
                      <div className="row mb-4">
                        <div className="col-12">
                          <label for="Batch" className="col-form-label pt-0">
                            {item?.label} *
                          </label>
                          {item?.label === "Mobile Number" ||
                            item?.label === "Registered Mobile Number" ? (
                            <>
                              {" "}
                              <input
                                type={
                                  item?.type === "NUMERIC" ? "number" : "text"
                                }
                                className="form-control w-75"
                                name="mno"
                                value={mno}
                                onChange={(e) => {
                                  getInputMandratoryData(e, item);
                                }}
                              />
                            </>
                          ) : (
                            <>
                              {" "}
                              <input
                                name={item?.value}
                                onChange={(e) =>
                                  getInputMandratoryData(e, item)
                                }
                                type={
                                  item?.type === "NUMERIC" ? "number" : "text"
                                }
                                placeholder={"Enter Your " + item?.label}
                                className="form-control"
                              ></input>
                            </>
                          )}
                          {err !== undefined && (
                            <div className="text-danger">{err}</div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : !mandratoryFields ? (
                  loading && <PeSpinner />
                ) : (
                  <>
                    {" "}
                    <p1> There is No Record..</p1>{" "}
                  </>
                )
              ) : (
                <>
                  <p1>No Records [..{msg}]</p1>{" "}
                </>
              )}

              {err === false ? (
                optionalFields !== null ? (
                  optionalFields.map((item, index) => {
                    var err = errors.find((val) => val?.id === item?.id)?.msg;
                    return (
                      <div className="row mb-4">
                        <div className="col-12">
                          <label for="Batch" className="col-form-label pt-0">
                            {item?.label}
                          </label>
                          {item?.label === "Mobile" ||
                            item?.label === "Registered Mobile Number" ? (
                            <>
                              {" "}
                              <input
                                type={
                                  item?.type === "NUMERIC" ? "number" : "text"
                                }
                                className="form-control w-75"
                                name="mno"
                                value={mno}
                                onChange={(e) => {
                                  getInputData(e, item);
                                }}
                              />
                            </>
                          ) : (
                            <>
                              {" "}
                              <input
                                name={item?.value}
                                onChange={(e) => getInputData(e, item)}
                                type={
                                  item?.type === "NUMERIC" ? "number" : "text"
                                }
                                placeholder={"Enter Your " + item?.label}
                                className="form-control"
                              ></input>{" "}
                            </>
                          )}

                          {err !== undefined && (
                            <div className="text-danger">{err}</div>
                          )}
                        </div>
                      </div>
                    );
                  })
                ) : !optionalFields ? (
                  loading && <PeSpinner />
                ) : (
                  <>
                    {" "}
                    <p1> There is No Record..</p1>{" "}
                  </>
                )
              ) : (
                <>
                  <p1>No Records [..{msg}]</p1>{" "}
                </>
              )}
              {showError === false ? (
                <p1 style={{ color: "red" }}>
                  {gDetail?.errorMessage
                    ? gDetail.errorMessage
                    : gDetail.message}
                </p1>
              ) : (
                <></>
              )}
              {err === false ? (
                <div className="row mb-3">
                  <div className="col-12">
                    <button
                      onClick={onClickGetBankDetail}
                      type="submit"
                      className="btn btn-primary w-100"
                      disabled={loader}
                    >
                      {loader === true ? "please wait ..." : "Get Details"}
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </>
      <Dialog
        fullScreen
        open={RegisteredMobile}
        onClose={RegisteredMobileClose}
        TransitionComponent={TransitionUp}
        className="modal-half"
      >
        <AppBar sx={{ position: "relative" }} className="modal-half-header">
          <div className="text-center">
            <div onClick={RegisteredMobileClose}>
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.05 3.95c-5.265-5.266-13.834-5.267-19.1 0-5.267 5.266-5.266 13.834 0 19.1 5.265 5.267 13.834 5.267 19.1 0 5.266-5.266 5.266-13.835 0-19.1zm-4.224 14.876a1.039 1.039 0 0 1-1.469 0L13.5 14.969l-4.04 4.04a1.039 1.039 0 1 1-1.47-1.469l4.041-4.04-3.857-3.857a1.039 1.039 0 1 1 1.469-1.47l3.857 3.858 3.673-3.673a1.039 1.039 0 1 1 1.47 1.469L14.968 13.5l3.857 3.857a1.039 1.039 0 0 1 0 1.469z"
                  fill="#E6E6E6"
                  fillRule="nonzero"
                  opacity=".495"
                />
              </svg>
            </div>
          </div>
        </AppBar>
        <div className="alert alert-danger md-alert" role="alert">
          This mobile number not matched. Try again other mobile number.
        </div>

        <div className="modal-half-content pb-4 px-4">
          <div className="py-0 mb-4">
            <p className="mb-1 tx-22 font-500 text-center">Registered Mobile</p>
            <p className="mb-0 tx-14 text-black text-center">
              Enter the mobile number registered with{" "}
              {localStorage.getItem("currentBank")}, when the loan was taken
            </p>
          </div>
          <div className="row mb-4 position-relative mobile-otp">
            <div className="col-12">
              <div className="d-flex align-center number-box">
                <select className="form-select w-25">
                  <option value="">+91</option>
                  <option value="">+92</option>
                  <option value="">+93</option>
                </select>
                <input
                  name="Batch"
                  type="text"
                  className="form-control w-75"
                  placeholder="Enter Your Mobile Number"
                  name="mno"
                  value={mno}
                  onChange={(e) => {
                    setMno(e.target.value);
                  }}
                ></input>
              </div>
            </div>
          </div>
          <div className="row mb-4 position-relative mobile-otp">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={onClickGetBankDetail}
              >
                Get Details
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default GetBankDetail;
