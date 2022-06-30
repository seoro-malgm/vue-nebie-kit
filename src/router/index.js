import Vue from "vue";
import VueRouter from "vue-router";

/**
 * Rotuer란, Route 목록을 만드는 공간이다
 * Vue 파일을 import 한다음에 @routes 에 경로와 연결해주어야 한다
 * vue-router : https://router.vuejs.org/guide/
 */
import HomeView from "../views/HomeView.vue";
import CafeMenu from "@/views/CafeMenu.vue"; // @는 src에서 시작한다는 뜻이다
import CafeAdmin from "@/views/CafeAdmin"; // 확장자는 생략할 수 있다
import NetflixApp from "@/views/NetflixApp"; // 확장자는 생략할 수 있다

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/todo-list", // 이 링크는
    name: "todo-list", // 이름은 이거고
    component: () => import("@/views/TodoList.vue"), // 들어갔을 때, 이 Vue 파일을 엽니다
  },
  {
    path: "/cafe",
    name: "cafe",
    component: CafeMenu,
  },
  {
    path: "/cafe-admin",
    name: "cafe-admin",
    component: CafeAdmin,
  },
  {
    path: "/netflix",
    name: "netflix",
    component: NetflixApp,
  },
];

// 이 Router는
const router = new VueRouter({
  mode: "history", // mode는 이렇구
  base: process.env.BASE_URL, // 최초 진입시 URL은 여기이며
  routes, // Route 목록은 위에 선언한 routes 입니다
});

export default router; // 이걸 router로 쓰겠습니다
