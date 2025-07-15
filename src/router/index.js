import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'MCP 知识库 - 首页',
      description: '深入了解 Model Context Protocol (MCP)'
    }
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import('../views/Introduction.vue'),
    meta: {
      title: 'MCP 介绍 - MCP 知识库',
      description: '什么是 Model Context Protocol，核心概念详解'
    }
  },
  {
    path: '/architecture',
    name: 'Architecture',
    component: () => import('../views/Architecture.vue'),
    meta: {
      title: 'MCP 架构 - MCP 知识库',
      description: 'MCP 架构组件和设计原理'
    }
  },
  {
    path: '/quickstart',
    name: 'QuickStart',
    component: () => import('../views/QuickStart.vue'),
    meta: {
      title: '快速开始 - MCP 知识库',
      description: 'MCP 快速开始指南和示例代码'
    }
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('../views/Examples.vue'),
    meta: {
      title: '示例代码 - MCP 知识库',
      description: 'MCP 实际应用示例和最佳实践'
    }
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/Resources.vue'),
    meta: {
      title: '学习资源 - MCP 知识库',
      description: 'MCP 官方文档、社区资源和学习材料'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: '页面未找到 - MCP 知识库'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
  
  next()
})

export default router