# Next.js App

A modern React + Next.js application with Vercel Analytics, Speed Insights, and SEO best practices built-in.

## Features

- ✅ **Next.js 16** with App Router
- ✅ **React 19** with latest features
- ✅ **TypeScript** for type safety
- ✅ **Vercel Analytics** for performance monitoring
- ✅ **Vercel Speed Insights** for Core Web Vitals tracking
- ✅ **SEO Ready** with metadata, canonical URLs, and Open Graph tags
- ✅ **Responsive Design** with mobile-first approach
- ✅ **Dark Mode Support** with CSS custom properties
- ✅ **ESLint** for code quality

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files, thanks to Next.js Fast Refresh.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata and providers
│   ├── page.tsx         # Home page component
│   ├── page.module.css  # Page styles
│   └── globals.css      # Global styles and design tokens
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── .eslintrc.json       # ESLint configuration
└── README.md            # This file
```

## SEO Configuration

The app includes comprehensive SEO setup:

- **Metadata**: Title, description, keywords, author, creator, publisher
- **Robots**: Set to `index, follow` for search engine crawling
- **Canonical URL**: Points to `https://example.com` (update this to your domain)
- **Open Graph**: Tags for social media sharing
- **Twitter Card**: Summary with large image for Twitter sharing
- **Viewport**: Optimized for all devices with theme color support

**Important**: Update the canonical URL and domain references in `app/layout.tsx` to match your actual domain.

## Analytics & Monitoring

### Vercel Analytics

Tracks user behavior and engagement metrics. The `<Analytics />` component is automatically included in the root layout.

### Vercel Speed Insights

Monitors Core Web Vitals (LCP, FID, CLS) to ensure optimal performance. The `<SpeedInsights />` component is automatically included in the root layout.

Both require your project to be connected to Vercel for data collection.

## Styling

The app uses:

- **CSS Modules** for component-scoped styling
- **Global CSS** with design tokens (custom properties)
- **CSS-in-JS** variables for theming
- **Light/Dark Mode** support via `prefers-color-scheme`

### Design Tokens

Defined in `app/globals.css`:

- `--background`: Main background color
- `--foreground`: Main text color
- `--primary`: Primary action color
- `--primary-hover`: Hover state for primary
- `--secondary`: Secondary background
- `--border`: Border color

## Environment Variables

Currently, no environment variables are required. When you deploy to Vercel or integrate with other services (database, auth, etc.), add them to:

- `.env.local` (local development, not committed)
- Vercel project settings (for production)

## Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com/):

1. Push your code to GitHub, GitLab, or Bitbucket
2. Connect your repository to Vercel
3. Vercel auto-detects Next.js and deploys with optimal settings
4. Analytics and Speed Insights automatically start collecting data

### Other Platforms

This is a standard Next.js app and can be deployed to any platform supporting Node.js (AWS, Netlify, Railway, etc.).

```bash
npm run build
npm start
```

## Development

### Code Quality

```bash
npm run lint
```

Run ESLint to check for code issues and style violations.

### Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vercel Analytics](https://vercel.com/analytics)
- [Vercel Speed Insights](https://vercel.com/speed-insights)
- [Web Vitals](https://web.dev/vitals/)

## License

MIT
