/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    customKey: 'my-value',
  },
  // Runtime configuration
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: process.env.MY_SECRET,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
}

export default nextConfig