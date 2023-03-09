import dayjs from 'dayjs'
import '../styles/style.css'

const submitBtn = document.getElementById('submit-btn');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year')
const modalContent = document.getElementById('contentOfModal')
// submitBtn.addEventListener('click', function(){
//     // alert(`Dia: ${dayInput.value}
//     // Mês: ${monthInput.value}
//     // Ano: ${yearInput.value}`)

//    let currentAge = 2023 - yearInput.value;
//    alert(`Em 2077 você terá ${currentAge + 54} anos!`)
// })

const modal = document.getElementById("modal");
const closeModalButton = document.getElementsByClassName("close")[0];


submitBtn.addEventListener("click", function() {
  if (dayInput.value <1 || dayInput.value> 31){
    alert('Insira um dia válido! (entre 01 e 31)')
    dayInput.focus()
    return
  }
    
  if (monthInput.value <1 || monthInput.value> 12){
    alert('Insira um mês válido! (entre 01 e 12)')
    monthInput.focus()
    return
  }
  if (yearInput.value.length < 4){
    alert('Insira um ano em formato válido! (Ex : 1999)')
    yearInput.focus()
    return
  }
 

    let currentDate = dayjs()
    let userBirthday = yearInput.value +"-"+ monthInput.value +'-' + dayInput.value
    let userBirthDayConverted = dayjs(userBirthday.toString()).format('YYYY/MM/DD')
    let userAge = currentDate.diff(userBirthDayConverted, 'year')
    let monthInPT = ''
    console.log(userBirthDayConverted)
    console.log('O mês de aniversário do usuário é: ' + dayjs(monthInput.value).format('MMMM'))
    console.log(`A idade atual do usuário é: ${userAge}`) 
    switch(currentDate.format('MMMM')){
      case "January":
       monthInPT = "Janeiro"
       break;
      case "February":
       monthInPT = "Fevereiro"
       break;
      case "March":
        monthInPT = "Março"
        break;
      case "April":
       monthInPT = "Abril"
       break;
      case "May":
       monthInPT = "Maio"
       break;
       case "June":
        monthInPT = "Junho"
        break;
      case "July":
       monthInPT = "Julho"
       break;
      case "August":
       monthInPT = "Agosto"
       break;
       case "September":
       monthInPT = "Setembro"
       break;
       case "October":
        monthInPT = "Outubro"
        break;
      case "November":
       monthInPT = "Novembro"
       break;
      case "December":
       monthInPT = "Dezembro"
       break;
    }
    console.log(`Em ${currentDate.date()} de ${monthInPT} de 2077 você terá: ${userAge+54} anos.`)
    modalContent.innerText = `Em ${currentDate.date()} de ${monthInPT} de 2077 você terá: ${userAge+54} anos.`
    modal.style.display = "block";
    dayInput.value=""
    monthInput.value=""
    yearInput.value=""
});

closeModalButton.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});