<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const artworks = computed(() => AppState.activeArtwork)
</script>


<template>
  <div class="modal fade" id="artworkModal" tabindex="-1" aria-labelledby="artworkModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div v-if="artworks" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="artworkModalLabel">Modal title text data goes here</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-for="(imgUrls) in artworks.imgUrls" :key="imgUrls">
            <img :src="imgUrls.full" :alt="artworks.description">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>