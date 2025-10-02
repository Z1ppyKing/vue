<template>
  <div>
    <input v-model="message" placeholder="Введи щось!" />
    <p>Ти написав: {{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");
</script>
