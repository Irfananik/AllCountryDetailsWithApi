// load all countries using rest api link
const loadCountriesInfo = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Process the response data
            displayCountriesInfo(data)
        })
        .catch(error => {
            // Handle any errors
            console.error(error)
        });
}

// display countries data on card 
const displayCountriesInfo = (getCountries) => {
    const countriesContainer = document.getElementById('countries-container')
    getCountries.forEach(getCountry => {
        //console.log(getCountry)
        const getCountriesDiv = document.createElement('div')
        getCountriesDiv.classList.add('col')
        getCountriesDiv.innerHTML = `
        <div class="bg-red-400 p-4 rounded-lg shadow-lg">
            <img src="${getCountry.flags.png}" alt="">
            <h2 class="text-lg text-white font-bold mb-2">Name: ${getCountry.name.common}</h2>
            
            <button onclick="loadCountryDetails('${getCountry.cca2}')"
                class="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 focus:outline-none mt-4">Details</button>
            <button onclick="scrollToTop()"
                class="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 focus:outline-none mt-4"><i class="fa-solid fa-arrow-up"></i></i></button>
        </div>
        `
        countriesContainer.appendChild(getCountriesDiv)
    })
}

loadCountriesInfo()

//country details load
const loadCountryDetails = (data) => {
    const url = `https://restcountries.com/v3.1/alpha?codes=${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayCountryDetails(data[0])
        })
        .catch(error => {
            console.log(error)
        })
}

//display country details
const displayCountryDetails = (getCountryDetails) => {
    const countryDetailsContainer = document.getElementById('country-details-container')
    countryDetailsContainer.innerHTML = ``
    const getCountryDetailsDiv = document.createElement('div')
    getCountryDetailsDiv.classList.add('col')
    getCountryDetailsDiv.innerHTML = `
    <div class="bg-red-400 p-4 rounded-lg shadow-lg me-4">
        <img src="${getCountryDetails.flags?.png}" alt="">
        <h2 class="text-lg text-white font-bold mb-2">Name: ${getCountryDetails.name.common}</h2>
        <p class="text-gray-300">Official Name: ${getCountryDetails.name.official}</p>
        <p class="text-gray-300">Capital: ${getCountryDetails.capital ? getCountryDetails.capital : 'No exist'}</p>
        <p class="text-gray-300">Region: ${getCountryDetails.region}</p>
        <p class="text-gray-300">independent Status: ${getCountryDetails.independent}</p>
    </div>
    `
    countryDetailsContainer.appendChild(getCountryDetailsDiv)
}


// data load and show by search box
const loadCountryDetailsBySearchBox = (data) => {
    const url = `https://restcountries.com/v3.1/name/${data}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayCountryDetails(data[0])
        })
        .catch(error => {
            console.log(error)
        })
}

// search button funcionality
const countryDetailsBySearchBox = () =>{
    const countryDetailsInputField = document.getElementById('country-details-input-field')
    const countryDetailsInputFieldText = countryDetailsInputField.value
    loadCountryDetailsBySearchBox(countryDetailsInputFieldText)
    countryDetailsInputField.value = ''
}

// Scroll to the top of the page function
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }