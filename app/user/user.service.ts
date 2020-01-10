import {injectable} from "inversify";
import {User} from "./user";

@injectable()
export class UserService {
    private users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
        return Promise.resolve();
    }

    async get(userId: string): Promise<User | undefined> {
        return Promise.resolve(this.users.find(u => u.id === userId))
    }
}
