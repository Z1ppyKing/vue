<template>
  <div class="blog-posts">
    <h2 class="blog-posts__title">Блог</h2>
    <!-- Умовний рендерінг -->
    <div v-if="posts.length === 0" class="blog-posts__loading">
      Завантаження постів...
    </div>
    <div v-else class="blog-posts__list">
      <!-- Цикл по постах -->
      <div v-for="post in posts" :key="post.id" class="blog-posts__card">
        <h3 class="blog-posts__card-title">{{ post.title }}</h3>
        <p class="blog-posts__card-content">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const posts = ref([]);

// Імітація данних постів
const mockPosts = [
  { id: 1, title: "Перший пост", content: "Це приклад першого поста." },
  { id: 2, title: "Другий пост", content: "Це приклад другого поста" },
  { id: 3, title: "Третій пост", content: "Це приклад третього поста" },
];

// Хук життєвого циклу: викликається після монтування компонента
onMounted(() => {
  console.log("Компонент BlogPosts змонтовано");
  loadPosts();
});

// Імітація завантаження данних
const loadPosts = () => {
  console.log("Завантаження постів...");
  // Імітація затримки, як при запиті до API
  setTimeout(() => {
    posts.value = mockPosts;
    console.log("Пости завантажені!");
  }, 5000);
};

// Хук життєвого циклу: викликається перед видаленням компонента
onUnmounted(() => {
  console.log("Компонент BlogPosts видалено!");
});
</script>

<style>
.blog-posts {
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-top: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.blog-posts__title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}
.blog-posts__loading {
  font-size: 1rem;
  color: #718096;
  text-align: center;
}
.blog-posts__list {
  display: grid;
  gap: 1rem;
}
.blog-posts__card {
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
}
.blog-posts__card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.blog-posts__card-content {
  font-size: 1rem;
  color: #4a5568;
}
</style>
