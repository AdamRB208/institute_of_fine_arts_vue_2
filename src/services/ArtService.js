import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"


class ArtService {
  async getArt() {
    const response = await api.get('api/artworks')
    logger.log('got art', response.data)
  }

}

export const artService = new ArtService()