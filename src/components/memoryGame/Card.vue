<script setup lang="ts"></script>

<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front">X</slot>
      </div>
      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  @apply transition
    ease-in-out delay-100
    cursor-pointer
    text-black
    text-4xl
    mb-2
    ml-1
    mr-1
    hover:border-blue
    h-[50px]
    max-md:h-[70px]
    md:h-[120px]
    w-[17.7%]
    xl:w-[9%];
  /* width: 10%; */
  perspective: 1000px;
}

.flip-card-inner {
  @apply border-2 rounded-xl border-black 
  relative 
  w-full h-full 
  text-center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-hover .flip-card-inner {
  transform: rotateY(-180deg);
}

/* .flip-card:hover .flip-card-inner {
  transform: rotateY(-180deg);
} */

.flip-card-front,
.flip-card-back {
  @apply border-2 rounded-xl border-black absolute w-full h-full;
  backface-visibility: hidden;
}

.flip-card-back {
  @apply bg-white text-black flex justify-center items-center text-lg flex-col;
  transform: rotateY(180deg);
}

.flip-card-dim {
  opacity: 0.4;
}

.flip-card-shake-not-guessed {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
