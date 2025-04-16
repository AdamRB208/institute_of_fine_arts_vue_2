<script setup>
import { AppState } from '@/AppState.js';
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
  <section class="containter">
    {{ artworks }}
  </section>
</template>

<style scoped lang="scss"></style>
