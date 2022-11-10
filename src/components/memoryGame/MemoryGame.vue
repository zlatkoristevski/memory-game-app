<script setup lang="ts">
import Card from "./Card.vue";
</script>

<template>
  <div class="memory-game">
    <div class="cards-holder">
      <Card v-for="i in 40" :key="i" :class="{ 'flip-card-hover': i === 4 }">{{ i }}</Card>
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
