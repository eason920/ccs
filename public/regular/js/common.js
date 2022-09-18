function MM_reloadPage(init) {
  //reloads the window if Nav4 resized
  if (init == true)
    with (navigator) {
      if (appName == "Netscape" && parseInt(appVersion) == 4) {
        document.MM_pgW = innerWidth;
        document.MM_pgH = innerHeight;
        onresize = MM_reloadPage;
      }
    }
  else if (innerWidth != document.MM_pgW || innerHeight != document.MM_pgH)
    location.reload();
}

function MM_swapImgRestore() {
  //v3.0
  var i,
    x,
    a = document.MM_sr;
  for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;
}
function MM_preloadImages() {
  //v3.0
  var d = document;
  if (d.images) {
    if (!d.MM_p) d.MM_p = new Array();
    var i,
      j = d.MM_p.length,
      a = MM_preloadImages.arguments;
    for (i = 0; i < a.length; i++)
      if (a[i].indexOf("#") != 0) {
        d.MM_p[j] = new Image();
        d.MM_p[j++].src = a[i];
      }
  }
}

function MM_findObj(n, d) {
  //v4.01
  var p, i, x;
  if (!d) d = document;
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n];
  for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++)
    x = MM_findObj(n, d.layers[i].document);
  if (!x && d.getElementById) x = d.getElementById(n);
  return x;
}

function MM_swapImage() {
  //v3.0
  var i,
    j = 0,
    x,
    a = MM_swapImage.arguments;
  document.MM_sr = new Array();
  for (i = 0; i < a.length - 2; i += 3)
    if ((x = MM_findObj(a[i])) != null) {
      document.MM_sr[j++] = x;
      if (!x.oSrc) x.oSrc = x.src;
      x.src = a[i + 2];
    }
}
function MM_showHideLayers() {
  //v9.0
  var i,
    p,
    v,
    obj,
    args = MM_showHideLayers.arguments;
  for (i = 0; i < args.length - 2; i += 3)
    with (document)
      if (getElementById && (obj = getElementById(args[i])) != null) {
        v = args[i + 2];
        if (obj.style) {
          obj = obj.style;
          v = v == "show" ? "visible" : v == "hide" ? "hidden" : v;
        }
        obj.visibility = v;
      }
}

function MM_CountClick() {
  MM_Date = new Date().getTime();
}

function MM_CountKeypressed() {
  MM_Date = new Date().getTime();
}

String.prototype.trim = function () {
  return this.replace(/(^\s*)|(\s*$)/g, "");
};

String.prototype.isInteger = function () {
  return /^\d+$/.test(this);
};

String.prototype.toUpper = function () {
  return this.toUpperCase();
};

String.prototype.toNumber = function () {
  return Number(this);
};

