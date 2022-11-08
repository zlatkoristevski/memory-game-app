<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();

const emit = defineEmits<{
  (e: "click"): void;
}>();

const btnClicked = () => {
  emit("click");
};
</script>

<template>
  <button class="btn" @click="btnClicked">{{ props.text }}</button>
</template>

<style scoped>
.btn {
  @apply transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 border-4 rounded-3xl cursor-pointer p-4 pl-8 pr-8 mt-6 border-white bg-black text-white hover:bg-white hover:text-black hover:border-black;
  /* border-color: white; */
  font-size: 80px;
}
</style>
