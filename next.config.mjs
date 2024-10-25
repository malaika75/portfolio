/** @type {import('next').NextConfig} */
const nextConfig = {

    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'researchtweet.com'
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com'
            },
            {
                protocol: 'https',
                hostname: 'foundry360.com'
            },
            {
                protocol: 'https',
                hostname: 'www.coolmathgames.com'
            },
            {
                protocol: 'https',
                hostname: 'trotsoptorhout.be'
            }
        ]
    }
};

export default nextConfig;