//check date pattern with yyyyMMdd
String.prototype.checkDate = function () {
  var date = this.trim();

  if (/^\d{7}$/.test(date)) {
    var year = parseInt(date.substring(0, 3), 10);
    var month = parseInt(date.substring(3, 5), 10);
    var day = parseInt(date.substring(5, 7), 10);
  } else if (/^\d{5}$/.test(date)) {
    var year = parseInt(date.substring(0, 1), 10);
    var month = parseInt(date.substring(1, 3), 10);
    var day = parseInt(date.substring(3, 5), 10);
  } else if (/^\d{6}$/.test(date)) {
    var year = parseInt(date.substring(0, 2), 10);
    var month = parseInt(date.substring(2, 4), 10);
    var day = parseInt(date.substring(4, 6), 10);
  } else if (/^\d{8}$/.test(date)) {
    var year = parseInt(date.substring(0, 4), 10) - 1911;
    var month = parseInt(date.substring(4, 6), 10);
    var day = parseInt(date.substring(6, 8), 10);
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

//check date pattern with yyyy/MM/dd
String.prototype.checkDateN = function () {
  var date = this.trim();

  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(date)) return 1;

  var year = parseInt(date.substring(0, 4), 10);
  var month = parseInt(date.substring(5, 7), 10);
  var day = parseInt(date.substring(8, 10), 10);
  var o = new Date(year, month - 1, day);
  if (
    o.getFullYear() != year ||
    o.getMonth() != month - 1 ||
    o.getDate() != day
  )
    return 2;
  return 0;
};
//check 20 years old
String.prototype.checkyears = function () {
  var date = this.trim();
  if (/^\d{7}$/.test(date)) {
    var year = parseInt(date.substring(0, 3), 10);
    var month = parseInt(date.substring(3, 5), 10);
    var day = parseInt(date.substring(5, 7), 10);
  }
  if (/^\d{5}$/.test(date)) {
    var year = parseInt(date.substring(0, 1), 10);
    var month = parseInt(date.substring(1, 3), 10);
    var day = parseInt(date.substring(3, 5), 10);
  }
  if (/^\d{6}$/.test(date)) {
    var year = parseInt(date.substring(0, 2), 10);
    var month = parseInt(date.substring(2, 4), 10);
    var day = parseInt(date.substring(4, 6), 10);
  }
  if (/^\d{8}$/.test(date)) {
    var year = parseInt(date.substring(0, 4), 10) - 1911;
    var month = parseInt(date.substring(4, 6), 10);
    var day = parseInt(date.substring(6, 8), 10);
  }
  var d = new Date();
  var nowYear = d.getFullYear() - 1911;
  var nowMon = d.getMonth() + 1;
  var nowDay = d.getDate();
  var checkFlagTemp = true;
  if (nowYear - year < 20) checkFlagTemp = false;
  else if (nowYear - year == 20) {
    if (nowMon < month) checkFlagTemp = false;
    else if (nowMon == month) {
      if (nowDay < day) checkFlagTemp = false;
    }
  }
  return checkFlagTemp;
};
//check 70 years old
String.prototype.checkyearsold = function () {
  var date = this.trim();
  if (/^\d{7}$/.test(date)) {
    var year = parseInt(date.substring(0, 3), 10);
    var month = parseInt(date.substring(3, 5), 10);
    var day = parseInt(date.substring(5, 7), 10);
  }
  if (/^\d{5}$/.test(date)) {
    var year = parseInt(date.substring(0, 1), 10);
    var month = parseInt(date.substring(1, 3), 10);
    var day = parseInt(date.substring(3, 5), 10);
  }
  if (/^\d{6}$/.test(date)) {
    var year = parseInt(date.substring(0, 2), 10);
    var month = parseInt(date.substring(2, 4), 10);
    var day = parseInt(date.substring(4, 6), 10);
  }
  if (/^\d{8}$/.test(date)) {
    var year = parseInt(date.substring(0, 4), 10) - 1911;
    var month = parseInt(date.substring(4, 6), 10);
    var day = parseInt(date.substring(6, 8), 10);
  }
  var d = new Date();
  var nowYear = d.getFullYear() - 1911;
  var nowMon = d.getMonth() + 1;
  var nowDay = d.getDate();
  var checkFlagTemp = true;
  if (nowYear - year > 70) checkFlagTemp = false;
  else if (nowYear - year == 70) {
    if (nowMon > month) checkFlagTemp = false;
    else if (nowMon == month) {
      if (nowDay >= day) checkFlagTemp = false;
    }
  }
  return checkFlagTemp;
};

//check under 7 years old
String.prototype.checkunder7yearsold = function () {
  var date = this.trim();
  if (/^\d{7}$/.test(date)) {
    var year = parseInt(date.substring(0, 3), 10);
    var month = parseInt(date.substring(3, 5), 10);
    var day = parseInt(date.substring(5, 7), 10);
  }
  if (/^\d{5}$/.test(date)) {
    var year = parseInt(date.substring(0, 1), 10);
    var month = parseInt(date.substring(1, 3), 10);
    var day = parseInt(date.substring(3, 5), 10);
  }
  if (/^\d{6}$/.test(date)) {
    var year = parseInt(date.substring(0, 2), 10);
    var month = parseInt(date.substring(2, 4), 10);
    var day = parseInt(date.substring(4, 6), 10);
  }
  if (/^\d{8}$/.test(date)) {
    var year = parseInt(date.substring(0, 4), 10) - 1911;
    var month = parseInt(date.substring(4, 6), 10);
    var day = parseInt(date.substring(6, 8), 10);
  }
  var d = new Date();
  var nowYear = d.getFullYear() - 1911;
  var nowMon = d.getMonth() + 1;
  var nowDay = d.getDate();
  var checkFlagTemp = true;
  if (nowYear - year < 7) checkFlagTemp = false;
  else if (nowYear - year == 7) {
    if (nowMon < month) checkFlagTemp = false;
    else if (nowMon == month) {
      if (nowDay < day) checkFlagTemp = false;
    }
  }
  return checkFlagTemp;
};

//check upper 20 years old
String.prototype.checkupper20yearsold = function () {
  var date = this.trim();
  if (/^\d{7}$/.test(date)) {
    var year = parseInt(date.substring(0, 3), 10);
    var month = parseInt(date.substring(3, 5), 10);
    var day = parseInt(date.substring(5, 7), 10);
  }
  if (/^\d{5}$/.test(date)) {
    var year = parseInt(date.substring(0, 1), 10);
    var month = parseInt(date.substring(1, 3), 10);
    var day = parseInt(date.substring(3, 5), 10);
  }
  if (/^\d{6}$/.test(date)) {
    var year = parseInt(date.substring(0, 2), 10);
    var month = parseInt(date.substring(2, 4), 10);
    var day = parseInt(date.substring(4, 6), 10);
  }
  if (/^\d{8}$/.test(date)) {
    var year = parseInt(date.substring(0, 4), 10) - 1911;
    var month = parseInt(date.substring(4, 6), 10);
    var day = parseInt(date.substring(6, 8), 10);
  }
  var d = new Date();
  var nowYear = d.getFullYear() - 1911;
  var nowMon = d.getMonth() + 1;
  var nowDay = d.getDate();
  var checkFlagTemp = true;
  if (nowYear - year > 20) checkFlagTemp = false;
  else if (nowYear - year == 20) {
    if (nowMon > month) checkFlagTemp = false;
    else if (nowMon == month) {
      if (nowDay >= day) checkFlagTemp = false;
    }
  }
  return checkFlagTemp;
};

//checkForeignId
String.prototype.isForeignId = function () {
  var id = this.trim().toUpperCase();

  if (/^[A-Z][8-9A-Z]\d{8}\d?$/.test(id) || /^\d{8}[A-Z]{2}$/.test(id)) {
    id = id.substring(0, 10);
  } else {
    return false;
  }

  var alph = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "W",
    "Z",
    "I",
    "O"
  );
  var num = new Array(
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35"
  );

  var type = 0;
  var citycharS = id.charAt(0);
  var citycharE = id.charAt(9);

  if (citycharS >= "A" && citycharS <= "Z") {
    var sexchar = id.charAt(1);
    if (sexchar == "8" || sexchar == "9") {
      //is new Foreign ID
      type = 1;
    } else if (sexchar >= "A" && sexchar <= "Z") {
      //is old Foreign ID, CASE1
      type = 2;
    }
  } else if (citycharE >= "A" && citycharE <= "Z") {
    //is old Foreign ID, CASE2
    type = 3;
  }

  var n = 0;
  for (var i = 0; i < alph.length; i++) {
    if (id.charAt(0) == alph[i]) n = i;
  }
  switch (type) {
    case 1:
      //is new Foreign ID
      var tot1 =
        parseFloat(num[n].charAt(0)) + parseFloat(num[n].charAt(1)) * 9;
      var tot2 = 0;
      for (var i = 1; i < id.length - 1; i++) {
        tot2 = tot2 + ((parseFloat(id.charAt(i)) * (9 - i)) % 10);
      }
      var tot3 = parseFloat(id.charAt(9));
      var checkcode = (tot1 + tot2) % 10;
      if (checkcode != 0) checkcode = 10 - checkcode;
      if (checkcode != tot3) return false;
      break;
    case 2:
      //is old Foreign ID, CASE1
      for (var i = 2; i <= 9; i++) {
        var d = id.charAt(i) - "0";
        if (d < 0 || d > 9) return false;
      }
      break;
    case 3:
      //is old Foreign ID, CASE2
      for (var i = 7; i >= 0; i--) {
        var d = id.charAt(i) - "0";
        if (d < 0 || d > 9) return false;
      }
      break;
    default:
      return false;
  }
  return true;
};

String.prototype.checkIp = function () {
  var ip = this.trim();

  var arr = ip.split(".");
  if (arr.length != 4) {
    return true;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "") return true;
  }

  if (
    arr[0].isInteger() &&
    arr[1].isInteger() &&
    arr[2].isInteger() &&
    arr[3].isInteger()
  ) {
    return false;
  } else if (arr[0] < 255 && arr[1] < 255 && arr[2] < 255 && arr[3] < 255) {
    return false;
  }
  return true;
};

function getObject(objName) {
  var obj = null;
  obj = document.getElementById(objName);
  if (obj == null) {
    obj = document.getElementsByName(objName);
  }
  return obj;
}

function setCenter(objName) {
  try {
    var obj = getObject(objName);
    obj.style.left = (document.body.clientWidth - obj.offsetWidth) / 2;
    obj.style.top = (document.body.clientHeight - obj.offsetHeight) / 2;
    setTimeout('setCenter("' + objName + '")', 10);
  } catch (e) {}
}

function lockF5() {
  //��F3��
  if (event.keyCode == 114) {
    event.keyCode = 0;
    window.event.returnValue = false;
  }
  //��F5��
  if (event.keyCode == 116) {
    event.keyCode = 0;
    window.event.returnValue = false;
  }
  //��F6��
  if (event.keyCode == 117) {
    event.keyCode = 0;
    window.event.returnValue = false;
  }
  //��F11��
  if (event.keyCode == 122) {
    event.keyCode = 0;
    window.event.returnValue = false;
  }
  //��alt+��V�� �^�W�U��
  if (window.event.altKey && window.event.keyCode == 37) {
    window.event.returnValue = false;
  }
  if (window.event.altKey && window.event.keyCode == 39) {
    window.event.returnValue = false;
  }
  //��ctrl+r �������
  if (event.ctrlKey && event.keyCode == 82) {
    window.event.returnValue = false;
  }
  //��ctrl+n �t�}�����
  if (event.ctrlKey && event.keyCode == 78) {
    window.event.returnValue = false;
  }
}

//��ƹ��k��
function noRight() {
  window.event.returnValue = false;
}

