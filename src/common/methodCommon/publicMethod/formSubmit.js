import { fnShowElLoading } from "@/common/methodCommon/publicMethod";
import store from "@/store/index";
const sNnbUrl = store.getters["publicStore/getNnbUrl"];

//跳回jsp提交表單 //
export const fnFormSubmit = (action, menuIcon = "") => {
  fnShowElLoading();
  let iconid = menuIcon === "" ? `menu_${action}` : menuIcon;
  document.mform.menutype.value = action;
  document.mform.iconid.value = iconid;
  document.mform.action = `${sNnbUrl}/tx/${action}`;
  document.mform.submit();
};
//登出
export const fnGoLogout = () => {
  document.mform.action = `${sNnbUrl}/tx/logout`;
  document.mform.submit();
};
