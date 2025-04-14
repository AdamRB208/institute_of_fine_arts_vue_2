<script setup>
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
    Art Works
  </section>
</template>

<style scoped lang="scss"></style>
