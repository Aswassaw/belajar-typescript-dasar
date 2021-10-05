"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = exports.Admin = exports.User = void 0;
// Class
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.setName = function (val) {
        this.name = val;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.setAge = function (val) {
        this.age = val;
    };
    return User;
}());
exports.User = User;
console.log("**********User Class**********");
var user1 = new User("Andry Pebrianto", 18);
console.log(user1.getName());
// Inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, isMarried) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this.isMarried = isMarried;
        return _this;
    }
    Admin.prototype.getRole = function () {
        var _a = this, read = _a.read, write = _a.write;
        return { read: read, write: write };
    };
    return Admin;
}(User));
exports.Admin = Admin;
console.log("**********Admin Class**********");
var admin1 = new Admin("Bagad Ihwaludin", 17, true);
console.log(admin1.getName());
admin1.setName("Bambang Raharjo");
console.log(admin1.getName());
console.log(admin1.isMarried);
// Setter dan Getter
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(name, age, email) {
        var _this = _super.call(this, name, age) || this;
        _this._email = email;
        return _this;
    }
    Object.defineProperty(Member.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (val) {
            // Validasi email
            if (/^[\w]+@[\w]+\.[\w\.]*[a-zA-Z]$/g.test(val)) {
                this._email = val;
            }
            else {
                console.log("Email tidak valid!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return Member;
}(User));
exports.Member = Member;
console.log("**********Member Class**********");
var member1 = new Member("Adi", 18, "adi123@gmail.com");
console.log(member1.email);
member1.email = "adi277@protonmai";
console.log(member1.email);
