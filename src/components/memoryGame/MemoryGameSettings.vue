<script setup lang="ts">
import Popup from "@/components/Popup.vue";
import AppButton from "@/components/AppButton.vue";
import type { MemoryGameType } from "./types";

const emit = defineEmits<{
  (e: "typeOfPlay", type: MemoryGameType): void;
}>();

const playWith = (type: MemoryGameType) => {
  //   console.log(type);
  emit("typeOfPlay", type);
};
</script>

<template>
  <Popup>
    <AppButton size="sm" text="Flags" @click="playWith('flags')"></AppButton>
    <AppButton size="sm" text="Faces" @click="playWith('faces')"></AppButton>
  </Popup>
</template>

<style scoped>
div {
  @apply text-black;
}
</style>
