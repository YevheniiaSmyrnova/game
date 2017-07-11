import { User } from './user';

export class UserService {
    private user: User = new User(
        "Yevheniia1393",
        "Yevheniia",
        "Smyrnova",
        "01-03-1995",
        "female",
        "y.smyrnova@gmail.com",
        "0994045148",
        "Kharkiv",
        "Zhenya1393"
    );

    getUser(): any {
        return this.user;
    }
}
