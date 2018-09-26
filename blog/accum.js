//accum(“abcd”);    // “A-Bb-Ccc-Dddd”
// accum(“RqaEzty”); // “R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy”
// accum(“cwAt”);    // “C-Ww-Aaa-Tttt”
const accum = string => {
  if (typeof string !== 'string')  throw new Error('string is invalid string') 
    return Array.from(string).map((i,index)=>{
       return `${i.toUpperCase()}${i.toLowerCase().repeat(index)}`
    }).join('-')
}
console.log(accum('abcd'))

const _accum = string => {
  if (typeof string !== 'string')  throw new Error('string is invalid string') 
   return Array.from(string, (i,index) => {
     return  i.toLocaleUpperCase() + new Array(index).fill(i.toLocaleLowerCase()).join('')
   }).join('-')
}
console.log(_accum('abcd'))