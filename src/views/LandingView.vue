<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";

const router = useRouter();

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
    setTimeout(helloMessageTypeWriter, 80);
  }
};

helloMessageTypeWriter();

/*
 * Welcome message
 */
const theMessage = "Welcome to ATRO memory game...";
const welcomeMessageRef = ref<string>("");
let theMessageIndex = 0;
const welcomeMessageTypeWriter = () => {
  if (theMessageIndex < theMessage.length) {
    welcomeMessageRef.value += theMessage.charAt(theMessageIndex);
    theMessageIndex++;
    setTimeout(welcomeMessageTypeWriter, 80);
  }
};
setTimeout(function () {
  welcomeMessageTypeWriter();
}, 1000);

const showPlayButton = ref<boolean>(false);

setTimeout(function () {
  showPlayButton.value = true;
}, 4000);

const navigateToGame = () => {
  router.push("/game");
};
</script>

<template>
  <div class="justify-center flex bg-blue items-center h-screen">
    <div class="text-8xl text-center lg:h-64">
      <div class="">{{ helloMessageRef }} 👋🏼</div>
      <div>{{ welcomeMessageRef }}</div>
      <AppButton v-if="showPlayButton" text="Play" @click="navigateToGame" />
    </div>
  </div>
</template>

<style scoped>
.custom-height {
  height: 300px;
}
</style>
