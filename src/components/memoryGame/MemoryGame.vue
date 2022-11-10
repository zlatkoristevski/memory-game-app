<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";
import { generateMemoryGameData } from "./memoryGameHelpers";
import type { MemoryGameData, MemoryGameType } from "./types";

const memoryGameType = ref<MemoryGameType>("flags");
const memoryGameData = ref<MemoryGameData[]>(generateMemoryGameData(memoryGameType.value));
</script>

<template>
  <div class="memory-game">
    <div class="cards-holder">
      <Card v-for="item in memoryGameData" :key="item.id" :class="{ 'flip-card-hover': item.id === '2' }">
        <template v-slot:front>
          {{ item.id }}
        </template>
        <template v-slot:back>
          <img style="width: 50px; height: 50px" :src="`data/flags/${item.itemFile}`" />
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
