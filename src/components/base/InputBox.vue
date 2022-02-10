<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { nanoid } from "nanoid";
let store = useStore();
let rand_id = nanoid();
let allowEdit = computed(() => store.state.allowEdit);
</script>
<template>
  <li
    :id="rand_id"
    ref="input_li"
    class="w-full flex space-x-2 mb-2 dragula-container"
  >
    <div
      class="w-full inline-block outline-none bg-red-300"
      :contenteditable="allowEdit"
    ></div>
  </li>
</template>
