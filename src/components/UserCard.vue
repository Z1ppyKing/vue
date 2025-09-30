<template>
  <div class="user-card">
    <img :src="photo" alt="Фото профілю" class="user-photo" />
    <h2>{{ name }}</h2>
    <p>Вік: {{ age }} років</p>
    <p>Улюблений колір: {{ favoriteColor }}</p>
    <button @click="handleContact">Зв'язатися</button>
    <br /><br />
    <button @click="handleColor">Показати улюблений колір</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// додаємо пропси
const props = defineProps({
  name: {
    type: String,
    default: "Анонім", // запасне ім'я
  },
  photo: {
    type: String,
    default:
      "https://static.vecteezy.com/system/resources/thumbnails/020/911/736/small_2x/profile-icon-user-icon-person-icon-free-png.png", // запасне фото
  },
  age: {
    type: Number,
    default: 18,
  },
  favoriteColor: {
    type: String,
    default: "синій",
  },
});

// оголошуємо події
const emit = defineEmits(["contact", "color"]);

// функції для обробки кліків
const handleContact = () => {
  emit("contact", props.name, props.age); // випускаємо подію з ім'ям та віком
};
const handleColor = () => {
  emit("color", props.favoriteColor); // випускаємо подію з улюбленим коліром
};
</script>

<style>
.user-card {
  border: 1px solid #ccc;
  padding: 20px;
  width: 300px;
  text-align: center;
  margin: 20px auto;
}
.user-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
</style>
