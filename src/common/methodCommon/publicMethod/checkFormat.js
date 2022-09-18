//將金額加上千分位逗號(台幣)
export const checkID = (id) => {
  if (!id) {
    //
    alert("您尚未輸入身分證字號");
    return false;
  } else {
    if (!id.match(/^[0-9a-zA-Z]*$/)) {
      alert("身分證請勿輸入英數字以外的字元!");
      return false;
    }

    if (id.length !== 10) {
      alert("身分證字數不正確");
      return false;
    } else {
      return true;
    }
  }
};

export const idMaske = (str) => {
  return str.substr(0, 4) + "*****" + str.substr(9);
};

export const toDBC = (str) => {
  var result = "";
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var cCode = str.charCodeAt(i);
    //全形與半形相差（除空格外）：65248(十進位制)
    cCode = cCode >= 0xff01 && cCode <= 0xff5e ? cCode - 65248 : cCode;
    //處理空格
    cCode = cCode == 0x03000 ? 0x0020 : cCode;
    result = result + String.fromCharCode(cCode);
  }
  return result;
};

export const checkEn = (txt) => {
  return /^[a-zA-Z]*$/.test(txt) ? true : false;
};

export const checkNum = (num) => {
  return /^[0-9]*$/.test(num) ? true : false;
};

export const checkDate = (date) => {
  date = date.trim();
  let year;
  let month;
  let day;

  if (/^\d{7}$/.test(date)) {
    year = parseInt(date.substring(0, 3), 10);
    month = parseInt(date.substring(3, 5), 10);
    day = parseInt(date.substring(5, 7), 10);
  } else if (/^\d{5}$/.test(date)) {
    year = parseInt(date.substring(0, 1), 10);
    month = parseInt(date.substring(1, 3), 10);
    day = parseInt(date.substring(3, 5), 10);
  } else if (/^\d{6}$/.test(date)) {
    year = parseInt(date.substring(0, 2), 10);
    month = parseInt(date.substring(2, 4), 10);
    day = parseInt(date.substring(4, 6), 10);
  } else if (/^\d{8}$/.test(date)) {
    year = parseInt(date.substring(0, 4), 10) - 1911;
    month = parseInt(date.substring(4, 6), 10);
    day = parseInt(date.substring(6, 8), 10);
  } else {
    return false;
  }

  if (month < 1 || month > 12) return false;

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    if (day < 1 || day > 31) return false;
  } else if (month == 2) {
    var febdays =
      28 +
      ((year + 1911) % 400 == 0 ||
      ((year + 1911) % 4 == 0 && (year + 1911) % 100 != 0)
        ? 1
        : 0);
    if (day < 1 || day > febdays) return false;
  } else {
    if (day < 1 || day > 30) return false;
  }
  return true;
};
