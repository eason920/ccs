export default {
  globalURL: /ebank.yuantabank/i.test(location.href)
    ? "https://www.yuantabank.com.tw"
    : "/",
  errorMessage: {
    zh_tw: "系統錯誤",
    en: "System Error",
  }, // 顯示於錯誤頁的訊息
  nnbUrl: "", //目前網址的首頁
  LoanIsYTAccLoginBack: false,
};
//
