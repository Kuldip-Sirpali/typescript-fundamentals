interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;

  getCoupon(couponName: string, value: number): number;
}

//it is generally stored in another file
interface User {
  githubToken: string;
}

//inheritants
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const me: Admin = {
  dbId: 11,
  email: "k@k.com",
  userId: 111,
  role: "admin",
  githubToken: "github",
  startTrial: () => {
    return "trial started";
  },

  getCoupon: (name: "k", off: 10) => {
    return 10;
  },
};

me.email = "u@u.com";
