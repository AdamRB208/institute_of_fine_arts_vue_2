import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Art } from "@/models/Art.js"
import { AppState } from "@/AppState.js"


class ArtService {
  setActiveArtwork(artworks) {
    AppState.activeArtwork = artworks
  }

  async admireAnArtwork(artId) {
    const response = await api.post(`api/artworks/${artId}/admire`)
    logger.log('Admired and artwork!', response.data)
    const art = AppState.artworks
    const artIdIndex = art.findIndex(art => art.admirers.id == artId)
    art.splice(artIdIndex, 1)
    AppState.artworks.push(artId)
  }

  async getArt() {
    const response = await api.get('api/artworks')
    logger.log('got art', response.data)
    const art = response.data.artworks.map(pojo => new Art(pojo))
    AppState.artworks = art
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }

  async changeHomePage(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    logger.log('changed home page', response.data)
    const art = response.data.artworks.map(pojo => new Art(pojo))
    AppState.artworks = art
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.totalPages
  }


}

export const artService = new ArtService()