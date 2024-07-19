import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ]
})
// router.beforeEach(async (to, from, next) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   const currentUser = auth.currentUser;

//   if (requiresAuth && !currentUser) {
//     next('/');
//   } else if (requiresAuth && currentUser) {
//     const userDoc = await db.collection('users').doc(currentUser.uid).get();
//     const userData = userDoc.data();
//     const role = to.meta.role;

//     if (role && userData.role !== role) {
//       next('/');
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router
