"use strict";
// class User {
//   public email: string;
//   // #name: string;
//   private name: string;
//   readonly city: string = "world";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
//better approach
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "world";
    }
    deleteToken() {
        console.log("token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //can't have type in set
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const newUser = new User("k@k.com", "k");
