import { createRouter, createWebHistory } from "vue-router";
import Admin from "./admin";
import SuperAdmin from "./superadmin";
import Auth from "./auth";
import admin from "./admin";
import Super from "./super";

const routes = [Auth, SuperAdmin, admin];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const name = to.name === "auth";
  if (!token && !name) {
    return next({ name: "auth" });
  } else {
    if (token && name) {
      return next({ name: "admin" });
    } else {
      next();
    }
  }
});

export default router;
