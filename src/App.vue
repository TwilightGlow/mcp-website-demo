<template>
  <div id="app">
    <!-- 导航栏 -->
    <Navigation />
    
    <!-- 主要内容区域 -->
    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    
    <!-- 页脚 -->
    <Footer />
    
    <!-- 回到顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'

// 页面加载完成后的处理
onMounted(() => {
  // 添加页面加载动画结束的处理
  const loadingElement = document.querySelector('.loading')
  if (loadingElement) {
    loadingElement.style.display = 'none'
  }
  
  // 添加滚动事件监听（如果需要）
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  // 滚动事件处理逻辑
  // 例如：导航栏样式变化、回到顶部按钮显示等
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; /* 为固定导航栏留出空间 */
}

/* 页面切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .main-content {
    padding-top: 70px;
  }
}
</style>