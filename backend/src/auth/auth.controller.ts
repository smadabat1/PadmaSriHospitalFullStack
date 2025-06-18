import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller({
    path: "auth"
})
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("login")
    login() {
        return "login"
    }

    @Post("register")
    register() {
        return "register"
    }
}