"use strict"

// Class
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static sayHi() {
        console.log('Greeting from User class !')
    }

    register() {
        console.log(this.username + ' is registered !')
    }
}

User.sayHi();
let user = new User('John', 'john@es6.com', '1234');
user.register();

// Inheritance
class Member extends User {
    constructor(username, email, password, memberPackage) {
        super(username, email, password);
        this.package = memberPackage;
    }

    getPackage() {
        console.log(this.username + ' is subscribed to package ' + this.package);
    }
}

let member = new Member('John', 'john@es6.com', '1234', 'Golden');
member.register();
member.getPackage();