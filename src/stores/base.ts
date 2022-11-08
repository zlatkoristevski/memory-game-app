import { ref } from "vue";
import { defineStore } from "pinia";

export const useBaseStore = defineStore("base", () => {
  const appName = ref<string>("ATRO memory game");

  return { appName };
});
