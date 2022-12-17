import React, { Fragment, useEffect, useState } from "react";
import { getAllBanks } from "../API";
import Dialog from "@mui/material/Dialog";
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import { Button } from "@material-ui/core";
import Slide from "@mui/material/Slide";
import BankDialog from "./BankDialog";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function AllBanks(props) {
  useEffect(() => {
    fetchData();
  }, []);
  const [bankName, setBankName] = useState([]);
  var lbankName = "Home Loan";

  const fetchData = async () => {
    const response = await getAllBanks(lbankName);
    setBankName(response);
  };

  const [showBankData, setShowBankData] = useState(false);
  const [selectedBank, setSelectedBank] = useState([]);

  const getShowBank = (val) => {
    localStorage.setItem("currentBank", JSON.stringify(val));
    setShowBankData(true);
    setSelectedBank(val);
  };

  const BillPayClose = () => {
    window.location.href =
      "/category/" + localStorage.getItem("currentCategory");
  };

  return (
    <Fragment>
      {showBankData === false ? (
        <>
          <div className="bank-pay">
            <div className="d-flex align-center justify-between">
              <div onClick={BillPayClose} className="d-flex align-center">
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
                <p
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "10px",
                    fontSize: "18px",
                  }}
                >
                  Bill Pay
                </p>
              </div>
              <img src={BharatBillpay} />
            </div>
          </div>

          <div className="py-4 px-2">
            <div className="container-fluid">
              <div className="row mb-4 pb-1">
                {bankName?.length > 0 ? (
                  <>
                    {bankName?.map((item) =>
                      item.biller_bank__bank_name != null ? (
                        <div
                          className="col-4 text-center"
                          onClick={() => {
                            getShowBank(item);
                          }}
                        >
                          <Button className="side-pane-btn">
                            <img src={item.biller_bank__bank_logo_url} />
                          </Button>
                          <p className="mb-1 text-center">
                            {item.biller_bank__bank_name}
                          </p>
                        </div>
                      ) : (
                        <></>
                      )
                    )}
                  </>
                ) : (
                  <h2 className="text-center w-100">No Records Found.</h2>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <BankDialog name={selectedBank} />
      )}
    </Fragment>
  );
}

export default AllBanks;
