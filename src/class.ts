// Class
export class User {
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  name: string;
  age: number;

  getName(): string {
    return this.name;
  }

  setName(val: string): void {
    this.name = val;
  }

  getAge(): number {
    return this.age;
  }

  setAge(val: number): void {
    this.age = val;
  }
}
console.log("**********User Class**********");
const user1 = new User("Andry Pebrianto", 18);
console.log(user1.getName());

// Inheritance
export class Admin extends User {
  constructor(name: string, age: number, isMarried: boolean) {
    super(name, age);
    this.isMarried = isMarried;
  }

  isMarried: boolean;
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    const { read, write } = this;
    return { read, write };
  }
}
console.log("**********Admin Class**********");
const admin1 = new Admin("Bagad Ihwaludin", 17, true);
console.log(admin1.getName());
admin1.setName("Bambang Raharjo");
console.log(admin1.getName());
console.log(admin1.isMarried);

// Setter dan Getter
export class Member extends User {
  constructor(name: string, age: number, email: string) {
    super(name, age);
    this._email = email;
  }

  private _email: string;
  static roleName: string = "Member";

  static getRoleName() {
    return "Your role is " + this.roleName;
  }

  set email(val: string) {
    // Validasi email
    if (/^[\w]+@[\w]+\.[\w\.]*[a-zA-Z]$/g.test(val)) {
      this._email = val;
    } else {
      console.log("Email tidak valid!");
    }
  }

  get email(): string {
    return this._email;
  }
}
console.log("**********Member Class**********");
const member1 = new Member("Adi", 18, "adi123@gmail.com");
console.log(member1.email);
member1.email = "adi277@protonmai";
console.log(member1.email);
console.log(Member.roleName);
console.log(Member.getRoleName());
