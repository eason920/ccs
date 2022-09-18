<template>
  <section class="main">
    <!-- 麵包屑-->
    <ul class="breadcrumb">
      <li><a href="/ecntr/">其他服務</a></li>
      <li>推薦專區</li>
    </ul>
    <div class="in" @mouseover="fnHidePcNav">
      <h2><span>推薦專區</span></h2>
      <!-- CONTENT START -->
      <h3>推薦項目</h3>
      <div class="btnSet btnSet-1">
        <input
          value="信用卡"
          :class="{ on: sShareType === 'CRD' }"
          type="button"
          @click="fnChangeCheckType('CRD')"
        />
        <input
          value="信用貸款"
          :class="{ on: sShareType === 'CLE', disabled: bDefaultLockCRD }"
          type="button"
          @click="fnChangeCheckType('CLE')"
          :disabled="bDefaultLockCRD"
        />
        <input
          value="汽車貸款"
          :class="{ on: sShareType === 'CRN', disabled: bDefaultLockCRD }"
          type="button"
          @click="fnChangeCheckType('CRN')"
          :disabled="bDefaultLockCRD"
        />
      </div>
      <h3>推薦人員</h3>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr v-if="sShareType === 'CRD'">
          <th width="160">推薦人員</th>
          <td class="is-is-showCustid-outer">
            <select
              class="color_blue"
              v-model="sWho"
              :disabled="sShareType === 'CLE' || sShareType === 'CRN'"
            >
              <option disabled value="">請選擇</option>
              <option value="a">好友推薦-身分證字號</option>
              <option value="b">好友推薦-鑽金代碼</option>
              <option value="c">員工推薦</option>
            </select>
            <input
              v-model="sCustID"
              type="text"
              placeholder="請輸入您的身分證字號"
              maxlength="10"
              v-if="sWho === 'a'"
              class="idinput"
              @keyup="fnUpperCase(sCustID)"
              @blur="fnIdBlur(sCustID)"
              @click="fnIdClear"
            />
            <div
              class="is-showCustid"
              @click="fnIdClear"
              v-if="sWho === 'a' && sCustIDShow !== ''"
            >
              {{ sCustIDShow }}
            </div>
            <input
              v-model="sDgcode"
              type="text"
              placeholder="請輸入鑽金代碼"
              class="is-sDgcode"
              maxlength="6"
              v-if="sWho === 'b'"
              @blur="fnCheckDgcode"
            />
            <input
              v-model="sEmpID"
              type="text"
              placeholder="請輸入您的員編"
              maxlength="10"
              class="is-sEmpID"
              v-if="sWho === 'c'"
              @blur="fnCheckEmpID"
            />
          </td>
        </tr>
        <tr v-if="sWho === 'c' && sShareType === 'CRD'">
          <th width="160">推薦單位</th>
          <td>
            <select
              class="color_blue"
              v-model="sCompany"
              :disabled="sShareType !== 'CRD'"
            >
              <option disabled value="">請選擇單位</option>
              <option value="1">元大銀行</option>
              <option value="2">元大證券</option>
            </select>
          </td>
        </tr>
        <tr v-if="sShareType === 'CRD'">
          <th width="160">推薦信用卡</th>
          <td>
            <select
              class="color_blue"
              v-model="sCardID"
              :disabled="bDefaultLockCRD"
            >
              <option disabled value="">請選擇信用卡</option>
              <option
                v-for="item in oCardID.data"
                :key="item.CardID"
                :value="item.CardID"
              >
                {{ item.CardName }}
              </option>
            </select>
          </td>
        </tr>
        <tr v-if="sShareType === 'CRD'">
          <td colspan="2" class="checkOuter">
            <input type="checkbox" id="a05" name="a05" />
            <label for="a05" class="display-inline">
              <span class="is-span"></span>
            </label>
            <div
              class="check-privacy display-inline"
              @click="fnCheckPrivacy('a05')"
            ></div>
            <p class="display-inline">
              我已閱讀並同意
              <a @click="fnOpenPrivacy">隱私權保護聲明</a>。
            </p>
            <div class="checkMasker" @click="fnCheckboxChecker"></div>
          </td>
        </tr>

        <!-- 信貸、車貸 -->
        <tr v-if="sShareType !== 'CRD'">
          <th width="160">推薦單位</th>
          <td>元大銀行</td>
        </tr>
        <tr v-if="sShareType !== 'CRD'">
          <th width="160">推薦人員</th>
          <td>
            <input
              v-model="sEmpID2"
              type="text"
              placeholder="請輸入您的員編"
              maxlength="10"
              class="is-sEmpID not-CRD"
              @blur="fnCheckEmpID2"
            />
          </td>
        </tr>
      </table>
      <div class="btnSet">
        <input type="button" value="產生推薦網址" @click="fnSubmit" />
      </div>
      <div class="dotOuter" v-if="bShowShare">
        <span
          >..............................................................................................................................................................................................................................................................</span
        >
      </div>
      <div class="shareBox" v-if="bShowShare">
        <div class="qrBox">
          <div class="chareTitle">專屬推薦QR Code</div>
          <div id="canvasQRCode"></div>
        </div>
        <div class="btnBox">
          <input type="button" value="複製連結" @click="copyUrl" />
          <input type="button" value="下載QR Code" @click="fnDownloadQRCode" />
          <input type="button" value="Line分享" @click="getLineLink" />
          <input type="button" value="FB分享" @click="getFbLink" />
          <input type="button" value="Email分享" @click="getMailTo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "creditCardShare",
};
</script>

