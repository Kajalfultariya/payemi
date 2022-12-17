import { CategoryTwoTone } from "@material-ui/icons";
import axios from "axios";
import instance from "./axios";
import { headers } from "./token";

const url = "https://api.payemi.net/";

const apiUrl = {
  collectionBatch: "/dashboard/api/batch/",
  uploadBatch: "/dashboard/api/batch/",
  collectionAccounts: "/dashboard/api/account/",
  login: "/account/api/login/",
  sms: "/message91/api/get_message_converjations_by_customer_mobile_number/",
  whatsapp: "/dashboard/api/get_wati_conversation/",
  disposition: "/dashboard/api/disposition_history/",
  calls: "/call/api/get_call_records/",
  dailyReport: "/dashboard/api/daily-report/",
  checkCurrentUser: "/dashboard/api/check_current_user/",
  postDispoData: "/dashboard/api/add_disposition_data/",
  agentChats: "/dashboard/api/whatspp_chat_name",
  dashboardDateWiseData: "/dashboard/api/datewise-batch-data/",
  dashboardLiveData: "/dashboard/api/live-feed-data/",
  dashboardDispositionData: "/dashboard/api/get-disposition-data/",
  findCustomer: "/dashboard/api/find_customer/",
  sendWaMessage: "/dashboard/api/send_wati_msg/",
  adminReport: "/dashboard/api/get_report/",
  adminBatchReport: "/dashboard/api/get_lang_report/",
  adminChannel: "/dashboard/api/channel",
  adminChannelPut: "/dashboard/api/channel/1",
  adminAgent: "/dashboard/api/agents",
  adminChannelRules: "/dashboard/api/channel_rules",
  adminChannelState: "/dashboard/api/state",
  adminUser: "/dashboard/api/user/",
  adminWhatsappTemplate: "/dashboard/api/whatsapp_templates/",
  downloadAccountCallingReport: "/dashboard/api/download-calling-report/",
  downloadDailyReport: "/dashboard/api/downlaod-daily-report/",
  downloadDailyReportN: "/dashboard/api/download-daily-report-new/",
  updateBatchConvo: "dashboard/api/update_batch_convo/",
  updateBatchCampaign: "dashboard/api/update_campaign/",
  downloadPrelitiBatchReport: "dashboard/api/batch_pre_leti_download/",
  PreLitiBatchData: "/dashboard/api/batch_pre_leti_get/",
  agentPanelData: "/dashboard/api/panel-data/",
  manualCallInitiate: "/call/api/manual_call_initiate/",
  dataWiseBatchData: "/dashboard/api/datewise-batch-data/",
  riskAssessment: "/dashboard/api/risk-assessment/",
  dispositionWiseReport: "/dashboard/api/get-disposition-wise-report/",
  liveFeedData: "/dashboard/api/live-feed-data/",
  totalCollection: "/dashboard/api/total-collection-ptp/",
  prelitiBatch: "/pre_litigation/api/pre_litigation_batch/",
  prelitiNotice: "/pre_litigation/api/notice/",
  commonActivity: "dashboard/api/get_common_activity/",
  unknownCust: "dashboard/api/agent-wise-unknown-customers/",
  check: "dashboard/api/agent-disposition-collection-record/",
  check1: "dashboard/api/total-collection-ptp/",
  check2: "dashboard/api/risk-assessment/",
  callReport: "dashboard/api/call-report/",
  recordList: "call/api/call-record-listing/",
  adminData: "dashboard/api/admin-panel-data/",
  clientData: "dashboard/api/get_batch_for_reports/",
  agentLanguage: "dashboard/api/agent-langauge/",
  whatsappTemplate: "dashboard/api/agent-wise-template/",
  messageTemplate: "dashboard/api/message-template/",
  createCampaign: "dashboard/api/admin-campaign/",
  agentDispCollection: "dashboard/api/agent-disposition-collection/",
  agentCalls: "dashboard/api/admin-calls/",
  agentChats: "dashboard/api/admin-chats/",
  mailConvo: "freshdesk/api/email_webhook/",
  clientAPI: "dashboard/api/client/",
  batchWiseAnalysis: "dashboard/api/batch_wise_analysis/",
  agingReportAnalysis: "dashboard/api/aging_report_analysis/",
  bulkReportD: "dashboard/api/bulk_report_download/",
  firBatch: "fir/api/fir_batch/",
  fetchCities: "pre_litigation/api/getCities/",
  FIRComplaints: "fir/api/complaints/",
  reset_campaign: "/dashboard/api/reset_campaign/",
  language_wise_breakup: "/dashboard/api/language_wise_breakup/",
  changeSpeed: "/dashboard/api/changeSpeed/",
  update_campaign_status: "/dashboard/api/update_campaign_status/",
  downloadTrack: "dashboard/api/Conciliation_Camp/",
  productsProcessWise: "dashboard/api/getProducts/",
  trackingStatus: "pre_litigation/api/getScans/",
  humanTemp: "dashboard/api/human_templates/",
  ivrTemp: "dashboard/api/IVR_templates/",
  emailTemp: "dashboard/api/email_templates/",
  dailyReportSettings: "dashboard/api/dailyreport-setting/",
  actualDisp: "dashboard/api/actual_analysis/",
  touchedAnalysis: "dashboard/api/touched_analysis/",
  agentWiseAnalysis: "dashboard/api/agent_wise_analysis/",
  addNewAgent: "/dashboard/api/agents",
  getAgentData: "/dashboard/api/agents/",
  dispWiseAnalysis: "dashboard/api/disposition_wise_analysis/",
  downloadTrackingReport: "/pre_litigation/api/download_tracking_report/",
  conciliationCamp: "/dashboard/api/Conciliation_Camp/",
  getDispositionData: "/dashboard/api/agent-disposition-collection/",
  batchProducts: "/dashboard/api/client-product/",
  getCategory: "dashboard/api/get-category/",
  generateReport: "dashboard/api/test_report_download/",
  agentLanguageN: "/dashboard/api/agent_languages/",
  previewReport: "/dashboard/api/preview_report/",
  recentReport: "dashboard/api/recent_reports/",
  compressedReport: "dashboard/api/compressed_bulk_reports/",
  getProductN: "/dashboard/api/get_products_for_reports/",
  allTemplates: "/dashboard/api/templates/",

  // start namrata
  getAllBanksData: "get-all-banks/?loan_category_id=", //getallbanks-noauth
  getBillerBankData: "get-biller-by-bank/?bank=", //getbillers-noauth
  getInputParamFieldData: "inputparam-fields/?biller_id=", //inputparam-fields-noauth
  getMobileProfile: "homepage/?mobile=",
  getMissingInfo: "addMissingLoanData/?loan_acc_no=",
  getTransPage: "alltransactions/?id=",
  getScratch: "getcashback/?bill_id=",
  getScratchResp: "ScratchCard/?id=",
  getProccFail: "getbilldetails/?bill_id=",
  getPayNow: "getloandetails/?loan_id=",
  getLoanCat: "getLoanCategory/",
  getDetail: "billfetch/?id=",
  // end namrata

  // start yasen
  getTransactionSearchRefId: "transactionSearch/?transaction_ref_id=",
  getTransactionSearchMobileNumber:
    "https://api.payemi.net/transactionSearch/?mobile_no=",
  getTransactionSearchRefAndmobile:
    "https://api.payemi.net/transactionSearch/?mobile_no=",
  getBillDetailsNoAuth: "getbilldetails-noauth/?bill_id=",
  getCashBackNoAuth: "getcashback-noauth/?bill_id=",
  ScratchCardNoAuth: "ScratchCard-noauth/?id=",

  // end yasen
};

