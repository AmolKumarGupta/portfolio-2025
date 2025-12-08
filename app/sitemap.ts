export const dynamic = "force-static";

export default async function sitemap() {
	const routes = [
		"",
		// "/changelog",
		// "/notes",
		"/projects",
		// "/stack",
	].map((route) => ({
		url: `https://amol.pages.dev${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes];
}
