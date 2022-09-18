<template>
  <div class="alertNoURL_masker isAlert_normal" v-if="bDialogVisible">
    <div class="alertNoURL">
      <div class="alertNOURL_msg">{{ props.propsAlertMsg }}</div>
      <div class="alertNOURL_btnBox">
        <slot name="button"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "alertNoURL",
};
</script>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  propsAlertVisible: {
    type: Boolean,
    default: false,
  },
  propsAlertMsg: {
    type: String,
    default: "",
  },
});

const bDialogVisible = ref(false);

// 實踐 props 傳值給 v-model 使用
watch(
  () => props.propsAlertVisible,
  (val) => {
    bDialogVisible.value = val;
  }
);
</script>

<style lang="scss" scoped>
@import "~@/assets/css/AlertNoURL.css";
</style>
