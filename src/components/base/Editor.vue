<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import dragula from "dragula";
import keyjs from "keyboardjs";
import {
  addShell,
  applyWidth,
  bindEditorSetting,
} from "../../assets/js/toolbox";
import config from "../../../yiya.config";
import { nanoid } from "nanoid";
let store = useStore();
let componentsList = computed(() => store.state.loadList);
onMounted(() => {
  bindEditorSetting(store);
  let allowDrag = false;
  keyjs.bind(
    config.hotkeySettings.allow_drag_key,
    (e) => {
      allowDrag = true;
    },
    (e) => {
      allowDrag = false;
    }
  );
  dragula([document.getElementById("componentContainer")], {
    isContainer: function (el) {
      return el.classList.contains("dragula-container");
    },
    moves: function (el, source, handle, sibling) {
      return allowDrag;
    },
  }).on("drop", (el, target, source, sibling) => {
    //用户操作分类讨论
    if (
      source.parentNode.id == "componentContainer" &&
      target.classList.contains("dragula-container")
    ) {
      //大容器进入小容器
      console.log("大容器进入小容器");
      //销毁原容器
      if (source.innerHTML == "") {
        source.parentNode.removeChild(source);
      }
      //宽度自适应
      applyWidth(target);
    }
    if (source.childNodes.length >= 1 && target.id == "componentContainer") {
      //小容器进大容器
      console.log("小容器进入大容器");
      //添加外衣
      addShell("afterend", el, source);
      //宽度自适应:恢复
      applyWidth(source);
      applyWidth(el.parentNode);
    }
    if (source.childNodes.length < 1 && target == source.parentNode) {
      //上下交换
      console.log("上下交换");

      new Promise((resolve, reject) => {
        addShell("beforebegin", el, sibling);
        resolve();
      }).then(() => {
        //垃圾回收
        //可以考虑加一个垃圾回收类gc
        let childList =
          document.getElementById("componentContainer").childNodes;
        for (let index = 0; index < childList.length; index++) {
          if (childList[index].innerHTML == "") {
            childList[index].parentNode.removeChild(childList[index]);
          }
        }
        //end
      });
    }
  });

  //
});
</script>
<template>
  <!-- 编辑器 -->
  <div class="w-full h-screen flex flex-row mt-16 sm:mt-7">
    <!-- 左边栏 -->
    <div class="sm:w-1/5 sm:h-full sm:grow-0"></div>
    <!-- 编辑器 -->
    <div
      id="editor"
      class="w-2/4 grow shadow-xl bg-white mt-1 rounded-md p-5"
      style="border-width: 1px"
    >
      <ul id="componentContainer" class="h-full">
        <keep-alive>
          <component
            v-for="(component, index) in componentsList"
            :key="index"
            :is="component"
          />
        </keep-alive>
      </ul>
    </div>
    <!-- 右边栏 -->
    <div class="sm:w-1/5 sm:grow-0"></div>
  </div>
</template>
<style scoped></style>
