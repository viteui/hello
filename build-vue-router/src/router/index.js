import Vue from "vue";
import VueRouter from "vue-router";
// import CustomRouter from "../CustomRouter/index";
import Curry from "../components/curry";
import Clay from "../components/clay";
import Green from "../components/green";

Vue.use(VueRouter);

// Vue.use(CustomRouter);

const routes = [
  {
    path: "/",
    name: "Curry",
    component: Curry
  },
  {
    path: "clay",
    name: "Clay",
    component: Clay
  },
  {
    path: "green",
    name: "Green",
    component: Green
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

console.log(router)
export default router;
