//@ts-check
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../..", import.meta.url));

/**
 * @type {import('next').NextConfig}
 */
const config = {
	turbopack: { root },
	outputFileTracingRoot: root,
	output: "standalone",
};

export default config;
