"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export const GoogleScript = () => {
	const [hasConsent, setHasConsent] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookie-consent");
		setHasConsent(consent === "accepted");
		return () => {
			// console.log("unmounting google script");
			window.gtag = undefined;
			window.dataLayer = undefined;
			window.google_tag_manager = undefined;
			window.google_tag_data = undefined;
		};
	}, []);

	if (!hasConsent) {
		return null;
	}

	return (
		<Script
			async
			src="https://www.googletagmanager.com/gtag/js?id=AW-17647432404"
			onReady={() => {
				// console.log("gtag script ready");
				window.dataLayer = window.dataLayer || [];
				function gtag() {
					window.dataLayer?.push(arguments);
				}
				window.gtag = gtag;
				gtag("js", new Date());

				gtag("config", "AW-17647432404");
			}}
		/>
	);
};
