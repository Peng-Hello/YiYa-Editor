<script setup></script>
<template>
  <!-- banner -->
  <div class="w-full h-44 relative">
    <img
      src="http://121.37.90.57:3000/api/random/img"
      alt=""
      class="min-w-full w-full sm:h-full sm:w-full sm:object-cover absolute"
    />
    <div
      class="absolute sm:-bottom-3.5 -bottom-1/3 w-2/3 flex"
      style="left: 20%"
    >
      <div class="text-7xl">😀</div>
      <div class="ml-6">
        <input
          id="title"
          type="text"
          class="outline-none bg-transparent sm:text-3xl text-white w-3/4 text-xl"
        />
        <input
          id="tag"
          type="text"
          class="outline-none bg-transparent text-xs text-white"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
