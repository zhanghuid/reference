Contributing 贡献
====

感谢您对**备忘清单**贡献的兴趣👍👍，是像您这样的人使 [`Quick Reference`](https://jaywcjlove.github.io/reference) 成为如此出色的网站 🎉🎉。随时提交问题和增强请求。

`docs/{filename}.md` 文件将被处理成备忘清单，让我们创建或编辑一个 `markdown` 文件：

## 前沿问题

```markdown
备忘清单 标题
===

这是您可以在 Quick Reference 备忘清单上使用的样式参考！【备忘清单介绍】
```

只需要 `标题<h1>` 和 `介绍` (标题下面)。脚本会自动识别，通过 GitHub Actions 自动发布 [`Quick Reference`](https://jaywcjlove.github.io/reference) 网站。

## 目录结构

```bash
.
├── CONTRIBUTING.md   # 贡献说明
├── Dockerfile
├── LICENSE
├── README.md         # Home(首页) 内容
├── dist              # 编译后的静态资源目录
├── docs              # Markdown 文档（快速参考备忘清单【速查表】）
│   ├── bash.md
│   ├── ....
│   └── yaml.md
├── package.json
└── scripts           # MD 转 HTML 的编译脚本
    ├── assets        # 存放首页 svg 图标文件资源，与 `dosc` 文件名对应
    ├── ....
    └── watch.mjs
```

## CSS 类注释

[`Quick Reference`](https://jaywcjlove.github.io/reference) 使用 [`@wcj/markdown-to-html`](https://github.com/jaywcjlove/markdown-to-html) 转换 `Markdown`，并使用 [`rehype-attr`](https://github.com/jaywcjlove/rehype-attr) 插件让其支持通过其注释语法添加类和样式。此外，您可以在 Quick Reference 备忘清单上使用样式参考：<https://jaywcjlove.github.io/reference/docs/quickreference.html>

最后，参考现有备忘清单的源代码是一个好习惯！

## 首页导航

[`Quick Reference`](https://jaywcjlove.github.io/reference) 的首页存放在仓库的根目录 `README.md`，[`Quick Reference`](https://jaywcjlove.github.io/reference) 是通过这个 `README.md` 自动生成首页导航，下面是导航实例：

```markdown
## Linux 命令

[Cron](./docs/cron.md)<!--rehype:style=background: rgb(239 68 68/var(\-\-bg\-opacity));-->
[Git](./docs/git.md)<!--rehype:style=background: rgb(215 89 62/var(\-\-bg\-opacity));-->
<!--rehype:class=home-card-->
```

首页导航图标存放在 `scripts/assets` 目录中，如果你的备忘清单定义为 `docs/cron.md`，那么你的图标就定义为 `cron.svg` 存放到 `scripts/assets` 目录中，重新编译首页当行菜单就拥有了图标。

- 图标存放在 [`scripts/assets`](https://github.com/jaywcjlove/reference/blob/main/scripts/assets) 目录中
- 图片名称与清单名称保持一致 `cron.md` -> `cron.svg` (注意大小写)
- SVG 图标尺寸 `<svg height="1em" width="1em"`
- SVG 图标颜色使用继承颜色值 `<svg fill="currentColor"`

### 提示配置

```markdown
[Django](./docs/djiango.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=contributing-->
```

添加 `contributing` 类名，会在卡片下方添加 _`👆待完善需要您的参与`_，添加 `data-info=👆看看还缺点儿什么？`，更换默认提示文本。

```markdown
[Django](./docs/djiango.md)<!--rehype:style=background: rgb(12 75 51/var(\-\-bg\-opacity));&class=tag&data-lang=Python-->
```

添加 `class=tag&data-lang=Python` 类名和参数，会在卡片右上角标记 _`Python`_

## 本地开发

```bash
npm i          # 安装依赖
npm run build  # 编译输出 HTML
npm run start  # 监听 md 文件编译输出 HTML
```

或者你也可以使用 `pnpm` 或者 `yarn` 做为包管理器


## 贡献

请参阅[贡献指南](./CONTRIBUTING.md)了解如何开始。一如既往，感谢我们出色的贡献者！

<!--GAMFC--><a href="https://github.com/jaywcjlove" title="小弟调调™">
  <img src="https://avatars.githubusercontent.com/u/1680273?v=4" width="42;" alt="小弟调调™"/>
</a>
<a href="https://github.com/Jack-Zhang-1314" title="fw_qaq">
  <img src="https://avatars.githubusercontent.com/u/82551626?v=4" width="42;" alt="fw_qaq"/>
</a>
<a href="https://github.com/catcto" title="喵仙人">
  <img src="https://avatars.githubusercontent.com/u/5467932?v=4" width="42;" alt="喵仙人"/>
</a>
<a href="https://github.com/CharlotteZeng" title="Chart">
  <img src="https://avatars.githubusercontent.com/u/19461184?v=4" width="42;" alt="Chart"/>
</a>
<a href="https://github.com/demigodliu" title="DemigodLiu">
  <img src="https://avatars.githubusercontent.com/u/30372735?v=4" width="42;" alt="DemigodLiu"/>
</a>
<a href="https://github.com/jasnzhuang" title="Jason Zhuang">
  <img src="https://avatars.githubusercontent.com/u/16612921?v=4" width="42;" alt="Jason Zhuang"/>
</a>
<a href="https://github.com/JetSquirrel" title="JetSquirrel">
  <img src="https://avatars.githubusercontent.com/u/20291255?v=4" width="42;" alt="JetSquirrel"/>
</a>
<a href="https://github.com/gaoxiaoduan" title="coderduan">
  <img src="https://avatars.githubusercontent.com/u/69953511?v=4" width="42;" alt="coderduan"/>
</a>
<a href="https://github.com/cool9203" title="cool9203">
  <img src="https://avatars.githubusercontent.com/u/29609607?v=4" width="42;" alt="cool9203"/>
</a>
<a href="https://github.com/hua03" title="hua03">
  <img src="https://avatars.githubusercontent.com/u/19561959?v=4" width="42;" alt="hua03"/>
</a>
<a href="https://github.com/hweining" title="hweining">
  <img src="https://avatars.githubusercontent.com/u/8973985?v=4" width="42;" alt="hweining"/>
</a>
<a href="https://github.com/liliangrong777" title="liliangrong777">
  <img src="https://avatars.githubusercontent.com/u/58727146?v=4" width="42;" alt="liliangrong777"/>
</a>
<a href="https://github.com/onewesong" title="onewesong">
  <img src="https://avatars.githubusercontent.com/u/17920822?v=4" width="42;" alt="onewesong"/>
</a>
<a href="https://github.com/ryanhex53" title="ryanhex53">
  <img src="https://avatars.githubusercontent.com/u/360426?v=4" width="42;" alt="ryanhex53"/>
</a>
<a href="https://github.com/zxx-457" title="zxx-457">
  <img src="https://avatars.githubusercontent.com/u/114141362?v=4" width="42;" alt="zxx-457"/>
</a>
<a href="https://github.com/lvzhenbo" title="吕振波">
  <img src="https://avatars.githubusercontent.com/u/32427677?v=4" width="42;" alt="吕振波"/>
</a><!--GAMFC-END-->

上图贡献者列表，由 [contributors](https://github.com/jaywcjlove/github-action-contributors) 自动生成贡献者图片。

## License

MIT © [Kenny Wong](https://github.com/jaywcjlove)
