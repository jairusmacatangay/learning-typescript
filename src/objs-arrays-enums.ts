// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Jai",
//   age: 24,
//   hobbies: ["Cooking", "Anime"],
//   role: [2, "Author"], // Tuple
// };

// const person = {
//   name: "Jai",
//   age: 24,
//   hobbies: ["Cooking", "Anime"],
//   role: [2, "Author"], // Tuple
// };

// person.role.push("admin");
// person.role[0] = 10;
// person.role = [0, "Admin", "User"];

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Jai",
  age: 24,
  hobbies: ["Cooking", "Anime"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
