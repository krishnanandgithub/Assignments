import { groupTest } from "./test_framework.js";
import { allTestCases } from "./test_cases.js";

const showResult = (failed) => {
  if (failed.length === 0) {
    return "All tests are passing!!";
  }

  return failed;
};

const testAll = (dataToTestFunction) => {
  const failed = [];
  for (const testData of dataToTestFunction) {
    groupTest(testData, failed);
  }
  console.log(showResult(failed));
};

testAll(allTestCases);
