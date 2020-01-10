import {Container} from "inversify";
import {UserService} from "./user/user.service";
import './home.controller'

const ctx = new Container();
ctx.bind<UserService>(UserService).toSelf();

export default ctx;
