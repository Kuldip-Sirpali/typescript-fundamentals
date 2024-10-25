const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

// identityThree("3");

function identityFour<T>(val: T): T {
  return val;
}

interface Bootle {
  brand: string;
  type: string;
}

// identityFour<Bootle>({ brand: "everest", type: "gym" });

function getSearchProducts<T>(products: T[]): T {
  //do some database operation

  const myIndex = 3;
  return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operation
  const myIndex = 4;
  return products[myIndex];
};

interface Datebase {
  connection: string;
  username: string;
  password: string;
}

function demo<T, U extends Datebase>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// demo(3, {});

interface Quiz {
  name: string;
  type: string;
}

interface course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
