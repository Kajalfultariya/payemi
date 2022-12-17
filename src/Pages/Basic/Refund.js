import React from "react";

const Refund = () => {
  return (
    <div className="container py-4">
      <h1>Refund and cancellation</h1>
      <p className="pt-3">
        All payments made through PhonePe Wallet/eGV for mobile/ DTH recharge,
        bill pay, P2P transfers or any other payment processed by You on PhonePe
        Platform or Merchant partners accepting PhonePe Wallet (including eGVs)
        as a payment option shall be final and PhonePe shall not be responsible
        for any error and omission by You or Merchant partners. Such
        transactions cannot be refunded, returned or cancelled once initiated.
      </p>
      <p>
        If you erroneously processed a payment to the unintended merchant or
        processed a payment for the wrong amount (for instance a typographical
        error at your end) Your only recourse will be to contact the merchant
        directly to whom you have made the payment and ask them to refund the
        amount. PhonePe shall not be able to handle such disputes, not can We
        reimburse you or reverse a payment that you have erroneously made.{" "}
      </p>
      <p>
        In case We receive a refund for a transaction which You have processed
        earlier, we would refund the funds back to the source, including PhonePe
        Wallet/eGV unless specified or directed by your otherwise. <br />
        In case of any cancellations, the cashback (in form of eGV) given on the
        transaction will continue to remain as eGV and is non-withdrawable to
        your bank account. This can continue to be used on PhonePe Platforms for
        eligible transactions.{" "}
      </p>
      <p>
        Further, in case of cancellation of a transaction, refunded amount less
        of cashback (credited in form of eGV) will be credited back to the
        source of funds used while making payment.
      </p>
    </div>
  );
};

export default Refund;
