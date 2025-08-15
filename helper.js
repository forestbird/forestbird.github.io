// helper.js - 支持任意文件名的自动生成系统
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hostname === 'forestbird.github.io') {
    loadPostsFromGitHub();
  } else {
    loadMockPosts();
  }
});

/**
 * 从GitHub API加载文章数据（支持任意文件名）
 */
async function loadPostsFromGitHub() {
  try {
    // 获取_posts目录下的文件列表
    const response = await fetch(
      'https://api.github.com/repos/forestbird/forestbird.github.io/contents/_posts'
    );
    
    if (!response.ok) throw new Error('无法加载文章列表: ' + response.status);
    
    const files = await response.json();
    const mdFiles = files.filter(file => 
      file.name.endsWith('.md') && file.type === 'file'
    );
    
    // 并行获取所有文章内容和Front Matter
    const posts = await Promise.all(
      mdFiles.map(async file => {
        const contentResponse = await fetch(file.download_url);
        const content = await contentResponse.text();
        const fm = parseFrontMatter(content);
        
        return {
          path: file.path,
          name: file.name.replace('.md', ''),
          download_url: file.download_url,
          title: fm.title || file.name.replace('.md', ''),
          date: fm.date || file.created_at.substring(0, 10), // 使用GitHub创建日期
          author: fm.author || 'ForestBird',
          tags: fm.tags || '',
          cover: fm.cover || '',
          excerpt: fm.excerpt || generateExcerpt(content, 150) // 自动生成摘要
        };
      })
    );
    
    // 生成侧边栏和封面页
    generateSidebar(posts);
    generateCoverPage(posts);
    
  } catch (error) {
    console.error('加载文章失败:', error);
    loadMockPosts();
  }
}

/**
 * 解析Front Matter
 */
