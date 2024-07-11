/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.google.com'
            },
            {
                protocol: 'https',
                hostname: 'traumacareinternational.org/'
            },
            {
                protocol: 'https',
                hostname: '**'
            },
            {
                protocol: 'https',
                hostname: 'downloadly.ir'
            },
            {
                protocol: 'https',
                hostname: 'www.lxp.tv'
            },
            {
                protocol: 'http',
                hostname: 'christembassy.org'
            },
        ],
    },
};

export default nextConfig;
