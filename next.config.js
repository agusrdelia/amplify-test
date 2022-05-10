module.exports = {
  reactStrictMode: true,
  async rewrites () {
    return [
        {
          source: "/category/:name*",
          destination: "/section",
        },
      ]
  }
}
