<template>
  <div class="error-page">
    <section class="main">
      <!-- 麵包屑-->
      <ul class="breadcrumb">
        <li><a href="/ecntr/">元大e櫃檯</a></li>
        <li>系統訊息</li>
      </ul>
      <div class="in" @mouseover="fnHidePcNav">
        <h2><span>系統訊息</span></h2>
        <div class="msge">{{ sShowMessage }}</div>
        <!--按鈕-->
        <div class="btnSet" v-if="sShowButton === 'true'">
          <input type="button" value="回首頁" @click="fnGoIndex" />
        </div>
      </div>
    </section>
  </div>
  <!--  -->
</template>

<script>
export default {
  name: "ErrorDefaultPage",
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
const oErrMessage = store.getters["publicStore/getErrorMessage"];
const sShowMessage = ref();

onMounted(() => {
  sShowMessage.value = oErrMessage.zh_tw;
});

/* router.push傳入參數button，決定是否顯示按鈕
 * 預設不顯示按鈕，router.push不須傳入params
 * [寫法]：router.push({ name: "errorDefaultPage", params: { showButton: "true" } });
 */
const props = defineProps({
  showButton: {
    type: String,
    default: "true",
  },
});
const sShowButton = ref(props.showButton);

const fnGoIndex = () => {
  location.href = "/ecntr/";
};

// TOOLS v
import { fnHidePcNav } from "@/common/methodCommon/publicMethod";
</script>
