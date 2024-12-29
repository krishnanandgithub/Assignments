import {
  animalsOfPeopleLeavedInBAndC,
  averageAge,
  cities,
  hobbiesShared,
  moreThan1PetOwnedBy,
  nameAndTypeOfPets,
  petsAndActivities,
  totalCSPeopleHavingPets,
  totalEmployedIndividuals,
  totalPetsBelongsToUnemployed,
  totalVaccinatedPets,
  totalVaccinatedPetsOfThoseHavingNotACar,
  totalWhoOwnsCar,
} from "./implementations.js";

const p = {
  name: "Rahul",
  age: 30,
  address: "Pune",
  employed: true,
  profession: "Software Engineer",
  study: ["Computer Science"],
  ownsVehicle: true,
  vehicles: [{ type: "Car", specifics: ["BMW"] }],
  interests: [
    { type: "Playing", specifics: ["Chess"] },
    { type: "Gardening", specifics: [] },
  ],
  pets: [
    {
      type: "Dog",
      breed: "Golden Retriever",
      name: "Max",
      age: 4,
      vaccinated: true,
      activities: [{ type: "playing fetch", specifics: ["In park"] }],
    },
  ],
};

export const allTestCases = [
  {
    heading: "1. How many individuals are currently employed?",
    fn: totalEmployedIndividuals,
    testCases: [
      {
        description: "If 0 person employed in a group of 0 people",
        args: [],
        expected: 0,
      },
      {
        description: "If 1 person employed in a group of 1 people",
        args: [{ ...p, employed: true }],
        expected: 1,
      },
      {
        description: "If 1 person employed in a group of 2 people",
        args: [
          { ...p, employed: true },
          { ...p, employed: false },
        ],
        expected: 1,
      },
      {
        description: "If 2 person employed in a group of 3 people",
        args: [
          { ...p, employed: true },
          { ...p, employed: false },
          { ...p, employed: true },
        ],
        expected: 2,
      },
      {
        description: "If 1 person employed in a group of 3 people",
        args: [
          { ...p, employed: false },
          { ...p, employed: true },
          { ...p, employed: false },
        ],
        expected: 1,
      },
    ],
  },
  {
    heading: "2. How many people own a car?",
    fn: totalWhoOwnsCar,
    testCases: [
      {
        description: "If 0 person owns a car in a group of 0 people",
        args: [],
        expected: 0,
      },
      {
        description: "If 1 person owns a car in a group of 1 people",
        args: [{ ...p, ownsVehicle: true, vehicles: [{ type: "Car" }] }],
        expected: 1,
      },
      {
        description: "If 1 person owns a car in a group of 2 people",
        args: [
          { ...p, ownsVehicle: true, vehicles: [{ type: "Car" }] },
          { ...p, ownsVehicle: false, vehicles: [] },
        ],
        expected: 1,
      },
      {
        description: "If 1 person owns a car in a group of 3 people",
        args: [
          { ...p, ownsVehicle: true, vehicles: [{ type: "Car" }] },
          { ...p, ownsVehicle: false, vehicles: [] },
          { ...p, ownsVehicle: false, vehicles: [] },
        ],
        expected: 1,
      },
      {
        description: "If 2 person owns a car in a group of 4 people",
        args: [
          { ...p, ownsVehicle: true, vehicles: [{ type: "Car" }] },
          { ...p, ownsVehicle: false, vehicles: [] },
          { ...p, ownsVehicle: false, vehicles: [] },
          { ...p, ownsVehicle: true, vehicles: [{ type: "Car" }] },
        ],
        expected: 2,
      },
    ],
  },
  {
    heading: "3. How many pets are fully vaccinated?",
    fn: totalVaccinatedPets,
    testCases: [
      {
        description: "If 0 pets vaccinated in a group of 0 people",
        args: [],
        expected: 0,
      },
      {
        description: "If 1 pets vaccinated in a group of 1 people",
        args: [{ ...p, pets: [{ vaccinated: true }] }],
        expected: 1,
      },
      {
        description: "If 1 pets vaccinated in a group of 2 people",
        args: [
          { ...p, pets: [{ vaccinated: true }] },
          { ...p, pets: [{ vaccinated: false }] },
        ],
        expected: 1,
      },
      {
        description: "If 0 pets vaccinated in a group of 3 people",
        args: [
          { ...p, pets: [{ vaccinated: false }] },
          { ...p, pets: [{ vaccinated: false }] },
          { ...p, pets: [{ vaccinated: false }] },
        ],
        expected: 0,
      },
      {
        description: "If 2 pets vaccinated in a group of 4 people",
        args: [
          { ...p, pets: [{ vaccinated: false }] },
          { ...p, pets: [{ vaccinated: true }] },
          { ...p, pets: [{ vaccinated: true }] },
          { ...p, pets: [{ vaccinated: false }] },
        ],
        expected: 2,
      },
    ],
  },
  {
    heading:
      "4. What are the names of all the pets, and what type of animal is each?",
    fn: nameAndTypeOfPets,
    testCases: [
      {
        description: "If 0 pet is there in a group of 0 people",
        args: [],
        expected: [],
      },
      {
        description: "If 1 pet is there in a group of 1 people",
        args: [{ ...p, pets: [{ name: "Max", type: "Dog" }] }],
        expected: [{ name: "Max", type: "Dog" }],
      },
      {
        description: "If 2 pets are there in a group of 1 people",
        args: [
          {
            ...p,
            pets: [
              { name: "Max", type: "Dog" },
              { name: "Kiwi", type: "Bird" },
            ],
          },
        ],
        expected: [
          { name: "Max", type: "Dog" },
          { name: "Kiwi", type: "Bird" },
        ],
      },
      {
        description: "If 3 pets is there in a group of 2 people",
        args: [
          {
            ...p,
            pets: [
              { name: "Max", type: "Dog" },
              { name: "Kiwi", type: "Bird" },
            ],
          },
          {
            ...p,
            pets: [{ name: "Rex", type: "Dog" }],
          },
        ],
        expected: [
          { name: "Max", type: "Dog" },
          { name: "Kiwi", type: "Bird" },
          { name: "Rex", type: "Dog" },
        ],
      },
    ],
  },
  {
    heading: "5. Which cities do the individuals live in?",
    fn: cities,
    testCases: [
      {
        description: "If no person lives in the city in a group of 0 people",
        args: [],
        expected: [],
      },
      {
        description: "If 1 person lives in the city in a group of 1 people",
        args: [{ ...p, address: "Pune" }],
        expected: ["Pune"],
      },
      {
        description: "If 2 people live in the city in a group of 2 people",
        args: [
          { ...p, address: "Pune" },
          { ...p, address: "Bengalore" },
        ],
        expected: ["Pune", "Bengalore"],
      },
      {
        description: "If 3 people live in the city in a group of 3 people",
        args: [
          { ...p, address: "Pune" },
          { ...p, address: "Bengalore" },
          { ...p, address: "Jaipur" },
        ],
        expected: ["Pune", "Bengalore", "Jaipur"],
      },
    ],
  },
  {
    heading: "6. How many hobbies are shared across the group? What are they?",
    fn: hobbiesShared,
    testCases: [
      {
        description: "If no one has any hobby in a group of 0 people",
        args: [],
        expected: [],
      },
      {
        description: "If 1 person have 1 hobby",
        args: [{ ...p, interests: [{ type: "Playing" }] }],
        expected: ["Playing"],
      },
      {
        description: "If 1 person have 2 different hobbies",
        args: [
          { ...p, interests: [{ type: "Playing" }, { type: "Gardening" }] },
        ],
        expected: ["Playing", "Gardening"],
      },
      {
        description: "If 2 people have 3 different hobbies",
        args: [
          { ...p, interests: [{ type: "Playing" }, { type: "Gardening" }] },
          { ...p, interests: [{ type: "Cooking" }] },
        ],
        expected: ["Playing", "Gardening", "Cooking"],
      },
      {
        description: "If 3 people have 5 hobbies but 1 in common",
        args: [
          { ...p, interests: [{ type: "Playing" }, { type: "Gardening" }] },
          { ...p, interests: [{ type: "Cooking" }] },
          { ...p, interests: [{ type: "Reading" }, { type: "Gardening" }] },
        ],
        expected: ["Playing", "Gardening", "Cooking", "Reading"],
      },
    ],
  },
  {
    heading: "7. How many pets belong to people who are currently unemployed?",
    fn: totalPetsBelongsToUnemployed,
    testCases: [
      {
        description: "If no one is unemployed in a group of 0 people",
        args: [],
        expected: 0,
      },
      {
        description: "If 1 person is unemployed and has no pets",
        args: [{ ...p, employed: false, pets: [] }],
        expected: 0,
      },
      {
        description: "If 1 person is unemployed and has 1 pets",
        args: [{ ...p, employed: false, pets: [{}] }],
        expected: 1,
      },
      {
        description: "If 1 person is unemployed and has 3 pets",
        args: [{ ...p, employed: false, pets: [{}, {}, {}] }],
        expected: 3,
      },
      {
        description: "If 2 person is unemployed and have 2 pets each",
        args: [
          { ...p, employed: false, pets: [{}, {}] },
          { ...p, employed: false, pets: [{}, {}] },
        ],
        expected: 4,
      },
      {
        description:
          "If 3 person is unemployed and have 1 pets each in a group of 5 people",
        args: [
          { ...p, employed: false, pets: [{}] },
          { ...p, employed: true, pets: [{}, {}] },
          { ...p, employed: false, pets: [{}] },
          { ...p, employed: true, pets: [{}, {}] },
          { ...p, employed: false, pets: [{}] },
        ],
        expected: 3,
      },
    ],
  },
  {
    heading:
      "8. What is the average age of the individuals mentioned in the passage?",
    fn: averageAge,
    testCases: [
      {
        description: "If no one present",
        args: [],
        expected: 0,
      },
      {
        description: "If 1 person is there",
        args: [{ ...p, age: 30 }],
        expected: 30,
      },
      {
        description: "If 2 people are there",
        args: [
          { ...p, age: 30 },
          { ...p, age: 40 },
        ],
        expected: 35,
      },
      {
        description: "If 3 people are there",
        args: [
          { ...p, age: 35 },
          { ...p, age: 40 },
          { ...p, age: 45 },
        ],
        expected: 40,
      },
    ],
  },
  {
    heading:
      "9. How many individuals have studied computer science, and how many of them have pets?",
    fn: totalCSPeopleHavingPets,
    testCases: [
      {
        description: "If no one present",
        args: [],
        expected: [0, 0],
      },
      {
        description: "If 1 CS person has no pets",
        args: [{ ...p, study: ["Math", "Computer Science"], pets: [] }],
        expected: [1, 0],
      },
      {
        description:
          "If 2 CS people present but only one has 1 pet in a group of 2 people",
        args: [
          { ...p, study: ["Math", "Computer Science"], pets: [] },
          { ...p, study: ["Computer Science"], pets: [{}] },
        ],
        expected: [2, 1],
      },
      {
        description:
          "If 2 CS people present and only one has 2 pets in a group of 4 people",
        args: [
          { ...p, study: ["Math", "Computer Science"], pets: [] },
          { ...p, study: [], pets: [{}, {}] },
          { ...p, study: ["Computer Science"], pets: [{}, {}] },
          { ...p, study: ["Physics"], pets: [{}, {}] },
        ],
        expected: [2, 1],
      },
    ],
  },
  {
    heading: "10. How many individuals own more than one pet?",
    fn: moreThan1PetOwnedBy,
    testCases: [
      {
        description: "If no one owns any pet in a group of 0 people",
        args: [],
        expected: 0,
      },
      {
        description: "If 1 person owns 1 pet in a group of 1 people",
        args: [{ ...p, pets: [{}] }],
        expected: 0,
      },
      {
        description: "If 1 person owns 2 pet in a group of 1 people",
        args: [{ ...p, pets: [{}, {}] }],
        expected: 1,
      },
      {
        description: "If 1 person owns more than 1 pets in a group of 2 people",
        args: [
          { ...p, pets: [{}, {}] },
          { ...p, pets: [{}] },
        ],
        expected: 1,
      },
      {
        description: "If 2 person owns more than 1 pets in a group of 4 people",
        args: [
          { ...p, pets: [{}, {}] },
          { ...p, pets: [{}] },
          { ...p, pets: [{}, {}, {}] },
          { ...p, pets: [{}, {}, {}, {}] },
        ],
        expected: 3,
      },
    ],
  },
  {
    heading: "11. Which pets are associated with specific favorite activities?",
    fn: petsAndActivities,
    testCases: [
      {
        description: "If no pets is there in a group of 0 people",
        args: [],
        expected: [],
      },
      {
        description: "If 1 person has 1 pet with 1 activity",
        args: [
          {
            ...p,
            pets: [
              { name: "Max", type: "Dog", activities: [{ type: "Barking" }] },
            ],
          },
        ],
        expected: [["Dog", "Max", ["Barking"]]],
      },
      {
        description: "If 1 person has 1 pet with 2 activities",
        args: [
          {
            ...p,
            pets: [
              {
                name: "Max",
                type: "Dog",
                activities: [{ type: "Barking" }, { type: "Playing" }],
              },
            ],
          },
        ],
        expected: [["Dog", "Max", ["Barking", "Playing"]]],
      },
      {
        description: "If 1 person has 2 pets having 1 and 2 activities",
        args: [
          {
            ...p,
            pets: [
              {
                name: "Bella",
                type: "Cat",
                activities: [{ type: "Lounging" }],
              },
              {
                name: "Kiwi",
                type: "Bird",
                activities: [{ type: "Mimicing" }, { type: "Singing" }],
              },
            ],
          },
        ],
        expected: [
          ["Cat", "Bella", ["Lounging"]],
          ["Bird", "Kiwi", ["Mimicing", "Singing"]],
        ],
      },
    ],
  },
  {
    heading:
      "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?",
    fn: animalsOfPeopleLeavedInBAndC,
    testCases: [
      {
        description: "If no one present in the group",
        args: [],
        expected: [],
      },
      {
        description: "If 1 person lives in Bengalore and having no pet",
        args: [{ ...p, address: "Bengalore", pets: [] }],
        expected: [],
      },
      {
        description: "If 1 person lives in Chennai and having 1 pet",
        args: [{ ...p, address: "Chennai", pets: [{ name: "Bella" }] }],
        expected: ["Bella"],
      },
      {
        description:
          "If 2 people live in Bengalore and Chennai and having 1 and 2 pets reapectively",
        args: [
          { ...p, address: "Bengalore", pets: [{ name: "Bella" }] },
          {
            ...p,
            address: "Chennai",
            pets: [{ name: "Max" }, { name: "Rex" }],
          },
        ],
        expected: ["Bella", "Max", "Rex"],
      },
    ],
  },
  {
    heading:
      "13. How many vaccinated pets belong to people who do not own a car?",
    fn: totalVaccinatedPetsOfThoseHavingNotACar,
    testCases: [
      {
        description: "If no one is there in the group",
        args: [],
        expected: 0,
      },
      {
        description:
          "If 1 person who doesn't owns a car and not having any pets",
        args: [{ ...p, vehicles: [{ type: "Bike" }], pets: [] }],
        expected: 0,
      },
      {
        description:
          "If 1 person who doesn't owns a car and having a not vaccinated pet",
        args: [
          { ...p, vehicles: [{ type: "Bike" }], pets: [{ vaccinated: false }] },
        ],
        expected: 0,
      },
      {
        description:
          "If 1 person who doesn't owns a car and having a vaccinated pet",
        args: [
          { ...p, vehicles: [{ type: "Bike" }], pets: [{ vaccinated: true }] },
        ],
        expected: 1,
      },
      {
        description: "If 1 person who owns a car and having a vaccinated pet",
        args: [
          { ...p, vehicles: [{ type: "Car" }], pets: [{ vaccinated: true }] },
        ],
        expected: 0,
      },
    ],
  },
];

// 14. What is the most common type of pet among the group?
// 15. How many individuals have more than two hobbies?
// 16. How many individuals share at least one hobby with Ramesh?
// 17. Which pet is the youngest, and what is its name?
// 18. What types of books are mentioned as interests, and who reads them?
// 19. How many individuals live in cities starting with the letter "B"?
// 20. Which individuals do not own any pets?
