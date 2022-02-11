<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { nanoid } from "nanoid";
import { loadderComponent } from "../../assets/js/componentsLoadder";
let store = useStore();
let rand_id = nanoid();
let allowEdit = computed(() => store.state.allowEdit);

//ref
let input_div = ref(null);
onMounted(() => {
  //颜色辅助
  input_div.value.addEventListener("mouseenter", (e) => {
    input_div.value.classList.add("bg-red-300");
  });
  input_div.value.addEventListener("mouseleave", (e) => {
    input_div.value.classList.remove("bg-red-300");
  });
  //语法解析
  input_div.value.addEventListener("input", (e) => {
    let el = input_div.value;
  });
});
</script>
<template>
  <li :id="rand_id" class="w-full flex space-x-2 mb-2 dragula-container">
    <div
      ref="input_div"
      class="w-full inline-block outline-none"
      :contenteditable="allowEdit"
    ></div>
  </li>
</template>
