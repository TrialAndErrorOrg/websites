"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'sqlite',
        connection: {
            filename: env('DATABASE_FILENAME', '.tmp/data.sqlite'),
        },
        useNullAsDefault: true,
        debug: false,
    },
});
