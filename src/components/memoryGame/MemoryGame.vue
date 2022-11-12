<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
import { useToast } from "vue-toastification";
import {
  generateMemoryGameData,
  checkIfAreTwoCardsOpen,
  checkIfAreCardsGuessed,
  closeUnguessedCards,
  updateStatusOfTheGuessedCards
} from "./memoryGameHelpers";
import type { MemoryGameData, MemoryGameType } from "./types";

const toast = useToast();
const memoryGameType = ref<MemoryGameType>("flags");
const memoryGameData = ref<MemoryGameData[]>(generateMemoryGameData(memoryGameType.value));

const handleCardClick = (item: MemoryGameData): void => {
  item.isOpen = true;

  areCardsGuessed();
};

const areCardsGuessed = () => {
  const areTwoCardsOpen = checkIfAreTwoCardsOpen(memoryGameData.value);
  // alert(areTwoCardsOpen);
  if (areTwoCardsOpen) {
    const areGuessed = checkIfAreCardsGuessed(memoryGameData.value); //check and mutation of memoryGameData is happening here

    if (areGuessed) {
      memoryGameData.value = updateStatusOfTheGuessedCards(memoryGameData.value);
      toast.success("Yeeey, You guessed the cards!", {
        timeout: 2000
      });
    } else {
      toast.error("Cards are not same, try again!", {
        timeout: 2000
      });
      setTimeout(() => {
        // alert("TODO: Close the cards");
        memoryGameData.value = closeUnguessedCards(memoryGameData.value);
      }, 2000);
    }
  }
};
</script>

<template>
  <div class="memory-game">
    <div class="cards-holder">
      <Card
        v-for="item in memoryGameData"
        :key="item.id"
        :class="{ 'flip-card-hover': item.isOpen }"
        @click="handleCardClick(item)"
      >
        <template v-slot:front>
          {{ item.id }}
        </template>
        <template v-slot:back>
          <img class="w-[50px]" :src="`data/flags/${item.itemFile}`" />
          <div>{{ item.itemId.toUpperCase() }}</div>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.memory-game {
  @apply w-full;
}
.cards-holder {
  @apply flex flex-wrap flex-1 justify-center;
}
</style>
