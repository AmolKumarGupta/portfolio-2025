import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
import "./globals.css";

const LexendFont = Lexend({
	subsets: ["latin"],
	variable: "--font-lexend",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://amol.pages.dev"),
	title: {
		default: "Amol Kumar Gupta",
		template: "Amol | %s",
	},
	appleWebApp: {
		title: "amol",
	},
	description: "Developer",
	openGraph: {
		title: "Amol",
		description: "Developer",
		url: "https://amol.pages.dev",
		siteName: "Amol",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Amol",
		card: "summary_large_image",
	},
	verification: {
		// google: '',
		// yandex: '',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable} ${GeistMono.variable} ${LexendFont.variable}`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					storageKey="amol.portfolio.theme"
					disableTransitionOnChange
				>
					<TooltipProvider
						delayDuration={10}
						skipDelayDuration={10}
						disableHoverableContent
					>
						{/* <div className="flex w-full h-full min-h-full"> */}
						{/* <div className="relative flex w-full h-full flex-col"> */}
						{children}
						{/* </div> */}
						{/* </div> */}
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