<script setup>
const sComponentName = "creditCardShare";

// VUE
import { ref, reactive, onMounted, watch } from "vue";

// TOOLS v
import {
  fnHidePcNav,
  fnCheckPrivacy,
} from "@/common/methodCommon/publicMethod";

// API
import {
  apiPostInit,
  apiPostGenLink,
  // some,
} from "@/api/axios/other/creditCardShare.js";
import qs from "qs";

// VUEX
import { useStore } from "vuex";
const store = useStore();

// METHOD COMMON
import {
  fnToDBC,
  fnCheckNum,
  fnIdMaske,
} from "@/common/methodCommon/publicMethod";

// CRD:信用卡; CLE:信貸; CRN:汽貸;
const sShareType = ref("CRD");

// a 推薦人員 好友推薦-身分證字號/ b-鑽金代碼/ c員工推薦
const sWho = ref("c");

const sCustID = ref("");
const sDgcode = ref("");
const sEmpID = ref("");
const sEmpID2 = ref("");

watch(sShareType, () => {
  if (!bDefaultLockCRD.value) {
    sCardID.value = "";
  }
  sCompany.value = "1";
  sWho.value = "c";
  sCustID.value = "";
  sDgcode.value = "";
  sEmpID.value = "";
  sEmpID2.value = "";
  bShowShare.value = false;
});

watch(sWho, (val) => {
  sCustID.value = "";
  sCustIDShow.value = "";
  sDgcode.value = "";
  sEmpID.value = "";
  sCompany.value = val === "c" ? "1" : "";
  bShowShare.value = false;
});

// 1.銀行; 2:證券
const sCompany = ref("1");

// 是否有預設 CardId
const bDefaultLockCRD = ref(false);
const sCardID = ref("");
const oCardID = reactive({ data: {} });

// 取得 sURL 後
// 1.使以上三輸入 disabled
// 2.顯示分享五鈕
const bShowShare = ref(false);

let sURL = "";

onMounted(() => {
  // 信用卡種、號給值
  console.log(
    "%cdoapi init",
    "color:greenyellow;font-size:20px;font-weight:bold"
  );
  apiPostInit()
    .then((res) => {
      console.log("init res >>>", res.data);
      if (res.data.status === "200") {
        console.log("%cis 200", "color:red");
        oCardID.data = res.data.rsData.Cards;
        //
        let id = res.data.rsData.CardID;
        console.log(">> def api id is ", id);
        // id = "2752af9d700000004912"; // 元大證券icash聯名卡
        console.log(">> after demo id is ", id);
        console.log(">> have default id ?", id !== undefined);
        if (id !== undefined) {
          console.log("into if");
          sCardID.value = id;
          bDefaultLockCRD.value = true;
        }
      } else {
        fnNot200(res);
      }
    })
    .catch((err) => {
      console.log("init error err vvv");
      fnCatch(sComponentName + "/init", err);
    });
});

const fnChangeCheckType = (val) => {
  sShareType.value = val;
};

