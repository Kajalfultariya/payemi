import React, { useState, useEffect} from "react";
import Button from "@mui/material/Button";
import PeSpinner from "../Components/PeSpinner";
import { getLoanCatData } from "../API";

import { useHistory } from "react-router-dom";



function Category(props) {
  const [loading, setLoading] = React.useState(true);
  const [catName, setCatName] = useState([]);
  const history = useHistory();
  JSON.stringify(localStorage.setItem("backbill", false));
  //api call
  useEffect(() => {
    fetchCatData();
  }, []);

  const fetchCatData = async () => {
    const response = await getLoanCatData();
    if (response !== null) {
      setCatName(response);
      setLoading(false);
    }
  };

  const getLoanCatType = (name, id) => {
    var catid = id + 1;
    // setValue(id);
    localStorage.setItem("currentCategory", name);
    localStorage.setItem("CategoryId", id);
    history.push("billers");
    
  };
 

  const backToReturn = () => {
    // window.location.href = "/Home";
  };

  var sortCatName = catName?.slice(0);
  sortCatName.sort(function (a, b) {
    return a.id - b.id;
  });

  return (

    <>
      <div className="px-4 phone-base">
        <div className="d-flex align-center justify-between top-header">
          <div className="d-flex align-center" onClick={backToReturn}>
            {/*} <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#1A1A1A" fillRule="evenodd">
                    <path d="M23.25 14.531a.969.969 0 1 1 0 1.938H7.75a.969.969 0 0 1 0-1.938h15.5z" />
                    <path d="m9.12 15.5 5.128 5.127a.969.969 0 0 1-1.37 1.37l-5.813-5.812a.969.969 0 0 1 0-1.37l5.812-5.813a.969.969 0 1 1 1.37 1.37L9.12 15.5z" />
                  </g>
                   </svg>*/}
            <p className="mb-0 ms-2">
              <strong>Category</strong>
            </p>
          </div>
          <div></div>
        </div>
        <div className="py-0 side-pane side-pane-second">
          <div className="row mb-4 pb-2 align-start">
            <div className="col-21 mb-4">
              <p className="mb-0 tx-16">
                Select the loan for which you want to pay
              </p>
            </div>

            {sortCatName?.length > 0 ? (
              <>
                {sortCatName.map((item, index) => {
                  return (
                    <div className="col-4 ps-1 pe-1">
                      <Button
                        variant="outlined"
                        onClick={() =>
                          getLoanCatType(item?.category_name, index)
                        }
                        className="side-pane-btn"
                      >
                        <img src={item?.loan_category_logo_url} />
                        <p className="mb-0">{item?.category_name}</p>
                      </Button>
                    </div>
                  );
                })}
              </>
            ) : sortCatName ? (
              loading && <PeSpinner />
            ) : (
              <h2 className="text-center w-100">No Records Found.</h2>
            )}
          </div>
        </div>
      </div>


    </>

  );
}

export default Category;
