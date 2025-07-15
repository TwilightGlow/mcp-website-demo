<template>
  <div class="introduction-page">
    <div class="container">
      <!-- 页面头部 -->
      <div class="page-header">
        <h1 class="page-title text-gradient">🔗 MCP 介绍</h1>
        <p class="page-subtitle">
          深入了解 Model Context Protocol 的核心概念、设计原理和价值主张。
        </p>
      </div>
      
      <!-- 主要内容 -->
      <div class="content-sections">
        <!-- 什么是 MCP -->
        <section class="content-section">
          <div class="section-card card">
            <h2 class="section-title">🤔 什么是 MCP？</h2>
            <div class="section-content">
              <p class="lead-text">
                Model Context Protocol (MCP) 是一个开源协议，旨在为 AI 助手（如 Claude、ChatGPT 等）与外部数据源和工具之间建立安全、标准化的连接。
              </p>
              
              <div class="highlight-box">
                <h3>🎯 核心使命</h3>
                <p>
                  让 AI 助手能够安全地访问和操作各种外部资源，如数据库、API、文件系统等，
                  同时保持高度的安全性和可扩展性。
                </p>
              </div>
              
              <div class="comparison-grid grid grid-2">
                <div class="comparison-item">
                  <h4>传统方式</h4>
                  <ul class="comparison-list negative">
                    <li>❌ 各种不同的 API 接口</li>
                    <li>❌ 复杂的集成过程</li>
                    <li>❌ 安全性难以保证</li>
                    <li>❌ 缺乏统一标准</li>
                  </ul>
                </div>
                
                <div class="comparison-item">
                  <h4>MCP 方式</h4>
                  <ul class="comparison-list positive">
                    <li>✅ 统一的协议标准</li>
                    <li>✅ 简化集成流程</li>
                    <li>✅ 内置安全机制</li>
                    <li>✅ 标准化接口</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 核心特性 -->
        <section class="content-section">
          <div class="section-card card">
            <h2 class="section-title">✨ 核心特性</h2>
            <div class="features-grid grid grid-2">
              <div class="feature-item" v-for="feature in coreFeatures" :key="feature.id">
                <div class="feature-header">
                  <span class="feature-icon">{{ feature.icon }}</span>
                  <h3>{{ feature.title }}</h3>
                </div>
                <p class="feature-description">{{ feature.description }}</p>
                <ul class="feature-benefits">
                  <li v-for="benefit in feature.benefits" :key="benefit">{{ benefit }}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 工作原理 -->
        <section class="content-section">
          <div class="section-card card">
            <h2 class="section-title">⚙️ 工作原理</h2>
            <div class="workflow-content">
              <p class="workflow-intro">
                MCP 通过客户端-服务器架构实现 AI 与外部系统的连接：
              </p>
              
              <div class="workflow-steps">
                <div class="workflow-step" v-for="(step, index) in workflowSteps" :key="step.id">
                  <div class="step-number">{{ index + 1 }}</div>
                  <div class="step-content">
                    <h4>{{ step.title }}</h4>
                    <p>{{ step.description }}</p>
                  </div>
                  <div class="step-icon">{{ step.icon }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- 优势对比 -->
        <section class="content-section">
          <div class="section-card card">
            <h2 class="section-title">💯 为什么选择 MCP？</h2>
            <div class="advantages-grid grid grid-3">
              <div class="advantage-card" v-for="advantage in advantages" :key="advantage.id">
                <div class="advantage-icon">{{ advantage.icon }}</div>
                <h3>{{ advantage.title }}</h3>
                <p>{{ advantage.description }}</p>
                <div class="advantage-metrics">
                  <span class="metric">{{ advantage.metric }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <!-- 底部操作区 -->
      <div class="page-actions">
        <div class="actions-card card">
          <h3>🚀 即刻开始</h3>
          <p>准备好了解更多 MCP 的技术细节和实际应用了吗？</p>
          <div class="action-buttons">
            <router-link to="/architecture" class="btn btn-primary">
              🏢 查看架构设计
            </router-link>
            <router-link to="/quickstart" class="btn btn-secondary">
              ⚡ 快速开始
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const coreFeatures = [
  {
    id: 1,
    icon: '🔐',
    title: '安全第一',
    description: '内置权限控制和访问管理，确保 AI 只能访问授权资源。',
    benefits: ['精细的权限控制', '访问日志记录', '数据加密传输']
  },
  {
    id: 2,
    icon: '🔌',
    title: '标准化接口',
    description: '提供统一的协议标准，简化不同系统之间的集成过程。',
    benefits: ['通用协议标准', '跨平台兼容', '易于维护']
  },
  {
    id: 3,
    icon: '⚡',
    title: '高性能',
    description: '优化的通信机制，支持实时数据交换和批量操作。',
    benefits: ['低延迟通信', '批量数据处理', '连接池管理']
  },
  {
    id: 4,
    icon: '🎯',
    title: '易于扩展',
    description: '模块化设计，支持自定义工具和数据源的快速集成。',
    benefits: ['插件化架构', '热更新支持', '社区生态']
  }
]

const workflowSteps = [
  {
    id: 1,
    title: 'AI 客户端发起请求',
    description: 'AI 助手需要访问外部数据时，通过 MCP 协议发起请求。',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'MCP 协议层处理',
    description: '协议层验证权限、路由请求并管理通信安全。',
    icon: '🔗'
  },
  {
    id: 3,
    title: 'MCP 服务器执行',
    description: '服务器执行具体的数据操作或工具调用。',
    icon: '📊'
  },
  {
    id: 4,
    title: '返回结果',
    description: '处理结果通过 MCP 协议安全地返回给 AI 客户端。',
    icon: '✅'
  }
]

const advantages = [
  {
    id: 1,
    icon: '🚀',
    title: '快速集成',
    description: '几分钟内完成新数据源的集成，无需复杂配置。',
    metric: '90% 减少集成时间'
  },
  {
    id: 2,
    icon: '🔒',
    title: '企业级安全',
    description: '内置多层安全机制，符合企业安全标准。',
    metric: 'SOC 2 符合性'
  },
  {
    id: 3,
    icon: '🌐',
    title: '全球社区',
    description: '活跃的开源社区，丰富的第三方插件生态。',
    metric: '1000+ 开发者'
  }
]
</script>

<style scoped>
.introduction-page {
  padding: var(--spacing-2xl) 0;
  background: var(--bg-primary);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.page-title {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  margin-bottom: var(--spacing-lg);
}

.page-subtitle {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.content-sections {
  max-width: 900px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: var(--spacing-2xl);
}

.section-card {
  padding: var(--spacing-2xl);
}

.section-title {
  font-size: var(--text-2xl);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xl);
  border-bottom: 2px solid var(--border-color);
  padding-bottom: var(--spacing-md);
}

.lead-text {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-xl);
}

.highlight-box {
  background: linear-gradient(135deg, #e7f3ff 0%, #f0f9ff 100%);
  border-left: 4px solid var(--primary-color);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  margin: var(--spacing-xl) 0;
}

.highlight-box h3 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

/* 对比区域 */
.comparison-grid {
  margin-top: var(--spacing-xl);
}

.comparison-item {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  border: 2px solid var(--border-color);
}

.comparison-item h4 {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.comparison-list {
  list-style: none;
  padding: 0;
}

.comparison-list li {
  padding: var(--spacing-sm) 0;
  font-size: var(--text-base);
}

.comparison-list.negative li {
  color: #e53e3e;
}

.comparison-list.positive li {
  color: #38a169;
}

/* 特性区域 */
.features-grid {
  gap: var(--spacing-xl);
}

.feature-item {
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.feature-item:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.feature-icon {
  font-size: 2rem;
}

.feature-item h3 {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.feature-benefits {
  list-style: none;
  padding: 0;
}

.feature-benefits li {
  background: var(--bg-tertiary);
  padding: var(--spacing-xs) var(--spacing-sm);
  margin: var(--spacing-xs) 0;
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  color: var(--text-light);
}

/* 工作流程 */
.workflow-intro {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
}

.workflow-steps {
  display: grid;
  gap: var(--spacing-lg);
}

.workflow-step {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-lg);
  align-items: center;
  padding: var(--spacing-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.workflow-step:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-md);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--bg-gradient);
  color: var(--text-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

.step-content h4 {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-xs);
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
}

.step-icon {
  font-size: 2rem;
}

/* 优势区域 */
.advantages-grid {
  gap: var(--spacing-lg);
}

.advantage-card {
  text-align: center;
  padding: var(--spacing-xl);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: var(--transition);
}

.advantage-card:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-lg);
}

.advantage-card h3 {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.advantage-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.advantage-metrics .metric {
  background: var(--bg-gradient);
  color: var(--text-white);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-sm);
  font-weight: 600;
}

/* 页面操作区 */
.page-actions {
  margin-top: var(--spacing-2xl);
}

.actions-card {
  background: var(--bg-gradient);
  color: var(--text-white);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.actions-card h3 {
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-lg);
}

.actions-card p {
  font-size: var(--text-lg);
  opacity: 0.9;
  margin-bottom: var(--spacing-xl);
}

.action-buttons {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* 响应式 */
@media (max-width: 768px) {
  .comparison-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .workflow-step {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-md);
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>