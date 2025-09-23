<template>
  <nav>
    <ul>
      <li
        v-for="item in menuItems"
        :key="item"
        :class="{ active: activeItem === item }"
        @click="setActive(item)"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ref(["Головна", "Про мене", "Портфоліо", "Контакти"]);
const activeItem = ref("Головна");
const setActive = (item) => {
  activeItem.value = item;
};
</script>

<style>
nav ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
}
nav li {
  margin: 0 15px;
  font-size: 18px;
  cursor: pointer;
}
nav li:hover {
  background-color: aqua;
  border-radius: 5px;
}
.active {
  font-weight: bold;
  color: chartreuse;
}
</style>
