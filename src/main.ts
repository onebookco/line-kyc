import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import UserInfo from "./views/user-info.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/home.vue"),
  },
  {
    path: "/user-info",
    name: "user-info",
    component: UserInfo,
  },
  {
    path: "/finished",
    name: "finished",
    component: () => import("./views/finished.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
