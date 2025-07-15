<template>
  <div class="hero-section">
    <div class="container">
      <div class="hero-content">
        <!-- 主标题区域 -->
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="title-main">🔗 Model Context Protocol</span>
            <span class="title-sub">AI 连接世界的桥梁</span>
          </h1>
          
          <p class="hero-description">
            MCP 是一个开源协议，为 AI 助手与外部数据源和工具之间建立安全、标准化的连接。
            通过 MCP，让 AI 能够安全地访问和操作各种外部资源。
          </p>
          
          <div class="hero-actions">
            <router-link to="/quickstart" class="btn btn-primary">
              🚀 快速开始
            </router-link>
            <router-link to="/introduction" class="btn btn-secondary">
              📚 了解更多
            </router-link>
          </div>
        </div>
        
        <!-- 特性卡片 -->
        <div class="hero-features">
          <div class="feature-card" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 背景装饰 -->
    <div class="hero-decoration">
      <div class="decoration-circle circle-1"></div>
      <div class="decoration-circle circle-2"></div>
      <div class="decoration-circle circle-3"></div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    id: 1,
    icon: '🔐',
    title: '安全第一',
    description: '内置权限控制和访问管理，确保 AI 只能访问授权资源'
  },
  {
    id: 2,
    icon: '🔌',
    title: '标准化接口',
    description: '提供统一的协议标准，简化不同系统之间的集成过程'
  },
  {
    id: 3,
    icon: '⚡',
    title: '高性能',
    description: '优化的通信机制，支持实时数据交换和批量操作'
  },
  {
    id: 4,
    icon: '🎯',
    title: '易于扩展',
    description: '模块化设计，支持自定义工具和数据源的快速集成'
  }
]
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--bg-gradient);
  color: var(--text-white);
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  z-index: 2;
  position: relative;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: var(--spacing-xl);
}

.title-main {
  display: block;
  background: linear-gradient(135deg, #ffffff 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-sub {
  display: block;
  font-size: 0.6em;
  font-weight: 400;
  opacity: 0.9;
  margin-top: var(--spacing-sm);
}

.hero-description {
  font-size: var(--text-lg);
  line-height: 1.7;
  opacity: 0.9;
  margin-bottom: var(--spacing-2xl);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.hero-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
}

.feature-card h3 {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  font-size: var(--text-sm);
  opacity: 0.9;
  line-height: 1.5;
}

/* 背景装饰 */
.hero-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.circle-3 {
  width: 100px;
  height: 100px;
  top: 60%;
  right: 30%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* 响应式 */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-xl);
  }
  
  .hero-features {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 90vh;
    padding: var(--spacing-xl) 0;
  }
  
  .hero-features {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .decoration-circle {
    display: none;
  }
}
</style>