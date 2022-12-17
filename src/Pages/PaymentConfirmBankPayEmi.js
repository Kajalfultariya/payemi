import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import BharatBillpay from "../Static/Images/bharat-billpay.png";
import SCard from "../Static/Images/scratch-card.png";
import ScratchHalf from "../Static/Images/scratch-half.png";
import DoneIcon from "../Static/Images/done-card.webp";
import GooglePlay from "../Static/Images/google-play-logo.webp";
import ScratchCard from "react-scratchcard";
import moment from "moment";
import PeSpinner from "../Components/PeSpinner";

const PaymentconfirmBankPayEmi = (props) => {
  const [showActive, setshowActive] = useState("false");
  const [open, setopen] = React.useState(false);
 // const [loading, setLoading] = React.useState(true);


  const Home_pay_emi_data = JSON.parse(localStorage.getItem("fetch_bill_data"))?.payload;
  // const err = JSON.parse(localStorage.getItem("fetch_bill_data"))?.error;
  // const msg = JSON.parse(localStorage.getItem("fetch_bill_data"))?.message;


  // scartch card open
  const profile_id = JSON.parse(localStorage.getItem("profile"));
  const handleOpen = () => {
    setopen(true);
    fetch(`https://api.payemi.net/ScratchCard/?id=${profile_id}&bill_id=${Home_pay_emi_data?.biller_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const handleClose = () => setopen(false);

  const PayNowData = JSON.parse(localStorage.getItem("paynowdata"));
  const HomeData = JSON.parse(localStorage.getItem("homedata"));

  const settings = {
    image: SCard,
    height: 280,
    width: 290,
    finishPercent: 50,
    onComplete: () => setshowActive(!showActive),
  };
  //date
  const getDateValue = (dd) => {
    return new Date(dd);
  };

  return (
    <>
      <div className="side-pane side-pane-second">
        <div className="side-pane-header top-header">
          <div className="d-flex align-center justify-between">
            <div className="d-flex align-center">
              <h1>PayEMI</h1>
            </div>
            <img src={BharatBillpay} />
            {/* <svg width="21" height="21" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.928 3.072c-4.095-4.096-10.76-4.096-14.856 0s-4.096 10.76 0 14.856 10.76 4.096 14.856 0 4.096-10.76 0-14.856zm-3.285 11.57a.808.808 0 0 1-1.143 0l-3-3-3.142 3.143a.808.808 0 1 1-1.143-1.143L9.357 10.5l-3-3A.808.808 0 1 1 7.5 6.357l3 3L13.357 6.5A.808.808 0 1 1 14.5 7.643L11.643 10.5l3 3a.808.808 0 0 1 0 1.142z" fill="#000" fillRule="nonzero" opacity=".495" />
                            </svg> */}
          </div>
        </div>
        <div className="py-0 px-3">
          <div className="container-fluid">
            <div className="mt-4">
              <div className="row mb-5">
                <div className="col-12">
                  <p className="text-center mb-0">
                    <img src={DoneIcon} className="w-50" />
                  </p>
                  <p className="mb-4 tx-23 text-center text-muted">
                    Hurrayyy!!
                  </p>
                  <div className="w-auto d-flex align-center justify-center mb-2">
                    <p className="tx-23 mb-0 me-2 text-black weight-700">
                      &#8377;
                    </p>
                    <p className="tx-24 mb-0 me-2 text-black weight-700 weight-300 lh-1">
                      <strong>{JSON.parse(localStorage.getItem("totalamount"))}</strong>
                    </p>
                  </div>
                  <p className="mb-0 text-center">
                    Amount Paid to {HomeData?.biller__billerName}
                  </p>
                </div>
              </div>
            
              {Home_pay_emi_data?.length > 0 ?
                <>
                  <div className="row mb-5">
                    <div className="col-12">
                      <div className="card-box">
                        <div className="tx-16">Scratch Now</div>
                        <div className="scratch-box">
                          <img src={ScratchHalf} onClick={handleOpen} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-12">
                      <div className="tx-16 text-black weight-700">Receipt</div>
                    </div>
                  </div>
                  <div style={{ marginRight: "-5px" }}>

                    {Home_pay_emi_data?.map((item) => {
                      return (
                        <>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Transaction ID</p>
                                <p className="m-0">
                                  <strong>{item?.transaction_id}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Biller ID</p>
                                <p className="m-0">
                                  <strong>{item?.biller_id}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Biller Name</p>
                                <p className="m-0">
                                  <strong>{item?.biller_name}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Bill Date</p>
                                <p className="m-0">
                                  <strong>{item?.bill_date}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Bill Period</p>
                                <p className="m-0">
                                  <strong>{item?.RespBillPeriod}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Bill Number</p>
                                <p className="m-0">
                                  <strong>{item?.bill_number}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-7">Customer Name</p>
                                <p className="m-0"   >
                                  <strong>{item?.customer_name}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Customer Number</p>
                                <p className="m-0">
                                  <strong>{item?.customer_mobile}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Due Date</p>
                                <p className="m-0">
                                  <strong>{item?.RespDueDate}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div
                            className="row mb-3"
                            style={{ marginRight: "-30px" }}
                          >
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">
                                  Transaction Date and Time
                                </p>
                                <p className="m-0">
                                  <strong>
                                    {moment(
                                      getDateValue(item?.transaction_date_and_time)
                                    ).format("DD MMM YY | hh:mm a")}
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Initiating Channel</p>
                                <p className="m-0">
                                  <strong>{item?.initiation_channel}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Payment Mode</p>
                                <p className="m-0">
                                  <strong>{item?.payment_mode}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Transaction Status</p>
                                <p className="m-0">
                                  <strong>{item?.transation_status}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Approval Number</p>
                                <p className="m-0">
                                  <strong>{item?.approval_number}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Bill Amount</p>
                                <p className="m-0">
                                  <strong>{item?.amount}</strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">
                                  Customer Convenience Fees
                                </p>
                                <p className="m-0">
                                  <strong>
                                    Rs. {item?.customer_convinience_fees}
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col-12">
                              <div className="d-flex align-center justify-between">
                                <p className="m-0 pe-3">Total amount</p>
                                <p className="m-0">
                                  <strong>
                                    Rs.{" "}
                                    {JSON.parse(localStorage.getItem("totalamount"))}
                                  </strong>
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      )

                    })}
                  </div>
                </>
                : (<>{" "}   <p1> There is No Record..</p1>  {" "}  </>)
              }

              <div className="row mb-5 mt-4 pt-0">
                <div className="col-5">
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100"  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"            >
                      <g fill="#412E8D" fillRule="evenodd">
                        <path d="M15.125 8.938a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm0-1.376a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75zM6.875 13.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm0-1.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75zM15.125 18.563a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5zm0-1.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75z" />
                        <path d="M8.31 12.632a.688.688 0 0 1 .692-1.188l4.695 2.736a.688.688 0 0 1-.692 1.188L8.31 12.632zM12.998 6.632a.688.688 0 0 1 .693 1.187l-4.689 2.737a.688.688 0 0 1-.693-1.188l4.689-2.736z" />
                      </g>
                    </svg>
                    Share
                  </button>
                </div>
                <div className="col-7">
                  <button
                    type="submit"
                    className="btn btn-outline-primary w-100"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#412E8D" fillRule="evenodd">
                        <path d="M4.125 14.438a.687.687 0 1 1 1.375 0V16.5c0 .38.308.688.688.688h9.625c.38 0 .687-.308.687-.688v-2.063a.687.687 0 1 1 1.375 0V16.5c0 1.14-.923 2.063-2.063 2.063H6.188A2.062 2.062 0 0 1 4.124 16.5v-2.063z" />
                        <path d="M13.264 10.514a.687.687 0 1 1 .972.972l-2.75 2.75a.687.687 0 0 1-.972 0l-2.75-2.75a.687.687 0 1 1 .972-.972L11 12.778l2.264-2.264z" />
                        <path d="M10.313 4.125a.687.687 0 1 1 1.374 0v9.625a.687.687 0 1 1-1.374 0V4.125z" />
                      </g>
                    </svg>
                    Download
                  </button>
                </div>
              </div>
              <div className="row mb-3 pt-0 mt-400" >
                <div className="col-12">
                  <div className="text-center">
                    <img src={GooglePlay} className="w-50" />
                  </div>
                </div>
              </div>

              <div className="row mb-4 mt-0">
                <div className="col-3">
                  <div className="text-center">
                    <div className="d-flex align-center">
                      <div className="ms-3">
                        <img src={BharatBillpay} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="text-center">
                    <svg
                      width="50"
                      height="20"
                      viewBox="0 0 50 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="nonzero" fill="none">
                        <path
                          d="M8.367 2.563A8.369 8.369 0 0 0 0 10.93a8.368 8.368 0 1 0 8.367-8.367zm-.031 2.624a5.74 5.74 0 0 1 5.742 5.743 5.74 5.74 0 0 1-5.742 5.742 5.747 5.747 0 0 1-5.75-5.742 5.747 5.747 0 0 1 5.75-5.742z"
                          fill="#FEB511"
                        />
                        <path
                          d="M19.219 4.367v7.29h1.453V6.6l2.578 5.055h1.57V4.367h-1.453v4.547l-2.383-4.546H19.22zm8.922 1.805a2.778 2.778 0 0 0-2.782 2.781 2.784 2.784 0 1 0 5.57 0 2.784 2.784 0 0 0-2.788-2.781zm.007 1.352a1.426 1.426 0 1 1-1.43 1.429 1.433 1.433 0 0 1 1.43-1.43zm3.159-1.234v5.366h1.578V9.478c0-.772.169-1.229.449-1.56.29-.343.546-.545 1.327-.555l.592.008.008 2.454c.001.376.02.693.104.962.194.62.665.96 1.576.96a3.47 3.47 0 0 0 1.208-.197l-.19-1.09c-.18.07-.396.113-.56.115-.463.004-.57-.198-.568-.682V7.37h1.136l.005-1.081H36.83l-.004-1.52-1.274-.003-.273 1.523h-.742c-.236 0-.419.002-.598.047-.76.192-1.072.75-1.264 1.101L32.23 6.29h-.923zm9.626-.118a2.778 2.778 0 0 0-2.781 2.781 2.784 2.784 0 1 0 5.57 0 2.784 2.784 0 0 0-2.789-2.781zm.008 1.352a1.426 1.426 0 1 1-1.43 1.429 1.433 1.433 0 0 1 1.43-1.43zm6.246-1.352c-.721.004-1.314.351-1.867.945l-.304-.828h-.922v5.367h1.539V7.97c.157-.179.513-.509.968-.508.579 0 .789.372.79.789l.008 3.406h1.57V8.203c.001-1.343-.78-2.037-1.782-2.031zm1.925.74v-.513h-.15v-.106h.419v.106h-.154v.513h-.115zm.348 0v-.62h.167l.11.41.105-.41H50v.62h-.088V6.43l-.136.482h-.084l-.125-.491v.491h-.107zM16.812.656v.641h.641V.656h-.64zm0 .641h-1.187v.64h1.188v-.64zm-1.187.64h-.594v1.25h.594v-1.25zm0 1.25v.61h.61v-.61h-.61zm.61 0h.671v-.601h-.672v.602zm-.61.61h-.594v.625h-.617v-.625h-1.008v.445h-.547v.547h.602v.61h-.61l.008-.61h-.656v.961h-.61v.601h-.413v.61h-.438c-.94 1.543-1.696 2.969-2.133 4.023C7.41 9.387 6.848 8.813 5.836 8.25c-.361-.201-.683-.295-.914-.164-.24.136-.31.563-.007.898 1.877 2.08 2.215 3.19 2.898 4.774.203.472.587.675 1.023.687.233.007.52-.064.711-.289.089-.104.115-.247.188-.422.57-1.376 1.204-2.755 2.117-4.07l.008-.687h.484l-.008-.61h.524l-.008-.727h.61v-.663h-.618l.008-.626h.61v.625h.608v-.632h.477V5.6h.555v-.507h.523V3.797zm-1.211 0h.617v-.61h-.617v.61zm0-.61v-.585h-.617v.586h.617z"
                          fill="#000"
                        />
                        <path
                          d="M15.625 1.94h.608v.642h-.608v-.641zM17.45 1.3h.658v.641h-.658V1.3zm0-1.299h.658v.657h-.658V0z"
                          fill="#FEB511"
                        />
                        <path
                          d="M19.564 17.428h-.29v-4h.489v1.479c.193-.242.464-.409.763-.4.812.026 1.112.749 1.121 1.448.011.838-.45 1.52-1.194 1.528a.904.904 0 0 1-.777-.404l-.111.349zm.202-.633c.2.184.238.284.624.287.58.005.73-.639.729-1.086-.002-.565-.157-1.048-.661-1.062-.317-.01-.534.147-.686.319l-.006 1.543zm2.304 1.631.063-.368c.41.081.706-.007.867-.46l-1.015-3.033h.508l.718 2.418.678-2.418h.496l-.987 3.143c-.227.725-.76.854-1.328.719zm3.81-1.42.25-.343c.378.271.663.381 1.128.383.504.003.825-.26.823-.665-.008-1.138-1.961-.5-1.994-2.017-.015-.665.577-.992 1.148-.995.431-.002.836.063 1.111.257l-.215.387c-.129-.129-.594-.214-.847-.216-.44-.004-.718.17-.73.54-.038 1.088 2.02.49 2.017 2.033-.002.72-.539 1.094-1.314 1.1-.716.007-1.25-.317-1.376-.463zm5.928.418V14.57h.3l.118.465c.237-.315.648-.526.993-.525.408.002.582.29.634.5.258-.3.603-.5.953-.502.602-.005.74.434.74.927v1.99l-.488.001v-1.833c0-.402-.048-.662-.392-.655-.381.008-.584.259-.723.383v2.105h-.508v-1.887c0-.383-.062-.605-.387-.598-.328.007-.424.138-.741.39v2.095l-.5-.002zm6.161-.34a1.214 1.214 0 0 1-.882.389c-.485-.005-.878-.3-.876-.78.002-.586.406-.748.752-.863.341-.114.614-.153.924-.207.013-.509-.095-.697-.511-.7-.376-.002-.698.168-.837.24l-.177-.327c.137-.106.482-.323 1.047-.328.619-.005.988.343.988.993v1.925h-.3l-.128-.342zm-.078-1.128c-.308.06-.477.11-.718.187-.31.098-.46.255-.456.539.004.298.2.413.445.407.293-.007.481-.102.727-.288l.002-.845zm5.674 1.083.075.34c-.172.094-.428.088-.531.088-.603.002-.694-.389-.694-.835v-1.711h-.426v-.356h.426l.146-.813.35-.002v.815h.642v.356h-.642v1.737c0 .424.176.426.343.433.16.006.31-.052.31-.052h.001zm2.482-.24.207.296c-.217.17-.461.379-.985.38-.873.003-1.262-.665-1.259-1.459.004-.791.37-1.503 1.174-1.508 1-.005 1.142.961 1.141 1.634h-1.786c.001.541.221.934.671.938.465.004.837-.281.837-.281zm-1.508-.999h1.27c-.026-.448-.141-.92-.62-.914-.514.007-.615.48-.65.914zm4.387 1.295c-.204.198-.529.37-.948.373-.803.006-1.199-.614-1.199-1.47 0-.852.43-1.489 1.264-1.49.37-.001.637.147.828.302l-.216.328c-.12-.096-.385-.23-.617-.226-.569.008-.745.427-.744 1.073.001.538.12 1.082.742 1.088.184.002.407-.064.648-.272l.242.294zm-19.975 1.332.064-.37c.41.082.706-.006.867-.458l-1.016-3.034h.509l.718 2.418.677-2.418h.497l-.987 3.143c-.228.725-.76.854-1.329.719zm10.279-1.003V14.57h.3l.118.465a1.413 1.413 0 0 1 1.082-.525c.52.005.724.463.724.945v1.971h-.508v-1.887c0-.383-.062-.605-.387-.598-.328.007-.512.138-.83.39v2.095l-.5-.002z"
                          fill="#999"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="col-3">
                  <div className="text-center">
                    <svg
                      width="54"
                      height="18"
                      viewBox="0 0 54 18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path
                          d="M13.862 8.002c.517 0 .976.25 1.263.633a1.573 1.573 0 1 1 0 1.878 1.573 1.573 0 1 1-1.262-2.512zM6.27 6.709c1.742 1.104 3.317 1.627 4.667 1.504.086 1.75-.096 3.238-.515 4.477h8.16a.454.454 0 0 0 .321-.135.454.454 0 0 0 .135-.321V6.238H.626v5.996c0 .124.05.238.134.321a.454.454 0 0 0 .322.135h1.102c-.413-1.239-.611-2.744-.565-4.55 1.586.084 3.143-.26 4.65-1.431zm3.912 6.606c-.778 1.794-2.115 2.995-3.895 3.666-1.747-.639-3.08-1.813-3.867-3.666H1.082c-.298 0-.568-.121-.764-.317A1.072 1.072 0 0 1 0 12.235V1.882A1.084 1.084 0 0 1 1.082.8H18.58a1.078 1.078 0 0 1 1.08 1.08v10.352c0 .298-.122.568-.317.763a1.079 1.079 0 0 1-.763.319h-8.4v.001zm-3.909-5.65c1.448.919 2.757 1.353 3.878 1.25.077 1.543-.099 2.826-.494 3.877l-.011.029c-.013.032-.024.064-.037.094l-.014.035-.036.087-.014.033-.038.087-.018.04-.034.072-.024.048c-.657 1.357-1.734 2.265-3.145 2.797-1.389-.508-2.463-1.394-3.127-2.797l-.004-.01-.002-.011-.005-.01-.033-.075-.005-.01-.005-.009-.005-.01-.005-.01-.004-.009-.034-.077-.005-.01-.005-.009-.004-.01-.048-.116-.004-.01-.003-.01-.035-.089-.003-.01-.003-.01-.004-.009-.003-.01-.033-.09-.004-.01c-.361-1.03-.537-2.296-.497-3.837 1.321.067 2.614-.218 3.867-1.19zM.626 3.13h18.41V1.882a.454.454 0 0 0-.135-.322.454.454 0 0 0-.322-.134H1.082a.454.454 0 0 0-.322.134.454.454 0 0 0-.134.322V3.13z"
                          fill="#262626"
                        />
                        <path
                          d="m3.94 11.574.826-.01.063.015a3.21 3.21 0 0 1 .776.626 11.446 11.446 0 0 1 2.11-2.53l.08-.03H8.7l-.182.201a18.852 18.852 0 0 0-2.76 3.98l-.114.22-.104-.222a5.4 5.4 0 0 0-.697-1.131 4.577 4.577 0 0 0-.968-.896l.065-.223z"
                          fill="#69C229"
                          fillRule="nonzero"
                        />
                        <g
                          fill="#505050"
                          fontFamily="Roboto-Medium, Roboto"
                          fontWeight="400"
                        >
                          <text fontSize="8" transform="translate(23.2)">
                            <tspan x="0" y="7">
                              SECURE
                            </tspan>
                          </text>
                          <text fontSize="6.4" transform="translate(23.2)">
                            <tspan x="0" y="14.8">
                              PAYMENT
                            </tspan>
                          </text>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="col-3">
                  <div className="text-center">
                    <svg
                      width="52"
                      height="23"
                      viewBox="0 0 52 23"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fillRule="nonzero" fill="none">
                        <path
                          fill="#B6004F"
                          d="M18.01 2.687h-.876v-.875h.875zM18.01.944h-.876V.07h.875zM26.087 15.196h.343c.294 1.498 1.092 2.751 2.8 2.751 1.148 0 2.114-.65 2.114-1.855 0-1.344-1.169-1.883-2.254-2.31-1.35-.518-2.779-1.232-2.779-2.919s1.316-2.667 2.933-2.667c.812 0 1.568.28 2.233.756l.343-.574h.168l.07 2.562h-.35c-.336-1.232-1.036-2.338-2.47-2.338-.946 0-1.73.61-1.73 1.568 0 1.17 1.05 1.568 1.967 1.96 1.54.637 3.262 1.407 3.262 3.346 0 1.94-1.813 2.87-3.542 2.87-1.008 0-1.792-.294-2.597-.889l-.357.623h-.16v-2.884M33.591 9.008c0-.448.357-.798.805-.798.441 0 .784.357.784.798 0 .427-.343.784-.756.784-.448 0-.833-.322-.833-.784m1.596 2.64V16.4c.028.973-.133 1.421 1.036 1.498v.301c-.504-.014-1.05-.049-1.589-.063-.58.014-1.148.042-1.729.063v-.3c1.092-.07 1.008-.428 1.022-1.408v-2.114c0-.28 0-1.42-.063-1.645-.098-.37-.72-.343-1.022-.322v-.294l2.345-.469M40.612 14.027c0-.945-.357-2.044-1.484-2.044-1.14 0-1.449 1.106-1.449 2.044 0 .89.357 1.981 1.428 1.981 1.141.007 1.505-1.022 1.505-1.98m-1.036 3.478c1.512.12 3.101.175 3.101 2.163 0 1.876-1.743 2.485-3.36 2.485-1.225 0-3.1-.427-3.1-1.967 0-.609.454-1.232 1.091-1.232.252 0 .441.105.616.266-.483.091-.763.588-.763 1.05 0 1.288 1.316 1.54 2.352 1.54 1.036 0 2.163-.44 2.163-1.645 0-1.449-1.63-1.372-2.653-1.435-.98-.028-2.324 0-2.324-1.33 0-.714.665-1.183 1.302-1.274V16.1c-.86-.28-1.582-1.092-1.582-2.044 0-1.568 1.33-2.415 2.78-2.415.685 0 1.378.21 1.882.665.4-.308.896-.623 1.435-.623.378 0 .868.182.868.637 0 .266-.203.49-.49.49-.455 0-.504-.518-.959-.518-.21 0-.448.147-.609.28.357.4.532.917.532 1.456 0 1.743-1.316 2.247-2.842 2.324-.448.014-1.589.014-1.589.623 0 .518.812.462 1.141.49l1.008.042M50.496 16.4c0 .973-.119 1.421 1.036 1.498v.301c-.532-.014-1.085-.049-1.617-.063-.58.014-1.14.042-1.715.063v-.3c1.113-.07 1.036-.428 1.036-1.408v-1.897c0-1.022.042-2.47-1.365-2.47-1.155 0-1.897.902-1.897 1.987v2.296c0 .973-.133 1.421 1.036 1.498v.301c-.532-.014-1.085-.049-1.61-.063-.58.014-1.148.042-1.722.063v-.3c1.113-.07 1.036-.428 1.036-1.408v-1.82c0-.413 0-1.456-.077-1.792-.119-.532-.518-.476-.987-.476v-.294c.763-.09 1.316-.329 2.037-.462l.196 1.344h.028c.518-.917 1.316-1.344 2.366-1.344 1.414 0 2.205.637 2.205 2.044V16.4M15.49 3.541h-.813v-.86h.812z"
                        />
                        <path
                          d="M14.67 4.36h-.798v.812h.798V4.36zm-.798.82h-.826v.825h.826V5.18zM10.946 7.32h.82V6.51h-.82v.812zM4.254 18.745c-.7-1.687-1.435-3.794-3.752-6.349-1.015-1.043-.273-1.7.33-1.519 1.126.364 2.554 1.386 4.395 3.948.511-1.274 2.205-4.403 2.877-5.404H8.7v-.819h.546v-.819h.82v-1.28h.867v-.729h.735V5.18h1.372v-.812h-.819v-.784h.82v.784h.825v-1.68h.798V1.82h1.59V.951h.867v.868h-.868v.868h-1.589v1.68h.812v-.819h.917v.82h-.917v.811h-.812v1.743h-.707v.686h-.728V8.61h-.65v.82h-.813v-.82h-.826v.82h.826v.923h-.826v.952h-.686v.826h-.658v.91c-1.218 1.764-2.26 3.913-2.968 5.824-.329.91-2.002.77-2.373-.119"
                          fill="#221F1F"
                        />
                        <path
                          d="M13.88 13.79c.237 0 .72.076.72-.295 0-.917-.504-1.512-1.435-1.512-1.106 0-1.554.84-1.729 1.806h2.443zm1.924 3.303c-.7.861-1.526 1.26-2.639 1.26-1.834 0-3.346-1.288-3.346-3.185 0-1.848 1.407-3.52 3.332-3.52 1.45 0 2.821.811 2.821 2.414 0 .196-.217.133-.364.133H11.36l-.063.714c0 1.407.742 2.975 2.324 2.975.756 0 1.428-.504 1.87-1.092l.314.301M17.288 14.664c0-.399.021-1.456-.084-1.792-.133-.532-.504-.476-.98-.476v-.294c.7-.049 1.351-.315 2.002-.462.133.427.196.96.175 1.498h.028c.385-.903 1.127-1.498 2.15-1.498.461 0 1.05.224 1.05.77 0 .28-.239.532-.519.532-.623 0-.49-.77-1.07-.77-.442 0-.932.371-1.149.742-.343.61-.343 1.337-.343 2.016v1.463c0 1.085-.119 1.435 1.127 1.498v.301c-.567-.014-1.148-.049-1.7-.063-.582.014-1.142.042-1.716.063v-.3c1.113-.07 1.036-.428 1.036-1.408v-1.82M22.77 9.008c0-.448.356-.798.797-.798.448 0 .791.357.791.798 0 .427-.343.784-.756.784-.448 0-.833-.322-.833-.784m1.603 2.64V16.4c.028.973-.133 1.421 1.036 1.498v.301c-.504-.014-1.05-.049-1.589-.063-.58.014-1.155.042-1.729.063v-.3c1.092-.07 1.001-.428 1.022-1.408v-2.114c0-.28 0-1.42-.063-1.645-.098-.37-.72-.343-1.022-.322v-.294l2.345-.469"
                          fill="#221F1F"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        className="modal-alert"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal-wrap scratch-modal p-0 text-center">
          <div
            className={showActive ? "d-block py-3 px-3" : "d-none"}
            style={{ marginLeft: "-153px" }}
          >
            <ScratchCard {...settings}></ScratchCard>
          </div>
          <div className={showActive ? "d-none" : "d-block py-3 px-3"}>
            <h2>You Won</h2>
            <h1>Rs. 140</h1>
            <p className="tx-18 text-muted">
              Use this cashback to pay your other EMIs and also earn cashback on
              next EMI payments
            </p>
            <button type="submit" className="btn btn-primary w-100">
              REDEEM NOW
            </button>
          </div>

          <div className="mo-close">
            <a onClick={handleClose} type="submit" className="btn btn-link">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.928 3.072c-4.095-4.096-10.76-4.096-14.856 0s-4.096 10.76 0 14.856 10.76 4.096 14.856 0 4.096-10.76 0-14.856zm-3.285 11.57a.808.808 0 0 1-1.143 0l-3-3-3.142 3.143a.808.808 0 1 1-1.143-1.143L9.357 10.5l-3-3A.808.808 0 1 1 7.5 6.357l3 3L13.357 6.5A.808.808 0 1 1 14.5 7.643L11.643 10.5l3 3a.808.808 0 0 1 0 1.142z"
                  fill="#696969"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PaymentconfirmBankPayEmi;
