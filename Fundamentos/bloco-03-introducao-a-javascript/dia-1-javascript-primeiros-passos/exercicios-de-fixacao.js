let myName = "Carolina"
let birthCity = "Capelinha"
let birthYerar = 1996
console.log(myName,birthCity,birthYerar)

// Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo de pessoas aprovadas!”.
//Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera.”.
//Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”.

let nota = 50
if  (nota >= 80) {
  console.log('Parabéns, você faz parte do grupo de pessoas aprovadas!')
} 
else if (nota<=80){
  console.log('Você está na nossa lista de espera.')
}
else if (nota<=60) {
  console.log('Infelizmente, você reprovou.')
}