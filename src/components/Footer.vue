<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- 左侧信息 -->
        <div class="footer-info">
          <div class="footer-logo">
            <span class="logo-icon">🔗</span>
            <span class="logo-text">MCP 知识库</span>
          </div>
          <p class="footer-description">
            深入了解 Model Context Protocol，探索 AI 与世界连接的无限可能。
          </p>
        </div>
        
        <!-- 快速链接 -->
        <div class="footer-links">
          <div class="link-group">
            <h4>快速导航</h4>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/introduction">MCP 介绍</router-link></li>
              <li><router-link to="/architecture">架构设计</router-link></li>
              <li><router-link to="/quickstart">快速开始</router-link></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4>学习资源</h4>
            <ul>
              <li><router-link to="/examples">示例代码</router-link></li>
              <li><router-link to="/resources">官方文档</router-link></li>
              <li><a href="https://github.com/modelcontextprotocol" target="_blank">GitHub</a></li>
              <li><a href="https://modelcontextprotocol.io" target="_blank">官方网站</a></li>
            </ul>
          </div>
          
          <div class="link-group">
            <h4>社区</h4>
            <ul>
              <li><a href="https://github.com/TwilightGlow/mcp-website-demo/discussions" target="_blank">讨论</a></li>
              <li><a href="https://github.com/TwilightGlow/mcp-website-demo/issues" target="_blank">问题反馈</a></li>
              <li><a href="https://github.com/TwilightGlow/mcp-website-demo" target="_blank">贡献代码</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- 底部版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; 2025 MCP 知识库. 基于 MIT 许可证开源.</p>
          <p>由 <a href="https://github.com/TwilightGlow" target="_blank">TwilightGlow</a> 使用 Vue 3 构建</p>
        </div>
        
        <div class="footer-meta">
          <a href="https://github.com/TwilightGlow/mcp-website-demo" target="_blank" class="github-link">
            <span>⭐</span> 在 GitHub 上给我们 Star
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 这里可以添加任何需要的逻辑
</script>

<style scoped>
.footer {
  background: var(--text-primary);
  color: var(--text-white);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-2xl);
  padding: var(--spacing-2xl) 0;
}

.footer-info {
  max-width: 400px;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: var(--text-xl);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
}

.footer-logo .logo-icon {
  font-size: 2rem;
  margin-right: var(--spacing-sm);
}

.footer-logo .logo-text {
  background: linear-gradient(135deg, #667eea 0%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-description {
  color: #a0aec0;
  line-height: 1.6;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
}

.link-group h4 {
  color: var(--text-white);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
}

.link-group ul {
  list-style: none;
}

.link-group li {
  margin-bottom: var(--spacing-sm);
}

.link-group a {
  color: #a0aec0;
  transition: var(--transition-fast);
}

.link-group a:hover {
  color: var(--text-white);
  text-decoration: none;
}

.footer-bottom {
  border-top: 1px solid #4a5568;
  padding: var(--spacing-xl) 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright p {
  color: #a0aec0;
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-xs);
}

.copyright a {
  color: #667eea;
}

.github-link {
  display: flex;
  align-items: center;
  background: #667eea;
  color: var(--text-white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: var(--transition);
}

.github-link:hover {
  background: #764ba2;
  transform: translateY(-2px);
  text-decoration: none;
}

.github-link span {
  margin-right: var(--spacing-sm);
}

/* 响应式 */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
  
  .footer-links {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
  }
}
</style>