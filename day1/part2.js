import {inputText} from './input.js'

const inputText2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen"]
const digitsMap = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  eno: '1',
  owt: '2',
  eerht: '3',
  ruof: '4',
  evif: '5',
  xis: '6',
  neves: '7',
  thgie: '8',
  enin: '9'

}

const inputText3 = ['eightwothree'] //eerhtowthgie
function sum () {

  const regexPattern = /one|two|three|four|five|six|seven|eight|nine|\d/gi;
  const regexPatternInReverse = /eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d/gi;
  const arr = []
  inputText.map(item => {
    const itemArr = []
    const reversedItem = item.split("").reverse().join("")
    const matchedReversed = reversedItem.match(regexPatternInReverse)
    const matchedNormal = item.match(regexPattern)
    itemArr.push(matchedNormal[0])
    itemArr.push(matchedReversed[0])
    arr.push(itemArr)
  })
  const total = []
  arr.map(item => total.push(`${digitsMap[item[0]] ?? item[0]}${digitsMap[item[1]] ?? item[1]}`))

  return total.reduce((acc, item ) => acc + parseInt(item), 0)
}


console.log('sum', sum(inputText))