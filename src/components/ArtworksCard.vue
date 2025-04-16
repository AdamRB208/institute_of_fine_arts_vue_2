<script setup>
import { Art } from '@/models/Art.js';

defineProps({
  artworks: Art


})
</script>


<template>
  <img :src="artworks.imgUrls.small" alt="artworks.id" class="img-fluid">
  <div></div>
  <p>{{ artworks.attribution }}</p>
</template>


<style lang="scss" scoped>
p {
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
}

img {
  margin-top: 1rem;
}
</style>