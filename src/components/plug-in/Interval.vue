<script setup>
import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
import { bind_plane_show, init_del_btn } from "../../assets/js/initTemplate";
import { asynchronously, getSelect } from "../../assets/js/asynchronously";
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
  //have a last bug
  init_del_btn(e);
}

//重置事件
function reset_click() {}
onMounted(() => {
  asynchronously(() => {
    let el = getSelect(idCard, "#box");
  });
});
</script>
<template>
  <li :id="rand_id" ref="input_li" class="w-full flex mb-2 dragula-container">
    <div
      :id="idCard"
      class="w-full no_inputBox flex flex-grow com-interval drag"
    >
      <p
        ref="ctrl_plane"
        v-show="show"
        class="shadow-md rounded-md bg-white flex items-center com-interval flex-grow-0 space-x-1 w-16 justify-center mr-6"
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
      <div ref="content" class="flex-grow h-full savePart">
        <div class="w-full h-full flex justify-center">
          <div
            id="box"
            contenteditable="true"
            class="outline-none h-full"
          ></div>
        </div>
      </div>
    </div>
  </li>
</template>
