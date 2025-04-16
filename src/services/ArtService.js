import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Art } from "@/models/Art.js"
import { AppState } from "@/AppState.js"


class ArtService {

  async getArt() {
    const response = await api.get('api/artworks')
    logger.log('got art', response.data)
    const art = response.data.artworks.map(pojo => new Art(pojo))
    AppState.artworks = art
    // AppState.currentPage = response.data.currentPage
    // AppState.totalPages = response.data.totalPages
  }

  async changeHomePage(pageNumber) {
    const response = await api.get('api/artworks')
    logger.log('changed home page', response.data)
  }


}

export const artService = new ArtService()