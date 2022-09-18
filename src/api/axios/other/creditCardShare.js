import nnbRequset from "@/api/axios/nnbRequsetQS";
// import nnbRequset from "@/api/axios/nnbRequsetJSON";

const prefix = "tx/creditCardShare?method=";

// 取信用卡資料
export const apiPostInit = () => nnbRequset.post(prefix + "init");

// 產生推薦網址
export const apiPostGenLink = (data) =>
  nnbRequset.post(prefix + "genLink", data);
