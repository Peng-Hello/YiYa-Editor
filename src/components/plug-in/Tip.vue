<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { nanoid } from "nanoid";
let rand_id = nanoid();
</script>
<template>
  <li :id="rand_id" ref="input_li" class="w-full flex mb-2 dragula-container">
    <div class="w-2 h-36 bg-green-400"></div>
    <div class="flex-grow bg-slate-300 text-center">sss</div>
  </li>
</template>
