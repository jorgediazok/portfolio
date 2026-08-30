import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Netlify's Next.js image optimization proxy (/_ipx) currently 500s
    // on this site, so serve the pre-optimized static files directly.
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
