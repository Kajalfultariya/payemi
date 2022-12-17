import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import BankDetail from "./BankDetail";
import { getBillerBank } from "../API";
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import Category from "./Category";
import PeSpinner from "../Components/PeSpinner";
import { useHistory } from "react-router-dom";

function BankDialog(props) {
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = React.useState(true);
  const [billData, setBillData] = useState([]);
  const pName = JSON.parse(localStorage.getItem("currentBank"))
  const logo = JSON.parse(localStorage.getItem("bankLogo"));

  useEffect(() => {
    fetchBillerData();
  }, []);

  const fetchBillerData = async () => {
    const response = await getBillerBank(pName);
    if (response?.data?.length > 1) {
      JSON.stringify(localStorage.setItem("backbill", true));
      console.log("right", response?.data?.length)

    }

    setBillData(response?.data);
    setErr(response?.error);
    setMsg(response?.message);
    setLoading(false);
  };


  const getBankDialog = (val) => {

    localStorage.setItem("currentBankBranch", JSON.stringify(val));
    history.push(`/biller/` + val.billerId)
  };
  const backToReturn = () => {
    JSON.stringify(localStorage.setItem("backbill", false));
    // history.push("billers")
    window.location.href = "/billers";
  };

  return (

    <>
      <div className="bank-pay">
        <div
          className="d-flex align-center justify-between"
          style={{ marginTop: "20px" }}
        >
          <div onClick={backToReturn}>
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
              src={logo}
              height="20px"
              width="20px"
              style={{ marginRight: "10px", marginLeft: "10px" }}
            />
            <span className="relative t-4">{pName}</span>
          </div>
          <div>
            <img src={BharatBillpay} />
          </div>
        </div>
      </div>
      {billData?.length <= 1 && billData.map((item) => getBankDialog(item))}
      {err === false ? (
        billData?.length > 0 ? (
          <>
            {billData.map((item) => (
              <div className="py-0 px-3 mt-4">
                <div className="container-fluid">
                  <div className="row mb-3 pb-2">
                    <div
                      className="col-12 text-center"
                      onClick={() => {
                        getBankDialog(item);
                      }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        className="bank-biller btn btn-primary btn-default"
                      >
                        <img
                          src={item?.logo_url}
                          alt={item.billerName}
                          className="w-100"
                        />
                        {/* {item.billerName} */}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : billData ? (
          loading && <PeSpinner />
        ) : (
          <>
            <p1> There is No Record..</p1>{" "}
          </>
        )
      ) : (
        <>
          <p1>No Records [..{msg}]</p1>{" "}
        </>
      )}
    </>


  );
}

export default BankDialog;
