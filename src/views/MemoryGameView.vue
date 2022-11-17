<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import MemoryGame from "@/components/memoryGame/MemoryGame.vue";
import AppPageLayout from "@/components/AppPageLayout.vue";

import { useBaseStore } from "@/stores/base";

const baseStore = useBaseStore();

const router = useRouter();

const openSettings = () => {
  //   router.push("/games");
};

const goBack = () => {
  router.push("/games");
};
</script>

<template>
  <AppPageLayout>
    <template v-slot:title>
      <div class="flex justify-between">
        <h1 class="text-7xl">
          Memory Game <span class="text-sm">by {{ baseStore.appName }}</span>
        </h1>
        <h5></h5>
        <div class="buttons">
          <AppButton size="md" @click="openSettings" class="mr-4">
            <v-icon name="md-settings" scale="3" />
          </AppButton>
          <AppButton size="md" @click="goBack">
            <v-icon name="md-login" scale="3" />
          </AppButton>
        </div>
      </div>
    </template>

    <template v-slot:body>
      <MemoryGame></MemoryGame>
    </template>
  </AppPageLayout>
</template>