function createOption(text, value) {
  var oOption = document.createElement("OPTION");
  oOption.text = text;
  oOption.value = value;
  return oOption;
}

String.prototype.isCompanyIdentity = function () {
  var id = this.trim().toUpperCase();

  var tmp = new String("12121241");
  var sum = 0;
  if (!/^\d{8}$/.test(id)) {
    return false;
  }

  for (var i = 0; i < 8; i++) {
    var s1 = parseInt(id.substr(i, 1));
    var s2 = parseInt(tmp.substr(i, 1));

    var n = s1 * s2;
    while (n != 0) {
      sum += n % 10;
      n = (n - (n % 10)) / 10;
    }
  }

  if (!(sum % 10 == 0 ? true : false)) {
    if (id.substr(6, 1) == "7") return (sum + 1) % 10 == 0 ? true : false;
  }
  return sum % 10 == 0 ? true : false;
};

String.prototype.checkcaseno = function () {
  var caseno = this.trim().toUpperCase();

  if (
    /^[O][A][T]\d{13}\d?$/.test(caseno) ||
    /^[O][P][A]\d{13}\d?$/.test(caseno)
  )
    caseno = caseno.substring(0, 16);
  else return false;
  if (caseno.length != 16) return false;

  var caseno_y = parseInt(caseno.substring(3, 7), 10);
  var caseno_m = parseInt(caseno.substring(7, 9), 10);
  var caseno_d = parseInt(caseno.substring(9, 11), 10);
  var caseno_no = parseInt(caseno.substring(11, 16), 10);
  if (caseno_m < 1 || caseno_m > 12) return false;
  if (
    caseno_m == 1 ||
    caseno_m == 3 ||
    caseno_m == 5 ||
    caseno_m == 7 ||
    caseno_m == 8 ||
    caseno_m == 10 ||
    caseno_m == 12
  ) {
    if (caseno_d < 1 || caseno_d > 31) return false;
  } else if (caseno_m == 2) {
    var febdays =
      28 +
      ((caseno_y + 1911) % 400 == 0 ||
      ((caseno_y + 1911) % 4 == 0 && (caseno_y + 1911) % 100 != 0)
        ? 1
        : 0);
    if (caseno_d < 1 || caseno_d > febdays) return false;
  } else {
    if (caseno_d < 1 || caseno_d > 30) return false;
  }
  if (caseno_no < 1) return false;
  return true;
};

String.prototype.isIdentity = function () {
  var id = this.trim().toUpperCase();

  if (/^[A-Z][1-2]\d{8}\d?$/.test(id)) {
    id = id.substring(0, 10);
  } else {
    return false;
  }

  var alph = new Array(
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Y",
    "W",
    "Z",
    "I",
    "O"
  );
  var num = new Array(
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35"
  );
  var n = 0;
  for (var i = 0; i < alph.length; i++) {
    if (id.charAt(0) == alph[i]) n = i;
  }
  var tot1 = parseFloat(num[n].charAt(0)) + parseFloat(num[n].charAt(1)) * 9;
  var tot2 = 0;
  for (var i = 1; i < id.length - 1; i++)
    tot2 = tot2 + parseFloat(id.charAt(i)) * (9 - i);
  var tot3 = parseFloat(id.charAt(9));
  var tot4 = tot1 + tot2 + tot3;
  if (tot4 % 10 != 0) return false;
  return true;
};

String.prototype.isId = function () {
  return this.isIdentity() || this.isCompanyIdentity();
};

String.prototype.isEmail = function () {
  return /^[\w\-]+(\.[\w\-]+)*@(([a-zA-Z0-9]+-+)*[a-zA-Z0-9]+\.)*[a-zA-Z0-9]{2,10}$/.test(
    this
  );
};

function setResult(node, value) {
  var result = document.getElementById(node);
  if (result.hasChildNodes()) {
    result.removeChild(result.childNodes[0]);
  }

  var text = document.createTextNode(value);
  result.appendChild(text);
}

function setCenter(objName) {
  try {
    var obj = getObject(objName);
    obj.style.left = (document.body.clientWidth - obj.offsetWidth) / 2;
    obj.style.top = (document.body.clientHeight - obj.offsetHeight) / 2;
    setTimeout('setCenter("' + objName + '")', 10);
  } catch (e) {}
}

function showObject(objName) {
  try {
    var obj = getObject(objName);
    obj.style.display = "";
  } catch (e) {
    setTimeout('showObject("' + objName + '")', 10);
  }
}

function hideRunningMessage(objName) {
  try {
    var obj = getObject(objName);
    if (obj != null) {
      obj.style.display = "none";
    }
  } catch (e) {}
}

function closeRunningMessage() {
  if (document != null && document.readyState == "complete") {
    hideRunningMessage("runningMessage");
  } else {
    setTimeout(closeRunningMessage, 10);
  }
}

function disablebuttons() {
  with (document.forms[0]) {
    for (i = 0; i < elements.length; i++) {
      if (
        elements[i].type.toLowerCase() == "submit" ||
        elements[i].type.toLowerCase() == "button"
      ) {
        elements[i].disabled = true;
      }
    }
  }
}

function enablebuttons() {
  with (document.forms[0]) {
    for (i = 0; i < elements.length; i++) {
      if (
        elements[i].type.toLowerCase() == "submit" ||
        elements[i].type.toLowerCase() == "button"
      ) {
        elements[i].disabled = false;
      }
    }
  }
}

function posfooter() {
  /*var ch = document.documentElement.clientHeight;
		var ph = document.body.offsetHeight;
		var fh = document.getElementById('footer').offsetHeight;
		var fih = parseInt(document.getElementById('footerfill').height);
		if (ph - fih - 30 < ch) 
			document.getElementById('footerfill').height = ch -ph + 30 + fih;
		else
			document.getElementById('footerfill').height = 30;*/
}

// remove leading 0, and comma, remove all after .
function toMoneyInt(s) {
  if (s == 0) {
    return "0";
  } else {
    for (var i = 0; i < s.length; i++) {
      if (s.charAt(i) != "0" && s.charAt(i) != " " && s.charAt(i) != "\t")
        break;
    }
    hasdot = false;
    for (var j = s.length - 1; j >= i; j--) {
      if (s.charAt(j) == ".") {
        hasdot = true;
        j--;
        break;
      }
    }
    if (j < i) {
      if (hasdot) return "0";
      j = s.length - 1;
    }

    s = s.substring(i, j + 1);
    var le = s.length % 3;
    b = "";
    b += s.substring(0, le);
    for (var k = le; k < s.length; k += 3) {
      if (k != 0) b += ",";
      b += s.substring(k, k + 3);
    }
    return b;
  }
}

function toMoneyFloat(s) {
  var index_point = 0;
  var tail = "";
  index_point = s.indexOf(".");
  if (index_point > 0 && index_point + 1 < s.length) {
    tail = s.substring(index_point);
  }
  b = "";
  b = toMoneyInt(s);
  b = b + tail;

  return b;
}

function enableField(inputField) {
  inputField.disabled = false;
  inputField.style.backgroundColor = "#FFFFFF";
}

function disableField(inputField) {
  inputField.disabled = true;
  inputField.style.backgroundColor = "#D9D9D9";
}

