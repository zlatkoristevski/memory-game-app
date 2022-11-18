<script setup lang="ts">
import { ref, onUnmounted, computed } from "vue";
import Card from "./Card.vue";
import MemoryGameSettings from "./MemoryGameSettings.vue";
import AppButton from "@/components/AppButton.vue";
import AppFireworks from "@/components/AppFireworks.vue";
import { POSITION, useToast } from "vue-toastification";
import data from "./data";
import {
  generateMemoryGameData,
  checkIfAreTwoCardsOpen,
  checkIfAreCardsGuessed,
  closeUnguessedCards,
  updateStatusOfTheGuessedCards,
  checkIfAllCardsAreGuessed
} from "./memoryGameHelpers";
import type { MemoryGameData, MemoryGameType } from "./types";

let closeUnguessedCardsTimeout: any;
const toast = useToast();

const toastDefaultOptions = {
  timeout: 1000,
  position: POSITION.BOTTOM_CENTER
};
const gameCardsLength = ref<number>(10);
const memoryGameType = ref<MemoryGameType>("faces");
const memoryGameData = ref<MemoryGameData[]>(generateMemoryGameData(memoryGameType.value, data, gameCardsLength.value));
const showFireworks = ref<boolean>(false);
const showSettings = ref<boolean>(false);

const areTwoCardsOpen = computed(() => {
  return checkIfAreTwoCardsOpen(memoryGameData.value);
});

const handleCardClick = (item: MemoryGameData): void => {
  if (!areTwoCardsOpen.value) {
    item.isOpen = true;
    areCardsGuessed();
  }
};

const areCardsGuessed = () => {
  if (areTwoCardsOpen.value) {
    const areGuessed = checkIfAreCardsGuessed(memoryGameData.value);

    if (areGuessed) {
      memoryGameData.value = updateStatusOfTheGuessedCards(memoryGameData.value);

      const playerWon = checkIfAllCardsAreGuessed(memoryGameData.value);

      if (!playerWon) toast.success("Yeeey, keep going!", toastDefaultOptions);
      else showFireworks.value = true;
    } else {
      toast.error("Wrong guess!", toastDefaultOptions);
      closeUnguessedCardsTimeout = setTimeout(() => {
        memoryGameData.value = closeUnguessedCards(memoryGameData.value);
      }, 1500);
    }
  }
};

const changeTypeOfPlay = (newMemoryGameType: MemoryGameType) => {
  // alert(v);
  memoryGameType.value = newMemoryGameType;
  showSettings.value = false;
  resetGame();
};

const resetGame = () => {
  memoryGameData.value = generateMemoryGameData(memoryGameType.value, data, gameCardsLength.value);
  showFireworks.value = false;
};

const openSettings = () => {
  showSettings.value = true;
};

onUnmounted(() => {
  clearTimeout(closeUnguessedCardsTimeout);
});
</script>

<template>
  <div class="memory-game">
    <div class="top-bar flex justify-end mb-2">
      <AppButton size="sm" @click="openSettings">
        <span class="mr-2">Settings</span>
        <v-icon name="md-settings" scale="1" />
      </AppButton>
    </div>
    <div class="cards-holder">
      <Card
        v-for="(item, index) in memoryGameData"
        :key="item.id"
        :class="{
          'flip-card-hover': item.isOpen,
          'flip-card-dim': item.isGuessed,
          'flip-card-shake-not-guessed': !item.isGuessed && item.isOpen && areTwoCardsOpen === true
        }"
        @click="handleCardClick(item)"
      >
        <template v-slot:front>
          {{ index + 1 }}
        </template>
        <template v-slot:back>
          <img class="item_image" :src="`/data/${memoryGameType}/${item.itemFile}`" />
          <div class="item_name">{{ item.itemId.toUpperCase() }}</div>
        </template>
      </Card>
    </div>
  </div>

  <MemoryGameSettings v-if="showSettings" @typeOfPlay="changeTypeOfPlay" :memoryGameData="memoryGameData" />
  <AppFireworks v-if="showFireworks" @playAgainClicked="resetGame" />
</template>

<style scoped>
.memory-game {
  @apply w-full;
}
.cards-holder {
  @apply flex flex-wrap flex-1 justify-between;
}

.item_image {
  @apply w-[50px]
   
  max-md:w-[40px] 
  max-lg:w-[50px];
}
.item_name {
  @apply block
   max-md:text-xs
   max-lg:block;
}
</style>
