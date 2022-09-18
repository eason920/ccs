// e 櫃台產生交易驗證碼錯誤時,重新產生圖形驗證碼//
export const reCheckCode = () => {
  document.getElementById("checkCode").value = "";
  document.getElementById("GOTP").src =
    "/ecntr/tx/captcha?d=" + new Date().getTime();
};
