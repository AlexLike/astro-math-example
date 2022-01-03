export default /** @type {import('astro').AstroUserConfig} */ ({
  // all options are optional; these values are the defaults
  projectRoot: "./",
  public: "./public/",
  dist: "./dist/",
  src: "./src/",
  pages: "./src/pages/",
  renderers: [],
  markdownOptions: {
    render: [
      "@astrojs/markdown-remark",
      {
        remarkPlugins: ["remark-math"],
        rehypePlugins: ["rehype-katex"]
      }
    ]
  },
  vite: {}
})
