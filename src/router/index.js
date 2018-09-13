import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import exOne from "@/components/exOne";
import exTwo from "@/components/exTwo";
import exThree from "@/components/exThree";
import exFour from "@/components/exFour";
import exFive from "@/components/exFive";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage
    },
    {
      path: "/exOne",
      name: "exOne",
      component: exOne
    },
    {
      path: "/exTwo",
      name: "exTwo",
      component: exTwo
    },
    {
      path: "/exThree",
      name: "exThree",
      component: exThree
    },
    {
      path: "/exfour",
      name: "exFour",
      component: exFour
    },
    {
      path: "/exfive",
      name: "exFive",
      component: exFive
    }
  ]
});
