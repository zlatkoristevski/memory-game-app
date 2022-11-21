<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import MemoryGame from "@/components/memoryGame/MemoryGame.vue";
import AppPageLayout from "@/components/AppPageLayout.vue";
import { useBaseStore } from "@/stores/base";

const baseStore = useBaseStore();

const router = useRouter();

const goBack = () => {
  router.push("/");
};
</script>

<template>
  <AppPageLayout>
    <template v-slot:title>
      <div class="flex justify-between">
        <h1 class="text-7xl">{{ baseStore.appName }}</h1>
        <div class="buttons">
          <AppButton size="md" @click="goBack" text="Back" />
        </div>
      </div>
    </template>

    <template v-slot:body>
      <MemoryGame></MemoryGame>
    </template>
  </AppPageLayout>
</template>
