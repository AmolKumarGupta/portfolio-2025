import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["mdx", "ts", "tsx"],
	reactStrictMode: false,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
			},
		],
	},
	serverExternalPackages: ["twitter-api-v2"],
	output: "export",
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: ["remark-gfm"],
		rehypePlugins: [],
	},
});

export default withMDX(nextConfig);
