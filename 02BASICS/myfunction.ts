function addTwo(num: number): number {
  return num + 2;
  // return "hello";
}
let myvalue = addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase();
}
getUpper("ram");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("ram", "ram@god.com", false);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("sita", "sita@god.com");

// function getVal(myVal: number): boolean {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "ironman", "spiderman"];
// const heros = [1,2,3];
// detect automatically

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.error(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
export {};
