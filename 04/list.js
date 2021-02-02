/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth. */
// Your code here.

const arrayToList = function (arrayToBeConverted) {
  let arrayList = {};
  if (!arrayToBeConverted[1])
    return Object.assign(arrayList, {
      value: arrayToBeConverted[0],
      rest: null,
    });
  else
    return Object.assign(arrayList, {
      value: arrayToBeConverted[0],
      rest: arrayToList(arrayToBeConverted.slice(1)),
    });
};
const listToArray = function (objectToConvert) {
  let arrayret = [];
  while (objectToConvert) {
    arrayret.push(objectToConvert.value);
    objectToConvert = objectToConvert.rest;
  }
  return arrayret;
};
const prepend = function (element, listPassed) {
  return { value: element, rest: listPassed };
};
const nth = function (l, position) {
  let i = 0;
  while (l) {
    if (i == position) {
      return l.value;
    }
    l = l.rest;
    i++;
  }
};
const nthrecursive = function (l, position) {
  if (l == null) return 0;
  if (position == 0) {
    return l.value;
  } else return nthrecursive(l.rest, position - 1);
};
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
console.log(nthrecursive(arrayToList([10, 20, 30]), 1));
// → 20
