import { formatDate } from "./formatDate";
import { formatPrice } from "./formatPrice.js";
import { secretName } from "./secretName.js";
import { showElLoading, hideElLoading } from "./elGlobalMethod.js";
import { replaceSpanHtml } from "./replaceSpanHtml.js";
import { checkPrivacy, reCheckCode } from "./common.js";
//
import {
  checkID,
  idMaske,
  toDBC,
  checkEn,
  checkNum,
  checkDate,
} from "./checkFormat.js";
import { hidePcNav } from "./hidePcNav.js";

export const fnFormatDate = formatDate; //日期格式化
export const fnFormatPrice = formatPrice; //台幣金額格式化：將金額加上千分位逗號
export const fnSecretName = secretName; //中文姓名隱碼：將姓名第二個字換成○符號
export const fnReplaceSpanHtml = replaceSpanHtml; //如果字串中有span標籤將其用空白取代
export const fnCheckID = checkID; // 身分證格式確認
export const fnIdMaske = idMaske; // 身分證屏蔽
export const fnToDBC = toDBC; // 全型轉半型
export const fnCheckEn = checkEn; // 確認英文字only (txt, unit)
export const fnCheckNum = checkNum; // 確認數字only (txt, unit)
export const fnCheckDate = checkDate; // 確認 yymmdd 日期格式正確
export const fnReCheckCode = reCheckCode; // e 櫃台驗證碼
export const fnCheckPrivacy = checkPrivacy; // e 櫃台未另開條款頁的錯訊
export const fnHidePcNav = hidePcNav;

//elGlobalMethod
export const fnShowElLoading = showElLoading; //顯示全局loading
export const fnHideElLoading = hideElLoading; //關閉全局loading
