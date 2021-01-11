
const string2int = (input) =>{
  let arr = [],sum = 0
  for (let i = 0; i < 10 ;i++) {
    arr.push(i.toString())
  }
  let checkstring = input.split("").reverse().filter((value)=>{
    return arr.includes(value)
  }).forEach((element,index) => {
    sum +=  element * Math.pow((10),index)
  });
  return sum //573
}

const input = 'a5b7c3'
console.log(string2int(input))