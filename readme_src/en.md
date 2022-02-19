<p align="center">
<a href="https://peng-hello.github.io/YiYaDemo/">
<img src="./logo2.png">
</a>
</p>

# 一. Introduce

YiYa editor is an open source editor built with Vite+Vue3+Tailwind. Suitable for modular notes, blog post writing. It is different from traditional rich text editors. Its main benefit is to support drag and drop (fast, flexible layout), custom components (to meet various work scenarios). Its design inspiration mainly comes from Notion.

# 二. Demo Preview

![Demo](./demo.gif)

# 三. Online Demo

https://peng-hello.github.io/YiYaDemo/

# 四. Project Structure

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
    |   |-- assets # Static resources
    |   |   |-- logo.png
    |   |   |-- js
    |   |       |-- asynchronously.js # Mainly to be able to write Javascript in custom components
    |   |       |-- componentsLoadder.js # Used to load components to the page
    |   |       |-- decoder.js # Decode the saved data
    |   |       |-- encoder.js # Encode page data for easy storage
    |   |       |-- initTemplate.js # Initialize custom components
    |   |       |-- testdata.js # Saved page data
    |   |       |-- toolbox.js # Some common functions are encapsulated
    |   |-- components
    |       |-- base # Editor Basic Components
    |       |   |-- blank.vue # This should be loaded at the bottom when it is initialized to prevent the last element from dragging up and down to prevent errors
    |       |   |-- Decorate.vue # Banner Components
    |       |   |-- Editor.vue # Editor body
    |       |   |-- InputBox.vue # Command input block
    |       |-- plug-in # Custom component
    |           |-- Interval.vue # Center block
    |           |-- Ol.vue # Ordered list
    |           |-- Template.vue # Custom Component Reference Template
    |-- store
        |-- index.js
```

# 五. Install & Build

### Install

```shell
cd .\YiYa
npm install
```

### Build

```shell
npm run build
```

### Start Up

```shell
#Development environment
npm run dev

#Production Environment
npm run preview

#Build and start production environment
npm run ptest
```

# 六. Quick Start

See online demo https://peng-hello.github.io/YiYaDemo/

# 七. How to develop custom components

### Note: Due to various trade-offs, the programming here may be somewhat different from the previous programming.

1. Create a `.vue` file in the `'./src/components/plug-in/'` directory, the file name is the command name
2. Copy the code from the `./src/components/plug-in/Template.vue` file to your file. (This is done to avoid unnecessary mistakes)
3. Notice that the `classList` in this code inside the `<template></template>` tag contains a class called `com-yourcmd`. Replace `yourcmd` in `com-yourcmd` with your filename

```html
<div :id="idCard" class="w-full no_inputBox flex flex-grow com-yourcmd drag">
  some code......
</div>
```

4. Notice that the `classList` in this code inside the `<template></template>` tag contains a class called `com-yourcmd`. Replace `yourcmd` in `com-yourcmd` with your filename

```html
<p
  ref="ctrl_plane"
  v-show="show"
  class="shadow-md rounded-md bg-white flex items-center com-yourcmd flex-grow-0 space-x-1 w-16 justify-center mr-6"
>
  some code.....
</p>
```

5. Write your HTML code inside the `<template></template>` tag as follows.

```html
<!-- text -->
<div ref="content" class="flex-grow h-full savePart">
  <!-- Your HTML code -->
</div>
```

6. To write Javascript code for HTML, you need to reference the `asynchronously` method in `asynchronously.js` in Vue's onMounted method. then write like this

```js
onMounted(() => {
  asynchronously(() => {
    //your code.....
  });
});
```

7. The Dom element cannot be obtained through the previous `document.getElementById()`. You need to do this: import `getSelect(idCard, selector)` in `asynchronously.js`. The `idCard` field is a string of identity ids. The `selector` field is the selector field. Here is an example:

```js
onMounted(() => {
  asynchronously(() => {
    let el = getSelect(idCard, "#targetEl");
    console.log(el);
    //your code.....
  });
});
```
