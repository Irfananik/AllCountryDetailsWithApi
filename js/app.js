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
        console.log(getCountry)
        const getCountriesDiv = document.createElement('div')
        getCountriesDiv.classList.add('col')
        getCountriesDiv.innerHTML = `
        <div class="bg-red-400 p-4 rounded-lg shadow-lg">
            <img src="${getCountry.flags.png}" alt="">
            <h2 class="text-lg text-white font-bold mb-2">Name: ${getCountry.name.common}</h2>
            <p class="text-gray-300">Capital: ${getCountry.capital ? getCountry.capital : 'No exist'}</p>
            <button onclick="loadCountryDetails('${getCountry.cca2}')"
                class="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 focus:outline-none mt-4">Details</button>
        </div>
        `
        countriesContainer.appendChild(getCountriesDiv)
    })
}

//show country details load
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

const displayCountryDetails = (getCountryDetails) => {
    const countryDetailsContainer = document.getElementById('country-details-container')
    const getCountryDetailsDiv = document.createElement('div')
    getCountryDetailsDiv.classList.add('col')
    getCountryDetailsDiv.innerHTML = `
    <div class="bg-red-400 p-4 rounded-lg shadow-lg">
        <img src="${getCountryDetails.flags.png}" alt="">
        <h2 class="text-lg text-white font-bold mb-2">Name: ${getCountryDetails.name.common}</h2>
        <p class="text-gray-300">Capital: ${getCountryDetails.capital ? getCountryDetails.capital : 'No exist'}</p>
    </div>
    `
    countryDetailsContainer.appendChild(getCountryDetailsDiv)
}

loadCountriesInfo()