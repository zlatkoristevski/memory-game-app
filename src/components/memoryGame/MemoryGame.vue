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
  memoryGameType.value = newMemoryGameType;
  resetGame();
};

const changeGameCardsLength = (noOfCards: string | number) => {
  gameCardsLength.value = Number(noOfCards);
  resetGame();
};

const resetGame = () => {
  memoryGameData.value = generateMemoryGameData(memoryGameType.value, data, gameCardsLength.value);
  showFireworks.value = false;
};

const openSettings = () => {
  showSettings.value = true;
};

const hideSettings = () => {
  showSettings.value = false;
};

const formatString = (string: string): string => {
  return string.replace(/-/g, " ").toUpperCase();
};

onUnmounted(() => {
  clearTimeout(closeUnguessedCardsTimeout);
});
</script>

<template>
  <div class="memory-game">
    <div class="top-bar flex justify-end mb-2">
      <AppButton size="sm" @click="resetGame" :hoverScaleEffect="false">
        <span class="mr-2">Reset</span>
        <v-icon name="md-autorenew" scale="1" />
      </AppButton>
      <AppButton size="sm" @click="openSettings" :hoverScaleEffect="false">
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
          <div class="item_name">{{ formatString(item.itemId) }}</div>
        </template>
      </Card>
    </div>
  </div>

  <MemoryGameSettings
    v-if="showSettings"
    :activeGameType="memoryGameType"
    :gameCardsLength="gameCardsLength"
    @typeOfPlay="changeTypeOfPlay"
    @noOfCards="changeGameCardsLength"
    @closePopup="hideSettings"
    :memoryGameData="memoryGameData"
  />
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
