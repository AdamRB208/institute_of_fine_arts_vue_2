<script setup>
import { AppState } from '@/AppState.js';
import { Art } from '@/models/Art.js';
import { artService } from '@/services/ArtService.js';
import { api } from '@/services/AxiosService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';

const props = defineProps({
  artworks: Art
})

async function admireAnArtwork(artId) {
  try {
    const artId = props.artworks.id
    await artService.admireAnArtwork(artId)
  }
  catch (error) {
    Pop.error(error, 'could not get art by id');
    logger.error('COULD NOT GET ART BY ID', error)
  }
}

</script>


<template>
  <button class="btn btn-outline-none" data-bs-toggle="modal" data-bs-target="#artworkModal" type="button"><img
      :src="artworks.imgUrls.small" alt="artworks.id" class="img-fluid"></button>
  <div></div>
  <div class="mdi mdi-heart" type="button" @click="admireAnArtwork()">
    <small>{{ artworks.admirers.length }}</small>
  </div>
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

small {
  font-size: 0.875em;
}
</style>