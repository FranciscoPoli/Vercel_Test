import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Welcome to Next.js</h1>
          <p>A modern React framework for production</p>
          <p>Adding a paragraph in Github main branch</p>
        </header>

        <section className={styles.features}>
          <div className={styles.featureCard}>
            <h2>🚀 Fast</h2>
            <p>Optimized for performance with automatic code splitting and optimization.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>📦 Full-Stack</h2>
            <p>Build API routes and connect your database with Next.js backend support.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>🎯 SEO Ready</h2>
            <p>Built-in SEO optimization with metadata, canonical URLs, and more.</p>
          </div>

          <div className={styles.featureCard}>
            <h2>📊 Analytics</h2>
            <p>Integrated Vercel Analytics and Speed Insights for performance monitoring.</p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to build something amazing?</h2>
          <div className={styles.buttons}>
            <button className="button-primary">
              <Link href="#docs">View Documentation</Link>
            </button>
            <button className="button-secondary">
              <Link href="#examples">See Examples</Link>
            </button>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Built with Next.js and Vercel</p>
          <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.6 }}>
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
