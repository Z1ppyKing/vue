<template>
  <div class="blog-posts">
    <h2 class="blog-posts__title">Блог</h2>
    <div class="blog-posts__list">
      <!-- Цикл по постах -->
      <div
        v-for="post in postsStore.posts"
        :key="post.id"
        class="blog-posts__card"
      >
        <h3 class="blog-posts__card-title">{{ post.title }}</h3>
        <p class="blog-posts__card-content">{{ post.content }}</p>
        <div class="blog-posts__button-group">
          <button
            class="blog-posts__button blog-posts__button--delete"
            @click="postsStore.removePost(post.id)"
          >
            Видалити
          </button>
        </div>
      </div>
    </div>
    <p>Загальна кількість постів: {{ postsStore.getPostsCount }}</p>
  </div>
</template>

<script setup>
//import { ref } from "vue";
import { usePostsStore } from "@/stores/store";

const postsStore = usePostsStore();
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
.blog-posts__button-group {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
}
.blog-posts__button {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: background 0.2s, color 0.2s;
}
.blog-posts__button--delete {
  background: #e53e3e;
  color: #fff;
}
.blog-posts__button--delete:hover {
  background: #c53030;
}
</style>
