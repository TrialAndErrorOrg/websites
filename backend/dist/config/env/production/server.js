"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cron_task_1 = __importDefault(require("@webbio/strapi-plugin-scheduler/cron-task"));
exports.default = ({ env }) => ({
    host: env('HOST', 'localhost'),
    port: env.int('PORT', 8080),
    url: `${env('PROD_HOST', 'https://cms.centeroftrialanderror.com')}`,
    proxy: true,
    admin: {
        url: `${env('PROD_HOST', 'https://cms.centeroftrialanderror.com')}/admin`,
        secret: env('ADMIN_JWT_SECRET', 'c0b47f9208b27587591171747a858bc8'),
    },
    app: {
        keys: env.array('STRAPI_APP_KEYS'),
    },
    cron: {
        enabled: true,
        tasks: cron_task_1.default,
    },
});
