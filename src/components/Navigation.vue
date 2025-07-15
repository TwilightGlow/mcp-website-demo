<template>
  <nav class="navigation" :class="{ 'scrolled': isScrolled }">
    <div class="container nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">
        <span class="logo-icon">🔗</span>
        <span class="logo-text">MCP 知识库</span>
      </router-link>
      
      <!-- 桌面端导航菜单 -->
      <ul class="nav-menu" :class="{ 'active': isMobileMenuOpen }">
        <li><router-link to="/" @click="closeMobileMenu">首页</router-link></li>
        <li><router-link to="/introduction" @click="closeMobileMenu">MCP 介绍</router-link></li>
        <li><router-link to="/architecture" @click="closeMobileMenu">架构设计</router-link></li>
        <li><router-link to="/quickstart" @click="closeMobileMenu">快速开始</router-link></li>
        <li><router-link to="/examples" @click="closeMobileMenu">示例代码</router-link></li>
        <li><router-link to="/resources" @click="closeMobileMenu">学习资源</router-link></li>
      </ul>
      
      <!-- 移动端菜单按钮 -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

.navigation.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: var(--shadow-md);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--text-primary);
  text-decoration: none;
}

.logo-icon {
  font-size: 2rem;
  margin-right: var(--spacing-sm);
}

.logo-text {
  background: var(--bg-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-menu a {
  color: var(--text-secondary);
  font-weight: 500;
  transition: var(--transition-fast);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  color: var(--primary-color);
  background: rgba(102, 126, 234, 0.1);
  text-decoration: none;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: var(--text-primary);
  margin: 3px 0;
  transition: var(--transition-fast);
}

/* 移动端样式 */
@media (max-width: 768px) {
  .nav-container {
    height: 60px;
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    flex-direction: column;
    padding: var(--spacing-lg);
    box-shadow: var(--shadow-lg);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  
  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-menu a {
    padding: var(--spacing-md);
    text-align: center;
    border-bottom: 1px solid var(--border-color);
  }
  
  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }
  
  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}
</style>