function extractCurrencyValue (string, rate) {
    let money = Number(string.slice(1)) * rate;
    console.log(money);
    
}

extractCurrencyValue("$120",30.5)