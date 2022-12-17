import React, { Fragment, useState, useEffect } from "react";
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import AppBar from "@mui/material/AppBar";
import { useHistory } from "react-router-dom";

const PayNowBillFetch = (props) => {
  const history = useHistory();

  const [error, setError] = useState("");

  // localstorage get items
  const data = JSON.parse(localStorage.getItem("fetch_bill_data"));
  const userPaymentInfo = data.payload;
  const exactness = data.billerPaymentExactness;
  const billerPaymentChannel = data.billerPaymentChannel?.INT;
  const maxAmount = billerPaymentChannel?.maxAmount;
  const minAmount = billerPaymentChannel?.minAmount;
  const totalAmount = userPaymentInfo?.map((data) => parseInt(data.amount));
  const HomeData = JSON.parse(localStorage.getItem("homedata"));

  const profie_id = userPaymentInfo?.map((data) => data?.profile_id);
  const bill_id = userPaymentInfo?.map((data) => data?.id);

  console.log(data);
  const backPage = () => {
    history.push("dashboard");
  };

  const [inputAmount, setInputAmount] = useState();
  const [amountError, setAmountError] = useState("");

  useEffect(() => {
    if (exactness == "EXACT") {
      setInputAmount(totalAmount);
    } else if (!exactness) {
      setInputAmount(inputAmount);
    } else if (exactness == "EXACT_DOWN") {
      setInputAmount(totalAmount);
    }
  }, [exactness]);
  // handle razor pay
  // const handleRazorPay = (e) => {
  //   // razor pay
  //   const options = {
  //     key: "rzp_test_NAKEVdlCNB5Bue",
  //     amount: inputAmount + "00",
  //     currency: "INR",
  //     name: "",
  //     // order_id: `${userPaymentInfo?.order_id}`,
  //     handler: function (response) {
  //       alert(response.razorpay_payment_id);

  //       localStorage.setItem("amount", inputAmount);
  //       window.location.href = "/payment-confirm-bank";
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //     retry: {
  //       enabled: false,
  //     },
  //   };
  //   let rzp1 = new window.Razorpay(options);
  //   rzp1.on("payment.failed", function (response) {
  //     alert(response.error.code);
  //     alert(response.error.description);
  //     window.location.href = "/failure";
  //     localStorage.setItem("amount", inputAmount);
  //   });

  //   if (inputAmount < 5000) {
  //     setAmountError("your amount should be greater than 5000");
  //   } else {
  //     rzp1.open();
  //     setAmountError("");
  //   }
  //   e.preventDefault();
  // };

  const handleRazorPay = (e) => {
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
            window.location.href = "/failure";
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
      <div className="side-pane side-pane-second">
        <AppBar sx={{ position: "relative" }} className="side-pane-header">
          <div className="d-flex align-center justify-between">
            <div onClick={backPage} className="d-flex align-center">
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
                <img src={HomeData?.biller__logo_url} />
              </div>
              <div className="col-10">
                <p className="m-0">{localStorage.getItem("full_name")}</p>
                <p className="m-0">{HomeData?.loan_type} </p>
                <p className="m-0">
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
                    <strong>Paying {HomeData?.biller__billerName}</strong>
                  </p>
                  <div className="w-auto d-flex align-center">
                    <p className="tx-20 mb-0 me-2 text-muted">
                      <strong>&#8377;</strong>
                    </p>
                    <input
                      name="Batch"
                      type="text"
                      value={inputAmount || 0}
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
                </div>
              </div>
              <p className="text-danger">{amountError}</p>
              <div className="row mb-3 mt-4 pt-4">
                <div className="col-12">
                  <button
                    onClick={handleRazorPay}
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
      </div>
    </>
  );
};
export default PayNowBillFetch;
