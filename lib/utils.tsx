import GiderimLogo from "@/components/blocks/giderim-logo";
import IconGithub from "@/components/icons/github";
import { IconSmashing } from "@/components/icons/smashing";
import { IconWorld } from "@tabler/icons-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formattedDate = (date: string) =>
	new Date(date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
	});
export const formattedDateTimeline = (
	date: string,
	formatOpts?: Intl.DateTimeFormatOptions | undefined,
) =>
	new Date(date).toLocaleDateString(
		"en-US",
		formatOpts
			? formatOpts
			: {
					year: "numeric",
				},
	);

export const navItems = [
	{ href: "/", label: "Readme" },
	{ href: "/projects", label: "Projects" },
	// { href: "/changelog", label: "Changelog" },
];

export const careerItems = [
	{
		from: 2021,
		to: null,
		title: "Full Stack Developer",
		company: { name: "W3sols", url: "https://w3sols.com" },
		location: "Ludhiana, Punjab",
		description: "I am currently working at W3sols as a Laravel Developer.",
		subRoles: [
			{
				from: 2024,
				to: 2025,
				title: "Filament & Livewire Developer",
				company: { name: "W3sols", url: "https://w3sols.com" },
				description:
					"I was responsible for the development of custom UI in filament, maintaining static builder in Nextjs, notification via pusher and optimization.",
			},
			{
				from: 2021,
				to: 2024,
				title: "Laravel Developer",
				company: { name: "W3sols", url: "https://w3sols.com" },
				description:
					"I was responsible for the development of workflow and queue management.",
			},
		],
	},
	{
		from: 2021,
		to: 2021,
		title: "Junior Developer",
		company: { name: "Codeartisanlab" },
		location: "Ludhiana, Punjab",
		description: "I worked on CMS written in codiginter 3",
	},
];

const dateFormat = {
	day: {
		year: "numeric" as const,
		month: "long" as const,
		day: "numeric" as const,
	},
	month: {
		year: "numeric" as const,
		month: "long" as const,
	},
	year: {
		year: "numeric" as const,
	},
};

const changelogItems: Array<{
	date: string;
	event: string;
	title: string;
	description?: string;
	icon?: string;
	dateFormatOptions?: (typeof dateFormat)[keyof typeof dateFormat];
	photos?: Array<{ src: string; variant: "1x1" | "4x3" | "4x5" | "9x16" }>;
}> = [] as const;

export const changelog = changelogItems.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const projects = [
	{
		name: "Websnapper",
		githubSlug: "AmolKumarGupta/Websnapper",
		released: "2023-10-07",
		description:
			"Websnapper is a SaaS project that enables screen recording, making videos sharable to anyone.",
		logo: <GiderimLogo className="size-10" />,
		links: [
			{
				href: "https://github.com/AmolKumarGupta/Websnapper",
				label: "GitHub",
				icon: IconGithub,
			},
		],
		metrics: [] as Array<{ label: string; value: number }>,
		featured: true,
	},
];
