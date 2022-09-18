import { apiPostPublicApi } from "@/api/axios/publicAxios/publicAxios.js";
import {
  fnSortFunc,
  fnSortTitle,
} from "@/common/methodCommon/publicMethod/sortFunc.js";
import { fnHideElLoading } from "@/common/methodCommon/publicMethod";
import router from "@/router/index.js";

export default {
  handSetErrorMessageState({ commit }, payload) {
    commit("setErrorMessageState", payload);
  },
  handSetNnbUrlState({ commit }, payload) {
    commit("setNnbUrlState", payload);
  },
  //共用api
  async publicApi({ commit }) {
    try {
      console.log(window.location.href);
      const res = await apiPostPublicApi();
      console.log(res.data);
      commit("setPublicObjState", res.data);
      if (res.data.searchContent) {
        commit("setJspSearchContentState", res.data.searchContent);
      }
      const oSideMenuObj = fnSortFunc(res.data.featureOverview);
      //如果回傳功能有 4:基金/信託
      if (oSideMenuObj.classify4) {
        //總覽頁的 4:基金/信託 要排序最後一項
        let { classify4, ...oFeatureObj } = oSideMenuObj;
        oFeatureObj.classify4 = classify4;
        commit("setFeatureObjState", oFeatureObj);
      } else {
        commit("setFeatureObjState", oSideMenuObj);
      }
      commit("setSideMenuObjState", oSideMenuObj);
      commit("setAllTitleMapState", fnSortTitle(res.data.featureOverview));
      commit("setLanguageState", res.data.userinfo.language);
      return res.data;
    } catch (err) {
      console.error(`publicApi error:${err}`);
      fnHideElLoading();
      commit("setErrorMessageState", {
        zh_tw: "狀態不明請稍後再試",
        en: "State Error",
      });
      router.push({ name: "errorDefaultPage" });
    }
  },
  handSetHouseLoanIsYTAccLoginBack({ commit }, payload) {
    commit("setLoanIsYTAccLoginBack", payload);
  },
};
//
