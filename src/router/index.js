import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/public/LoginView.vue";
import FeedView from "@/views/admin/FeedView.vue";
import ProfileView from "@/views/admin/ProfileView.vue";
import SignUpView from "@/views/public/SignUpView.vue";
import { auth } from "@/firebase";
import UserController from "@/controllers/UserController";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Feed",
    component: FeedView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
    meta: {
      requiresAuth: false,
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

router.beforeEach(async (to, from, next) => {
  // Aguardar até que a autenticação esteja pronta
  await new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve();
      return user;
    });
  });

  if (auth.currentUser) {
    const user = await new UserController().getById(auth.currentUser.uid);
    store.commit("SET_USER", user);
  }

  if (to.path === "/login" && auth.currentUser) {
    next("/");
  } else if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/login");
  } else {
    next();
  }
});

export default router;
