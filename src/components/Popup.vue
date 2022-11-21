<script setup lang="ts">
import AppPageLayout from "@/components/AppPageLayout.vue";

const emit = defineEmits<{
  (e: "closePopup"): void;
}>();

const closePopup = () => {
  emit("closePopup");
};
</script>

<template>
  <div>
    <div class="base" @click="closePopup"></div>
    <div class="popup">
      <AppPageLayout>
        <template v-slot:body>
          <slot>Popup body...</slot>
        </template>
      </AppPageLayout>
    </div>
  </div>
</template>

<style scoped>
.base {
  @apply bg-black fixed top-0 left-0 w-full h-full;
  opacity: 0.8;
  backdrop-filter: blur(5px);
}

.popup {
  @apply absolute top-[50%] left-[50%] mr-[-50%] w-[50%] min-h-[100px]
  max-md:w-[95%];

  transform: translate(-50%, -50%);
}
</style>
