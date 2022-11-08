<script setup lang="ts">
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";

const router = useRouter();

const navigateBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="justify-center flex items-center h-screen">
    <div class="text-8xl text-center lg:h-64">
      <div>Lets beguin...</div>
      <AppButton text="Back" @click="navigateBack" />
    </div>
  </div>
</template>
