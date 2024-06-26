/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: "/",
            destination: "/register",
            permanent: true,
          },
        ];
      },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.pokemondb.net',
            port: '',
            pathname: '/artwork/**',
          },
        ],
      },
      reactStrictMode: true,
};

export default nextConfig;
