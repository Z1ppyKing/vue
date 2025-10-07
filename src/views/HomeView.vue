<template>
  <div class="usercards-row">
    <UserCard
      :name="userName1"
      :photo="userPhoto1"
      :age="age1"
      :favoriteColor="favoriteColor1"
      @contact="handleContactEvent"
      @color="handleColorEvent"
    />
    <UserCard
      :name="userName2"
      :photo="userPhoto2"
      :age="age2"
      :favoriteColor="favoriteColor2"
      @contact="handleContactEvent"
      @color="handleColorEvent"
    />
  </div>
  <ContactForm />
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <HelloWorld msg="Welcome to Your Vue.js App!!!" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import UserCard from "@/components/UserCard.vue";
import ContactForm from "@/components/ContactForm.vue";

// данні для пропсів
const userName1 = ref("Олексій Петренко");
const userPhoto1 = ref(
  "https://cdn-icons-png.flaticon.com/512/3233/3233508.png"
);
const age1 = ref(25);
const favoriteColor1 = "червоний";

const userName2 = ref("Марія Петренко");
const userPhoto2 = ref(
  "https://icons.veryicon.com/png/o/miscellaneous/user-avatar/user-avatar-female-9.png"
);
const age2 = ref(20);
const favoriteColor2 = "зелений";

// обробка подій
const handleContactEvent = (nameToDisplay, ageToDisplay) => {
  alert(`Зв'язок з ${nameToDisplay}, віком ${ageToDisplay} років`); // реакція на подію
};
const handleColorEvent = (favoriteColorToDisplay) => {
  alert(`Улюблений колір: ${favoriteColorToDisplay}`); // реакція на подію
};
</script>

<style>
.usercards-row {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: stretch;
  gap: 16px;
}
</style>
