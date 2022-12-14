/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["upload.wikimedia.org",  "image.tmdb.org"]
  },
  env: {
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
