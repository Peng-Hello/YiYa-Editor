<p align="center">
<a href="https://peng-hello.github.io/YiYaDemo/">
<img src="./readme_src/logo2.png">
</a>
<p>
<img src="https://img.shields.io/badge/build-passing-brightgreen">
<img src="https://img.shields.io/github/license/Peng-Hello/YiYa-Editor">
<img src="https://img.shields.io/badge/version-v1.1-blue">
</p>
</p>

[English version](./readme_src/en.md)

# 一. 介绍

YiYa 编辑器是使用 Vite+Vue3+Tailwind 来构建的一款开源的编辑器。适用于模块化笔记，博客文章的撰写。它不同于传统的富文本编辑器。它的主要的好处在于支持拖拽（快速，灵活的布局），自定义组件（满足各种工作场景）。它的设计灵感主要来自于 Notion 。

# 二. Demo 展示

![Demo 展示](./readme_src/demo.gif)

# 三. 在线 Demo

https://peng-hello.github.io/YiYaDemo/

# 四. 项目结构

```shell
|-- YiYa
    |-- README.md
    |-- tailwind.config.js
    |-- vite.config.js
    |-- yiya.config.js
    |-- readme_src #README Src
    |   |-- demo.gif
    |   |-- logo.png
    |   |-- logo2.png
    |-- public
    |   |-- favicon.ico
    |-- src
    |   |-- App.vue
    |   |-- main.js
    |   |-- assets # 静态资源
    |   |   |-- logo.png
    |   |   |-- js
    |   |       |-- asynchronously.js # 主要为了可以在自定义组件里写Javascript
    |   |       |-- componentsLoadder.js #用于加载组件到页面
    |   |       |-- decoder.js # 对保存的数据进行解码
    |   |       |-- encoder.js # 对页面资料进行编码，方便保存
    |   |       |-- initTemplate.js # 初始化自定义组件
    |   |       |-- testdata.js # 保存的页面数据
    |   |       |-- toolbox.js # 封装了一些常用函数
    |   |-- components
    |       |-- base # 编辑器基础组件
    |       |   |-- blank.vue # 这个要初始化时加载在底部，防止最后一个元素上下拖动发生错误
    |       |   |-- Decorate.vue # Banner 组件
    |       |   |-- Editor.vue # 编辑器主体
    |       |   |-- InputBox.vue # 命令输入块
    |       |-- plug-in # 自定义组件
    |           |-- Interval.vue # 居中块
    |           |-- Ol.vue # 有序列表
    |           |-- Template.vue # 自定义组件参考模板
    |-- store
        |-- index.js
```

# 五. 安装&构建

### 安装

```shell
cd .\YiYa
npm install
```

### 安装

```shell
npm run build
```

### 启动

```shell
#开发环境
npm run dev

#生产环境
npm run preview

#构建同时启动生产环境
npm run ptest
```

# 六. 快速开始

见在线 Demo https://peng-hello.github.io/YiYaDemo/

# 七. 怎么样开发自定义组件

### 说明: 由于各种取舍的原因，这里的编程可能跟以往的编程有些不太一样。

1. 在`'./src/components/plug-in/'`目录下创建 `.vue` 文件，文件名即为命令名
2. 把 `./src/components/plug-in/Template.vue` 文件里的代码复制到你的文件里。（这样做是为了避免不必要的错误）
3. 关注 `<template></template>` 标签里的这段代码里的 `classList` 包含了一个叫 `com-yourcmd` 的 class。把 `com-yourcmd` 里的 `yourcmd` 替换成你的文件名

```html
<div :id="idCard" class="w-full no_inputBox flex flex-grow com-yourcmd drag">
  some code......
</div>
```

4. 关注 `<template></template>` 标签里的这段代码里的 `classList` 包含了一个叫 `com-yourcmd` 的 class。把 `com-yourcmd` 里的 `yourcmd` 替换成你的文件名

```html
<p
  ref="ctrl_plane"
  v-show="show"
  class="shadow-md rounded-md bg-white flex items-center com-yourcmd flex-grow-0 space-x-1 w-16 justify-center mr-6"
>
  some code.....
</p>
```

5. 在 `<template></template>` 标签里的如下的地方写你的 HTML 代码。

```html
<!-- 正文 -->
<div ref="content" class="flex-grow h-full savePart">
  <!-- 你的HTML代码 -->
</div>
```

6. 为 HTML 写下 Javascript 代码，需要在 Vue 的 onMounted 方法里引用 `asynchronously.js` 里的 `asynchronously` 方法。然后像这样写

```js
onMounted(() => {
  asynchronously(() => {
    //your code.....
  });
});
```

7. 通过以前的 `document.getElementById()`是获取不到 Dom 元素的。你需要这样做：引入 `asynchronously.js` 里的 `getSelect(idCard, selector)`。`idCard`字段为一串的身份 id。`selector`字段是选择器字段。以下是范例：

```js
onMounted(() => {
  asynchronously(() => {
    let el = getSelect(idCard, "#targetEl");
    console.log(el);
    //your code.....
  });
});
```

# 八. 更新日志

- 增加了更改文字颜色
- 可以对选中的文字添加超链接（有待完善）
- 增加上下角标功能
- 增加了代码块插件，支持代码高亮（按刷新按钮可以刷新）。命令`'/code'`
- 修复了一些移动端界面显示的 Bug
