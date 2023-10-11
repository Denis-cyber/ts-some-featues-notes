// in future u will not be able to change this array
const numbers: ReadonlyArray<number> = [0, 1, 2, 3];

// when you know types of all elements of array (and they are different)
type TypeArray = [number, string, null];
const newArray: TypeArray = [1, "2", null];

// variants typization of function
// v 1
type TypeChannelReturn = {
  name: string;
};

const getChannel1 = (name: string): TypeChannelReturn => {
  return { name };
};

// v2
type TypeChannelFunction = (name: string) => TypeChannelReturn;

const getChannel2: TypeChannelFunction = (name) => {
  return { name };
};
