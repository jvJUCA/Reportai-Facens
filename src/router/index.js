import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/public/LoginView.vue";
import FeedView from "@/views/public/FeedView.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/",
    name: "Feed",
    component: FeedView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
