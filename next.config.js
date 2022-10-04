/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  env: {
    messengerId: "709075823675090",
    serviceId: "service_qbpmz5j",
    templateId: "template_6euvv2s",
    publicKey: "OYpkvOmoF94W63zrA",
    COMMERCE_PUBLIC_KEY: process.env.COMMERCE_PUBLIC_KEY,
    COMMERCE_SECRET_KEY: process.env.COMMERCE_SECRET_KEY,
    STRIP_PK_KEY: process.env.STRIP_PK_KEY,
    STRIP_SK_KEY: process.env.STRIP_SK_KEY,
  },
  images: {
    domains: ["s3.us-east-2.amazonaws.com", "cdn.chec.io"],
  },
};

module.exports = nextConfig;
