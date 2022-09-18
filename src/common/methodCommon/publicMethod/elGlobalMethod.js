import { ElLoading } from "element-plus";

let loadingCount = 0;
let loading;
//
const startLoading = () => {
  //開啟全局loading服務
  loading = ElLoading.service({
    lock: true,
    text: "",
    background: "rgba(255,255,255,0.35)",
  });
};

const endLoading = () => {
  //全局loading服務關閉
  loading.close();
};

//顯示全局loading
export const showElLoading = () => {
  if (loadingCount === 0) {
    startLoading();
  }
  loadingCount += 1;
};

//關閉全局loading
export const hideElLoading = () => {
  if (loadingCount <= 0) {
    return;
  }
  loadingCount -= 1;
  if (loadingCount === 0) {
    endLoading();
  }
};
