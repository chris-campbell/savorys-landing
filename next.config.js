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
  },
  images: {
    domains: ["s3.us-east-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
