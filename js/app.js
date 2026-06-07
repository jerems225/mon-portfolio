// var firstName = "John"; //string
// var lastName = "Doe";
// var age = 30; //number
// var job = "Web Developer";
// var friends = ["Alice", "Bob", "Charlie"]; //array (list of values) can contain different data types
// var isVerified = true; //boolean (true or false)
// let fullName = firstName + " " + lastName;


// if (age > 18 && isVerified) {
//     console.log(fullName + " is verified.");
// }
// else if (age > 18 && !isVerified) {
//     console.log(fullName + " is not verified.");
// }
// else{
//     console.log(fullName + " is not verified.");
// }


// switch (job) {
//     case "Web Developer":
//         console.log(fullName + " is a Web Developer.");
//         break;
//     case "Designer":
//         console.log(fullName + " is a Designer.");
//         break;
//     default:
//         console.log(fullName + " has a different job.");
// }

// var counter = 0;
// while (counter < friends.length) {
//     console.log(friends[counter]);
//     counter++;
// }

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// friends.forEach((friend, index) => {
//     console.log(friend + " is at index " + index);
// });

// var updatedFriends = friends.map((friend) => {
//     console.log(friend);
//     return friend.toUpperCase();
// });

// console.log(updatedFriends);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Web Developer",
    friends: ["Alice", "Bob", "Charlie"],
    isVerified: true
};

const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
    {
        id: 3,
        firstName: "Emily",
        lastName: "Johnson",
        getFullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    },
];

function getUserById(id) {
    // const user = users.map((u) => {
    //     if (u.id == id) {
    //         return u;
    //     }
    // });

    const user = users.find((u) => {
        if (u.id == id) {
            return u;
        }
    });


    const result = {
        data: user !== undefined ? user : null,
        message: user !== undefined ? "User found" : "User not found"
    };

    return result;
}

function updateUser(id, newData) {
    const user = getUserById(id);
    if (user.data === null) {
        return {
            data: null,
            message: "User Not found"
        };
    }

    if (typeof newData != "object" || newData === null) {
        return {
            data: null,
            message: "Invalid data format"
        };
    }

    const updatedUser = {
            firstName: newData.firstName || user.data.firstName,
            lastName: newData.lastName || user.data.lastName,
        };

    return {
        data: updatedUser,
        message: "User updated successfully"
    }
}

const updateUserResult = updateUser(2, { lastName: "Doe" });
console.log(updateUserResult);
