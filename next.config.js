/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ["localhost"],
  },
  //сайт будет доступен по адресу http://localhost:3000/basePath
  basePath: "", //"/red"
  //https://nextjs.org/docs/api-reference/next.config.js/rewrites
  //например подменить адреса картинок
  async rewrites() {
    return [
      // для одной картинки
      // {
      //   source: "/images/1.png",  //картинка будет доступна по адресу - http://localhost:3000/images/1.png
      //   destination: "http://localhost:3001/images/bmw-3.png",
      // },
      //для всех картинок
      {
        source: "/images/:path*",
        destination: "http://localhost:3001/images/:path*",
      },
    ];
  },
  env: {
    //будет доступно в коде через process.env.API_URL
    API_URL: "//localhost:3001",
    //API_KEY описать в файле .env
    API_KEY: process.env.API_KEY,
  },
  // async redirects() {
  //   return [
  //     {
  //       //обязательно указывать слеш вначале
  //       //перейти на страницу source, обновится и попадаем на destination
  //       //на клиенте не будет редиректа, только на сервере сработает
  //       source: "/car/1",
  //       destination: "/car/2",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
