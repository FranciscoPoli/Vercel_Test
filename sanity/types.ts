export interface SanityPage {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  image?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
    alt?: string
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
    crop?: {
      top: number
      bottom: number
      left: number
      right: number
    }
  }
}
