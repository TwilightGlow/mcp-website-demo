# 🔗 MCP 知识库网站

一个使用 **Vue 3** 构建的 Model Context Protocol (MCP) 知识介绍网站，帮助开发者和用户深入了解这项革命性的 AI 连接技术。

## 🌟 项目特色

- **📚 全面的知识覆盖** - 从基础概念到实际应用的完整介绍
- **🎨 现代化设计** - 响应式布局，优雅的视觉体验
- **⚡ Vue 3 技术栈** - 使用最新的 Vue 3 + Vite + Vue Router + Pinia
- **📱 移动端优化** - 完美适配各种设备尺寸
- **💡 交互式体验** - 丰富的动画和交互效果
- **🔗 丰富的资源链接** - 连接到官方文档和社区资源

## 🚀 在线访问

访问网站：[https://twilightglow.github.io/mcp-website-demo/](https://twilightglow.github.io/mcp-website-demo/)

## 📋 网站内容

### 🏠 首页
- 英雄区域展示 MCP 核心价值
- 特性卡片展示主要功能
- 应用场景介绍
- 快速开始指引

### 🤔 MCP 介绍
- MCP 的基本概念和定义
- 核心目标和价值主张
- 与传统解决方案的对比
- 工作原理详解

### 🏢 架构设计
- **MCP 客户端** - 运行在 AI 助手中的组件
- **MCP 服务器** - 提供特定功能的独立服务
- **协议层** - 定义通信格式和规范

### 🚀 快速开始
- 安装指南
- 创建第一个 MCP 服务器
- 代码示例和最佳实践

### 💻 示例代码
- 完整的 MCP 服务器示例
- 客户端集成指南
- 常见用例和最佳实践

### 📚 学习资源
- 🌐 [MCP 官方网站](https://modelcontextprotocol.io/)
- 📝 [协议规范文档](https://spec.modelcontextprotocol.io/)
- 💙 [GitHub 官方仓库](https://github.com/modelcontextprotocol)
- ⚡ [快速开始指南](https://modelcontextprotocol.io/quickstart)

## 🔧 技术栈

- **前端框架**: Vue 3.4+
- **构建工具**: Vite 5+
- **路由管理**: Vue Router 4+
- **状态管理**: Pinia 2+
- **工具库**: @vueuse/core
- **样式**: CSS3 原生 + CSS 变量
- **字体**: Google Fonts (Inter)
- **部署**: GitHub Pages

## 📜 项目结构

```
mcp-website-demo/
├── public/                 # 静态资源
├── src/
│   ├── components/        # 公共组件
│   │   ├── Navigation.vue   # 导航栏
│   │   ├── Footer.vue       # 页脚
│   │   ├── HeroSection.vue  # 英雄区域
│   │   └── BackToTop.vue    # 返回顶部
│   ├── views/             # 页面组件
│   │   ├── Home.vue         # 首页
│   │   ├── Introduction.vue # MCP 介绍
│   │   ├── Architecture.vue # 架构设计
│   │   ├── QuickStart.vue   # 快速开始
│   │   ├── Examples.vue     # 示例代码
│   │   ├── Resources.vue    # 学习资源
│   │   └── NotFound.vue     # 404 页面
│   ├── router/            # 路由配置
│   ├── stores/            # Pinia 状态管理
│   ├── style.css          # 全局样式
│   ├── App.vue            # 根组件
│   └── main.js            # 入口文件
├── index.html             # HTML 模板
├── vite.config.js         # Vite 配置
├── package.json           # 项目配置
└── README.md              # 项目说明
```

## 🚀 本地开发

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/TwilightGlow/mcp-website-demo.git
cd mcp-website-demo

# 安装依赖
npm install
# 或者
yarn install
```

### 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint
```

### 项目特性

- ✨ **组件化架构** - 可复用的 Vue 组件
- 🎨 **响应式设计** - 支持各种设备尺寸
- ⚡ **性能优化** - 懒加载、代码分割
- 🌍 **SEO 友好** - 元数据管理、语义化 HTML
- 🗺️ **路由切换** - 平滑的页面过渡动画
- 📱 **PWA 支持** - 可添加到主屏幕（计划中）

## 🐛 问题反馈

如果您发现了 Bug 或有改进建议，请通过以下方式联系：

- 🐛 [GitHub Issues](https://github.com/TwilightGlow/mcp-website-demo/issues)
- 💬 [GitHub Discussions](https://github.com/TwilightGlow/mcp-website-demo/discussions)

## 🤝 贡献指南

欢迎为这个项目做出贡献！您可以：

1. 🐛 报告 Bug
2. 💡 提出新功能建议
3. 📚 改进文档内容
4. 🎨 优化设计和用户体验
5. 🔧 提交代码改进

### 提交流程

1. Fork 这个仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📄 许可证

此项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢以下资源和社区：

- 🔗 [Model Context Protocol 团队](https://modelcontextprotocol.io/) - 创造了这项令人兴奋的技术
- 💚 [Vue.js 社区](https://vuejs.org/) - 提供了强大的前端框架
- 🌐 所有为开源社区做出贡献的开发者们

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！**

由 [TwilightGlow](https://github.com/TwilightGlow) 使用 ❤️ 和 Vue 3 构建

</div>