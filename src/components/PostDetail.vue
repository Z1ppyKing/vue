<template>
  <div class="blog-post-detail">
    <h1>{{ post?.title || "Пост не знайдено" }}</h1>
    <p>{{ post?.content }}</p>
    <router-link to="/blogs">Назад до постів</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePostsStore } from "@/stores/store";

const route = useRoute();
const PostsStore = usePostsStore();
const postId = Number(route.params.id);
const post = PostsStore.posts.find((p) => p.id == postId);
</script>

<style>
form {
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;

  max-width: 600px;

  margin: 0 auto;
}

form > div {
  margin-bottom: 16px;

  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;
}

input,
textarea {
  width: 100%;

  max-width: 600px;

  padding: 8px;

  margin-top: 5px;

  border-radius: 0.25rem;

  border: 1px solid #e2e8f0;
}

.blog-posts__search {
  margin-bottom: 1rem;

  display: flex;

  flex-direction: column;

  align-items: center;
}

.blog-posts__card-title a {
  color: #3182ce;

  text-decoration: none;
}

.blog-posts__card-title a:hover {
  text-decoration: underline;
}
</style>
