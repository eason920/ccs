<template>
  <div class="alertNoURL_masker isAlert_confirm" v-if="bDialogVisible">
    <div class="alertNoURL">
      <div class="alertNOURL_msg">{{ props.propsConfirmMsg }}</div>
      <div class="alertNOURL_btnBox">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirmNoURL",
};
</script>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  propsConfigVisible: {
    type: Boolean,
    default: false,
  },
  propsConfirmMsg: {
    type: String,
    default: "",
  },
});

const bDialogVisible = ref(false);

// 實踐 props 傳值給 v-model 使用
watch(
  () => props.propsConfigVisible,
  (val) => {
    bDialogVisible.value = val;
  }
);
</script>

<style lang="scss" scoped>
@import "~@/assets/css/AlertNoURL.css";
</style>
