/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let maxNumber = 0;

  if (a >= b && a >= c) {
    maxNumber = a;
  } else if (b >= a && b >= c) {
    maxNumber = b;
  } else {
    maxNumber = c;
  }

  return maxNumber;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */

function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  const rowDiff = queen.x - king.x;
  const colDiff = queen.y - king.y;
  if (rowDiff === colDiff || rowDiff === -colDiff) {
    return true;
  }

  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }

  return a + b > c && a + c > b && b + c > a && (a === b || a === c || b === c);
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  if (num < 1 || num > 39) {
    return 'Invalid input';
  }

  let result = '';
  let remainingNum = num;

  while (remainingNum >= 10) {
    result += 'X';
    remainingNum -= 10;
  }

  while (remainingNum >= 9) {
    result += 'IX';
    remainingNum -= 9;
  }

  while (remainingNum >= 5) {
    result += 'V';
    remainingNum -= 5;
  }

  while (remainingNum >= 4) {
    result += 'IV';
    remainingNum -= 4;
  }

  while (remainingNum >= 1) {
    result += 'I';
    remainingNum -= 1;
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  let isNegative = false;

  for (let i = 0; i < numberStr.length; i += 1) {
    const char = numberStr[i];

    switch (char) {
      case '0':
        result += 'zero ';
        break;
      case '1':
        result += 'one ';
        break;
      case '2':
        result += 'two ';
        break;
      case '3':
        result += 'three ';
        break;
      case '4':
        result += 'four ';
        break;
      case '5':
        result += 'five ';
        break;
      case '6':
        result += 'six ';
        break;
      case '7':
        result += 'seven ';
        break;
      case '8':
        result += 'eight ';
        break;
      case '9':
        result += 'nine ';
        break;
      case '.':
        result += 'point ';
        break;
      case '-':
        if (!isNegative) {
          isNegative = true;
          result += 'minus ';
        }
        break;
      default:
    }
  }

  return result.trim();
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i += 1, j -= 1) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numCopy = num;
  while (numCopy !== 0) {
    const lastDigit = numCopy % 10;
    if (lastDigit === digit) {
      return true;
    }
    numCopy = (numCopy - lastDigit) / 10;
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }
    let rightSum = 0;
    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (size <= 0) {
    return [];
  }
  const matrix = Array.from({ length: size }, () => Array(size).fill(0));

  let value = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (value <= size * size) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = value;
      value += 1;
    }
    top += 1;
    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = value;
      value += 1;
    }
    right -= 1;
    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = value;
      value += 1;
    }
    bottom -= 1;
    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = value;
      value += 1;
    }
    left += 1;
  }
  return matrix;
}
/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const n = matrix.length;

  const transposedMatrix = Array.from({ length: n }, () => Array(n));
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      transposedMatrix[i][j] = matrix[j][i];
    }
  }

  const reflectedMatrix = Array.from({ length: n }, () => Array(n));
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      reflectedMatrix[i][j] = transposedMatrix[i][n - 1 - j];
    }
  }

  return reflectedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
// function sortByAsc(arr) {
//   const { length } = arr; // Use object destructuring for array length
//   const sortedArr = [...arr]; // Create a new array to avoid modifying the input array

//   // Bubble Sort Algorithm
//   for (let i = 0; i < length - 1; i += 1) {
//     for (let j = 0; j < length - i - 1; j += 1) {
//       if (sortedArr[j] > sortedArr[j + 1]) {
//         // Swap sortedArr[j] and sortedArr[j+1]
//         const temp = sortedArr[j];
//         sortedArr[j] = sortedArr[j + 1];
//         sortedArr[j + 1] = temp;
//       }
//     }
//   }

//   return sortedArr;
// }

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const chars = Array.from(str);

  for (let i = 0; i < iterations; i += 1) {
    let currentIndex = chars.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      [chars[currentIndex], chars[randomIndex]] = [
        chars[randomIndex],
        chars[currentIndex],
      ];
    }
  }

  return chars.join('');
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = Array.from(String(number), Number);

  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i >= 0) {
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j -= 1;
    }
    [digits[i], digits[j]] = [digits[j], digits[i]];

    const rightPart = digits.slice(i + 1);
    const sortedRightPart = rightPart.sort();

    const result = digits.slice(0, i + 1).concat(sortedRightPart);
    return parseInt(result.join(''), 10);
  }

  return -1;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  // sortByAsc,
  shuffleChar,
  getNearestBigger,
};
