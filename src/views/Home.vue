<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <HeroSection />
    
    <!-- 主要内容区域 -->
    <div class="main-content">
      <div class="container">
        <!-- MCP 介绍区域 -->
        <section class="intro-section">
          <div class="section-header text-center">
            <h2 class="section-title">🤔 什么是 MCP？</h2>
            <p class="section-subtitle">
              Model Context Protocol 是一个开源协议，旨在为 AI 助手与外部数据源和工具之间建立安全、标准化的连接。
            </p>
          </div>
          
          <div class="intro-content grid grid-2">
            <div class="intro-text">
              <div class="highlight-box">
                <h3>🎯 核心目标</h3>
                <p>
                  让 AI 助手能够安全地访问和操作各种外部资源，如数据库、API、文件系统等，
                  同时保持高度的安全性和可扩展性。
                </p>
              </div>
              
              <ul class="feature-list">
                <li>✅ 统一的协议标准</li>
                <li>✅ 安全的权限控制</li>
                <li>✅ 高性能的数据交换</li>
                <li>✅ 灵活的扩展能力</li>
              </ul>
            </div>
            
            <div class="intro-visual">
              <div class="architecture-diagram">
                <div class="diagram-node client">
                  <span class="node-icon">🤖</span>
                  <span class="node-label">AI 客户端</span>
                </div>
                <div class="connection"></div>
                <div class="diagram-node protocol">
                  <span class="node-icon">🔗</span>
                  <span class="node-label">MCP 协议</span>
                </div>
                <div class="connection"></div>
                <div class="diagram-node server">
                  <span class="node-icon">📊</span>
                  <span class="node-label">数据源</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 应用场景区域 -->
        <section class="use-cases-section">
          <div class="section-header text-center">
            <h2 class="section-title">🎯 应用场景</h2>
            <p class="section-subtitle">
              MCP 可以应用于各种不同的场景，为 AI 应用提供强大的数据访问能力。
            </p>
          </div>
          
          <div class="use-cases-grid grid grid-4">
            <div class="use-case-card card" v-for="useCase in useCases" :key="useCase.id">
              <div class="use-case-icon">{{ useCase.icon }}</div>
              <h3>{{ useCase.title }}</h3>
              <p>{{ useCase.description }}</p>
              <ul class="use-case-examples">
                <li v-for="example in useCase.examples" :key="example">{{ example }}</li>
              </ul>
            </div>
          </div>
        </section>
        
        <!-- 快速开始区域 -->
        <section class="quick-start-section">
          <div class="quick-start-card card">
            <div class="quick-start-content">
              <h2>🚀 快速开始</h2>
              <p>几分钟内搭建你的第一个 MCP 服务器，体验 MCP 的强大功能。</p>
              
              <div class="quick-start-steps">
                <div class="step">
                  <span class="step-number">1</span>
                  <span class="step-text">安装 MCP SDK</span>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <span class="step-text">创建服务器</span>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <span class="step-text">连接 AI 客户端</span>
                </div>
              </div>
              
              <router-link to="/quickstart" class="btn btn-primary">
                查看详细教程
              </router-link>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'

const useCases = [
  {
    id: 1,
    icon: '📊',
    title: '数据分析',
    description: '连接数据库和分析工具，让 AI 助手能够查询和分析数据。',
    examples: ['业务报表生成', '数据可视化', '趋势分析']
  },
  {
    id: 2,
    icon: '🔧',
    title: '自动化操作',
    description: '集成各种 API 和系统，实现复杂的自动化工作流。',
    examples: ['邮件发送', '文件管理', '任务调度']
  },
  {
    id: 3,
    icon: '📝',
    title: '内容管理',
    description: '连接 CMS、文档系统，实现智能内容创建和管理。',
    examples: ['文章编写', '文档翻译', '内容审核']
  },
  {
    id: 4,
    icon: '🤖',
    title: '智能客服',
    description: '整合客户数据和支持系统，提供个性化服务体验。',
    examples: ['问题解答', '工单处理', '用户支持']
  }
]
</script>

<style scoped>
.main-content {
  background: var(--bg-primary);
  position: relative;
  z-index: 1;
}

.section-header {
  margin-bottom: var(--spacing-2xl);
}

.section-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--spacing-lg);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 介绍区域 */
.intro-section {
  padding: var(--spacing-2xl) 0;
}

.intro-content {
  align-items: center;
}

.highlight-box {
  background: linear-gradient(135deg, #e7f3ff 0%, #f0f9ff 100%);
  border-left: 4px solid var(--primary-color);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-xl);
}

.highlight-box h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  padding: var(--spacing-sm) 0;
  font-size: var(--text-lg);
  color: var(--text-secondary);
}

/* 架构图 */
.architecture-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl);
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: var(--radius-xl);
  border: 2px solid var(--border-color);
}

.diagram-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-lg);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  min-width: 120px;
}

.node-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-sm);
}

.node-label {
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
}

.connection {
  width: 2px;
  height: 30px;
  background: var(--primary-color);
  position: relative;
}

.connection::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: -3px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 8px solid var(--primary-color);
}

/* 应用场景区域 */
.use-cases-section {
  padding: var(--spacing-2xl) 0;
  background: var(--bg-secondary);
}

.use-case-card {
  text-align: center;
  transition: var(--transition);
}

.use-case-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-lg);
}

.use-case-card h3 {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.use-case-card p {
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.use-case-examples {
  list-style: none;
  padding: 0;
}

.use-case-examples li {
  background: var(--bg-tertiary);
  padding: var(--spacing-xs) var(--spacing-sm);
  margin: var(--spacing-xs) 0;
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  color: var(--text-light);
}

/* 快速开始区域 */
.quick-start-section {
  padding: var(--spacing-2xl) 0;
}

.quick-start-card {
  background: var(--bg-gradient);
  color: var(--text-white);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.quick-start-card h2 {
  font-size: var(--text-3xl);
  margin-bottom: var(--spacing-lg);
}

.quick-start-card p {
  font-size: var(--text-lg);
  opacity: 0.9;
  margin-bottom: var(--spacing-2xl);
}

.quick-start-steps {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-2xl);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.step-number {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--text-lg);
}

.step-text {
  font-size: var(--text-sm);
  opacity: 0.9;
}

/* 响应式 */
@media (max-width: 768px) {
  .intro-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .architecture-diagram {
    flex-direction: row;
    overflow-x: auto;
    padding: var(--spacing-lg);
  }
  
  .connection {
    width: 30px;
    height: 2px;
    transform: rotate(0deg);
  }
  
  .connection::after {
    bottom: -3px;
    left: 22px;
    border-left: 8px solid var(--primary-color);
    border-right: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
  
  .quick-start-steps {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
}
</style>