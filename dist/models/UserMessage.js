"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserMessage {
    constructor(payload) {
        var data = JSON.parse(payload);
        if (!data.name || !data.message) {
            throw new Error('Invalid message payload received: ' + payload);
        }
        this.data = data;
    }
    get name() {
        return this.data.name;
    }
    get message() {
        return this.data.message;
    }
}
exports.default = UserMessage;
//# sourceMappingURL=UserMessage.js.map