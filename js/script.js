


// Get the buttons
const showDescriptionBtn = document.getElementById("show-description-btn");
const buyTicketBtn = document.getElementById("buy-ticket-btn");
const showDescriptionSection = document.getElementById("show-description-section")
// Hide the description button initially
showDescriptionSection.style.display = "none";
showDescriptionBtn.style.display = 'none';

// Add a click event listener to the "Показать описание" button
showDescriptionBtn.addEventListener("click", function() {
  // Toggle the visibility of the description button
  if (showDescriptionSection.style.display === "none") {
    showDescriptionSection.style.display = "block";
    showDescriptionBtn.style.display = 'block';
    buyTicketBtn.style.display = "none";
  } else {
    showDescriptionSection.style.display = "none";
    showDescriptionBtn.style.display = 'none';
    buyTicketBtn.style.display = "flex";
  }
});

buyTicketBtn.addEventListener('click', function(){
  showDescriptionBtn.style.display = 'block';
})

// Add a click event listener to the "Купить билет" button
buyTicketBtn.addEventListener("click", function() {
  // Toggle the visibility of the description button
  if (showDescriptionSection.style.display === "none") {
    showDescriptionSection.style.display = "block";
    buyTicketBtn.style.display = "none";
  } else {
    showDescriptionSection.style.display = "none";
    buyTicketBtn.style.display = "block";
  }
});


const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const quantityInput = document.getElementById('quantity-input');
const nextBtn = document.getElementById('btn-next');
const sumAll = document.getElementById('sum__all')
const sumNso = document.getElementById('sum__nso')
const ticketsCollapsed = document.getElementById('tickets-collapsed')
const ticketsCollapsedColvo = document.getElementById('tickets-collapsed-colvo')

quantityInput.addEventListener('input', () => {
  let quantity = parseInt(quantityInput.value);
  quantityInput.value = quantityInput.value.replace(/[^0-9]/g, "");
  sumAll.textContent = `Сумма ${quantity.toFixed(2)*1750} ₽`;
  sumNso.textContent = `Включает НСО ${(quantity*291.67).toFixed(2)} ₽`;
  
  minusBtn.classList.remove("card__no-minus");
  minusBtn.classList.add("card__plus-minus");
  nextBtn.classList.remove('description__no-next');
  nextBtn.classList.add('description__yes-next');
  nextBtn.type= "button";
  nextBtn.setAttribute('data-bs-toggle', 'collapse');
  ticketsCollapsed.textContent = `${quantity} x Билет ${quantity.toFixed(2)*1750} ₽ `;
  if (isNaN(Number(quantity))){
    sumAll.textContent = `Сумма 0.00 ₽`;
    sumNso.textContent = `Включает НСО 0.00 ₽`;
  }
})
minusBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
    quantity--;
    quantityInput.value = quantity;
    sumAll.textContent = `Сумма ${quantity.toFixed(2)*1750} ₽`;
    sumNso.textContent = `Включает НСО ${(quantity.toFixed(2)*291.67).toFixed(2)} ₽`;
    ticketsCollapsedColvo.textContent = `${quantity} x Билет ${quantity.toFixed(2)*1750} ₽ `;
  }
  else if (quantity == 1) {
    quantityInput.type="text";
    quantityInput.value="";
    quantityInput.classList.remove("card__number");
    quantityInput.classList.add("card__no-number");
    minusBtn.classList.remove("card__plus-minus");
    minusBtn.classList.add("card__no-minus");
    nextBtn.classList.remove('description__yes-next');
    nextBtn.removeAttribute('data-bs-toggle');
    nextBtn.classList.add('description__no-next');
    nextBtn.type= "text";
    sumAll.textContent = `Сумма 0.00 ₽`;
    sumNso.textContent = `Включает НСО 0.00 ₽`;
  }
});

plusBtn.addEventListener('click', () => {
  let quantity = parseInt(quantityInput.value);
  minusBtn.classList.remove("card__no-minus");
  minusBtn.classList.add("card__plus-minus");
  nextBtn.classList.remove('description__no-next');
  nextBtn.classList.add('description__yes-next');
  nextBtn.type= "button";
  nextBtn.setAttribute('data-bs-toggle', 'collapse');
  ticketsCollapsedColvo.textContent = `${quantity} x Билет ${quantity.toFixed(2)*1750} ₽ `;


  if (quantityInput.value===""){
    quantityInput.classList.remove("card__no-number");
    quantityInput.classList.add("card__number");
    quantityInput.type = "number";
    quantityInput.value=1;
    sumAll.textContent = `Сумма 1750.00 ₽`;
    sumNso.textContent = `Включает НСО 291.67 ₽`;
    ticketsCollapsedColvo.textContent = `1 x Билет 1750 ₽ `;
  }
  else if (quantityInput.value>=0){
    
    quantity++;
    quantityInput.value = quantity;
    sumAll.textContent = `Сумма ${quantity.toFixed(2)*1750} ₽`;
    sumNso.textContent = `Включает НСО ${(quantity.toFixed(2)*291.67).toFixed(2)} ₽`;
    ticketsCollapsedColvo.textContent = `${quantity} x Билет ${quantity.toFixed(2)*1750} ₽ `;
  }


});

const discountText = document.getElementById('discount-text')
const discountInput = document.getElementById('discount-input')
const discountCheck = document.getElementById('discount-check')
const discountYes = document.getElementById('discount__yes')
const discountNo = document.getElementById('discount__no')

discountText.addEventListener('click', ()=>{
  discountText.style.display = "none";
  discountInput.style.display = 'block';
  discountCheck.style.display = 'block';
});

