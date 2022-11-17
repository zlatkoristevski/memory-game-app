<script setup lang="ts">
type ButtonSizes = "sm" | "md" | "lg";
const props = withDefaults(
  defineProps<{
    text: string;
    size: ButtonSizes;
  }>(),
  {
    size: "lg",
    text: ""
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const btnClicked = () => {
  emit("click");
};
</script>

<template>
  <button :class="`btn-${size}`" @click="btnClicked">{{ props.text }}<slot></slot></button>
</template>

<style scoped>
.btn-lg {
  @apply transition 
    ease-in-out delay-100 
    border-4 rounded-3xl border-white 
    cursor-pointer 
    p-4 pl-8 pr-8
    bg-black 
    text-white text-6xl
    hover:-translate-y-1 
    hover:scale-110 
    hover:bg-white hover:text-black hover:border-black;
}

.btn-md {
  @apply transition 
    ease-in-out delay-100 
    border-4 rounded-2xl 
    cursor-pointer 
    p-2 pl-3 pr-3 
    border-white 
    bg-black text-white text-4xl
    hover:bg-white hover:text-black hover:border-black
    hover:-translate-y-1 hover:scale-110;
}

.btn-sm {
  @apply transition
    ease-in-out delay-100 
    cursor-pointer 
    p-1 pl-4 pr-4 
    border-white rounded-2xl 
    bg-black 
    text-white text-lg
    hover:-translate-y-1 
    hover:scale-110 border-4 
    hover:bg-white hover:text-black hover:border-black;
}
</style>
