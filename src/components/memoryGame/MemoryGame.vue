<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
import Fireworks from "@/components/Fireworks.vue";
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
const showFireworks = ref<boolean>(false);

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

      const playerWon = true;
      if (playerWon) showFireworks.value = true;
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
          <img class="item_image" :src="`data/flags/${item.itemFile}`" />
          <div class="item_name">{{ item.itemId.toUpperCase() }}</div>
        </template>
      </Card>
    </div>
  </div>

  <Fireworks v-if="showFireworks"></Fireworks>
</template>

<style scoped>
.memory-game {
  @apply w-full;
}
.cards-holder {
  @apply flex flex-wrap flex-1 justify-center;
}

.item_image {
  @apply w-[50px]
   
  max-md:w-[40px] 
  max-lg:w-[50px];
}
.item_name {
  @apply block
   max-md:hidden
   max-lg:block;
}
</style>
