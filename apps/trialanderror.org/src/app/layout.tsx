import { Open_Sans, Overpass } from "next/font/google";
import { createMetadata } from "../utils/createMetadata";
import { AnalyticsWrapper } from "./components/Analytics";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

import "../styles/globals.css";
import Script from "next/script";

const overpass = Overpass({
	subsets: ["latin"],
	variable: "--font-overpass",
	// display: 'swap',
});

const openSans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
	// display: 'swap',
});

export const metadata = createMetadata({
	title: "Center of Trial and Error",
	description: "Creating transparent and responsible scholarship.",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${openSans.variable} ${overpass.variable}`}>
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
			<body>
				<Nav />
				<main>{children}</main>
				<Footer />
				<AnalyticsWrapper />

				<Script
					defer
					src="https://analytics.trialanderror.org/script.js"
					data-website-id="60d1573a-ec6c-43e7-88cb-2fdaae0701b1"
				/>
			</body>
		</html>
	);
}