const sCustIDShow = ref("");
const fnIdBlur = (id) => {
  if (id !== "") {
    sCustIDShow.value = fnIdMaske(id);
  }
};

const fnCheckDgcode = () => {
  sDgcode.value = fnToDBC(sDgcode.value);
  const value = sDgcode.value;
  if (value.trim() !== "") {
    const check = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value);
    if (!check) {
      sDgcode.value = "";
      alert("鑽金代碼勿輸入特殊字元");
    }
  }
};

const fnCheckEmpID = () => {
  sEmpID.value = fnToDBC(sEmpID.value);
  const value = sEmpID.value;
  if (value.trim() !== "") {
    const check = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value);
    if (!check) {
      sEmpID.value = "";
      alert("推薦人員編勿輸入特殊字元");
    }
  }
};

const fnCheckEmpID2 = () => {
  sEmpID2.value = fnToDBC(sEmpID2.value);
  const value = sEmpID2.value;
  if (value.trim() !== "") {
    const check = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value);
    if (!check) {
      sEmpID2.value = "";
      alert("推薦人員編勿輸入特殊字元");
    }
  }
};

const fnUpperCase = () => {
  sCustID.value = fnToDBC(sCustID.value.toUpperCase());
};

const fnIdClear = () => {
  sCustID.value = "";
  sCustIDShow.value = "";
  $(".idinput").focus();
};

const fnCreateCRCode = () => {
  $("body").find("#canvasQRCode").html("").qrcode({
    text: sURL,
    width: 600,
    height: 600,
  });
  const width = $(window).width() >= 768 ? "45%" : "60%";
  $("#canvasQRCode canvas").css({ width }).attr("id", "myCANVAS");
};

const fnCheckboxChecker = () => {
  if ($("#a05").attr("checkFlag") !== "1") {
    alert("請審閱隱私權保護聲明");
  } else {
    $(".checkMasker").remove();
  }
};

const fnCheckData = () => {
  if (sShareType.value === "CRD") {
    // 信用卡 CRD
    switch (sWho.value) {
      case "a":
        if (!sCustID.value) {
          alert("請輸入身分證字號");
          sCustID.value = "";
          sCustIDShow.value = "";
          $(".idinput").focus();
          return false;
        } else if (
          !sCustID.value.isIdentity() &&
          !sCustID.value.isForeignId()
        ) {
          alert("請輸入正確身分證字號");
          sCustID.value = "";
          sCustIDShow.value = "";
          $(".idinput").focus();
          return false;
        }
        break;
      case "b":
        if (!sDgcode.value) {
          alert("請輸入您的鑽金代碼");
          $(".is-sDgcode").focus();
          return false;
        } else if (!sDgcode.value.match(/^[0-9a-zA-Z]*$/)) {
          console.log("0-9a-zA-Z");
          alert("您輸入的鑽金代碼有誤");
          sDgcode.value = "";
          $(".is-sDgcode").focus();
          return false;
        } else if (String(sDgcode.value).length < 6) {
          console.log("String(sDgcode.value).length < 6");
          alert("您輸入的鑽金代碼有誤");
          sDgcode.value = "";
          return false;
        }
        break;
      case "c":
        if (!sEmpID.value) {
          alert("請輸入推薦人員編");
          $(".is-sEmpID").focus();
          return false;
        } else if (
          !fnCheckNum(sEmpID.value) ||
          String(sEmpID.value).length > 10
        ) {
          sEmpID.value = "";
          alert("請確認推薦人員編");
          $(".is-sEmpID").focus();
          return false;
        }

        if (!sCompany.value) {
          alert("請選擇推薦人員單位");
          return false;
        }
        break;
      default:
    }

    if (!sCardID.value) {
      alert("請選擇推薦信用卡");
      return false;
    }

    if ($("#a05").attr("checkFlag") !== "1") {
      alert("請勾選已審閱隱私權保護聲明");
      return false;
    } else {
      if (!$("#a05").is(":checked")) {
        alert("請勾選已審閱隱私權保護聲明");
        return false;
      }
    }
  } else {
    // 信貸 or 車貸
    if (!sEmpID2.value) {
      alert("請輸入推薦人員編");
      $(".is-sEmpID").focus();
      return false;
    } else if (
      !fnCheckNum(sEmpID2.value) ||
      String(sEmpID2.value).length > 10
    ) {
      sEmpID2.value = "";
      alert("請確認推薦人員編");
      $(".is-sEmpID").focus();
      return false;
    }

    if (!sCompany.value) {
      alert("請選擇推薦人員單位");
      return false;
    }
  }

  return true;
};

