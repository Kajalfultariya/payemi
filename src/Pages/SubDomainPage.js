import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import PeSpinner from "../Components/PeSpinner";
import SubDomainPayEmi from "./SubDomainPayEmi";

const SubDomainPage = (props) => {
  const [error, setError] = useState("");
  const [directUserInfo, setDirectUserInfo] = React.useState();
  const [billerInfo, setBillerInfo] = useState();
  const [loading, setLoading] = React.useState(true);
  const [subdomainLoading, setSubdomainLoading] = React.useState(true);
  const [mobile, setMobile] = useState();
  const [profileId, setProfileId] = useState();
  const [exactness, setExactness] = React.useState();
  const [inputParmas, setInputParams] = useState();
  // props
  const subDomain = props?.data;
  // get loanNumber
  const { loanNumber } = useParams();
  useEffect(() => {
    if (loanNumber == "failure") {
    } else if (loanNumber == "success") {
    } else if (loanNumber == "processing") {
    } else if (subDomain) {
      fetch(
        `https://api.payemi.net/getloandetails-noauth/?biller_slug=${subDomain}&loan_no=${loanNumber}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("done");
          if (data?.error) {
            setLoading(false);
            setSubdomainLoading(false);
            setError(data?.message);
          } else {
            setLoading(false);
            setBillerInfo(data?.data?.biller_details);
            setMobile(data?.data?.mobile);
            setProfileId(data?.data?.profile_id);
            let temp = {};
            const value = data?.data?.biller_details.inputparameters;

            value !== null &&
              Object.keys(value).map((key, v) => {
                temp = { ...temp, [key]: data?.data?.[key] };
              });

            setInputParams(temp);
          }
        });
    }
  }, [loanNumber, subDomain]);
  useEffect(() => {
    if (mobile && inputParmas) {
      fetch(
        `https://api.payemi.net/billfetch-noauth/?id=${profileId}&biller_id=${billerInfo?.biller_id}&mobile=${mobile}`,
        {
          method: "POST",
          body: JSON.stringify(inputParmas),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data?.error) {
            setLoading(false);
            setSubdomainLoading(false);
            setError(data?.message);
          } else {
            setDirectUserInfo(data.payload);
            setSubdomainLoading(false);
            setExactness(data.billerPaymentExactness);

            localStorage.setItem(
              "guest_biller_payment",
              JSON.stringify(data?.billerPaymentChannel["INT"])
            );
            localStorage.setItem(
              "guest-fetch-bill-data",
              JSON.stringify(data.payload)
            );
            localStorage.setItem("guest-mobile-number", mobile);
            localStorage.setItem(
              "guest-biller-info",
              JSON.stringify(billerInfo)
            );
            localStorage.setItem("subDomain", subDomain);
          }
        });
    }
  }, [mobile, billerInfo, profileId, inputParmas]);
  return (
    <>
      {loading && <PeSpinner></PeSpinner>}

      <SubDomainPayEmi
        data={directUserInfo}
        setData={setDirectUserInfo}
        loading={subdomainLoading}
        billerInfo={billerInfo}
        exactness={exactness}
        profileId={profileId}
        error={error}
      />
    </>
  );
};

export default SubDomainPage;
