import Image from 'next/image'
import { SanityPage } from '@/sanity/types'
import { urlFor } from '@/sanity/lib/image'
import styles from './PageCard.module.css'

interface PageCardProps {
  page: SanityPage
}

export default function PageCard({ page }: PageCardProps) {
  const imageUrl = page.image?.asset
    ? urlFor(page.image).width(600).height(400).fit('crop').auto('format').url()
    : null

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={page.image?.alt ?? page.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>No image</span>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{page.title}</h2>
        <p className={styles.slug}>/{page.slug.current}</p>
        {page.description && (
          <p className={styles.description}>{page.description}</p>
        )}
      </div>
    </article>
  )
}
