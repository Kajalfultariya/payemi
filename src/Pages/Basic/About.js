import React from "react";

const data = [
  "Aditya Birla Finance",
  "Axis Bank",
  "Bajaj Finance",
  "Cars24",
  "Clix Capital",
  "DCB Bank",
  "Dhani Loan",
  "Equitas Small Finance Bank",
  "Fincare Small Finance Bank",
  "Hero Fincorp",
  "Home Credit India",
  "ICICI Bank",
  "Indiabulls",
  "Indusind Bank",
  "Kotak Mahindra Bank",
  "LIC Housing",
  "Manappuram",
  "Muthoot",
  "IIFL",
  "RupeeRedee",
  "Tata Capital",
];

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p className="pt-4">
        PayEMI is India's first app to allow every loan customer to pay EMI of
        all their loans at one place. The company is on a mission to empower
        borrowers to manage all their loans & EMI payments easily & earn rewards
        for their regular payments.
      </p>
      <p className="pt-3">
        Medius Technologies Pvt Limited that owns the brand PayEMI
        isheadquartered in Mumbai, Maharashtra.
      </p>
      <p>
        Now pay any loan EMI using PayEMI. Fastest way to pay any loan EMI in a
        single app. If you have taken a home loan, personal loan, gold loan, car
        loan or two-wheeler loan, now you can pay EMI of these loans with this
        app. You can search your lender, add account details and fetch EMI every
        month for easy repayment.
      </p>
      <p>
        You can pay EMI for all top lenders:
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>and 200 other lenders</p>
      </p>
      <p className="pt-3">
        You can pay using UPI with no extra charges. You can pay using Paytm
        UPI, PhonePe UPI or Google Pay UPI Apps. You can track all your previous
        transactions made through PayEMI app.
      </p>
      <p>
        <span className="text-danger"> Note: </span> We do not offer loans in
        our app. We just allow loan customers to pay their respective EMIs
      </p>
      <p className="pt-3">
        ADDRESS: Plot No 153, Shere Punjab Colony, Andheri East, Mumbai - 400093
      </p>
      <p className="pt-3">Contact Number: 9822466444</p>
      <p>Email ID: Nitin@themedius.ai</p>
    </div>
  );
};

export default About;
