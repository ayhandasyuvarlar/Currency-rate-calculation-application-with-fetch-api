/// Element Section

const amountElement = document.querySelector('#amount')
const firstSelect = document.querySelector('#firstCurrency')
const secondSelect = document.querySelector('#secondCurrency')
const currency = new Currency("USD", "TRY")
const ui = new UI(firstSelect,secondSelect)


eventListeners()

function eventListeners() {
  amountElement.addEventListener('input', exChanceCurrency),
    firstSelect.onchange = function () {
         currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)
          ui.changeFirst();
    };
    secondSelect.onchange =function(){
         currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)
         ui.changeSecond();
    };
    
}


function exChanceCurrency(){
    currency.changeAmount(amountElement.value)
    currency.exchange()
    .then(resolve =>console.log(resolve))
    .catch(err =>console.log(err))
}


