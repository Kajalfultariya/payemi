import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [BillPaySevenopen, BillPaySevensetOpen] = React.useState(false);
  const [BillPaySixopen, BillPaySixsetOpen] = React.useState(false);

  const BillPaySevenClose = () => {
    window.location.href = "/home";
    BillPaySevensetOpen(false);
    BillPaySixsetOpen(false);
  };

  const [AdminMediusToken, setAdminMediusToken] = useState(
    sessionStorage.getItem("admin_medius_x_token")
  );
  const [AgentMediusToken, setAgentMediusToken] = useState(
    sessionStorage.getItem("agent_medius_x_token")
  );
  const [ClientMediusToken, setClientMediusToken] = useState(
    sessionStorage.getItem("client_medius_x_token")
  );

  const [IsTokenValid, setIsTokenValid] = useState(true);
  const [TotalResultFetched, setTotalResultFetched] = useState("");
  const [clientNameInHeader, setClientNameInHeader] = useState("Hello world");

  const updateFetchedCount = (payload) => {
    setTotalResultFetched(payload);
  };

  return (
    <AppContext.Provider
      value={{
        AdminMediusToken,
        setAdminMediusToken,
        AgentMediusToken,
        setAgentMediusToken,
        ClientMediusToken,
        setClientMediusToken,
        IsTokenValid,
        setIsTokenValid,
        TotalResultFetched,
        updateFetchedCount,
        clientNameInHeader,
        setClientNameInHeader,
        BillPaySevenopen,
        BillPaySevensetOpen,
        BillPaySixopen,
        BillPaySixsetOpen,
        BillPaySevenClose,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
