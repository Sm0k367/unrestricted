/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true, // Recommended, but can be enabled later if issues arise
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.openai.com',
      'oaidalleapiprodscus.blob.core.windows.net',
      'replicate.delivery',
      'pbxt.replicate.delivery',
      'lh3.googleusercontent.com', // For Google user avatars
      'avatars.githubusercontent.com', // For GitHub user avatars
    ],
  },
};

export default nextConfig;