function cancelAll() {
  var nodes = document.all;

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].type == "checkbox") {
      nodes[i].checked = false;
    }
  }
}

function selectAll() {
  var nodes = document.all;

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].type == "checkbox") {
      nodes[i].checked = true;
    }
  }
}

function clearText() {
  var nodes = document.all;

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].type == "text") {
      nodes[i].value = "";
    }
  }
}

String.prototype.isSameChar = function () {
  return /^(.?)\1*$/.test(this);
};

String.prototype.isUpperCase = function () {
  return /^[A-Z]*$/.test(this);
};

String.prototype.isLowerCase = function () {
  return /^[a-z]*$/.test(this);
};

String.prototype.isEnglish = function () {
  return /^[A-Za-z]*$/.test(this);
};

String.prototype.isUpEnglishAndNumber = function () {
  return /^[A-Z\d+,]*$/.test(this);
};

String.prototype.isEnglishAndNumber = function () {
  return /^[A-Za-z\d]*$/.test(this);
};

String.prototype.isEnglishName = function () {
  return /^[A-Za-z.,/'&-/]*$/.test(this);
};

String.prototype.isNumber = function () {
  return /^\d+$/.test(this);
};

String.prototype.isAccountNo = function () {
  return /^\d{10,16}$/.test(this);
};

String.prototype.isSpecialChar = function () {
  var s = this;
  for (var i = 0; i < s.length; i++) {
    if (
      !(
        (s.charAt(i) >= "0" && s.charAt(i) <= "9") ||
        (s.charAt(i) >= "a" && s.charAt(i) <= "z") ||
        (s.charAt(i) >= "A" && s.charAt(i) <= "Z")
      )
    ) {
      return true;
    }
  }
  return false;
};

String.prototype.isEqualDifference = function () {
  var s = this;
  for (var i = 2; i < s.length; i++) {
    if (
      s.charCodeAt(i - 2) - s.charCodeAt(i - 1) !=
      s.charCodeAt(i - 1) - s.charCodeAt(i)
    ) {
      return false;
    }
  }
  return true;
};

function toURLhex(n) {
  var s = n.toString(16).toUpperCase();
  return "%" + (s.length == 1 ? "0" : "") + s;
}

function URLEncodeUTF8(s) {
  if (s == null) return s;
  var ret = "";
  for (var i = 0; i < s.length; i++) {
    var n = s.charCodeAt(i);
    if (n < 0x80) {
      if (
        (n >= 0x61 && n <= 0x7a) ||
        (n >= 0x41 && n <= 0x51) ||
        (n >= 0x30 && n <= 0x39) ||
        n == 0x5f ||
        n == 0x21 ||
        (n >= 0x27 && n <= 0x2a) ||
        n == 0x2d ||
        n == 0x2e
      ) {
        ret += s.charAt(i);
      } else ret += toURLhex(n);
    } else if (n < 0x800) {
      ret += toURLhex(0x60 | ((n >> 6) & 0x17));
      ret += toURLhex(0x80 | (n & 0x3f));
    } else if (n < 0x10000) {
      ret += toURLhex(0xe0 | ((n >> 12) & 0x0f));
      ret += toURLhex(0x80 | ((n >> 6) & 0x3f));
      ret += toURLhex(0x80 | (n & 0x3f));
    }
  }
  return ret;
}

function unAsc(text) {
  var asciiTable =
    "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var big5Table =
    "\uFF01\u201D\uFF03\uFF04\uFF05\uFF06\u2019\uFF08\uFF09\uFF0A\uFF0B\uFF0C\uFF0D\uFF0E\uFF0F\uFF10\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17\uFF18\uFF19\uFF1A\uFF1B\uFF1C\uFF1D\uFF1E\uFF1F\uFF20\uFF21\uFF22\uFF23\uFF24\uFF25\uFF26\uFF27\uFF28\uFF29\uFF2A\uFF2B\uFF2C\uFF2D\uFF2E\uFF2F\uFF30\uFF31\uFF32\uFF33\uFF34\uFF35\uFF36\uFF37\uFF38\uFF39\uFF3A\uFF3B\uFF3C\uFF3D\uFF3E\uFF3F\u2018\uFF41\uFF42\uFF43\uFF44\uFF45\uFF46\uFF47\uFF48\uFF49\uFF4A\uFF4B\uFF4C\uFF4D\uFF4E\uFF4F\uFF50\uFF51\uFF52\uFF53\uFF54\uFF55\uFF56\uFF57\uFF58\uFF59\uFF5A\uFF5B\uFF5C\uFF5D\uFF5E";

  var result = "";
  for (var i = 0; i < text.length; i++) {
    var val = text.charAt(i);
    var j = asciiTable.indexOf(val);
    result += j > -1 ? big5Table.charAt(j) : val;
  }
  return result;
}

function STR_TRANSAsc(obj, type) {
  if (!type) type = "0";
  var txtobj = obj;
  var a = txtobj.value;
  var asciiTable = new Array(
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "[",
    "\\",
    "]",
    "^",
    "_",
    "`",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "{",
    "|",
    "}",
    "~"
  );
  var big5Table = new Array(
    "　",
    "！",
    "”",
    "＃",
    "＄",
    "％",
    "＆",
    "’",
    "（",
    "）",
    "＊",
    "＋",
    "，",
    "－",
    "‧",
    "／",
    "０",
    "１",
    "２",
    "３",
    "４",
    "５",
    "６",
    "７",
    "８",
    "９",
    "：",
    "；",
    "＜",
    "＝",
    "＞",
    "？",
    "＠",
    "Ａ",
    "Ｂ",
    "Ｃ",
    "Ｄ",
    "Ｅ",
    "Ｆ",
    "Ｇ",
    "Ｈ",
    "Ｉ",
    "Ｊ",
    "Ｋ",
    "Ｌ",
    "Ｍ",
    "Ｎ",
    "Ｏ",
    "Ｐ",
    "Ｑ",
    "Ｒ",
    "Ｓ",
    "Ｔ",
    "Ｕ",
    "Ｖ",
    "Ｗ",
    "Ｘ",
    "Ｙ",
    "Ｚ",
    "〔",
    "＼",
    "〕",
    "︿",
    "＿",
    "｀",
    "ａ",
    "ｂ",
    "ｃ",
    "ｄ",
    "ｅ",
    "ｆ",
    "ｇ",
    "ｈ",
    "ｉ",
    "ｊ",
    "ｋ",
    "ｌ",
    "ｍ",
    "ｎ",
    "ｏ",
    "ｐ",
    "ｑ",
    "ｒ",
    "ｓ",
    "ｔ",
    "ｕ",
    "ｖ",
    "ｗ",
    "ｘ",
    "ｙ",
    "ｚ",
    "｛",
    "｜",
    "｝",
    "～"
  );
  if (asciiTable.length == big5Table.length) {
    if (txtobj.value.length > 0) {
      for (var j = 0; j < txtobj.value.length; j++) {
        for (var i = 0; i < asciiTable.length; i++) {
          //全形轉半形
          if (type == "0") {
            a = a.replace(big5Table[i], asciiTable[i]);
          }
          //半形轉全形
          if (type == "1") {
            a = a.replace(asciiTable[i], big5Table[i]);
          }
        }
      }
      txtobj.value = a;
    }
  } else {
    alert("error");
  }
}

String.prototype.checkMemo = function () {
  var s = this;
  if (s.length > 5) return false;
  for (var i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 255) {
      continue;
    } else {
      if (!/^[A-Za-z\d+,]*$/.test(s.charAt(i))) return false;
    }
  }
  return true;
};

