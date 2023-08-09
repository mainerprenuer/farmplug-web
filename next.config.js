/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinifyMode: true, 
    experimental: {
        esmExternals: true,
    },
    async rewrites(){
        source: '/api/v1/:path*'
        destination: 'http://localhost:3100/api/v1/:path*' // proxy to the backend server
    }
}

module.exports = nextConfig
