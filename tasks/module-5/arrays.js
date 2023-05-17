/**
 * As a representation of Chars array please use our sample: ./data/characters.json
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */

function getCharactersNames(chars) {
  
  const charNames = chars.map((char) => char.name);
  return charNames;

}

/**
* print (console.log) names of all characters
* @param {Array} chars
*/
function printCharacterNames(chars) {

chars.forEach(char => console.log(char.name));
}

/**
* return an array of non-human (species !== 'Human') characters
* Avoid using forEach() method and for|for..of loops
* @param {Array} chars
* @return {Array} - non human characters
*/
function getNonHumanCharacters(chars) {
const nonHumanChars = chars.filter((char) => char.species !== 'Human');
return nonHumanChars;
}

/**
* return info about character named 'Jerry Smith'
* Avoid using forEach() method and for|for..of loops
* @param {Array} chars
* @return {Object} - Jerry object
*/
function getJerryInfo(chars) {
const charInfo = chars.find((char) => char.name === 'Jerry Smith');
return charInfo;
}

/**
* check if all characters are human (species attribute). return true if all, false if not
* Avoid using forEach() method and for|for..of loops
* @param {Array} chars
* @return {boolean}
*/
function isAllHuman(chars) {
const areAllHuman = chars.every((char) => char.species === 'Human');
return areAllHuman;
}

/**
* check if there are any 'type == Fish-Person' characters. return true if any, false if not
* Avoid using forEach() method and for|for..of loops
* @param {Array} chars
* @return {boolean}
*/
function isAnyFishPerson(chars) {
const isTypeFound = chars.some((char) => char.type === 'Fish-Person');
return isTypeFound;
}

/**
* write a method to find an index of minimal item from an array;
* @param {Array} arr
* @return {number} - minimum element index
* @example
* console.log(minItem([2,5,6,3,1,8])) // 4
*/
function minItem(arr) {
if (!Array.isArray(arr) || arr.length === 0) {
  throw new Error('Input is not a valid array or is empty');
}

let minIndex = 0;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < arr[minIndex]) {
    minIndex = i;
  }
}

return minIndex;
//PLACE YOUR CODE HERE
}

module.exports = {
getCharactersNames,
printCharacterNames,
getNonHumanCharacters,
getJerryInfo,
isAllHuman,
isAnyFishPerson,
minItem,
};