const fetchAllTemplates = async (pro) => {
  try {
    const res = await axios.get(apiUrl.allTemplates, { params: pro });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchProductNew = async (pro) => {
  try {
    const mypara = {
      sub_process: pro,
    };
    const res = await axios.get(apiUrl.getProductN, { params: mypara });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const proceedToCompressedFile = async (para) => {
  try {
    const res = await axios.get(apiUrl.compressedReport, { params: para });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchRecentReports = async () => {
  try {
    const res = await axios.get(apiUrl.recentReport);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchPreviewReport = async (params) => {
  try {
    const res = await axios.get(apiUrl.previewReport, { params: params });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchLangByAgents = async (agnt) => {
  try {
    const body = {
      agent: agnt,
    };
    const res = await axios.post(apiUrl.agentLanguageN, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const generateReportN = async () => {
  try {
    const res = await axios.get(apiUrl.generateReport);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchCategory = async (para) => {
  try {
    const res = await axios.get(apiUrl.getCategory, { params: para });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchDispWiseAnalysis = async (para) => {
  try {
    const res = await axios.get(apiUrl.dispWiseAnalysis, { params: para });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const getAgentData = async (id) => {
  try {
    const res = await axios.get(apiUrl.getAgentData + id);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchAgentDispAnalysis = async (para) => {
  try {
    const res = await axios.get(apiUrl.agentWiseAnalysis, { params: para });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchTouchedDispAnalysis = async (para) => {
  try {
    const res = await axios.get(apiUrl.touchedAnalysis, { params: para });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchActualDispAnalysis = async (para) => {
  try {
    const res = await axios.get(apiUrl.actualDisp, { params: para });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchIVRTemplate = async (id) => {
  try {
    const mypara = {
      client_id: id,
    };
    const res = await axios.get(apiUrl.ivrTemp, { params: mypara });
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const fetchEmailTemplate = async (id) => {
  try {
    const mypara = {
      client_id: id,
    };
    const res = await axios.get(apiUrl.emailTemp, { params: mypara });
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const fetchHumanTemplate = async (id) => {
  try {
    const mypara = {
      client_id: id,
    };
    const res = await axios.get(apiUrl.humanTemp, { params: mypara });
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const getTrackingStatus = async (id) => {
  try {
    const mypara = {
      trackingId: id,
    };
    const res = await axios.get(apiUrl.trackingStatus, { params: mypara });
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const fetchProducts = async (id, pro, batchId) => {
  try {
    const mypara = {
      client: id,
      process: pro,
      batch: batchId,
    };
    const res = await axios.get(apiUrl.productsProcessWise, { params: mypara });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const downloadTrackFile = async () => {
  try {
    const res = await axios.get(apiUrl.downloadTrack);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchFIRComplaints = async (SearchParameter) => {
  try {
    const res = await axios.get(apiUrl.FIRComplaints, {
      params: SearchParameter,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const fetchCities = async (prc) => {
  try {
    const myPara = {
      sub_process: prc,
    };
    const res = await axios.get(apiUrl.fetchCities, { params: myPara });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const postPreLitiFIRBatchData = async (formData) => {
  try {
    const res = await axios.post(apiUrl.firBatch, formData);
    return res;
  } catch (error) {
    console.error({ error });
  }
};

const fetchFirBatches = async (SearchParameter) => {
  try {
    // const myParams= {
    //     type: typ,
    //     batch_id: id
    // }
    const res = await axios.get(apiUrl.firBatch, { params: SearchParameter });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const downloadBulkReports = async (
  data,
  siz,
  all,
  mode,
  subProcess,
  batch,
  city,
  product,
  type,
  month,
  year,
  clntId
) => {
  try {
    const body = {
      pdf_urls: data,
      size: siz,
      select_all: all,
      mode: mode,
      sub_process: subProcess,
      city: city,
      type: type,
      product: product,
      client_id: clntId,
      batch: batch,
      month: month,
      year: year,
    };

    const res = await axios.post(apiUrl.bulkReportD, body);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const getBulkReports = async (myParams) => {
  try {
    const res = await axios.get(apiUrl.bulkReportD, { params: myParams });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const getAgingReportAnalysisData = async (typ, id) => {
  try {
    const myParams = {
      type: typ,
      batch_id: id,
    };
    const res = await axios.get(apiUrl.agingReportAnalysis, {
      params: myParams,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const getBatchWiseAalysisData = async (typ, prod, id) => {
  try {
    const myParams = {
      type: typ,
      product: prod,
      batch_id: id,
    };
    const res = await axios.get(apiUrl.batchWiseAnalysis, { params: myParams });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchClient = async () => {
  try {
    const res = await axios.get(apiUrl.clientAPI);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchAgentCalls = async () => {
  try {
    const res = await axios.get(apiUrl.agentCalls);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const fetchAgentChats = async () => {
  try {
    const res = await axios.get(apiUrl.agentChats);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchAgentCallAndDisp = async () => {
  try {
    const res = await axios.get(apiUrl.agentDispCollection);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const fetchAgentLanguage = async () => {
  try {
    const res = await axios.get(apiUrl.agentLanguage);
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const fetchWhatsappTemplate = async (id, cat) => {
  try {
    const myPara = {
      client_id: id,
      category: cat,
    };
    const res = await axios.get(apiUrl.whatsappTemplate, { params: myPara });
    return res;
  } catch (err) {
    console.error({ err });
  }
};
const fetchMessageTemplate = async (id, cat) => {
  try {
    const myPara = {
      client_id: id,
      category: cat,
    };
    const res = await axios.get(apiUrl.messageTemplate, { params: myPara });
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const fetchCampaign = async (SearchParameter) => {
  try {
    const res = await axios.get(apiUrl.createCampaign, {
      params: SearchParameter,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const createCampaignP = async (para) => {
  try {
    const res = await axios.post(apiUrl.createCampaign, para);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchClientBatch = async (id, process) => {
  try {
    const myPara = {
      client_id: id,
      process: process,
    };
    const res = await axios.get(apiUrl.clientData, { params: myPara });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchBatchProducts = async (myPara) => {
  try {
    const res = await axios.get(apiUrl.batchProducts, { params: myPara });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchAdminData = async (myParams) => {
  try {
    const res = await axios.get(apiUrl.adminData, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchCommonActivity = async (id) => {
  try {
    const myParams = { user_id: id };
    const res = await axios.get(apiUrl.commonActivity, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchUnknownStatus = async () => {
  try {
    // const myParams = {user_id: id}
    const res = await axios.get(apiUrl.unknownCust);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getPreLitiNoticeData = async (SearchParameter) => {
  try {
    const res = await axios.get(apiUrl.prelitiNotice, {
      params: SearchParameter,
    });
    console.log("notice", res);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getPreLitiBatchData = async (SearchParameter) => {
  try {
    const res = await axios.get(apiUrl.prelitiBatch, {
      params: SearchParameter,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const postPreLitiBatchData = async (formData) => {
  try {
    const res = await axios.post(apiUrl.prelitiBatch, formData);
    return res;
  } catch (error) {
    console.error({ error });
  }
};

const getDataWiseBatchData = async (duration) => {
  try {
    const myParams = { duration };
    const res = await axios.get(apiUrl.dataWiseBatchData, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getRiskAssessment = async (typ, prod, id) => {
  try {
    const myParams = { type: typ, product: prod, batch_id: id };
    const res = await axios.get(apiUrl.riskAssessment, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getDispositionWiseReport = async (typ, prod, id) => {
  try {
    const myParams = { type: typ, batch_id: id, product: prod };
    const res = await axios.get(apiUrl.dispositionWiseReport, {
      params: myParams,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getDispositionCheck = async () => {
  try {
    const res = await axios.get(apiUrl.check3);
    return res.data;
  } catch (error) {
    console.log({ error });
  }
};

const getDispositionCallReport = async () => {
  try {
    const res = await axios.get(apiUrl.callReport);
    return res.data;
  } catch (error) {
    console.log({ error });
  }
};

const getDispCallRecordListing = async (para) => {
  try {
    const res = await axios.get(apiUrl.recordList, { params: para });
    console.log(res);
    return res.data;
  } catch (error) {
    console.log({ error });
  }
};

const getLiveFeed = async (ordering, page) => {
  try {
    const myParams = { ordering, page };
    const res = await axios.get(apiUrl.liveFeedData, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getTotalCollection = async () => {
  try {
    const res = await axios.get(apiUrl.totalCollection);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const postManualCallInitiate = async (mobileNumber) => {
  try {
    const myData = {
      to_number: mobileNumber,
    };
    const res = await axios.post(apiUrl.manualCallInitiate, myData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchAgentPanelData = async () => {
  try {
    const res = await axios.get(apiUrl.agentPanelData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchCollectionBatch = async (SearchParameter) => {
  try {
    const res = await axios.get(apiUrl.collectionBatch, {
      params: SearchParameter,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const addNewAgent = async (newAgentData) => {
  try {
    const res = await axios.post(apiUrl.addNewAgent, newAgentData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const patchBatchCampaign = async (batch_ids, date, dispoArray, data) => {
  try {
    let myData = {
      batch_ids,
      date,
      dispositions: dispoArray,
      channels: { ...data },
    };
    const res = await axios.post(apiUrl.updateBatchCampaign, myData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const patchBatchConvo = async (batch_id, data, type) => {
  try {
    let myData = {
      batch_id,
      disposition: "SW",
      type: "Not Connected",
      channels: { ...data },
    };
    let myParams = { batch_id };
    const res = await axios.post(apiUrl.updateBatchConvo, myData, {
      params: myParams,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getBatchConvo = async (batch_id) => {
  try {
    let myParams = { batch_id };
    const res = await axios.get(apiUrl.updateBatchConvo, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const downloadAccountCallingReport = async (batch_id, mobile_number) => {
  try {
    let myParams = { batch_id, mobile_number };
    const res = await axios.get(apiUrl.downloadAccountCallingReport, {
      params: myParams,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const downloadBatchCallingReport = async (batch_id) => {
  try {
    let myParams = { batch_id };
    const res = await axios.get(apiUrl.downloadAccountCallingReport, {
      params: myParams,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const sendWhatsappMessage = async (mobileNumber, text) => {
  try {
    let myData = {
      number: mobileNumber,
      message: text,
    };
    // let myData = new FormData()
    // myData.append(   "number",mobileNumber)
    // myData.append(   "message",text)
    const res = await axios.post(apiUrl.sendWaMessage, myData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const findCustomer = async (customer_name, mobileNumber, lrn) => {
  try {
    let myData = {
      customer_name: customer_name,
      mob: mobileNumber,
      lrn: lrn,
    };
    const res = await axios.post(apiUrl.findCustomer, myData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchAccountData = async (id) => {
  try {
    let myParams = { customer_id: id };
    const res = await axios.get(apiUrl.collectionAccounts, {
      params: myParams,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchLoginData = async (email, password) => {
  try {
    sessionStorage.clear();
    const formData = new FormData();
    formData.append("email", email.toLowerCase().trim());
    formData.append("password", password);
    const res = await axios.post(apiUrl.login, formData);
    console.table("login", res);
    return res.data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};

const fetchAccountsPageData = async (SearchParameter) => {
  try {
    const res = await axios.get(apiUrl.collectionAccounts, {
      params: SearchParameter,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};

const fetchReportData = async (param) => {
  try {
    const res = await axios.get(apiUrl.dailyReport, { params: param });
    return res.data;
  } catch (error) {
    console.error(error);
    return "error";
  }
};

const fetchDispositionData = async (mobileNumber) => {
  try {
    const myParams = { customer_mobile_number: mobileNumber };
    const res = await axios.get(apiUrl.disposition, { params: myParams });
    return res.data.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const fetchCallData = async (mobileNumber) => {
  try {
    //8423050982
    console.log(mobileNumber);
    const myParams = { to_number: mobileNumber };
    const res = await axios.get(apiUrl.calls, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const fetchWhatsappData = async (mobileNumber) => {
  try {
    // 918423050982
    const myParams = { number: mobileNumber };
    const res = await axios.get(apiUrl.whatsapp, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const fetchMailData = async (para) => {
  try {
    const myParams = { to_mail: "saurabhgujjar888@gmail.com" };
    const res = await axios.get(apiUrl.mailConvo, { params: para });
    return res.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const fetchSmsData = async (mobileNumber) => {
  try {
    let smsUrl = apiUrl.sms + mobileNumber;
    const res = await axios.get(smsUrl);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const postDispositionData = async (dispoData) => {
  try {
    const res = await axios.post(apiUrl.postDispoData, dispoData);
    return res;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const fetchOnGoingCurrectCall = async (mobileNumber) => {
  try {
    const myParams = { agent_number: mobileNumber };
    const res = await axios.get(apiUrl.checkCurrentUser, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const postBatchData = async (formData) => {
  try {
    const res = await axios.post(apiUrl.uploadBatch, formData);
    return res;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const getAgentChat = async (mobileNumber) => {
  try {
    // /7678690687
    const myParams = {
      agent_number: mobileNumber,
    };
    const res = await axios.get(apiUrl.agentChats, { params: myParams });
    return res.data;
  } catch (error) {
    console.error({ error });
    return "error";
  }
};

const fetchDashboardDateWise = async (dat) => {
  try {
    const myParams = {
      data: dat,
    };
    const res = await axios.get(apiUrl.dashboardDateWiseData, {
      params: myParams,
    });
    console.log(res);
    return res;
  } catch (err) {
    console.error({ err });
  }
};
const fetchDashboardLiveFeed = async () => {
  try {
    const myParams = { page: 1 };
    const res = await axios.get(apiUrl.dashboardLiveData, { params: myParams });
    console.log(res.data.results);
    return res.data.results;
  } catch (err) {
    console.error({ err });
  }
};
const fetchDashboardDisposition = async () => {
  try {
    const res = await axios.get(apiUrl.dashboardDispositionData);
    console.log(res);
    return res;
  } catch (err) {
    console.error({ err });
  }
};

const fetchAdminReport = async () => {
  try {
    const res = await axios.get(apiUrl.adminReport);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
const fetchAdminBatchReport = async (id) => {
  try {
    const myParams = { batch_id: id };
    const res = await axios.get(apiUrl.adminBatchReport, { params: myParams });
    console.log(res.data.data);
    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

const fetchAdminChannels = async () => {
  try {
    const res = await axios.get(apiUrl.adminChannel);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const patchAdminChannels = async (data) => {
  try {
    await axios.put(apiUrl.adminChannel + "/" + 1, data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAdminAgents = async () => {
  try {
    const res = await axios.get(apiUrl.adminAgent);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const patchAdminAgents = async (id, data) => {
  try {
    await axios.put(apiUrl.adminAgent + "/" + id, data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAdminChannelRules = async () => {
  try {
    const res = await axios.get(apiUrl.adminChannelRules);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const patchAdminChannelRules = async (id, data) => {
  try {
    await axios.put(apiUrl.adminChannelRules + "/" + id, data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAdminState = async () => {
  try {
    const res = await axios.get(apiUrl.adminChannelState);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const patchAdminState = async (id, data) => {
  try {
    await axios.put(apiUrl.adminChannelState, data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAdminUser = async () => {
  try {
    const res = await axios.get(apiUrl.adminUser);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const patchAdminUser = async (id, data) => {
  try {
    await axios.put(apiUrl.adminUser + "/" + id, data);
  } catch (err) {
    console.log(err);
  }
};

const fetchAdminWhatsappTemplate = async () => {
  try {
    const res = await axios.get(apiUrl.adminWhatsappTemplate);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const patchAdminWhatsappTemplate = async (id, data) => {
  try {
    await axios.put(apiUrl.adminWhatsappTemplate + "/" + id, data);
  } catch (err) {
    console.log(err);
  }
};

const downloadPreBatchReport = async () => {
  try {
    // let myParams = { batch_id }
    const res = await axios.get(apiUrl.downloadPrelitiBatchReport);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const fetchPreLitiBatchData = async () => {
  try {
    const res = await axios.get(apiUrl.PreLitiBatchData);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const downloadCallReport = async (dt, id) => {
  try {
    const myPara = {
      date: dt,
      client: id,
      follow_up: 1,
    };
    const res = await axios.get(apiUrl.downloadDailyReportN, {
      params: myPara,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const language_wise_breakup = async (id) => {
  try {
    const res = await axios.get(
      apiUrl.language_wise_breakup + "?campaign_id=" + id
    );
    // console.log(res)
    return res;
  } catch (error) {
    console.error({ error });
  }
};

const reset_campaign = async (id) => {
  try {
    let campaign_id = { campaign_id: id };
    const res = await axios.post(apiUrl.reset_campaign, campaign_id);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const changeSpeed = async (
  id,
  whatsAppSpeed,
  smsSpeed,
  ivrSpeed,
  humanCallSpeed,
  emailSpeed
) => {
  try {
    let changeData = {
      campaign_id: id,
      channel_data: [
        {
          channel: "whatsapp",
          speed: whatsAppSpeed,
        },
        {
          channel: "sms",
          speed: smsSpeed,
        },
        {
          channel: "ivr",
          speed: ivrSpeed,
        },
        {
          channel: "human",
          speed: humanCallSpeed,
        },
        {
          channel: "email",
          speed: emailSpeed,
        },
      ],
    };
    const res = await axios.post(apiUrl.changeSpeed, changeData);
    console.log(res);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};
const pause_campaign_status = async (id, status) => {
  try {
    let changeData = {
      campaign_id: id,
      status: status,
    };
    const res = await axios.post(apiUrl.update_campaign_status, changeData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const getDailyReportSettings = async (id = 1) => {
  try {
    const myPara = {
      client_id: id,
    };
    const res = await axios.get(apiUrl.dailyReportSettings, { params: myPara });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};

const postDailyReportSettings = async (data) => {
  try {
    const res = await axios.post(apiUrl.dailyReportSettings, data);
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};
const downloadDailyReportSettings = async (params) => {
  try {
    const res = await axios.get(apiUrl.downloadDailyReport, { params: params });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};
const fetchDownloadTrackingReport = async (params) => {
  try {
    const res = await axios.get(apiUrl.downloadTrackingReport, {
      params: params,
    });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};
const fetchConciliationCamp = async (params) => {
  try {
    const res = await axios.get(apiUrl.conciliationCamp, { params: params });
    return res.data;
  } catch (error) {
    console.error({ error });
  }
};
const fetchdispositionsData = async () => {
  try {
    const res = await axios.get(apiUrl.getDispositionData);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

// start namrata
const getAllBanks = async (lbank) => {
  try {
    const res = await axios.get(url + apiUrl.getAllBanksData + lbank, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getBillerBank = async (bank) => {
  try {
    const res = await axios.get(url + apiUrl.getBillerBankData + bank, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getInputParamField = async (id) => {
  try {
    const res = await axios.get(url + apiUrl.getInputParamFieldData + id, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getProfileMobile = async (mno, id) => {
  try {
    const res = await axios.post(
      url + apiUrl.getMobileProfile + mno + "&profile=" + id,
      "",
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

const getMissingInfoData = async (lacno, ltype, amt, emi, month, dt) => {
  try {
    const res = await axios.post(
      url +
        apiUrl.getMissingInfo +
        lacno +
        "&loan_type=" +
        ltype +
        "&loan_amount=" +
        amt +
        "&emi=" +
        emi +
        "&start_month=" +
        month +
        "&start_year=" +
        dt,
      "",
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getTransPageDetail = async (id, billId) => {
  try {
    const res = await axios.get(
      url + apiUrl.getTransPage + id + "&biller_id=" + billId,
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getScratchCash = async (billId, proId) => {
  try {
    const res = await axios.get(
      url + apiUrl.getScratch + billId + "&profile_id=" + proId,
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getScratchCashResp = async (id, bid) => {
  try {
    const res = await axios.post(
      url + apiUrl.getScratchResp + id + "&bill_id=" + bid,
      "",
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getProccFailData = async (bid) => {
  try {
    const res = await axios.get(url + apiUrl.getProccFail + bid, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getPayNowDetail = async (lid, id) => {
  try {
    const res = await axios.get(url + apiUrl.getPayNow + lid + "&id=" + id, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getLoanCatData = async () => {
  try {
    const res = await axios.get(url + apiUrl.getLoanCat, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getDetailData = async (id, bId, mno, mand) => {
  console.log(mand);
  try {
    const res = await axios.post(
      url + apiUrl.getDetail + id + "&biller_id=" + bId + "&mobile=" + mno,
      mand,
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

// end namrata
// start yasen
const getScratchCardNoAuthData = async (Pid, Bid) => {
  const ScratchCardURl = `${url}${apiUrl.ScratchCardNoAuth}${Pid}&bill_id=${Bid}`;
  try {
    const res = await axios.post(ScratchCardURl);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getCashBackNoAuthData = async (Bid, Pid) => {
  const CashBackUrl = `${url}${apiUrl.getCashBackNoAuth}${Bid}&profile_id=${Pid}`;
  try {
    const res = await axios.get(CashBackUrl);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getBillDetailsNoAuthData = async (id) => {
  try {
    const res = await axios.get(url + apiUrl.getBillDetailsNoAuth + id);
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getTransactionSearchRefData = async (id) => {
  try {
    const res = await axios.post(url + apiUrl.getTransactionSearchRefId + id, {
      headers: headers,
    });
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};
const getTransactionSearchMobileNumberData = async () => {
  try {
    const res = await axios.post(
      url + apiUrl.getTransactionSearchMobileNumber,
      {
        headers: headers,
      }
    );
    return res.data;
  } catch (err) {
    console.error({ err });
  }
};

export {
  fetchAllTemplates,
  fetchProductNew,
  proceedToCompressedFile,
  fetchRecentReports,
  fetchPreviewReport,
  fetchLangByAgents,
  generateReportN,
  fetchCategory,
  fetchBatchProducts,
  fetchdispositionsData,
  fetchDispWiseAnalysis,
  fetchAgentDispAnalysis,
  fetchTouchedDispAnalysis,
  fetchActualDispAnalysis,
  fetchIVRTemplate,
  fetchHumanTemplate,
  fetchEmailTemplate,
  getTrackingStatus,
  fetchProducts,
  downloadTrackFile,
  fetchFIRComplaints,
  fetchCities,
  postPreLitiFIRBatchData,
  fetchFirBatches,
  downloadBulkReports,
  getBulkReports,
  getAgingReportAnalysisData,
  getBatchWiseAalysisData,
  fetchAgentCallAndDisp,
  fetchAgentChats,
  fetchAgentCalls,
  fetchWhatsappTemplate,
  fetchMessageTemplate,
  fetchCampaign,
  createCampaignP,
  fetchAgentLanguage,
  fetchClientBatch,
  fetchAdminData,
  getDispCallRecordListing,
  getDispositionCallReport,
  downloadCallReport,
  fetchCommonActivity,
  fetchUnknownStatus,
  fetchAccountData,
  fetchAccountsPageData,
  fetchLoginData,
  fetchDispositionData,
  fetchCallData,
  fetchWhatsappData,
  fetchMailData,
  fetchSmsData,
  fetchReportData,
  postDispositionData,
  fetchOnGoingCurrectCall,
  postBatchData,
  getAgentChat,
  fetchDashboardDateWise,
  fetchDashboardLiveFeed,
  fetchDashboardDisposition,
  findCustomer,
  sendWhatsappMessage,
  fetchAdminReport,
  fetchAdminBatchReport,
  fetchAdminChannels,
  fetchAdminAgents,
  fetchAdminChannelRules,
  fetchAdminState,
  fetchAdminUser,
  fetchAdminWhatsappTemplate,
  downloadAccountCallingReport,
  downloadBatchCallingReport,
  patchBatchConvo,
  getBatchConvo,
  downloadPreBatchReport,
  fetchPreLitiBatchData,
  patchBatchCampaign,
  addNewAgent,
  fetchCollectionBatch,
  patchAdminChannels,
  patchAdminAgents,
  patchAdminChannelRules,
  patchAdminState,
  patchAdminUser,
  patchAdminWhatsappTemplate,
  fetchAgentPanelData,
  postManualCallInitiate,
  getDataWiseBatchData,
  getDispositionWiseReport,
  getRiskAssessment,
  postPreLitiBatchData,
  getTotalCollection,
  getLiveFeed,
  getPreLitiBatchData,
  getPreLitiNoticeData,
  getDispositionCheck,
  fetchClient,
  reset_campaign,
  getAgentData,
  language_wise_breakup,
  changeSpeed,
  pause_campaign_status,
  getDailyReportSettings,
  postDailyReportSettings,
  downloadDailyReportSettings,
  fetchDownloadTrackingReport,
  fetchConciliationCamp,
  // start namrata
  getAllBanks,
  getBillerBank,
  getInputParamField,
  getProfileMobile,
  getMissingInfoData,
  getTransPageDetail,
  getScratchCash,
  getScratchCashResp,
  getProccFailData,
  getPayNowDetail,
  getLoanCatData,
  getDetailData,
  // end namrata
  // start yasen
  getTransactionSearchRefData,
  getTransactionSearchMobileNumberData,
  getBillDetailsNoAuthData,
  getCashBackNoAuthData,
  getScratchCardNoAuthData,
};
