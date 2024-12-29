const isEqual = (element1, element2) => element1 === element2;

const isTypeSame = (element1, element2) => {
  return typeof element1 === typeof element2;
};

const isObject = (element) => {
  return typeof element === "object";
};

const checkObjectEquality = (obj1, obj2) => {
  const obj1Entries = Object.entries(obj1).toSorted();
  const obj2Entries = Object.entries(obj2).toSorted();

  return areEqual(obj1Entries, obj2Entries);
};

export const areEqual = (element1, element2) => {
  if (!isTypeSame(element1, element2)) {
    return false;
  }

  if (!isObject(element1) && !isObject(element2)) {
    return isEqual(element1, element2);
  }

  if (element1.length !== element2.length) {
    return false;
  }

  if (Array.isArray(element1) && Array.isArray(element2)) {
    return element1.every((curElement, index) =>
      areEqual(curElement, element2[index])
    );
  }

  return checkObjectEquality(element1, element2);
};

const getMark = (hasPassed) => (hasPassed ? "✅" : "❌");

const makeMessage = (mark, expected, actual) => {
  console.log("Status");
  console.log(mark);
  console.log("Expected: ");
  console.table(expected);
  console.log("Actual: ");
  console.table(actual);
  console.log();
};

export const test = (expected, fn, args) => {
  const actual = fn(args);
  areEqual(actual, expected);
  const mark = getMark(hasPassed);

  makeMessage(mark, expected, actual);
};

export const groupTest = (testData, failed) => {
  const { heading, fn, testCases } = testData;
  for (const cases of testCases) {
    const { description, args, expected } = cases;
    const actual = fn(args);
    if (!areEqual(expected, actual)) {
      failed.push({ heading, description, expected, actual });
    }
  }
};