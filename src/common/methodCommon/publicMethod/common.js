export const reCheckCode = () => {
  document.getElementById("checkCode").value = "";
  document.getElementById("GOTP").src =
    "/ecntr/tx/captcha?d=" + new Date().getTime();
};

export const checkPrivacy = (item) => {
  const checkFlag = $("#" + item).attr("checkFlag");
  // const item = $(this).attr("name");
  // const item = "a05";
  if (checkFlag != "1") {
    console.log("item is ", item);
    let errorMsg = "請點選開啟閱讀 ";
    switch (item) {
      case "a03":
        errorMsg += "帳戶往來暨相關服務總約定書";
        break;
      case "a04":
        errorMsg += "數位存款帳戶約定條款";
        break;
      case "a05":
        errorMsg += "隱私權保護聲明";
        break;
      case "a06":
        errorMsg += "網銀/行動銀行服務約定書";
        break;
      default:
    }
    alert(errorMsg);
  } else {
    console.log("is 1");
  }
};
