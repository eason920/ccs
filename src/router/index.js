// import { createRouter, createWebHistory } from "vue-router"; // history Y
import { createRouter, createWebHashHistory } from "vue-router"; // history N = hash
//
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // history Y
  history: createWebHashHistory(), // history N = hash
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/other/sh001/010",
      name: "creditCardShare",
      component: () =>
        import("../views/other/share/creditCardShare/CreditCardShare.vue"),
    },
    //ERROR PAGE錯誤頁
    {
      path: "/errorDefaultPage",
      name: "errorDefaultPage", //錯誤頁
      component: () => import("@/views/errorDefaultPage/ErrorDefaultPage.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "ErrorPage",
      component: () => import("@/views/errorDefaultPage/ErrorDefaultPage.vue"),
    },
  ],
});

router.beforeEach(() => {
  window.scrollTo(0, 0);
});

export default router;
