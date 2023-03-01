import validator from './validator.js';


window.addEventListener('load',()=>{
//vincular el boton validar// validator.js
  const form= document.querySelector('#formulario')
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
  
    const button= document.getElementById('btnValidar')
    button.addEventListener("click",()=>{
      const digitos = document.getElementById('numeros').value;
      const creditCardNumber= String(digitos);
      const msj = validator.isValid(creditCardNumber);
      //console.log(validaTarjeta);
      const mascara=  validator.maskify(creditCardNumber);
      //console.log(mascara); 
      
      if (msj===true){
        document.getElementById("mensaje").innerHTML= "LOS DATOS SON VALIDOS DE: " + mascara;
      }else{
        document.getElementById("mensaje").innerHTML= "LOS DATOS NO SON VALIDOS DE: " + mascara;
      }   
  
    })

  })
} );

//console.log(validator);
