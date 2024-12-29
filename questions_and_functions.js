import {
  animalsOfPeopleLeavedInBAndC,
  averageAge,
  bookAndPerson,
  cities,
  cityStartingWithBCount,
  commonHobbiesWithRamesh,
  getYoungestPet,
  hobbiesShared,
  moreThan1PetOwnedBy,
  mostCommonTypeOfPet,
  nameAndTypeOfPets,
  peopleHavingMoreThan2Hobby,
  petsAndActivities,
  totalCSPeopleHavingPets,
  totalEmployedIndividuals,
  totalPetsBelongsToUnemployed,
  totalVaccinatedPets,
  totalVaccinatedPetsOfThoseHavingNotACar,
  totalWhoOwnsCar,
  whoDoNotOwnsPet,
} from "./implementations.js";

export const q1 = "1. How many individuals are currently employed?";
export const q2 = "2. How many people own a car?";
export const q3 = "3. How many pets are fully vaccinated?";
export const q4 =
  "4. What are the names of all the pets, and what type of animal is each?";
export const q5 = " 5. Which cities do the individuals live in?";
export const q6 =
  "6. How many hobbies are shared across the group? What are they?";
export const q7 =
  "7. How many pets belong to people who are currently unemployed?";
export const q8 =
  "8. What is the average age of the individuals mentioned in the passage?";
export const q9 =
  "9. How many individuals have studied computer science, and how many of them have pets?";
export const q10 = "10. How many individuals own more than one pet?";
export const q11 =
  "11. Which pets are associated with specific favorite activities?";
export const q12 =
  "12. What are the names of all animals that belong to people who live in Bangalore or Chennai?";
export const q13 =
  "13. How many vaccinated pets belong to people who do not own a car?";
export const q14 = "14. What is the most common type of pet among the group?";
export const q15 = "15. How many individuals have more than two hobbies?";
export const q16 =
  "16. How many individuals share at least one hobby with Ramesh?";
export const q17 = "17. Which pet is the youngest, and what is its name?";
export const q18 =
  "18. What types of books are mentioned as interests, and who reads them?";
export const q19 =
  '19. How many individuals live in cities starting with the letter "B"?';
export const q20 = "20. Which individuals do not own any pets?";

export const questionsAndFunctions = [
  [q1, totalEmployedIndividuals],
  [q2, totalWhoOwnsCar],
  [q3, totalVaccinatedPets],
  [q4, nameAndTypeOfPets],
  [q5, cities],
  [q6, hobbiesShared],
  [q7, totalPetsBelongsToUnemployed],
  [q8, averageAge],
  [q9, totalCSPeopleHavingPets],
  [q10, moreThan1PetOwnedBy],
  [q11, petsAndActivities],
  [q12, animalsOfPeopleLeavedInBAndC],
  [q13, totalVaccinatedPetsOfThoseHavingNotACar],
  [q14, mostCommonTypeOfPet],
  [q15, peopleHavingMoreThan2Hobby],
  [q16, commonHobbiesWithRamesh],
  [q17, getYoungestPet],
  [q18, bookAndPerson],
  [q19, cityStartingWithBCount],
  [q20, whoDoNotOwnsPet],
];