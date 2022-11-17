<script setup lang="ts">
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import { useBaseStore } from "@/stores/base";

const router = useRouter();
const baseStore = useBaseStore();

/*
 * Hello message
 */
let timoutForHelloMessage: any;
const helloMessage = "Hello";
const helloMessageRef = ref<string>("");
let helloMessageIndex = 0;
const helloMessageTypeWriter = () => {
  if (helloMessageIndex < helloMessage.length) {
    helloMessageRef.value += helloMessage.charAt(helloMessageIndex);
    helloMessageIndex++;
    timoutForHelloMessage = setTimeout(helloMessageTypeWriter, 80);
  }
};

helloMessageTypeWriter();

/*
 * Welcome message
 */
let timoutForWelcomeMessage: any;
const theMessage = `Welcome to ${baseStore.appName}`;
const welcomeMessageRef = ref<string>("");
let theMessageIndex = 0;
const welcomeMessageTypeWriter = () => {
  if (theMessageIndex < theMessage.length) {
    welcomeMessageRef.value += theMessage.charAt(theMessageIndex);
    theMessageIndex++;
    timoutForWelcomeMessage = setTimeout(welcomeMessageTypeWriter, 70);
  }
};
const welcomeMessageWritterTimeout = setTimeout(function () {
  welcomeMessageTypeWriter();
}, 900);

const showPlayButton = ref<boolean>(false);

const showButtonTimeout = setTimeout(function () {
  showPlayButton.value = true;
}, 2400);

const navigateToGame = () => {
  router.push("/games");
};

onUnmounted(() => {
  clearTimeout(timoutForHelloMessage);
  clearTimeout(timoutForWelcomeMessage);
  clearTimeout(showButtonTimeout);
  clearTimeout(welcomeMessageWritterTimeout);
});
</script>

<template>
  <div class="justify-center flex items-center h-screen">
    <div class="text-8xl text-center lg:h-64">
      <div class="">{{ helloMessageRef }} 👋🏼</div>
      <div>{{ welcomeMessageRef }}</div>
      <transition name="fade">
        <AppButton v-if="showPlayButton" class="mt-6" size="lg" text="Start Playing" @click="navigateToGame" />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.custom-height {
  height: 300px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
