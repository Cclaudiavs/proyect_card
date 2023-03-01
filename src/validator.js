
const validator = {
  isValid(num){
    const cardNumber=[]
    let cardNumberInvert =[]
    let sumPar=0
    let ctrlPar=null
    let sumImpar=0
    let sumTotal=0

    for (let i=0; i<num.length; i++){ 
      cardNumber.push(parseInt(num[i]));     
    }

    cardNumberInvert=cardNumber.reverse();
    //console.log(cardNumberInvert,"num inverted");

    for (let i=0; i<cardNumberInvert.length; i++){

      if(i%2 !== 0){

        ctrlPar = cardNumberInvert[i] 

        //console.log(i,"num pares");

        if(ctrlPar * 2>9){

          const totalCntrl = ctrlPar * 2 
          const numberArray = totalCntrl.toString().split('')
          const numberArraySum = (Number(numberArray[0]) + Number(numberArray[1])) 
  
          sumPar = sumPar + numberArraySum

        }else{
          sumPar = sumPar + (ctrlPar*2) 
        }
      }
    }

    for (let i=0; i<cardNumberInvert.length; i++){ 

      if(i % 2 === 0){
        //console.log(i, 'numeros impares')
        sumImpar = sumImpar + cardNumberInvert[i]
      }
    }

    sumTotal = sumImpar + sumPar

    //console.log(sumImpar,'sum impar')
    //console.log(sumPar,'sum par')
    
    if(sumTotal % 10 === 0){
      return true
      // console.log('sumpar',sumPar%10)
    } 
    else {
      return false     
      //console.log('sumimpar',sumPar%10)
    }
  }
  ,maskify(num){
    const str1=num;
    const masked= str1.slice(-4).padStart(str1.length,'#');
    return masked
  } 

  
};


export default validator;








