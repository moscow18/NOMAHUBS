/** @type {import('next').Config} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // عشان صور Unsplash تشتغل
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co', // عشان الصور اللي هترفعها على Supabase تشتغل
      },
    ],
  },
};

export default nextConfig;