import {User} from './user';

export class UserService {

    private user: User{} =
    {
        login: "Yevheniia1393",
        firstName: "Yevheniia",
        lastName: "Smyrnova",
        dateOfBirth: "01-03-1995",
        gender: "female",
        email: "y.smyrnova@gmail.com",
        phone: "0994045148",
        address: "Kharkiv",
        skype: "Zhenya1393"
    };

    getUser(): User[] {

        return this.user;
    }

    getFullName() {
        return user.firstName + " " + lastName;
    }
}