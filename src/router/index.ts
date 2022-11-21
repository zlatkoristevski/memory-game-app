import { createRouter, createWebHistory } from "vue-router";
import LandingView from "@/views/LandingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView
    },
    {
      path: "/memory-game",
      name: "memory-game",
      component: () => import("@/views/MemoryGameView.vue")
    }
  ]
});

export default router;
