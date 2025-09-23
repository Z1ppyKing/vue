<template>
  <div>
    <h2>{{ user.name }}</h2>
    <p>Вік: {{ user.age }}</p>
    <p>Улюблений колір: {{ user.favoriteColor }}</p>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const user = reactive({
  name: "Олексій",
  age: 25,
  favoriteColor: "Синій",
});
</script>
