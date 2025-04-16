<script setup>
import { Art } from '@/models/Art.js';

defineProps({
  artworks: Art


})
</script>


<template>
  <img :src="artworks.imgUrls.small" alt="artworks.id" class="img-fluid">
  <p>{{ artworks.attribution }}</p>
</template>


<style lang="scss" scoped></style>