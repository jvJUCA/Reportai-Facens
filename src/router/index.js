import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/public/LoginView.vue";
import FeedView from "@/views/admin/FeedView.vue";
import ProfileView from "@/views/admin/ProfileView.vue";

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
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
