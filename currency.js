class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency
    this.secondCurrency = secondCurrency
    this.url = 'https://api.exchangeratesapi.io/latest?base='
    this.err = "Errorrr 401"
    this.amount = null
  }
  exchange() {
    return new Promise((resolve,reject) =>{
    fetch(this.url + this.firstCurrency)
      .then((response) => response.json())
      .then((data) => {
        const parity = data["rates"][this.secondCurrency]
        const amount1 = Number(this.amount)

        let total = parity * amount1
        resolve(total)
      })
      .catch((err) => reject(new Error(this.err)))
    })
  }
  changeAmount(amount) {
    this.amount = amount
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency
  }
}
