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
  <section class="container">
    <div class="row">
      <div v-for="art in artworks" :key="art.id" class="col-md-3">
        <!-- <img :src="artworks.imgUrls.small" alt="artworks.id" class="img-fluid">
        <p>{{ artworks.attribution }}</p> -->
        <ArtworksCard :artworks="art" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
