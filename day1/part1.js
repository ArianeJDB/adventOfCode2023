import {inputText} from './input.js'
export function sum () {
  const getOnlyDigits =  inputText.reduce((acc,item) => {
    const onlyDigits = item.replace(/\D/g, '')
    acc.push(onlyDigits.length === 1 ? onlyDigits+onlyDigits : onlyDigits)

    return acc
  },[])

  const onlyFirstAndLastDigit =  getOnlyDigits.map(item => {
    const firstDigit = item[0]
    const lastDigit = item[item.length - 1];

    return firstDigit + lastDigit
  })

  return onlyFirstAndLastDigit.reduce((acc, item ) => acc + parseInt(item), 0)

}


console.log('sum', sum(inputText))