discountCheck.addEventListener('click', () =>{
  if (discountInput.value==='Abobka'){
    discountYes.style.display = 'block';
    discountNo.style.display = 'none';
  }
  if (discountInput.value!='Abobka'){
    discountYes.style.display = 'none';
    discountNo.style.display = 'block';
  }
})

const ticketsNoCollapsedHeader=document.getElementById('tickets-no-collapsed-header')
const ticketsNoCollapsedCard=document.getElementById('tickets-no-collapsed-card')
const ticketsNoCollapsedSum=document.getElementById('tickets-no-collapsed-sum')
const ticketsNoCollapsedContainer1=document.getElementById('tickets-no-collapsed-container1')
const ticket=document.getElementById('ticket')
const descriptionContentTicket = document.getElementById('description__content__ticket')
const contactNoCollapsedHeader = document.getElementById('contact-no-collapsed-header')
const contactNoCollapsedHeaderColor = document.getElementById('contact-no-collapsed-header-color')
const descriptionContentContact = document.getElementById('contact')

nextBtn.addEventListener('click', () =>{
  ticketsCollapsed.style.display ="flex";
  ticketsNoCollapsedHeader.style.display ="none";
  descriptionContentTicket.style.paddingBottom="0%";
  descriptionContentContact.style.paddingBottom="10%";
  contactNoCollapsedHeaderColor.style.color="#2B2B2B";
  // descriptionContentContact.classList.add="show";
  // ticketsNoCollapsedCard.style.display ="none";
  // ticketsNoCollapsedSum.style.display ="none";
  // ticketsNoCollapsedContainer1.style.display ="none";
  // ticket.style.paddingBottom='0';
})
const ticketsCollapsedEdit=document.getElementById('tickets-collapsed-edit')

ticketsCollapsedEdit.addEventListener('click', () =>{
  if (descriptionContentTicket.style.paddingBottom === "10%") {
    descriptionContentTicket.style.paddingBottom = "0%";
  } 
  else{
    descriptionContentTicket.style.paddingBottom = "10%";
  }
//   ticketsCollapsed.style.display ="none";
//   ticketsNoCollapsedHeader.style.display ="block";
//   ticketsNoCollapsedCard.style.display ="block";
//   ticketsNoCollapsedSum.style.display ="block";
//   ticketsNoCollapsedContainer1.style.display ="block";
//   ticket.style.paddingBottom='10%';
})


const email=document.getElementById('email')
const nextBtn2 = document.getElementById('btn-next2');
const contactCollapsed=document.getElementById('contact-collapsed')
const contactCollapsedEmail=document.getElementById('contact-collapsed-email')

email.addEventListener('input', function() {
  if (email.validity.valid){
    nextBtn2.classList.remove('description__no-next');
    nextBtn2.classList.add('description__yes-next');
    nextBtn2.type= "button";
    nextBtn2.setAttribute('data-bs-toggle', 'collapse');
  }
  let emailInput = email.value;
  contactCollapsedEmail.textContent = emailInput;

})


const paymentNoCollapsedHeaderColor = document.getElementById('payment-no-collapsed-header-color')
const payment = document.getElementById('payment')
const btnPay = document.getElementById('btn-pay')

nextBtn2.addEventListener('click', () =>{
  contactCollapsed.style.display ="flex";
  contactNoCollapsedHeader.style.display ="none";
  descriptionContentTicket.style.paddingBottom="0%";
  contactNoCollapsedHeader.style.color="#2B2B2B";
  contactCollapsedEmail.style.color="#2B2B2B";
  paymentNoCollapsedHeaderColor.style.color="#2B2B2B";
  payment.classList.add="show";
  btnPay.classList.remove('description__no-next');
  btnPay.classList.add('description__yes-next');
  btnPay.type= "button";
})

const contactCollapsedEdit=document.getElementById('contact-collapsed__edit')


contactCollapsedEdit.addEventListener('click', () =>{
  if (descriptionContentContact.style.paddingBottom === "0%") {
    descriptionContentContact.style.paddingBottom = "10%";
  } 
  else{
    descriptionContentContact.style.paddingBottom = "0%";
  }
//   ticketsCollapsed.style.display ="none";
//   ticketsNoCollapsedHeader.style.display ="block";
//   ticketsNoCollapsedCard.style.display ="block";
//   ticketsNoCollapsedSum.style.display ="block";
//   ticketsNoCollapsedContainer1.style.display ="block";
//   ticket.style.paddingBottom='10%';
})

// const radioButtons = document.querySelectorAll('input[type="radio"]');
// const radioButton = document.getElementById('flexRadioDefault3')

// const radioButtons = document.querySelectorAll('input[name="flexRadioDefault"]');

// for (const radioButton of radioButtons) {
//   if (radioButton.checked) {
//     btnPay.classList.remove('description__no-next');
//     btnPay.classList.add('description__yes-next');
//     btnPay.type= "button";
//     break;
//   }
// }
// radioButton.addEventListener('change', () =>{
//   btnPay.classList.remove('description__no-next');
//   btnPay.classList.add('description__yes-next');
//   btnPay.type= "button";
// })
// radioButtons.forEach(button => {
//   button.addEventListener('input', () => {
//     btnPay.classList.remove('description__no-next');
//     btnPay.classList.add('description__yes-next');
//     btnPay.type= "button";
//   });
// });

const agreement = document.getElementById('agreement');

agreement.addEventListener('click', () => {
  

  // if (this.checked) {

  //   btnPay.classList.remove('description__no-next');
  //   btnPay.classList.add('description__yes-next');
  //   btnPay.type= "button";
  // } else {

  //   console.log("Checkbox is unchecked");
  // }
});

