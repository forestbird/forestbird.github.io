// helper.js - 自动生成带Front Matter的侧边栏
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否生产环境
  if (window.location.hostname === 'forestbird.github.io') {
    loadPostsFromGitHub();
  } else {
    // 本地开发使用模拟数据
    loadMockPosts();
  }
});

/**
 * 从GitHub API加载文章数据
 */
async function loadPostsFromGitHub() {
  try {
    // 1. 获取_posts目录下的文件列表
    const response = await fetch('https://api.github.com/repos/forestbird/forestbird.github.io/contents/_posts');
    if (!response.ok) throw new Error('无法加载文章列表');
    
    const files = await response.json();
    const mdFiles = files.filter(file => 
      file.name.endsWith('.md') && file.type === 'file'
    );
    
    // 2. 并行获取所有文章内容和Front Matter
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
          date: fm.date || '',
          author: fm.author || '',
          tags: fm.tags || '',
          cover: fm.cover || ''
        };
      })
    );
    
    // 3. 生成侧边栏
    generateSidebar(posts);
    
    // 4. 可选：生成封面页
    generateCoverPage(posts.slice(0, 5));
    
  } catch (error) {
    console.error('加载文章失败:', error);
    loadMockPosts(); // 回退到模拟数据
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
 * 生成侧边栏内容
 */
function generateSidebar(posts) {
  // 按日期降序排序
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
  let sidebarContent = `# 导航\n\n- [🏠 首页](/)\n- [📚 所有文章\n`;
  
  // 按年份倒序添加文章
  Object.keys(postsByYear)
    .sort()
    .reverse()
    .forEach(year => {
      sidebarContent += `  - **${year}年**\n`;
      
      postsByYear[year].forEach(post => {
        sidebarContent += `    - [${post.title}](/${post.path})`;
        
        if (post.date) {
          sidebarContent += ` <small class="article-date">${post.date}</small>`;
        }
        
        if (post.tags) {
          sidebarContent += `  \n      ${post.tags.split(',').map(tag => 
            `<span class="tag">${tag.trim()}</span>`
          ).join(' ')}`;
        }
        
        sidebarContent += '\n';
      });
    });
  
  // 添加其他链接
  sidebarContent += `\n- [📝 关于我](/about)\n`;
  sidebarContent += `- [🔍 标签分类](/tags)\n`;
  sidebarContent += `- [💻 GitHub项目](https://github.com/forestbird)\n`;
  
  // 使用Docsify虚拟文件系统更新侧边栏
  updateVirtualFile('_sidebar.md', sidebarContent);
}

/**
 * 生成封面页（可选）
 */
function generateCoverPage(featuredPosts) {
  let coverContent = `# ForestBird的知识库 \n\n> 记录学习与成长的点点滴滴\n\n`;
  
  // 添加精选文章
  coverContent += `## 精选文章\n\n`;
  featuredPosts.forEach(post => {
    coverContent += `- [${post.title}](/${post.path}) - ${post.date}\n`;
  });
  
  coverContent += `\n[进入知识库 →](/README)`;
  
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
      date: '2023-08-25',
      author: 'ForestBird',
      tags: '介绍, 开始',
      cover: '/images/hello.jpg'
    },
    {
      path: '_posts/docsify-guide.md',
      name: 'docsify-guide',
      title: 'Docsify使用指南',
      date: '2023-08-20',
      author: 'ForestBird',
      tags: '技术, 文档'
    },
    {
      path: '_posts/github-pages.md',
      name: 'github-pages',
      title: 'GitHub Pages部署',
      date: '2023-08-15',
      author: 'ForestBird',
      tags: '技术, GitHub'
    }
  ];
  
  generateSidebar(mockPosts);
  generateCoverPage(mockPosts);
}
