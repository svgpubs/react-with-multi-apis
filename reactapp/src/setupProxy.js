const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api1",
    createProxyMiddleware({
      target: "http://localhost:3080",
      changeOrigin: true,
    })
  );
  app.use(
    "/api2",
    createProxyMiddleware({
      target: `http://localhost:3070`,
      changeOrigin: true,
    })
  );
  app.use(
    "/api_to_external_website",
    createProxyMiddleware({
      target:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false",
      headers: {
        accept: "application/json",
        method: "GET",
      },
      changeOrigin: true,
    })
  );
};
