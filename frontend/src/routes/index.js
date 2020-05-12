import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home"),
  },
  {
    path: "/gifs",
    name: "Gifs",
    component: () => import(/* webpackChunkName: "Gifs" */ "../views/Gifs"),
  },
  {
    path: "/images",
    name: "Images",
    component: () => import(/* webpackChunkName: "Images" */ "../views/Images"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
