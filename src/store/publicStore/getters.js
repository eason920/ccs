export default {
  getGlobalURL(state) {
    return state.globalURL;
  },
  //取得錯誤訊息
  getErrorMessage(state) {
    return state.errorMessage;
  },
  //取得目前網址的首頁
  getNnbUrl(state) {
    const aOriginalUrl = window.location.href.split("/");
    if (aOriginalUrl[2] === "ebank.yuantabank.com.tw") {
      return "https://ebank.yuantabank.com.tw/ecntr/";
    } else if (aOriginalUrl[2].slice(0, 9) === "localhost") {
      state.nnbUrl =
        aOriginalUrl[0] + "/" + aOriginalUrl[1] + "/" + aOriginalUrl[2];
    } else {
      //測試:請自行更換路徑
      state.nnbUrl =
        aOriginalUrl[0] +
        "/" +
        aOriginalUrl[1] +
        "/" +
        aOriginalUrl[2] +
        process.env.VUE_APP_AXIOS_BASEURL;
    }
    return state.nnbUrl;
  },
  getLoanIsYTAccLoginBack(state) {
    return state.LoanIsYTAccLoginBack;
  },
};
//
