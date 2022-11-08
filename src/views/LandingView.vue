<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";
import { useBaseStore } from "@/stores/base";

const router = useRouter();
const baseStore = useBaseStore();

/*
 * Hello message
 */
const helloMessage = "Hello";
const helloMessageRef = ref<string>("");
let helloMessageIndex = 0;
const helloMessageTypeWriter = () => {
  if (helloMessageIndex < helloMessage.length) {
    helloMessageRef.value += helloMessage.charAt(helloMessageIndex);
    helloMessageIndex++;
    setTimeout(helloMessageTypeWriter, 80); // 80 org
  }
};

helloMessageTypeWriter();

/*
 * Welcome message
 */
const theMessage = `Welcome to ${baseStore.appName}...`;
const welcomeMessageRef = ref<string>("");
let theMessageIndex = 0;
const welcomeMessageTypeWriter = () => {
  if (theMessageIndex < theMessage.length) {
    welcomeMessageRef.value += theMessage.charAt(theMessageIndex);
    theMessageIndex++;
    setTimeout(welcomeMessageTypeWriter, 40); // 80 org
  }
};
setTimeout(function () {
  welcomeMessageTypeWriter();
}, 800); // 1000 org

const showPlayButton = ref<boolean>(false);

setTimeout(function () {
  showPlayButton.value = true;
}, 2300); // 4000 org

const navigateToGame = () => {
  router.push("/game");
};
</script>

<template>
  <div class="justify-center flex items-center h-screen">
    <div class="text-8xl text-center lg:h-64">
      <div class="">{{ helloMessageRef }} 👋🏼</div>
      <div>{{ welcomeMessageRef }}</div>
      <transition name="fade">
        <AppButton v-if="showPlayButton" class="mt-6" text="Play" @click="navigateToGame" />
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
