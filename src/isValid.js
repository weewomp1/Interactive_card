function isValid(cardNumber) {
  let newStr = cardNumber.split('').filter(char => char != " ").filter(char => char != "-");
  let newArr = []
  let oddSum = 0;
  let evenSum = 0;
  
  for(let i = newStr.length-1; i >= 0; i-=2) {
    newArr.push(newStr[i])
    oddSum += parseInt(newStr[i], 10)
    
  }
  for(let i = newStr.length-2; i >= 0; i-=2) {
    let newVar = parseInt(newStr[i], 10) * 2;
        if (newVar === 10) {
      newVar = 1;
    } else{ 
      if(newVar >= 10) {
        newVar = newVar.toString().split("")
        let subVar = parseInt(newVar[1], 10);
        newVar = parseInt(newVar[0], 10) + subVar;
      } else {
        
      }
    }
    evenSum += newVar 
  }
  
  return ((oddSum + evenSum) % 10 === 0)
}

export default isValid;