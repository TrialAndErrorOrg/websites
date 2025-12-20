import { Open_Sans, Overpass } from "next/font/google";
import Script from "next/script";
import { createMetadata } from "../utils/createMetadata";
import { AnalyticsWrapper } from "./components/Analytics";
import { Footer } from "./components/Footer";

import "../styles/globals.css";
import { HeaderWrapper } from "./components/HeaderWrapper";

const overpass = Overpass({
	subsets: ["latin"],
	variable: "--font-overpass",
	display: "swap",
});

const open_sans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	display: "swap",
});

export const metadata = createMetadata({});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${open_sans.variable} ${overpass.variable}`}>
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#002642" />
				<meta name="msapplication-TileColor" content="#002642" />
				<meta name="theme-color" content="#ffffff" />
			</head>

			<body className="selection:bg-orange-200/50 flex min-h-screen flex-col bg-white tracking-tight text-gray-900 antialiased transition-colors selection:border selection:border-black selection:transition-all dark:bg-slate-800 dark:text-slate-300">
				<HeaderWrapper />
				<div className="flex-grow">{children}</div>
				<Footer />
				<AnalyticsWrapper />
				<Script
					defer
					src="https://analytics.trialanderror.org/script.js"
					data-website-id="24642014-38d2-478a-9bb0-35e9f29746ea"
				/>
			</body>
		</html>
	);
}
