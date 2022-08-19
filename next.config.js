module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/maintenance",
        permanent: true,
      },
    ];
  },
};
