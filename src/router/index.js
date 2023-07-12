import { createRouter, createWebHashHistory } from "vue-router";
import CounterView from "@/views/CounterView";

const routes = [
  {
    name: "counterview",
    path: "/",
    component: CounterView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
