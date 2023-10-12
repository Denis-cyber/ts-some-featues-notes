const inputElement = document.querySelector("input");
// const value1 = inputElement?.value; // we need to use '?' cause not sure in availability of this value
const value1 = (inputElement as HTMLInputElement).value; // variant 1
const value2 = (<HTMLInputElement>inputElement).value; // variant 2
