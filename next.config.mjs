/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  output: 'standalone',  
  assetPrefix: `${process.env.SKBT_HTTP_HOST}${process.env.SKBT_SUBFOLDER}`,
  images: {
    loader: 'custom',
    loaderFile: `./src/image/loader-${process.env.SKBT_BRANCH}.js`,
  },
};

export default nextConfig;