<script setup>
import { Art } from '@/models/Art.js';
import { artService } from '@/services/ArtService.js';
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

function setActiveArtwork() {
  artService.setActiveArtwork(props.artworks)
  logger.log('setting active artwork')
}

</script>


<template>
  <button @click="setActiveArtwork()" class="btn btn-outline-none" data-bs-toggle="artworkModal"
    data-bs-target="#artworkModal" type="button"><img :src="artworks.imgUrls.small" alt="artworks.id"
      class="img-fluid">Image details here</button>
  <div></div>
  <div class="mdi mdi-heart icon" type="button" @click="admireAnArtwork()">
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

.icon {
  display: inline;
}
</style>