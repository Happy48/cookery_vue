import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('@/page/Index')), 'index')
const login = r => require.ensure([], () => r(require('@/page/Login')), 'login')
const register = r => require.ensure([], () => r(require('@/page/Register')), 'register')
const personalInfo = r => require.ensure([], () => r(require('@/page/PersonalInfo')), 'personalInfo')
const allBlog = r => require.ensure([], () => r(require('@/page/AllBlog')), 'allBlog')
const collect = r => require.ensure([], () => r(require('@/page/Collect')), 'collect')
const createNote = r => require.ensure([], () => r(require('@/page/CreateNote')), 'createNote')
const editNote = r => require.ensure([], () => r(require('@/page/EditNote')), 'editNote')
const focus = r => require.ensure([], () => r(require('@/page/Focus')), 'focus')
const hisBlogs = r => require.ensure([], () => r(require('@/page/OtherPeopleBlog')), 'hisBlogs')
const myBlogs = r => require.ensure([], () => r(require('@/page/MyBlogs')), 'myBlogs')
const blogDetail = r => require.ensure([], () => r(require('@/page/BlogDetail')), 'blogDetail')
const allTag = r => require.ensure([], () => r(require('@/page/AllTag')), 'allTag')

const test = r => require.ensure([], () => r(require('@/page/Test')), 'test')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: index
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/register',
      name: 'Register',
      component: register
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: personalInfo
    },
    {
      path: '/allBlog',
      name: 'AllBlog',
      component: allBlog
    },
    {
      path: '/collect',
      name: 'Collect',
      component: collect
    },
    {
      path: '/createNote',
      name: 'CreateNote',
      component: createNote
    },
    {
      path: '/editNote',
      name: 'EditNote',
      component: editNote
    },
    {
      path: '/focus',
      name: 'Focus',
      component: focus
    },
    {
      path: '/hisBlogs',
      name: 'hisBlogs',
      component: hisBlogs
    },
    {
      path: '/myBlogs',
      name: 'myBlogs',
      component: myBlogs
    },
    {
      path: '/blogDetail',
      name: 'blogDetail',
      component: blogDetail
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/allTag',
      name: 'AllTag',
      component: allTag
    },
    {
      path: '/blogDetail/:noteID',
      name: 'blogDetail',
      component: blogDetail
    }
  ]
})
