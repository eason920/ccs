<template>
  <!--  -->
  <nav>
    <ul>
      <li @mouseover="fnShowMenu('1')"><a>存款</a></li>
      <li @mouseover="fnShowMenu('2')"><a>貸款</a></li>
      <li @mouseover="fnShowMenu('3')"><a>財富管理</a></li>
      <li @mouseover="fnShowMenu('4')"><a>信用卡</a></li>
      <li @mouseover="fnShowMenu('5')"><a>數位金融</a></li>
      <li @mouseover="fnShowMenu('6')"><a>個人資料變更</a></li>
      <li @mouseover="fnShowMenu('7')"><a>其它服務</a></li>
      <li @mouseover="fnShowMenu('8')"><a>振興五倍券</a></li>
    </ul>
  </nav>
  <div class="navSub" style="display: none" id="smallmenu1">
    <div class="in">
      <div class="box">
        <h3><a href="/ecntr/tx/openacct" target="_blank">線上開戶</a></h3>
        <ul style="display: block">
          <li><a href="/ecntr/tx/openacct">線上開戶</a></li>
          <li>
            <a :href="sGlobalURL + '/bank/applyAccount/step1.do'">預約開戶</a>
          </li>
          <li>
            <a href="/ecntr/tx/openacctLegalReptVerify?method=home"
              >未成年驗證身分</a
            >
          </li>
        </ul>
      </div>
      <div class="box">
        <h3 class="trig"><a>約定轉入帳號</a></h3>
        <ul style="display: block">
          <li><a href="/ecntr/tx/desinaccttw?method=init">台幣</a></li>
        </ul>
      </div>
      <div class="box">
        <h3 class="trig"><a>帳戶結清銷戶</a></h3>
        <ul style="display: block">
          <li><a href="/b3/pages/closeacct_introduceNT.jsp">台幣</a></li>
          <li><a href="/b3/pages/closeacct_introduce.jsp">外幣</a></li>
        </ul>
      </div>
      <div>
        <h3 class="trig">
          <a href="/ecntr/tx/iccardAppointSetting?p=login"
            >晶片金融卡非約定轉帳設定</a
          >
        </h3>
      </div>
      <div>
        <h3 class="trig">
          <a href="/ecntr/tx/stockAppoint?method=login"
            >證券委託扣款約定及取消</a
          >
        </h3>
      </div>
      <div>
        <h3 class="trig">
          <a href="/ecntr/tx/twdTdProjApply">新臺幣存款專案約定</a>
        </h3>
      </div>
      <div>
        <h3 class="trig">
          <a href="/ecntr/tx/cardActivate">晶片金融卡啟用</a>
        </h3>
      </div>
      <div>
        <h3 class="trig">
          <a href="/ecntr/tx/achFixedDepositApply">ACH轉存款</a>
        </h3>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu2">
    <div class="in">
      <div class="box">
        <h3 class="trig"><a>信用貸款</a></h3>
        <ul style="display: block">
          <li><a href="/ecntr/pages/creditloanapply_entry.jsp">線上申請</a></li>
          <li>
            <a href="/ecntr/pages/creditloanquery_ProgressInquiry.jsp"
              >進度查詢</a
            >
          </li>
          <li>
            <a href="/ecntr/tx/creditloanapply?method=write">申請資料查閱</a>
          </li>
          <li>
            <a
              :href="
                sGlobalURL +
                '/bank/service/customer/additionalDocument/list.do?product_type=4'
              "
              target="_blank"
              >補件</a
            >
          </li>
          <li><a href="/ecntr/tx/PLoanOnlineComfirm">線上對保</a></li>
          <li><a href="/ecntr/tx/PLoanOnlineComfirmQuery">契約書查閱</a></li>
        </ul>
      </div>
      <div class="box">
        <h3 class="trig"><a>房屋貸款</a></h3>
        <ul style="display: block">
          <li>
            <a @click="fnGoPage('houseloanapply')">線上申請</a>
          </li>
          <li>
            <a @click="fnGoPage('houseloanqueryApply')">案件明細查詢</a>
          </li>
          <li>
            <a
              :href="
                sGlobalURL +
                '/bank/service/customer/additionalDocument/list.do?product_type=2'
              "
              target="_blank"
              >補件</a
            >
          </li>
        </ul>
      </div>
      <div class="box">
        <h3 class="trig"><a>汽車貸款</a></h3>
        <ul style="display: block">
          <li><a href="/ecntr/tx/carloanapply">線上申請</a></li>
          <li><a href="/ecntr/tx/carloanquery">案件明細查詢</a></li>
          <li>
            <a
              :href="
                sGlobalURL +
                '/bank/service/customer/additionalDocument/list.do?product_type=3'
              "
              target="_blank"
              >補件</a
            >
          </li>
          <li><a href="/ecntr/tx/CarLoanOnlineComfirm">線上對保</a></li>
          <li><a href="/ecntr/tx/CarLoanOnlineComfirmQuery">契約書查閱</a></li>
        </ul>
      </div>
      <div class="box">
        <h3><a href="/b3/tx/authenticate?func=loanad">基準利率調整通知</a></h3>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/pages/creditloanapply_agree.jsp?TRACE=6&LBL=Y"
            >勞工紓困貸款利息補貼專案</a
          >
        </h3>
      </div>
      <div class="box">
        <h3><a href="/ecntr/tx/deferredLoan?method=login">延緩繳款申請</a></h3>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu3">
    <div class="in">
      <div class="box">
        <h3><a href="/ecntr/tx/KYC?method=login">投資風險評量(KYC)</a></h3>
      </div>
      <div class="box">
        <h3><a href="/ecntr/tx/opentrustacct?method=login">信託開戶</a></h3>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/tx/trustagreepromote?method=login"
            >同意/終止信託業推介</a
          >
        </h3>
      </div>
      <div class="box">
        <h3 class="trig"><a>線上簽署約定書</a></h3>
        <ul style="display: block">
          <li>
            <a href="/ecntr/tx/onlineAgreement?method=login&fundId=FK"
              >富蘭克林美國系列個人資料同意書</a
            >
          </li>
          <li>
            <a href="/ecntr/tx/onlineAgreement?method=login&fundId=BL"
              >貝萊德系列個人資料同意書</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu4">
    <div class="in">
      <div class="box">
        <h3><a href="/ecntr/tx/cdapply" target="_blank">線上申請</a></h3>
      </div>
      <div class="box">
        <h3 class="trig"><a>消費分期</a></h3>
        <ul style="display: block">
          <li><a href="/ecntr/tx/cdinstallapply?method=login">單筆分期</a></li>
          <li>
            <a href="/ecntr/tx/creditbillinstallment?method=login">帳單分期</a>
          </li>
          <li>
            <a href="/b3/tx/authenticate?func=cdinstalldetails">分期明細查詢</a>
          </li>
          <li>
            <a href="/b3/tx/authenticate?func=cdinstallcontract"
              >分期付款同意書</a
            >
          </li>
        </ul>
      </div>
      <div class="box">
        <h3 class="trig"><a>預借現金</a></h3>
        <ul style="display: block">
          <li>
            <a href="/ecntr/tx/creditcardLoanCashApply?method=login"
              >線上申請</a
            >
          </li>
          <li>
            <a href="/ecntr/tx/creditcardLoanCashLetter?method=login"
              >預借現金密碼函</a
            >
          </li>
        </ul>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/tx/creditcardfeeSetting?method=login">自動扣繳設定</a>
        </h3>
      </div>
      <div class="box">
        <h3>
          <a
            :href="
              sGlobalURL +
              '/bank/service/customer/application/list.do?source=1&product_type=6'
            "
            target="_blank"
            >長期循環轉換方案</a
          >
        </h3>
      </div>
      <div class="box">
        <h3>
          <a
            :href="sGlobalURL + '/bank/creditCard/activateCard/list.do'"
            target="_blank"
            >線上開卡</a
          >
        </h3>
      </div>
      <div class="box">
        <h3>
          <a :href="sGlobalURL + '/bank/creditCard/pay/list.do'" target="_blank"
            >繳卡款</a
          >
        </h3>
      </div>
      <div class="box">
        <h3>
          <a
            :href="
              sGlobalURL +
              '/bank/service/customer/additionalDocument/list.do?product_type=1'
            "
            target="_blank"
            >補件</a
          >
        </h3>
      </div>
      <div class="box">
        <h3><a href="/ecntr/tx/deferredLoan?method=login">延緩繳款申請</a></h3>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu5">
    <div class="in">
      <div class="box">
        <h3><a href="/ecntr/tx/applyibquery">線上申請網銀</a></h3>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/tx/estatement?method=login">綜合對帳單申請暨變更</a>
        </h3>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu6">
    <div class="in">
      <div class="box">
        <h3><a href="/ecntr/tx/alterUserInfo?method=login">變更個人資料</a></h3>
      </div>
      <div class="box">
        <h3><a href="/ecntr/tx/alterMail?method=login">變更電子郵件信箱</a></h3>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu7">
    <div class="in">
      <div class="box">
        <h3 class="trig"><a>身心障礙跨提優惠申請</a></h3>
        <ul style="display: block">
          <li><a href="/ecntr/tx/disability">線上申請</a></li>
          <li><a href="/ecntr/tx/disability_query">進度查詢</a></li>
        </ul>
      </div>
      <div class="box">
        <h3>
          <a href="/b3/tx/authenticate?func=crosssalesign">共同行銷約定</a>
        </h3>
      </div>
      <div class="box">
        <h3><a href="/ecntr/tx/onlineCRS?method=entry">CRS線上聲明</a></h3>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/tx/cashoutbound?method=login">海外支付身分驗證</a>
        </h3>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/tx/mobilePhoneLinkAccount?method=login"
            >手機門號收款設定</a
          >
        </h3>
      </div>
      <div class="box">
        <h3>
          <a href="/ecntr/tx/creditCardShare#/other/sh001/010">推薦專區</a>
        </h3>
      </div>
    </div>
  </div>
  <div class="navSub" style="display: none" id="smallmenu8">
    <div class="in">
      <div class="box">
        <h3>
          <a href="/ecntr/tx/stimulusVoucher?method=login">回饋金額查詢</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<script setup>
// plugins v
import {
  ref,
  //reactive
} from "vue";

// VUEX
// import { useStore } from "vuex";
// const store = useStore();

// ---------------------------------
// TOOLS v
import { fnHidePcNav } from "@/common/methodCommon/publicMethod";

const sGlobalURL = ref("https://www.yuantabank.com.tw");

const fnShowMenu = (id) => {
  fnHidePcNav();

  // 點「同一頁」.trig 會被加 .close，使介面壞去，在此刪除之以使介面正常 (from 前輩程式邏輯)
  $(".trig").removeClass("close");

  document.querySelector("#smallmenu" + id).style.display = "block";
};

import { useRouter } from "vue-router";
const router = useRouter();
const fnGoPage = (name) => {
  fnHidePcNav();
  router.push({ name });
};
</script>

<style lang="scss" scoped>
.navSub {
  display: none;
}
.close {
  height: 15px;
}

@media screen and (max-width: 767px) {
  nav,
  .navSub {
    display: none !important;
  }
}

@media screen and (min-width: 1333px) {
  .in {
    width: 1280px !important;
  }
}
</style>
