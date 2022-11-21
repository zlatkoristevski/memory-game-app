<script setup lang="ts">
import { ref } from "vue";
import Popup from "@/components/Popup.vue";
import AppButton from "@/components/AppButton.vue";
import type { MemoryGameType } from "./types";

const props = withDefaults(
  defineProps<{
    activeGameType: MemoryGameType;
    gameCardsLength: number;
  }>(),
  {
    activeGameType: "flags",
    gameCardsLength: 10
  }
);

const gameTypes = ref<MemoryGameType[]>(["faces", "flags", "icons"]);
const gameType = ref<MemoryGameType>(props.activeGameType);
const noOfCards = ref<string | number>(props.gameCardsLength);

const emit = defineEmits<{
  (e: "typeOfPlay", type: MemoryGameType): void;
  (e: "noOfCards", noOfCards: string | number): void;
  (e: "closePopup"): void;
}>();

const setType = (type: MemoryGameType) => {
  gameType.value = type;
};
const closePopup = () => {
  emit("closePopup");
  emit("typeOfPlay", gameType.value);
  emit("noOfCards", noOfCards.value);
};

const increaceNoOfCards = () => {
  noOfCards.value = Number(noOfCards.value) + 1;
};

const decreaceNoOfCards = () => {
  noOfCards.value = Number(noOfCards.value) - 1;
};
</script>

<template>
  <Popup @closePopup="closePopup">
    <h1 class="text-6xl mb-10">Settings</h1>
    <div class="settings-content">
      <div class="flex items-center mb-4">
        <div class="flex items-center text-2xl mr-5">Type of cards:</div>
        <AppButton
          v-for="(type, i) in gameTypes"
          :key="type"
          size="sm"
          class="mr-1"
          :text="type.toUpperCase()"
          @click="setType(type)"
          :hover-scale-effect="false"
          :active="gameType === type"
        ></AppButton>
      </div>
      <div class="flex items-center mb-4">
        <div class="flex items-center text-2xl mr-5">Number of cards to guess:</div>
        <AppButton size="sm" text="-" @click="decreaceNoOfCards()" :hover-scale-effect="false"></AppButton>
        <div class="text-2xl ml-4 mr-4">{{ noOfCards }}</div>
        <AppButton size="sm" text="+" @click="increaceNoOfCards()" :hover-scale-effect="false"></AppButton>
      </div>
    </div>

    <div class="flex justify-end">
      <AppButton size="md" text="Close" @click="closePopup()" :hover-scale-effect="false"></AppButton>
    </div>
  </Popup>
</template>

<style scoped>
div {
  @apply text-black;
}
</style>
