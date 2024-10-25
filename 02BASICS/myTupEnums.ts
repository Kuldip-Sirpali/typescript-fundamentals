// const tUser: (string | number)[] = [1, "me"];
let tUser: [string, number, boolean];

tUser = ["me", 123, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [112, "me@me.com"];

newUser[1] = "me.com";

export {};
