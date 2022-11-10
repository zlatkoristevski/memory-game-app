<script setup lang="ts"></script>

<template>
  <div class="container mx-auto mt-10">
    <slot name="title">Page title...</slot>
  </div>
  <div class="container mx-auto mt-10 mb-10 p-10 bg-white rounded-3xl">
    <slot name="body">Page body...</slot>
  </div>
</template>
