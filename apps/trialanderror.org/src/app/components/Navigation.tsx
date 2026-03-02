"use client";

/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/jsx-no-bind */

import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import type { Menu, MenuItem } from "@/types";
import { useHideableNavbar } from "../../hooks/useHideableNavbar";

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

function getTarget(item: MenuItem) {
	if (item.target) return item.target;
	if (item.url?.startsWith("http")) return "_blank";
	return undefined;
}

function getUnderline(pathname?: string | null, url?: string | null) {
	if (!pathname || !url) return "";
	if (pathname.replace(/^\//, "") !== url.replace(/^\//, "")) return "";
	return "after:!w-full";
}

function isPathPrefix(prefix: number[], value: number[]) {
	if (prefix.length > value.length) return false;
	return prefix.every((part, index) => value[index] === part);
}

function DesktopMenuItem({
	item,
	path,
	depth,
	openPath,
	setOpenPath,
	closeAll,
	pathname,
}: {
	item: MenuItem;
	path: number[];
	depth: number;
	openPath: number[];
	setOpenPath: (next: number[]) => void;
	closeAll: () => void;
	pathname?: string | null;
}) {
	const hasChildren = !!item.children?.length;
	const branchOpen = isPathPrefix(path, openPath);
	const baseButtonClasses =
		depth === 0
			? classNames(
					"sleek-underline-blue text-xl text-blue-500",
					"group inline-flex items-center text-base font-medium hover:text-gray-900 hover:ring-[rgba(0,0,0,0)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
					"text-left",
					getUnderline(pathname, item.url),
				)
			: "sleek-underline-blue -m-3 flex w-full items-center justify-between rounded-md p-3 text-left hover:bg-blue-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";

	if (!hasChildren) {
		if (!item.url) return null;

		if (depth === 0) {
			return (
				<Link
					href={item.url}
					target={getTarget(item)}
					onClick={closeAll}
					className={classNames(
						"sleek-underline-blue text-lg font-semibold text-blue-500",
						getUnderline(pathname, item.url),
					)}
				>
					{item.title}
				</Link>
			);
		}

		return (
			<Link
				href={item.url}
				target={getTarget(item)}
				scroll={false}
				onClick={closeAll}
				className="sleek-underline-blue -m-3 block rounded-md p-3 hover:bg-blue-50/50"
			>
				<p className="text-base font-medium text-gray-900">{item.title}</p>
				{item.description ? (
					<p className="mt-1 text-sm text-gray-500">{item.description}</p>
				) : null}
			</Link>
		);
	}

	const handleEnter = () => setOpenPath(path);
	const handleLeave = () => setOpenPath(path.slice(0, -1));
	const handleClick = () => {
		if (branchOpen) {
			setOpenPath(path.slice(0, -1));
			return;
		}
		setOpenPath(path);
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: hover-only wrapper for submenu state
		<div
			className="relative"
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			<button type="button" onClick={handleClick} className={baseButtonClasses}>
				{depth === 0 ? (
					<span className="text-lg text-blue-500">{item.title}</span>
				) : (
					<div>
						<p className="text-base font-medium text-gray-900">{item.title}</p>
						{item.description ? (
							<p className="mt-1 text-sm text-gray-500">{item.description}</p>
						) : null}
					</div>
				)}
				{depth === 0 ? (
					<ChevronDownIcon
						className="ml-2 h-5 w-5 text-blue-500"
						aria-hidden="true"
					/>
				) : (
					<ChevronRightIcon
						className="ml-2 h-4 w-4 flex-shrink-0 text-blue-500"
						aria-hidden="true"
					/>
				)}
			</button>

			<Transition
				as={Fragment}
				show={branchOpen}
				enter="transition ease-out duration-150"
				enterFrom={
					depth === 0 ? "opacity-0 translate-y-1" : "opacity-0 translate-x-1"
				}
				enterTo={
					depth === 0
						? "opacity-100 translate-y-0"
						: "opacity-100 translate-x-0"
				}
				leave="transition ease-in duration-100"
				leaveFrom={
					depth === 0
						? "opacity-100 translate-y-0"
						: "opacity-100 translate-x-0"
				}
				leaveTo={
					depth === 0 ? "opacity-0 translate-y-1" : "opacity-0 translate-x-1"
				}
			>
				<div
					className={
						depth === 0
							? "absolute left-1/2 z-10 mt-3 w-screen max-w-[250px] -translate-x-1/2 transform px-2 sm:px-0"
							: "absolute left-full top-0 z-20 ml-1 w-56"
					}
				>
					<div className="border-2 border-blue-500 bg-white ring-opacity-5">
						<div
							className={
								depth === 0
									? "relative grid gap-6 px-5 py-6 sm:gap-8 sm:p-8"
									: "grid gap-5 px-6 py-5"
							}
						>
							{item.children?.map((child, index) => (
								<DesktopMenuItem
									key={`${path.join("-")}-${child.title}-${index}`}
									item={child}
									path={[...path, index]}
									depth={depth + 1}
									openPath={openPath}
									setOpenPath={setOpenPath}
									closeAll={closeAll}
									pathname={pathname}
								/>
							))}
						</div>
					</div>
				</div>
			</Transition>
		</div>
	);
}

export function Navigation({ nav }: { nav: Menu }) {
	const pathname = usePathname();

	const { isNavbarVisible, navbarRef } = useHideableNavbar();
	const [hover, setHover] = useState(false);
	const [desktopOpenPath, setDesktopOpenPath] = useState<number[]>([]);
	const desktopNavRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!desktopOpenPath.length) return;

		const onDocumentClick = (event: MouseEvent) => {
			if (!desktopNavRef.current) return;
			if (desktopNavRef.current.contains(event.target as Node)) return;
			setDesktopOpenPath([]);
		};

		const onEscape = (event: KeyboardEvent) => {
			if (event.key !== "Escape") return;
			setDesktopOpenPath([]);
		};

		document.addEventListener("mousedown", onDocumentClick);
		document.addEventListener("keydown", onEscape);

		return () => {
			document.removeEventListener("mousedown", onDocumentClick);
			document.removeEventListener("keydown", onEscape);
		};
	}, [desktopOpenPath.length]);

	const closeDesktopMenus = () => setDesktopOpenPath([]);

	return (
		<Popover
			as="nav"
			className={`fixed top-0 z-10 md:bg-white ${
				isNavbarVisible || hover ? "translate-y-0" : "-translate-y-full"
			} transition-transform duration-500 ease-out`}
			ref={navbarRef}
		>
			<motion.a
				onHoverStart={() => setHover(true)}
				onHoverEnd={() => setHover(false)}
				href="/"
				initial={{ translateY: "-21vh" }}
				animate={{ translateY: "-4rem" }}
				transition={{
					type: "spring",
					stiffness: 100,
					bounce: 0.5,
				}}
				id="ribbon"
				className="absolute left-4 z-20 hidden h-[calc(21vh+5rem)] w-20 flex-col items-center justify-end bg-blue-500 md:flex lg:left-[calc(16.6667%-8vw)]"
			>
				<Image
					src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
					alt="TE logo"
					width={90}
					height={90}
				/>
			</motion.a>
			<div className="flex w-screen items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 md:pr-[9vw]">
				<div className="flex justify-start md:w-0 md:flex-1" />
				<div className="-my-2 md:hidden">
					<Popover.Button className="inline-flex items-center justify-center rounded-md border-4 border-blue-500 bg-white p-2  text-blue-500  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
						<span className="sr-only">Open menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</Popover.Button>
				</div>
				<div ref={desktopNavRef} className="hidden space-x-10 md:flex">
					{nav.items?.map((item, index) => (
						<DesktopMenuItem
							key={`${item.title}-${index}`}
							item={item}
							path={[index]}
							depth={0}
							openPath={desktopOpenPath}
							setOpenPath={setDesktopOpenPath}
							closeAll={closeDesktopMenus}
							pathname={pathname}
						/>
					))}
				</div>
			</div>
			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 origin-top-right transform p-1 transition md:hidden"
				>
					<div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
						<div className="px-5 pb-6 pt-5">
							<div className="flex items-center justify-between">
								<div>
									<Image
										className="bg-blue-500"
										src="https://cote.azureedge.net/cote-strapi-uploads/assets/TE_logo_white_transp_back_71a53de683.svg"
										alt="Workflow"
										width={40}
										height={40}
									/>
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
										<span className="sr-only">Close menu</span>
										<XMarkIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid grid-cols-1">
									{nav.items?.map((item) => {
										if (item.children?.length === 0) {
											const shouldOpenInNewTab = getTarget(item);
											return (
												<Link
													key={item.title}
													href={item.url ?? "/"}
													target={shouldOpenInNewTab}
													className="flex items-center rounded-lg py-3 hover:bg-gray-50"
												>
													<div className="text-base font-medium text-gray-900">
														{item.title}
													</div>
												</Link>
											);
										}

										return item?.children?.map((subItem) => {
											if (!subItem?.url) return null;

											const shouldOpenInNewTab = getTarget(subItem);
											return (
												<Link
													key={subItem.title}
													href={subItem.url}
													target={shouldOpenInNewTab}
													className="flex items-center rounded-lg py-3 hover:bg-gray-50"
												>
													<div className="text-base font-medium text-gray-900">
														{subItem.title}
													</div>
												</Link>
											);
										});
									})}
								</nav>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
