import { createRouter, createWebHistory } from 'vue-router'
// import AddDesc from "@/components/AddDesc.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/AddDesc.vue"),
  },
  {
    path: "/calender",
    name: "CalendarComp",
    component: () => import("@/components/CalendarComp.vue"),
  },
  {
    path: "/remainder",
    name: "ReminderComp",
    component: ()=> import("@/components/ReminderList.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
