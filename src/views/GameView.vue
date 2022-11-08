<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
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
    <AppButton text="Back" size="sm" @click="navigateBack" />

    <AppButton text="Yeeey" size="md" @click="navigateBack" />
  </AppPageLayout>
</template>
