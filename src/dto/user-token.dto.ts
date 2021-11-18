export class UserTokenDto{
    email:string;
    id:number;
    valid:boolean;

    constructor(user) {
        this.email = user.email;
        this.id = user.id;
        this.valid = user.valid;

    }

}