const fnSubmit = () => {
  if (!fnCheckData()) {
    return false;
  }
  console.log(
    "%cdoapi GenLink",
    "color:greenyellow;font-size:20px;font-weight:bold"
  );
  // const data = {
  //   CheckType: "CRD:信用卡; CLE:信貸; CRN:汽貸;",
  //   Company: "1.銀行; 2:證券",
  //   CustID: "推薦人身分證",
  //   Dgcode: "推薦人鑽金代碼",
  //   EmpID: "推薦人員編",
  //   CardID: "推薦信用卡",
  //   Trace: "官網帶入Flag",
  // };
  // "鑽金智富卡","CardID":"45e0a1030f0000064553

  //   genLink success res >>>
  // {rsData: {…}, status: '200'}
  // rsData:
  // URL: "http://10.75.204.205/bankUrl/aINFba"
  // [[Prototype]]: Object
  // status: "200"
  // [[Prototype]]: Object
  const data = {
    CheckType: sShareType.value,
    Company: sCompany.value,
    CustID: sCustID.value,
    Dgcode: sDgcode.value,
    EmpID: sShareType.value === "CRD" ? sEmpID.value : sEmpID2.value,
    CardID: sCardID.value,
  };

  if (sShareType.value === "CRD") {
    data.Agree = true;
  }

  console.log("data is ", data);
  console.log("%cUSE QS.STRINGIFY", "color:red");

  // 取得 URL
  apiPostGenLink(qs.stringify(data))
    .then((res) => {
      console.log("GenLink res >>>", res.data);
      if (res.data.status === "200") {
        console.log("%cGenLink is 200", "color:red");
        console.log("res.data.rsData.URL is", res.data.rsData.URL);
        sURL = res.data.rsData.URL;
        console.log("sURL is res.data.rsData.URL is", sURL);
        bShowShare.value = true;
        setTimeout(() => {
          fnCreateCRCode();
        });
      } else if (res.data.status === "500") {
        alert(res.data.errMsg);
      } else {
        fnNot200(res);
      }
    })
    .catch((err) => {
      console.log("GenLink error err vvv");
      fnCatch(sComponentName + "/GenLink", err);
    });
};

const fnOpenPrivacy = () => {
  window.open("/ecntr/tx/openContract?method=privacy&chk=a05", "_blank");
};

window.Clipboard = (function (window, document, navigator) {
  var textArea, copy;

  function isOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
  }

  function createTextArea(text) {
    textArea = document.createElement("textArea");
    textArea.value = text;
    document.body.appendChild(textArea);
  }

  function selectText() {
    var range, selection;

    if (isOS()) {
      range = document.createRange();
      range.selectNodeContents(textArea);
      selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
  }

  function copyToClipboard() {
    document.execCommand("Copy");
    document.body.removeChild(textArea);
  }

  copy = function (text) {
    createTextArea(text);
    selectText();
    copyToClipboard();
  };

  return {
    copy: copy,
  };
})(window, document, navigator);

function copyUrl() {
  window.Clipboard.copy(sURL);
  alert("推薦連結己複製");
}

const fnDownloadQRCode = () => {
  const link = document.createElement("a");
  link.download = sURL.split("/")[sURL.split("/").length - 1] + ".png";
  link.href = document.getElementById("myCANVAS").toDataURL();
  link.click();
};

function getLineLink() {
  var encoded = encodeURIComponent(sURL);
  var encodbody = encodeURIComponent(
    " 好東西怎麼能不和你分享！跟我一起享有元大信用卡的優惠吧！謹慎理財信用無價，循環利率2.92%~15% "
  );
  window.open("https://lineit.line.me/share/ui?url=" + encoded + encodbody);
}

function getFbLink() {
  var encoded = encodeURIComponent(sURL);
  window.open(
    "https://www.facebook.com/sharer/sharer.php?title=%E5%85%83%E5%A4%A7%E9%8A%80%E8%A1%8Ce%E4%BE%86%E8%BE%A6%E5%8D%A1&u=" +
      encoded
  );
}

