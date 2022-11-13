<script setup lang="ts"></script>

<template>
  <div>
    <div class="container mx-auto mt-10">
      <slot name="title">Page title...</slot>
    </div>
    <div class="page-layout">
      <slot name="body">Page body...</slot>
    </div>
  </div>
</template>

<style scoped>
.page-layout {
  @apply container 
   mx-auto 
   mt-10 mb-10 p-2
   
   bg-white 
   rounded-4xl
   
   sm:p-2
   md:p-4
   xl:p-10
   max-sm:rounded-xl
   max-md:rounded-2xl;
}
</style>
