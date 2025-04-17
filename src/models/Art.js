
export class Art {
  constructor(data) {
    this.id = data.id
    this.slug = data.slug
    this.height = data.height
    this.width = data.width
    this.originalLink = data.originalLink
    this.imgUrls = data.imgUrls
    this.description = data.description
    this.attribution = data.attribution
    this.admirers = data.admirers
  }
}