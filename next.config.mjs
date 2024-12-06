/** @type {import('next').NextConfig} */

import dotenv from "dotenv";
dotenv.config();

const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["invest.platformatest.ru"],
  },
  env: {
    DB_HOST: process.env.DB_HOST,
  },
  reactStrictMode: false,
};

export default nextConfig;