function common_print() {
  common_toprint(document.title, document.mform);
}

function common_print_wide() {
  common_toprint_wide(document.title, document.mform);
}

function common_toprint(title, obj) {
  var disp_setting = "toolbar=no,location=no,directories=no,menubar=no,";
  disp_setting += "scrollbars=no,width=600, height=600";
  var content_value = obj.innerHTML;
  var style =
    '<style type="text/css">body,td{font-size:10pt;}table{border: 1px #000 solid;border-collapse: collapse;}</style>';

  var docprint = window.open("", "_blank", disp_setting);
  docprint.document.open();
  docprint.document.write(
    "<html><head><title>" +
      title +
      '</title><link href="/ecntr/css/css.css" type="text/css" rel="stylesheet" />'
  );
  docprint.document.write(
    '</head><body width="600px" onLoad="self.print();self.close();">'
  );
  docprint.document.write(content_value);
  docprint.document.write("</body></html>");

  docprint.document.close();
}

function common_toprint_wide(title, obj) {
  var disp_setting = "toolbar=no,location=no,directories=no,menubar=no,";
  disp_setting += "scrollbars=no,width=900, height=600";
  var content_value = obj.innerHTML;
  var style =
    '<style type="text/css">body,td{font-size:10pt;}table{border: 1px #000 solid;border-collapse: collapse;}</style>';

  var docprint = window.open("", "_blank", disp_setting);
  docprint.document.open();
  docprint.document.write(
    "<html><head><title>" +
      title +
      '</title><link href="/ecntr/css/css.css" type="text/css" rel="stylesheet" />'
  );
  docprint.document.write(
    '</head><body width="600px" onLoad="self.print();self.close();">'
  );
  docprint.document.write(content_value);
  docprint.document.write("</body></html>");

  docprint.document.close();
}

function URLEncode(s) {
  if (s == null) {
    return s;
  }
  var ret = "";
  for (var i = 0; i < s.length; i++) {
    var n = s.charAt(i);
    if (n == "/") {
      ret += "%2F";
    } else if (n == "+") {
      ret += "%2B";
    } else {
      ret += n;
    }
  }
  return ret;
}

function reCheckCode() {
  //產生交易驗證碼錯誤時,重新產生圖形驗證碼
  document.getElementById("checkCode").value = "";
  document.getElementById("GOTP").src =
    "/ecntr/tx/captcha?d=" + new Date().getTime();
  document.getElementById("checkCode").focus();
}

function reCheckCode1() {
  //產生交易驗證碼錯誤時,重新產生圖形驗證碼
  document.getElementById("checkCode1").value = "";
  document.getElementById("GOTP1").src =
    "/ecntr/tx/captcha?d=" + new Date().getTime();
  document.getElementById("checkCode1").focus();
}

function reCheckCode2() {
  //產生交易驗證碼錯誤時,重新產生圖形驗證碼
  document.getElementById("checkCode2").value = "";
  document.getElementById("GOTP2").src =
    "/ecntr/tx/captcha?d=" + new Date().getTime();
  document.getElementById("checkCode2").focus();
}

function reCheckCode3() {
  //產生交易驗證碼錯誤時,重新產生圖形驗證碼
  document.getElementById("checkCode3").value = "";
  document.getElementById("GOTP3").src =
    "/ecntr/tx/captcha?d=" + new Date().getTime();
  document.getElementById("checkCode3").focus();
}

