let score: number | string = 33;

score = "12";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

//union type
let me: User | Admin = { name: "k", id: 123 };

me = { username: "kk", id: 124 };

getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "ailse" | "middle" | "window";

// seatAllotment = "crew"; not possible
