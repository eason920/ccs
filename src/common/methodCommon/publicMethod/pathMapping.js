import oPathMapping from "@/api/json/publicJson/pathMapping.json";
import store from "@/store/index.js";
//拿path去pathMapping.json去配對取得routerName，
export const fnMappingRouterName = (path = "") => {
  let aPathArr = path.split("/");
  let sRouterPath = "";
  let sRouterName = "";
  if (aPathArr.length > 3) {
    aPathArr = path.split("/", 3);
    aPathArr.forEach((element, index) => {
      if (index > 0) {
        sRouterPath += `/${element}`;
      }
    });
  } else {
    sRouterPath = path;
  }
  console.log(sRouterPath);
  for (let key in oPathMapping) {
    if (key === sRouterPath) {
      sRouterName = oPathMapping[key];
    }
  }
  return sRouterName;
};

//由routerName去Vuex的publicObj去配對取得功能的name//
export const fnMappingTitle = (routerName = "") => {
  let sMappingName = "";
  const oPublicObj = store.getters["publicStore/getPublicObj"];
  if (routerName === "featureOverview") {
    return "featureOverview";
  } else if (routerName === "errorDefaultPage") {
    return "errorDefaultPage";
  } else {
    oPublicObj.featureOverview.forEach((item) => {
      if (item.routerName === routerName) {
        console.log("inname");
        sMappingName = item.name;
      }
    });
    console.log(sMappingName);
    //如果featureOverview找不到從menuList找name
    if (!sMappingName) {
      oPublicObj.menuList.forEach((item) => {
        if (item.routerName === routerName) {
          console.log("inname");
          sMappingName = item.name;
        }
      });
    }
    return sMappingName;
  }
};
