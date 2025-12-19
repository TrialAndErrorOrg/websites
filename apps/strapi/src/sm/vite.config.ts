import { type InlineConfig, mergeConfig } from "vite";

export default (config: InlineConfig) => {
	// Important: always return the modified config
	return mergeConfig(config, {
		resolve: {
			alias: {
				"@": "/src",
			},
		},
	});
};
