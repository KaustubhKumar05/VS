export const isValidVariableName = (str) => {
  return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(str);
};
