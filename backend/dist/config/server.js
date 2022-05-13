"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_task_1 = __importDefault(require("@webbio/strapi-plugin-scheduler/cron-task"));
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('STRAPI_APP_KEYS'),
    },
    cron: {
        enabled: true,
        tasks: cron_task_1.default,
    },
});
