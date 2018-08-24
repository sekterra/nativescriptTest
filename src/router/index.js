import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'

import HelloWorld from '../components/HelloWorld'
import Login from '../Login'
import Dashbaord from '../components/summary/Dashboard'

/** WO **/
import RequestTabs from '../apps/wo/RequestTabs'
import RequestSearch from '../apps/wo/RequestSearch'
import RequestCreate from '../apps/wo/RequestCreate'

/** Samples **/
import Controls from '../components/Samples/Controls'
import Grid from '../components/Samples/Grid'
import Search from '../components/Samples/Search'
import Create from '../components/Samples/Create'
import Tabs from '../components/Samples/Tabs'
import Camera from '../components/Samples/Camera'

Vue.use(Router)

export default new Router({
  routes: [
    // 메인페이지
    {
      path: '/',
      name: 'main',
      component: Main
    },
    // 로그인페이지
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // 대쉬보드
    {
      path: '/summary/dashboard',
      name: 'dashboard',
      component: Dashbaord
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    },
    /** wo **/
    {
      path: '/wo/requestTabs',
      name: 'requestTabs',
      component: RequestTabs
    },
    {
      path: '/wo/requestSearch',
      name: 'requestSearch',
      component: RequestSearch
    },
    {
      path: '/wo/requestCreate',
      name: 'requestCreate',
      component: RequestCreate
    },
    /** samples route **/
    {
      path: '/samples/Controls',
      name: 'controls',
      component: Controls
    },
    {
      path: '/samples/Grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/samples/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/samples/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/samples/Tabs',
      name: 'Tabs',
      component: Tabs
    },
    {
      path: '/samples/Camera',
      name: 'Camera',
      component: Camera
    }
  ]
})
