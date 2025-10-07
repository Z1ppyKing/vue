import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref([
    { id: 1, title: "Перший пост", content: "Це приклад першого поста" },
    { id: 2, title: "Другий пост", content: "Це приклад другого поста" },
    { id: 3, title: "Третій пост", content: "Це приклад третього поста" },
  ]);

  const getPostsCount = computed(() => posts.value.length);

  const removePost = (postId) => {
    posts.value = posts.value.filter((post) => post.id !== postId);
  };

  const removeAllPosts = () => {
    posts.value.length = 0;
  };

  return { posts, getPostsCount, removePost, removeAllPosts };
});
