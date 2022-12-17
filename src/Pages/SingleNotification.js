import React from "react";

const SingleNotification = (props) => {
  const { bank_logo, msg, time } = props.notifications;
  console.log(time);
  let result;
  const date2 = new Date();
  const date1 = new Date(time);
  if (time) {
    const milleseconds = Math.abs(date2 - date1);
    const mintues = Math.ceil(milleseconds / (1000 * 60));
    if (mintues >= 60) {
      const total = Math.floor(mintues / 60);
      result = `${total} hours ago`;
    } else {
      result = `${milleseconds} mintues ago`;
    }
  }

  return (
    <div className="py-0 px-0 mb-4">
      <div className="ntfn-card bg-white py-3 px-3">
        <div className="d-flex justify-between">
          <div className="d-flex justify-between">
            <div>
              <img src={bank_logo} height="21" className="me-2" />
            </div>
            <div className="ms-3">
              <p className="mb-2 lh-1 text-black tx-14">{msg}</p>
              <p className="mb-2 lh-1 tx-12 text-muted">{result}</p>
              <button type="submit" className="btn btn-primary btn-sm">
                Pay Now & Earn Cashback
              </button>
            </div>
          </div>
          <div>
            <svg
              width="5"
              height="14"
              viewBox="0 0 5 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                transform="rotate(-180 2.056 6.719)"
                fill="#AEAECD"
                fillRule="evenodd"
              >
                <ellipse cx="1.562" cy="1.5" rx="1.562" ry="1.5" />
                <ellipse cx="1.562" cy="11.5" rx="1.562" ry="1.5" />
                <ellipse cx="1.562" cy="6.5" rx="1.562" ry="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNotification;
