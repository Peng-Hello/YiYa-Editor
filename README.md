<p align="center">
<a href="https://peng-hello.github.io/YiYaDemo/">
<img src="./img/logo2.png">
</a>
</p>

# 一. 简介

YiYa 编辑器是使用 Vite+Vue3+Tailwind 来构建的一款开源的编辑器。适用于模块化笔记，博客文章的撰写。它不同于传统的富文本编辑器。它的主要的好处在于支持拖拽（快速，灵活的布局），自定义组件（满足各种工作场景）。它的设计灵感主要来自于 Notion 。

# 二. Demo 展示

![Demo 展示](./img/demo.gif)

# 三. 在线 Demo

https://peng-hello.github.io/YiYaDome/

# 四. 项目结构

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

见在线 Demo https://peng-hello.github.io/YiYaDome/

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
