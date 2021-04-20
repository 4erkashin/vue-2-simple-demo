import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { moduleRequestsCancellation } from '@/store/modules/ModuleRequestsСancellation';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'ViewNotesList',
    component: () =>
      import(/* webpackChunkName: "list" */ '@/views/ViewNotesList.vue'),
    meta: {
      title: 'Notes list',
    },
  },
  {
    path: '/note-details/:noteId',
    name: 'ViewNoteDetails',
    component: () =>
      import(/* webpackChunkName: "details" */ '@/views/ViewNoteDetails.vue'),
    meta: {
      title: 'Note details',
    },
    props: (route) => ({ noteId: Number(route.params.noteId) }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// todo seems not working properly
router.beforeEach((_, __, next) => {
  moduleRequestsCancellation.cancelPendingRequests();
  next();
});

export default router;
