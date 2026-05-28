import { groq } from 'next-sanity'

export const allPagesQuery = groq`
  *[_type == "page"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    image {
      asset,
      alt,
      hotspot,
      crop,
    }
  }
`

export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    image {
      asset,
      alt,
      hotspot,
      crop,
    }
  }
`
