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
  protected _courseCount = 1;
  readonly city: string = "world";
  constructor(public email: string, public name: string) {}

  private deleteToken() {
    console.log("token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
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
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}


const newUser = new User("k@k.com", "k");

