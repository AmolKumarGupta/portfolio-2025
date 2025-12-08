const CACHE_DURATION = 3600 * 1.5; // 1.5 hours
const USE_MOCK_DATA_FOR_DEVELOPMENT = true;
const DEFAULT_GITHUB_RESPONSE = {
	data: {
		viewer: {
			login: "AmolKumarGupta",
			repositories: {
				totalCount: 27,
				nodes: [
					{
						nameWithOwner: "AmolKumarGupta/Websnapper",
						name: "Websnapper",
						description:
							"Websnapper is a SaaS project that enables screen recording, making videos sharable to anyone.",
						forkCount: 1,
						stargazerCount: 6,
						createdAt: "2023-10-07T17:26:01Z",
						updatedAt: "2024-10-11T21:06:39Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/laravel-route-tracker",
						name: "laravel-route-tracker",
						description:
							"A Laravel package to track and log route usage in your application. Useful for debugging, and monitoring which routes are accessed and how often.",
						forkCount: 0,
						stargazerCount: 3,
						createdAt: "2025-06-30T09:54:00Z",
						updatedAt: "2025-07-14T12:20:08Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/ReactiveCi4",
						name: "ReactiveCi4",
						description: "Log activities in codeigniter 4",
						forkCount: 0,
						stargazerCount: 3,
						createdAt: "2022-12-13T20:17:26Z",
						updatedAt: "2025-01-04T18:55:54Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/pixel-art",
						name: "pixel-art",
						description: "Collection of pixal art created by me",
						forkCount: 0,
						stargazerCount: 2,
						createdAt: "2023-09-27T05:12:39Z",
						updatedAt: "2024-05-30T15:25:55Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/keepup",
						name: "keepup",
						description:
							"Habit Tracker PWA - allows users to track their daily habits and log your progress on date basis.",
						forkCount: 3,
						stargazerCount: 2,
						createdAt: "2023-08-31T19:10:43Z",
						updatedAt: "2023-10-05T19:56:36Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/Up-finance-Backend",
						name: "Up-finance-Backend",
						description: "The backend of Up-Finance website",
						forkCount: 1,
						stargazerCount: 2,
						createdAt: "2023-05-01T17:49:12Z",
						updatedAt: "2025-01-26T18:48:36Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/Ref-Mini",
						name: "Ref-Mini",
						description: "Ref-Mini, A laravel based personal cms",
						forkCount: 0,
						stargazerCount: 2,
						createdAt: "2023-02-16T19:55:22Z",
						updatedAt: "2023-08-27T15:31:07Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/trie-php",
						name: "trie-php",
						description: "Trie implementation in php",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2025-02-01T18:35:49Z",
						updatedAt: "2025-02-16T17:23:54Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/reminder",
						name: "reminder",
						description: "Reminder CLI Tool",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2024-03-04T19:03:44Z",
						updatedAt: "2024-03-08T19:44:02Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/leafjs",
						name: "leafjs",
						description:
							"Minimal Framework for building User Interfaces directly in HTML markup",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2024-01-06T11:23:14Z",
						updatedAt: "2024-08-26T18:39:47Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/vast",
						name: "vast",
						description: "Vast: A Personal Blog",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2023-07-22T20:39:17Z",
						updatedAt: "2025-01-26T18:48:00Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/portfolio",
						name: "portfolio",
						description:
							"A portfolio made in react, tailwindcss highlighting on github projects",
						forkCount: 1,
						stargazerCount: 1,
						createdAt: "2022-08-30T20:28:40Z",
						updatedAt: "2023-08-03T03:00:05Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/rent-blog",
						name: "rent-blog",
						description: "Rent management system built over codeigniter 4",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2022-08-11T10:43:01Z",
						updatedAt: "2025-06-13T11:34:03Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/tool-hub",
						name: "tool-hub",
						description: "this is a college level project for final semester",
						forkCount: 2,
						stargazerCount: 1,
						createdAt: "2022-03-10T09:02:04Z",
						updatedAt: "2023-01-26T16:36:03Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/givemecode",
						name: "givemecode",
						description: "A project to make things easy.",
						forkCount: 5,
						stargazerCount: 1,
						createdAt: "2021-12-08T19:44:33Z",
						updatedAt: "2023-01-26T16:38:07Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/Flock",
						name: "Flock",
						description: "This is a Boid simulation in java from scratch.",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2021-12-07T08:45:10Z",
						updatedAt: "2022-09-11T11:16:35Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/nikhil",
						name: "nikhil",
						description: "this is a website for my friend Nikhil.",
						forkCount: 0,
						stargazerCount: 1,
						createdAt: "2021-08-30T16:50:28Z",
						updatedAt: "2022-09-11T11:19:38Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/crona",
						name: "crona",
						description:
							"Crona is an experimental job scheduler written in golang, alternative for cron",
						forkCount: 0,
						stargazerCount: 0,
						createdAt: "2025-04-20T20:27:07Z",
						updatedAt: "2025-06-13T11:12:55Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/riime-rms",
						name: "riime-rms",
						description: "Rental Management System",
						forkCount: 0,
						stargazerCount: 0,
						createdAt: "2024-10-21T09:20:45Z",
						updatedAt: "2025-03-29T10:25:35Z",
					},
					{
						nameWithOwner: "AmolKumarGupta/codecrafters-grep-go",
						name: "codecrafters-grep-go",
						description: null,
						forkCount: 0,
						stargazerCount: 0,
						createdAt: "2024-08-24T20:44:34Z",
						updatedAt: "2024-08-24T20:45:41Z",
					},
				],
			},
			followers: {
				totalCount: 14,
			},
			contributionsCollection: {
				contributionCalendar: {
					totalContributions: 262,
					weeks: [
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: "2025-10-12",
								},
								{
									contributionCount: 0,
									date: "2025-10-13",
								},
								{
									contributionCount: 0,
									date: "2025-10-14",
								},
								{
									contributionCount: 0,
									date: "2025-10-15",
								},
								{
									contributionCount: 0,
									date: "2025-10-16",
								},
								{
									contributionCount: 0,
									date: "2025-10-17",
								},
								{
									contributionCount: 0,
									date: "2025-10-18",
								},
							],
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: "2025-10-19",
								},
								{
									contributionCount: 0,
									date: "2025-10-20",
								},
								{
									contributionCount: 0,
									date: "2025-10-21",
								},
								{
									contributionCount: 0,
									date: "2025-10-22",
								},
								{
									contributionCount: 0,
									date: "2025-10-23",
								},
								{
									contributionCount: 0,
									date: "2025-10-24",
								},
								{
									contributionCount: 0,
									date: "2025-10-25",
								},
							],
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: "2025-10-26",
								},
								{
									contributionCount: 0,
									date: "2025-10-27",
								},
								{
									contributionCount: 0,
									date: "2025-10-28",
								},
								{
									contributionCount: 0,
									date: "2025-10-29",
								},
								{
									contributionCount: 0,
									date: "2025-10-30",
								},
								{
									contributionCount: 2,
									date: "2025-10-31",
								},
								{
									contributionCount: 0,
									date: "2025-11-01",
								},
							],
						},
						{
							contributionDays: [
								{
									contributionCount: 0,
									date: "2025-11-02",
								},
								{
									contributionCount: 2,
									date: "2025-11-03",
								},
								{
									contributionCount: 0,
									date: "2025-11-04",
								},
								{
									contributionCount: 0,
									date: "2025-11-05",
								},
								{
									contributionCount: 0,
									date: "2025-11-06",
								},
								{
									contributionCount: 0,
									date: "2025-11-07",
								},
								{
									contributionCount: 0,
									date: "2025-11-08",
								},
							],
						},
					],
				},
			},
		},
	},
};

