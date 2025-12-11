import { CareerCard } from "@/components/blocks/career-card";
import { Container } from "@/components/blocks/container";
import GiderimLogo from "@/components/blocks/giderim-logo";
import { OpenSourceCard } from "@/components/blocks/opensource-card";
import { ProjectCard } from "@/components/blocks/project-card";
import { SectionDivider } from "@/components/blocks/section-divider";
import { GitHubIcon, XIcon } from "@/components/blocks/social-icons";
import { SocialLink } from "@/components/blocks/social-link";
import { careerItems } from "@/lib/utils";
import { getGithubInfo } from "@/server/thirdparty";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
	title: "Readme",
};

const currentYear = new Date().getFullYear();
const lastPosition = currentYear - careerItems[careerItems.length - 1].from;

export default function Readme() {
	const githubResponse = getGithubInfo();

	const last3weeks =
		githubResponse.data.viewer.contributionsCollection.contributionCalendar.weeks.slice(
			-3,
		);
	const last14days = last3weeks
		.flatMap((week) => week.contributionDays)
		.slice(-14);

	const githubFollowers = githubResponse.data.viewer.followers.totalCount;
	const githubStars = githubResponse.data.viewer.repositories.nodes.reduce(
		(acc, repo) => acc + repo.stargazerCount,
		0,
	);

	return (
		<>
			<Container className="py-8 pb-10 px-7">
				<h1 className="tracking-tight text-4xl sm:text-5xl">
					Amol Kumar Gupta
					<span className="text-muted-foreground font-title font-extralight text-3xl sm:text-4xl block text-balance">
						Full Stack Devloper, Laravel Expert
					</span>
				</h1>
				<div className="pro text-muted-foreground text-balance ps-1">
					<p className="mt-6">
						Hi, I&apos;m currently working
						at{" "}
						<Link
							href="https://w3sols.com"
							target="_blank"
							rel="nofollow noreferrer"
							className="dark:prose"
						>
							@W3sols
						</Link>
						, a company that specializes in building web applications.
					</p>
					<p>
						At W3sols, my responsibility is to oversee the development and
						deployment of software solutions to meet our clients&apos; specific
						business requirements.
					</p>
				</div>
				<div className="mt-6 flex gap-6">
					<SocialLink
						href="https://github.com/AmolKumarGupta"
						aria-label="Follow on GitHub"
						icon={GitHubIcon}
						count={githubFollowers}
						label="followers"
					/>
				</div>
			</Container>
			<SectionDivider />
			<Container className="py-8 pb-10 px-8">
				<h2 className="text-3xl">Spotlight</h2>
				<p className="text-muted-foreground mb-8 mt-1">
					Most recent projects and contributions.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<ProjectCard
						title="Websnapper"
						icon={<GiderimLogo className="size-10" />}
						description="Record videos at ease."
						link="https://github.com/amolkumargupta/websnapper"
					/>
					<OpenSourceCard
						link="https://github.com/AmolKumarGupta"
						contributions={last14days}
						repoStats={githubResponse.data.viewer.repositories.nodes}
						totalStars={githubStars}
					/>
				</div>
			</Container>
			<SectionDivider />
			<Container className="py-8 pb-0">
				<div className="px-8">
					<h2 className="text-3xl">Career</h2>
					<p className="text-muted-foreground mb-8 mt-1">
						Overall I have{" "}
						<span className="font-semibold">
							{lastPosition}+ years of experience
						</span>{" "}
						in software development.
					</p>
				</div>
				<div className="flex flex-col mt-8">
					{careerItems.map((item, index) => (
						<React.Fragment key={`career-${index}`}>
							<CareerCard key={`career-${index}`} item={item} />
							{index !== careerItems.length - 1 && <SectionDivider />}
						</React.Fragment>
					))}
				</div>
			</Container>
		</>
	);
}
