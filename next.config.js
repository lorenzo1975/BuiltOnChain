const withMDX = require('@next/mdx')({
  extension: /\.mdx$/
});

module.exports = withMDX({
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'i.pinimg.com']
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
});
