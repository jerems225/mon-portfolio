var person = {
    firstName: "John",
    lastName: "Doe",
    birthYear: 1990,
    job: "Developer",
    friends: ["Alice", "Bob", "Charlie"],
    isVerified: true
}

const date = new Date();
const year = date.getFullYear();

function calculateAge(birthYear, currentYear) {
    let age = currentYear - birthYear;
    return age;
}

const getPersonFriends = () => {
    // for (let i = 0; i < person.friends.length; i++) {
    //     console.log(person.friends[i]);
    // }

    person.friends.map((friend) => {
        console.log(friend);
    });
};

getPersonFriends();
console.log(calculateAge(person.birthYear, year));