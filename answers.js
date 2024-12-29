import { data } from "./data.js";
import { questionsAndFunctions } from "./questions_and_functions.js";

for (const element of questionsAndFunctions) {
  const [question, functionName] = element;
  console.log(question);
  console.log(functionName(data));
}