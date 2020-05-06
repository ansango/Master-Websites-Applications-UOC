import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: () => import("../views/Home.vue")
  },
  {
    path: "/road/:slug",
    name: "road",
    props: true,
    component: () => import("../views/Road.vue"),
    children: [
      {
        path: ":toolSlug",
        name: "tool",
        props: true,
        component: () => import("../views/Tool.vue")
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.roadmap.find(
        roadmap => roadmap.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  linkExactActiveClass: "active-link",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#tool") {
          position.offset = { y: 100 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
    return { x: 0, y: 0 }
  },
  mode: "history",
  routes
});

export default router;
