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
  let auxiliaryColor = "bg-slate-50";
  //颜色辅助
  input_div.value.addEventListener("mouseenter", (e) => {
    input_div.value.classList.add(auxiliaryColor);
  });
  input_div.value.addEventListener("mouseleave", (e) => {
    input_div.value.classList.remove(auxiliaryColor);
  });
  //语法解析
  input_div.value.addEventListener("input", (e) => {
    let el = input_div.value;
  });
});
</script>
<template>
  <li :id="rand_id" class="w-full flex mb-2 dragula-container">
    <div
      ref="input_div"
      class="w-full inline-block outline-none flex-grow input_div savePart com-inputbox drag"
      :contenteditable="allowEdit"
    ></div>
  </li>
</template>