export const getGithubInfo = () => DEFAULT_GITHUB_RESPONSE;

// export const getGithubInfo = cache(
//   async (): Promise<Externals.Github.ApiResponse> => {
//     try {
//       // Avoid rate limiting in development
//       // set USE_MOCK_DATA_FOR_DEVELOPMENT false to use real data
//       if (USE_MOCK_DATA_FOR_DEVELOPMENT) {
//         return DEFAULT_GITHUB_RESPONSE;
//       }

//       const query = `
// {
//   viewer {
//     login
//     repositories(
//       first: 20
//       affiliations: OWNER
//       isFork: false
//       orderBy: {field: STARGAZERS, direction: DESC}
//     ) {
//       totalCount
//       nodes {
//         nameWithOwner
//         name
//         description
//         forkCount
//         stargazerCount
//         createdAt
//         updatedAt
//       }
//     }
//     followers {
//       totalCount
//     }
//     contributionsCollection {
//       contributionCalendar {
//         totalContributions
//         weeks {
//           contributionDays {
//             contributionCount
//             date
//           }
//         }
//       }
//     }
//   }
// }
// `;

//       console.log("API HIT: github");
//       const res = await fetch("https://api.github.com/graphql", {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
//         },
//         body: JSON.stringify({
//           query,
//         }),
//         next: { revalidate: CACHE_DURATION },
//       });

//       return await res.json();
//     } catch (error) {
//       console.error("github api error", error);
//       return DEFAULT_GITHUB_RESPONSE;
//     }
//   },
//   ["my-github-data"],
//   {
//     revalidate: CACHE_DURATION,
//   },
// );