function parseFrontMatter(content) {
  const result = {};
  const fmMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
  
  if (fmMatch) {
    fmMatch[1].split('\n').forEach(line => {
      const separatorIndex = line.indexOf(':');
      if (separatorIndex > -1) {
        const key = line.substring(0, separatorIndex).trim();
        let value = line.substring(separatorIndex + 1).trim();
        
        // 处理带引号的值
        if (/^['"].*['"]$/.test(value)) {
          value = value.substring(1, value.length - 1);
        }
        
        result[key] = value;
      }
    });
  }
  
  return result;
}

/**
 * 自动生成文章摘要
 */
function generateExcerpt(content, maxLength = 120) {
  // 移除Front Matter
  const contentWithoutFM = content.replace(/^---[\s\S]*?---/, '');
  
  // 移除Markdown格式
  const plainText = contentWithoutFM
    .replace(/(#+\s*)/g, '')    // 移除标题
    .replace(/(\*{1,2}|_{1,2})(.*?)\1/g, '$2') // 移除粗体/斜体
    .replace(/!?\[(.*?)\]\(.*?\)/g, '$1')      // 移除图片/链接
    .replace(/<\/?[^>]+>/g, '')                // 移除HTML标签
    .replace(/\n/g, ' ')                       // 换行转空格
    .replace(/\s{2,}/g, ' ')                   // 合并多个空格
    .trim();
  
  // 截取摘要
  if (plainText.length <= maxLength) return plainText;
  return plainText.substring(0, maxLength) + '...';
}

/**
 * 生成侧边栏内容（按日期分组）
 */
function generateSidebar(posts) {
  // 按日期降序排序（最新在前）
  posts.sort((a, b) => {
    const dateA = a.date ? new Date(a.date) : new Date(0);
    const dateB = b.date ? new Date(b.date) : new Date(0);
    return dateB - dateA;
  });
  
  // 按年份分组
  const postsByYear = posts.reduce((acc, post) => {
    const year = post.date ? post.date.substring(0, 4) : '未分类';
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});
  
  // 生成侧边栏Markdown内容
  let sidebarContent = `# 🧭 导航\n\n`;
  sidebarContent += `- [🏠 首页](/)\n`;
  sidebarContent += `- [📚 所有文章](#)\n`;
  
  // 按年份倒序添加文章
  Object.keys(postsByYear)
    .sort((a, b) => b - a) // 降序排列年份
    .forEach(year => {
      sidebarContent += `  - **${year}年**\n`;
      
      postsByYear[year].forEach(post => {
        sidebarContent += `    - [${post.title}](/${post.path})`;
        
        if (post.date) {
          sidebarContent += ` <small class="article-date">${post.date}</small>`;
        }
        
        sidebarContent += '\n';
      });
    });
  
  // 添加其他链接
  sidebarContent += `\n- [🔖 标签分类](/tags)\n`;
  sidebarContent += `- [👤 关于作者](/about)\n`;
  sidebarContent += `- [💻 GitHub项目](https://github.com/forestbird)\n`;
  
  // 更新虚拟文件
  updateVirtualFile('_sidebar.md', sidebarContent);
}

/**
 * 生成封面页（展示最新文章）
 */
function generateCoverPage(posts) {
  // 按日期排序获取最新文章
  const latestPosts = [...posts].sort((a, b) => 
    new Date(b.date || 0) - new Date(a.date || 0)
  ).slice(0, 5); // 只取前5篇
  
  let coverContent = `# 🌳 ForestBird的知识库 \n\n`;
  coverContent += `> 记录学习与成长的点点滴滴\n\n`;
  
  // 添加精选文章
  coverContent += `## 🔥 最新文章\n\n`;
  
  latestPosts.forEach(post => {
    coverContent += `### [${post.title}](/_posts/${post.name}.md)\n`;
    coverContent += `> ${post.excerpt}\n`;
    
    if (post.date) {
      coverContent += `<small>发布日期：${post.date}</small>\n\n`;
    } else {
      coverContent += `<small>未指定日期</small>\n\n`;
    }
  });
  
  coverContent += `\n[浏览全部文章 →](#)\n\n`;
  coverContent += `[GitHub仓库](https://github.com/forestbird/forestbird.github.io) | [联系作者](mailto:forestbird@example.com)`;
  
  updateVirtualFile('_coverpage.md', coverContent);
}

/**
 * 更新虚拟文件
 */
function updateVirtualFile(filename, content) {
  const existing = document.querySelector(`[data-app-id="virtual-${filename}"]`);
  if (existing) existing.remove();
  
  Docsify.dom.append(`
    <div data-app-id="virtual-${filename}" 
         style="display:none;" 
         data-url="/${filename}" 
         data-content="${encodeURIComponent(content)}">
    </div>
  `);
  
  // 触发Docsify重新加载
  if (window.$docsify) {
    const router = Docsify.get('main').router;
    if (router) router.reload();
  }
}

/**
 * 本地开发使用的模拟数据
 */
function loadMockPosts() {
  const mockPosts = [
    {
      path: '_posts/hello-world.md',
      name: 'hello-world',
      title: '你好，世界！',
      date: '2023-08-28',
      author: 'ForestBird',
      tags: '介绍, 开始',
      cover: '/images/hello.jpg',
      excerpt: '这是我的第一篇博客文章，介绍如何使用Docsify和GitHub Pages构建个人知识库。'
    },
    {
      path: '_posts/docsify-tutorial.md',
      name: 'docsify-tutorial',
      title: 'Docsify高级教程',
      date: '2023-08-25',
      author: 'ForestBird',
      tags: '技术, 文档',
      cover: '/images/docsify.jpg',
      excerpt: '深入探索Docsify的高级功能，包括自定义主题、插件开发和性能优化。'
    },
    {
      path: '_posts/github-pages-guide.md',
      name: 'github-pages-guide',
      title: 'GitHub Pages完全指南',
      author: 'ForestBird', // 没有日期
      tags: '技术, GitHub',
      cover: '/images/github.jpg',
      excerpt: '从基础到高级，全面掌握GitHub Pages的部署技巧和最佳实践。'
    }
  ];
  
  generateSidebar(mockPosts);
  generateCoverPage(mockPosts);
}
