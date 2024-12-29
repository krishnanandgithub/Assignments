//1. How many individuals are currently employed?
export const totalEmployedIndividuals = (people) =>
  people.filter(({ employed }) => employed).length;

//2. How many people own a car?
export const totalWhoOwnsCar = (people) =>
  people.filter(({ vehicles }) => vehicles.some(({ type }) => type === "Car"))
    .length;

//3. How many pets are fully vaccinated?
export const totalVaccinatedPets = (people) =>
  people.flatMap(({ pets }) => pets).filter(({ vaccinated }) => vaccinated)
    .length;

//4. What are the names of all the pets, and what type of animal is each?
export const nameAndTypeOfPets = (people) =>
  people.flatMap(({ pets }) => pets).map(({ name, type }) => ({ name, type }));

//5. Which cities do the individuals live in?
export const cities = (people) => people.map(({ address }) => address);

//6. How many hobbies are shared across the group? What are they?
export const hobbiesShared = (people) =>
  people
    .flatMap(({ interests }) => interests.map(({ type }) => type))
    .reduce((set, e) => (set.includes(e) ? set : [...set, e]), []);

//7. How many pets belong to people who are currently unemployed?
export const totalPetsBelongsToUnemployed = (people) =>
  people
    .filter(({ employed }) => !employed)
    .flatMap(({ pets }) => pets.length)
    .reduce((sum, e) => sum + e, 0);

//8. What is the average age of the individuals mentioned in the passage?
export const averageAge = (people) =>
  people.map(({ age }) => age).reduce((sum, e) => sum + e, 0) / people.length ||
  0;

//9. How many individuals have studied computer science, and how many of them have pets?
export const totalCSPeopleHavingPets = function (people) {
  const csPeople = people.filter(({ study }) =>
    study.includes("Computer Science")
  );
  const havingPets = csPeople.filter(({ pets }) => pets.length > 0);

  return [csPeople.length, havingPets.length];
};

//10. How many individuals own more than one pet?
export const moreThan1PetOwnedBy = (people) =>
  people.filter(({ pets }) => pets.length > 1).length;

//11. Which pets are associated with specific favorite activities?
export const petsAndActivities = (people) =>
  people.flatMap(({ pets }) =>
    pets.map(({ type, name, activities }) => [
      type,
      name,
      activities.map(({ type }) => type),
    ])
  );

//12. What are the names of all animals that belong to people who live in Bangalore or Chennai?
export const animalsOfPeopleLeavedInBAndC = (people) =>
  people
    .filter(({ address }) => "Bengalore Chennai".includes(address))
    .flatMap(({ pets }) => pets.map(({ name }) => name));

//13. How many vaccinated pets belong to people who do not own a car?
export const totalVaccinatedPetsOfThoseHavingNotACar = (people) =>
  people
    .filter(({ vehicles }) => !vehicles.some(({ type }) => type === "Car"))
    .flatMap(({ pets }) => pets)
    .filter(({ vaccinated }) => vaccinated).length;

//14. What is the most common type of pet among the group?
const wordCount = function (array) {
  return function (word) {
    const count = array.reduce((wc, w) => (w === word ? wc + 1 : wc), 0);
    return [word, count];
  };
};

export const mostCommonTypeOfPet = function (people) {
  const pets = people.flatMap(({ pets: p }) => p.map(({ type }) => type));
  const petsCounts = pets.map(wordCount(pets));

  return petsCounts.reduce((max, e) => (e.at(-1) > max.at(-1) ? e : max));
};

//15. How many individuals have more than two hobbies?
export const peopleHavingMoreThan2Hobby = (people) =>
  people.filter(({ interests: i }) => i.length > 2).length;

//16. How many individuals share at least one hobby with Ramesh?
const intersects = (hobbies, personsHobbies) => {
  return hobbies.some((h) => personsHobbies.includes(h));
};

export const commonHobbiesWithRamesh = function (people) {
  const rameshH = people
    .find(({ name: n }) => n === "Ramesh")
    .interests.map(({ type }) => type);

  const othersH = people.map(({ interests: i }) => i.map(({ type: t }) => t));
  const commonH = othersH.filter((h) => intersects(h, rameshH));

  return commonH.length - 1;
};

//17. Which pet is the youngest, and what is its name?
export const getYoungestPet = (people) =>
  people
    .flatMap(({ pets: p }) => p.map(({ name, age }) => [name, age]))
    .reduce((pet, cp) => (pet.at(-1) < cp.at(-1) ? pet : cp))[0];

//18. What types of books are mentioned as interests, and who reads them?
export const bookAndPerson = (person) =>
  person
    .filter(({ interests: p }) => p.some((i) => i.type === "Reading"))
    .map(({ name, interests }) =>
      [name, interests.find((i) => i.type === "Reading").specifics].flat()
    );

//19. How many individuals live in cities starting with the letter "B"?
export const cityStartingWithBCount = (people) =>
  people.filter(({ address: p }) => p.at(0) === "B").length;

//20. Which individuals do not own any pets?
export const whoDoNotOwnsPet = (people) =>
  people.filter(({ pets }) => pets.length === 0).map(({ name }) => name);
