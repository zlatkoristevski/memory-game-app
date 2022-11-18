<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import MemoryGame from "@/components/memoryGame/MemoryGame.vue";
import AppPageLayout from "@/components/AppPageLayout.vue";
import { useBaseStore } from "@/stores/base";

const baseStore = useBaseStore();

const router = useRouter();

const navigateBack = () => {
  router.push("/");
};
</script>

<template>
  <AppPageLayout>
    <template v-slot:title>
      <div class="flex justify-between">
        <h1 class="text-7xl">
          {{ baseStore.appName }}
        </h1>
        <AppButton text="Back" size="md" @click="navigateBack" />
      </div>
    </template>

    <template v-slot:body>
      <router-link :to="{ name: 'memory-game' }">
        <img src="/game-icons/memory-game-icon.png" class="cursor-pointer w-[200px]" />
      </router-link>
    </template>
  </AppPageLayout>
</template>
