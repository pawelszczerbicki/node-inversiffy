import {controller, httpGet, httpPost, interfaces, request, response} from "inversify-express-utils";
import {NextFunction, Request, Response} from "express";
import {UserService} from "./user/user.service";
import {User} from "./user/user";

interface Hello {
    msg: string
}

@controller("")
export class HomeController implements interfaces.Controller {

    constructor(private userService: UserService) {
    }

    @httpGet("")
    private home(@request() req: Request, @response() res: Response): Hello {
        return {msg: "Hello"};
    }


    @httpPost("/user")
    private async saveUser(req: Request, res: Response, next: NextFunction) {
        return this.userService.save(req.body);
    }

    @httpGet("/user")
    private async getUsers(@request() req: Request, @response() res: Response): Promise<User | {}> {
        const user = await this.userService.get(req.query.userId);
        return user || {}
    }
}
