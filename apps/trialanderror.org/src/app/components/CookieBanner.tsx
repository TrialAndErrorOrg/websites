"use client";

import { useEffect, useState } from "react";

export const CookieBanner = () => {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookie-consent");
		if (!consent) {
			setShowBanner(true);
		}
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookie-consent", "accepted");
		document.cookie =
			"cookie-consent=accepted; max-age=31536000; path=/; SameSite=Lax";
		setShowBanner(false);
		window.location.reload();
	};

	const handleReject = () => {
		localStorage.setItem("cookie-consent", "rejected");
		document.cookie =
			"cookie-consent=rejected; max-age=31536000; path=/; SameSite=Lax";
		setShowBanner(false);
	};

	if (!showBanner) {
		return null;
	}

	return (
		<>
			<div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm" />
			<div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white p-6 shadow-2xl md:bottom-6 md:left-6 md:right-auto md:max-w-md md:rounded-lg">
				<h3 className="mb-2 text-lg font-bold text-blue-500">Cookie Notice</h3>
				<p className="mb-4 text-sm text-gray-700">
					We use cookies to track conversions from our advertising campaigns.
					This helps us understand which ads are effective. This only applies to
					pages related to donations, such as the one you are currently on.
				</p>
				<div className="flex gap-3">
					<button
						type="button"
						onClick={handleReject}
						className="flex-1 rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-300"
					>
						Reject
					</button>
					<button
						type="button"
						onClick={handleAccept}
						className="flex-1 rounded bg-orange-600 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
					>
						Accept
					</button>
				</div>
			</div>
		</>
	);
};
