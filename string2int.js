
const string2int = (input) =>{
  let sum = 0 ,pow = 0
  for (let i = input.length - 1; i < input.length && i > -1; i--) {
    const element = input[i]
    if (isNumberCharacter(element)) {
       sum += element * 10 ** pow++ 
    }
  }
  return sum 
}

const isNumberCharacter = (c) => {
  return c == '0' || c == '1' || c == '2' || c == '3' || c == '4' || c == '5' || c == '6' || c == '7' || c == '8' || c == '9'
}

const input = 'a5b7c3'
console.log(string2int(input)) //573
