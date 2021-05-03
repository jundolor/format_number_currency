import countryLocaleCurrency from './country_locale_currency.js';

console.log(countryLocaleCurrency);

const form = document.querySelector("#form");
const amount = document.querySelector("#amount");
const countryList = document.querySelector("#country");
const formatted = document.querySelector("#formatted");

const populateCountry = () => {
    countryLocaleCurrency.forEach(item => {
        let country = item.country;
        let localeCurrency = `${item.locale}:${item.currency}`;

        let option = document.createElement("option");
        option.value = localeCurrency;
        option.innerText = country;

        countryList.appendChild(option);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let amountValue = amount.value;
    let arrValue = countryList.value.split(":");

    let formattedValue = new Intl.NumberFormat(arrValue[0], { style: 'currency', currency: arrValue[1] }).format(amountValue);

    console.log(formattedValue);
    formatted.innerText = `Formatted value: ${formattedValue}`;
})

populateCountry();