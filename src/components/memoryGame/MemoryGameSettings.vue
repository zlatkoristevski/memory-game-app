<script setup lang="ts">
import { ref } from "vue";
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

const gameTypes = ref<MemoryGameType[]>(["faces", "flags", "icons"]);

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
      v-for="(type, i) in gameTypes"
      :key="type"
      size="sm"
      class="mr-1"
      :text="type.toUpperCase()"
      @click="playWith(type)"
      :hover-scale-effect="false"
      :active="props.activeGameType === type"
    ></AppButton>
  </Popup>
</template>

<style scoped>
div {
  @apply text-black;
}
</style>
