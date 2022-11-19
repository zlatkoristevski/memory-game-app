<script setup lang="ts">
import { computed } from "vue";
type ButtonSizes = "sm" | "md" | "lg";
const props = withDefaults(
  defineProps<{
    text: string;
    size: ButtonSizes;
    hoverScaleEffect: boolean;
    active: boolean;
  }>(),
  {
    size: "lg",
    text: "",
    hoverScaleEffect: true,
    active: false
  }
);

const emit = defineEmits<{
  (e: "click"): void;
}>();

const btnClicked = () => {
  emit("click");
};

const classes = computed(() => {
  let classes = `btn btn-${props.size}`;
  if (props.hoverScaleEffect) classes = `${classes} btn-scale-effect`;
  if (props.active) classes = `${classes} btn-active`;

  return classes;
});
</script>

<template>
  <button :class="classes" @click="btnClicked">{{ props.text }}<slot></slot></button>
</template>

<style scoped>
.btn {
  @apply bg-black 
  text-white 
  border-white
  cursor-pointer
  hover:bg-white hover:text-black hover:border-black;
}

.btn-active {
  @apply bg-white text-black border-black;
}

.btn-scale-effect {
  @apply transition 
    ease-in-out delay-100
    hover:-translate-y-1 
    hover:scale-110;
}

.btn-lg {
  @apply border-4 rounded-3xl 
    p-4 pl-8 pr-8
    text-6xl;
}

.btn-md {
  @apply border-4 rounded-2xl 
    p-2 pl-3 pr-3 
    text-4xl;
}

.btn-sm {
  @apply p-1 pl-4 pr-4 
    rounded-2xl 
    text-lg
    border-4;
}
</style>
