<template>
  <el-config-provider :locale="localeElement">
    <div id="block-outer">
      <side-bar />
      <div id="block-body">
        <HeaderComponent />
        <router-view />
      </div>
      <FooterComponent />
    </div>
  </el-config-provider>
</template>

<script>
export default {
  name: "App",
};
</script>

<script setup>
import HeaderComponent from "./components/publicComponents/header/HeaderComponent.vue";
import FooterComponent from "./components/publicComponents/footer/FooterComponent.vue";
import SideBar from "./components/publicComponents/header/MenuSideComponent.vue";

import { onMounted } from "vue";

// 鎖滑鼠右鍵 & 鍵盤觸發 browser 行為
const fnLockEvents = () => {
  // 滑鼠右鍵
  document.oncontextmenu = () => {
    return false;
  };

  // 鍵盤觸發 browser 行為
  document.body.onkeydown = (e) => {
    let keyCode = e.keyCode;
    //F3 搜尋
    if (keyCode == 114) {
      keyCode = 0;
      return false;
    }
    //F5 重整
    if (keyCode == 116) {
      keyCode = 0;
      return false;
    }
    //F6 browser tab
    if (keyCode == 117) {
      keyCode = 0;
      return false;
    }
    //F11 全螢幕
    if (keyCode == 122) {
      keyCode = 0;
      return false;
    }
    //ctrl + r
    if (e.ctrlKey && keyCode == 82) {
      return false;
    }
  };
};

const init = () => {
  fnLockEvents();
};
onMounted(() => {
  init();
});
</script>

<style lang="scss">
// 全局el loading設定
.el-loading-mask.is-fullscreen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  .el-loading-spinner {
    background: url("~@/assets/images/public/loading.gif");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80px 80px;
    height: 100%;
    width: 100%;
    top: 0;
    .circular {
      display: none;
    }
    .el-loading-text {
      margin: 100px 0;
    }
  }
}

@media screen and (min-width: 769px) {
  #block-body {
    min-height: calc(100vh - 122px);
  }
}
@media screen and (max-width: 768px) {
  #block-body {
    min-height: calc(100vh - 154px);
  }
}
/**/
</style>
