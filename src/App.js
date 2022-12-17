import React, { useState, useEffect } from "react";
import axios from "axios";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

/* AOS Animation */
import Home from "../src/Pages/Home";
import Dashboard from "../src/Pages/Dashboard";
import ComplaintRegistration from "../src/Pages/ComplaintRegistration";
import TransactionSearch from "../src/Pages/TransactionSearch";
import OnboardingStep from "../src/Pages/OnboardingStep";
import PayEmi from "../src/Pages/PayEmi";
import AllBanks from "./Pages/AllBanks";
import HomeBankPayEmi from "./Pages/HomeBankPayEmi";
import PaymentconfirmBankPayEmi from "./Pages/PaymentConfirmBankPayEmi";
import SignIn from "../src/Pages/SignIn";
import PaymentConfirmation from "../src/Pages/PaymentConfirmation";
import SubDomainPage from "./Pages/SubDomainPage";
import UsePaymentInfo from "./Hooks/UsePaymentInfo";
import PayEmiSuccess from "./Pages/PayEmiSuccess";
import Splash from "../src/Pages/Splash";
import Category from "./Pages/Category";
import BillPayCategory from "./Pages/BillPayCategory";
import GetBankDetail from "./Pages/BankDetail";
import PayEmiTransPage from "./Pages/PayEmiTransPage";
import Notification from "../src/Pages/Notification";
import TransactionHistory from "../src/Pages/TransactionHistory";
import RegisterComplaint from "../src/Pages/RegisterComplaint";
import ComplaintTracking from "../src/Pages/ComplaintTracking";
import SubdomainPayemSuccess from "./Pages/SubdomainPayemSuccess";
import VerifyMobileNumber from "./Pages/VerifyMobileNumber";
import PayemiFailure from "./Pages/PayemiFailure";
import PayNow from "./Pages/PayNow";
import PayNowBillFetch from "./Pages/PayNowBillFetch";
import ReactGa from "react-ga";
import Profile from "./Pages/Profile";
import RateandReview from "./Pages/RateandReview";
import AddCard from "./Pages/AddCard";
import { withRouter } from "react-router-dom";
import PayemiProcessing from "./Pages/PayemiProcessing";
import SubDomainPayemiFailure from "./Pages/SubDomainPayFailure";
import Billers from "./Pages/Billers";
import DomainPayEmiProcessing from "./Pages/DomainPayEmiProcessing";
import About from "./Pages/Basic/About";
import PrivacyPolicy from "./Pages/Basic/PrivacyPolicy";
import PayEmiTransPaid from "./Pages/PayemiTransPaid";
import PayEmiTransFailed from "./Pages/PayemiTransFailed";
import PayemiTransProcess from "./Pages/PayemiTransProcess";
import Refund from "./Pages/Basic/Refund";
import Conditions from "./Pages/Basic/Conditions";
import Footer from "./Components/Footer";

/* Components */

function App() {
  const [subdomain, setSubDomain] = useState("");
  const accessToken = localStorage.getItem("access_token");

  // subDoamin useeffect

  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);

    if (arr.length > 0) {
      setSubDomain(arr[0]);
    } else {
      setSubDomain(null);
    }
  }, [subdomain]);

  let location = useLocation();
  React.useEffect(() => {
    ReactGa.pageview(location.pathname);
  }, [location]);
  const pn = location.pathname;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/verify-otp/:number">
          <VerifyMobileNumber />
        </Route>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
        <Route exact path="/privacy-policy">
          <PrivacyPolicy />
        </Route>
        <Route exact path="/refund-and-cancellation">
          <Refund />
        </Route>
        <Route exact path="/terms-and-conditions">
          <Conditions />
        </Route>
        {subdomain !== null ? (
          <>
            {pn !== "/processing" && pn !== "/failure" && (
              <Route exact path="/:loanNumber">
                <SubDomainPage data={subdomain} setSubDomain={setSubDomain} />
              </Route>
            )}
            <Route exact path="/success">
              <SubdomainPayemSuccess subdomain={subdomain} />
            </Route>
            <Route exact path="/failure">
              <SubDomainPayemiFailure />
            </Route>
            <Route exact path="/processing">
              <PayemiProcessing />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/rate-and-review">
              <RateandReview />
            </Route>

            {!accessToken ? (
              <Redirect to="/sign-in" />
            ) : (
              <>
                <Route exact path="/payment-confirmation">
                  <PaymentConfirmation />
                </Route>
                {/*namrata start */}
                <Route exact path="/home">
                  <HomeBankPayEmi />
                </Route>
                <Route path="/category">
                  <Category />
                </Route>
                <Route exact path="/billers">
                  <Billers />
                </Route>
                <Route exact path="/biller/:billerId">
                  <GetBankDetail />
                </Route>
                <Route exact path="/dashboard">
                  <PayNow />
                </Route>
                <Route exact path="/payment-confirm-bank">
                  <PaymentconfirmBankPayEmi />
                </Route>
                <Route exact path="/Pay-Now-billfetch">
                  <PayNowBillFetch />
                </Route>
                <Route exact path="/transaction-history">
                  <PayEmiTransPage />
                </Route>
                <Route exact path="/transaction-Paid">
                  <PayEmiTransPaid />
                </Route>
                <Route exact path="/transaction-Failed">
                  <PayEmiTransFailed />
                </Route>
                <Route exact path="/transaction-Process">
                  <PayemiTransProcess />
                </Route>
                {/*namrata end */}
                <Route exact path="/category/:id">
                  <BillPayCategory />
                </Route>
                <Route exact path="/dashboard1">
                  <Dashboard />
                </Route>
                <Route exact path="/pay-emi">
                  <PayEmi />
                </Route>
                <Route exact path="/processing">
                  <DomainPayEmiProcessing />
                </Route>
                <Route exact path="/success">
                  <PayEmiSuccess />
                </Route>
                <Route exact path="/failure">
                  <PayemiFailure />
                </Route>
                <Route exact path="/complaint-registration">
                  <ComplaintRegistration />
                </Route>
                <Route exact path="/transaction-search">
                  <TransactionSearch />
                </Route>
                <Route exact path="/onboarding-step">
                  <OnboardingStep />
                </Route>
                <Route exact path="/all-bank">
                  <AllBanks />
                </Route>

               
                <Route exact path="/register-complaint">
                  <RegisterComplaint />
                </Route>
                <Route exact path="/complaint-tracking">
                  <ComplaintTracking />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Route exact path="/notification">
                  <Notification />
                </Route>
                <Route exact path="/add-card">
                  <AddCard />
                </Route>
              </>
            )}
          </>
        )}
      </Switch>
      {pn !== "/" && <Footer />}
    </div>
  );
}

export default withRouter(App);
