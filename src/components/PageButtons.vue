<script setup>
import { AppState } from '@/AppState.js';
import { artService } from '@/services/ArtService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


const currentPage = computed(() => AppState.currentPage)

const totalPages = computed(() => AppState.totalPages)

async function getNextPage(pageNumber) {
  try {
    await artService.changeHomePage(pageNumber)
  }
  catch (error) {
    Pop.error(error, 'could not get next page');
    logger.error('COULD NOT GET NEXT PAGE', error)
  }
}

</script>


<template>
  <section class="container d-flex justify-content-center">
    <div class="row">
      <div class="col-md-4 d-flex mt-2 mb-2">
        <button :disabled="currentPage == 1" @click="getNextPage(currentPage - 1)"
          class="btn btn-outline-secondary">previous</button>
        <div class="text-center align-content-center ms-3 me-3">page</div>
        <button :disabled="currentPage == 35" @click="getNextPage(currentPage + 1)"
          class="btn btn-outline-secondary">next</button>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>