function GetXmlHttpObject() {
  var xmlHttp = null;
  try {
    xmlHttp = new XMLHttpRequest(); // Firefox, Opera 8.0+, Safari
  } catch (e) {
    // Internet Explorer
    try {
      xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
      xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
  return xmlHttp;
}

function checkGOTP() {
  var xh = GetXmlHttpObject();

  if (xh != null) {
    var url =
      "/ecntr/tx/captcha?method=check1&checkCode=" +
      document.getElementById("checkCode").value;
    xh.open("POST", url, false);
    xh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xh.send();
    if (xh.status == 200) {
      var result = xh.responseText;
      // alert("return:[" + result + "]");
      if (result.length > 0) {
        var r = result.charAt(0);
        if (r == "1") {
          //alert("ok");
        } else {
          alert("圖型驗證碼錯誤，請重新輸入");
          reCheckCode();
          return false;
        }
      }
    }
  }
  return true;
}

function xh_send_sync(surl, sdata) {
  var xh = new GetXmlHttpObject();
  //var data = new FormData();
  //data.append('u_Mobile', sdata);
  var rs;
  xh.open("POST", surl, false);
  xh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xh.send(sdata);
  if (xh.status == 200) {
    //alert("sdata:"+sdata);
    rs = xh.responseText;
    //alert(re);
  } else rs = "X005 無法發送交易";

  xh = null;
  return rs;
}

function xh_send_sync_filldoc_mob(surl, sdata) {
  var xh = GetXmlHttpObject();
  var rs;
  try {
    xh.open("POST", surl, false);
    xh.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xh.send(sdata);
    if (xh.status == 200) rs = xh.responseText;
    else rs = "X005 無法發送交易";
    xh = null;
  } catch (err) {
    rs = "E001 網路異常";
  }
  return rs;
}

function otp_verify(code) {
  var surl = "/ecntr/tx/SMSOTP?method=check1&otpcode=" + code;
  var ret = xh_send_sync(surl, null);
  var ec = ret.substring(0, 4);
  if (ec.substring(0, 1) == "X") {
    alert("系統閒置逾時，將為您導向登入網頁 ");
    window.top.location.href = "/ecntr/index.jsp";
  }
  if (ec == "0001") {
    if (window.confirm(ret.substring(5))) return 1;
    else return 0;
  } else return 2;
}

function otp_gen(account) {
  var surl = "/ecntr/tx/SMSOTP";
  var ret = xh_send_sync(surl, null);
  var ec = ret.substring(0, 4);
  if (ec.substring(0, 1) == "X") {
    alert("系統閒置逾時，將為您導向登入網頁 ");
    window.top.location.href = "/ecntr/index.jsp";
  }
  if (ec == "0000") {
    return "0";
  } else return ret.substring(5);
}

function otp_genOpenAccount() {
  var surl = "/ecntr/tx/SMSOTP?method=unspecifiedOpenAccount";
  var ret = xh_send_sync(surl, null);
  var ec = ret.substring(0, 4);
  if (ec.substring(0, 1) == "X") {
    alert("系統閒置逾時，將為您導向登入網頁 ");
    window.top.location.href = "/ecntr/index.jsp";
  }
  if (ec == "0000") {
    return "0";
  } else return ret.substring(5);
}

function numbersOnly(evt, el) {
  evt = evt ? evt : event;
  var charCode = evt.charCode
    ? evt.charCode
    : evt.keyCode
    ? evt.keyCode
    : evt.which
    ? evt.which
    : 0;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("請勿輸入數字以外之文字!");
    return false;
  }
  return true;
}

function maskID(maskObj, valueObj) {
  var IDlength = maskObj.value.length;
  var custid = maskObj.value;
  var strStar = "*****";

  if (IDlength == 8) {
    //企業戶統編
    if (confirm("企業客戶請使用企業網路銀行登入，謝謝！")) {
      window.open("https://b2bank.yuantabank.com.tw/B2C/", "_parent", "");
    }
    maskObj.value = "";
    maskObj.focus();
    return;
  }

  if (maskObj.value.isIdentity() || maskObj.value.isForeignId()) {
    if (IDlength == 10 || IDlength == 11) {
      valueObj.value = maskObj.value.trim();
      maskObj.value =
        custid.substr(0, 4) + strStar + custid.substr(9, custid.length);
    } else {
      valueObj.value = maskObj.value.trim();
    }
  }
}

function cleanID(maskObj, valueObj) {
  maskObj.value = "";
  valueObj.value = "";
}

var tinfo = new Array();
tinfo[0] = new Array(
  "台北市",
  "100",
  "大安分行",
  "1043",
  "台北市中正區新生南路1段148號之1",
  "service"
);
tinfo[1] = new Array(
  "台北市",
  "100",
  "館前分行",
  "1010",
  "台北市中正區重慶南路1段15號",
  "service"
);
tinfo[2] = new Array(
  "台北市",
  "100",
  "西門分行",
  "1308",
  "台北市中正區寶慶路69號",
  "service"
);
tinfo[3] = new Array(
  "台北市",
  "100",
  "城中分行",
  "0415",
  "台北市中正區衡陽路42號",
  "service"
);
tinfo[4] = new Array(
  "台北市",
  "103",
  "承德分行",
  "0976",
  "台北市大同區承德路3段210號",
  "service"
);
tinfo[5] = new Array(
  "台北市",
  "103",
  "大同分行",
  "1021",
  "台北市大同區南京西路66號",
  "service"
);
tinfo[6] = new Array(
  "台北市",
  "103",
  "延平分行",
  "1227",
  "台北市大同區延平北路2段57號",
  "service"
);
tinfo[7] = new Array(
  "台北市",
  "104",
  "中山北路分行",
  "0895",
  "台北市中山區中山北路二段131號",
  "service"
);
tinfo[8] = new Array(
  "台北市",
  "104",
  "南京東路分行",
  "0219",
  "台北市中山區南京東路三段221號",
  "service"
);
tinfo[9] = new Array(
  "台北市",
  "104",
  "松江分行",
  "0840",
  "台北市中山區松江路109號",
  "service"
);
tinfo[10] = new Array(
  "台北市",
  "105",
  "民生分行",
  "0909",
  "台北市松山區民生東路四段52-1號",
  "service"
);
tinfo[11] = new Array(
  "台北市",
  "105",
  "營業部",
  "0998",
  "台北市松山區敦化南路1段66號",
  "service"
);
tinfo[12] = new Array(
  "台北市",
  "106",
  "和平分行",
  "1294",
  "台北市大安區和平東路一段212號",
  "service"
);
tinfo[13] = new Array(
  "台北市",
  "106",
  "台北分行",
  "0035",
  "台北市大安區敦化南路二段56號",
  "service"
);
tinfo[14] = new Array(
  "台北市",
  "106",
  "古亭分行",
  "0367",
  "台北市大安區羅斯福路三段37號",
  "service"
);
tinfo[15] = new Array(
  "台北市",
  "106",
  "公館分行",
  "1272",
  "台北市大安區羅斯福路3段275號",
  "service"
);
tinfo[16] = new Array(
  "台北市",
  "106",
  "光復分行",
  "1320",
  "台北市大安區忠孝東路4段300號3樓之1",
  "service"
);
tinfo[17] = new Array(
  "台北市",
  "106",
  "信義分行",
  "0884",
  "台北市大安區信義路4段236之1號",
  "service"
);
tinfo[18] = new Array(
  "台北市",
  "110",
  "忠孝分行",
  "0932",
  "台北市信義區忠孝東路五段400號",
  "service"
);
tinfo[19] = new Array(
  "台北市",
  "110",
  "松山分行",
  "1032",
  "台北市信義區忠孝東路5段675號",
  "service"
);
tinfo[20] = new Array(
  "台北市",
  "111",
  "士林分行",
  "0334",
  "台北市士林區中正路314號",
  "service"
);
tinfo[21] = new Array(
  "台北市",
  "111",
  "天母分行",
  "0862",
  "台北市士林區天母西路14號",
  "service"
);
tinfo[22] = new Array(
  "台北市",
  "112",
  "北投分行",
  "1216",
  "台北市北投區北投路2段35號",
  "service"
);
tinfo[23] = new Array(
  "台北市",
  "114",
  "文德分行",
  "1238",
  "台北市內湖區文德路68號",
  "service"
);
tinfo[24] = new Array(
  "台北市",
  "114",
  "內湖分行",
  "0585",
  "台北市內湖區港墘路189號",
  "service"
);
tinfo[25] = new Array(
  "台北市",
  "115",
  "南港分行",
  "1331",
  "台北市南港區園區街28號",
  "service"
);
tinfo[26] = new Array(
  "台北市",
  "116",
  "景美分行",
  "0150",
  "台北市文山區景文街3號",
  "service"
);
tinfo[27] = new Array(
  "新北市",
  "220",
  "板橋分行",
  "0482",
  "新北市板橋區中山路一段69號",
  "service"
);
tinfo[28] = new Array(
  "新北市",
  "220",
  "埔墘分行",
  "1261",
  "新北市板橋區中山路二段125號",
  "service"
);
tinfo[29] = new Array(
  "新北市",
  "231",
  "新店分行",
  "0910",
  "新北市新店區北新路二段252號",
  "service"
);
tinfo[30] = new Array(
  "新北市",
  "231",
  "新店中正分行",
  "1283",
  "新北市新店區中正路225號",
  "service"
);
tinfo[31] = new Array(
  "新北市",
  "234",
  "永和分行",
  "0220",
  "新北市永和區中正路657號",
  "service"
);
tinfo[32] = new Array(
  "新北市",
  "235",
  "中和分行",
  "0839",
  "新北市中和區泰和街1、3號",
  "service"
);
tinfo[33] = new Array(
  "新北市",
  "235",
  "雙和分行",
  "1205",
  "新北市中和區中和路232號2樓之1",
  "service"
);
tinfo[34] = new Array(
  "新北市",
  "236",
  "土城分行",
  "1009",
  "新北市土城區中央路1段255號",
  "service"
);
tinfo[35] = new Array(
  "新北市",
  "238",
  "樹林分行",
  "1319",
  "新北市樹林區中山路一段99號",
  "service"
);
tinfo[36] = new Array(
  "新北市",
  "241",
  "北三重分行",
  "1076",
  "新北市三重區正義北路195號",
  "service"
);
tinfo[37] = new Array(
  "新北市",
  "241",
  "三重分行",
  "0080",
  "新北市三重區重新路三段111號",
  "service"
);
tinfo[38] = new Array(
  "新北市",
  "242",
  "上新莊分行",
  "1087",
  "新北市新莊區思源路173號",
  "service"
);
tinfo[39] = new Array(
  "新北市",
  "242",
  "新莊分行",
  "0378",
  "新北市新莊區新泰路246號",
  "service"
);
tinfo[40] = new Array(
  "新北市",
  "247",
  "蘆洲分行",
  "0873",
  "新北市蘆洲區中山一路10號",
  "service"
);
tinfo[41] = new Array(
  "宜蘭縣",
  "265",
  "羅東分行",
  "0596",
  "宜蘭縣羅東鎮中正北路38號",
  "service"
);
tinfo[42] = new Array(
  "新竹市",
  "300",
  "竹科分行",
  "0851",
  "新竹市東區光復路一段267號",
  "service"
);
tinfo[43] = new Array(
  "新竹市",
  "300",
  "大統分行",
  "1191",
  "新竹市東區林森路196號",
  "service"
);
tinfo[44] = new Array(
  "新竹市",
  "300",
  "新竹分行",
  "0161",
  "新竹市東區民生路276號",
  "service"
);
tinfo[45] = new Array(
  "新竹縣",
  "302",
  "竹北分行",
  "0633",
  "新竹縣竹北市光明六路85號",
  "service"
);
tinfo[46] = new Array(
  "桃園市",
  "320",
  "中壢分行",
  "0389",
  "桃園市中壢區中央東路7號",
  "service"
);
tinfo[47] = new Array(
  "桃園市",
  "324",
  "平鎮分行",
  "0091",
  "桃園市平鎮區環南路18號",
  "service"
);
tinfo[48] = new Array(
  "桃園市",
  "330",
  "桃園分行",
  "0493",
  "桃園市桃園區莊敬路1段375號",
  "service"
);
tinfo[49] = new Array(
  "桃園市",
  "330",
  "桃興分行",
  "0943",
  "桃園市桃園區復興路51-2號",
  "service"
);
tinfo[50] = new Array(
  "桃園市",
  "333",
  "林口分行",
  "0622",
  "桃園市龜山區文化三路118號",
  "service"
);
tinfo[51] = new Array(
  "桃園市",
  "338",
  "南崁分行",
  "0345",
  "桃園市蘆竹區中正路309號",
  "service"
);
tinfo[52] = new Array(
  "苗栗縣",
  "360",
  "苗栗分行",
  "0264",
  "苗栗縣苗栗市中正路460號",
  "service"
);
tinfo[53] = new Array(
  "台中市",
  "400",
  "台中分行",
  "0013",
  "台中市中區自由路2段8號",
  "service"
);
tinfo[54] = new Array(
  "台中市",
  "402",
  "復興分行",
  "0231",
  "台中市南區復興路一段269號",
  "service"
);
tinfo[55] = new Array(
  "台中市",
  "406",
  "崇德分行",
  "0275",
  "台中市北屯區崇德路2段46號",
  "service"
);
tinfo[56] = new Array(
  "台中市",
  "407",
  "中港分行",
  "0954",
  "台中市西屯區臺灣大道4段900號",
  "service"
);
tinfo[57] = new Array(
  "台中市",
  "407",
  "文心分行",
  "0024",
  "台中市西屯區文心路三段337號",
  "service"
);
tinfo[58] = new Array(
  "台中市",
  "411",
  "太平分行",
  "0987",
  "台中市太平區中興路53號",
  "service"
);
tinfo[59] = new Array(
  "台中市",
  "412",
  "大里分行",
  "0242",
  "台中市大里區塗城路724號",
  "service"
);
tinfo[60] = new Array(
  "台中市",
  "420",
  "豐原分行",
  "0057",
  "台中市豐原區圓環西路23號",
  "service"
);
tinfo[61] = new Array(
  "台中市",
  "433",
  "沙鹿分行",
  "0046",
  "台中市沙鹿區中山路535號",
  "service"
);
tinfo[62] = new Array(
  "台中市",
  "437",
  "大甲分行",
  "0301",
  "台中市大甲區中山路一段833號",
  "service"
);
tinfo[63] = new Array(
  "彰化縣",
  "500",
  "彰化分行",
  "0068",
  "彰化縣彰化市中山路二段898號",
  "service"
);
tinfo[64] = new Array(
  "彰化縣",
  "505",
  "鹿港分行",
  "0172",
  "彰化縣鹿港鎮中山路321號",
  "service"
);
tinfo[65] = new Array(
  "彰化縣",
  "510",
  "員林分行",
  "0079",
  "彰化縣員林市大同路二段283號",
  "service"
);
tinfo[66] = new Array(
  "彰化縣",
  "521",
  "北斗分行",
  "0286",
  "彰化縣北斗鎮光復路166號",
  "service"
);
tinfo[67] = new Array(
  "南投縣",
  "542",
  "草屯分行",
  "0105",
  "南投縣草屯鎮中興路88號",
  "service"
);
tinfo[68] = new Array(
  "嘉義市",
  "601",
  "嘉義分行",
  "0194",
  "嘉義市西區中興路185號",
  "service"
);
tinfo[69] = new Array(
  "雲林縣",
  "630",
  "斗南分行",
  "0448",
  "雲林縣斗南鎮中山路67號",
  "service"
);
tinfo[70] = new Array(
  "雲林縣",
  "632",
  "虎尾分行",
  "0312",
  "雲林縣虎尾鎮和平路1號",
  "service"
);
tinfo[71] = new Array(
  "雲林縣",
  "640",
  "斗信分行",
  "0183",
  "雲林縣斗六市文化路29號",
  "service"
);
tinfo[72] = new Array(
  "台南市",
  "700",
  "府城分行",
  "0688",
  "台南市中西區民生路一段165號",
  "service"
);
tinfo[73] = new Array(
  "台南市",
  "700",
  "台南分行",
  "0611",
  "台南市中西區永華路一段348號",
  "service"
);
tinfo[74] = new Array(
  "台南市",
  "701",
  "府東分行",
  "0699",
  "台南市東區東門路二段348號",
  "service"
);
tinfo[75] = new Array(
  "台南市",
  "704",
  "開元分行",
  "0806",
  "台南市北區勝利路461號",
  "service"
);
tinfo[76] = new Array(
  "台南市",
  "709",
  "安和分行",
  "0828",
  "台南市安南區安和路一段226號",
  "service"
);
tinfo[77] = new Array(
  "台南市",
  "710",
  "永康分行",
  "0116",
  "台南市永康區小東路511號",
  "service"
);
tinfo[78] = new Array(
  "台南市",
  "722",
  "佳里分行",
  "0297",
  "台南市佳里區文化路278號",
  "service"
);
tinfo[79] = new Array(
  "高雄市",
  "801",
  "高雄分行",
  "1102",
  "高雄市前金區中正四路143號",
  "service"
);
tinfo[80] = new Array(
  "高雄市",
  "807",
  "三民分行",
  "0404",
  "高雄市三民區建工路715號",
  "service"
);
tinfo[81] = new Array(
  "高雄市",
  "813",
  "左營分行",
  "1250",
  "高雄市左營區左營大路158號",
  "service"
);
tinfo[82] = new Array(
  "高雄市",
  "813",
  "博愛分行",
  "0253",
  "高雄市左營區明誠二路491號",
  "service"
);
tinfo[83] = new Array(
  "高雄市",
  "830",
  "鳳山分行",
  "0518",
  "高雄市鳳山區五甲二路280號",
  "service"
);
tinfo[84] = new Array(
  "屏東縣",
  "900",
  "屏東分行",
  "0426",
  "屏東縣屏東市廣東路690號",
  "service"
);
tinfo[85] = new Array(
  "台東縣",
  "950",
  "東信分行",
  "0529",
  "台東縣台東市中華路一段427號",
  "service"
);
tinfo[86] = new Array(
  "花蓮縣",
  "970",
  "花蓮分行",
  "0965",
  "花蓮縣花蓮市國聯一路167號",
  "service"
);

function brCityChange() {
  var selectTemp = document.getElementById("br_city");
  var selectText = selectTemp.options[selectTemp.selectedIndex].text;
  var selectValue = selectTemp.options[selectTemp.selectedIndex].value;

  var bankname = document.getElementById("br_no");
  bankname.options.length = 0;
  var option = document.createElement("option");
  option.text = "請選擇分行";
  option.value = "0";
  bankname.add(option);

  if (selectValue != "0") {
    for (var i = 0; i < tinfo.length; i++) {
      if (selectText == tinfo[i][0]) {
        var optionBank = document.createElement("option");
        optionBank.text = tinfo[i][2] + "(" + tinfo[i][4] + ")";
        optionBank.value = tinfo[i][3];
        bankname.add(optionBank);
      }
    }
  }
}

var idCountyID = new Array();
var idCountyName = new Array();
idCountyID[0] = "09007000";
idCountyName[0] = "連江縣";
idCountyID[1] = "09020000";
idCountyName[1] = "金門縣";
idCountyID[2] = "10001000";
idCountyName[2] = "台北縣";
idCountyID[3] = "10002000";
idCountyName[3] = "宜蘭縣";
idCountyID[4] = "10003000";
idCountyName[4] = "桃園縣";
idCountyID[5] = "10004000";
idCountyName[5] = "新竹縣";
idCountyID[6] = "10005000";
idCountyName[6] = "苗栗縣";
idCountyID[7] = "10006000";
idCountyName[7] = "台中縣";
idCountyID[8] = "10007000";
idCountyName[8] = "彰化縣";
idCountyID[9] = "10008000";
idCountyName[9] = "南投縣";
idCountyID[10] = "10009000";
idCountyName[10] = "雲林縣";
idCountyID[11] = "10010000";
idCountyName[11] = "嘉義縣";
idCountyID[12] = "10011000";
idCountyName[12] = "台南縣";
idCountyID[13] = "10012000";
idCountyName[13] = "高雄縣";
idCountyID[14] = "10013000";
idCountyName[14] = "屏東縣";
idCountyID[15] = "10014000";
idCountyName[15] = "台東縣";
idCountyID[16] = "10015000";
idCountyName[16] = "花蓮縣";
idCountyID[17] = "10016000";
idCountyName[17] = "澎湖縣";
idCountyID[18] = "10017000";
idCountyName[18] = "基隆市";
idCountyID[19] = "10018000";
idCountyName[19] = "新竹市";
idCountyID[20] = "10020000";
idCountyName[20] = "嘉義市";
idCountyID[21] = "63000000";
idCountyName[21] = "台北市";
idCountyID[22] = "64000000";
idCountyName[22] = "高雄市";
idCountyID[23] = "65000000";
idCountyName[23] = "新北市";
idCountyID[24] = "66000000";
idCountyName[24] = "台中市";
idCountyID[25] = "67000000";
idCountyName[25] = "台南市";
idCountyID[26] = "68000000";
idCountyName[26] = "桃園市";

/*
 *  #去識別化#個資遮蔽
 *
 *  參數1:物件名稱(idMask)
 *  參數2:從哪裡開始遮(起始為0)
 *  參數3:要遮蔽的長度
 *  參數4:要用什麼符號遮
 *
 *  會將idMask遮蔽前的值放到id，遮蔽idMask的值
 *
 *  example:
 *
 *    輸入=A123456789
 *    identificationMask(this,2,3,'*')=A1***56789
 *    identificationMask(this,4,5,'*')=A123*****9
 *
 *    輸入=王小明
 *    identificationMask(this,1,1,'○')=王○明
 */

function identificationMask(orgObject, index, length, replaceStr) {
  //若隱碼後的長度超過原輸入長度
  if (index + length > orgObject.value.length)
    length = orgObject.value.length - index;
  log.debug("orgObject.value=[" + orgObject.value + "]");
  log.debug("orgObject.length=[" + orgObject.value.length + "]");
  log.debug("index=[" + index + "]");
  log.debug("length=[" + length + "]");
  log.debug("replaceStr=[" + replaceStr + "]");
  //不可使用repeat(),IE 12才支援
  var sTmp = replaceStr;
  for (var i = 0, replaceStr = ""; i < length; i++) {
    replaceStr = replaceStr + sTmp;
  }
  log.debug("replaceStr=[" + replaceStr + "]");
  //儲存輸入值後進行遮蔽
  log.debug("orgObject.value=[" + orgObject.value + "]");
  document.getElementById(
    orgObject.name.substring(0, orgObject.name.length - 4)
  ).value = orgObject.value;
  log.debug(
    orgObject.name.substring(0, orgObject.name.length - 4) +
      "=[" +
      document.getElementById(
        orgObject.name.substring(0, orgObject.name.length - 4)
      ).value +
      "]"
  );
  orgObject.value = orgObject.value.replace(
    orgObject.value.substr(index, length),
    replaceStr
  );
  log.debug(
    orgObject.name + "=[" + document.getElementById(orgObject.name).value + "]"
  );
}

//將五都改制前地址(縣)轉為新地址(市)
function covertOldCityName(addr) {
  if (addr.length >= 3) {
    var addr3 = addr.substring(0, 3);

    if (addr3 == "臺北縣" || addr3 == "台北縣") {
      addr3 = "新北市";
    } else if (addr3 == "高雄縣") {
      addr3 = "高雄市";
    } else if (addr3 == "臺南縣" || addr3 == "台南縣") {
      addr3 = "臺南市";
    } else if (addr3 == "桃園縣") {
      addr3 = "桃園市";
    } else if (addr3 == "臺中縣" || addr3 == "台中縣") {
      addr3 = "臺中市";
    } else if (addr3 == "") {
      addr3 = "新北市";
    } else if (addr3 == "") {
    }
    return addr3 + addr.substring(3);
  } else {
    return addr;
  }
}
function checkTextInput(textId, titleText, len, type) {
  var checkFlag = false;
  var value = document.getElementById(textId).value;
  var pattern = null;
  var patternalert = null;
  switch (type) {
    case 1:
      pattern = new RegExp("^[0-9]+$");
      patternalert = titleText + "不可輸入非數字";
      break;
    case 2:
      pattern = new RegExp("^[a-zA-Z0-9]+$");
      patternalert = titleText + "只限輸入英文、數字";
      break;
    case 3:
      pattern = new RegExp("^[\u4e00-\u9fa5_a-zA-Z0-9\u0020\u3000]+$");
      patternalert = titleText + "只限輸入中文、英文、數字。";
      break;
    default:
      pattern = new RegExp("^[0-9]+$");
      patternalert = titleText + "不可輸入非數字";
      break;
  }
  if (value != "" && !pattern.test(value)) {
    alert(patternalert);
    return checkFlag;
  }

  if (len) {
    if (value.length > len) {
      alert(titleText + "長度不可超過" + len + "位");
      return checkFlag;
    }
  }
  checkFlag = true;
  return checkFlag;
}
