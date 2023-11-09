import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/public/LoginView.vue";
import FeedView from "@/views/admin/FeedView.vue";
import ProfileView from "@/views/admin/ProfileView.vue";
import SignUpView from "@/views/public/SignUpView.vue";
import { auth } from "@/firebase";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "Feed",
    component: FeedView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignUpView,
    meta: {
      requiresAuth: false,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login" && auth.currentUser) {
    next("/");
    return;
  }
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
    return;
  }
  next();
});

export default router;
