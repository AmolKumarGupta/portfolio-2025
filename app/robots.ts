export const dynamic = "force-static";

export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
			},
		],
		sitemap: "https://amol.pages.dev/sitemap.xml",
		host: "https://amol.pages.dev",
	};
}
