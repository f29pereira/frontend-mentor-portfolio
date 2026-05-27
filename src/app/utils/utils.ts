/**
 * Returns a string with its first character capitalized
 * @param word string to capitalize
 * @returns unchanged word if is empty
 */
export const getCapitalizedFirstLetter = (word: string): string => {
  if (word === "") return word;

  return word.charAt(0).toUpperCase() + word.slice(1);
};
