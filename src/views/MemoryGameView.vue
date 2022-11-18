<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import MemoryGame from "@/components/memoryGame/MemoryGame.vue";
import AppPageLayout from "@/components/AppPageLayout.vue";

const router = useRouter();

const goBack = () => {
  router.push("/games");
};
</script>

<template>
  <AppPageLayout>
    <template v-slot:title>
      <div class="flex justify-between">
        <img src="/game-icons/memory-game-icon.png" />
        <div class="buttons">
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
