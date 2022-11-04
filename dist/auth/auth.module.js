"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const auth_controller_1 = require("./auth.controller");
const auth_routes_1 = require("./auth.routes");
const auth_service_1 = require("./auth.service");
exports.AuthModule = {
    routes: auth_routes_1.authRouter,
    controller: auth_controller_1.authController,
    service: auth_service_1.AuthService
};
