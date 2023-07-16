const uniqueID = () => {
  return new Date().getTime().toString(36);
};

console.log(uniqueID(), uniqueID()); // Example output: "1w7r5d2xh5"