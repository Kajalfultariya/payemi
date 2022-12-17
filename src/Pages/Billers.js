import React, { useState, useEffect, Fragment } from "react";
import Button from "@mui/material/Button";
import PeSpinner from "../Components/PeSpinner";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { getAllBanks, getLoanCatData } from "../API";
import BankDialog from "./BankDialog";
import { useHistory } from "react-router-dom";

const Biller = () => {
    const history = useHistory();

    const cid = JSON.parse(localStorage.getItem("CategoryId"))
    const [value, setValue] = React.useState(cid);
    //  localStorage.setItem("backbill", false);
    const [getcatid, setGetcatid] = useState(false);
    const [filterData, setFilterData] = useState("");
    const [selectedBank, setSelectedBank] = useState([]);
    const [showBankData, setShowBankData] = useState(false);
    const [catName, setCatName] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const [bankName, setBankName] = useState([]);
    const [searchData, setSearchData] = useState(false);
    const [err, setErr] = useState(false);
    const [msg, setMsg] = useState("");
    const [sName, setSName] = useState("");

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("backbill")) === true) {
            setShowBankData(true)
        }
    }, []);
    const fetchBankData = async (cname) => {
        const response = await getAllBanks(cname);
        setBankName(response?.data);
        setErr(response?.error);
        setMsg(response?.message);
        setLoading(false);
    };
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

    const getDialog = (val) => {
        setShowBankData(true);
        setSelectedBank(val?.bank_name);
        localStorage.setItem("currentBank", JSON.stringify(val?.bank_name));
        localStorage.setItem("bankLogo", JSON.stringify(val?.bank_logo_url));
    };
    if (getcatid === false) {
        setValue(cid)
        var id = value + 1;
        fetchBankData(id);
        setGetcatid(true)

    }
    const tabHandle = (Id, index) => {
        setGetcatid(true)
        var catid = index + 1;
        localStorage.setItem("CategoryId", index);
        setLoading(false);
        setValue(index);
        fetchBankData(catid);
        setSName("");
        setSearchData(false);
    };
    const searchBank = (e) => {
        setSearchData(true);
        if (sName !== null) {
            const filtered = bankName.filter((bank) => {
                return bank?.bank_name.toLowerCase().includes(sName.toLowerCase());
            });
            setSName(e.target.value);
            setFilterData(filtered);
        }
    };
    var sortCatName = catName?.slice(0);
    sortCatName.sort(function (a, b) {
        return a.id - b.id;
    });
    const backToReturn = () => {
        history.push("Category")
    };

    return (
        <Fragment>
            {showBankData === false ? (
                <>
                    <div className="side-pane side-pane-second">
                        <AppBar sx={{ position: "relative" }} className="side-pane-header">
                            <div className="d-flex align-center justify-between">
                                <div className="d-flex align-center" onClick={backToReturn}>
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
                                    Select Your Loan Provider
                                </div>
                            </div>
                        </AppBar>
                        <div className="py-0 px-3">
                            <div className="container-fluid">
                                <div className="tab-search">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="form-control"
                                        name="sName"
                                        value={sName}
                                        onChange={(e) => searchBank(e)}
                                    />
                                    <Button className="search-button">
                                        <svg
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g fill="#1A1A1A" fillRule="evenodd" opacity=".7">
                                                <path d="M10.156 16.102a5.952 5.952 0 0 1-5.954-5.95A5.952 5.952 0 0 1 10.156 4.2a5.952 5.952 0 0 1 5.953 5.95 5.952 5.952 0 0 1-5.953 5.951zm0-1.4a4.552 4.552 0 1 0-4.553-4.55 4.552 4.552 0 0 0 4.553 4.55z" />
                                                <path d="M18.005 17.007a.7.7 0 1 1-.99.99l-3.642-3.64a.7.7 0 1 1 .99-.99l3.642 3.64z" />
                                            </g>
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="py-0 px-2">
                            <div className="mt-3 product-tab">
                                <Box sx={{ width: "100%", typography: "body1" }}>
                                    <TabContext value={value}>
                                        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                                            <TabList
                                                variant="scrollable"
                                                scrollButtons="auto"
                                                aria-label="lab API tabs example"
                                            >
                                                {sortCatName.map((item, index) => {
                                                    return (
                                                        <>

                                                            <Tab
                                                                label={item?.category_name}
                                                                value={index}
                                                                onClick={() => tabHandle(item, index)}
                                                            />

                                                        </>
                                                    );
                                                })}
                                            </TabList>
                                        </Box>

                                        <TabPanel value={value}>
                                            <div className="py-0 side-pane side-pane-second">
                                                <div className="row mb-4 pb-2">
                                                    {searchData === false ? (
                                                        <>
                                                            {err === false ? (
                                                                bankName?.length > 0 ? (
                                                                    <>
                                                                        {bankName ? (loading && <PeSpinner />) : <></>}
                                                                        {" "}
                                                                        {bankName?.map((item) => {
                                                                            return (
                                                                                <>
                                                                                    <div className="col-4">
                                                                                        <Button
                                                                                            variant="outlined"
                                                                                            className="side-pane-btn"
                                                                                            onClick={() => getDialog(item)}
                                                                                        >
                                                                                            {item?.bank_logo_url ? (
                                                                                                <img src={item?.bank_logo_url} />
                                                                                            ) : (
                                                                                                <img width="70" height="70" />
                                                                                            )}
                                                                                            <p className="mb-0">
                                                                                                {item?.bank_name}
                                                                                            </p>
                                                                                        </Button>
                                                                                    </div>
                                                                                </>
                                                                            );
                                                                        })}
                                                                    </>
                                                                ) : (<>     </>)
                                                            ) : (
                                                                <> <p1 style={{ color: "Red", fontSize: "20px" }}> [....{msg}]</p1>{" "}
                                                                </>
                                                            )}
                                                            {bankName?.length === 0 ?
                                                                (<><h3 className="text-center w-100" style={{ color: "Black" }}>
                                                                    No Records Found....
                                                                </h3></>) : (<></>)}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {filterData?.length > 0 ? (
                                                                filterData?.map((item) => {
                                                                    return (
                                                                        <>
                                                                            <div className="col-4">
                                                                                <Button
                                                                                    variant="outlined"
                                                                                    className="side-pane-btn"
                                                                                    onClick={() => getDialog(item)}
                                                                                >
                                                                                    {item?.bank_logo_url ? (
                                                                                        <img src={item?.bank_logo_url} />
                                                                                    ) : (
                                                                                        <img width="70" height="70" />
                                                                                    )}
                                                                                    <p className="mb-0">
                                                                                        {item?.bank_name}
                                                                                    </p>
                                                                                </Button>
                                                                            </div>
                                                                        </>
                                                                    );
                                                                })
                                                            ) : (
                                                                <>
                                                                    {" "}
                                                                    <p>There is no search Record Found</p>
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </TabPanel>
                                    </TabContext>
                                </Box>
                            </div>
                        </div>
                    </div>
                </>) : (<> <BankDialog /></>)
            }
        </Fragment>
    )
}
export default Biller;