<template>
  <nav id="menu">
    <ul class="first">
      <li>
        <a>存款</a>
        <ul class="second">
          <li>
            <a>線上開戶</a>
            <ul class="third">
              <li><a href="/ecntr/tx/openacct">線上開戶</a></li>
              <li>
                <a :href="sGlobalURL + '/bank/applyAccount/step1.do'"
                  >預約開戶</a
                >
              </li>
              <li>
                <a href="/ecntr/tx/openacctLegalReptVerify">未成年驗證身分</a>
              </li>
            </ul>
          </li>
          <li id="closeacct2">
            <a href="">帳戶結清銷戶</a>
            <ul class="third">
              <li><a href="/b3/pages/closeacct_introduceNT.jsp">台幣</a></li>
              <li><a href="/b3/pages/closeacct_introduce.jsp">外幣</a></li>
            </ul>
          </li>
          <li><a href="/ecntr/tx/twdTdProjApply">新臺幣存款專案約定</a></li>
          <li><a href="/ecntr/tx/cardActivate">晶片金融卡啟用</a></li>
          <li>
            <a href="/ecntr/tx/achFixedDepositApply">ACH定期定額轉存款約定</a>
          </li>
        </ul>
      </li>
      <li>
        <a>貸款</a>
        <ul class="second">
          <li>
            <a>信用貸款</a>
            <ul class="third">
              <li>
                <a
                  class="checkLine"
                  href="/ecntr/pages/creditloanapply_entry.jsp?openExternalBrowser=1"
                  >線上申請</a
                >
              </li>
              <li>
                <a href="/ecntr/pages/creditloanquery_ProgressInquiry.jsp"
                  >進度查詢</a
                >
              </li>
              <li>
                <a href="/ecntr/tx/creditloanapply?method=write"
                  >申請資料查閱</a
                >
              </li>
              <li>
                <a
                  class="checkLine"
                  :href="
                    sGlobalURL +
                    '/bank/service/customer/additionalDocument/list.do?product_type=4&openExternalBrowser=1'
                  "
                  >補件</a
                >
              </li>
              <li><a href="/ecntr/tx/PLoanOnlineComfirm">線上對保</a></li>
              <li>
                <a href="/ecntr/tx/PLoanOnlineComfirmQuery">契約書查閱</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">房屋貸款</a>
            <ul class="third">
              <li>
                <a @click="fnGoPage('houseloanapply#/loan/ho001/010')"
                  >線上申請</a
                >
              </li>
              <li>
                <a @click="fnGoPage('houseloanapply#/loan/ho002/010')"
                  >案件明細查詢</a
                >
              </li>
              <li>
                <a
                  :href="
                    sGlobalURL +
                    '/bank/service/customer/additionalDocument/list.do?product_type=2'
                  "
                  >補件</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="">汽車貸款</a>
            <ul class="third">
              <li><a href="/ecntr/tx/carloanapply">線上申請</a></li>
              <li><a href="/ecntr/tx/carloanquery">案件明細查詢</a></li>
              <li>
                <a
                  class="checkLine"
                  :href="
                    sGlobalURL +
                    '/bank/service/customer/additionalDocument/list.do?product_type=4&openExternalBrowser=1'
                  "
                  >補件</a
                >
              </li>
              <li><a href="/ecntr/tx/CarLoanOnlineComfirm">線上對保</a></li>
              <li>
                <a href="/ecntr/tx/CarLoanOnlineComfirmQuery">契約書查閱</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/b3/tx/authenticate?func=loanad">貸款基準利率調整通知</a>
          </li>
          <li>
            <a href="/ecntr/pages/creditloanapply_agree.jsp?TRACE=6&LBL=Y"
              >勞工紓困貸款利息補貼專案</a
            >
          </li>
          <li>
            <a href="/ecntr/tx/deferredLoan?method=login">延緩繳款申請</a>
          </li>
        </ul>
      </li>
      <li>
        <a>財富管理</a>
        <ul class="second">
          <li><a href="/ecntr/tx/KYC?method=login">投資風險評量(KYC)</a></li>
          <li><a href="/ecntr/tx/opentrustacct?method=login">信託開戶</a></li>
          <li>
            <a href="/ecntr/tx/trustagreepromote?method=login"
              >同意/終止信託業推介</a
            >
          </li>
          <li>
            <a href="">線上簽署約定書</a>
            <ul class="third">
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
          </li>
        </ul>
      </li>
      <li>
        <a>信用卡</a>
        <ul class="second">
          <li><a href="/ecntr/tx/cdapply">線上申請</a></li>
          <li>
            <a href="">消費分期</a>
            <ul class="third">
              <li>
                <a href="/ecntr/tx/cdinstallapply?method=login">單筆分期</a>
              </li>
              <li>
                <a href="/ecntr/tx/creditbillinstallment?method=login"
                  >帳單分期</a
                >
              </li>
              <li>
                <a href="/b3/tx/authenticate?func=cdinstalldetails"
                  >分期明細查詢</a
                >
              </li>
              <li>
                <a href="/b3/tx/authenticate?func=cdinstallcontract"
                  >分期付款同意書</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a href="">預借現金</a>
            <ul class="third">
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
          </li>
          <li>
            <a href="/ecntr/tx/creditcardfeeSetting?method=login"
              >自動扣繳設定</a
            >
          </li>
          <li>
            <a
              class="checkLine"
              :href="
                sGlobalURL +
                '/bank/service/customer/application/list.do?source=1&product_type=6&openExternalBrowser=1'
              "
              >長期循環轉換方案</a
            >
          </li>
          <li>
            <a
              class="checkLine"
              :href="
                sGlobalURL +
                '/bank/creditCard/activateCard/list.do?openExternalBrowser=1'
              "
              >線上開卡</a
            >
          </li>
          <li>
            <a
              class="checkLine"
              :href="
                sGlobalURL +
                '/bank/creditCard/pay/list.do?openExternalBrowser=1'
              "
              >繳卡款</a
            >
          </li>
          <li>
            <a
              class="checkLine"
              :href="
                sGlobalURL +
                '/bank/service/customer/additionalDocument/list.do?product_type=1&openExternalBrowser=1'
              "
              >補件</a
            >
          </li>
          <li>
            <a href="/ecntr/tx/deferredLoan?method=login">延緩繳款申請</a>
          </li>
        </ul>
      </li>
      <li>
        <a>振興五倍券</a>
        <ul class="second">
          <li>
            <a href="/ecntr/tx/stimulusVoucher?method=login">回饋金額查詢</a>
          </li>
        </ul>
      </li>
      <li>
        <a>數位金融</a>
        <ul class="second">
          <li><a href="/ecntr/tx/applyibquery">線上申請網銀</a></li>
          <li>
            <a href="/ecntr/tx/estatement?method=login">綜合對帳單申請暨變更</a>
          </li>
        </ul>
      </li>
      <li>
        <a>個人資料變更</a>
        <ul class="second">
          <li>
            <a href="/ecntr/tx/alterUserInfo?method=login">變更個人資料</a>
          </li>
          <li>
            <a href="/ecntr/tx/alterMail?method=login">變更電子郵件信箱</a>
          </li>
        </ul>
      </li>
      <li>
        <a>其他服務</a>
        <ul class="second">
          <li>
            <a href="">身心障礙跨提優惠申請</a>
            <ul class="third">
              <li><a href="/ecntr/tx/disability">線上申請</a></li>
              <li><a href="/ecntr/tx/disability_query">進度查詢</a></li>
            </ul>
          </li>
          <li>
            <a href="/b3/tx/authenticate?func=crosssalesign">共同行銷約定</a>
          </li>
          <li><a href="/ecntr/tx/onlineCRS?method=entry">CRS線上聲明</a></li>
          <li>
            <a href="/ecntr/tx/cashoutbound?method=login">海外支付身分驗證</a>
          </li>
          <li>
            <a @click="fnGoPage('creditCardShare#/other/sh001/010')"
              >推薦專區</a
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MenuSideComponent",
};
</script>

<script setup>
// plugins v
import { ref } from "vue";
// import { useStore } from "vuex";

// static data v
// import navMenuSource from "@/api/json/publicJson/navMenu";

// const store = useStore();

// const reg = new RegExp("<%=YuantaHome %>", "g");
// const navMenuObj = reactive(
//   JSON.parse(
//     JSON.stringify(navMenuSource).replace(
//       reg,
//       store.getters["publicStore/getGlobalURL"]
//     )
//   )
// );

// console.log("side bar import >> ", navMenuObj);

// const URL = "<%=YuantaHome %>";
const sGlobalURL = ref("https://www.yuantabank.com.tw");

const fnGoPage = (url) => {
  location.href = "/ecntr/tx/" + url;
  location.reload();
  return false;
};
</script>

<style lang="scss" scoped>
#menu {
  width: 80vw;
}
</style>
