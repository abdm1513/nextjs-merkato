import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {};
 
export default withNextIntl(nextConfig);


// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   /* config options here */
// // };

// // export default nextConfig;
// import type { NextConfig } from 'next'
// import withNextIntl from 'next-intl/plugin'

// const nextConfig: NextConfig = withNextIntl()({
//   /* config options here */
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'utfs.io',
//         port: '',
//       },
//     ],
//   },
// })

// export default nextConfig
