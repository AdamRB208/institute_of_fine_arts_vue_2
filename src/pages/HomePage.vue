<script setup>
import { AppState } from '@/AppState.js';
import ArtworksCard from '@/components/ArtworksCard.vue';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const artworks = computed(() => AppState.artworks)

onMounted(() => {
  getArt()
})


async function getArt() {
  try {
    await artService.getArt()
  }
  catch (error) {
    Pop.error(error, 'COULD NOT GET ART');
    logger.error('could not get art', error)
  }
}
</script>

<template>
  <section class="container d-flex justify-content-center">
    <div class="row">
      <div class="col-md-4 d-flex">
        <button class="btn btn-outline-secondary">previous</button>
        <div class="text-center align-content-center ms-3 me-3">page</div>
        <button class="btn btn-outline-secondary">next</button>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div v-for="art in artworks" :key="art.id" class="col-md-3">
        <div class="masonry-container">
          <!-- <img :src="artworks.imgUrls.small" alt="artworks.id" class="img-fluid">
          <p>{{ artworks.attribution }}</p> -->
          <ArtworksCard :artworks="art" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.col-md-3 {
  background-color: rgba(128, 128, 128, 0.474);
  margin: 2rem;
  border-radius: 8px;
  max-block-size: fit-content;
}

.masonry-container {
  columns: 200px;
  display: inline-block;
  break-inside: avoid;

}
</style>