function getMailTo() {
  var encoded = encodeURIComponent(sURL);
  var encodbody = encodeURIComponent(
    "好東西怎麼能不和你分享！跟我一起享有元大信用卡的優惠吧！謹慎理財信用無價，循環利率2.92%~15%"
  );
  window.location.href =
    "mailto:?subject=好東西怎麼能不和你分享！跟我一起享有元大信用卡的優惠吧！&body=" +
    encodbody +
    encoded;
}

// LOADING v
import {
  // fnShowElLoading,
  fnHideElLoading,
} from "@/common/methodCommon/publicMethod";

// 共用函式 START --------------
import { useRouter } from "vue-router";
const router = useRouter();
// const fnGoPage = (name) => {
//   router.push({ name });
// };

const fnNot200 = (res, sys) => {
  console.log("fnNot200");
  fnHideElLoading();

  let realRes;
  if (sys === "ajax") {
    console.log("%cis ajax", "color: red");
    realRes = res;
  } else {
    console.log("%cis axios", "color: red");
    realRes = res.data;
  }

  console.log("error type is", typeof realRes);
  const msg =
    typeof res === "string" || realRes.sRtDesc === undefined
      ? "狀態不明請稍後再試"
      : realRes.sRtDesc;

  fnGoErrorPage(msg);
};

const fnCatch = (where, err, sys) => {
  console.log("fnCatch");
  fnHideElLoading();
  const text = "系統錯誤 (" + where + ")";
  if (sys === "ajax") {
    console.log("%cis ajax", "color: red");
    console.log(text, err);
  } else {
    console.log("%cis axios", "color: red");
    console.log(text, err.response);
  }

  fnGoErrorPage("狀態不明請稍後再試");
};

const fnGoErrorPage = (msg) => {
  store.dispatch("publicStore/handSetErrorMessageState", {
    zh_tw: msg,
    en: msg,
  });
  router.push({ name: "errorDefaultPage" });
};
// 共用函式 END --------------
</script>

<style lang="scss" scoped>
// GLOBAL
@media screen and (min-width: 768px) {
  select {
    width: 48%;
    margin-right: 2%;
  }
  input[type="text"] {
    width: 50%;
  }
}

// 3 BUTTON
input[type="button"] {
  &.disabled {
    background: #ebebeb !important;
    color: #999 !important;
    cursor: not-allowed;
  }
  &.on {
    cursor: default;
  }
}

// POINT
.btnSet {
  margin-bottom: 15px;
}
.dotOuter {
  overflow: hidden;
  color: #00a1ff;
  font-size: 16px;
  font-weight: normal;
  user-select: none;
  margin-bottom: 25px;
}

// SHARE BOX
.qrBox {
  text-align: center;
}
.chareTitle {
  color: #0081cc;
  margin-bottom: 10px;
}
@media screen and (min-width: 768px) {
  .shareBox {
    display: flex;
  }

  $w: 45%;
  .qrBox {
    width: $w;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btnBox {
    width: calc(100% - #{$w});
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    input[type="button"] {
      margin: 0;
      width: 48%;
      &:nth-child(1) {
        order: 1;
      }
      &:nth-child(2) {
        order: 3;
      }
      &:nth-child(3) {
        order: 2;
        margin-left: 4%;
      }
      &:nth-child(4) {
        order: 4;
        margin-left: 4%;
      }
      &:nth-child(5) {
        order: 5;
      }
    }
  }
}
@media screen and (max-width: 767px) {
  .qrBox {
    margin-bottom: 60px;
  }
  .chareTitle {
    font-size: 7vw;
    margin-bottom: 20px;
  }
}

.is-is-showCustid-outer {
  position: relative;
}
.is-showCustid {
  position: absolute;
  background: #fff;
  right: 20px;
}

@media screen and (min-width: 768px) {
  .is-showCustid {
    top: 17px;
    left: calc(50% + 5px);
  }
}

@media screen and (max-width: 767px) {
  .is-showCustid {
    bottom: 19px;
    left: 18px;
  }
}

.is-sEmpID.not-CRD {
  width: 100% !important;
}
.btnSet-1 {
  margin-bottom: 30px !important;
}
.display-inline {
  display: inline;
}
.is-span {
  transform: translateY(3px);
}
.checkOuter {
  position: relative;
}
.checkMasker {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 37px;
}
</style>
