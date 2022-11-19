<script setup lang="ts">
import Popup from "@/components/Popup.vue";
import AppButton from "@/components/AppButton.vue";
import type { MemoryGameType } from "./types";

const props = withDefaults(
  defineProps<{
    activeGameType: MemoryGameType;
  }>(),
  {
    activeGameType: "flags"
  }
);

const emit = defineEmits<{
  (e: "typeOfPlay", type: MemoryGameType): void;
  (e: "closePopup"): void;
}>();

const playWith = (type: MemoryGameType) => {
  //   console.log(type);
  emit("typeOfPlay", type);
};
const closePopup = () => {
  emit("closePopup");
};
</script>

<template>
  <Popup @closePopup="closePopup">
    <AppButton
      size="sm"
      class="mr-1"
      text="Flags"
      @click="playWith('flags')"
      :hover-scale-effect="false"
      :active="props.activeGameType === 'flags'"
    ></AppButton>
    <AppButton
      size="sm"
      text="Faces"
      @click="playWith('faces')"
      :hover-scale-effect="false"
      :active="props.activeGameType === 'faces'"
    ></AppButton>
  </Popup>
</template>

<style scoped>
div {
  @apply text-black;
}
</style>
