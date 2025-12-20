import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles.css";

import { Open_Sans, Overpass } from "next/font/google";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { SITE } from "../config";

const overpass = Overpass({
	subsets: ["latin"],
	variable: "--font-overpass",
});

const open_sans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-open-sans",
});

function CustomApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
        :root {
          --font-open-sans: ${open_sans.style.fontFamily}, system-ui, sans-serif;
          --font-overpass: ${overpass.style.fontFamily}, system-ui, sans-serif;
        }
      `}</style>

			<DefaultSeo
				openGraph={{
					type: "website",
					locale: "en_US",
					url: SITE.origin,
					site_name: SITE.name,
					description: SITE.description,
					images: [
						{
							url: "https://og.trialanderror.org/api/og/jote?name=Open Positions",
						},
					],
				}}
				twitter={{
					handle: "@jtrialerror",
					site: "@jtrialerror",
					cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} />
			<Script
				defer
				src="https://analytics.trialanderror.org/script.js"
				data-website-id="60d1573a-ec6c-43e7-88cb-2fdaae0701b1"
			/>
		</>
	);
}

export default CustomApp;
