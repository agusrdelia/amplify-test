module.exports = {
  reactStrictMode: true,
  async rewrites () {
    return {
      beforeFiles: [
        {
          source: "/category/:name*",
          destination: "/section",
        },
      ],
      afterFiles: [
        {
          source: "/tag/:name*",
          destination: "/section",
        },
      ],
      fallback: [
        {
          source: "/misc/:name*",
          destination: "/section",
        },
      ]
    };
  }
}
