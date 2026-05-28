import { client } from '@/sanity/lib/client'
import { allPagesQuery } from '@/sanity/lib/queries'
import { SanityPage } from '@/sanity/types'
import PageCard from '@/components/PageCard'
import EmptyState from '@/components/EmptyState'
import styles from './page.module.css'

export const revalidate = 60

export default async function Home() {
  const pages: SanityPage[] = await client.fetch(allPagesQuery)

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.heading}>Pages</h1>
          <a href="/studio" className={styles.studioLink}>
            Open Studio
          </a>
        </div>
      </header>

      <section className={styles.content}>
        {pages.length === 0 ? (
          <EmptyState />
        ) : (
          <div className={styles.grid}>
            {pages.map((page) => (
              <PageCard key={page._id} page={page} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
