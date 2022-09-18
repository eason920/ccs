// HOUSE LOAN OTP
// FOR 「FOR VUE HOUSE」
function otp_verify1(code) {
  var surl = "/ecntr/tx/SMSOTP?method=check1&otpcode=" + code;
  var ret = xh_send_sync(surl, null);
  var ec = ret.substring(0, 4);
  if (ec.substring(0, 1) == "X") {
    alert("系統閒置逾時，將為您導向e櫃台首頁 ");
    window.top.location.href = "/ecntr";
  }
  if (ec == "0001") {
    //錯了一次 or 兩次
    console.log("check otp", ec);
    //確定: return1:重發 取消:0
    if (window.confirm(ret.substring(5))) return 1;
    else return 0;
  } else if (ec == "0000") {
    //對的
    console.log("check otp", ec);
    return 2;
  } else {
    //錯三次or沒有輸入三次
    console.log("ret.substring(4)", ret.substring(4));
    alert(ret.substring(4));
    // disablebuttons();
    //alert.action = location.href = "/ecntr/";
    //form.submit();
    return 0;
  }
}

// 1847 ~ 1520
function otp_gen1() {
  var surl = "/ecntr/tx/SMSOTP";
  var ret = xh_send_sync(surl, null);
  //alert(ret);
  var ec = ret.substring(0, 4);
  if (ec.substring(0, 1) == "X") {
    alert("發送簡訊失敗，請稍後再試");
    window.top.location.href = "/ecntr";
  }
  if (ec == "0000") {
    console.log("成功發送otp=", ec);
    return "0";
  } else {
    console.log("沒有發送 = ", ret.substring(4));
    return alert(ret.substring(4));
  }
}

function otp_gen2(cellphone) {
  var surl = "/ecntr/tx/SMSOTP?method=genOTP&u_Mobile=" + cellphone;
  var ret = xh_send_sync(surl, null);
  var ec = ret.substring(0, 4);
  if (ec.substring(0, 1) == "X") {
    alert("發送簡訊失敗，請稍後再試");
    window.top.location.href = "/ecntr";
  }
  if (ec == "0000") {
    return "0";
  } else {
    return alert(ret.substring(4));
  }
}
function GoIndex() {
  location.href = "/ecntr/";
}
