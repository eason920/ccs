<template>
  <!--  -->
  <footer>
    <div class="butService">
      <div class="inner">
        <ul>
          <li><a href="/ib" target="_blank">個人網銀</a></li>
          <li>
            <a
              href="https://www.yuantabank.com.tw/bank/spotMap/list.do"
              target="_blank"
              >服務據點</a
            >
          </li>
          <li>
            <a
              href="https://www.yuantabank.com.tw/bank/service/customer/suggest/list.do"
              target="_blank"
              >客服專區</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="footer clearfix">
      <div class="inner">
        <div class="footer_link">
          <a
            href="https://www.yuantabank.com.tw/bank/privacy/statement.do"
            target="_blank"
            >隱私權保護聲明</a
          >
          |
          <a
            href="https://www.yuantabank.com.tw/bank/privacy/customerData.do"
            target="_blank"
            >客戶資料保密措施</a
          >
          |
          <a
            href="https://www.yuantabank.com.tw/bank/bulletin/propaganda/list.do"
            target="_blank"
            >宣導連結</a
          >
        </div>
        <div class="copyright">
          地址：10557台北市松山區敦化南路一段66號1F 電子信箱：service@yuanta.com
          客服專線：0800-688-168
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<script setup>
// import { useStore } from "vuex";

// const store = useStore();
// const URL = "<%=YuantaHome %>";
// const URL = store.getters["publicStore/getGlobalURL"];
</script>

<style lang="scss" scoped></style>
