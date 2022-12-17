import React, { Fragment, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import PeSpinner from "../Components/PeSpinner";
import { getPayNowDetail } from "../API";
import { useHistory } from "react-router-dom";

const PayNow = (props) => {
  const history = useHistory();
  const HomeData = JSON.parse(localStorage.getItem("homedata"));
  const lid = HomeData.id;
  const id = localStorage.getItem("profile");
  const [loading, setLoading] = React.useState(true);
  const [payNowData, setPayNowData] = useState([]);
  const [exactness, setExactness] = useState();
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    fetchPayNow();
  }, []);

  const fetchPayNow = async () => {
    const response = await getPayNowDetail(lid, id);
    if (response != null) {
      setPayNowData(response.payload);
      localStorage.setItem("fetch_bill_data", JSON.stringify(response));
      setLoading(false);
      console.log(response);
    }
  };

  const handleConfirmationPay = (val) => {
    history.push("Pay-Now-billfetch");
  };
  const backPage = () => {
    history.push("home");
  };

  return (
    <>
      <div className="side-pane side-pane-second">
        <AppBar
          sx={{ position: "relative" }}
          className="side-pane-header top-header"
        >
          <div className="d-flex align-center justify-between">
            <div onClick={backPage} className="d-flex align-center">
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
              <img
                src={HomeData?.biller__logo_url}
                className="head-icon-2 me-2"
              />
              <div>
                <p className="m-0">{HomeData?.biller__billerName}</p>
                <p className="m-0 text-muted">{HomeData?.loan_type}</p>
              </div>
             
                
           
            </div>
            <img src={BharatBillpay} />
          </div>
        </AppBar>
        {loading ? (
          <PeSpinner />
        ) : err === false ? (
          <>
            {payNowData?.map((data) => (
              <div key={data["biller_id"]} className="py-4 px-4 container">
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
                {data["charges_levied"] && (
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="d-flex align-center justify-between">
                        <p className="m-0 pe-3 text-muted">Charges Levied</p>
                        <p className="m-0">{data["charges_levied"]}</p>
                      </div>
                    </div>
                  </div>
                )}
                {HomeData?.["Base Bill Amount"] && (
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="d-flex align-center justify-between">
                        <p className="m-0 pe-3 text-muted">Base Bill Amount</p>
                        <p className="m-0">{HomeData?.["Base Bill Amount"]}</p>
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
                        <p className="m-0 pe-3 text-muted">
                          Additional Charges
                        </p>
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
                {data?.emi && (
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="d-flex align-center justify-between">
                        <p className="m-0 pe-3 text-muted">EMI</p>
                        <p className="m-0">{data?.emi}</p>
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
                {data["amount"] && (
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="d-flex align-center justify-between">
                        <p className="m-0 pe-3 text-muted">Amount</p>
                        <p className="m-0">{data["amount"]}</p>
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
                      <p className="m-0 tx-16 text-black">{data?.amount}</p>
                    </div>
                  </div>
                </div>
                <div className="row mb-3 mt-5">
                  <div className="col-12">
                    <button
                      onClick={() => {
                        handleConfirmationPay(payNowData);
                      }}
                      type="submit"
                      className="btn btn-primary w-100"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {" "}
            <p1 style={{ color: "Red", fontSize: "20px" }}>
              {" "}
              [....{msg}]
            </p1>{" "}
          </>
        )}
      </div>
    </>
  );
};

export default PayNow;
