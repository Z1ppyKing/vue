<template>
  <div class="contact-form">
    <h2 class="contact-form__title">Контактна форма</h2>

    <!-- Поле для імені -->
    <div class="contact-form__field">
      <label class="contact-form__label">Ім'я</label>
      <input
        v-model="name"
        type="text"
        class="contact-form__input"
        placeholder="Введіть ваше ім'я"
      />
    </div>
    <!-- Поле для email -->
    <div class="contact-form__field">
      <label class="contact-form__label">Email</label>
      <input
        v-model="email"
        type="email"
        class="contact-form__input"
        placeholder="Введіть ваш email"
      />
    </div>

    <!-- Статус форми (реактивний текст) -->
    <p class="contact-form__status">{{ formStatus }}</p>

    <!-- Кнопка надсилання форми -->
    <button @click="validateForm" class="contact-form__button">
      Надіслати
    </button>
    <button @click="clearForm" class="contact-form__button">Очистити</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// Реактивні змінні для полів форми
const name = ref("");
const email = ref("");

// Метод для перевірки форми
const validateForm = () => {
  if (!name.value || !email.value) {
    alert("Будь ласка, заповніть усі поля!");
    return;
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    alert("Введіть коректну email-адресу!");
    return;
  }
  alert("Форма успішно надіслана!");
};
// Метод очистки форми
const clearForm = () => {
  name.value = "";
  email.value = "";
};

// Обчислювальна властивість для статусу форми
const formStatus = computed(() => {
  if (!name.value || !email.value) {
    return "Заповніть усі поля";
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value)) {
    return "Некоректний email";
  }
  return "Форма готова для відправки";
});
</script>

<style>
.contact-form {
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-top: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.contact-form__title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.contact-form__field {
  margin-bottom: 1rem;
}
.contact-form__label {
  display: block;
  color: #4a5568;
  margin-bottom: 0.25rem;
}
.contact-form__input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  font-size: 1rem;
}
.contact-form__status {
  font-size: 0.875rem;
  color: #718096;
  margin-bottom: 1rem;
}
.contact-form__button {
  background: #3b82f6;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background 0.2s;
  border: none;
  cursor: pointer;

  margin: 10px;
}
.contact-form__button:hover {
  background: #2563eb;
}
</style>
