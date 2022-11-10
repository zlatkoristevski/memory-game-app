<script setup lang="ts"></script>

<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">X</div>
      <div class="flip-card-back">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flip-card {
  @apply transition
    ease-in-out delay-100
    
    cursor-pointer
    bg-white
    text-black
    text-4xl
    mb-2
    mr-2
    hover:border-blue
    h-[50px]
    md:h-[120px]
    w-[18%]
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

.flip-card:hover .flip-card-inner {
  transform: rotateY(-180deg);
}

.flip-card-front,
.flip-card-back {
  @apply border-2 rounded-xl border-black absolute w-full h-full;
  backface-visibility: hidden;
}

.flip-card-back {
  @apply bg-blue text-white;
  transform: rotateY(180deg);
}
</style>
