<script setup>
import { ref, onMounted } from "vue";
import { nanoid } from "nanoid";
import { bind_plane_show, init_del_btn } from "../../assets/js/initTemplate";

let rand_id = nanoid();
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

//重置事件
function reset_click() {}
</script>
<template>
  <li :id="rand_id" ref="input_li" class="w-full flex mb-2 dragula-container">
    <div class="w-full no_inputBox flex flex-grow space-x-6 com-ol drag">
      <p
        ref="ctrl_plane"
        v-show="show"
        class="shadow-md rounded-md bg-white flex items-center com-ol flex-grow-0 space-x-1 justify-center"
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
        <div contenteditable="true" class="outline-none h-full w-full">
          <ul class="list-decimal">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>
