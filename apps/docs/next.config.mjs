import createMdx from '@next/mdx'
import rehypeHighlight from 'rehype-highlight'

/** @type {import('next').NextConfig} */
const nextConfig = {
   // Configure pageExtensions to include md and mdx
   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = createMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight]
 },
})


// Merge MDX config with Next.js config
export default withMDX(nextConfig)
