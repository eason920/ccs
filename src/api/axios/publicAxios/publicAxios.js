import nnbRequset from "@/api/axios/nnbRequsetJSON";
//共用API
export const apiPostPublicApi = () =>
  nnbRequset.post("tx/FeaturesOverview?method=queryFeaturesOverview");
//新增刪除我的最愛API
export const apiPostSaveFavoriteApi = (data) =>
  nnbRequset.post("tx/FeaturesOverview?method=saveFavorite", data);
//我的最愛API
export const apiPostQueryMenuFavoriteApi = () =>
  nnbRequset.post("tx/FeaturesOverview?method=queryMenuFavorite");
//搜尋API
export const apiPostQueryFeaturesOverviewSearchApi = (data) =>
  nnbRequset.post(
    "tx/FeaturesOverview?method=queryFeaturesOverviewSearch",
    data
  );
//切換語言API//
export const apiPostChangeLanguageApi = (data) =>
  nnbRequset.post("tx/FeaturesOverview?method=changeLanguage", data);
//權限API
export const apiPostGetMenuAuthApi = (data) =>
  nnbRequset.post("tx/FeaturesOverview?method=getMenuAuth", data);
