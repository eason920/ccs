<template>
  <!--  -->
  <header :class="[{ navsub: haveNavSub }]">
    <h1><a href="https://www.yuantabank.com.tw/bank/"></a></h1>
    <h2><a href="/ecntr/">元大e櫃檯</a></h2>
    <a class="menu phone" href="#menu"></a>
    <a
      class="locate phone"
      href="https://www.yuantabank.com.tw/bank/spotMap/list.do"
    ></a>
    <div id="hidePcNav" @mouseover="fnHidePcNav"></div>
    <MenuComponent v-if="haveNavSub" />
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<script setup>
//TOOLS
import { fnHidePcNav } from "@/common/methodCommon/publicMethod";

// plugins v
import { ref } from "vue";
// import { useStore } from "vuex";

// components v
import MenuComponent from "./MenuComponent.vue";

const haveNavSub = ref(true);
// const store = useStore();
// const sGlobalURL = "<%=YuantaHome %>";
// const sGlobalURL = store.getters["publicStore/getGlobalsGlobalURL"];
</script>

<style lang="scss" scoped>
header {
  z-index: 2;
  border-bottom-color: transparent;
  border-bottom-style: solid;
}

.for-hide {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
}

@media screen and (max-width: 767px) {
  header {
    border-bottom-width: 0;
  }

  .for-hide {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  header {
    border-bottom-width: 10px;
    &.navsub {
      border-bottom-width: 45px;
    }
  }
}

#hidePcNav {
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 15px;
  display: none;
}
</style>
