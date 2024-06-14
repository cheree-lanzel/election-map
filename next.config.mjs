/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => [
        {
            source: "/public/electionMap.html",
            destination: "/src/app/pages.tsx",
        }
    ]
};


export default nextConfig;
