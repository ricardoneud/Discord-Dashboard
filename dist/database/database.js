"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const KeyVModule = require("keyv");
class Database {
    constructor(src, namespace) {
        this.keyv = new KeyVModule(src, namespace ? { namespace } : undefined);
    }
    async get(key) {
        return this.keyv.get(key);
    }
    async set(key, value, ttl) {
        return this.keyv.set(key, value, ttl || undefined);
    }
}
exports.Database = Database;
