// const User = {
//   name: "k",
//   email: "k@k.dev",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// let newUser = { name: "me", isPaid: true, email: "k@k.com" };
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "mern", price: 999 };
// }

//custom types :: Type Aliases

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
// }

// createUser({ name: "", email: "", isActive: true });

type User = {
  readonly _id: string; //readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

let myUser: User = {
  _id: "12345",
  name: "k",
  email: "k@k.com",
  isActive: false,
};

myUser.email = "k@gmail.com";

// myUser._id = "678";
export {};
