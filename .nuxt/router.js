import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _42bd7281 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5a810abb = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _7915cf6a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _42bd7281,
    name: "login"
  }, {
    path: "/register",
    component: _5a810abb,
    name: "register"
  }, {
    path: "/",
    component: _7915cf6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
