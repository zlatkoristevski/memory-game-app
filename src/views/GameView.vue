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
    <h1 class="text-5xl">Lets beguin to play {{ baseStore.appName }}...</h1>
    <v-icon name="fa-flag" />

    <AppButton text="Back" size="sm" @click="navigateBack" />
    <MemoryGame></MemoryGame>
  </AppPageLayout>
</template>
