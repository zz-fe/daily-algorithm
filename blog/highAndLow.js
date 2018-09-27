
//highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


/**
 * highAndLow 求数组的最大值和最小值
 * @param {*} string 
 */
const highAndLow = string => {
  if (typeof string !== 'string') throw new Error('string is invalid string')
  string = string.split(/\s+/g)
  return `${Math.max(...string)} ${Math.min(...string)}`
}
console.log(highAndLow('1 3 5 6 8') == '8 1')