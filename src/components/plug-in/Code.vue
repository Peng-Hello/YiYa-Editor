<script setup>
import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
import hljs from "highlight.js";
import "highlight.js/styles/androidstudio.css";
import { bind_plane_show, init_del_btn } from "../../assets/js/initTemplate";
import { asynchronously, getSelect } from "../../assets/js/asynchronously";

onMounted(() => {
  hljs.highlightAll();
});

let rand_id = nanoid();
let idCard = nanoid();
let show = ref(false);
let ctrl_plane = ref(null);
let content = ref(null);
onMounted(() => {
  let content_el = content.value;
  let ctrl_plane_el = ctrl_plane.value;
  bind_plane_show(content_el, ctrl_plane_el, show);
});
//删除事件
function del_click(e) {
  init_del_btn(e);
}

//点击重置按钮事件
function reset_click() {
  hljs.highlightAll();
}

onMounted(() => {
  asynchronously(() => {
    let el = getSelect(idCard, "#box");
  });
});
</script>
<template>
  <li :id="rand_id" ref="input_li" class="w-full flex mb-2 dragula-container">
    <div :id="idCard" class="w-full no_inputBox flex flex-grow com-code drag">
      <p
        ref="ctrl_plane"
        v-show="show"
        class="shadow-md rounded-md bg-white flex items-center com-code flex-grow-0 space-x-1 w-16 justify-center mr-6"
      >
        <ion-icon name="hand-left-outline" class="handle"></ion-icon
        ><ion-icon
          name="close-circle-outline"
          v-on:click="del_click"
        ></ion-icon>
        <ion-icon
          name="refresh-circle-outline"
          v-on:click="reset_click"
        ></ion-icon>
      </p>
      <!-- 正文 -->
      <div ref="content" class="flex-grow h-full savePart w-full">
        <div class="max-w-full">
          <div class="w-full h-5 bg-slate-600 max-w-full">
            <div class="flex items-center h-full w-16 justify-around">
              <p class="rounded-full bg-red-500 w-3 h-3"></p>
              <p class="rounded-full bg-yellow-500 w-3 h-3"></p>
              <p class="rounded-full bg-green-500 w-3 h-3"></p>
            </div>
          </div>
          <pre><code class="language-javascript outline-none min-h-min " contenteditable="true"></code></pre>
        </div>
      </div>
    </div>
  </li>
</template>
