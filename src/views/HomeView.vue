<template>
  home page
  <ul>
    <li @click="fnGoPage('houseloanapply')">房貸線上申請</li>
    <!-- <li @click="fnGoPage('houseloanquery')">房貸案件明細查詢</li> -->
    <!-- <li @click="fnGoPage('finance_fidoRegister_Verify')">FIDO</li> -->
  </ul>
</template>

<script>
export default {
  name: "homeView",
};
</script>

<script setup>
//
const sComponentName = "home";

// LOADING v
import {
  // fnShowElLoading,
  fnHideElLoading,
} from "@/common/methodCommon/publicMethod";

// VUE
import { onMounted } from "vue";

// VUEX
import { useStore } from "vuex";
const store = useStore();

onMounted(() => {
  // 房貸
  console.log(
    "%cdoapi FromPage",
    "color:greenyellow;font-size:20px;font-weight:bold"
  );
  // $.ajax({
  //   type: "POST",
  //   url: "/ecntr/tx/houseloanapply?method=FromPage",
  //   success(res) {
  //     console.log("FromPage success res >>", res);
  //     if (res.sRtCode === "200") {
  //       console.log("%cis 200", "color:red");
  //       if (res.sFromPage === "authenticate") {
  //         // 房貸申請以「元大會員(jsp)」登入成功，返回 vue 首頁者 // xxx「myData」反回 xxx
  //         store.dispatch("publicStore/handSetHouseLoanIsYTAccLoginBack", true);
  //         console.log(
  //           '>>> store.getters["publicStore/getLoanIsYTAccLoginBack"]',
  //           store.getters["publicStore/getLoanIsYTAccLoginBack"]
  //         );
  //         fnGoPage("houseloanapplyOTP");
  //       }
  //     } else {
  //       fnNot200(res, "ajax");
  //     }
  //   },
  //   error(err) {
  //     console.log("FromPage error err >>", err);
  //     fnCatch(sComponentName + "/FromPage", err, "ajax");
  //   },
  // });
});

// 共用函式 START --------------
import { useRouter } from "vue-router";
const router = useRouter();
const fnGoPage = (name) => {
  router.push({ name });
};

const fnNot200 = (res, sys) => {
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

// const fnStepError = () => {
//   fnGoErrorPage("房貸申請程序錯誤");
// };

// 共用函式 END --------------
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
</style>
