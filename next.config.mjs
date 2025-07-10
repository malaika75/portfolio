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
                hostname: 'www.torrancememorial.org'
            },
            {
                protocol: 'https',
                hostname: 'www.coolmathgames.com'
            },
            {
                protocol: 'https',
                hostname: 'trotsoptorhout.be'
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            },
            {
                protocol: 'https',
                hostname: 't4.ftcdn.net'
            }
        ]
    }
};

export default nextConfig;
