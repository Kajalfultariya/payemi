import React, { useRef, useState, useEffect } from "react";

// Images
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import AxisHeader from "../Static/Images/axis-header.webp";
import Hdfc from "../Static/Images/hdfc.webp";
import DoneIcon from "../Static/Images/done-icon.webp";
import GooglePlay from "../Static/Images/google-play-logo.webp";

import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Slide from "@mui/material/Slide";
//
import PeSpinner from "../Components/PeSpinner";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../context";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});
const TransitionUp = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function PayEmi(props) {
  const [inputAmount, setInputAmount] = useState();
  const [amountError, setAmountError] = useState("");
  const [error, setError] = useState("");

  // localstorage get items
  const data = JSON.parse(localStorage.getItem("fetch_bill_data"));
  console.log(data);
  const userPaymentInfo = data.payload;
  const exactness = data.billerPaymentExactness;
  const billerPaymentChannel = data.billerPaymentChannel?.INT;
  const maxAmount = billerPaymentChannel?.maxAmount;
  const minAmount = billerPaymentChannel?.minAmount;
  const totalAmount = userPaymentInfo?.map((data) => parseInt(data.amount));

  const {
    BillPaySevenopen,
    BillPaySevensetOpen,
    BillPaySixopen,
    BillPaySixsetOpen,
    BillPaySevenClose,
  } = useGlobalContext();
  const history = useHistory();
  {
    /* Bill Pay Step Six */
  }

  const BillPaySixClickOpen = () => {
    BillPaySixsetOpen(true);
  };
  const BillPaySixClose = () => {
    BillPaySixsetOpen(false);
  };

  {
    /* Bill Pay Step Seven */
  }

  useEffect(() => {
    const totalAmount = userPaymentInfo?.map((data) => parseInt(data.amount));
    if (exactness == "EXACT") {
      setInputAmount(totalAmount);
    } else if (!exactness) {
      setInputAmount(inputAmount);
    } else if (exactness == "EXACT_DOWN") {
      setInputAmount(totalAmount);
    }
  }, [exactness]);

  const profie_id = userPaymentInfo?.map((data) => data?.profile_id);
  const bill_id = userPaymentInfo?.map((data) => data?.id);

  const BillPaySevenClickOpen = (e) => {
    fetch(
      `https://api.payemi.net/CreateOrder/?id=${profie_id}&bill_id=${bill_id}&amount=${inputAmount}`,

      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.message);
        } else {
          // razor pay
          const options = {
            key: "rzp_test_I4yUvwRiUPNWay",
            amount: inputAmount + "00",
            currency: "INR",
            name: localStorage.getItem("full_name"),
            order_id: `${data?.order_id}`,
            handler: function (response) {
              localStorage.setItem("amount", inputAmount);
              BillPaySevensetOpen(true);
              history.push("/processing");
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
            retry: {
              enabled: false,
            },
          };
          let rzp1 = new window.Razorpay(options);
          rzp1.on("payment.failed", function (response) {
            localStorage.setItem("amount", inputAmount);
            history.push("/failure");
          });
          if (inputAmount < minAmount / 100) {
            setAmountError(`your amount should be greater than ${minAmount} `);
          } else if (maxAmount / 100 < inputAmount) {
            setAmountError(
              `your amount should be greater than and less than ${maxAmount}`
            );
          } else {
            if (exactness == "EXACT_DOWN") {
              if (totalAmount < inputAmount) {
                debugger;
                setAmountError(
                  `Your Value less than ${totalAmount}`,
                  inputAmount
                );
                console.log("done", inputAmount);
                setError("");
              } else {
                rzp1.open();
                setAmountError("");
                console.log(maxAmount);
                setError("");
              }
            } else if (exactness == "EXACT_UP") {
              if (inputAmount < totalAmount) {
                setAmountError(`Your Value increase than ${totalAmount}`);
                console.log("done");
                setError("");
              } else {
                rzp1.open();
                console.log("object");
                setAmountError("");
                setError("");
                console.log(maxAmount);
              }
            }
          }
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <div className="px-4 phone-base">
        <div className="side-pane side-pane-second">
          <AppBar sx={{ position: "relative" }} className="side-pane-header">
            <div className="d-flex align-center justify-between">
              <div className="d-flex align-center">
                <img
                  alt="bank logo"
                  src={
                    JSON.parse(localStorage.getItem("currentBankBranch"))
                      ?.logo_url
                  }
                  className="head-icon-2 me-2"
                />
                <div>
                  <p className="m-0">
                    {
                      JSON.parse(localStorage.getItem("currentBankBranch"))
                        ?.billerName
                    }
                  </p>
                  <p className="m-0 text-muted">
                    {localStorage.getItem("currentCategory")}
                  </p>
                </div>
              </div>
              <div>
                <img src={BharatBillpay} />
              </div>
            </div>
          </AppBar>

          {userPaymentInfo?.map((data) => (
            <div key={data["biller_id"]} className="py-0 px-3">
              <div className="row mb-3">
                <div className="col-12">
                  <div className="tx-16 text-black">Payment Information</div>
                </div>
              </div>
              {data?.RespDueDate && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Due Date</p>
                      <p className="m-0">{data?.RespDueDate}</p>
                    </div>
                  </div>
                </div>
              )}
              {data["Charges Levied"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Charges Levied</p>
                      <p className="m-0">{userPaymentInfo["Charges Levied"]}</p>
                    </div>
                  </div>
                </div>
              )}
              {data["Base Bill Amount"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Base Bill Amount</p>
                      <p className="m-0">
                        {userPaymentInfo["Base Bill Amount"]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {data["amountOptions"]["Late Payment Fee"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Late Payment Fee</p>
                      <p className="m-0">
                        {data["amountOptions"]["Late Payment Fee"]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {data["amountOptions"]["Additional Charges"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Additional Charges</p>
                      <p className="m-0">
                        {data["amountOptions"]["Additional Charges"]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {data["amountOptions"]["Fixed Charges"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Fixed Charges</p>
                      <p className="m-0">
                        {data["amountOptions"]["Fixed Charges"]}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {data["EMI"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">EMI</p>
                      <p className="m-0">{userPaymentInfo["EMI"]}</p>
                    </div>
                  </div>
                </div>
              )}
              {data["tenure"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">tenure</p>
                      <p className="m-0">{data["tenure"]}</p>
                    </div>
                  </div>
                </div>
              )}
              <p className="text-dark fs-5">Amount</p>
              {data["amount"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Amount</p>
                      <p className="m-0">{data.amount}</p>
                    </div>
                  </div>
                </div>
              )}
              {data["Service_Tax"] && (
                <div className="row mb-3">
                  <div className="col-12">
                    <div className="d-flex align-center justify-between">
                      <p className="m-0 pe-3 text-muted">Service Tax</p>
                      <p className="m-0">{data["service_tax"]}</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="row mb-3">
                <div className="col-12">
                  <div className="d-flex align-center justify-between border-bottom border-top border-1 pt-2 pb-2">
                    <p className="m-0 pe-3 tx-16 text-black">Total Amount</p>
                    <p className="m-0 tx-16 text-black">{data.amount}</p>
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
          ))}
        </div>
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
                  <img
                    src={
                      JSON.parse(localStorage.getItem("currentBankBranch"))
                        ?.logo_url
                    }
                  />
                </div>
                <div className="col-10">
                  <p className="m-0">
                    {userPaymentInfo?.map((data) => data["customer_name"])}
                  </p>
                  <p className="m-0">
                    {localStorage.getItem("currentCategory")}
                  </p>
                  <p className="m-0">
                    Rs.
                    {userPaymentInfo?.map((data) => parseInt(data.amount)) || 0}
                  </p>
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
                      <strong>
                        Paying
                        {
                          JSON.parse(localStorage.getItem("currentBankBranch"))
                            ?.billerName
                        }
                      </strong>
                    </p>
                    <div className="w-auto d-flex align-center">
                      <p className="tx-20 mb-0 me-2 text-muted">
                        <strong>&#8377;</strong>
                      </p>

                      <input
                        name="Batch"
                        type="text"
                        value={inputAmount}
                        className="form-control form-control-blank"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-12">
                    {exactness === "EXACT_DOWN" ? (
                      <input
                        name="Batch"
                        placeholder="Emi Payment"
                        type="text"
                        className="form-control bg-gray"
                        onChange={(e) => setInputAmount(e.target.value)}
                      ></input>
                    ) : exactness === "EXACT_UP" ? (
                      <input
                        name="Batch"
                        placeholder="Emi Payment"
                        type="text"
                        className="form-control bg-gray"
                        onChange={(e) => setInputAmount(e.target.value)}
                      ></input>
                    ) : exactness === "EXACT" ? (
                      <input
                        name="Batch"
                        placeholder="Emi Payment"
                        type="text"
                        className="form-control bg-gray"
                        disabled
                      ></input>
                    ) : (
                      <input
                        name="Batch"
                        placeholder="Emi Payment"
                        type="text"
                        className="form-control bg-gray"
                        disabled
                      ></input>
                    )}

                    <p className="text-muted lh-1 mt-1">
                      <small>
                        <em>
                          Once you have paid this, your loan account will be
                          immediately updated.
                        </em>
                      </small>
                    </p>
                    <p className="text-danger">{amountError}</p>
                    <p className="text-danger">{error}</p>
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
      </div>
    </>
  );
}

export default PayEmi;
